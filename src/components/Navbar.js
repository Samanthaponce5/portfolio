import React, { useEffect, useRef, useState } from 'react';
import { TimelineMax } from "gsap";
import { GrLinkedinOption } from 'react-icons/gr';
import { FiInstagram } from 'react-icons/fi';
import { FaGithubAlt } from 'react-icons/fa';
import {Link} from 'react-router-dom'


 function Navbar (){
   
  const [addClass, setClass]=useState(false)
 
  let toggle=()=>{
      setClass(!addClass)
  }
  let changeClass = ['navbar']
  if(addClass){
      changeClass.push('change')
  }

  let navbar = useRef(null)
  let navbar2 = useRef(null)
 
  
  const t1 = new TimelineMax()
  useEffect(()=>{
    setClass(!addClass)
    t1.fromTo(navbar, 2.2,{opacity:0,x:30},{opacity:1,x:0})
    .fromTo(navbar2, 2.2,{opacity:0},{opacity:1})
  
  },[])



        return(

            <nav ref={el =>navbar2=el}  className={changeClass.join(' ')} >
  <div className='hamburger-menu' onClick={toggle}>
    <div className='line line-1'></div>
     <div className='line line-2'></div>
     <div className='line line-3'></div>
  </div>

    <ul className="nav-list" ref={el =>navbar=el}>
      <li className='nav-item'><Link to='/' className='nav-link'>Home</Link></li>
      <li className='nav-item'><Link to='/about' className='nav-link'>About</Link></li>
      <li className='nav-item'><Link to='/projects' className='nav-link'>Projects</Link></li>
      <li><Link to='/contact' className='nav-link'>Contact</Link></li>
    </ul>


    <ul className="nav-listtwo" ref={el =>navbar2=el}>
    <li className='nav-item two'><a href='https://www.linkedin.com/in/samantha-ponce-0bb6ba1a9/' className='nav-link2'><GrLinkedinOption size={24}/></a></li>
      <li className='nav-item two'><a href='https://github.com/Samanthaponce5' className='nav-link2'><FaGithubAlt size={20}/></a></li>
      <li className='nav-item two'><a href='https://www.instagram.com/samantha_pnce/' className='nav-link2'><FiInstagram size={20}/></a></li>
   
    </ul>
    
  </nav>
        )
    }
    export default Navbar