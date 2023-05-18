import { Link } from "react-router-dom"
import Logo from "../Assets/insta.png"
import "./leftside.scss"
import Icon from "../Icon/Icon"
import { AddBox, Explore, FavoriteOutlined, Home, MenuOutlined, Movie, Person, Search, Send} from "@mui/icons-material"
const LeftSide = ()=>{
  return(
    <div className="left-container">
    <div className="top">
    <Link to="/">
      <img src={Logo} alt="instagram"/>
    </Link>
    </div>
    <div className="middle">
    <Link to="/">
      <Icon title="Home" Imcon={<Home/>}/>
    </Link>
      <Icon title="Search" Imcon={<Search/>}/>
      <Icon title="Explore" Imcon={<Explore/>}/>
      <Icon title="Reel" Imcon={<Movie/>}/>
      <Icon title="Message" Imcon={<Send/>}/>
      <Icon title="Notification" Imcon={<FavoriteOutlined/>}/>
      <Link to="/create">
      <Icon title="Create" Imcon={<AddBox/>}/>
      </Link>
      <Link to="/single">
      <Icon title="Profile" Imcon={<Person/>}/>
      </Link>
    </div>
    <div className="bottom">
      <Icon title="More" Imcon={<MenuOutlined/>}/>
    </div>
    </div>
  )
}

export default LeftSide