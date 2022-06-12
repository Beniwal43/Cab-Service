import React, { useState } from "react";
import "./Signup.css"
import {useNavigate} from "react-router-dom"

function Signup() {
  const [name,setName]=useState("")
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")
  const navigate = useNavigate();

  const submit= async()=>{
    console.warn(name,email,password)
    let result= await fetch('http://localhost:5000/register',{
      method:'post',
      body:JSON.stringify({name,email,password}),
      headers:{
        'Content-Type':'application/json'
      }
    });
    result = await result.json()
    console.warn(result);
    if (result){
      navigate("/")
    }
  }

  return (
    <div>
      <h1>Signup</h1>
      <input className="inputBox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
      <input className="inputBox" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
      <input className="inputBox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
      <button onClick={submit} className="bclass" type="button">Sign Up</button>
    </div>
  );
}

export default Signup;
