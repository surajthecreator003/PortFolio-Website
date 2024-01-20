"use server"//makes all the function inside this server functions

import { getErrorMessage, validateString } from "@/lib/utils";
//why we write server actions not directly in client components ?
//makes sense writting server actions or functons outside client componennts
//as because server actions uses different dependecny than cleint componennts and 
//also makes redability easy and prevents security concerns also


import React from "react";
import { Resend } from "resend";//for sending email

import ContactFormEmail from "@/email/contact-form-email";

const resend=new Resend(process.env.RESEND_API_KEY);



export const sendEmail=async(formData:FormData)=>{

    console.log("Runnning on Server");
    // console.log(formData.get("senderEmail"));
    // console.log(formData.get("message"));

    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    console.log("senderEmail",senderEmail);
    console.log("message",message);


      //server side validation for message
      if(!message || typeof message !=="string"){//cehcking if mesage is not null and also not file type
        return {
            error:"Invalid Message"
        }
      }
      

      //checking if the senderEmail is valid or not and is not a array of emails
      if(!validateString(senderEmail,500)){
            return {
                error:"Invalid Email"
            }
      }
      

      //cehcking if message is invalid
      if(!validateString(message,5000)){
        return {
            error:"Invalid Message"
        }
      }


     //throw new Error("Test Error")


     let data;
      try{

        //dont change the resend.dev to resend.com as it will require to ad domain again 
        //in resend.com
        //this was causing the whole error
        data=await resend.emails.send({
          from: "Contact Form<onboarding@resend.dev>",
          to: "surajhustlermallick@gmail.com",
          subject: "Message from Contact Form of your portolio",
          reply_to: senderEmail as string,
          react: React.createElement(ContactFormEmail, {
            message : message as string,
            senderEmail : senderEmail as string,
          })
      })
           
      }
      catch(error : unknown){//unknown type as we can throw any type of error
      //console.log("reached error")
      return {
        error:getErrorMessage(error)
        //for more errros check Resned Logs
      }
  }

  return {data};
}
//Remember whatever you return from server action it reaches straight to 
//client without using something like res.semnd or something like we do in express
//or node js servers as Next js takes care of it 
//In express we have to manually send the errors in res.send or res.json