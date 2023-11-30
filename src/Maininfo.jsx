
import React from "react";
import Home from "./Home.jsx";
import Header from "./Header.jsx";
import About from "./about.jsx";
import Portfolio from "./portfolio.jsx"


import Contact from "./contact.jsx"
import Footer from "./footer.jsx"
import { Route,Routes} from "react-router-dom";
import "./Maininfo.css"





function Maininfo(){ 
  
 
return(
   

   <div className="container1">
   
    
        <Header/>
    
    
    <div className="allcontainer">
       <Routes>
   
       <Route path="/" element={<Home/>}/>
      
     
       <Route path="/about" element={<About/>}/>
       
      
      
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
     
 </Routes>
   <About/>
   <Portfolio/>
  
   
   <Contact/>
 <Footer/>
   </div>
  
   </div>
  
)
}

export default Maininfo;
