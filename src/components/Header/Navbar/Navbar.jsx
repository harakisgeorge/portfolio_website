import React from 'react'
import "./Navbar.css"
import {AiFillGithub,AiFillLinkedin, AiFillSketchCircle} from "react-icons/ai"
const Navbar = () => {
   return (
      <div className='container'>
         <ul className='navbar-links'>
            
            <li><a href=""><AiFillSketchCircle />Portfolio</a></li>
         </ul>
         <ul className='navbar-social_media'>
            <li><a href="https://github.com/harakisgeorge"><AiFillGithub/></a></li>
            <li><a href="https://www.linkedin.com/in/george-harakis-9b5538120/"><AiFillLinkedin/></a></li>
         </ul>
      </div>
   )
}

export default Navbar
