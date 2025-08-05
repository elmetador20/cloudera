import * as z from "zod";
import { email } from "zod/v4";
 export const signUpSchema=z
   .object({
    email:z
        .string()// it will be the string type
        .min(1,{message:"Email is required"})
        .email({message:"please enter a valid email"}),
        //isme ye bata rha hai ki email string type ka h aur min email required hai and next me regex defined kie hai jo direct ho gya regex lijhe bina
      password:z
          .string()
          .min(1,{message:"Password is required"})
          .min(8,{message:"pasword should be minimum of 8 characters"}),
      passwordConfirmation:z
                .string()
                .min(1,{message:"Please confirm your password"})
                
   })
   .refine((data)=>data.password===data.passwordConfirmation,{
    message:"password do not match",
    path:["passwordConfirmation"]
   })