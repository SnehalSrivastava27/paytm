import React from "react"
import { SubHeading } from "./SubHeading"
import { Heading } from "./Heading"
import { Button } from "./Button"
import { InputBox } from "./InputBox"
import { BottomWarning } from "./BottomWarning"
export default function Signin(){
   return(
    <div className="h-screen w-screen flex flex-col justify-center items-center">
       <Heading label={"Sign in"}/>
           <SubHeading label={"Enter information to login/signup"}></SubHeading>
           <InputBox head={"Email"} place={"enter email"}></InputBox>
           <InputBox head={"Password"} place={"enter password"}></InputBox> 
           <Button label="Sign up"></Button>   
           <BottomWarning to={"/signup"} label={"Create new Account  "} buttonText={"Sign up"} ></BottomWarning>
    </div>
   )
}