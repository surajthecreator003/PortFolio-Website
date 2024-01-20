

//checking if the senderEmail is valid or not and is not a array of emails
export const validateString=(value:unknown,maxlength:number)=>{
    if(!value || typeof value !=="string" || value.length>maxlength){
    return false 
    }   

    return true;
}


export const getErrorMessage=(error:unknown):string=>{
    
    //now do type checking for error

    let message:string

    if(error instanceof Error){
         message=error.message
        
     }else if(error && typeof error === "object" && "message" in error){
        message=String(error.message)
     }else if(typeof error === "string"){
         message=error
     }
     else{
        message="Something went wrong"
     }

     return message
}