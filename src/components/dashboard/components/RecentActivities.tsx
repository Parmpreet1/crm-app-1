import React from "react";

const activities = [
  {
    day: "Today",
    items: [
      {
        icon: "🟠",
        user: "Christian Wood",
        action: "Sent Message to",
        target: "Nikita Houston",
        time: "1 min ago",
        link: true,
      },
      {
        icon: "🟣",
        user: "Nikita Houston",
        action: "Replay your message",
        target: '"Hello"',
        time: "1 min ago",
        link: false,
      },
      {
        icon: "🔴",
        user: "Christian Wood",
        action: "Accept Order from",
        target: "Ebay",
        time: "1 min ago",
        link: true,
      },
      {
        icon: "🔵",
        user: "Rohan Walker",
        action: "Replay your message",
        target: "Ebay",
        time: "1 min ago",
        link: true,
      },
      {
        icon: "🔵",
        user: "Rohan Walker",
        action: "Replay your message",
        target: "Ebay",
        time: "1 min ago",
        link: true,
      },
    ],
  },
  {
    day: "Yesterday",
    items: [
      {
        icon: "🟣",
        user: "Christian Wood",
        action: "Accept Order from",
        target: "Amazon",
        time: "12:30PM",
        link: true,
      },
    ],
  },
  {
    day: "25 MAY 2024",
    items: [
      {
        icon: "🔵",
        user: "Christian Wood",
        action: "Accept Order from",
        target: "Walmart",
        time: "11:20AM",
        link: true,
      },
    ],
  },
];

export const RecentActivities = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 w-full max-w-[530px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          Recent Activities
        </h2>
        <div className="flex gap-2">
          <button className="border rounded-lg px-3 py-1 text-sm text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700">
            Message
          </button>
          <button className="border rounded-lg px-3 py-1 text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700">
            Email
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {activities.map((group) => (
          <div key={group.day}>
            <div className="text-xs font-semibold text-gray-400 dark:text-gray-300 mb-2 uppercase">
              {group.day}
            </div>
            <ul className="space-y-2">
              {group.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center text-sm text-gray-700 dark:text-gray-200"
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  <span>
                    <span className="font-semibold text-blue-700 dark:text-blue-400 cursor-pointer hover:underline">
                      {item.user}
                    </span>
                    {` ${item.action} `}
                    {item.link ? (
                      <span className="font-semibold text-blue-700 dark:text-blue-400 cursor-pointer hover:underline">
                        {item.target}
                      </span>
                    ) : (
                      <span className="text-gray-500 dark:text-gray-400">
                        {item.target}
                      </span>
                    )}
                  </span>
                  <span className="ml-auto text-xs text-gray-400 dark:text-gray-300">
                    {item.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
