import { useEffect, useState } from "react"
import "./inputComment.scss"
import { Storage } from "aws-amplify"
const InputComment = ({Imcon, title, desc, time, lime, button})=>{
  const [userImage, setUserImage]= useState("")
  useEffect(()=>{
    if (lime){
      const getImage = async()=>{
        const justPix = await Storage.get(lime.avatar, {expires: 60})
        setUserImage(justPix)
      }
      getImage()
    }
  },[])
  return(
    <div className="main-container">
    <div className="com-top">
    <div className="com-left">
      <img src={Imcon || userImage} alt="profile"/>
    </div>
    <div className="com-right">
      {title && <h4>{title}</h4>}
      {desc && <p>{desc}</p>}
    </div>
    </div>
    <div className="com-bottom">
      {time && <span>{time}</span>}
      {!button && <p><button onClick={()=>{alert("like comment")}}>like</button></p>}
    </div>
    </div>
  )
}


export default InputComment