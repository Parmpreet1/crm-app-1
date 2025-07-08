import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, sidebar }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 dark:bg-gray-900">
      <aside className="w-full md:max-w-[390px] px-4 py-6 flex flex-col gap-6 md:min-h-screen border-b md:border-b-0 border-gray-200 dark:border-gray-800 dark:bg-gray-900">
        {sidebar}
      </aside>
      <div className="flex flex-col w-full md:w-0 md:flex-1 overflow-hidden">
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-[1150px] mx-auto px-4 sm:px-2 md:px-4 ">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
