"use client";
import Link from "next/link";
import { ChevronLeft, Search } from "lucide-react";
import styles from "./page.module.css";
import { teamMembers } from "@/data/teamMembers";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function MyTeamPage() {
  const [input, setInput] = useState<string>("");
  const [filter, setFilter] = useState(teamMembers);

  useEffect(() => {
    setFilter(
      teamMembers.filter((item) => {
        return item.name.toLowerCase().includes(input.toLowerCase().trim());
      }),
    );
  }, [input]);

  return (
    <div className={styles.container}>
      {/* Top Bar: Back button and Title */}
      <div className={styles.topBar}>
        <Link href="/dashboard/profile" className={styles.backBtn}>
          <ChevronLeft size={20} />
          <span>Back</span>
        </Link>
        <h1 className={styles.pageTitle}>My Team</h1>
      </div>

      {/* Search Bar */}
      <div className={styles.searchBarContainer}>
        <Search className={styles.searchIcon} size={20} />
        <input
          type="text"
          placeholder="Search team members..."
          className={styles.searchInput}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>

      {/* Team Members Grid or No Matches State */}
      {filter.length > 0 ? (
        <div className={styles.grid}>
          {filter.map((member, index) => (
            <div key={index} className={styles.memberCard}>
              <div className={styles.userInfo}>
                <div className={styles.avatarWrapper}>
                  <Image
                    src={member.image}
                    alt="image user"
                    width={45}
                    height={45}
                  />
                </div>
                <div className={styles.textContainer}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <span className={styles.memberRole}>{member.role}</span>
                </div>
              </div>
              <span className={styles.score}>{member.score}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.noResultsContainer}>
          <div className={styles.noResultsIconWrapper}>
            <Search size={32} className={styles.noResultsIcon} />
          </div>
          <h3 className={styles.noResultsTitle}>No team members found</h3>
          <p className={styles.noResultsDesc}>
            {`We couldn't find any results matching "${input}". Try checking for typos.`}
          </p>
        </div>
      )}
    </div>
  );
}
