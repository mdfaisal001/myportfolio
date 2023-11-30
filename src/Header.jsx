import React from "react";
import "./Header.css"
import logo from "../src/myimages/logo.jpg"
import { Link } from "react-router-dom";


function Header(){
return(

  
    <div className="header">
   
      <div className="logolayer" >
        <div>
        <img className="logo-img" src ={logo} alt="logoimage" />
        </div>
      </div>
      
    <div className="options">
      <div>
     <p ><Link className="nav" to="/">Home</Link></p>
     </div>
      <div>
     <p ><Link  className="nav" to="/about">About</Link></p>
     </div>
     <div>
     <p ><Link   className="nav" to="/portfolio">Portfolio</Link></p>
     </div>
    
     <div>
     <p><Link  className="nav" to="/contact">Contact</Link></p>
     </div>
     
     


    </div>
    
    
    </div>)
}

export default Header;