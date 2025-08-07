"use client"

import {useForm} from "react-hook-form"
import { useSignUp } from "@clerk/nextjs"
import {z} from "zod"
//zod custom schema
import { signUpSchema } from "@/schemas/signUpSchema"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"


export default function signUpForm(){
  const [verifying,setVerifying] = useState(false)
  const [isSubmitting,setIsSubmitting]=useState(false)
  const [authError,setAuthError]=useState(false)
    const {signUp,isLoaded,setActive}=useSignUp()

    const {
      register,
      handleSubmit,
      formState:{errors},
    }=useForm<z.infer<typeof signUpSchema>>({
      resolver:zodResolver(signUpSchema),
      defaultValues:{
        email:"",
        password:"",
        passwordConfirmation:""
      }
    });

    const onSubmit= async(data:z.infer<typeof signUpSchema>)=>{
       if(!isLoaded)return;//return the value

    }



    const handleVerificationSubmit=async()=>{}
   if(verifying){
     return(
      <h1>this is the otp entering field</h1>
     )
     
   }
   return(
    <h1>complete the sign up form</h1>
   )

}



