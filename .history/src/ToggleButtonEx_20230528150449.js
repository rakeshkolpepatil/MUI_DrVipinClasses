import { Box, List, ListItem, ListItemText, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const ToggleButtonEx = () => {
  const [formats, setFormats] = useState(['bold','italic'])
  const handleChange = (e, valueArray) => {
    setFormats(valueArray)
  }

  let paraStyle = {
    fontWeight: '',
    fontStyle:'',
    textDecoration:''
  }

  const getParaStyle = {
    
  }

  return (
    <>
      <Typography variant='h4' marginBottom={5}> Toggle Button Example </Typography>
      {/* <Box marginBottom={3} sx={{  mx:'auto'}}>
          <List sx={{ mx:'auto', width:'100px' }}>
            {
              formats.map( (ite)=>{ return <ListItem sx={{m:'0', p:'0'}}> <ListItemText > {ite} </ListItemText> </ListItem> })
            }
          </List>
      </Box> */}
      <ToggleButtonGroup 
        color='primary' 
        exclusive
        value={formats}
        onChange={handleChange}
        aria-label='platform'
      >
        <ToggleButton value='Bold'> <FormatBoldIcon color='secondary' /> </ToggleButton>
        <ToggleButton value='Italic'> <FormatItalicIcon color='secondary'/> </ToggleButton>
        <ToggleButton value='Underlined'> <FormatUnderlinedIcon/> </ToggleButton>
      </ToggleButtonGroup>

      <Typography sx >
        Proident excepteur eu laborum quis pariatur in voluptate amet anim tempor mollit. Ipsum elit quis elit pariatur voluptate. Velit consequat fugiat labore qui ea consequat elit. Ipsum voluptate amet culpa ea. Minim proident labore enim minim reprehenderit aliquip adipisicing. Ea veniam minim ex proident.
      </Typography>
    </>
  )
}

export default ToggleButtonEx

// import * as React from 'react';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// export default function ColorToggleButton() {
//   const [alignment, setAlignment] = React.useState('web');

//   const handleChange = (
//     event,
//     newAlignment,
//   ) => {
//     setAlignment(newAlignment);
//   };

//   return (
//     <ToggleButtonGroup
//       color="success"
//       value={alignment}
//       exclusive
//       onChange={handleChange}
//       aria-label="Platform"
//     >
//       <ToggleButton value="web">Web</ToggleButton>
//       <ToggleButton value="android">Android</ToggleButton>
//       <ToggleButton value="ios">iOS</ToggleButton>
//     </ToggleButtonGroup>
//   );
// }
