import React from "react";
import "./About.css";
import aimg from "../src/myimages/aimg.png";
import Lottie from "lottie-react";
import htmllogo from "../src/logoimages/htmllogo.png";
import csslogo from "../src/logoimages/csslogo.png";
import jslogo from "../src/logoimages/jslogo.png";
import pythonlogo from "../src/logoimages/pythonlogo.png";
import reactlogo from "../src/logoimages/reactlogo.png";
import bganime3 from  "./myimages/Work.json";
import fend from "../src/myimages/fend.svg";
import wdesign from "../src/myimages/webdesign.svg";
import bend from "../src/myimages/backend.svg";
import ProgressBar from "@ramonak/react-progress-bar";
import Fade from 'react-reveal/Fade';




function About(){
    return(
      <div className="content3">
   <div>
      <div className="tools">
      <div>
        <Lottie className="workanime"  animationData={bganime3}  />
      </div>
      <div> 
        <img className="tlogo1" src ={htmllogo }alt="aboutimage" />
        <Fade bottom
         delay={200}
         duration={300}
        
        >
        <ProgressBar className="pbar"
         completed={93}
         bgColor="green"
         height="22px"
         animateOnRender={true}
         
         
         />
        </Fade>
     
      </div>
      <div>
        <img className="tlogo1" src ={csslogo }alt="aboutimage" />
        <Fade
        bottom
         delay={200}
         duration={300}>
        <ProgressBar className="pbar"
         completed={78}
         bgColor="orange"
         height="22px"
         animateOnRender={true}
         
         duration={700}
         
         />
         </Fade>
         
        
      </div>
      <div>
         <img className="tlogo1" src ={jslogo }alt="aboutimage" />
         <Fade
         bottom
         delay={200}
         duration={300}>
            <ProgressBar className="pbar"
         completed={86}
         bgColor="green"
         height="22px"
         animateOnRender={true}
         
        
         />
         </Fade>
       
      </div>
      <div>
          <img className="tlogo1" src ={reactlogo }alt="aboutimage" />
          <Fade
          bottom
         delay={200}
         duration={300}>
          <ProgressBar className="pbar"
         completed={82}
         bgColor="green"
         height="22px"
         animateOnRender={true}

         
         />
         </Fade>
      </div>
      <div>
      <img className="tlogo1" src ={pythonlogo }alt="aboutimage" />
      <Fade
      bottom
      delay={200}
      duration={300}>
      <ProgressBar className="pbar"
         completed={90}
         bgColor="green"
         height="22px"
         animateOnRender={true}
         
         
         
         />
        
        </Fade> 

      </div>
     
 </div>

<Fade
bottom
duration={1000}  
delay={400}

>
<div className="about-layer">
   <div className="section1"> 
       <div>
          <img className="aimg" src ={aimg}alt="aboutimage" />
       </div>
   </div>
   <div className="section2">
        <div><h1>About </h1>
        <hr></hr>
        </div>
        <div className="sec2p">
        <p>
        Passionate front-end developer and aspiring graduate with a strong desire
         to create engaging and user-friendly web experiences. Currently pursuing 
         a Bachelor's degree at Dhanalakshmi Srinivasan Engineering College and actively seeking opportunities to contribute to 
         innovative web projects. Eager to learn, grow, and make a positive impact
          in the world of web development.
        </p>
        </div>
      
        
   </div>
   
</div>
</Fade>
   
      <Fade
       bottom
      delay={400}
      duration={1000}>
      
      
      <div className="skills">
        
         <div>
          <h1>What I do?</h1>
         </div>
         
         <div className="skill-layout">
           <div className="sinfo">
              <img  className="simg"src={fend} alt="fend"/>
              <h>Frontend Webdevelopment</h>
              <p className="sinfo-p">Experienced Frontend Developer skilled in crafting
                 engaging and responsive user interfaces. Proficient in HTML, CSS, and
                  JavaScript to create seamless web experiences.</p>
           </div>
           <div className="sinfo" >
              <img className="simg" src={wdesign} alt="wd"/>
              <h id="wdh">Web Design</h>
              <p className="sinfo-p">
              Creative Web Designer with a passion for translating concepts
               into visually appealing and user-centric designs. 
               Proficient in UI/UX principles, HTML, CSS, and graphic design tools.
              </p>
           </div>
           <div  className="sinfo">
              <img className="simg" src={bend} alt="bend"/>
              <h>Backend Webdevelopment</h>
              <p className="sinfo-p">Seasoned Backend Developer specializing in building robust and scalable server-side applications.
                 Proficient in languages like Javascript, Python, or Node.js, 
                 with a focus on database management and server optimization.</p>
           </div>
          

          

         </div>
      </div>
      </Fade>
      </div>
      </div>

      
      
      
      )
}
    
  
export default About;