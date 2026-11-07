import LoginForm from "@/Components/login/LoginForm";
import LoginCard from "@/Components/login/LoginCard";

import styles from "./page.module.css";

export default function LoginPage() {
  return (
    <main className={styles.loginMain}>
      <LoginForm />
      <LoginCard />
    </main>
  );
}
