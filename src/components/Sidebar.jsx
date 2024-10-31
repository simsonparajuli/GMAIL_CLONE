import React from "react";
import {useState} from "react"
import { LuPencil } from "react-icons/lu";
import { MdOutlineWatchLater,MdOutlineKeyboardArrowDown,MdOutlineDrafts,MdInbox } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { TbSend2 } from "react-icons/tb";
import { setOpen } from "../redux/appSlice";
import { useDispatch } from "react-redux";

const sidebarItems = [
  {
    icon: <MdInbox size={"20px"} />,
    text: "Inbox",
  },
  {
    icon: <IoMdStar size={"20px"} />,
    text: "Starred",
  },
  {
    icon: <MdOutlineWatchLater size={"20px"} />,
    text: "Snoozed",
  },
  {
    icon: <TbSend2 size={"20px"} />,
    text: "Sent",
  },
  {
    icon: <MdOutlineDrafts size={"20px"} />,
    text: "Drafts",
  },
  {
    icon: <MdOutlineKeyboardArrowDown size={"20px"} />,
    text: "More",
  },
];

function Sidebar() {
  
  const dispatch = useDispatch();

  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button onClick={()=> dispatch(setOpen(true))} className="flex items-center gap-2 p-4 rounded-2xl hover: shadow bg-[#C2E7FF]">
          <LuPencil size={"24px"} />
          Compose
        </button>
      </div>

      {sidebarItems.map((item) => {
        return (
          <div className="text-gray-500">
            <div className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:bg-gray-200 hover:cursor-pointer my-2">
              {item.icon}
              {item.text}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
