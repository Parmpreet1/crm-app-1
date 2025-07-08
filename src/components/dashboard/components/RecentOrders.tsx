import React from "react";
import { ArrowRightIcon } from "../../../assets/ArrowRightIcon";

const orders = [
  {
    id: "415368",
    product: {
      img: "https://picsum.photos/200/300",
      name: "White Danim Tshit M...",
      qty: 4,
    },
    customer: {
      channel: "Walmart",
      badge: "bg-blue-100 text-blue-800",
      logo: "W",
    },
    channel: {
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Harris Santana",
    },
    total: "$151.00",
    date: "Today",
  },
  {
    id: "275936",
    product: {
      img: "https://picsum.photos/200/300",
      name: "iPhone 15 pro max",
      qty: 1,
    },
    customer: {
      channel: "eBay",
      badge: "bg-yellow-100 text-yellow-800",
      logo: "e",
    },
    channel: {
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Gabriella Golden",
    },
    total: "$400.00",
    date: "Today",
  },
  {
    id: "275063",
    product: {
      img: "https://picsum.photos/200/300",
      name: "David Beckham class...",
      qty: 2,
    },
    customer: {
      channel: "facebook",
      badge: "bg-blue-50 text-blue-700",
      logo: "f",
    },
    channel: {
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      name: "Lilia Ponce",
    },
    total: "$167.00",
    date: "Tomorrow",
  },
  {
    id: "274778",
    product: {
      img: "https://picsum.photos/200/300",
      name: "Samsung i-20 serie...",
      qty: 3,
    },
    customer: {
      channel: "amazon",
      badge: "bg-yellow-200 text-yellow-900",
      logo: "a",
    },
    channel: {
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      name: "Rehan Chase",
    },
    total: "$262.00",
    date: "Tomorrow",
  },
  {
    id: "638032",
    product: {
      img: "https://picsum.photos/200/300",
      name: "Nykaa Red lipstick",
      qty: 5,
    },
    customer: {
      channel: "Etsy",
      badge: "bg-orange-100 text-orange-800",
      logo: "E",
    },
    channel: {
      avatar: "https://randomuser.me/api/portraits/men/47.jpg",
      name: "Maxim Bray",
    },
    total: "$319.00",
    date: "05/01/2023",
  },
];

export const RecentOrders = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 w-full">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white p-4">
        Recent Orders
      </h2>
      <div className="overflow-x-auto border-t">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-gray-500 font-semibold bg-white dark:bg-gray-900">
              <th className="px-4 py-2 text-left">ORDER ID</th>
              <th className="px-4 py-2 text-left">PRODUCTS</th>
              <th className="px-4 py-2 text-left">CUSTOMER</th>
              <th className="px-4 py-2 text-left">CHANNEL</th>
              <th className="px-4 py-2 text-left">TOTAL</th>
              <th className="px-4 py-2 text-left">DELIVERY DATE</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b last:border-b-0 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-900"
              >
                <td className="px-4 py-3 font-medium text-gray-700 dark:text-gray-200">
                  {order.id}
                </td>
                <td className="px-4 py-3 flex items-center gap-2">
                  <span className="text-xs text-gray-400 dark:text-gray-300">
                    x{order.product.qty}
                  </span>
                  <img
                    src={order.product.img}
                    alt="product"
                    className="w-8 h-8 rounded object-cover border dark:border-gray-700"
                  />
                  <span className="truncate max-w-[120px] text-gray-700 dark:text-gray-200">
                    {order.product.name}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${order.customer.badge} mr-2`}
                  >
                    {order.customer.channel}
                  </span>
                </td>
                <td className="px-4 py-3 flex items-center gap-2">
                  <img
                    src={order.channel.avatar}
                    alt="avatar"
                    className="w-7 h-7 rounded-full object-cover border dark:border-gray-700"
                  />
                  <span className="text-gray-700 dark:text-gray-200">
                    {order.channel.name}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-700 dark:text-gray-200">
                  {order.total}
                </td>
                <td className="px-4 py-3 text-gray-700 dark:text-gray-200">
                  {order.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center my-3">
        <a
          href="#"
          className="text-blue-700 dark:text-blue-400 text-sm font-semibold flex items-center gap-1 hover:underline"
        >
          View 256 more orders
          <ArrowRightIcon/>
        </a>
      </div>
    </div>
  );
};
