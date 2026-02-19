"use client";

import { useState } from "react";

interface LangTabsProps {
  enContent: React.ReactNode;
  esContent: React.ReactNode;
  enTitle?: string;
  esTitle?: string;
  label?: string;
}

export default function LangTabs({ enContent, esContent, enTitle, esTitle, label }: LangTabsProps) {
  const [lang, setLang] = useState<"en" | "es">("en");

  const title = lang === "en" ? enTitle : esTitle;

  return (
    <div>
      {/* Dynamic title */}
      {(enTitle || esTitle) && (
        <div className="mb-10">
          {label && (
            <p className="text-xs font-semibold uppercase tracking-widest text-bow-purple mb-3">
              {label}
            </p>
          )}
          <h1 className="font-serif text-4xl font-black text-gray-900 md:text-5xl leading-tight">
            {title}
          </h1>
        </div>
      )}

      {/* Tab buttons */}
      <div className="flex gap-2 mb-8 border-b border-gray-200">
        <button
          onClick={() => setLang("en")}
          className={`px-5 py-2.5 text-sm font-medium transition-all duration-200 border-b-2 -mb-px ${
            lang === "en"
              ? "border-bow-purple text-bow-purple"
              : "border-transparent text-gray-500 hover:text-gray-800"
          }`}
        >
          English
        </button>
        <button
          onClick={() => setLang("es")}
          className={`px-5 py-2.5 text-sm font-medium transition-all duration-200 border-b-2 -mb-px ${
            lang === "es"
              ? "border-bow-purple text-bow-purple"
              : "border-transparent text-gray-500 hover:text-gray-800"
          }`}
        >
          Español
        </button>
      </div>

      {/* Content */}
      <div>{lang === "en" ? enContent : esContent}</div>
    </div>
  );
}
