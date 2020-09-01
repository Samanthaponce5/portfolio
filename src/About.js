import React, { Profiler } from 'react'
import { snap } from 'gsap/gsap-core'
import Aos from 'aos'
import 'aos/dist/aos.css'
import profile from './images/profile.jpg'
export default class About extends React.Component{

  componentDidMount(){
    Aos.init()
    Aos.refresh()
  }

    render(){
      let postgresSQL = require('./images/output-onlinepngtools__6_-removebg-preview.png')
      let html = require('./images/output-onlinepngtools__4_-removebg-preview.png')
      let css = require('./images/output-onlinepngtools__5_-removebg-preview.png')
      let js = require('./images/output-onlinepngtools__1_-removebg-preview.png')
      let ruby = require('./images/output-onlinepngtools__2_-removebg-preview.png')
      let react = require('./images/output-onlinepngtools__3_-removebg-preview.png')
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
        <li><img data-aos-delay="150" data-aos="fade-down" className='langImg react' src={react}/><br/> <label data-aos-delay="200" data-aos="fade-down" className='label'>REACTJS</label></li>
        <li><img data-aos-delay="350"  data-aos="fade-down" className='langImg' src={html}/></li>
        <li><img data-aos-delay="700"   data-aos="fade-down" className='langImg css' src={css}/></li>
        <li><img data-aos-delay="900"  data-aos="fade-down"  className='langImg js' src={js}/></li>
        <li><img data-aos-delay="1100"  data-aos="fade-down" className='langImg' src={ruby}/></li>
        <li><img  data-aos-delay="1300"  data-aos="fade-down"  className='langImg' src={postgresSQL}/></li>
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