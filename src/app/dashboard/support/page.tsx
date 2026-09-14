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

export default function Support() {
  const [choose, setChoose] = useState<ChooseType>("FAQ");
  const [inputField, setInputField] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
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
          <ReportHeader />
          <ReportIssueTab
            onTicketClick={() => {
              setIsOpen(true);
            }}
          />
          {isOpen && <ModalDetail onClose={() => {setIsOpen(false)}}/>}
        </div>
      )}
    </div>
  );
}
