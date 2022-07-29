import React from "react";
import { Typography } from "@mui/material";

import { styled } from "@mui/system";
 import upcome from '../assets/Photos/paras.png'
 import upcomes from '../assets/Photos/upcoming.png'
 

  

 
 
 const Event = () => {
   return (
    <>
    <center
    style={{
      marginTop: "10vh",
    }}
  >
    <Typography
      sx={{
        color: "#00BEE3",
        fontSize: "20px",
      }}
    >
      E v e n t s
    </Typography>
  </center>
  <center
    style={{
      marginTop: "10vh",
    }}
  >
    <p
      style={{
        color: "#332E57",
        fontSize: "55px",
        fontWeight: "bold",
      }}
    >
     
    </p>
  </center>
  <center>
  <div style={{display:"flex" , justifyContent: "center" , alignItems: "center" , }} >
    <img
    style={{
      boxShadow: "10px 10px 34px rgba(0,0,0,0.25)",
     backgroundColor:'white',
      marginTop:'-40px' , 
      borderRadius:'10px',
      opacity:'-1.2px',
      height:'550px',
      width:'550px'
    }}
    src={upcome}
    />
    <img
    style={{
      boxShadow: "10px 10px 34px rgba(0,0,0,0.25)",
     backgroundColor:'white',
      marginTop:'-40px' , 
      borderRadius:'10px',
      opacity:'-1.2px',
      height:'550px',
      width:'550px',
      marginLeft:'30px',
    
    }}
    src={upcomes}
    />
    </div>
  </center>
    </>
   )
 }
 
 export default Event