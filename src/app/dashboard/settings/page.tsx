"use client";

import { useState } from "react";
import { SettingsTab } from "@/types/task";
import PasswordFlow from "@/features/Settings/components/PasswordFlow/PasswordFlow";
import LanguageSettings from "@/features/Settings/components/LanguageSettings/LanguageSettings";
import AboutBuys from "@/features/Settings/components/AboutBuys/AboutBuys";
import PolicyContent from "@/features/Settings/components/PolicyContent/PolicyContent";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>("password");

  const tabs: { id: SettingsTab; label: string }[] = [
    { id: "password", label: "Password" },
    { id: "language", label: "Language" },
    { id: "about", label: "About Buys2" },
    { id: "terms", label: "Terms of use" },
    { id: "privacy", label: "Privacy policy" },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-6">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Settings</h1>

      {/* Navigation Header Section */}
      <div>
        {/* Tabs Row */}
        <div className="flex items-center space-x-6 overflow-x-auto pb-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full text-base font-medium cursor-pointer border-2 transition-colors duration-150 whitespace-nowrap ${
                  isActive
                    ? "border-[#7C82F6] text-[#7C82F6] bg-white shadow-xs"
                    : "border-transparent text-gray-800 hover:text-[#7C82F6]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Separate Bottom Border with Exact Figma Spacing */}
        <div className="border-b border-gray-200 mt-6" />
      </div>

      {/* Dynamic View */}
      <div className="pt-2">
        {activeTab === "password" && <PasswordFlow />}
        {activeTab === "language" && <LanguageSettings />}
        {activeTab === "about" && <AboutBuys />}
        {activeTab === "terms" && <PolicyContent type="terms" />}
        {activeTab === "privacy" && <PolicyContent type="privacy" />}
      </div>
    </div>
  );
}
