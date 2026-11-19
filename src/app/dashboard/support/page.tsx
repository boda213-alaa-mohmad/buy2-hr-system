"use client";
import { useState, useEffect, useRef } from "react";
import SupportView from "@/features/Support/components/SupportView/SupportView";
import { ChooseType } from "@/features/Support/types/support";
import FAQSearch from "@/features/Support/components/FAQTab/FAQSearch";
import FAQCategoryCard from "@/features/Support/components/FAQTab/FAQCategoryCard";
import FAQAccordion from "@/features/Support/components/FAQTab/FAQAccordion";
import ReportHeader from "@/features/Support/components/ReportIssueTab/ReportHeader";
import ReportIssueTab from "@/features/Support/components/ReportIssueTab/ReportIssueTab";
import ModalDetail from "@/features/Support/components/ModalDetail/ModalDetail";
import { TicketCardProps } from "@/features/Support/types/support";
import { Status } from "@/features/Support/types/support";

export default function Support() {
  const [choose, setChoose] = useState<ChooseType>("FAQ");
  const [isInitialized, setIsInitialized] = useState(false);
  const [inputField, setInputField] = useState<string>("");
  const [inputFieldReport, setInputFieldReport] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedTicket, setSelectedTicket] = useState<TicketCardProps | null>(
    null,
  );
  const [chooseFilter, setChooseFilter] = useState<Status>("All");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function keyPress(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }
    window.addEventListener("keydown", keyPress);
    return () => window.removeEventListener("keydown", keyPress);
  }, [isOpen]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const chooseSupport = localStorage.getItem("chosen-support");
    if (chooseSupport === "FAQ" || chooseSupport === "Report issue")
      setChoose(chooseSupport);

    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;
    localStorage.setItem("chosen-support", choose);
  }, [choose, isInitialized]);

  return (
    <>
      <div>
        <SupportView choose={choose} onTabChange={setChoose} />
        {choose === "FAQ" ? (
          <>
            <FAQSearch
              input={inputField}
              onChangeInput={(e) => {
                setInputField(e.target.value);
              }}
              ref={inputRef}
            />
            <FAQCategoryCard />
            <FAQAccordion value={inputField} />
          </>
        ) : (
          <div>
            <ReportHeader
              valueReport={inputFieldReport}
              onChangeInputReport={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInputFieldReport(e.target.value);
              }}
              onFilter={(status: Status) => {
                setChooseFilter(status);
              }}
              chooseOption={chooseFilter}
            />
            <ReportIssueTab
              onTicketClick={(ticket: TicketCardProps) => {
                setSelectedTicket(ticket);
                setIsOpen(true);
              }}
              valueOption={chooseFilter}
              valueReport={inputFieldReport}
            />
            {/* I do that shape because of warnings of line 22  */}
            {isOpen && selectedTicket && (
              <ModalDetail
                onClose={() => setIsOpen(false)}
                valuesCard={selectedTicket}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}
