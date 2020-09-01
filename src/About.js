import React, { Profiler } from 'react'
import { snap } from 'gsap/gsap-core'
import Aos from 'aos'
import 'aos/dist/aos.css'
import profile from './images/profile.jpg'
import { SiJavascript } from "react-icons/si";
import {FaReact} from 'react-icons/fa'
import {DiHtml5} from 'react-icons/di'
import {DiCss3} from 'react-icons/di'
import {DiBootstrap} from 'react-icons/di'
import {DiRuby} from 'react-icons/di'
import {SiRails} from 'react-icons/si'
import {SiRedux} from 'react-icons/si'
import {FaGitAlt} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'
import {SiHeroku} from 'react-icons/si'
import {SiPostgresql} from 'react-icons/si'
import {SiVisualstudio} from 'react-icons/si'
import {IoLogoNpm} from 'react-icons/io'
import {IoIosArrowDropdown} from 'react-icons/io'
export default class About extends React.Component{

  componentDidMount(){
    Aos.init()
    Aos.refresh()
  }

    render(){
    
        return(
            <>
              <div className='about-area' id='about'>
        <h1 id='aboutme'>A little bit about me . . .</h1>
            <div className='text-part about'>
        <p>
         <span className='sentence one'> Hey! 👋🏼 I’m Samantha Ponce, a full-stack developer living in New York.</span>
         <span className='sentence two'> Experienced in CSS, Ruby on Rails, and JavaScript-based programming. I'm continuously learning new technologies, self-motivated and I'm always</span>
         <span className='sentence three'> looking for something new to challenge myself. I love being creative and problem-solving which is why I love web development. </span>
         <span className='sentence four'> My prior work experience has made me successful working in both teams and self-directed settings providing me with strong skills in decision-making and organization.  </span> 

      
        </p>
        
      </div>
      <a href='#secondAboutSkills'>< IoIosArrowDropdown className='arrowDown' size={60}/></a>

      <img className='profilePic' src={profile}/>
      
      <section id='secondAboutSkills'>
        <h2 className='myskillsTitle'>My skills:</h2>
       <div className='divStack'>
      <ul  className='langImgUl' >
        <label className='labels'>JavaScript<li><SiJavascript size={70}/></li></label>
        <label className='labels'>ReactJS<li> <FaReact size={70}/></li></label>
        <label className='labels'>HTML<li><DiHtml5 size={70}/></li></label>
        <label className='labels'>CSS<li><DiCss3 size={70}/></li></label>
        <label className='labels'>BootStrap<li><DiBootstrap size={70}/></li></label>
        <label className='labels'>Ruby<li><DiRuby size={70}/></li></label>
        <label className='labels'>Rails<li><SiRails size={70}/></li></label>
        <label className='labels'>Redux<li><SiRedux size={70}/></li></label>
        <label className='labels'>Git<li><FaGitAlt size={70}/></li></label>
        <label className='labels'>GitHub<li><FaGithubSquare size={70}/></li></label>
        <label className='labels'>Heroku<li><SiHeroku size={70}/></li></label>
        <label className='labels'>PostGresSQL<li><SiPostgresql size={70}/></li></label>
        <label className='labels'>Visualstudio<li><SiVisualstudio size={70}/></li></label>
        <label className='labels'>NPM<li><IoLogoNpm size={70}/></li></label>
      </ul>
      </div>
      </section>




{/* <div className='circles first aboutc'></div>
    <div className='circles second aboutc'></div>
    <div className='circles third aboutc'></div>
    <div className='circles fourth aboutc'></div>
    <div className='circles fifth aboutc'></div> */}
  </div>
</>
        )
    }
}