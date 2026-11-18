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

export default function Support() {
  const [choose, setChoose] = useState<ChooseType>("FAQ");
  const [isInitialized, setIsInitialized] = useState(false);
  const [inputField, setInputField] = useState<string>("");
  const [inputFieldReport, setInputFieldReport] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedTicket, setSelectedTicket] = useState<TicketCardProps | null>(
    null,
  );
  const inputRef = useRef<HTMLInputElement>(null);

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
              onChangeInputReport={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInputFieldReport(e.target.value);
              }}
            />
            <ReportIssueTab
              onTicketClick={(ticket: TicketCardProps) => {
                setSelectedTicket(ticket);
              }}
              valueReport={inputFieldReport}
            />
            {isOpen && (
              <ModalDetail
                onClose={() => {
                  setIsOpen(false);
                }}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}
