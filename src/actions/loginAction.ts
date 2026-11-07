"use server";

import { cookies } from "next/headers";

import { randomBytes } from "crypto";
import * as z from "zod";
import type { FormState } from "@/types/action";
import { redirect } from "next/navigation";
import { userAdmin } from "@/data/admins";

const EmailSchema = z.email("Please enter a valid email");

const PasswordSchema = z
  .string()
  .min(1, "Password is required")
  .min(8, "Password must be at least 8 characters")
  .max(20, "Password must not exceed 20 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number");

export async function submitForm(prevState: FormState, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // todo: validate email
  const resultEmail = EmailSchema.safeParse(email);
  if (resultEmail.success === false) {
    return {
      status: true,
      messageEmail: resultEmail.error.issues[0].message,
    };
  }

  // todo: validate password
  const resultPassword = PasswordSchema.safeParse(password);

  if (resultPassword.success === false) {
    return {
      status: true,
      messagePassword: resultPassword.error.issues[0].message,
    };
  }

  await new Promise((res) => setTimeout(res, 2000));

  const findAdmin = userAdmin.find(
    (admin) => admin.email === email && admin.password === password,
  );

  if (!findAdmin) {
    return {
      status: true,
      messageAdminNotFound: "this is not Admin here",
    };
  }

  const cookieStore = await cookies();
  const randomValue = randomBytes(32).toString("hex");

  cookieStore.set("admin", randomValue, {
    httpOnly: true,
    maxAge: 60 * 60 * 8,
    path: "/",
    sameSite: "lax",
  });

  redirect("/dashboard");
}
