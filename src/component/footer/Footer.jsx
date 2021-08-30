import React from 'react'
import "./Footer.css"
import Iframe from 'react-iframe'
import {GrFacebook} from 'react-icons/gr';
import {AiFillLinkedin} from "react-icons/ai"
import {FaInstagram} from "react-icons/fa"
import {TiSocialYoutubeCircular} from "react-icons/ti"

const Footer = () => {
    return (
        <>
           <div className="footer">
               <div className="footertab">
                   <p className="foothead">Download The App Now</p>
                   <img style={{marginBottom:"31.59px"}} alt="" src="public/assets/Appstore.png"></img><br/>
                   <img style={{marginBottom:"77.59px"}} alt="" src="assets/googleplay.png"></img>
                   <p className="copy">@ copyright sketchMonk 2021</p>
               </div>
               <div className="footertab">
                   <p className="foothead">General</p>
                   <p className="footmenu">SignUp</p>
                   <p className="footmenu">About Us</p>
                   <p className="footmenu" style={{width:"120px"}}>Teach On Inskillz</p>
                   <p className="footmenu">Contact Us</p>
                   <p className="footmenu">Careers</p>
               </div>
               <div className="footertab">
                   <p className="foothead">Community</p>
                   <p className="footmenu">Create Account</p>
                   <p className="footmenu">Join Premium</p>
                   <p className="footmenu">Refer A Friend</p>
               </div>
               <div className="footertab">
                   <p className="foothead">Support</p>
                   <p className="footmenu">FAQ's</p>
                   <p className="footmenu">Terms & Condition</p>
                   <p className="footmenu">Privacy Policy</p>
                   <p className="footmenu">Get Help</p>
               </div>
               <div>
                   <p className="foothead">Contact Us</p>
                   <p className="footmenu">FutureLabs Interactive Pvt. Ltd<br/>
                   No. 6/858,2nd Floor,Valamkottil<br/>
                   Towers,Judgemukku, Kakkanad,Kochi</p>
                   <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.7707390316345!2d76.33209581473494!3d10.035768092826684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c46a91a84cb%3A0xe5c08c5b73542cdd!2sFutureLabs%20Interactive%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1630252314713!5m2!1sen!2sin" width="261" height="151" className="map" allowfullscreen="" loading="lazy"></Iframe>
                   <div className="icons">
                   <GrFacebook className="fb"/>
                   <AiFillLinkedin className="linked"/>
                   <FaInstagram className="insta"/>
                   <TiSocialYoutubeCircular className="you"/>
                   </div>
               </div>
           </div> 
        </>
    )
}

export default Footer
