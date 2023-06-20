import { Box, ToggleButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';


const ToggleButtonEx = () => {

  const [fromats, setFormats] = useState(['bold','italic'])

  return (
    <>
      <Typography variant='h4' marginBottom={5}> Toggle Button Example </Typography>
      <Box>

      </Box>
      <ToggleButton> <FormatBoldIcon/> </ToggleButton>
      <ToggleButton> <FormatItalicIcon/> </ToggleButton>
      <ToggleButton> <FormatUnderlinedIcon/> </ToggleButton>
    </>
  )
}

export default ToggleButtonEx