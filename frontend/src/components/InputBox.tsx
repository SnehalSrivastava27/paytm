import React from "react"
//const CustomModal = ({visible, modalText, modalHeader}) => {}
export const InputBox=({head,place})=>{
  return(
    <>
    <div className="font-bold text-lg ">
     {head}
    </div>
    <input className="w-80 h-10" placeholder={place}></input>
    </>
  )
}