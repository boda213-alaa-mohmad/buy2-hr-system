"use client";
import { useState } from "react";
import styles from "./PasswordFlow.module.css";
import ConfirmModal from "@/Components/shared/ConfirmModal/ConfirmModal";
import { Trash2, Eye, EyeOff, CheckCircle2 } from "lucide-react";

export default function PasswordFlow() {
  const password: string = "123456";
  const [inputPassword, setInputPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);
  const [isOpenSaveNewPassword, setIsOpenSaveNewPassword] =
    useState<boolean>(false);
  const [isOpenDiscard, setIsOpenDiscard] = useState<boolean>(false);

  // eyes for hidden or show the password
  const [showOldPassword, setShowOldPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  // validation for password
  const isFitLength = newPassword.length >= 8;
  const hasUpperCase = /[A-Z]/.test(newPassword);
  const hasLowerCase = /[a-z]/.test(newPassword);
  const hasNumber = /[0-9]/.test(newPassword);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);
  const isPasswordStrong: boolean =
    isFitLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;

  // Helper function to reset all fields completely
  function resetAll() {
    setInputPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
    setShowOldPassword(false);
    setShowNewPassword(false);
    setShowConfirmPassword(false);
    setHasError(false);
    setStep(1);
  }

  function keyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      if (step === 1) compareOldPassword();
      else if (step === 2) handleSavePassword();
    }
  }

  function compareOldPassword() {
    const isValid = inputPassword === password;
    if (isValid) {
      setHasError(false);
      setStep(2);
    } else {
      setHasError(true);
    }
  }

  function handleSavePassword() {
    if (!isPasswordStrong) {
      alert("Please satisfy all password requirements.");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      alert("Passwords do not match!");
      return;
    }

    setIsOpenSaveNewPassword(true);
  }

  return (
    <div className={styles.container}>
      {/* Stepper Header */}
      <div className={styles.stepper}>
        <div className={styles.stepItem}>
          <span
            className={`${styles.stepBadge} ${step >= 1 ? styles.activeBadge : ""}`}
          >
            1
          </span>
          <span
            className={`${styles.stepText} ${step >= 1 ? styles.activeText : ""}`}
          >
            Confirm Old Password
          </span>
        </div>

        <div className={styles.stepItem}>
          <span
            className={`${styles.stepBadge} ${step === 2 ? styles.activeBadge : ""}`}
          >
            2
          </span>
          <span
            className={`${styles.stepText} ${step === 2 ? styles.activeText : ""}`}
          >
            Create New Password
          </span>
        </div>
      </div>

      {/* Form Card */}
      <div className={styles.card}>
        {step === 1 ? (
          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Old password</label>
              <div className={styles.inputWrapper}>
                <input
                  type={showOldPassword ? "text" : "password"}
                  placeholder="Enter old password"
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                  onKeyDown={keyDown}
                  className={`${styles.input} ${hasError ? styles.inputError : ""}`}
                />
                <button
                  type="button"
                  className={styles.eyeBtn}
                  onClick={() => setShowOldPassword((prev) => !prev)}
                >
                  {showOldPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button className={styles.submitBtn} onClick={compareOldPassword}>
              Next
            </button>

            {hasError && (
              <p className={styles.errorText}>
                Password is incorrect, please try again.
              </p>
            )}
          </div>
        ) : (
          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>New Password</label>
              <div className={styles.inputWrapper}>
                <input
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className={styles.input}
                />
                <button
                  type="button"
                  className={styles.eyeBtn}
                  onClick={() => setShowNewPassword((prev) => !prev)}
                >
                  {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Confirm New Password</label>
              <div className={styles.inputWrapper}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm new password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  onKeyDown={keyDown}
                  className={styles.input}
                />
                <button
                  type="button"
                  className={styles.eyeBtn}
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Buttons Group */}
            <div className={styles.buttonGroup}>
              <button className={styles.saveBtn} onClick={handleSavePassword}>
                Save new password
              </button>

              <button
                type="button"
                className={styles.discardBtn}
                onClick={() => setIsOpenDiscard(true)}
              >
                Discard
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Password Requirements Validation Card */}
      {step === 2 && (
        <div
          className={`${styles.validationCard} ${isPasswordStrong ? styles.passCondition : ""} `}
        >
          <p className={styles.validationTitle}>
            Your password is not strong enough. New password must:
          </p>
          <ul className={styles.requirementsList}>
            <li
              className={`${styles.requirementItem} ${isFitLength ? styles.correctConfirm : ""}`}
            >
              <span
                className={isFitLength ? styles.greenCircle : styles.redCircle}
              ></span>
              Be at least 8 characters long.
            </li>

            <li
              className={`${styles.requirementItem} ${hasUpperCase ? styles.correctConfirm : ""}`}
            >
              <span
                className={hasUpperCase ? styles.greenCircle : styles.redCircle}
              ></span>
              Contain at least one uppercase letter.
            </li>

            <li
              className={`${styles.requirementItem} ${hasLowerCase ? styles.correctConfirm : ""}`}
            >
              <span
                className={hasLowerCase ? styles.greenCircle : styles.redCircle}
              ></span>
              Contain at least one lowercase letter.
            </li>

            <li
              className={`${styles.requirementItem} ${hasNumber ? styles.correctConfirm : ""}`}
            >
              <span
                className={hasNumber ? styles.greenCircle : styles.redCircle}
              ></span>
              Contain at least one numeric character (0-9).
            </li>

            <li
              className={`${styles.requirementItem} ${hasSpecialChar ? styles.correctConfirm : ""}`}
            >
              <span
                className={
                  hasSpecialChar ? styles.greenCircle : styles.redCircle
                }
              ></span>
              Contain at least one special character (e.g., !, @, #, $).
            </li>
          </ul>
        </div>
      )}

      {/* Success Modal */}
      {isOpenSaveNewPassword && (
        <ConfirmModal
          icon={<CheckCircle2 size={48} className={styles.correct} />}
          onClose={() => {
            setIsOpenSaveNewPassword(false);
            resetAll();
          }}
        >
          <div className={styles.containerMessageDeleting}>
            <h2 className={styles.message}>Done!</h2>
            <p className={styles.confirmMessage}>Saved Password Successfully</p>
            <div className={styles.btnContainer}>
              <button
                className={`${styles.btn} ${styles.gotItBtn}`}
                onClick={() => {
                  setIsOpenSaveNewPassword(false);
                  resetAll();
                }}
              >
                Got it
              </button>
            </div>
          </div>
        </ConfirmModal>
      )}

      {/* Discard Modal */}
      {isOpenDiscard && (
        <ConfirmModal
          icon={<Trash2 size={48} className={styles.trash} />}
          onClose={() => {
            setIsOpenDiscard(false);
          }}
        >
          <div className={styles.containerMessageDeleting}>
            <h2 className={styles.message}>Discard changes?</h2>
            <p className={styles.confirmMessage}>
              Are you sure you want to discard your new password changes?
            </p>
            <div className={styles.btnContainer}>
              <button
                className={`${styles.btn} ${styles.cancel}`}
                onClick={() => setIsOpenDiscard(false)}
              >
                cancel
              </button>
              <button
                className={`${styles.btn} ${styles.delete}`}
                onClick={() => {
                  setIsOpenDiscard(false);
                  resetAll();
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
