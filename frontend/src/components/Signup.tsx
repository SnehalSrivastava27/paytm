import React from "react"
import {Heading}from "./Heading"
import { InputBox } from "./InputBox"
import { SubHeading } from "./SubHeading"
import { Button } from "./Button"
export default function Signup(){
   return (
    <>
        <div className="h-screen w-screen flex flex-col justify-center items-center">
           <Heading label={"Sign up"}/>
           <SubHeading label={"Enter information to login/signup"}></SubHeading>
           <InputBox head={"First Name"} place={"enter first name"}></InputBox>
           <InputBox head={"Last Name"} place={"enter last name"}></InputBox>
           <InputBox head={"Email"} place={"enter email"}></InputBox>
           <InputBox head={"Password"} place={"enter password"}></InputBox> 
           <Button label="Sign up"></Button>   
        </div>
    </>
   )
}