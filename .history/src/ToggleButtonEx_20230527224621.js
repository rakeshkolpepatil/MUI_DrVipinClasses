import { ToggleButton, Typography } from '@mui/material'
import React from 'react'
import {FormatBoldIcon, FormatItalicIcon, FormatUnderlinedIcon}  from '@mui/icons-material';
import  from '@mui/icons-material/FormatItalic';
import  from '@mui/icons-material/FormatUnderlined';

const ToggleButtonEx = () => {
  return (
    <>
      <Typography variant='h4' marginBottom={5}> Toggle Button Example </Typography>
      <ToggleButton>
        Hi
      </ToggleButton>
    </>
  )
}

export default ToggleButtonEx