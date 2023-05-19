import { Link } from "react-router-dom"
import Logo from "../Assets/insta.png"
import "./leftside.scss"
import Icon from "../Icon/Icon"
import { AddBox, ClearRounded, Explore, FavoriteOutlined, Home, MenuOutlined, Person, Power, PowerSettingsNew, Search, Send} from "@mui/icons-material"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import { API, Auth, graphqlOperation } from "aws-amplify"
import { listUsers } from "../../graphql/queries"
import InputComment from "../inputComment/inputComment"
const LeftSide = ()=>{
  const [searchBox, setSearchBox] = useState(false)
  const [searchResult, setSearchResult] = useState([])
  const [searchInput, setsearchInput] = useState("")
  const handleSearch = async(e)=>{
    e.preventDefault()
    //search user
    try{
      const allUser = await API.graphql(graphqlOperation(listUsers))
      const filterUser = allUser.data.listUsers.items.filter(each_user=>{
        return(
          each_user.username.toUpperCase() === searchInput.toUpperCase()
        )
      })
      setSearchResult(filterUser)
      console.log({ser: filterUser[0].avatar})
    }catch(error){
      toast("Error searching user")
    }
    setsearchInput("")
  }
  return(
    <div className="left-container">
    <ToastContainer></ToastContainer>
    <div className="top">
    <Link to="/">
      <img src={Logo} alt="instagram"/>
    </Link>
    </div>
    <div className="middle">
    <Link to="/">
      <Icon title="Home" Imcon={<Home/>}/>
    </Link>
      <button onClick={()=>{setSearchBox(!searchBox)}}>
        <Icon title="Search" Imcon={<Search/>}/>
            </button>
            {searchBox && <div className="search">
                <div className="top">
                    <h3>Search</h3>
                    <form onSubmit={handleSearch}>
                    <input type="text" 
                    placeholder="search" 
                    value = {searchInput}
                    onChange={(e)=>{
                      setsearchInput(e.target.value)
                    }}
                    />  
                    </form>
                      <ClearRounded onClick={()=>{
                        setSearchBox(!searchBox)
                        setsearchInput("")
                        setSearchResult([])
                        }}/>
                </div>
                <div className="bottom">
                    <span>Search Result</span>
                    <div className="search-result">
                      {searchResult.length && searchResult.map(each_result=>{
                        return(
                          <InputComment lime={each_result} title={each_result.name} desc={each_result.username} button={true}/>
                        )
                      })}
                    </div>
                </div>
            </div>}
      <Link to="/explore">
      <Icon title="Explore" Imcon={<Explore/>}/>
      </Link>
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
    <button onClick={()=>{
      Auth.signOut()
      toast("signOut successfull")
    }}>
      <Icon title="SignOut" Imcon={<PowerSettingsNew/>}/>
    </button>
    </div>
    </div>
  )
}

export default LeftSide