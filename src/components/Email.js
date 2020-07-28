
import React from 'react';

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
            <form className='form' onSubmit={this.handleSubmit}> 
            <input onChange={this.handleChange} name='name' value={this.state.name} className='nameInput' type='text' placeholder='Name'/>  <input onChange={this.handleChange} value={this.state.email} name='email' className='emailInput' placeholder='Email'/><br/>
            <input name='subject' onChange={this.handleChange} value={this.state.subject} className='subjectInput' type='text' placeholder='Subject'/><br/>
            <textarea name='message' onChange={this.handleChange} value={this.state.message} className='messageInput' type='text' placeholder='Message' /><br/>
            <button className='send' type='submit' value="Send">Send</button>
            </form>
        )
    }
}