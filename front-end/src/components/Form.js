import React from 'react'
import { useState } from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";

function Form(props) {
    const[uname,setName]=useState("");
    const[email,setEmail]=useState("");
     const[code,setCode]=useState("");
     const url ="http://localhost:8000/register";
    const client = Axios.create({
    baseURL: url 
  });
  const handleClickForm= (e)=>{
    e.preventDefault();
    console.log(uname+email+code);
    
    post_req(uname,email,code);
    


    // Axios.get(url,{
    //   "name":uname,
    //   "email":email,
    //   "code":code
    // }).then(
    //   (res)=>{
    //     console.log(res)
    //   }
    // )
  }

  const post_req =(uname,email,code)=>{
    client.post('',{
      name:uname,
      email:email,
      code:code
    }).then((res)=>{
       console.log(window.location.href);
        const loc=(window.location.href);
        props.setuid(res.data.id);
        console.log(res.data.id," from child");
        document.getElementById("temp").style.display="block";
        document.getElementById("submit").style.display="none";
        
    })
  }


  return (
    <div className="container">
    <h3>Enter Details Here...</h3>
      <form id="form">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name Here</label>
          <input name="name"type="name"  className="form-control" onChange={e => setName(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" name="email" className="form-control" onChange={e => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Test Invitation Code</label>
          <input type="code" name="code" className="form-control" onChange={e => setCode(e.target.value)}id="exampleInputPassword1" placeholder="Test Invitation Code"/>
        </div>
        <div className="form-check">
        </div>
        <button type="submit" id="submit" className="btn btn-primary" onClick={handleClickForm} >Submit</button>
      </form>
      <Link to ="/check" style={{display : "none"}} id="temp"><button type="button" className="btn btn-primary" >Click Here to Proccedd...</button></Link>
    </div>
  )
}

export default Form