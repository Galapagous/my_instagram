import React from "react"
import "./singlelayout.scss"
import LeftSide from "../LeftSide/Leftside"

const SingleLayout = ({children, user, signOut})=>{
  return(
    <div className="single-main">
      <div className="left-main">
      <LeftSide signOut = {signOut}/>
      </div>
      <div className="right-main">
        {children}
      </div>
    </div>
  )
}

export default SingleLayout