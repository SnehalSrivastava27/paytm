import React from "react"
//const CustomModal = ({visible, modalText, modalHeader}) => {}
export const Button=({label})=>{
  return(
    <div className="w-24 bg-gray-800 text-white hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
     <button>{label}</button>
    </div>
  )
}
//<button type="button" class="text-white bg-gray800 hover:bg-gray-900 
//focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 
//py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button>