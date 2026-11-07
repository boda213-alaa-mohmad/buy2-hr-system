"use client";

// todo: make sure that active dashboard worked and accesbilty

import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";
import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  ListTodo,
  List,
  CalendarDays,
  ClipboardList,
  Clock3,
  ShoppingBag,
  Settings,
  CircleHelp,
  LogOut,
} from "lucide-react";
import { logout } from "@/actions/logoutAction";

export type SidebarItem = {
  title: string;
  href: string;
  icon: LucideIcon;
};

const sidebarItems: SidebarItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "My Tasks",
    href: "/dashboard/tasks",
    icon: ListTodo,
  },
  {
    title: "Lists",
    href: "/dashboard/lists",
    icon: List,
  },
  {
    title: "Attendance",
    href: "/dashboard/attendance",
    icon: CalendarDays,
  },
  {
    title: "Requests",
    href: "/dashboard/requests",
    icon: ClipboardList,
  },
  {
    title: "Shifts",
    href: "/dashboard/shifts",
    icon: Clock3,
  },
  {
    title: "Store",
    href: "/dashboard/store",
    icon: ShoppingBag,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
  {
    title: "Support",
    href: "/dashboard/support",
    icon: CircleHelp,
  },
];

export default function SideBar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="logo buy2"
          className={styles.img}
          width={107}
          height={50}
        />
      </Link>
      {sidebarItems.map(function (side, index) {
        const isActive = pathname === side.href;
        return (
          <Link href={side.href} key={index}>
            <div
              className={`${styles.containerIcons} ${isActive ? styles.active : ""}`}
            >
              <side.icon size={20} />
              {side.title}
            </div>
          </Link>
        );
      })}

      <form action={logout} className={styles.logoutForm}>
        <button type="submit" className={styles.logout}>
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </form>
    </div>
  );
}
