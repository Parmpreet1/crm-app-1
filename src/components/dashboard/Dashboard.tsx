import React from "react";
import { Crousal } from "./components/Crousal";
import { OrderStatus } from "./components/OrderStatus";
import { RecentActivities } from "./components/RecentActivities";
import { RecentOrders } from "./components/RecentOrders";
import { AnalysisOverTime } from "./components/AnalysisOverTime";

export const Dashboard = () => {
  return (
    <div className="flex flex-col gap-5">
      <Crousal />
      <div className="flex md:flex-wrap gap-5 justify-between">
        <OrderStatus />
        <RecentActivities />
      </div>
      <div>
        <RecentOrders />
      </div>
      <div>
        <AnalysisOverTime />
      </div>
    </div>
  );
};
