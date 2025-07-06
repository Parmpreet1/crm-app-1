import React from "react";
import Layout from "./components/Layout";

import "./App.css";
import Navbar from "./components/Navbar";
import { BreadcrumbBar } from "./components/BreadcrumbBar";
import { HorizontalTabs } from "./components/HorizontalTabs";
import { Crousal } from "./components/dashboard/components/Crousal";
import { Dashboard } from "./components/dashboard/Dashboard";
import AcountDetails from "./components/AcountDetails";

function App() {
  const currentBreadcrumb = [
    { label: "CRM", href: "#" },
    { label: "Account", href: "#" },
    { label: "Account Details" },
  ];
  const currentSidebar = <AcountDetails />;

  return (
    <div>
      <Navbar />
      <BreadcrumbBar items={currentBreadcrumb} />
      <Layout sidebar={currentSidebar}>
        <HorizontalTabs
          tabs={[
            {
              label: "Dashboard",
              component: <Dashboard />,
            },
            {
              label: "Orders",
              component: <>Orders</>,
            },
            {
              label: "Address",
              component: <>Address</>,
            },
            {
              label: "Notes",
              component: <>Notes</>,
            },
            {
              label: "Tasks",
              component: <>Tasks</>,
            },
            {
              label: "Contacts",
              component: <>Contacts</>,
            },
            {
              label: "Credit History",
              component: <>Credit History</>,
            },
          ]}
        />
      </Layout>
    </div>
  );
}

export default App;
