import React from 'react'

export default class Email extends React.Component{

    render(){

        return(
            <form className='form'> 
            <input className='nameInput' type='text' placeholder='Name'/>  <input className='emailInput' placeholder='Email'/><br/>
            <input className='subjectInput' type='text' placeholder='Subject'/><br/>
            <textarea className='messageInput' type='text' placeholder='Message' /><br/>
            <button className='send' type='submit'>Send</button>
            </form>
        )
    }
}