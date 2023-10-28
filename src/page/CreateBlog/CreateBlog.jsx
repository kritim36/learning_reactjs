import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../component/Navbar'
import './CreateBlog.css'

const CreateBlog = () => {
  const navigate = useNavigate()

 
const createBlog=async (e)=>{
  e.preventDefault()
  const formData = new FormData(e.currentTarget)
  const data = Object.fromEntries(formData)
  const response =   await axios.post("https://6527d104931d71583df16f7b.mockapi.io/blogs/",data)
  if(response.status == 201){
  navigate("/")
  }else{
  alert("Something went wrong")
  }

}

  return (
    <div className="container">
      <Navbar />
        <h1 className="form-title">Add Blog</h1>
        
        
        <form onSubmit={createBlog} >
       
            <input type="text" id="title" placeholder='title' name="title" required  />
            
            <textarea id="description" placeholder='description' name="description" rows="4" required  ></textarea>
            
            <input type="text" id="image" placeholder='image' name="avatar" required  />
            
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default CreateBlog