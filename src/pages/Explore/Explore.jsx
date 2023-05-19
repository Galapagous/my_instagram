import React, { useEffect, useState } from 'react'
import "./explore.scss"
import { API, graphqlOperation } from 'aws-amplify'
import { listPosts } from '../../graphql/queries'
import ProfileCard from '../../components/ProfileCard/ProfileCard'


function Explore() {
  const [allPost, setAppPost] = useState([])
  useEffect(()=>{
    const getPost = async ()=>{
      const allPost = await API.graphql(graphqlOperation(listPosts))
      setAppPost(allPost.data.listPosts.items)
    }
    getPost()
  },[])

  return (
    <div div className='explore-container'>
      {allPost.map(each_data=>{
        return(<div className='explore-item'>
          <ProfileCard data = {each_data}/>
        </div>)
      })}
    </div>
  )
}

export default Explore