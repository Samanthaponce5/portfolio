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

         {/* <span className='include'><b>My Skills Include: </b> </span>
         <span>  ReactJS, JavaScript, Ruby on Rails, CSS, Bootstrap, HTML, PostgresSQL, Git, Ruby, RESTful APIs.</span> */}
        </p>
      </div>
      <img className='profilePic' src={profile}/>
      <section id='secondAboutSkills'>
       <div className='divStack'>
      <ul  className='langImgUl' >
        <li><SiJavascript size={60}/></li>
        <li> <FaReact size={60}/></li>
        <li><DiHtml5 size={60}/></li>
        <li><DiCss3 size={60}/></li>
        <li><DiBootstrap size={60}/></li>
        <li><DiRuby size={60}/></li>
        <li><SiRails size={60}/></li>
        <li><SiRedux size={60}/></li>
        <li><FaGitAlt size={60}/></li>
        <li><FaGithubSquare size={60}/></li>
        <li><SiHeroku size={60}/></li>
        <li><SiPostgresql size={60}/></li>
        <li><SiVisualstudio size={60}/></li>
        <li><IoLogoNpm size={60}/></li>
      </ul>
      </div>
      </section>
 {/* <div class="wrap">
  <div class="cube">
    <div class="front">
    </div>
    <div class="back">
    </div>
    <div class="top">
      
    </div>
    <div class="bottom">
    </div>
    <div class="left">
    </div>
    <div class="right">
    </div>
  </div>
</div> */}


{/* <div className='languages'> */}
{/* <span>
    <h3>My Skills</h3>
    <ul className='laguagesStacks first'>
        <li>ReactJs</li>
        <li>JavaScript</li>
        <li>Ruby on Rails</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>HTML</li>
        <li>PostgresSQL</li>
        <li>Git</li>
        <li>Ruby</li>
        <li>RESTful APIs</li>

        </ul>
        </span> */}
    {/* </ul> */}
{/* </div> */}
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