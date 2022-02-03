import React from 'react'
import "./Header.css"
import Navbar from "./Navbar/Navbar"
const Header = () => {
   return (
      <div>
         <Navbar />
         <main>
            <h1>Welcome To <br/>
            My Personal Portfolio</h1>
            <p>The purpose of JavaScript Mastery is to help aspiring and 
               established developers to take their development skills to
               the next level and build awesome apps.</p>
            <button>Scroll Down!</button>
            <div className='underline'></div>

         </main>
      </div>
   )
}

export default Header
