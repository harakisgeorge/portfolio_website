import React from 'react'
import "./Navbar.css"
import {AiFillGithub,AiFillLinkedin, AiFillSketchCircle} from "react-icons/ai"
const Navbar = () => {
   return (
      <div className='container'>
         <ul className='navbar-links'>
            
            <li><a href=""><AiFillSketchCircle />Portfolio</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Technologies</a></li>
            <li><a href="">About</a></li>

         </ul>
         <ul className='navbar-social_media'>
            <li><a href=""><AiFillGithub/></a></li>
            <li><a href=""><AiFillLinkedin/></a></li>
         </ul>
      </div>
   )
}

export default Navbar
