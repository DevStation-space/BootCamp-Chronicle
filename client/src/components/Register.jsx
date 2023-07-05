import React, { useState } from "react";
import "./global.css";
import {useNavigate} from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const sendData = async (e) => {
    e.preventDefault();
    const { name, email, password } = user;
    const head = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    };
    const res = await fetch("/signup", head);
    await res.json();
    if(res.status===200){
      alert('user registered')
      navigate('/login')
    }
    if(res.status===424){
      alert('user exist')
    }
  };

  return (
   
      <div className="mx-20 my-10 items-center align-center flex justify-center w-screen " >
      <form id='Form' >
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputName1"
            aria-describedby="emailHelp"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            name="password"
            onChange={handleChange}
          />
        </div>

        <button type="submit" class="btn btn-primary text-black hover:text-white" onClick={sendData}>
          Submit
        </button>
      </form>
    </div>
   
    
  );
};

export default Register;
