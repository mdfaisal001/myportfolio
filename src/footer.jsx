import React from "react";
import "./footer.css";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

function Footer(){
    return(
        <footer>
        <div  className="footer">
         
            <div className="fsection1"> 
                <div>
                <h1> Mohammed <span>Faisal</span></h1>
                </div>
                
          </div>
            <div className="fsection2">
                <div className="fsectioninfo">
                   <p>Copyrights &copy;2023 by Mohammed faisal</p></div>
                   <div className="footer-logos">
                <a href="https://www.linkedin.com/in/mohammed-faisal-s-30690825b/"> <TiSocialLinkedinCircular className="social-icon" /></a> 
                <a href="https://github.com/mdfaisal001/mdfaisal001"> <FaGithub  className="social-icon2"/></a>

                </div>
                </div>
                
                
                
            
        </div>
        </footer>
    )
}

export default Footer;
