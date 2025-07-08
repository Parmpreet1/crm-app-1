import React, { useRef } from "react";
import { UpTrandIcon } from "../../../assets/UpTrandIcon";
import { DownTrandIcon } from "../../../assets/DownTrandIcon";

const stats = [
  {
    icon: (
      <svg
        width="54"
        height="54"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" y="0.5" width="53" height="53" rx="11.5" fill="#F6F8F9" />
        <rect
          x="0.5"
          y="0.5"
          width="53"
          height="53"
          rx="11.5"
          stroke="url(#paint0_linear_38_22398)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19 15.7813C19.5 15.2812 20.1781 15.0002 20.8853 15H33.1147C33.8219 15.0002 34.5 15.2812 35 15.7813L38.2187 19C38.7188 19.5 38.9998 20.1781 39 20.8853V36.3333C39 37.3942 38.5786 38.4116 37.8284 39.1618C37.0783 39.9119 36.0609 40.3333 35 40.3333H19C17.9391 40.3333 16.9217 39.9119 16.1716 39.1618C15.4214 38.4116 15 37.3942 15 36.3333V20.8853C15.0002 20.1781 15.2812 19.5 15.7813 19L19 15.7813ZM33.1147 17.6667H20.8853L18.2187 20.3333H35.7813L33.1147 17.6667ZM24.3333 27C24.3333 26.6464 24.1929 26.3072 23.9428 26.0572C23.6928 25.8071 23.3536 25.6667 23 25.6667C22.6464 25.6667 22.3072 25.8071 22.0572 26.0572C21.8071 26.3072 21.6667 26.6464 21.6667 27C21.6667 28.4145 22.2286 29.771 23.2288 30.7712C24.229 31.7714 25.5855 32.3333 27 32.3333C28.4145 32.3333 29.771 31.7714 30.7712 30.7712C31.7714 29.771 32.3333 28.4145 32.3333 27C32.3333 26.6464 32.1929 26.3072 31.9428 26.0572C31.6928 25.8071 31.3536 25.6667 31 25.6667C30.6464 25.6667 30.3072 25.8071 30.0572 26.0572C29.8071 26.3072 29.6667 26.6464 29.6667 27C29.6667 27.7072 29.3857 28.3855 28.8856 28.8856C28.3855 29.3857 27.7072 29.6667 27 29.6667C26.2928 29.6667 25.6145 29.3857 25.1144 28.8856C24.6143 28.3855 24.3333 27.7072 24.3333 27Z"
          fill="url(#paint1_linear_38_22398)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_38_22398"
            x1="27"
            y1="0"
            x2="27"
            y2="54"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#C521FF" />
            <stop offset="0.495" stop-color="#FF2164" />
            <stop offset="1" stop-color="#FF9B21" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_38_22398"
            x1="27"
            y1="15"
            x2="27"
            y2="40.3333"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#C521FF" />
            <stop offset="0.5" stop-color="#FF2164" />
            <stop offset="1" stop-color="#FF9B21" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Total Orders",
    value: "123",
    change: "28%",
    changeColor: "text-green-500",
    changeIcon: <UpTrandIcon />,
    isCurrency: false,
    negative: false,
  },
  {
    icon: (
      <svg
        width="55"
        height="54"
        viewBox="0 0 55 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.699951"
          y="0.5"
          width="53"
          height="53"
          rx="11.5"
          fill="#F6F8F9"
        />
        <rect
          x="0.699951"
          y="0.5"
          width="53"
          height="53"
          rx="11.5"
          stroke="url(#paint0_linear_38_22410)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M39.1987 20.1387C39.2427 18.1653 38.2374 16.44 36.7547 15.576C35.4827 14.8347 33.908 14.7667 32.5334 15.6253C31.16 14.7667 29.584 14.8347 28.312 15.576C26.8294 16.44 25.824 18.1653 25.868 20.1387C25.9254 22.684 27.896 24.7573 30.78 26.4707C31.316 26.788 31.888 27.148 32.5334 27.148C33.1787 27.148 33.7507 26.788 34.2867 26.4707C37.1707 24.7573 39.1414 22.684 39.1987 20.1387ZM22.3854 27.4373L19.732 29.0947C19.234 28.6065 18.5641 28.3335 17.8667 28.3347H16.5334C15.8261 28.3347 15.1478 28.6156 14.6477 29.1157C14.1477 29.6158 13.8667 30.2941 13.8667 31.0013V36.3347C13.8667 37.0419 14.1477 37.7202 14.6477 38.2203C15.1478 38.7204 15.8261 39.0013 16.5334 39.0013H17.8667C18.3348 39.0013 18.7946 38.8781 19.2 38.644C19.6054 38.41 19.942 38.0734 20.176 37.668H21.2374C21.4442 37.6678 21.6482 37.7157 21.8334 37.808L24.9667 39.3747C26.2929 40.0374 27.8023 40.2392 29.256 39.948L33.536 39.0933C34.1214 38.976 34.6734 38.7293 35.1494 38.3707L39.244 35.3C39.6442 34.9999 39.9691 34.6108 40.1928 34.1635C40.4166 33.7161 40.5332 33.2229 40.5334 32.7227V32.648C40.5334 30.288 38.0494 28.752 35.9374 29.808C35.0174 30.268 34.168 30.9747 33.3134 31.5453C33.8067 30.0613 33.0214 28.4147 31.46 28.0253L26.5054 26.7853C25.8101 26.6116 25.0869 26.5798 24.379 26.6918C23.6711 26.8039 22.9931 27.0574 22.3854 27.4373Z"
          fill="url(#paint1_linear_38_22410)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_38_22410"
            x1="27.2"
            y1="0"
            x2="27.2"
            y2="54"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#C521FF" />
            <stop offset="0.495" stop-color="#FF2164" />
            <stop offset="1" stop-color="#FF9B21" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_38_22410"
            x1="27.2"
            y1="15.0006"
            x2="27.2"
            y2="40.0778"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#C521FF" />
            <stop offset="0.5" stop-color="#FF2164" />
            <stop offset="1" stop-color="#FF9B21" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Total Taken",
    value: "123",
    change: "15%",
    changeColor: "text-red-500",
    changeIcon: <DownTrandIcon/>,
    isCurrency: false,
    negative: true,
  },
  {
    icon: (
      <svg
        width="55"
        height="54"
        viewBox="0 0 55 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.899902"
          y="0.5"
          width="53"
          height="53"
          rx="11.5"
          fill="#F6F8F9"
        />
        <rect
          x="0.899902"
          y="0.5"
          width="53"
          height="53"
          rx="11.5"
          stroke="url(#paint0_linear_38_22422)"
        />
        <g clip-path="url(#clip0_38_22422)">
          <path
            d="M39.3999 32.524V34.3333C39.3999 35.4187 38.8919 36.3467 38.1866 37.076C37.4892 37.7987 36.5426 38.388 35.4772 38.8547C33.3412 39.788 30.4852 40.3333 27.3999 40.3333C24.3146 40.3333 21.4586 39.7893 19.3226 38.8547C18.2572 38.388 17.3106 37.7987 16.6132 37.076C15.9666 36.4093 15.4866 35.572 15.4106 34.6013L15.3999 34.3333V32.524C16.0199 32.876 16.6826 33.188 17.3919 33.4507C20.0986 34.452 23.6386 35.0107 27.3999 35.0107C31.1612 35.0107 34.7012 34.452 37.4079 33.4507C37.9399 33.2533 38.4452 33.0293 38.9266 32.78L39.3999 32.524ZM15.3999 25.1907C16.0199 25.5427 16.6826 25.8547 17.3919 26.1173C20.0986 27.1187 23.6386 27.6773 27.3999 27.6773C31.1612 27.6773 34.7012 27.1187 37.4079 26.1173C38.1172 25.8547 38.7799 25.544 39.3999 25.1907V29.3307C38.5145 30.0141 37.531 30.5598 36.4826 30.9493C34.1426 31.816 30.9306 32.3453 27.3999 32.3453C23.8706 32.3453 20.6586 31.816 18.3172 30.9493C17.2688 30.5598 16.2853 30.0141 15.3999 29.3307V25.1907ZM27.3999 15C30.4852 15 33.3412 15.544 35.4772 16.4787C36.5426 16.9453 37.4892 17.5347 38.1866 18.2573C38.8332 18.924 39.3132 19.7613 39.3892 20.732L39.3999 21V21.9973C38.5146 22.6808 37.531 23.2265 36.4826 23.616C34.1426 24.4827 30.9306 25.012 27.3999 25.012C23.8706 25.012 20.6586 24.4827 18.3172 23.616C17.3852 23.2707 16.5439 22.816 15.7772 22.2747L15.3999 21.9973V21C15.3999 19.9147 15.9079 18.9867 16.6132 18.2573C17.3106 17.5347 18.2572 16.9453 19.3226 16.4787C21.4586 15.5453 24.3146 15 27.3999 15Z"
            fill="url(#paint1_linear_38_22422)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_38_22422"
            x1="27.3999"
            y1="0"
            x2="27.3999"
            y2="54"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#C521FF" />
            <stop offset="0.495" stop-color="#FF2164" />
            <stop offset="1" stop-color="#FF9B21" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_38_22422"
            x1="27.3999"
            y1="15"
            x2="27.3999"
            y2="40.3333"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#C521FF" />
            <stop offset="0.5" stop-color="#FF2164" />
            <stop offset="1" stop-color="#FF9B21" />
          </linearGradient>
          <clipPath id="clip0_38_22422">
            <rect
              width="32"
              height="32"
              fill="white"
              transform="translate(11.3999 11)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Total Revenue",
    value: "123",
    change: "28%",
    changeColor: "text-green-500",
    changeIcon: <UpTrandIcon/>,
    isCurrency: false,
    negative: false,
  },
  {
    icon: (
      <svg
        width="55"
        height="54"
        viewBox="0 0 55 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.1001"
          y="0.5"
          width="53"
          height="53"
          rx="11.5"
          fill="#F6F8F9"
        />
        <rect
          x="1.1001"
          y="0.5"
          width="53"
          height="53"
          rx="11.5"
          stroke="url(#paint0_linear_38_22434)"
        />
        <path
          d="M27.6 13.6667C28.8494 13.6667 30.0667 13.8107 31.2347 14.0813C31.4076 14.1186 31.5713 14.1899 31.7164 14.291C31.8615 14.3922 31.985 14.5212 32.0797 14.6706C32.1745 14.8199 32.2386 14.9866 32.2682 15.161C32.2979 15.3353 32.2926 15.5138 32.2526 15.6861C32.2127 15.8584 32.1388 16.021 32.0354 16.1645C31.932 16.308 31.801 16.4294 31.6502 16.5218C31.4994 16.6142 31.3317 16.6756 31.1569 16.7025C30.9821 16.7295 30.8037 16.7214 30.632 16.6787C29.9745 16.5259 29.3064 16.4234 28.6334 16.372L28.0734 16.3413L28.5267 16.368C30.4554 16.5144 32.3197 17.1275 33.9587 18.1547L34.3227 18.392L35.1307 17.584C35.3701 17.3423 35.6928 17.2013 36.0328 17.1898C36.3727 17.1782 36.7043 17.2971 36.9595 17.522C37.2147 17.7469 37.3743 18.0608 37.4056 18.3995C37.437 18.7382 37.3377 19.0761 37.128 19.344L37.0174 19.4693L36.3574 20.1293C38.2234 22.121 39.3547 24.6892 39.5648 27.4103C39.7748 30.1314 39.051 32.8429 37.5128 35.0973C35.9746 37.3517 33.7138 39.0145 31.1035 39.8112C28.4931 40.6079 25.6892 40.491 23.1542 39.4798C20.6193 38.4686 18.5047 36.6235 17.1594 34.2489C15.8142 31.8743 15.3185 29.112 15.7543 26.4178C16.1901 23.7236 17.5313 21.2585 19.5565 19.429C21.5818 17.5996 24.1702 16.5152 26.8947 16.3547L27.16 16.3413L27.08 16.3427C26.3907 16.3693 25.716 16.4493 25.0587 16.5747L24.568 16.6787C24.2259 16.7524 23.8685 16.6887 23.573 16.5012C23.2774 16.3137 23.0674 16.0176 22.9883 15.6766C22.9092 15.3357 22.9673 14.9773 23.1501 14.6789C23.3329 14.3804 23.6257 14.1658 23.9654 14.0813C25.1334 13.8107 26.352 13.6667 27.6 13.6667ZM27.6 21.6667C27.2464 21.6667 26.9073 21.8071 26.6572 22.0572C26.4072 22.3072 26.2667 22.6464 26.2667 23V28.3333C26.2667 28.687 26.4072 29.0261 26.6572 29.2761C26.9073 29.5262 27.2464 29.6667 27.6 29.6667C27.9537 29.6667 28.2928 29.5262 28.5428 29.2761C28.7929 29.0261 28.9334 28.687 28.9334 28.3333V23C28.9334 22.6464 28.7929 22.3072 28.5428 22.0572C28.2928 21.8071 27.9537 21.6667 27.6 21.6667Z"
          fill="url(#paint1_linear_38_22434)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_38_22434"
            x1="27.6001"
            y1="0"
            x2="27.6001"
            y2="54"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#C521FF" />
            <stop offset="0.495" stop-color="#FF2164" />
            <stop offset="1" stop-color="#FF9B21" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_38_22434"
            x1="27.6004"
            y1="13.6667"
            x2="27.6004"
            y2="40.3339"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#C521FF" />
            <stop offset="0.5" stop-color="#FF2164" />
            <stop offset="1" stop-color="#FF9B21" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Pending Orders",
    value: "$1234.99",
    change: "28%",
    changeColor: "text-red-500",
    changeIcon: <DownTrandIcon/>,
    isCurrency: true,
    negative: true,
  },
  {
    icon: (
      <svg
        width="55"
        height="54"
        viewBox="0 0 55 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.30005"
          y="0.5"
          width="53"
          height="53"
          rx="11.5"
          fill="#F6F8F9"
        />
        <rect
          x="1.30005"
          y="0.5"
          width="53"
          height="53"
          rx="11.5"
          stroke="url(#paint0_linear_38_22446)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M29.5334 36.832C27.475 37.1949 25.3547 36.9041 23.4701 36.0004C21.5854 35.0967 20.0311 33.6255 19.0254 31.7933C18.7674 31.3337 18.3384 30.9946 17.8316 30.8496C17.3249 30.7046 16.7814 30.7654 16.3193 31.019C15.8573 31.2725 15.5139 31.6982 15.364 32.2035C15.2141 32.7088 15.2697 33.2528 15.5187 33.7173C18.3214 38.8307 24.1587 41.8413 30.228 40.7707C37.8414 39.4293 42.9267 32.168 41.584 24.5533C40.24 16.9387 32.98 11.8533 25.3654 13.1973C22.3485 13.7291 19.5892 15.2354 17.5104 17.4855C15.4315 19.7356 14.1479 22.6052 13.856 25.6547C13.6907 27.4 15.544 28.5333 17.0134 27.72L20.7734 25.6373C22.836 24.496 21.796 21.3453 19.4587 21.656L19.3227 21.6747C20.2073 20.2627 21.4307 19.0942 22.8817 18.2752C24.3327 17.4563 25.9653 17.0129 27.6313 16.9853C29.2972 16.9577 30.9436 17.3468 32.4209 18.1172C33.8983 18.8877 35.1597 20.015 36.0906 21.3969C37.0215 22.7788 37.5923 24.3713 37.7513 26.0299C37.9102 27.6885 37.6522 29.3604 37.0008 30.894C36.3493 32.4275 35.325 33.7739 34.0209 34.8109C32.7168 35.8479 31.1742 36.5427 29.5334 36.832Z"
          fill="url(#paint1_linear_38_22446)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_38_22446"
            x1="27.8"
            y1="0"
            x2="27.8"
            y2="54"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#C521FF" />
            <stop offset="0.495" stop-color="#FF2164" />
            <stop offset="1" stop-color="#FF9B21" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_38_22446"
            x1="27.8224"
            y1="12.9819"
            x2="27.8224"
            y2="40.986"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#C521FF" />
            <stop offset="0.5" stop-color="#FF2164" />
            <stop offset="1" stop-color="#FF9B21" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Pending Returns",
    value: "$1234.99",
    change: "28%",
    changeColor: "text-red-500",
    changeIcon: <DownTrandIcon/>,
    isCurrency: true,
    negative: true,
  },
];

export const Crousal = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = 270; // px, adjust if needed
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex items-center w-full relative py-2">
      {/* Left Arrow */}
      <button
        className="mx-1 p-1 absolute left-[-13px] rounded-full border border-gray-200 bg-white shadow-sm text-gray-400 hover:text-purple-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
        onClick={() => scroll("left")}
        aria-label="Scroll left"
      >
        <svg width="10" height="10" fill="none" viewBox="0 0 24 24">
          <path
            d="M15 19l-7-7 7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {/* Cards */}
      <div
        className="flex space-x-4 h-[136px] overflow-x-hidden scrollbar-hide"
        ref={scrollRef}
        style={{ scrollBehavior: "smooth" }}
      >
        {stats.map((stat, idx) => (
          <div
            key={stat.title}
            className="min-w-[220px] md:min-w-[277px] bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm   flex flex-col justify-between"
          >
            <div className="py-3 px-5">
              <div className="flex items-center mb-2">
                {stat.icon}
                <div className="ml-3">
                  <span className="text-gray-500 dark:text-gray-200 text-sm font-medium">
                    {stat.title}
                  </span>
                  <div className="text-2xl font-semibold mb-1 dark:text-white">
                    {stat.value}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between h-[42px] p-3 rounded-b-xl items-center text-xs bg-white dark:bg-gray-600">
              <span
                className={`mr-2 font-semibold flex items-center ${stat.changeColor}`}
              >
                {stat.changeIcon}{stat.change}
              </span>
              <span className="text-gray-400 dark:text-gray-300">
                From The Last Month
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* Right Arrow */}
      <button
        className="mx-1 p-1 absolute right-[-13px] rounded-full border border-gray-200 bg-white shadow-sm text-gray-400 hover:text-purple-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
        onClick={() => scroll("right")}
        aria-label="Scroll right"
      >
        <svg width="10" height="10" fill="none" viewBox="0 0 24 24">
          <path
            d="M9 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};
