import Link from "next/link";
import styles from "./Header.module.css";
import { Search, Bell, UserRound } from "lucide-react";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* container search input with notification icon */}
      <div className={styles.searchContainer}>
        {/* //? search bar with input */}
        <div className={styles.searchBar}>
          <Search className={styles.searchIcon} size={20} />
          <input className={styles.input} placeholder="Search" />
        </div>

        {/* //? bell, userround, details user */}
        <div className={styles.userContainer}>
          <div className={styles.bell}>
            <Bell size={35} />
          </div>

          <Link href="/dashboard/profile" className={styles.profileLink}>
            <div className={styles.userRound}>
              <UserRound size={35} />
            </div>
            <div className={styles.userinfo}>
              <div>Mohmed Ahmed</div>
              <div>flutter developer</div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
