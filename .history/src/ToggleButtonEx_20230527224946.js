import { ToggleButton, Typography } from '@mui/material'
import React from 'react'
// import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import { FormatBoldIcon, FormatItalicIcon, FormatUnderlinedIcon }  from '@mui/icons-material';

const ToggleButtonEx = () => {
  return (
    <>
      <Typography variant='h4' marginBottom={5}> Toggle Button Example </Typography>
      <ToggleButton> <FormatBoldIcon/> </ToggleButton>
    </>
  )
}

export default ToggleButtonEx