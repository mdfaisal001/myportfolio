import React from "react";
import fed1 from "../src/myimages/fed1.png";
import "./Home.css";

import { motion } from "framer-motion"

function Home(){
    return(
      <div className="content2">
        <div className="home">

            
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2.0,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        
  
            className="intro">
          <div>
           <hr></hr><p >Hello</p>
          </div>
          <div>
              <h1> I'm <span className="spancolor">Mohammed </span>Faisal S</h1>
           </div>
           <div>
              <h2>Frontend WebDeveloper</h2>
           </div>
            <div className="selfintro">
               <p>I'm Mohammed Faisal S, a front-end web developer 
           sculpting digital experiences.
            Within these virtual walls,
             witness the fusion of elegance and innovation.
             Embark on a journey where form meets function,
             and join me in the creation  of the extraordinary.</p>
            </div>
    </motion.div>
            <motion.div      
            className="image-layer" 
            initial={{ opacity: 0, scale: 0.2,}}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
         
            
            
            
            >
            <img className="main-img" src ={fed1} alt="mainimage" />
            </motion.div>
       
        
       
    </div>
    </div>
         )
}

export default Home;