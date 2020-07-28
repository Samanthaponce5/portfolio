import React from 'react'

export default class About extends React.Component{

    render(){

        return(
            <>
            <div className='text-part about'>
        <h1>A little bit about me . . .</h1>
        <p>
         <span className='sentence one'> Hey! I’m Samantha Ponce, a full-stack developer living in New York.</span>
         <span className='sentence two'> I'm continuously learning new technologies, self-motivated and I'm always</span>
         <span className='sentence three'> looking for something new to challenge myself. I love being creative and problem-solving </span>
         <span className='sentence four'> which is why I love web development. I also love hiking with my dogs and flying drones during my free time.</span>
        </p>
      </div>

 <div class="wrap">
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
</div>


<div className='languages'>
    <h3>My Skills</h3>
    <ul className='laguagesStacks'>
        <li>ReactJs</li>
        <li>JavaScript</li>
        <li>Ruby on Rails</li>
        <li>CSS</li>
        <li>Bootstrap</li>
       

    </ul>
</div>
</>
        )
    }
}