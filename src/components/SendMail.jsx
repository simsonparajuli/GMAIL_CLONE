import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import {useSelector , useDispatch} from 'react-redux'
import { setOpen } from "../redux/appSlice";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {db} from '../firebase'


function SendMail() {

  const [formData, setFormData]= useState({
    recipients:"",
    subject:"",
    message:""
  })

  const open = useSelector((state) => state.app.open);

  const dispatch = useDispatch();

  const changeHandler = (e)=> {
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const submitHandler = async (e) => {
    
    e.preventDefault();
    // This is how you submit data to firebase database
    await addDoc(collection(db, "emails"), {
        to: formData.recipients,
        subject: formData.subject,
        message: formData.message,
        createdAt: serverTimestamp(),
    })
    
    dispatch(setOpen(false));
    // Also empty the fields 
    setFormData({
      recipients: "",
      subject: "",
      message: ""
    })  
}

  return (
    <div className={`${open ? 'block' : 'hidden'} bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}>
      <div className="flex px-3 py-2 bg-[#F2F6FC] items-center justify-between rounded-t-md">
        <h1>New Message</h1>
        <button onClick={() => dispatch(setOpen(false))} className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
          <RxCross2 /> 
        </button>
      </div>
      <form onSubmit={submitHandler} className='flex flex-col p-3 gap-2'>
        <input onChange={changeHandler} value={formData.to} name="to" type="text" placeholder='Recipients' className='outline-none py-1' />
        <input onChange={changeHandler} value={formData.subject} name="subject" type="text" placeholder='Subject' className='outline-none py-1' />
        <textarea onChange={changeHandler} value = {formData.message} name="message" cols="30" rows="10" className='outline-none py-1'></textarea>
        {/* Make sure the submit button explicitly has type="submit" */}
        <button type='submit' className='bg-[#0B57D0] rounded-full w-fit px-4 py-1 text-white font-medium'>Send</button>
      </form>
    </div>

  );
}

export default SendMail;
