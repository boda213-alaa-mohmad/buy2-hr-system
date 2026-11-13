"use client";
import styles from "./Full-info.module.css";
import {
  X,
  Phone,
  IdCardLanyard,
  Mail,
  MapPin,
  Cake,
  Info,
  User,
  Pencil,
} from "lucide-react";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function FullInfo({ onClose }: { onClose: () => void }) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<string | null>(null);

  // ? file reader ===> read the content of file
  // file ---> object name, size, ..... by <input type="file" />
  // fileList more that on file
   // fileList ===> return more than on file <input type="file" multiple />

useEffect(() => {
  try {
    const savedImage = localStorage.getItem("profile-image");

    if (savedImage) {
      setImage(savedImage);
    }
  } catch (error) {
    console.error("Error loading image:", error);
  }
}, []);

useEffect(() => {
  if (image === null) return;

  try {
    localStorage.setItem("profile-image", image);
  } catch (error) {
    console.error("Error saving image:", error);
  }
}, [image]);

  function handleChange() {
    inputRef.current?.click();
  }

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const fileChosen = e.target.files?.[0];

    if (!fileChosen) return;

    // reading file
    const fileReader = new FileReader();

    fileReader.onload = () => {
      if (typeof fileReader.result === "string") setImage(fileReader.result);
    };

    fileReader.readAsDataURL(fileChosen);
  }
  return (
    <div className={styles.container} onClick={onClose}>
      <div
        className={styles.containerCard}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.card}>
          {/* more detils and X */}
          <div className={styles.moreDetailsContainer}>
            <h2>More Details</h2>
            <X size={25} className={styles.iconX} onClick={onClose} />
          </div>

          {/* profile */}
          <div className={styles.profileCard}>
            <div
              className={`${styles.avatarContainer} ${
                image ? styles.hasImage : ""
              }`}
            >
              {image ? (
                <Image src={image} alt="user icon" width={45} height={45} />
              ) : (
                <User size={45} className={styles.avatarIcon} />
              )}
              <input
                type="file"
                hidden
                ref={inputRef}
                onChange={handleFileSelect}
              />
              <div className={styles.editBadge} onClick={handleChange}>
                <Pencil size={12} className={styles.editIcon} />
              </div>
            </div>
            <div>
              <h3 className={styles.profileName}>Mohamed Ahmed</h3>
              <p className={styles.profileJoined}>Joined : 20-03-2020</p>
            </div>
          </div>

          {/* role, phone, email Address */}
          <div className={styles.cardsContainer}>
            {/* for padding left */}
            <div>
              <IdCardLanyard size={20} className={styles.icon} />
              <span className={styles.title}>Role</span>
              <p className={styles.details}>Flutter developer</p>
            </div>

            <div>
              <Phone size={20} className={styles.icon} />
              <span className={styles.title}>Phone number</span>
              <p className={styles.details}> (+989) 099943232555</p>
            </div>
            <div>
              <Mail size={20} className={styles.icon} />
              <span className={styles.title}>Email address</span>
              <p className={styles.details}>mohamedahmed@grandtech.io</p>
            </div>
          </div>

          {/* birthday and location */}
          <div className={styles.cardsContainer}>
            <div>
              <Cake size={20} className={styles.icon} />
              <span className={styles.title}>Birthday</span>
              <p className={styles.details}>October 1, 1996</p>
            </div>
            <div>
              <MapPin size={20} className={styles.icon} />
              <span className={styles.title}>Registered Address</span>
              <p className={styles.details}>55 Boulevard, Dubai</p>
            </div>
          </div>

          {/* important notice */}
          <div className={`${styles.specialCard} ${styles.cardsContainer}`}>
            <div className={styles.infoNoticeCard}>
              <Info size={35} className={styles.iconInfo} />
              <div>
                <h4 className={styles.titleNotice}>Important notice</h4>
                <p className={styles.descNotice}>
                  If any of the presented details is incorrect, please contact
                  HR to adjust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
