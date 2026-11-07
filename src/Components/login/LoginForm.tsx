"use client";

import Image from "next/image";

import styles from "./LoginForm.module.css";
import { useState, useActionState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";

import { submitForm } from "@/actions/loginAction";
import { initialState } from "@/data/actions";

export default function LoginForm() {
  // because when I press enter the fields removed so I will keep it by controlled field
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");
  const [countError, setCount] = useState<number>(0);
  const [showGeneralError, setShowGeneralError] = useState(false);

  const [eye, setEye] = useState(false);

  const [formState, formAction, isPending] = useActionState(
    submitForm,
    initialState,
  );

  useEffect(() => {
    if (formState?.messageAdminNotFound) {
      setCount((prev) => prev + 1);
      setShowGeneralError(true);
      setInputEmail("");
      setInputPassword("");
    }
  }, [formState]);

  useEffect(() => {
    if (countError >= 3) {
      const id = window.setTimeout(() => {
        setCount(0);
        setShowGeneralError(false);
      }, 60000);

      return () => window.clearTimeout(id);
    }
  }, [countError]);

  return (
    <div className={styles.formContainer}>
      <div className={styles.formWrapper}>
        <div className={styles.logoWrapper}>
          <Image
            src="/images/logo.png"
            alt="Buy2 Logo"
            width={120}
            height={50}
            priority
          />
        </div>

        <div className={styles.headerText}>
          <h1>Welcome!</h1>
          <p>Please login to continue</p>
        </div>

        <form action={formAction} className={styles.form}>
          {/* Email */}
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email Address</label>

            <div className={styles.inputWrapper}>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                name="email"
              />

              <span className={styles.icon}>✉️</span>
            </div>

            {/* Email Error */}
            {formState?.messageEmail && (
              <p className={styles.errorMessage}>{formState.messageEmail}</p>
            )}
          </div>

          {/* Password */}
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>

            <div className={styles.inputWrapper}>
              <input
                id="password"
                type={eye ? "text" : "password"}
                placeholder="Enter your password"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                name="password"
              />

              <button
                type="button"
                onClick={() => setEye(!eye)}
                className={styles.icon}
              >
                {eye ? <EyeOff /> : <Eye />}
              </button>
            </div>

            {/* Password Error */}
            {formState?.messagePassword && (
              <p className={styles.errorMessage}>{formState.messagePassword}</p>
            )}
          </div>

          {/* General Message */}
          {showGeneralError && countError < 3 && (
            <p className={styles.generalError}>
              {formState.messageAdminNotFound}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className={styles.submitBtn}
            disabled={isPending || countError >= 3}
          >
            {countError >= 3
              ? "wait 1 min to try again"
              : isPending
                ? "Authenticating..."
                : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
}
