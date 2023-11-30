import React from "react";
import "./contact.css";
import Lottie from "lottie-react";
import contact from "./myimages/contact.json";
import customer from "./myimages/customer-care.json";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import Fade from 'react-reveal/Fade';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contact(){
    const form = useRef();

  const sendEmail = (e) => {
    
    e.preventDefault();

    emailjs.sendForm('service_nuw9fkf', 'template_g4yhgqs', form.current, '3t7-bXuSwjjDHtlqL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
     
  };
  document.addEventListener('DOMContentLoaded', function() {
    
    const sendbtn = document.getElementById("sendbutton");
    sendbtn.addEventListener("click",function (){
        alert("your message was sent to faisal");
        });
  });
  document.addEventListener("submit", function(){
    const formData = document.getElementById("form")
    formData.reset()
  });
  

      return(
        <div className="content5">
            <Fade
            bottom
            delay={600}
            duration={1000}
            >
             <div className="contacts">
                <div className="leftsec">
                    <div id="contacthead">
                        <Fade
                        bottom
                        duration={600}
                        dealy={100}
                        >
                        <h1>Let's chat about your <span>Project</span></h1>
                        </Fade>
                     
                       <Lottie  className=""animationData={customer}/>
                       
                    </div>
                    <div   id="contacthead">
                    <h2>Mail me at
                        <span>&nbsp; mdfaisalsyed2310@gmail.com</span>
                      
                    </h2> 
                    <Lottie  className="contactanime"animationData={contact}/>
                    </div>
                    
                <div className="contact-logos">
                <a href="https://www.linkedin.com/in/mohammed-faisal-s-30690825b/"> <TiSocialLinkedinCircular className="social-icon" /></a> 
                <a href="https://github.com/mdfaisal001/mdfaisal001"> <FaGithub  className="social-icon2"/></a>

                </div>
                   
            </div>
                <div  className="rightsec">
                    <form ref={form} onSubmit={sendEmail} id="form">
                         <h2>Contact <span>me</span></h2>
                         <input type="text" name="from_name"  placeholder="Your name here"/>
                         <input type="email" name="from_email" placeholder="example@gmail.com"/>
                         <input type="number" name="from_phone"  placeholder="Your phone here"/>
                         <textarea name="message"   cols="30" rows="10" placeholder="Your message here"></textarea>
                         <button type="submit" id="sendbutton">Send </button>
                    </form>
                </div>
             </div>
             </Fade>
             </div>

        )
}


export default Contact;