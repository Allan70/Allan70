import './App.css'
import {Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing'
import Shop from './pages/shop/Shop'
import Resume from './pages/Resume'
import Games from './pages/Games'
import Blog from './pages/blogs/Blogs'
import Login from './pages/shop/Login.tsx'
import Signup from './pages/shop/Signup.tsx'
import FactorAuth from './pages/shop/FactorAuth'
import Item from './pages/shop/Item'
import Blogs from './pages/blogs/Blogs'


interface UserState {
  isSignedIn: boolean;
  isDarkThemed: boolean;
  isNewsLettered : boolean;
  isPlayer: boolean;
}

function App() {
  const  user : UserState = {
    isSignedIn: false, 
    isDarkThemed: false, 
    isNewsLettered: false,
    isPlayer: false
  }
  
  console.log(user);

  return (
    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/shop' element={<Shop />}/>
      <Route path='/blog' element={<Blogs />}/>
      <Route path='/resume' element={<Resume />}/>
      <Route path='/games' element={<Games />}/>

      {/* Add shop pages */}
      <Route path='/shop/login' element={<Login />}/>
      <Route path='/shop/signup' element={<Signup />}/>
      <Route path='/shop/2FA' element={<FactorAuth/>}/>
      <Route path='/shop/item/:id' element={<Item name={'My IItem'} itm_id={0} img_url={'test'} apk_url={'test'} />} />

      {/* Add blog pages */}
      <Route path="/blogs/" element={<Blogs />}/>
      <Route path="/blog/id" element={<Blog />}/>

      {/* Miscellaneous */}
      <Route path='*' element={<Landing />}/>
    </Routes>
  )
}

export default App
