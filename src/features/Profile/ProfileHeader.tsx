"use client";
import Link from "next/link";
import { ChevronLeft, User, Award } from "lucide-react";
import styles from "./ProfileHeader.module.css";
import { useState, useContext } from "react";
import FullInfo from "./Full-info";
import Image from "next/image";
import { profileImageProvider } from "@/context/profileProvider";

export default function ProfileHeader() {
  const [open, setOpen] = useState<boolean>(false);

  const imageProfile = useContext(profileImageProvider);

  return (
    <div className={styles.wrapper}>
      <div className={styles.topBar}>
        <Link href="/dashboard" className={styles.backBtn}>
          <ChevronLeft size={18} />
          <span>Back</span>
        </Link>
        <h1 className={styles.pageTitle}>Employee Profile</h1>
      </div>

      <div className={styles.card}>
        <div className={styles.leftSection}>
          <div
            className={`${styles.avatarWrapper} ${
              imageProfile.image ? styles.hasImage : ""
            }`}
          >
            {imageProfile.image ? (
              <Image
                src={imageProfile.image}
                alt="profile avatar"
                width={40}
                height={40}
              />
            ) : (
              <User size={40} className={styles.avatarIcon} />
            )}
          </div>

          <div className={styles.infoGrid}>
            <div className={styles.nameRow}>
              <h2 className={styles.name}>Saif Ahmed</h2>
              <span
                onClick={() => {
                  setOpen(true);
                }}
                className={styles.fullInfo}
              >
                Full Info
              </span>
            </div>

            <div className={styles.detailsRow}>
              <div className={styles.field}>
                <span className={styles.label}>Role</span>
                <span className={styles.value}>React developer</span>
              </div>
              <div className={styles.field}>
                <span className={styles.label}>Phone number</span>
                <span className={styles.value}>(+989) 099943232555</span>
              </div>
              <div className={styles.field}>
                <span className={styles.label}>Email address</span>
                <span className={styles.value}>mohamedahmed@grandtech.io</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.pointsBox}>
          <div className={styles.pointsIconWrapper}>
            <Award size={22} />
          </div>
          <div className={styles.pointsInfo}>
            <span className={styles.pointsTitle}>Total Points</span>
            <span className={styles.pointsValue}>2580</span>
          </div>
        </div>
      </div>
      {open && (
        <FullInfo
          onClose={() => {
            setOpen(false);
          }}
        />
      )}
    </div>
  );
}
