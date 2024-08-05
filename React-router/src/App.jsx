import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import NotFound from './components/NotFound'
import Home from './components/Home'
import About from './components/About'
import Support from './components/Support'
import Layout from './components/Layout'

function App() {
  
  return (
   <div>
      {/* <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes> */}

    {/* ----- we can also decide layout like header and footer fix and everything change
     so we can decide layouts using "Outlet" in router and making parent-child relations--- */}
     
     <Routes>
        <Route to="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="support" element={<Support/>} />
        </Route>

     </Routes>



   </div>
  )
}

export default App
