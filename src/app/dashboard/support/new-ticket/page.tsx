"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { ChevronDown, ChevronLeft, Loader2 } from "lucide-react";
import { useState, useContext } from "react";
import { TicketContext } from "@/context/ticketProvider";
import { Status } from "@/features/Support/types/support";
import { useRouter } from "next/navigation";
import IncompleteFieldsModal from "@/features/Support/components/ReportIssueTab/IncompleteFieldsModal";
import DiscardConfirmModal from "@/features/Support/components/ReportIssueTab/DiscardConfirmModal";

const chooseCategory: { id: string; title: string; value: string }[] = [
  { id: "1", title: "Technical Support", value: "technical" },
  { id: "2", title: "Billing & Account", value: "billing" },
  { id: "3", title: "General Inquiry", value: "general" },
];

const chooseStatus: {
  id: string;
  title: string;
  value: string;
  color: string;
}[] = [
  { id: "1", title: "Open", value: "Open", color: "#4f4bac" },
  { id: "2", title: "In Progress", value: "In progress", color: "#C24C53" },
  { id: "3", title: "Solved", value: "Solved", color: "#18cc2a" },
];

export default function NewTicket() {
  const router = useRouter();
  const { ticket, allTickets, onSetTicket, onSetAllTickets } =
    useContext(TicketContext);

  const [alertInComplete, setAlertInComplete] = useState<boolean>(false);
  const [alertDiscard, setAlertDiscard] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  function clearFields() {
    onSetTicket({
      category: "",
      description: "",
      subject: "",
      status: "" as Status,
    });
  }

  async function saveTicket() {
    if (
      !ticket.subject ||
      !ticket.description ||
      !ticket.category ||
      !ticket.status
    ) {
      setAlertInComplete(true);
      return;
    }

    setIsSaving(true);
    await new Promise((res) => setTimeout(res, 1500));

    const updateTickets = [...allTickets, ticket];
    onSetAllTickets(updateTickets);
    clearFields();
    router.push("/dashboard/support");
  }

  function handleConfirmDiscard() {
    clearFields();
    setAlertDiscard(false);
  }

  return (
    <>
      <header className={styles.header} role="banner">
        <div className={styles.leftSection}>
          <Link
            href="/dashboard/support"
            className={styles.backBtn}
            aria-label="Back to my support page"
          >
            <ChevronLeft size={18} aria-hidden="true" />
            <span>Back</span>
          </Link>

          <h1 className={styles.title}>New Ticket</h1>
        </div>

        <nav aria-label="Task action controls" className={styles.rightSection}>
          <button
            type="button"
            className={styles.discardBtn}
            aria-label="Discard changes"
            onClick={() => setAlertDiscard(true)}
            disabled={isSaving}
          >
            Discard
          </button>

          <button
            type="button"
            className={styles.saveBtn}
            aria-label="Save ticket changes"
            onClick={saveTicket}
            disabled={isSaving}
          >
            {isSaving ? (
              <>
                <Loader2 size={16} className={styles.spinner} />
                <span>Saving...</span>
              </>
            ) : (
              "Save ticket"
            )}
          </button>
        </nav>
      </header>

      <div className={styles.container}>
        {/* Row 1: Subject & Description */}
        <div className={styles.row}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Subject</label>
            <input
              type="text"
              placeholder="Select"
              className={styles.input}
              value={ticket.subject}
              onChange={(e) => {
                onSetTicket({
                  ...ticket,
                  subject: e.target.value,
                });
              }}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>Description</label>
            <input
              type="text"
              placeholder="Select"
              className={styles.input}
              value={ticket.description}
              onChange={(e) => {
                onSetTicket({
                  ...ticket,
                  description: e.target.value,
                });
              }}
            />
          </div>
        </div>

        {/* Row 2: Category & Status */}
        <div className={styles.row}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Category</label>

            <div className={styles.selectWrapper}>
              <select
                className={styles.select}
                value={ticket.category}
                onChange={(e) => {
                  onSetTicket({
                    ...ticket,
                    category: e.target.value,
                  });
                }}
              >
                <option value="" disabled hidden>
                  Select
                </option>

                {chooseCategory.map((category) => (
                  <option key={category.id} value={category.value}>
                    {category.title}
                  </option>
                ))}
              </select>

              <ChevronDown className={styles.arrowIcon} size={18} />
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>Status</label>

            <div className={styles.selectWrapper}>
              <select
                className={styles.select}
                value={ticket.status}
                onChange={(e) => {
                  onSetTicket({
                    ...ticket,
                    status: e.target.value as Status,
                  });
                }}
              >
                <option value="" disabled hidden>
                  Select
                </option>

                {chooseStatus.map((status) => (
                  <option
                    key={status.id}
                    value={status.value}
                    style={{ color: status.color }}
                  >
                    {status.title}
                  </option>
                ))}
              </select>

              <ChevronDown className={styles.arrowIcon} size={18} />
            </div>
          </div>
        </div>

        {alertInComplete && (
          <IncompleteFieldsModal onClose={() => setAlertInComplete(false)} />
        )}

        {alertDiscard && (
          <DiscardConfirmModal
            onConfirm={handleConfirmDiscard}
            onClose={() => setAlertDiscard(false)}
          />
        )}
      </div>
    </>
  );
}
