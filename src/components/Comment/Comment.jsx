import { Bookmark, Cancel, ChatOutlined, EmojiEmotionsOutlined, FavoriteOutlined, MoreHoriz, Person, ShareOutlined } from "@mui/icons-material"
import Icon from "../Icon/Icon"
import Post2 from "../Assets/post2.jpg"
import "./comment.scss"
const Comment = ({view, set}) =>{
  return(
    <div className="comment-container">
    <div className="comment-area">
      <div className="comm-left">
        <img src={Post2} alt="post"/>
      </div>
      <div className="comm-right">
        <div className="top">
        <Icon title="waqas" Imcon={<Person/>}/>
        <MoreHoriz/>
        </div>
      <hr/>
      <div className="comm-middle">
      <div className="owner-section">
      <Person/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className="comment-section">
      <Icon title="Wale Nice work" desc="i day ago" Imcon={<Person/>}/>
      <Icon title="Bola Great insight" desc="2 day ago" Imcon={<Person/>}/>
      <Icon title="Simbi welldone" desc="3 day" Imcon={<Person/>}/>
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
          <input type="text" placeholder="Add a comment..."/>
          <EmojiEmotionsOutlined/>
      </div>
      </div>
      </div>
      <div className="cancel">
      <button onClick={set(!view)}>
      <Cancel/>
      </button>
      </div>
    </div>
  )
}

export default Comment