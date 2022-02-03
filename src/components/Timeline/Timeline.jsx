import React from 'react';
import "./Timeline.css"
import {Carousel} from "@trendyol-js/react-carousel"
const Timeline = () => {
  return <div className='main'>
            <div className='timeline'>
               <h1>About me</h1>
               <p>A motivated and hard-working person who seeks new experiences to gain 
                  new knowledge and share ideas. Programming experience and analytical skills 
                  that were developed through several projects both in my courses while studying 
                  and in practice through work.
               </p>
            </div>            
            <Carousel show={4}  slide={3} swiping={true}>
               <div className='timeline-parts'>
                  <h3>2014</h3>
                  <p>Started my term in the Cypriot National Guard.</p>
               </div>
               <div className='timeline-parts'>
                  <h3>2016</h3>
                  <p>Started my bachelor degree in the University of Cyprus.</p>
               </div>
               <div className='timeline-parts'>
                  <h3>2019</h3>
                  <p>Internship at the University of Oslo (web app development).</p>
               </div>
               <div className='timeline-parts'>
                  <h3>2020</h3>
                  <p>Started my masters degree at the University of Oslo.</p>
               </div>
               <div className='timeline-parts'>
                  <h3>2021</h3>
                  <p>Started a job at Studix AS, as a frontend developer, 6 month contract</p>
               </div>
               <div className='timeline-parts'>
                  <h3>2022</h3>
                  <p>.....</p>
               </div>

            </Carousel>
         </div>;
};

export default Timeline;
