import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { useState,useEffect } from "react"
import SendMoney  from "./components/SendMoney"
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard"

function App() { 
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/signin" element={<Signin/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
    <Route path="/send" element={<SendMoney/>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
