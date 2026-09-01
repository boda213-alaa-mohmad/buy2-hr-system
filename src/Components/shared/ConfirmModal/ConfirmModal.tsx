// "use client";
// import { ReactNode } from "react";
// import { X } from "lucide-react";
// import styles from "./ConfirmModal.module.css";

// interface ConfirmModalProps {
//   onClose?: () => void;
//   icon?: ReactNode;
//   title?: string;
//   description?: string;
//   children: React.ReactNode;
// }

// export default function ConfirmModal({
//   onClose,
//   icon,
//   title,
//   description,
//   children,
// }: ConfirmModalProps) {
//   return (
//     <div className={styles.overlay} role="dialog" aria-modal="true">
//       <div className={styles.card}>
//         <div className={styles.containerClose}>
//           <button
//             type="button"
//             className={styles.closeBtnWrapper}
//             onClick={onClose}
//             aria-label="Close"
//           >
//             <X className={styles.closeBtn} />
//           </button>
//         </div>

//         <div className={styles.containerContent}>
//           <div className={styles.containerIcon}>{icon}</div>
//           <h2 className={styles.question}>{title}</h2>
//           <p className={styles.confirmMessage}>{description}</p>
//         </div>

//         <div className={styles.containerBtn}>{children}</div>
//       </div>
//     </div>
//   );
// }

import { X } from "lucide-react";
import styles from "./ConfirmModal.module.css";

interface ConfirmModalProps {
  onClose?: () => void;
  icon: React.ReactNode;
  children: React.ReactNode;
  variant?: "danger" | "success" | "primary";
}

export default function ConfirmModal({
  icon,
  children,
  variant = "primary",
  onClose,
}: ConfirmModalProps) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* X */}
        <button className={styles.x}>
          <X size={20} onClick={onClose} />
        </button>

        {/* icon */}
        <div className={styles.ContainerIconCenter}>
          <div className={`${styles.containerIcon} ${styles[variant]}`}>
            <div>{icon}</div>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
