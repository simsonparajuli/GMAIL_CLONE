import React, { useState } from "react";
import { MdCropSquare } from "react-icons/md";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { IoMdRefresh, IoMdMore } from "react-icons/io";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdInbox,
} from "react-icons/md";
import { GoTag } from "react-icons/go";
import Messages from "./Messages";
import SendMail from "./SendMail";

const mailType = [
  {
    icon: <MdInbox size={"20px"} />,
    text: "Primary",
  },
  {
    icon: <GoTag size={"20px"} />,
    text: "Promotions",
  },
  {
    icon: <FaUserFriends size={"20px"} />,
    text: "Social",
  },
];

function Inbox() {
  const [mailTypeSelected, SetMailTypeSelected] = useState(0);

  return (
    <div className="flex-1 bg-white rouded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        {/* Top bar at body  */}
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div className="flex item-center gap-1">
            <MdCropSquare size={"20px"} />
            <FaCaretDown size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdRefresh size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdMore size={"20px"} />
          </div>
        </div>
        
        <div className='flex items-center gap-2'>
            <p className='text-sm text-gray-500'>1-50 of 1000</p>
            <button disabled={false} className='hover:rounded-full hover:bg-gray-100'><MdKeyboardArrowLeft size={"24px"} /></button>
            <button disabled={false} className='hover:rounded-full hover:bg-gray-100'><MdKeyboardArrowRight size={"24px"} /></button>
        </div>
      </div>
      <div className="h-[90vh] overflow-y-auto">
        <div className="flex items-center gap-1">
          {mailType.map((item, index) => {
            return (
              <button
                key={index}
                className={`flex items-center gap-5 p-4 ${
                  mailTypeSelected === index
                    ? "border-b-4 border-b-blue-600 text-blue-600"
                    : "border-b-4 border-b-transparent"
                } w-52 hover:bg-gray-100`}
                onClick={() => SetMailTypeSelected(index)}>
                {item.icon}
                <span>{item.text}</span>
              </button>
            );
          })}
        </div>

        <Messages />
        <div className="absolute w-[30%] bottom-1 right-10 z-10">
          <SendMail />
        </div>
      </div>
    </div>
  );
}

export default Inbox;
