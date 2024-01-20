

import React from "react";
import { FaPaperPlane } from "react-icons/fa";//the paper plane icon that
//when hovered will animate as if it is flying


//guves status of last form submission
import {useFormStatus } from "react-dom";

export default function SubmitBtn() {

  //pending returns a boolean value
  const { pending } = useFormStatus();//this pending will be used to determine
  //the state of form wheteher the email is sent or not



  //pending will help in showing a laoding button if the email is sent or not
  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}