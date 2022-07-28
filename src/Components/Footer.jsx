import React from 'react'
import img from  '../assets/Photos/background.png'
import im from '../assets/Photos/face.png'
import './Footers.css'
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import images from '../assets/Photos/image.png'

const Styleimg = styled("div") (({ theme })  => ({
   ' & img':{
         height:'450px',
         width:'100%' ,
         marginTop:'-470px'
         
   }
}))

const Stylep = styled("div") (({ theme })  => ({
   ' & p':{
    fontFamily: 'Mitr',
fontStyle: 'normal',
fontWeight: '400',
fontSize: '15px',
lineHeight: '24px',
position:'absolute',
marginTop:'-30px',
color: '#FFFFFF',
left:'70px'
   }
}))

const Styleimg1 = styled("div") (({ theme })  => ({
    ' & img':{
        marginTop:'-750px'
    }
}))

const Styless = styled("div") (({ theme }) => ({
   ' & img':{
    height:'30px',
    width:'100px',
    marginLeft:'130px',
    marginBottom:'10px'
   }
}))

const Footer = () => {
  return (
    <>
  
    <Styleimg>
   
    
    <img style={{marginTop:'150px'}} src={images} />
    <img src={img} />
  
    <footer style={{marginTop:'-420px'}}>
   
    <div>
         <span class="logo">KATON</span>
         <Stylep>
         <p>360-Degree Learning Hub</p>
         </Stylep>
    </div>

    <div class="row">
         <div class="col-3">               
             <div class="link-cat" onclick="footerToggle(this)">
                 <span class="footer-toggle"></span>
                 <span class="footer-cat">
                 
                 Lorem ipsum dolor sit amet, consetetur
                 sadipscing sed am nonumy eirmod tempor
                 invidunt ut labore et 
                 Follow us on</span>
             </div>
             <ul class="footer-cat-links">
                 <li style={{marginTop:'60px'}}><a  href=""><span>Follow us on</span></a></li>

                 <Styless>
                 <img src={im}/>
                 </Styless>
            
                 
             </ul>
         </div>
         <div  class="col-3">
             <div class="link-cat" onclick="footerToggle(this)">
                 <span class="footer-toggle"></span>
                 <span style={{marginLeft:'100px' , marginTop:'-130px'}} class="footer-cat">Careers</span>
             </div>
             <ul style={{marginLeft:'100px' , marginTop:'-20px'}} class="footer-cat-links">
                 <li><a  href=""><span>Terms Of Use</span></a></li>
                 <li><a href=""><span>Booking Conditions</span></a></li>
                 <li><a href=""><span>ECommerce</span></a></li>
                 <li><a href=""><span>Privacy Policy</span></a></li>
                 <li><a href=""><span>Club</span></a></li>
             </ul>
         </div>
         <div class="col-3">
             <div class="link-cat" onclick="footerToggle(this)">
                 <span class="footer-toggle"></span>
                 <span class="footer-cat">Follow us</span>
                
             </div>
             <ul class="footer-cat-links">
                 <li><a href=""><span>Facebook</span></a></li>
                 <li><a href=""><span>Twitter</span></a></li>
                 <li><a href=""><span>Linkdin</span></a></li>
                 <li><a href=""><span>Instagram</span></a></li>
             </ul>
         </div>
         <div class="col-3" id="newsletter">
             <span>Stay Connected</span>
             <form id="subscribe">
                 <input type="email" id="subscriber-email" placeholder="Enter Email Address"/>
                 <input type="submit" value="Subscribe" id="btn-scribe"/>
             </form>
             
             <div class="social-links social-2">
              
             </div>

             <div id="address">
                 
             </div>
             
         </div>
       
    </div>
   
    <div id="owner">
      
    </div>
 </footer>
 </Styleimg>

    </>
  )
}

export default Footer