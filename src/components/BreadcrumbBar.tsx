import React from "react";

export const BreadcrumbBar = ({
  items,
}: {
  items: { label: string; href?: string }[];
}) => {
  return (
    <nav
      className="py-3 px-4 text-sm text-gray-500 dark:text-gray-300 bg-white dark:bg-gray-900 border-b dark:border-gray-800 shadow-lg"
      aria-label="Breadcrumb"
    >
      {items.map((item, idx) => (
        <span key={item.label} className="inline">
          {idx > 0 && (
            <span className="mx-1 text-gray-400 dark:text-gray-500">/</span>
          )}
          {item.href && idx !== items.length - 1 ? (
            <a href={item.href} className="hover:underline">
              {item.label}
            </a>
          ) : (
            <span
              className={
                idx === items.length - 1
                  ? "font-bold text-gray-900 dark:text-white"
                  : ""
              }
            >
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default BreadcrumbBar;
