import React from 'react'
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
 import ladki from '../assets/Photos/ladki.svg'
 import vect from '../assets/Photos/Vector.png'

 const Styleimgs = styled("div" ) (({ theme })  => ({
   ' & img':{
    width:'100%'
   }
 }))

          
const Stylediv = styled("div") (({ theme }) => ({

    [theme.breakpoints.up("xl")]:{
      ' & button':{
     boxSizing: 'border-box',
 
     position: 'absolute',
     width: '183px',
     height: '47px',
     left: '355px',
     top: '470px',
     
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
           top: '300px',
           
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
           left: '220px',
           top: '550px',
           
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
     [theme.breakpoints.up("lg")]:{
       ' & button':{
         boxSizing: 'border-box',
     
         position: 'absolute',
         width: '183px',
         height: '47px',
         left: '870px',
         top: '430px',
         
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
      [theme.breakpoints.down("lg")]:{
        ' & button':{
            boxSizing: 'border-box',
        
            position: 'absolute',
            width: '183px',
            height: '47px',
            left: '570px',
            top: '300px',
            
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
    }
 }))

const Baby = () => {
  return (
 <>
 <Styleimgs>
 <img src={ladki} />
 <Stylediv>
 <button>Read more</button>
 </Stylediv>
 </Styleimgs>
 </>

  )
}

export default Baby