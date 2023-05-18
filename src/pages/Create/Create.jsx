import { CollectionsRounded } from "@mui/icons-material";
import "./create.scss";
import Background2 from "../../components/Assets/post4.jpg";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API, Auth, Storage, graphqlOperation } from "aws-amplify";
import { listUsers } from "../../graphql/queries";
import { Navigate } from "react-router-dom";
import { createPost } from "../../graphql/mutations";

const Create = () => {
  const [needsProfileUpdate, setNeedsProfileUpdate] = useState(false);
  const [currUser, setCurrUser] = useState({})
  const [newPost, setNewPost] = useState({title: "", description: "", image: ""})
  const [photoView, setPhotoView] = useState({})
  const [file, setImageFile] = ([])
  const [imageName, setImageName] = useState(null)

  useEffect(()=>{
    const getUser = async()=>{
      const AuthUser = await Auth.currentAuthenticatedUser()
      const listUser = await API.graphql(graphqlOperation(listUsers));
      const filteredUsers = listUser.data.listUsers.items.filter(
      (item) => item.uniqueId === AuthUser.attributes.sub);
      if (filteredUsers.length === 0) {
        setNeedsProfileUpdate(true);
        toast("You need to update your Profile");
      }else{
        setCurrUser(filteredUsers[0])
        setNewPost({...newPost, userPostsId: filteredUsers[0].id})
      }
    }
    getUser()
  }, [])

  const handleSubmit = async (e)=>{
    e.preventDefault()
    console.log({newPst: newPost})
    if (!(newPost.title && newPost.description || newPost.image)){
      console.log("Nothing")
      return
    }
    try {
      // console.log({bfrApSync: newPost})
      await API.graphql(graphqlOperation(createPost, {input: {
        title: newPost.title,
        description: newPost.description,
        image: newPost.image,
        userPostsId: newPost.userPostsId
      }}))
      console.log({after: newPost})
      toast("Done")
    } catch (error) {
      console.log(error)
    }
    
  }

  const handleImageChange =async (e)=>{
    const file = e.target.files[0]
    try {
        // addUser to s3 bucket storage
        toast("Uploading, please wait")
        const fileExtension = file.name.split(".")[1]
        setImageName(`${Date.now()}.${fileExtension}`)
        const {key} = await Storage.put(`${Date.now()}.${fileExtension}`,file,`image/${fileExtension}`)
        setNewPost({...newPost, image: key})
        toast("Upload successfull")
        setPhotoView(URL.createObjectURL(file))
        
    } catch (error) {
        console.log(error)
        toast("error uploading")
    }
}
  return (
    <div className="create-container">
    <ToastContainer></ToastContainer>
      <div className="create">
        <div className="post-logo">
          <h1>Create a new post</h1>
          <img src={Background2} alt="post background" />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={newPost.title}
            onChange={(e) => {
              setNewPost({...newPost, title: e.target.value});
            }}
          />
          <textarea
            placeholder="description"
            value={newPost.description}
            onChange={(e) => {
              setNewPost({...newPost, description: e.target.value});
            }}
          ></textarea>
          <div className="post-image">
            <div className="left">
              {photoView.length ? (
                <img src={photoView} alt="upload" />
              ) : (
                <p>Your image will appear here</p>
              )}
            </div>
            <div className="right">
              <label htmlFor="file-input">
                <CollectionsRounded />
              </label>
              <input
                style={{ display: "none" }}
                id="file-input"
                type="file"
                onChange={handleImageChange}
              />
            </div>
          </div>
          <button>Post</button>
        </form>
        {needsProfileUpdate && <Navigate to="/single" />}
      </div>
    </div>
  );
};

export default Create;
