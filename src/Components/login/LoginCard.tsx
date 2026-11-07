"use client";

import Image from "next/image";
import styles from "./LoginCard.module.css";
import { useState, useEffect } from "react";
import { images } from "@/data/images";

export default function LoginCard() {
  const [stateImage, setSateImage] = useState<number>(0);

  // Current slide
  const currentSlide = images[stateImage];

  useEffect(() => {
    const id = window.setInterval(() => {
      setSateImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => {
      window.clearInterval(id);
    };
  }, []);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.innerBorder}>
        <div className={styles.graphicArea}>
          <div className={styles.personCircle}>
            <Image
              key={stateImage}
              src={currentSlide.pathUrl}
              alt="Employee"
              width={240}
              height={240}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className={styles.textArea}>
          <h2 key={`title-${stateImage}`}>{currentSlide.title}</h2>

          <p key={`description-${stateImage}`}>{currentSlide.description}</p>

          <div className={styles.pagination}>
            {images.map((dot, index) => (
              <span
                key={dot.id}
                onClick={() => setSateImage(index)}
                className={index === stateImage ? styles.activeDot : styles.dot}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
