import React, { useState, useEffect } from "react";
import { WebsiteLogo } from "../assets/WebsiteLogo";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="w-full flex items-center justify-between px-4 md:px-6 py-3 bg-white border-b dark:bg-gray-900 dark:border-gray-800 relative">
      {/* Left: Logo and App Name */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <WebsiteLogo />
        <span className="ml-2 font-bold text-lg text-gray-900 dark:text-white">
          Quotient
        </span>
      </div>

      {/* Hamburger for mobile */}
      <button
        className="md:hidden p-2 ml-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
        onClick={() => setMobileMenuOpen((open) => !open)}
        aria-label="Open menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Right: Actions (hidden on mobile) */}
      <div className="md:flex items-center gap-3 hidden">
        {/* Center: Search Bar (hidden on mobile) */}
        <div className="flex-1 flex justify-center md:block hidden">
          <div className="w-full max-w-md">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-gray-300">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-white dark:border-gray-700"
              />
            </div>
          </div>
        </div>
        {/* Theme Toggle */}
        <button
          className="p-2 rounded-full hover:bg-gray-100 text-gray-700 dark:hover:bg-gray-800 dark:text-gray-200"
          onClick={() => setDarkMode((d) => !d)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <svg
              className="w-5 h-5 text-gray-200"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="5"
                stroke="#EAEAEA"
                strokeWidth="1.5"
              />
              <path
                d="M12 2V4"
                stroke="#EAEAEA"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M12 20V22"
                stroke="#EAEAEA"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M4 12L2 12"
                stroke="#EAEAEA"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M22 12L20 12"
                stroke="#EAEAEA"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M19.7778 4.22217L17.5558 6.25375"
                stroke="#EAEAEA"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M4.22217 4.22217L6.44418 6.25375"
                stroke="#EAEAEA"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M6.44434 17.5557L4.22211 19.7779"
                stroke="#EAEAEA"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M19.7778 19.7778L17.5558 17.5555"
                stroke="#EAEAEA"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
        {/* Notification Bell */}
        <button className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {/* User Info */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold">
            MS
          </div>
          <div className="flex flex-col items-start">
            <span className="font-semibold text-sm text-gray-900 dark:text-white">
              Manoj Sharma
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-300">
              Super Admin
            </span>
          </div>
          <svg
            className="w-4 h-4 text-gray-400 dark:text-gray-300 ml-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              d="M19 9l-7 7-7-7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Mobile menu (dropdown) */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-50 flex flex-col md:hidden animate-fade-in">
          <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800">
            {/* Search Bar */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-gray-300">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-white dark:border-gray-700"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 px-4 py-3">
            {/* Theme Toggle */}
            <button
              className="p-2 rounded-full hover:bg-gray-100 text-gray-700 dark:hover:bg-gray-800 dark:text-gray-200 self-start"
              onClick={() => setDarkMode((d) => !d)}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg
                  className="w-5 h-5 text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="5"
                    stroke="#EAEAEA"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 2V4"
                    stroke="#EAEAEA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 20V22"
                    stroke="#EAEAEA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 12L2 12"
                    stroke="#EAEAEA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M22 12L20 12"
                    stroke="#EAEAEA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M19.7778 4.22217L17.5558 6.25375"
                    stroke="#EAEAEA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4.22217 4.22217L6.44418 6.25375"
                    stroke="#EAEAEA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6.44434 17.5557L4.22211 19.7779"
                    stroke="#EAEAEA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M19.7778 19.7778L17.5558 17.5555"
                    stroke="#EAEAEA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
            {/* Notification Bell */}
            <button className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 self-start">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {/* User Info */}
            <div className="flex items-center gap-2 mt-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold">
                MS
              </div>
              <div className="flex flex-col items-start">
                <span className="font-semibold text-sm text-gray-900 dark:text-white">
                  Manoj Sharma
                </span>
                <span className="text-xs text-gray-400 dark:text-gray-300">
                  Super Admin
                </span>
              </div>
              <svg
                className="w-4 h-4 text-gray-400 dark:text-gray-300 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 9l-7 7-7-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
