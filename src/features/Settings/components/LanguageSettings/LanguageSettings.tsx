"use client";
import Image from "next/image";
import styles from "./LanguageSettings.module.css";
import { useState } from "react";
import ConfirmModal from "@/Components/shared/ConfirmModal/ConfirmModal";
import { CheckCircle2 } from "lucide-react";

export default function LanguageTab() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenDiscard, setIsOpenDiscard] = useState<boolean>(false);
  return (
    <div className={styles.cardContainer}>
      <h3 className={styles.title}>Change Language</h3>

      <div className={styles.optionsGroup}>
        {/* Arabic Option */}
        <label className={styles.optionLabel}>
          <input
            type="radio"
            name="language"
            value="ar"
            className={styles.radioInput}
          />
          <Image
            src="https://flagcdn.com/w40/sa.png"
            alt="Saudi Arabia Flag"
            width={24}
            height={16}
            className={styles.flagIcon}
          />
          <span className={styles.labelText}>Arabic</span>
        </label>

        {/* English Option */}
        <label className={styles.optionLabel}>
          <input
            type="radio"
            name="language"
            value="en"
            defaultChecked
            className={styles.radioInput}
          />
          <Image
            src="https://flagcdn.com/w40/gb.png"
            alt="UK Flag"
            width={24}
            height={16}
            className={styles.flagIcon}
          />
          <span className={styles.labelText}>English</span>
        </label>
      </div>

      <button
        type="button"
        className={styles.applyButton}
        onClick={() => setIsOpen(true)}
      >
        Apply changes
      </button>

      <button
        type="button"
        className={styles.discardButton}
        onClick={() => setIsOpenDiscard(true)}
      >
        Discard
      </button>
      {isOpen && (
        <ConfirmModal
          icon={<CheckCircle2 size={48} />}
          onClose={() => {
            setIsOpen(false);
          }}
          variant="success"
        >
          <div className={styles.containerMessageDeleting}>
            <h2 className={styles.message}>Update Successfully</h2>
            <p className={styles.confirmMessage}>
              language is updated successfully
            </p>
            <div className={styles.btnContainer}>
              <button
                className={`${styles.btn} ${styles.gotItBtn}`}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Got it
              </button>
            </div>
          </div>
        </ConfirmModal>
      )}
      {isOpenDiscard && (
        <ConfirmModal
          icon={<CheckCircle2 size={48} />}
          onClose={() => {
            setIsOpenDiscard(false);
          }}
          variant="danger"
        >
          <div className={styles.containerMessageDeleting}>
            <h2 className={styles.message}>Discard Changes?</h2>
            <p className={styles.confirmMessage}>
              Are you sure you want to discard the changes you made to the
              language settings?
            </p>
            <div className={styles.btnContainer}>
              <button
                className={`${styles.btn} ${styles.cancel}`}
                onClick={() => {
                  setIsOpenDiscard(false);
                }}
              >
                cancel
              </button>
              <button
                className={`${styles.btn} ${styles.delete}`}
                onClick={() => {
                  setIsOpenDiscard(false);
                }}
              >
                Discard
              </button>
            </div>
          </div>
        </ConfirmModal>
      )}
    </div>
  );
}
