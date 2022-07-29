import React from 'react'
import Img from '../assets/Photos/baby.png'
import imge from '../assets/Photos/color.png'
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import banners from '../assets/Photos/banner.svg'
import photo from '../assets/Photos/111.svg'
import blue from '../assets/Photos/bluebanner.svg'
import vectimg from '../assets/Photos/Vector.png'


   
const Styleimgs = styled("div") (({ theme })  => ({
 
    

}))

const Stylediv = styled("div") (({ theme }) => ({
   ' & img':{
        height:'20px', width:'20x' , 
   },

   [theme.breakpoints.up("xl")]:{
     ' & button':{
    boxSizing: 'border-box',

    position: 'absolute',
    width: '183px',
    height: '47px',
    left: '255px',
    top: '370px',
    
    background: '#00BEE3',
    border: '1px solid #000000',
    borderRadius: '99px',
    fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '21px',
  lineHeight: '36px',
  display: 'auto',
  alignItems: 'center',
  textAlign: 'center',
  color: '#FFFFFF',
  cursor:'pointer'
    
     },
    },
      [theme.breakpoints.down("xl")]:{
        ' & button':{
          boxSizing: 'border-box',
      
          position: 'absolute',
          width: '183px',
          height: '47px',
          left: '210px',
          top: '656px',
          
          background: '#00BEE3',
          border: '1px solid #000000',
          borderRadius: '99px',
          fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '21px',
        lineHeight: '36px',
        display: 'auto',
        alignItems: 'center',
        textAlign: 'center',
        color: '#FFFFFF',
        cursor:'pointer'
      }
      },
      [theme.breakpoints.only("xl")]:{
        ' & button':{
          boxSizing: 'border-box',
      
          position: 'absolute',
          width: '183px',
          height: '47px',
          left: '210px',
          top: '650px',
          
          background: '#00BEE3',
          border: '1px solid #000000',
          borderRadius: '99px',
          fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '21px',
        lineHeight: '36px',
        display: 'auto',
        alignItems: 'center',
        textAlign: 'center',
        color: '#FFFFFF',
        cursor:'pointer'
      },

    }, 
   

    [theme.breakpoints.up("lg")]:{
      ' & button':{
        boxSizing: 'border-box',
    
        position: 'absolute',
        width: '183px',
        height: '47px',
        left: '250px',
        top: '370px',
        
        background: '#00BEE3',
        border: '1px solid #000000',
        borderRadius: '99px',
        fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '21px',
      lineHeight: '36px',
      display: 'auto',
      alignItems: 'center',
      textAlign: 'center',
      color: '#FFFFFF',
      cursor:'pointer'
    }
    },
}))

const Phone = () => {
  return (
    <>
     <Styleimgs>

  <img style={{width:'100%'}} src={banners} />
         <Stylediv>
         <button>Read more</button>
         <img  src={vectimg} />
         </Stylediv>
  </Styleimgs>   

    </>
  )
}

export default Phone