import React from 'react'
import Img from '../assets/Photos/baby.png'
import imge from '../assets/Photos/color.png'
import { styled } from "@mui/system";
import { AppBar } from "@mui/material"
import { useTheme } from "@mui/material/styles";
import photo from '../assets/Photos/111.svg'

const Phone = () => {
  return (
    <>
    <img style={{width:'100%'}} src={photo} />
    </>
  )
}

export default Phone