import React from "react";
import { SaveIcon } from "../assets/SaveIcon";
import { EmailIcon } from "../assets/EmailIcon";
import { PhoneIcon } from "../assets/PhoneIcon";
import { MessageIcon } from "../assets/MessageIcon";
import { DateIcon } from "../assets/DateIcon";

const AcountDetails: React.FC = () => {
  const seperator = <span className="w-full h-px bg-gray-200"></span>;

  return (
    <>
      {/* Account Summary */}
      <div className="flex items-center h-[80px] gap-2 bg-white dark:bg-gray-800 p-3 rounded-xl">
        <div className="w-[48px] h-[48px] rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-2xl font-bold text-white">
          TG
        </div>
        <div className="flex-col flex gap-2">
          <div className="flex justify-between gap-5">
            <div className="font-bold text-sm text-gray-900 dark:text-white flex items-center gap-1">
              Truck Grear
              <span className="bg-yellow-100 text-xs text-yellow-600 px-2 py-0.5 rounded-lg ml-1">
                BUSINESS
              </span>
            </div>
            <button className="text-xs flex text-primary-600 mt-1 hover:underline">
              Change Status
            </button>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-300">
            jillali@onechanneladmin.com
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-0 h-[76px] rounded-xl bg-white dark:bg-gray-800 p-2 text-xs">
        <button className="flex-1  p-2 text-gray-600 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700 flex flex-col items-center justify-center gap-1">
          <EmailIcon />
          <span>Email</span>
        </button>
        <span className="w-[1px] h-[32px] m-auto bg-gray-200"></span>
        <button className="flex-1  p-2 text-gray-600 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700 flex flex-col items-center justify-center gap-1  dark:border-gray-700 pl-2">
          <PhoneIcon></PhoneIcon>
          <span>Call</span>
        </button>
        <span className="w-[1px] h-[32px] m-auto bg-gray-200"></span>
        <button className="flex-1  p-2 text-gray-600 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700 flex flex-col items-center justify-center gap-1 dark:border-gray-700 pl-2">
          <MessageIcon />
          <span>Message</span>
        </button>
        <span className="w-[1px] h-[32px] m-auto bg-gray-200"></span>
        <button className="flex-1  p-2 text-gray-600 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700 flex flex-col items-center justify-center gap-1 dark:border-gray-700 pl-2">
          <DateIcon />
          <span>Calendar</span>
        </button>
      </div>

      {/* Business Details */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border dark:border-gray-700">
        <div className="flex justify-between items-center mb-2">
          <div className="font-semibold text-gray-700 dark:text-white">
            Business Details
          </div>
          <div className="flex gap-2">
            <SaveIcon />
            <button className="text-green-600 text-xs font-medium hover:underline">
              Save & Close
            </button>
          </div>
        </div>
        <form className="flex flex-col gap-2">
          <label className="text-xs text-gray-500 dark:text-gray-300">
            Account Name
          </label>
          <input
            className="input-field h-[38px] dark:bg-gray-900 dark:text-white dark:border-gray-700"
            value="TRUCK GEAR"
            readOnly
          />
          {seperator}
          <label className="text-xs text-gray-500 dark:text-gray-300">
            Email
          </label>
          <input
            className="input-field h-[38px] dark:bg-gray-900 dark:text-white dark:border-gray-700"
            value="Jillali@Onechanneladmin.Com"
            readOnly
          />
          {seperator}
          <div className="flex h-[25px] justify-between">
            <label className="text-xs my-auto text-gray-500 dark:text-gray-300">
              Phone Number
            </label>
            <button
              type="button"
              className="mb-2 my-auto self-end px-3 py-1 rounded text-primary-500 text-2xl font-medium"
            >
              +
            </button>
          </div>

          <div className="flex gap-2 items-center">
            <select className="input-field w-20 h-[38px] dark:bg-gray-900 dark:text-white dark:border-gray-700">
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+91">+91</option>
              <option value="+61">+61</option>
            </select>
            <input
              className="input-field h-[38px] flex-1 dark:bg-gray-900 dark:text-white dark:border-gray-700"
              value="344 434 4455"
              readOnly
            />
            <button className="text-red-500 border h-[38px] border-red-500 p-2 rounded-lg text-xs">
              Remove
            </button>
          </div>
          <div className="flex gap-2 items-center">
            <select className="input-field w-20 h-[38px] dark:bg-gray-900 dark:text-white dark:border-gray-700">
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+91">+91</option>
              <option value="+61">+61</option>
            </select>
            <input
              className="input-field flex-1 h-[38px] dark:bg-gray-900 dark:text-white dark:border-gray-700"
              value="344 434 4455"
              readOnly
            />
            <button className="text-red-500 h-[38px] border border-red-500 p-2 rounded-lg text-xs">
              Remove
            </button>
          </div>
          {seperator}
          <label className="text-xs text-gray-500 dark:text-gray-300">
            Contact Owner
          </label>
          <select className="input-field w-full text-sm h-[38px] dark:bg-gray-900 dark:text-white dark:border-gray-700">
            <option value="Suchithkumar@Onechanneladmin.Com">
              Suchithkumar@Onechanneladmin.Com
            </option>
          </select>
        </form>
      </div>
    </>
  );
};

export default AcountDetails;
