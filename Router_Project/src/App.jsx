import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import toast from 'react-hot-toast'


function App() {

  const [isLoggedIn, setIsLoggedIn]= useState(false)

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col ">
       <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
       
       <Routes>          
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/dashboard" element={<Dashboard/>} />

       </Routes>
       
    </div>
  )
}

export default App
