import React from 'react'
import Img from '../assets/Photos/baby.png'
import imge from '../assets/Photos/color.png'
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import banners from '../assets/Photos/banner.svg'
import photo from '../assets/Photos/111.svg'
import blue from '../assets/Photos/bluebanner.svg'
   
const Styleimgs = styled("div") (({ theme })  => ({
  ' & img':{
    marginTop:'20px'
  }
}))

const Stylediv = styled("div") (({ theme }) => ({

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
          marginLeft:'-42px',
          marginTop:'-52px'
        }
      }
}))

const Phone = () => {
  return (
    <>
     <Styleimgs>

  <img style={{width:'100%'}} src={banners} />
         <Stylediv>
         <button>Read more</button>
         </Stylediv>
  </Styleimgs>   

    </>
  )
}

export default Phone