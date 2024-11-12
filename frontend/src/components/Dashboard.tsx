import React from "react"
import {Appbar} from "./Appbar"
import { Balance } from "./Balance"
export default function Dashboard(){
   return(
    <div>
     <Appbar user={"snehal"}></Appbar>
    <Balance value={27000}></Balance>
    </div>
   )
}