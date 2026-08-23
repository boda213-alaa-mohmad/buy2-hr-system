"use client";
import { useRef } from "react";
import DashboardCard from "@/Components/shared/card/DashboardCard";
import styles from "./Recognition.module.css";
import { ChevronLeft, ChevronRight, ThumbsUp } from "lucide-react";
import Image from "next/image";

interface Employee {
  id: string;
  name: string;
  title: string;
  points: number;
  date: string;
  image: string;
}

const employees: Employee[] = [
  {
    id: "1",
    name: "Darrell Stewart",
    title: "Mr. Punctuality",
    points: 20,
    date: "Tue 27 Aug 2024",
    image: "/images/avatar.jpg",
  },
  {
    id: "2",
    name: "Sarah Williams",
    title: "Problem Solver",
    points: 45,
    date: "Thu 29 Aug 2024",
    image: "/images/avatar.jpg",
  },
  {
    id: "3",
    name: "Michael Brown",
    title: "Top Performer",
    points: 50,
    date: "Fri 30 Aug 2024",
    image: "/images/avatar.jpg",
  },
  {
    id: "4",
    name: "Michael Brown",
    title: "Performer",
    points: 10,
    date: "Fri 21 Jan 2024",
    image: "/images/avatar.jpg",
  },
];

export default function RecognitionCard() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <DashboardCard
      title="Recognitions"
      subtitle="Celebrating the hard work of our top employees!"
      actions={
        <button type="button" className={styles.viewAllBtn}>
          View All
        </button>
      }
    >
      <div
        className={styles.RequestContainer}
        role="region"
        aria-label="Recognitions carousel"
      >
        {/* Left Arrow */}
        <button
          type="button"
          aria-label="Previous employee"
          className={styles.prevBtn}
          onClick={() => handleScroll("left")}
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>

        {/* Card Container */}
        <div
          ref={scrollContainerRef}
          className={styles.cardContainer}
          tabIndex={0}
          aria-label="Recognized employees list"
        >
          {employees.map((emp) => (
            <article key={emp.id} className={styles.card}>
              <div className={styles.cardContent}>
                {/* Image */}
                <div className={styles.imageContainer}>
                  <Image
                    className={styles.img}
                    src={emp.image}
                    alt={`${emp.name}'s profile picture`}
                    fill
                  />
                </div>

                <div className={styles.userinfo}>
                  <h3 className={styles.title}>{emp.title}</h3>

                  <div className={styles.ribbonContainer}>
                    <Image
                      src="/icons/full Frame.svg"
                      width={200}
                      height={50}
                      alt={`Recognition badge for ${emp.name}`}
                    />
                  </div>

                  {/* Bottom Section */}
                  <div className={styles.bottomSection}>
                    <div className={styles["date-thumps-number"]}>
                      <div
                        className={styles["thumps-number"]}
                        aria-label={`Received ${emp.points} points`}
                      >
                        <ThumbsUp
                          size={20}
                          color="#EAB308"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                        <span>+{emp.points}</span>
                      </div>
                      <time className={styles.date}>{emp.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          type="button"
          aria-label="Next employee"
          className={styles.nextBtn}
          onClick={() => handleScroll("right")}
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>
    </DashboardCard>
  );
}
