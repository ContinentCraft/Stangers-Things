import React, { useEffect, useState } from "react";
import { Navbar, Posts, Register, Login, WelcomeScreen, SeeDetails, SinglePost} from './';
import { BrowserRouter as Router,
Route, Routes, Switch, Link} from "react-router-dom";

// currentUserInfo = {
//   useState
// }

const Main = () => {

  const [data, setData] = useState({})

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div id="main">
            <Navbar />
            <Posts data={data}/>
          </div>
        }></Route>
        <Route path="/register" element={
          <div id="main">
            <Navbar />
            <Register />
          </div>
        }></Route>
        <Route path="/login" element={
          <div id="main">
            <Navbar />
            <Login />
          </div>
        }></Route>
        <Route path="/login/welcome" element={
          <div id="main">
            <Navbar />
            <WelcomeScreen />
            <Posts data={data}/>
          </div>
        }></Route>
        <Route path="/post-details" element={
          <div id="main">
            <Navbar />
            <SeeDetails/>
          </div>
        }></Route>
      </Routes>
    </Router>
  );
};

export default Main;
