import React from 'react'
import "./Projects.css"
import img from "./assets/example.webp"
const Projects = () => {
   return (
      <div>
         <main>
            <h1>Projects</h1>
            <div className='projects-grid'>
               <div className='project'>
                  <img src={img} />
                  <h4>Project 1</h4>
                  <p className="description">Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application -
                      from start to finish. The App is called Memories and it is
                      a simple social media app that allows users to post interesting events that happened in their lives.</p>
                  <p id="stack">Stack</p>
                  <ul className='stack-list'>
                     <li>Express</li>
                     <li>Mongo</li>
                     <li>React</li>
                     <li>HTML</li>
                  </ul>
                  <ul className='code_source-buttons'>
                     <li><a href="">Code</a></li>
                     <li><a href="">Source</a></li>
                  </ul>
               </div>
               <div className='project'>
                  <img src={img} />
                  <h4>Project 2</h4>
                  <p className="description">Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application -
                      from start to finish. The App is called Memories and it is
                      a simple social media app that allows users to post interesting events that happened in their lives.</p>
                  <p id="stack">Stack</p>
                  <ul className='stack-list'>
                     <li>Express</li>
                     <li>Mongo</li>
                     <li>React</li>
                     <li>HTML</li>
                  </ul>
                  <ul className='code_source-buttons'>
                     <li><a href="">Code</a></li>
                     <li><a href="">Source</a></li>
                  </ul>
               </div>
               <div className='project'>
                  <img src={img} />
                  <h4>Project 3</h4>
                  <p className="description">Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application -
                      from start to finish. The App is called Memories and it is
                      a simple social media app that allows users to post interesting events that happened in their lives.</p>
                  <p id="stack">Stack</p>
                  <ul className='stack-list'>
                     <li>Express</li>
                     <li>Mongo</li>
                     <li>React</li>
                     <li>HTML</li>
                  </ul>
                  <ul className='code_source-buttons'>
                     <li><a href="">Code</a></li>
                     <li><a href="">Source</a></li>
                  </ul>
               </div>
               <div className='project'>
                  <img src={img} />
                  <h4>Project 4</h4>
                  <p className="description">Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application -
                      from start to finish. The App is called Memories and it is
                      a simple social media app that allows users to post interesting events that happened in their lives.</p>
                  <p id="stack">Stack</p>
                  <ul className='stack-list'>
                     <li>Express</li>
                     <li>Mongo</li>
                     <li>React</li>
                     <li>HTML</li>
                  </ul>
                  <ul className='code_source-buttons'>
                     <li><a href="">Code</a></li>
                     <li><a href="">Source</a></li>
                  </ul>
               </div>
            </div>
            <div className='underline'></div>
         </main>
      </div>
   )
}

export default Projects
