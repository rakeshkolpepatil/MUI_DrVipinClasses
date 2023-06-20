import { Box, List, ListItem, ListItemText, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';


const ToggleButtonEx = () => {

  const [formats, setFormats] = useState(['bold','italic'])

  return (
    <>
      <Typography variant='h4' marginBottom={5}> Toggle Button Example </Typography>
      <Box marginBottom={3} sx={{  mx:'auto'}}>
          <List sx={{ mx:'auto', width:'100px' }}>
            {
              formats.map( (ite)=>{ return <ListItem sx={{m:'0', p:'0'}}> <ListItemText > {ite} </ListItemText> </ListItem> })
            }
          </List>
      </Box>
      <ToggleButtonGroup color='success' >
        <ToggleButton color='success'> <FormatBoldIcon/> </ToggleButton>
        <ToggleButton> <FormatItalicIcon/> </ToggleButton>
        <ToggleButton> <FormatUnderlinedIcon/> </ToggleButton>
      </ToggleButtonGroup>
    </>
  )
}

export default ToggleButtonEx