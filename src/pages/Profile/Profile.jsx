import "./profile.scss"
import { AccountCircle, Settings, MoreHorizRounded } from "@mui/icons-material"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { API, Auth, Storage, graphqlOperation } from "aws-amplify"
import { useEffect } from "react"
import { getUser, listPosts, listUsers } from "../../graphql/queries"
import ProfileCard from "../../components/ProfileCard/ProfileCard"


const Profile = ()=>{
    const [user, setCurrUser] = useState({})
    const [userPost, setUserPost] = useState({})
    const [view, setView] = useState("Post")
    const [mainId, setMainId] = useState("")
    const [image, setImage] = useState({})
    const [owner, setOwner] = useState(false)
    const queryParams = window.location.href.split("/")
    useEffect(()=>{
    const gettheUser = async ()=>{
        const id = queryParams[queryParams.length - 1]
        setMainId(id)
        const autUser = await Auth.currentAuthenticatedUser()
        const listPost = await API.graphql(graphqlOperation(listPosts))
        // console.log({user: autUser})
        const UserListPost = listPost.data.listPosts.items.filter(each_post=>{
            return(each_post.owner.id === id)
        })
        setUserPost(UserListPost)
        const ListUser = await API.graphql(graphqlOperation(listUsers))
        const currUser = ListUser.data.listUsers.items.filter(each_Item=>{
            return(each_Item.id === autUser.attributes.sub)
        })
        const pageOwner = ListUser.data.listUsers.items.filter(each_user=>{
            return(each_user.id === id)
        })
        const getImage = await Storage.get(pageOwner[0].avatar,{expires: 60})
        setImage(getImage)
        setCurrUser(pageOwner)
        pageOwner[0].id === mainId && setOwner(true)
    }
    
    gettheUser()
},[])

const handleFollow = ()=>{
    
}

return(
        <div className="container">
            <div className="top-area">
                <div className="left-side">
                    <img src={image} alt="profile"/>
                </div>
                <div className="right-side">
                    <div className="level-one">
                        <h3>{user.length && user[0].name}</h3>
                        {owner ?
                        <Link to="/single"><button>Edit profile</button></Link> : 
                        <button onClick={handleFollow}>Follow</button>
                        } 
                    </div>
                    <div className="level-two">
                        <span>{userPost.length ? userPost.length : 0} post</span>
                        <span>0 followers</span>
                        <span>0 following</span>
                    </div>
                    <div className="level-three">
                        <h2>{user.name}</h2>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="bottom-area">
                <div className="top">
                    <div className="item-status" onClick={()=>{setView("Post")}}>
                    {/* <ItemCard logo={Apps} title = "POST"/> */}
                    </div>
                    <div className="item-status" onClick={()=>{setView("Saved")}}>
                    {/* <ItemCard logo={Bookmark} title = "SAVED"/> */}
                    </div>
                    <div className="item-status" onClick={()=>{setView("Tagged")}}>
                    {/* <ItemCard logo={PersonAddAlt} title = "TAGGED"/> */}
                    </div>
                </div>
                <div className="bottom">
                {view === "Post" && <div className="my-post">
                    <div className="posts">
                    {(userPost.length)  ?
                    userPost.map((eachPost=>{
                        return(
                            <div className="profile-container">
                            <ProfileCard data = {eachPost}/>
                            </div>
                        )
                    })) : <h1>No post yet</h1>}
                    </div>
                </div>}
                {view === "Saved" && <div className="saved-post">
                    <div className="saved">
                    {(!user.savedPost === null)  ?
                    user.post.map((eachPost=>{
                        return(
                        {/* <ProfileCard img={Post4} like = {eachPost.likes.length} comment ={eachPost.comment.length}/> */}
                        )
                    })) : <h1>No savedPost yet</h1>}
                    </div>
                </div>}
                {view === "Tagged" && <div className="tagged-post">
                    <div className="tagged">
                    {(!user.taggedPost === null) ? user.taggedPost.map((eachPost=>{
                            return(
                                {/* <ProfileCard img={Post4} like = {eachPost.likes.length} comment = {eachPost.comment.length}/> */}
                            )
                        })) : <h1>No tagged Post</h1>}
                    </div>
                </div>}
                </div>
            </div>
        </div>
    )
}

export default Profile