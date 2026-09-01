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
