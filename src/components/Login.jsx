import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../API-folder";

const Login = (props) => {
  const [user, setUser] = useState();
  console.log(props);
  function getUser() {
    setUser(user);
  }

  const navigate = useNavigate()
  function redirectSignUp(){
      let path = '/register'
      navigate(path)
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const username = event.target[0].value;
      const password = event.target[1].value;
      const registeredUser = await loginUser(username, password);
      const token = registeredUser.token
      localStorage.removeItem("token");
      localStorage.setItem("token", token);
    
      let path = "/welcome";
      navigate(path);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="box">
      <form onSubmit={handleSubmit}>
        <input id="username" placeholder="Username:" type='text'></input>
        <input id="password" placeholder="Password:" type = 'password'></input>
        <button type="submit">SUBMIT</button>
        <button type="button" onClick={redirectSignUp}>Don't have an account?</button>
      </form>
    </div>
  );
};

export default Login;
