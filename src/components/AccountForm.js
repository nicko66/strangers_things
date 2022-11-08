import react from 'react';
import React, { useState } from 'react'
import { registerUser } from '../api/api';
import { useParams } from "react-router-dom"

const AccountForm = () => {  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

const onSubmitHandler = async(event) => {
    event.preventDefault(); 
}

  return (
    <form className='ui form' onSubmit={onSubmitHandler}>
        <h1>Form Title</h1> 
        <div className='field'>
            <label>Username</label>
            <input type="text" value={username} placeholder="username" required onChange={(event) => setUsername(event.target.value)}></input>
        </div>
        <div className='field'>
            <label>Password</label>
     <input 
            type="text" 
            value={password} 
            placeholder="password" 
            minLength={8} 
            required 
            onChange={(event) => setPassword(event.target.value)}>
     </input>
        </div>
        <button className='ui button' type="submit">
            Sign Up
        </button>
    </form>  
   
  )
}
 
export default AccountForm