import "./profileCard.scss"
import React, { useEffect, useState } from 'react'
import { Favorite, ModeCommentRounded } from "@mui/icons-material"
import { API, Storage, graphqlOperation } from "aws-amplify"
import { listComments, listLikes } from "../../graphql/queries"

function ProfileCard({data}) {
  const [photo, setPhoto] = useState({})
  const [comment, setComment] = useState([])
  const [like, setLikes] = useState([])
  useEffect(()=>{
    const getInfo = async()=>{
      const getImage = await Storage.get(data.image,{expires: 60})
      setPhoto(getImage)
      const commentList = await API.graphql(graphqlOperation(listComments))
      const myComment = commentList.data.listComments.items.filter(each_comm=>{
        return(
          (each_comm.post.id === data.id)
        )
      })
      setComment(myComment)
      const likeList = await API.graphql(graphqlOperation(listLikes))
      const myLike = likeList.data.listLikes.items.filter(each_like=>{
        return(
          each_like.post.id === data.id
        )
      })
      setLikes(myLike)
    }
    getInfo()
  },[])
  return (
    <div className="profileCard">
        <img src={photo} alt="bedroom"/>
        <div className="post-reaction">
            <div className="like">
            <Favorite/>
            <span>{like.length}</span>
            </div>
            <div className="comment">
            <ModeCommentRounded/>
            <span>{comment.length}</span>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard