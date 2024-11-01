import React, { useState,useEffect } from 'react'
import Message from './Message'
import { collection,onSnapshot,query,orderBy } from "firebase/firestore";
import { db } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import {setEmails} from '../redux/appSlice'

function Messages() {
  const { emails } = useSelector(store => store.app);
  const dispatch = useDispatch();
  console.log(emails);

  useEffect(()=>{
    // Fetching our Firebase and getting our Emails
    const q = query(collection(db, "emails"), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
    const allEmails = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    dispatch(setEmails(allEmails));
    });

    // cleanup
    return () => unsubscribe();
  },[]);

  return (
    <div>
      {
        emails && emails?.map((email) => <Message key={email.id} email={email} />)
      }
  
    </div>
  )
}

export default Messages
