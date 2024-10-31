import React from "react";
import { MdCropSquare } from "react-icons/md";
import { RiStarLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Message() {
    const navigate = useNavigate();
    const openMail = () => {
        navigate('/mail/dfdf');
    }
  return (
    <div onClick={openMail} className="flex item-start justify-between border-b border-gray-200 px-4 py-3 text-sm hover: cursor-pointer hover:shadow-md">
      <div className="flex items-center gap-3">
        <div className="flex-none text-gray-300">
          <MdCropSquare className="w-5 h-5" />
        </div>
        <div className="flex-none text-gray-300">
          <RiStarLine className="w-5 h-5" />
        </div>
        <div>
          <h1 className="font-semibold">email</h1>
        </div>
      </div>
      <div className="flex-1 ml-4">
            <p className="text-gray-600 truncate inline-block max-w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magnam necessitatibus officiis similique libero ipsam consectetur suscipit totam accusamus quaerat hic ratione sequi numquam debitis, nam explicabo itaque qui consequuntur?</p>   
        </div>
        <div className="flex-none text-gray-400 text-sm">
                <p>1:34 pm</p>
            </div>
    </div>
  );
}

export default Message;
