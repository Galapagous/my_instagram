import "./profile.scss"
import { useState } from "react"
import { Link} from "react-router-dom"
import { API, Auth, Storage, graphqlOperation } from "aws-amplify"
import { useEffect } from "react"
import { listFollows, listPosts, listUsers } from "../../graphql/queries"
import ProfileCard from "../../components/ProfileCard/ProfileCard"
import { createFollow, deleteFollow } from "../../graphql/mutations"
import { ToastContainer, toast } from "react-toastify"


const Profile = ()=>{
    const [user, setCurrUser] = useState({})
    const [profilePageOwner, setPageOwner] = useState({})
    const [userPost, setUserPost] = useState({})
    const [view, setView] = useState("Post")
    const [followers, setFollowers] = useState("")
    const [followings, setFollowings] = useState("")
    const [image, setImage] = useState({})
    const [owner, setOwner] = useState(false)
    const queryParams = window.location.href.split("/")
    useEffect(()=>{
    const gettheUser = async ()=>{
        const id = queryParams[queryParams.length - 1]
        const autUser = await Auth.currentAuthenticatedUser()
        const listPost = await API.graphql(graphqlOperation(listPosts))
        const UserListPost = listPost.data.listPosts.items.filter(each_post=>{
            return(each_post.owner.id === id)
        })
        setUserPost(UserListPost)
        const ListUser = await API.graphql(graphqlOperation(listUsers))
        const currUser = ListUser.data.listUsers.items.filter(each_Item=>{
            return(each_Item.uniqueId === autUser.attributes.sub)
        })
        const pageOwner = ListUser.data.listUsers.items.filter(each_user=>{
            return(each_user.id === id)
        })
        setPageOwner(pageOwner[0])
        const getFollower = await API.graphql(graphqlOperation(listFollows))
        const ownerFollower = getFollower.data.listFollows.items.filter(each_follow=>{
            return(
                each_follow.starId === id
            )
        })
        setFollowers(ownerFollower)
        const ownerFollowing = getFollower.data.listFollows.items.filter(each_follow=>{
            return(
                each_follow.admirerId === id
            )
        })
        setFollowings(ownerFollowing)
        const getImage = await Storage.get(pageOwner[0].avatar,{expires: 60})
        setImage(getImage)
        setCurrUser(currUser[0])
        if(pageOwner[0].id === currUser[0].id){
            setOwner(true)
        } 
    }
    
    gettheUser([queryParams])
},[queryParams])

const handleFollow = async()=>{
    for(let i = 0; i < followers.length; i++){
        if (followers[i].admirerId === user.id){
            toast("youre already following this user")
            return
        }
    }
    try {
        await API.graphql(graphqlOperation(createFollow, {
            input:{
                admirerId: user.id,
                starId: profilePageOwner.id
            }
        }))
        toast("You are now a follower")
    } catch (error) {
        toast("error following")
        console.log(error)
    }
    toast("You are now a follower")
}
const handleUnFollow = async()=>{
    for(let i = 0; i < followers.length; i++){
        if (followers[i].admirerId === user.id){
            //unfollow user
            try {
                await API.graphql(graphqlOperation(deleteFollow, {
                    input: {
                        id: followers[i].id
                    }
                }))
                toast("unfollow")
                return
            } catch (error) {
                toast("error Unfollowing")
                console.log(error)
            }
        }
    }
    toast("You are not yet a follower")
}

return(
        <div className="container">
        <ToastContainer></ToastContainer>
            <div className="top-area">
                <div className="left-side">
                    <img src={image} alt="profile"/>
                </div>
                <div className="right-side">
                    <div className="level-one">
                        <h3>{profilePageOwner && profilePageOwner.name}</h3>
                        {owner ?
                        <Link to="/single"><button>Edit profile</button></Link> : 
                        <div className="follow">
                        <button onClick={handleFollow}>Follow</button>
                        <button onClick={handleUnFollow}>UnFollow</button>
                        </div>
                        } 
                    </div>
                    <div className="level-two">
                        <span>{userPost.length ? userPost.length : 0} post</span>
                        <span>{followers.length} followers</span>
                        <span>{followings.length} following</span>
                    </div>
                    <div className="level-three">
                        <h4>{profilePageOwner && profilePageOwner.username}</h4>
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