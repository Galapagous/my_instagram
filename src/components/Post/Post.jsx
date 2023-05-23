import {Cancel, Bookmark, BookmarkOutlined, ChatOutlined, FavoriteOutlined, MoreHoriz, ShareOutlined, EmojiEmotions, Send} from '@mui/icons-material';
import "./post.scss"
import { useEffect, useState } from 'react';
import { API, Storage, graphqlOperation } from 'aws-amplify';
import { listComments, listLikes } from '../../graphql/queries';
import { createComment, createLike, deleteLike} from '../../graphql/mutations';
import EmojiPicker from 'emoji-picker-react';
import InputComment from '../inputComment/inputComment';
import { ToastContainer, toast } from 'react-toastify';
import ReactTimeAgo from 'react-time-ago';
import { Link } from 'react-router-dom';
const Post = ({data, user})=>{
const [currUser, setCurrUser] = useState({})
const [postImage, setPostImage] = useState("")
const [userOwner, setUserOwner]  = useState("")
const [postOwner, setPostOwner]  = useState("")
const [ownerPix, setOwnerPix] = useState("")
const [likes, setLikes] = useState([])
const [showText, setShowText] = useState(false)
const [comment, setComment] = useState([])
const [viewEmojiPlane, setViewEmojiPlane] = useState(false);
const [inputValue, setInputValue] = useState('');
  useEffect(()=>{
    setCurrUser(user[0])
    const getPhoto = async()=>{
    const userPix = await Storage.get(user[0].avatar, {expires: 60})
    setUserOwner(userPix)
    const postPix = await Storage.get(data.image, {expires: 60})
    setPostOwner(data.owner)
    const ownerProfPix = await Storage.get(data.owner.avatar, {expires: 60})
    setPostImage(postPix)
    const getComment = await API.graphql(graphqlOperation(listComments))
    setComment(getComment.data.listComments.items.filter(each_comment=>{
      return(each_comment.post.id === data.id)
    }))
    setOwnerPix(ownerProfPix)
    const theLikes =await API.graphql(graphqlOperation(listLikes))
    setLikes(theLikes.data.listLikes.items.filter(each_like=>{
      return(each_like.post.id === data.id)
    }))
    }
    getPhoto()
  },[likes, comment, data.id, data.image, data.owner, user])
  const [viewComment, setViewComment] = useState(false)
  const handleView = ()=>{
    setViewComment(true)
  }


  const handleLike = async ()=>{
    try {
      const theLikes =await API.graphql(graphqlOperation(listLikes))
      const listArray = theLikes.data.listLikes.items
      // console.log({list: listArray})
      let liker = false
      let status
      for (let i = 0; i < listArray.length; i++){
        if (listArray[i].post.id === data.id && listArray[i].user.id === user[0].id){
          liker = true
          status = i
          break
        }
      }
      liker ? await API.graphql(graphqlOperation(deleteLike, {
          input: {
          id: listArray[status].id
          }
        })) : await API.graphql(graphqlOperation(createLike, {
          input: {
            userLikesId: user[0].id,
            postLikesId: data.id
          }
        }))
    } catch (error) {
      console.log(error)
    }
  }

  const toggleText = ()=>{
    setShowText(!showText)
  }


  const handleComment = async()=>{
    !inputValue ? toast("Input filed cannot be empty") 
    : await API.graphql(graphqlOperation(createComment, {
      input: {
        content: inputValue,
        userCommentsId: currUser.id,
        postCommentsId: data.id
      }
    }))
    toast("Comment added")
    setInputValue("")
  }

  const handleShare = async()=>{
    try{
      if (navigator.share) {
        await navigator.share({
          title: `${data.title}`,
          text: `${data.description}`,
          url: 'https://6467c48fa1ba7459514feffd--classy-beijinho-4f97d5.netlify.app/',
        });
      } else {
        alert('Sharing is not supported on this browser');
      }
  }catch(error){
      console.log({"Share Error": error.message})
  }
  }
  return(
    <div className="post-container">
    <ToastContainer></ToastContainer>
      <div className="post-top">
      <div className="post-left">
      <Link to={`/single/${postOwner.id}`}>
          {ownerPix && <img src={ownerPix} alt='owner pix'/>}
      </Link>
          <h3>{postOwner.username}</h3>
          <span>{<ReactTimeAgo date={data.createdAt} locale="en-US"/>}</span>
      </div>
      <div className="post-right">
          <MoreHoriz/>
      </div>
      </div>
      <div className='title'>
        <h3>{data.title}</h3>
      </div>
        <div className="middle">
          <img src={postImage} alt="post"/>
          <div className="post-reactions">
            <div className="react-left">
              <button onClick={handleLike}>
              <FavoriteOutlined/>
              </button>
              <button onClick={handleView}>
              <ChatOutlined/>
              </button>
              <button onClick={handleShare}>
              <ShareOutlined/>
              </button>
            </div>
            <div className="react-right">
              <BookmarkOutlined/>
            </div>
          </div>
          <p>{likes.length} likes</p>
        </div>
        <div className="bottom">
          <p className={`read-more ${showText ? "show" : ""}`}>{data.description}</p>
          <button onClick={toggleText}>{showText ? "more" : "less"}</button>
          {comment.length >= 1 ? <div className='some-comment'>
            <InputComment lime={comment[comment.length - 1].user && comment[comment.length - 1].user} title={comment[comment.length - 1].user.username} desc={comment[comment.length - 1].content} time={<ReactTimeAgo date={comment[comment.length - 1].createdAt} locale="en-US"/>}/> 
          </div> : <p>Be the first to comment</p> }
          <button onClick={handleView}>view and add comments</button>
          {/* -------------------------Comment Section here---------------------------------- */}
          <div className="comment-section">
    {viewComment && <div className="comment-container">
      <div className="comment-area">
      <div className="comm-left">
        {postImage && <img src={postImage} alt="post"/>}
      </div>
      <div className="comm-right">
        <div className="view-top">
        {userOwner && <img src={userOwner} alt="post"/>}
        <h4>{currUser.username}</h4>
        </div>
      <hr/>
      <div className="comm-middle">
      <div className="owner-section">
      {ownerPix && <img src={ownerPix} alt="post"/>}
      <p>{data.description}</p>
      </div>
      <div className="comment-section">
      {comment && comment.map(each_comment=>{
        return(
        <InputComment lime={each_comment.user} title={each_comment.user.username} desc={each_comment.content} time={<ReactTimeAgo date={each_comment.createdAt} locale="en-US"/>}/>
        )
      })}
      </div>
      </div>
      <div className="react-section">
      <div className="react-left">
        <FavoriteOutlined/>
        <ChatOutlined/>
        <ShareOutlined/>
      </div>
      <div className="react-right">
        <Bookmark/>
      </div>
      </div>
      <div className='comment-input'>
          <input type="text" 
          placeholder="Add a comment..."
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          />
          <EmojiEmotions 
          onClick={() => setViewEmojiPlane(!viewEmojiPlane)} 
      />
      <button onClick={handleComment}><Send/></button>
      {viewEmojiPlane && (
        <div className="emojiplane">
        <EmojiPicker
        searchPlaceholder='Ara'
        emojiStyle='native'
        theme='dark'
        onEmojiClick={(e)=>{
          setInputValue(prevInput=> prevInput + e.emoji)
          setViewEmojiPlane(false)
        }}
        previewConfig={{
          showPreview: true,
          defaultEmoji:"1f92a",
          defaultCaption:"Add your emoji here..."
        }}
        />
        </div>
      )}
      </div>
      </div>
      </div>
      <div className="cancel">
      <button onClick={()=>{setViewComment(!viewComment)}}>
      <Cancel/>
      </button>
      </div>
    </div>}
          </div>
        </div>
        <hr/>
    </div>
  )
}

export default Post