import React from 'react'
import "./Technologies.css"
import {DiReact} from "react-icons/di"
import {CgNotes} from "react-icons/cg"
import {BsTools} from "react-icons/bs"


const Technologies = () => {
   return (
         <main>
            <div className='technologies'>
               <h1>Technologies</h1>
            </div>

            <div className='technologies-categories'>
               <div className='category'>
                  <span className='icon'><DiReact/></span>
                  <h3>Frontend</h3>
                  <p className='category-details'>HTML, CSS, Javascript, Reactjs</p>
               </div>
               <div className='category'>
                  <span className='icon'><CgNotes/></span>
                  <h3>Backend</h3>
                  <p className='category-details'>MongoDB, NodeJS</p>
               </div>
               <div className='category'>
                  <span className='icon'><BsTools/></span>
                  <h3>Other (courses)</h3>
                  <p className='category-details'>Java, C, SQL</p>
               </div>
            </div>
            <div className='underline'></div>

         </main>
   )
}

export default Technologies
