"use client";
import { useRef } from "react";
import DashboardCard from "@/Components/shared/card/DashboardCard";
import styles from "./RequestsCard.module.css";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

interface SickLeave {
  id: string;
  date: string;
  status: "Pending" | "Rejected" | "Approved";
  startTime: string;
  endTime: string;
  title: string;
  description: string;
}

const sickLeaves: SickLeave[] = [
  {
    id: "1",
    date: "12 Nov",
    status: "Pending",
    startTime: "09:00 AM",
    endTime: "10:00 AM",
    title: "Sick Leave",
    description: "Lorem ipsum dolor sit amet,",
  },
  {
    id: "2",
    date: "15 Nov",
    status: "Approved",
    startTime: "10:00 AM",
    endTime: "12:00 PM",
    title: "Sick Leave",
    description: "Lorem ipsum dolor sit amet,",
  },
  {
    id: "3",
    date: "20 Nov",
    status: "Rejected",
    startTime: "09:00 AM",
    endTime: "11:00 AM",
    title: "Sick Leave",
    description: "Lorem ipsum dolor sit amet,",
  },
  {
    id: "4",
    date: "25 Nov",
    status: "Pending",
    startTime: "01:00 PM",
    endTime: "03:00 PM",
    title: "Sick Leave",
    description: "Lorem ipsum dolor sit amet,",
  },
];

export default function RequestCard() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 332;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <DashboardCard
      title="Request"
      subtitle="Your approved and pending requests."
      actions={
        <button type="button" className={styles.createBtn}>
          <Plus size={20} aria-hidden="true" />
          <span>Create Request</span>
        </button>
      }
    >
      <div
        className={styles.RequestContainer}
        role="region"
        aria-label="Requests carousel"
      >
        {/* Left Arrow */}
        <button
          type="button"
          aria-label="Previous requests"
          className={styles.prevBtn}
          onClick={() => handleScroll("left")}
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>

        {/* Cards Container */}
        <div
          ref={scrollContainerRef}
          className={styles.cardContainer}
          tabIndex={0}
          aria-label="Requests list"
        >
          {sickLeaves.map((sickleave) => (
            <article key={sickleave.id} className={styles.card}>
              {/* Top Section */}
              <div className={styles.topSection}>
                <div>
                  <p
                    className={styles.date}
                    aria-label={`Date: ${sickleave.date}`}
                  >
                    {sickleave.date}
                  </p>
                </div>

                <div>
                  <p
                    className={`${styles.status} ${
                      sickleave.status === "Pending"
                        ? styles.pending
                        : sickleave.status === "Rejected"
                          ? styles.rejected
                          : styles.approved
                    }`}
                    aria-label={`Status: ${sickleave.status}`}
                  >
                    {sickleave.status}
                  </p>
                </div>
              </div>

              {/* Bottom Section */}
              <div className={styles.bottomSection}>
                <h4 className={styles.title}>{sickleave.title}</h4>
                <p className={styles.timeWrapper}>
                  <time
                    dateTime={`${sickleave.startTime}-${sickleave.endTime}`}
                  >
                    {sickleave.startTime} - {sickleave.endTime}
                  </time>
                </p>
                <p className={styles.desc}>{sickleave.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          type="button"
          aria-label="Next requests"
          className={styles.nextBtn}
          onClick={() => handleScroll("right")}
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>
    </DashboardCard>
  );
}
