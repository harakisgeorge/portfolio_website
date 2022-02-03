import React from 'react'
import "./Projects.css"
import img1 from "./assets/baba.PNG"
import img2 from "./assets/newsapp.PNG"
import img3 from "./assets/countryapp.PNG"
import img4 from "./assets/nectorapp.PNG"
import img5 from "./assets/tinder.PNG"

const Projects = () => {
   return (
      <div>
         <main>
            <h1>Projects</h1>
            <div className='projects-grid'>
               <div className='project'>
                  <img src={img1} className='project-image'/>
                  <h4>Project 1</h4>
                  <p className="description">This is an exact copy of the design of "https://www.ebba.app/", a random web application 
                  I found on the net. I have created my own code. This is pure vanilla HTML,CSS, Javascript. </p>
                  <ul className='stack-list'>
                     <li>HTML</li>
                     <li>CSS</li>
                     <li>Javascript</li>
                  </ul>
                  <ul className='code_source-buttons'>
                     <li><a href="https://github.com/harakisgeorge/vanilla_js_webapp1.git">Code</a></li>
                     <li><a href="https://babappgeorge.herokuapp.com/">Source</a></li>
                  </ul>
               </div>
               <div className='project'>
                  <img src={img2} className='project-image'/>
                  <h4>Project 2</h4>
                  <p className="description">This is to show, how to fetch an API, specifically news headlines from 
                  https://gnews.io/, and a simple UI. You can't click on the articles to show the actual content of the article YET. </p>
                  <ul className='stack-list'>
                     <li>HTML</li>
                     <li>CSS</li>
                     <li>React</li>
                     <li>Javascript</li>
                     <li>Axios</li>
                  </ul>
                  <ul className='code_source-buttons'>
                     <li><a href="https://github.com/harakisgeorge/api1_webapp.git">Code</a></li>
                     <li><a href="https://newsapigeorge.herokuapp.com/#">Source</a></li>
                  </ul>
               </div>
               <div className='project'>
                  <img src={img3} className='project-image'/>
                  <h4>Project 3</h4>
                  <p className="description">This is a very simple one page application that just grabs 
                  information about all the countries in the world. You have the chance  to 
                  search for a country. More coming soon.</p>
                  <ul className='stack-list'>
                     <li>HTML</li>
                     <li>CSS</li>
                     <li>React</li>
                     <li>Javascript</li>
                     <li>Axios</li>
                  </ul>
                  <ul className='code_source-buttons'>
                     <li><a href="https://github.com/harakisgeorge/api2_webapp.git">Code</a></li>
                     <li><a href="https://countryappgeorge.herokuapp.com/">Source</a></li>
                  </ul>
               </div>
               <div className='project'>
                  <img src={img4} className='project-image'/>
                  <h4>Project 4</h4>
                  <p className="description">This is not a real project. It's just a documentation of the system for 
                  my master thesis. But I made this just for my own use in order to have a documentation with a 
                  better user interface.  </p>
                  <ul className='stack-list'>
                     <li>HTML</li>
                     <li>CSS</li>
                     <li>Javascript</li>
                  </ul>
                  <ul className='code_source-buttons'>
                     <li><a href="https://github.com/harakisgeorge/nector.git">Code</a></li>
                     <li><a href="https://nectorappgeorge.herokuapp.com/home.html">Source</a></li>
                  </ul>
               </div>
               <div className='project'>
                  <img src={img5} className='project-image'/>
                  <h4>Project 5</h4>
                  <p className="description">I tried to make a copy of the tinder browser version. I tried to include as many 
                  features  (including the swiping feature) 
                  I could from the official website but it takes too much time to include everything. 
                  </p>
                  <ul className='stack-list'>
                     <li>HTML</li>
                     <li>CSS</li>
                     <li>React</li>
                     <li>NodeJS</li>
                     <li>Express</li>
                  </ul>
                  <ul className='code_source-buttons'>
                     <li><a href="https://github.com/harakisgeorge/dating-app.git">Code</a></li>
                     <li><a href="">Source coming soon.</a></li>
                  </ul>
               </div>
            </div>
            <div className='underline'></div>
         </main>
      </div>
   )
}

export default Projects
