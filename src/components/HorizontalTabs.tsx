import React, { useState } from "react";

interface IProps {
  tabs: { label: string; component: React.ReactNode }[];
}

export const HorizontalTabs = ({ tabs }: IProps) => {
  const [currentTab, setcurrentTab] = useState(0);

  const selectTab = (index: number) => {
    setcurrentTab(index);
  };

  return (
    <div>
      <div className="bg-gray-100 dark:bg-gray-900 px-0 py-0 flex items-center overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 whitespace-nowrap md:flex-wrap md:overflow-x-visible md:whitespace-normal">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={`
            px-4 py-1 min-w-fit
            border border-gray-200 dark:border-gray-700
            rounded-t-lg
            mr-2
            text-sm
            font-medium
            focus:outline-none
            transition-colors
            ${
              idx === currentTab
                ? "text-purple-600 bg-white dark:bg-gray-800 dark:text-purple-400"
                : "text-gray-500 bg-gray-50 dark:bg-gray-900 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            }
            ${idx !== tabs.length - 1 ? "" : "mr-0"}
          `}
            disabled={idx === currentTab}
            onClick={() => selectTab(idx)}
            style={{ flexShrink: 0 }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* current tab */}
      <div className="bg-white dark:bg-gray-800 rounded-b-xl shadow-xl p-3 min-h-screen">
        {tabs[currentTab]?.component}
      </div>
    </div>
  );
};
