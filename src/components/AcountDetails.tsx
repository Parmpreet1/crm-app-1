import React from "react";

const AcountDetails: React.FC = () => {
  return (
    <>
      {/* Account Summary */}
      <div className="flex items-center gap-4 bg-white dark:bg-gray-800 p-3 rounded-xl">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-2xl font-bold text-white">
          TG
        </div>
        <div>
          <div className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
            Truck Grear
            <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5 rounded ml-1">
              BUSINESS
            </span>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-300">
            jillali@onechanneladmin.com
          </div>
          <button className="text-xs text-primary-600 mt-1 hover:underline">
            Change Status
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-0 rounded-xl bg-white dark:bg-gray-800 p-3 text-sm">
        <button className="flex-1  p-2 text-gray-600 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700 flex flex-col items-center justify-center gap-1">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
            <path
              d="M4 4h16v16H4V4zm0 0l8 8 8-8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Email</span>
        </button>
        <button className="flex-1  p-2 text-gray-600 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700 flex flex-col items-center justify-center gap-1 border-l border-gray-200 dark:border-gray-700 pl-2">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
            <path
              d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.72 3.05a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.98.35 2 .59 3.05.72A2 2 0 0 1 22 16.92z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Call</span>
        </button>
        <button className="flex-1  p-2 text-gray-600 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700 flex flex-col items-center justify-center gap-1 border-l border-gray-200 dark:border-gray-700 pl-2">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
            <path
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Message</span>
        </button>
        <button className="flex-1  p-2 text-gray-600 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700 flex flex-col items-center justify-center gap-1 border-l border-gray-200 dark:border-gray-700 pl-2">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
            <path
              d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Calendar</span>
        </button>
      </div>

      {/* Business Details */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border dark:border-gray-700">
        <div className="flex justify-between items-center mb-2">
          <div className="font-semibold text-gray-700 dark:text-white">
            Business Details
          </div>
          <button className="text-green-600 text-xs font-medium hover:underline">
            Save & Close
          </button>
        </div>
        <form className="flex flex-col gap-2">
          <label className="text-xs text-gray-500 dark:text-gray-300">
            Account Name
          </label>
          <input
            className="input-field dark:bg-gray-900 dark:text-white dark:border-gray-700"
            value="TRUCK GEAR"
            readOnly
          />
          <label className="text-xs text-gray-500 dark:text-gray-300">
            Email
          </label>
          <input
            className="input-field dark:bg-gray-900 dark:text-white dark:border-gray-700"
            value="Jillali@Onechanneladmin.Com"
            readOnly
          />
          <div className="flex justify-between">
            <label className="text-xs text-gray-500 dark:text-gray-300">
              Phone Number
            </label>
            <button
              type="button"
              className="mb-2 self-end px-3 py-1 rounded text-primary-500 text-md font-medium"
            >
              +
            </button>
          </div>

          <div className="flex gap-2 items-center">
            <select className="input-field w-20 dark:bg-gray-900 dark:text-white dark:border-gray-700">
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+91">+91</option>
              <option value="+61">+61</option>
            </select>
            <input
              className="input-field flex-1 dark:bg-gray-900 dark:text-white dark:border-gray-700"
              value="344 434 4455"
              readOnly
            />
            <button className="text-red-500 text-xs">Remove</button>
          </div>
          <div className="flex gap-2 items-center">
            <select className="input-field w-20 dark:bg-gray-900 dark:text-white dark:border-gray-700">
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+91">+91</option>
              <option value="+61">+61</option>
            </select>
            <input
              className="input-field flex-1 dark:bg-gray-900 dark:text-white dark:border-gray-700"
              value="344 434 4455"
              readOnly
            />
            <button className="text-red-500 text-xs">Remove</button>
          </div>
          <label className="text-xs text-gray-500 dark:text-gray-300">
            Contact Owner
          </label>
          <input
            className="input-field dark:bg-gray-900 dark:text-white dark:border-gray-700"
            value="Suchithkumar@Onechanneladmin.Com"
            readOnly
          />
        </form>
      </div>
    </>
  );
};

export default AcountDetails;
