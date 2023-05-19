import "./rightside.scss"
import { API, Auth, Storage, graphqlOperation } from "aws-amplify"
import { listUsers } from "../../graphql/queries"
import { useEffect, useState } from "react"
import InputComment from "../inputComment/inputComment"
import { Link } from "react-router-dom"
const Rightside = ()=>{
  const [currUser, setCurrUser] = useState({})
  const [allUser, setAllUser] = useState([])
  const [userPix, setUserPix] = useState("")
  const [otherUsers, setOtherUsers] = useState([])
  useEffect(()=>{
        const getUser = async()=>{
        const AuthUser = await Auth.currentAuthenticatedUser();
        const listUser = await API.graphql(graphqlOperation(listUsers));
        const filteredUsers = listUser.data.listUsers.items.filter(
          (item) => item.uniqueId === AuthUser.attributes.sub
        );
        const otherUser = listUser.data.listUsers.items.filter(each_item=>{
          return(
            each_item.uniqueId !== AuthUser.attributes.sub
          )
        })
        setOtherUsers(otherUser)
        console.log(otherUser)
        const pix = await Storage.get(filteredUsers[0].avatar, {expires: 60})
        setAllUser(listUser.data.listUsers.items)
        setUserPix(pix)
        setCurrUser(filteredUsers[0])

    }
    getUser()
  },[])
  return(
    <div className="right-container">
      <div className="right-top">
        <div className="left-right-container">
          <div className="left-left-container">
          <Link to={`/single/${currUser.id}`}>
            <img src={userPix} alt="profile"/>
          </Link>
          </div>
          <div className="right-left-container">
            <h4>{currUser.name}</h4>
            <p>{currUser.username}</p>
          </div>
        </div>
        <span>{currUser.username}</span>
      </div>
      <div className="middle">
        <h4>Suggestion for you</h4>
      </div>
      <div className="bottom">
      <div className="bottom-item">
        {otherUsers.map(each_element=>{
          return(
            <div className="bottom-element">
              <InputComment lime = {each_element} title={each_element.name} button="none"/>
            <span>{each_element.username}</span>
            </div>
          )
        })}
      </div>
        <div className="footer">
          <div className="top">
            <ul>
              <li>About</li>
              <li>Help</li>
              <li>API</li>
              <li>Jobs</li>
              <li>Provacy</li>
              <li>Terms</li>
              <li>Location</li>
              <li>Language</li>
              <li>Galapagous</li>
            </ul>
          </div>
          <div className="bottom">
            <h4>&copy; </h4>
            <h4>instgram from Muhammed Musa</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightside