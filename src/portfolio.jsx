import React from "react";
import "./portfolio.css";
import project from  "./myimages/project-animation.json";
import pimage from "../src/myimages/netflix-clone.png";
import pimage2 from "../src/myimages/battery-analyzer.png";
import pimage3 from "../src/myimages/ecommerce.png";
import Lottie from "lottie-react";
import Fade from 'react-reveal/Fade';


import { FaGithub } from "react-icons/fa";

function Portfolio(){
  return(

    <Fade
    bottom
    delay={600}
    duration={1000}
    >

<div className="portfolio">
    <div className="psec1">
        <div>
        <h1>Portfolio</h1>
        </div>
        <div className="proj-sec">
          <h2>Projects</h2>
          <Lottie  className="contactanime"animationData={project}/>
        </div>
        

    </div>
      <div className="psec2">
          <div className="sec2bg">
            <div className="proimagelayer">
              <img  className="proimage"src={pimage} alt="projectimage"/>
            </div>
            <div className="proinfo">
              <h2>Netflix clone</h2>
              <h3>Languages used: HTML,Css,Javascript</h3>
              <h4>Framework used:React js</h4>
              <div>
             <a href="https://github.com/mdfaisal001/netflix-clone"> <button className="gitbutton">view on <FaGithub/></button> </a>
            </div>
           </div>
            

          </div>
          <div className="sec2bg">
            <div className="proimagelayer">
              <img  className="proimage"src={pimage2} alt="projectimage"/>
            </div>
            <div className="proinfo">
              <h2>Battery Analyzer UI</h2>
              <h3>Languages used: HTML,Css,Javascript</h3>
              <h4>Framework used:React js</h4>
              <div>
              <a href="https://github.com/mdfaisal001/battery-analyzer-UI" ><button className="gitbutton">view on <FaGithub/></button></a>
            </div>
           </div>
            

          </div>
          <div className="sec2bg">
            <div className="proimagelayer">
              <img  className="proimage"src={pimage3} alt="projectimage"/>
            </div>
            <div className="proinfo">
              <h2>Ecommerce Petshop UI</h2>
              <h3>Languages used: HTML,Css</h3>
              <h4>Framework used:None</h4>
              <div>
              <a href="https://github.com/mdfaisal001/Petshop-ecommerce-web-UI"><button className="gitbutton">view on <FaGithub/></button></a>
            </div>
           </div>
            

          </div>


      </div>


    </div>
    </Fade>
  )
}

export default Portfolio;