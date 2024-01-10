import { useState } from "react";
import "./index.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import React from 'react'

function App() {
    return (
      <div className='no-padding'>
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    );
  }
  
  export default App;