import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../../component/Navbar"
import './AllBlog.css'


const AllBlog = () => {
  const navigate = useNavigate()
  const [blogs,setBlogs] = useState([])

  const fetchBlogs = async()=>{
    const response = await axios.get("https://6527d104931d71583df16f7b.mockapi.io/blogs/")
    if(response.status == 200){
      console.log(response.data)

    setBlogs(response.data)   
  }
}

  useEffect(()=>{
    fetchBlogs()
   
  },[])

  return (
    <div>
     <Navbar />
        <div style={{display:'flex',justifyContent:"space-evenly",flexWrap:'wrap'}}>
        {
         blogs.map((blog)=>{
         return (
        <div className="card" key={blog.id}>
          <img src={blog.avatar} alt="Avatar"  width='100%' />
            <div className="container">
                <h4><b>{blog.title}</b></h4> 
                <p style={{color:"red"}}>{blog.description}</p> 
                <p>{blog.createdAt}</p>
            </div>
            <p onClick={()=>navigate("/singleBlog/" + blog.id)} style={{textAlign:"center"}}>See More</p>
        </div>
        )
        })
         }

        </div>

    </div>
  )
}

export default AllBlog