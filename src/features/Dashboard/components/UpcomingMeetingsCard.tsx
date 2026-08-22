"use client";
import { useRef } from "react";
import DashboardCard from "@/Components/shared/card/DashboardCard";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import styles from "./UpcomingMeetingsCard.module.css";
import Image from "next/image";

interface Meeting {
  id: string;
  day: string;
  month: string;
  title: string;
  time: string;
  attendeesCount: number;
  avatars: string[];
  daysLeft?: string;
}

const MEETINGS_DATA: Meeting[] = [
  {
    id: "1",
    day: "12",
    month: "Nov",
    title: "Design review",
    time: "09:00 AM - 10:00 AM",
    attendeesCount: 20,
    avatars: [
      "https://i.pravatar.cc/100?img=1",
      "https://i.pravatar.cc/100?img=2",
      "https://i.pravatar.cc/100?img=3",
    ],
    daysLeft: "3 days left",
  },
  {
    id: "2",
    day: "12",
    month: "Nov",
    title: "Design review",
    time: "09:00 AM - 10:00 AM",
    attendeesCount: 20,
    avatars: [
      "https://i.pravatar.cc/100?img=1",
      "https://i.pravatar.cc/100?img=2",
      "https://i.pravatar.cc/100?img=3",
    ],
  },
  {
    id: "3",
    day: "12",
    month: "Nov",
    title: "Design review",
    time: "09:00 AM - 10:00 AM",
    attendeesCount: 20,
    avatars: [
      "https://i.pravatar.cc/100?img=1",
      "https://i.pravatar.cc/100?img=3",
      "https://i.pravatar.cc/100?img=2",
    ],
  },
  {
    id: "4",
    day: "12",
    month: "Nov",
    title: "Design review",
    time: "09:00 AM - 10:00 AM",
    attendeesCount: 20,
    daysLeft: "5 days left",
    avatars: [
      "https://i.pravatar.cc/100?img=3",
      "https://i.pravatar.cc/100?img=2",
      "https://i.pravatar.cc/100?img=1",
    ],
  },
];

export default function UpcomingMeetingsCard() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <DashboardCard
      title="Upcoming meetings"
      subtitle="You can see the upcoming meetings here."
      actions={
        <div>
          <button type="button" className={styles.createBtn}>
            <Plus size={20} aria-hidden="true" /> Creating Meeting
          </button>
        </div>
      }
    >
      <div
        className={styles.carouselWrapper}
        role="region"
        aria-label="Upcoming meetings carousel"
      >
        <button
          type="button"
          aria-label="Previous meetings"
          className={`${styles.navBtn} ${styles.prevBtn}`}
          onClick={() => handleScroll("left")}
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>

        <div
          ref={scrollContainerRef}
          className={styles.meetingsContainer}
          tabIndex={0}
          aria-label="Meetings list"
        >
          {MEETINGS_DATA.map((meeting) => {
            return (
              <article key={meeting.id} className={styles.meetingItem}>
                {/* upper */}
                <div className={styles.topContent}>
                  <div
                    className={styles.dateBox}
                    aria-label={`Date: ${meeting.day} ${meeting.month}`}
                  >
                    <span className={styles.day}>{meeting.day}</span>
                    <span className={styles.month}>{meeting.month}</span>
                  </div>

                  {/* details */}
                  <div className={styles.details}>
                    <h4 className={styles.meetingTitle}>{meeting.title}</h4>
                    <p className={styles.meetingTime}>
                      <time>{meeting.time}</time>
                    </p>
                  </div>
                </div>

                {/* down */}
                <div className={styles.bottomContent}>
                  <div className={styles.attendeesSection}>
                    <div
                      className={styles.avatarGroup}
                      aria-label="Meeting attendees avatars"
                    >
                      {meeting.avatars.map((avatar, index) => {
                        return (
                          <Image
                            key={index}
                            src={avatar}
                            alt=""
                            aria-hidden="true"
                            width={50}
                            height={50}
                            className={styles.avatar}
                          />
                        );
                      })}
                    </div>
                    <span className={styles.attendeesCount}>
                      +{meeting.attendeesCount} attending
                    </span>
                  </div>
                  <div>
                    {meeting.daysLeft && (
                      <span className={styles.daysBadge}>
                        {meeting.daysLeft}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Next meetings"
          className={`${styles.navBtn} ${styles.nextBtn}`}
          onClick={() => handleScroll("right")}
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>
    </DashboardCard>
  );
}
