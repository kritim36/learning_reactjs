
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AllBlog from './page/AllBlog/AllBlog'
import CreateBlog from './page/CreateBlog/CreateBlog'
import EditBlog from './page/EditBlog/EditBlog'
import SingleBlog from './page/SingleBlog/SingleBlog'


function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path = "/" element={<AllBlog />} />
    <Route path = "/createblog" element={<CreateBlog />} />
    <Route path= "/editblog/:id" element={<EditBlog />} />
    <Route path = "/singleblog/:id" element={<SingleBlog />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
