
import React from 'react';
import { GrLinkedinOption } from 'react-icons/gr';
import { FiInstagram } from 'react-icons/fi';
import { FaGithubAlt } from 'react-icons/fa';
export default class Email extends React.Component{

    state={
    message: '',
    name: '', 
    email: '' ,
    subject:''
    }


    handleSubmit= (e)=>{
              e.preventDefault();
        
              const templateId = "template_O8vHnUQw";;
              this.setState({name:'',message:'',email:'', subject:''})
              this.sendFeedback(templateId, {message_html: this.state.message, from_name: this.state.name, reply_to: this.state.email})
              console.log('sent')
             }
             handleChange=(event) =>{
              
              const{name,value}=event.target
              this.setState({[name]:value})
              
        
        
            }
          sendFeedback= (templateId, variables) =>{
                  window.emailjs.send(
                    'gmail', templateId,
                    variables
                    ).then(res => {
                      console.log('Email successfully sent!')
                    })
                    .catch(err => console.error('Error:', err))
                 }
           
    render(){

       

        return(
            <div className='contact-area' id='contact'>
      <div className='text-part'>
        <h1>Contact Me</h1>
        <h2>Email:  Samanthaponce5@gmail.com</h2>
        <h2 className='myresume'>My Resume:  <a href='https://docs.google.com/document/d/1Bx_stOFeX2983my0mq1-rZqQcQ4prJOj8ipitfZYCNw/edit'>Here</a></h2>

        <ul className="contact-listtwo" >
    <li className='contact-item two'><a href='https://www.linkedin.com/in/samantha-ponce-0bb6ba1a9/' className='nav-link2'><GrLinkedinOption size={35}/></a></li>
      <li className='contact-item two'><a href='https://github.com/Samanthaponce5' className='nav-link2'><FaGithubAlt size={32}/></a></li>
      <li className='contact-item two'><a href='https://www.instagram.com/samntha_p/' className='nav-link2'><FiInstagram size={30}/></a></li>
   
    </ul>
            <form className='form' onSubmit={this.handleSubmit}> 
            <input onChange={this.handleChange} name='name' value={this.state.name} className='nameInput' type='text' placeholder='Name'/>  <input onChange={this.handleChange} value={this.state.email} name='email' className='emailInput' placeholder='Email'/><br/>
            <input name='subject' onChange={this.handleChange} value={this.state.subject} className='subjectInput' type='text' placeholder='Subject'/><br/>
            <textarea name='message' onChange={this.handleChange} value={this.state.message} className='messageInput' type='text' placeholder='Message' /><br/>
            <button className='send' type='submit' value="Send">Send</button>
            </form>

            </div>
    </div>
        )
    }
}