import axios from "axios"
import {useState} from 'react'

function Home() {
  let [posts,setPosts]=useState([])

  //make API req
  const getData=async()=>{
    let res=await axios.get("https://jsonplaceholder.typicode.com/posts")
   setPosts(res.data)
  }

  return (
    <div className="text-center">
      <h1>Home</h1>
      {
        posts.map(postObj=><p key={postObj.id}>{postObj.id}</p>)
      }
      <button className="btn btn-success" onClick={getData}>Get data</button>
    </div>
  )
}

export default Home