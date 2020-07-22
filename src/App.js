import React, { useEffect, useRef } from 'react';
import './App.css';
import { TweenMax, Power2, TimelineLite, TweenLite,TimelineMax } from "gsap";
import pic from './images/nature-1.jpg'
import hamburger from './images/iconfinder_menu-alt_134216.svg'


function App() {

let hero = useRef(null)
let slider= useRef(null)
let logo =useRef(null)
let headline=useRef(null)
const t1 = new TimelineMax()
useEffect(()=>{
  t1.fromTo(hero,1.5 ,{height:"0%"}, {height:"80%", ease:Power2.easeInOut}
  ).fromTo(hero,1.2,{width:'100%'},{width:'80%', ease:Power2.easeInOut}
  ).fromTo(slider,1.2,{x:'-100%'},{x:'0%',ease:Power2.easeInOut},
  '-=1.6')
  .fromTo(logo, 0.5,{opacity:0,x:30},{opacity:1,x:0},'-=0.5')
  .fromTo(headline, 0.5,{opacity:0,x:10},{opacity:1,x:0},'-=1')

},[])

  return (
   <header>
     <nav>
       <a  href='#' id='logo' ref={el =>logo=el}>Dream Vacation</a>
       <ul className='nav'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
       </ul>
     </nav>

    <section>
      <div className='hero' ref={el =>hero=el}>
        <img src={pic}/>
        <h1 className='headline' ref={el =>headline=el}>Dream Big</h1>
      </div>
    </section>
    <div className='slider' ref={el =>slider=el}></div>


    <div className='home-area' id='home'>
      <div className='text-part'>
        <h1>Home</h1>
        <p>Lorem "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
             eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
              in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
    </div>
    <div className='about-area' id='about'>
      <div className='text-part'>
        <h1>About</h1>
        <p>Lorem "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
             eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
              in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
    </div>
    <div className='projects-area' id='projects'>
      <div className='text-part'>
        <h1>Projects</h1>
        <p>Lorem "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
             eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
              in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
    </div>
    <div className='contact-area' id='contact'>
      <div className='text-part'>
        <h1>Contact</h1>
        <p>Lorem "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
             eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
              in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
    </div>


   </header>
  );
}

export default App;
