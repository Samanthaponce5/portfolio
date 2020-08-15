import React from 'react'

export default class Projects extends React.Component{

    render(){
        return(
          <div className='projects-area' id='projects'>
            <div class="carousel-wrapper">
            <span id="item-1"></span>
            <span id="item-2"></span>
            <span id="item-3"></span>
            <div class="carousel-item item-1">
              <h2>Project 1 </h2>
              <div className='projectInfo'>
              <h1 className='projectName'>Jack's Journey</h1>
              <p className='describe'>The goal is to educate users about plastic pollution and it's
                 effects on marine life thorugh an interactive scrolling site 
               </p>
               <ul className='stack'>
                 <li>ReactJs</li>
                 <li>CSS</li>
                 <li>Ruby on Rails backend</li>
                 <li>Postgres Databse</li>
               </ul>
                <button className='viewbtn'><a href='https://jacks-journey.herokuapp.com/'>View Site</a></button> <button className='viewbtn' ><a href='https://github.com/Samanthaponce5/thePlasticJourney-frontend'>View Code</a></button>
              </div>
              {/* <a class="arrow arrow-prev" href="#item-3"></a> */}
              <a class="arrow arrow-next" href="#item-2"></a>
            </div>
            
            <div class="carousel-item item-2">
              <h2>Project 2</h2>
              <div className='projectInfo'>
              <h1 >Picology</h1>
              <p className='describe'>An e-commerce site where you can shop around for many options of photography.
               </p>
               <ul className='stack'>
                 <li>ReactJs</li>
                 <li>CSS</li>
                 <li>Ruby on Rails backend</li>
                 <li>Postgres Databse</li>
               </ul>
               <button className='viewbtn' ><a href='https://github.com/Samanthaponce5/Ecomm-frontend'>View Code</a></button>
               <button className='viewbtn' ><a href='https://youtu.be/SsByJf9NJJ4'>Demo</a></button>

              </div>
              <a class="arrow arrow-prev" href="#item-1"></a>
              {/* <a class="arrow arrow-next" href="#item-3"></a> */}
            </div>
{/*             
            <div class="carousel-item item-3">
              <h2>Item 3</h2>
              <div className='projectInfo'></div>
              <a class="arrow arrow-prev" href="#item-2"></a>
              <a class="arrow arrow-next" href="#item-1"></a>
            </div> */}
          </div>
          <div className='circles first projectc'></div>
    <div className='circles second projectc'></div>
    <div className='circles third projectc'></div>
    <div className='circles fourth projectc'></div>
    <div className='circles fifth projectc'></div>
    </div>


        )
    }
}