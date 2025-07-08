import React, { useState } from "react";
import { DateIcon } from "../../../assets/DateIcon";

const months = [
  { label: "Jan", value: 589.12 },
  { label: "Feb", value: 840.2 },
  { label: "Mar", value: 898 },
  { label: "Apr", value: 203 },
  { label: "May", value: 400.01 },
  { label: "Jun", value: 920.12 },
  { label: "Jul", value: 398 },
  { label: "Aug", value: 882 },
  { label: "Sep", value: 390 },
  { label: "Oct", value: 910 },
  { label: "Nov", value: 410.12 },
  { label: "Dec", value: 840.2 },
];
const totalRevenue = 89235.89;

const tabs = ["Revenue", "Orders", "Customers"];

export const AnalysisOverTime = () => {
  const [activeTab, setActiveTab] = useState("Revenue");

  // Chart dimensions
  const chartHeight = 300;
  const chartWidth = Math.max(900, 60 + months.length * 80); // min 900px or fit bars
  const maxValue = 1000;
  const barWidth = 48;
  const barGap = 32;
  const yAxisLabelWidth = 48; // extra space for y-axis labels

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl  shadow-sm border border-gray-100 dark:border-gray-700 w-full">
      <div className="flex justify-between flex-wrap items-center p-4">
        <div className="flex gap-2 border rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-1 rounded-lg text-sm font-medium border ${
                activeTab === tab
                  ? "bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-blue-900 dark:text-white shadow-sm"
                  : "bg-gray-50 dark:bg-gray-800 border-transparent text-gray-500 dark:text-gray-300"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <select className="border rounded-lg px-2 min-w-36 py-1 text-sm text-gray-700 dark:text-gray-200 dark:bg-gray-900 dark:border-gray-700 focus:outline-none">
            <option>All Categories</option>
          </select>
          <button className="border rounded-lg px-2 py-1 text-sm text-gray-700 dark:text-gray-200 dark:bg-gray-900 dark:border-gray-700 flex items-center gap-1">
            Jun 2023 <DateIcon />
          </button>
        </div>
      </div>
      <div className="flex flex-col border-t p-4 md:flex-row justify-between items-start w-full">
        <div className="w-full ">
          <div className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            Revenue
          </div>
          <div className="md:ml-8 mt-6 md:mt-2 min-w-[200px] flex flex-col items-end w-full md:w-auto">
            <div className="text-gray-500 dark:text-gray-300 text-sm">
              Total Revenue:
            </div>
            <div className="text-2xl font-bold text-gray-800 dark:text-white">
              $
              {totalRevenue.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
          </div>
          <div className="relative w-full overflow-x-auto pb-0">
            <svg
              width={chartWidth + yAxisLabelWidth}
              height={chartHeight}
              className="block"
            >
              {/* Y axis grid lines and labels */}
              {[1000, 800, 600, 400, 200, 0].map((y, i) => (
                <g key={y}>
                  <text
                    x={yAxisLabelWidth}
                    y={40 + i * 40}
                    fontSize="12"
                    fill={"#888"}
                    textAnchor="end"
                  >
                    {y.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </text>
                  <line
                    x1={yAxisLabelWidth}
                    y1={40 + i * 40}
                    x2={chartWidth + yAxisLabelWidth - 20}
                    y2={40 + i * 40}
                    stroke="#e5e7eb"
                    strokeDasharray="4 2"
                  />
                </g>
              ))}
              {/* Bars */}
              {months.map((m, i) => {
                const barHeight = (m.value / maxValue) * 200;
                return (
                  <g key={m.label}>
                    <rect
                      x={yAxisLabelWidth + 12 + i * (barWidth + barGap)}
                      y={200 - barHeight + 40}
                      width={barWidth}
                      height={barHeight}
                      rx={6}
                      fill="#5B43F1"
                    />
                    <text
                      x={
                        yAxisLabelWidth +
                        12 +
                        i * (barWidth + barGap) +
                        barWidth / 2
                      }
                      y={200 - barHeight + 30}
                      fontSize="14"
                      fill="#222"
                      textAnchor="middle"
                      fontWeight="bold"
                    >
                      {`$${m.value.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}`}
                    </text>
                  </g>
                );
              })}
              {/* X axis month labels */}
              {months.map((m, i) => (
                <text
                  key={m.label}
                  x={
                    yAxisLabelWidth +
                    12 +
                    i * (barWidth + barGap) +
                    barWidth / 2
                  }
                  y={300 - 40}
                  fontSize="14"
                  fill="#888"
                  textAnchor="middle"
                >
                  {m.label}
                </text>
              ))}
            </svg>
          </div>
          <div className="flex justify-center mt-2 text-gray-500 dark:text-gray-300 text-sm">
            • 2023
          </div>
        </div>
      </div>
    </div>
  );
};
