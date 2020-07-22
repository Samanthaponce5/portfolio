import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { TweenMax, Power2, TimelineLite, TweenLite,TimelineMax } from "gsap";
import pic from './images/nature-1.jpg'
import hamburger from './images/iconfinder_menu-alt_134216.svg'


function App() {

  const [addClass, setClass]=useState(false)
 
let toggle=()=>{
    setClass(!addClass)
}
let changeClass = ['navbar']
if(addClass){
    changeClass.push('change')
}
let hero = useRef(null)
let navbar = useRef(null)

let slider= useRef(null)
let logo =useRef(null)
let headline=useRef(null)
const t1 = new TimelineMax()
useEffect(()=>{
  setClass(!addClass)
  t1.fromTo(hero,1.5 ,{height:"0%"}, {height:"80%", ease:Power2.easeInOut}
  ).fromTo(hero,1.2,{width:'100%'},{width:'80%', ease:Power2.easeInOut}
  ).fromTo(slider,1.2,{x:'100%'},{x:'0%',ease:Power2.easeInOut},
  '-=1.6')
  .fromTo(logo, 0.5,{opacity:0,x:30},{opacity:1,x:0},'-=0.5')
  .fromTo(navbar, 0.5,{opacity:0,x:30},{opacity:1,x:0},'-=0.5')

  .fromTo(headline, 0.5,{opacity:0,x:10},{opacity:1,x:0},'-=1')

},[])



  return (
   <header>
   

<nav className={changeClass.join(' ')} >
  <div className='hamburger-menu' onClick={toggle}>
    <div className='line line-1'></div>
     <div className='line line-2'></div>
     <div className='line line-3'></div>
  </div>

  <h2  href='#' id='logo' ref={el =>logo=el}>Samantha</h2>
    <ul className="nav-list" ref={el =>navbar=el}>
      <li className='nav-item'><a href='#home' className='nav-link'>Home</a></li>
      <li className='nav-item'><a href='#about' className='nav-link'>About</a></li>
      <li className='nav-item'><a href='#projects' className='nav-link'>Projects</a></li>
      <li><a href='#contact' className='nav-link'>Contact</a></li>

    </ul>
  </nav>

    <section className='home-area' id='home'>
      <div className='hero' ref={el =>hero=el}>
        <img src={pic}/>
        <h1 className='headline' ref={el =>headline=el}>Dream Big</h1>
      </div>
    </section>
    <div className='slider' ref={el =>slider=el}></div>


   
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
