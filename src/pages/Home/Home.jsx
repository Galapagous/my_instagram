import React, { useEffect, useState } from "react";
import "./home.scss";
import Post from "../../components/Post/Post";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { listUsers } from "../../graphql/queries";
import { ToastContainer, toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { listPosts } from "../../graphql/queries";

const Home = ({ user }) => {
  const [needsProfileUpdate, setNeedsProfileUpdate] = useState(false);
  const [post, setPost] = useState([])
  const [currUser, setCurrUser] = useState({})
  useEffect(() => {
    const getUserList = async () => {
      try {
        const AuthUser = await Auth.currentAuthenticatedUser();
        const listUser = await API.graphql(graphqlOperation(listUsers));
        const filteredUsers = listUser.data.listUsers.items.filter(
          (item) => item.uniqueId === AuthUser.attributes.sub
        );
        if (filteredUsers.length === 0 || !listUser) {
          setNeedsProfileUpdate(true);
          toast("You need to update your Profile");
        }else{
          const fetchPost = await API.graphql(graphqlOperation(listPosts))
          setPost(fetchPost.data.listPosts.items)
          const sortedPosts = fetchPost.data.listPosts.items.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          // console.log({sort: sortedPosts})
          setCurrUser(sortedPosts)
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUserList();
  }, []);

  return (
    <div className="home-container">
      <ToastContainer></ToastContainer>
      <div className="post-area">
        {post.map(each_post=>{
          return(
            <Post data = {each_post} user = {currUser}/>
          )
        })}
        {/* {console.log({frmHome: user.pool.clientId})} */}
        {needsProfileUpdate && <Navigate to="/single" />}
      </div>
    </div>
  );
};

export default Home;
