import { Link } from "react-router-dom";
import React from "react"
export const BottomWarning=({label,buttonText,to})=>{
    return(
        <div className="py-2 flex justify-center">
        <div>
            {label}
        </div>
        <Link to={to} className="">{buttonText}</Link>
        </div>
    )
}
