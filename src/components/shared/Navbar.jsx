import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from "react-avatar";

function Navbar() {
    return (
      <div className="flex items-center justify-between px-3 h-16">
        {/* Left Section - Logo and Title */}
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <RxHamburgerMenu size="24px" />
          </div>
          <img
            className="w-8 object-cover"
            src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
            alt="gmail logo"
          />
          <h1 className="text-xl text-gray-500 font-medium hidden sm:block">Gmail</h1>
        </div>
  
        {/* Center Section - Search Bar (Hidden on small screens) */}
        <div className="hidden md:flex w-full max-w-md mx-auto">
          <div className="flex items-center bg-[#EAF1FB] px-2 py-2 rounded-full w-full">
            <IoIosSearch size="20px" className="text-gray-700" />
            <input
              type="text"
              placeholder="Search Mail"
              className="rounded-full w-full bg-transparent outline-none px-2"
            />
          </div>
        </div>
  
        {/* Right Section - Icons and Avatar (Hidden on small screens) */}
        <div className="flex items-center gap-2">
          {/* Each icon has a consistent size */}
          <div className="hidden md:flex items-center gap-2">
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <CiCircleQuestion size="20px" />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <CiSettings size="20px" />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <PiDotsNineBold size="20px" />
            </div>
          </div>
          {/* Avatar Icon */}
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <Avatar
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              size="32"
              round={true}
            />
          </div>
        </div>
      </div>
    );
  }
  

export default Navbar;
