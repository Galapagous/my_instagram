// import Prof from "../../components/Assets/post2.jpg"
import "./single.scss"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API, Auth, Storage, graphqlOperation } from "aws-amplify";
import { listUsers } from "../../graphql/queries";
import { createUser, updateUser } from "../../graphql/mutations";

const Single = ()=>{
    const [currUser, setCurrUser] = useState({
        name: "",
        uniqueId: "",
        username: "",
        bio: "",
        website: "",
        phone: "",
        gender: "",
        avatar: ""
    })
    const [newUser, setNewUser] = useState(false)
    useEffect(()=>{
        const getUser = async ()=>{
            const userData = await Auth.currentAuthenticatedUser()
            const listUser = await API.graphql(graphqlOperation(listUsers));
            const filteredUsers = listUser.data.listUsers.items.filter(
                (item) => item.uniqueId === userData.attributes.sub
              );
              if (filteredUsers.length === 0) {
                setNewUser(true);
                toast("You need to update your Profile");
                setCurrUser({...currUser, uniqueId: userData.attributes.sub})
              }else{
                // console.log({fil: filteredUsers})
                    setCurrUser(filteredUsers[0])
                    const profilePix = await Storage.get(filteredUsers[0].avatar, {expires: 60})
                    setPrevAvatar(profilePix)
              }
        }
        getUser()
    },[currUser])
    const [prevAvatar, setPrevAvatar] = useState({})
    const handleAvatar =async (e)=>{
        const file = e.target.files[0]
        try {
            // addUser to s3 bucket storage
            // console.log("strt update prfPix")
            const fileExtension = file.name.split(".")[1]
            const {key} = await Storage.put(`${Date.now()}.${fileExtension}`,file,`image/${fileExtension}`)
            // console.log("done with s3 bucket")
            setCurrUser({...currUser, avatar: key})
            setPrevAvatar(URL.createObjectURL(file))
            
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit =async (e)=>{
        e.preventDefault()
        if (!(currUser.name || currUser.username || currUser.bio || currUser.website || currUser.gender || currUser.avatar || currUser.phone)) return
        // use s3 bucket to store image
        try{
            if (newUser){
                await API.graphql(graphqlOperation(createUser, {input: currUser}))
                //---------create a new user-------------------
            }else{
                // console.log({frmUpd: currUser})
                await API.graphql(graphqlOperation(updateUser, {input: { 
                    id: currUser.id,
                    name: currUser.name && currUser.name,
                    username: currUser.username && currUser.username,
                    bio: currUser.bio && currUser.bio,
                    website: currUser.website && currUser.website,
                    gender: currUser.gender && currUser.gender,
                    phone: currUser.phone && currUser.phone,
                    avatar: currUser.avatar && currUser.avatar
                }}))
                //---------update user information
            }
            toast("Profile Updated")
        }catch(error){
            toast(error)
            console.log(error)
        }
        // console.log({frmProfile: currUser})
    }
    // --------------------setInput-------------------------
    return(
    <div className="edit-container">
    <ToastContainer></ToastContainer>
    <div className="ineer-container">
    <form onSubmit={handleSubmit}>
    <div className="write">
    <label htmlFor="file-input">
        <img src={prevAvatar} alt="avatar"/>
        <h3>Galapagous</h3>
    </label>
    <input style={{display:"none"}} id="file-input" type="file" onChange={handleAvatar}/>
    </div>
    <div className="write">
    <label>Name</label>
        <input placeholder={currUser.name || "Name"} value={currUser.name} onChange={(e=>{setCurrUser({...currUser, name: e.target.value})})}/>
    </div>
    <div className="write">
    <label>Username</label>
        <input placeholder={currUser.username || "username"} value={currUser.username} onChange={(e=>{setCurrUser({...currUser, username: e.target.value})})}/>
    </div>
    <div className="write">
    <label>Bio</label>
        <textarea placeholder={currUser.bio || "bio"} value={currUser.bio} onChange={(e=>{setCurrUser({...currUser, bio: e.target.value})})}/>
    </div>
    <div className="write">
    <label>Website</label>
        <input placeholder={currUser.website || "website"} value={currUser.website} onChange={(e=>{setCurrUser({...currUser, website: e.target.value})})}/>
    </div>
    <div className="write">
    <label>Phone</label>
        <input placeholder={currUser.phone || "phone"} value={currUser.phone} onChange={(e=>{setCurrUser({...currUser, phone: e.target.value})})}/>
    </div>
    <div className="write">
    <label>Gender</label>
        <input placeholder={currUser.gender || "gender"} value={currUser.gender} onChange={(e=>{setCurrUser({...currUser, gender: e.target.value})})}/>
    </div>
        <button>Submit</button>
    </form>
    </div>
    </div>
    )
}

export default Single