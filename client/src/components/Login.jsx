import React, { useState, useContext} from "react";
import "./global.css";
import {context} from '../App.js'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const {state, dispatch} = useContext(context);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const sendData = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    console.log(email);
    const head = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    };
    const res = await fetch("/login", head);
    await res.json();
    if(res.status===200){
      alert('logged in successfully');
      dispatch({type:'login'})
      navigate('/profile')
    }
    if(res.status===401){
      alert('wrong password');
    }
    if(res.status===404){
      alert('user does not exist');
    }
  };

  return (
    <div className="">
      <div  className="mx-20 my-10 items-center align-center flex justify-center w-screen ">
      <form id="Form">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
            name="email"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleChange}
            name="password"
          />
        </div>
        <button type="submit" className="btn btn-primary text-black hover:text-white" onClick={sendData}>
          Submit
        </button>
      </form>
    </div>
    </div>
    
  );
};

export default Login;
