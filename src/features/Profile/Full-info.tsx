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

export default function FullInfo({ onClose }: { onClose: () => void }) {
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
            <div className={styles.avatarContainer}>
              <User size={45} className={styles.avatarIcon} />
              <div className={styles.editBadge}>
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
