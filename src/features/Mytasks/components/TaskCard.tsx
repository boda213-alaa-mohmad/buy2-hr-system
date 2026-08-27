import styles from "./TaskCard.module.css";
import { Pencil, Trash2, Eye, Calendar, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function TaskCard() {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <header className={styles.header}>
          <h3 className={styles["list-name"]}>List Name</h3>
          <div className={styles.iconsContainer}>
            <Pencil size={20} className={`${styles.pencil} ${styles.icons}`} />
            <Trash2 size={20} className={`${styles.trash} ${styles.icons}`} />
            <Eye size={20} className={`${styles.eye} ${styles.icons}`} />
          </div>
        </header>

        <div className={styles.contentCard}>
          {/* content task */}
          <div className={styles.taskName}>
            <p>Revision 1: Fixing Navbar at Dashboard </p>
          </div>

          {/* date with low or high */}
          <div className={styles.containerDate}>
            <div className={styles.calendarWithText}>
              <p>Set due date</p>
              <Calendar size={20} className={styles.icons} />
            </div>
            {/* low or high or medium */}
            <div className={styles.chevronDownWithText}>
              <ChevronDown
                className={`${styles.chevronDown} ${styles.icons} `}
                size={20}
              />
              <span>Low</span>
            </div>
          </div>

          {/* footer card */}
          <div className={styles.footer}>
            <Image
              className={styles.img}
              src={"https://i.pravatar.cc/100?img=1"}
              alt="avatar"
              width={40}
              height={40}
            />
            <p>Ahmed Mohmed</p>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <header className={styles.header}>
          <h3 className={styles["list-name"]}>List Name</h3>
          <div className={styles.iconsContainer}>
            <Pencil size={20} className={`${styles.pencil} ${styles.icons}`} />
            <Trash2 size={20} className={`${styles.trash} ${styles.icons}`} />
            <Eye size={20} className={`${styles.eye} ${styles.icons}`} />
          </div>
        </header>

        <div className={styles.contentCard}>
          {/* content task */}
          <div className={styles.taskName}>
            <p>Revision 1: Fixing Navbar at Dashboard </p>
          </div>

          {/* date with low or high */}
          <div className={styles.containerDate}>
            <div className={styles.calendarWithText}>
              <p>Set due date</p>
              <Calendar size={20} className={styles.icons} />
            </div>
            {/* low or high or medium */}
            <div className={styles.chevronDownWithText}>
              <ChevronDown
                className={`${styles.chevronDown} ${styles.icons} `}
                size={20}
              />
              <span>Low</span>
            </div>
          </div>

          {/* footer card */}
          <div className={styles.footer}>
            <Image
              className={styles.img}
              src={"https://i.pravatar.cc/100?img=1"}
              alt="avatar"
              width={40}
              height={40}
            />
            <p>Ahmed Mohmed</p>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <header className={styles.header}>
          <h3 className={styles["list-name"]}>List Name</h3>
          <div className={styles.iconsContainer}>
            <Pencil size={20} className={`${styles.pencil} ${styles.icons}`} />
            <Trash2 size={20} className={`${styles.trash} ${styles.icons}`} />
            <Eye size={20} className={`${styles.eye} ${styles.icons}`} />
          </div>
        </header>

        <div className={styles.contentCard}>
          {/* content task */}
          <div className={styles.taskName}>
            <p>Revision 1: Fixing Navbar at Dashboard </p>
          </div>

          {/* date with low or high */}
          <div className={styles.containerDate}>
            <div className={styles.calendarWithText}>
              <p>Set due date</p>
              <Calendar size={20} className={styles.icons} />
            </div>
            {/* low or high or medium */}
            <div className={styles.chevronDownWithText}>
              <ChevronDown
                className={`${styles.chevronDown} ${styles.icons} `}
                size={20}
              />
              <span>Low</span>
            </div>
          </div>

          {/* footer card */}
          <div className={styles.footer}>
            <Image
              className={styles.img}
              src={"https://i.pravatar.cc/100?img=1"}
              alt="avatar"
              width={40}
              height={40}
            />
            <p>Ahmed Mohmed</p>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <header className={styles.header}>
          <h3 className={styles["list-name"]}>List Name</h3>
          <div className={styles.iconsContainer}>
            <Pencil size={20} className={`${styles.pencil} ${styles.icons}`} />
            <Trash2 size={20} className={`${styles.trash} ${styles.icons}`} />
            <Eye size={20} className={`${styles.eye} ${styles.icons}`} />
          </div>
        </header>

        <div className={styles.contentCard}>
          {/* content task */}
          <div className={styles.taskName}>
            <p>Revision 1: Fixing Navbar at Dashboard </p>
          </div>

          {/* date with low or high */}
          <div className={styles.containerDate}>
            <div className={styles.calendarWithText}>
              <p>Set due date</p>
              <Calendar size={20} className={styles.icons} />
            </div>
            {/* low or high or medium */}
            <div className={styles.chevronDownWithText}>
              <ChevronDown
                className={`${styles.chevronDown} ${styles.icons} `}
                size={20}
              />
              <span>Low</span>
            </div>
          </div>

          {/* footer card */}
          <div className={styles.footer}>
            <Image
              className={styles.img}
              src={"https://i.pravatar.cc/100?img=1"}
              alt="avatar"
              width={40}
              height={40}
            />
            <p>Ahmed Mohmed</p>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <header className={styles.header}>
          <h3 className={styles["list-name"]}>List Name</h3>
          <div className={styles.iconsContainer}>
            <Pencil size={20} className={`${styles.pencil} ${styles.icons}`} />
            <Trash2 size={20} className={`${styles.trash} ${styles.icons}`} />
            <Eye size={20} className={`${styles.eye} ${styles.icons}`} />
          </div>
        </header>

        <div className={styles.contentCard}>
          {/* content task */}
          <div className={styles.taskName}>
            <p>Revision 1: Fixing Navbar at Dashboard </p>
          </div>

          {/* date with low or high */}
          <div className={styles.containerDate}>
            <div className={styles.calendarWithText}>
              <p>Set due date</p>
              <Calendar size={20} className={styles.icons} />
            </div>
            {/* low or high or medium */}
            <div className={styles.chevronDownWithText}>
              <ChevronDown
                className={`${styles.chevronDown} ${styles.icons} `}
                size={20}
              />
              <span>Low</span>
            </div>
          </div>

          {/* footer card */}
          <div className={styles.footer}>
            <Image
              className={styles.img}
              src={"https://i.pravatar.cc/100?img=1"}
              alt="avatar"
              width={40}
              height={40}
            />
            <p>Ahmed Mohmed</p>
          </div>
        </div>
      </div>
      {/* card */}{" "}
      <div className={styles.card}>
        <header className={styles.header}>
          <h3 className={styles["list-name"]}>List Name</h3>
          <div className={styles.iconsContainer}>
            <Pencil size={20} className={`${styles.pencil} ${styles.icons}`} />
            <Trash2 size={20} className={`${styles.trash} ${styles.icons}`} />
            <Eye size={20} className={`${styles.eye} ${styles.icons}`} />
          </div>
        </header>

        <div className={styles.contentCard}>
          {/* content task */}
          <div className={styles.taskName}>
            <p>Revision 1: Fixing Navbar at Dashboard </p>
          </div>

          {/* date with low or high */}
          <div className={styles.containerDate}>
            <div className={styles.calendarWithText}>
              <p>Set due date</p>
              <Calendar size={20} className={styles.icons} />
            </div>
            {/* low or high or medium */}
            <div className={styles.chevronDownWithText}>
              <ChevronDown
                className={`${styles.chevronDown} ${styles.icons} `}
                size={20}
              />
              <span>Low</span>
            </div>
          </div>

          {/* footer card */}
          <div className={styles.footer}>
            <Image
              className={styles.img}
              src={"https://i.pravatar.cc/100?img=1"}
              alt="avatar"
              width={40}
              height={40}
            />
            <p>Ahmed Mohmed</p>
          </div>
        </div>
      </div>
      {/* card */}{" "}
      <div className={styles.card}>
        <header className={styles.header}>
          <h3 className={styles["list-name"]}>List Name</h3>
          <div className={styles.iconsContainer}>
            <Pencil size={20} className={`${styles.pencil} ${styles.icons}`} />
            <Trash2 size={20} className={`${styles.trash} ${styles.icons}`} />
            <Eye size={20} className={`${styles.eye} ${styles.icons}`} />
          </div>
        </header>

        <div className={styles.contentCard}>
          {/* content task */}
          <div className={styles.taskName}>
            <p>Revision 1: Fixing Navbar at Dashboard </p>
          </div>

          {/* date with low or high */}
          <div className={styles.containerDate}>
            <div className={styles.calendarWithText}>
              <p>Set due date</p>
              <Calendar size={20} className={styles.icons} />
            </div>
            {/* low or high or medium */}
            <div className={styles.chevronDownWithText}>
              <ChevronDown
                className={`${styles.chevronDown} ${styles.icons} `}
                size={20}
              />
              <span>Low</span>
            </div>
          </div>

          {/* footer card */}
          <div className={styles.footer}>
            <Image
              className={styles.img}
              src={"https://i.pravatar.cc/100?img=1"}
              alt="avatar"
              width={40}
              height={40}
            />
            <p>Ahmed Mohmed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
