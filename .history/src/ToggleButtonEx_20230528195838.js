import { Box, List, ListItem, ListItemText, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

import FormatAlignLeftTwoToneIcon from '@mui/icons-material/FormatAlignLeftTwoTone';
import FormatAlignCenterTwoToneIcon from '@mui/icons-material/FormatAlignCenterTwoTone';
import FormatAlignJustifyTwoToneIcon from '@mui/icons-material/FormatAlignJustifyTwoTone';
import FormatAlignRightTwoToneIcon from '@mui/icons-material/FormatAlignRightTwoTone';

const ToggleButtonEx = () => {
  const [formats, setFormats] = useState([])

  const handleChange = (e, valueArray) => {
    setFormats(valueArray)
    console.log(valueArray)
  }

  let paraStyle = {
    fontWeight: '',
    fontStyle:'',
    textDecoration:''
  }

  const getParaStyle = ()=> {
    for(let i=0; i< formats.length; i++){
      if(formats[i] === 'bold')
          paraStyle = {...paraStyle, fontWeight:'bold'}
      else if (formats[i] === 'italic')
          paraStyle = {...paraStyle, fontStyle:'italic'}
      else if (formats[i] === 'underline')
          paraStyle = {...paraStyle, textDecoration:'underline'}
    }
    return paraStyle
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
        // exclusive
        value={formats}
        onChange={handleChange}
        aria-label='platform'
      >
        <ToggleButton value='bold'> <FormatBoldIcon color='secondary' /> </ToggleButton>
        <ToggleButton value='italic'> <FormatItalicIcon color='secondary'/> </ToggleButton>
        <ToggleButton value='underline'> <FormatUnderlinedIcon/> </ToggleButton>
      </ToggleButtonGroup>

      <Typography variant='body1' mt={'1rem'} sx={getParaStyle} mx={'2rem'}>
        Incididunt do incididunt cupidatat laboris reprehenderit ex consectetur occaecat aliqua cupidatat esse. Occaecat consectetur Lorem ex proident fugiat quis eu. Amet ad id proident qui irure ex ex magna consequat ut excepteur est laborum. Id id aliquip proident ullamco veniam voluptate sunt incididunt tempor sit veniam cupidatat. Fugiat exercitation voluptate cillum magna consectetur velit exercitation. Tempor et dolor laborum labore veniam voluptate irure fugiat nisi dolore minim sit eu mollit. Dolor nostrud excepteur elit ullamco est labore.
      </Typography>

      <Typography variant='h4' marginTop={5}> Exclusive Toggle Button Example </Typography>

      <ToggleButtonGroup sx={{mt: '1rem'}}>
        <ToggleButton value='left'> <FormatAlignLeftTwoToneIcon/> </ToggleButton>
        <ToggleButton value='center'> <FormatAlignCenterTwoToneIcon/> </ToggleButton>
        <ToggleButton value='justify'> <FormatAlignJustifyTwoToneIcon/> </ToggleButton>
        <ToggleButton value='right'> <FormatAlignRightTwoToneIcon/> </ToggleButton>
      </ToggleButtonGroup>
      
      <Typography variant='body1' mt={'1rem'} mx={'2rem'}>
        Reprehenderit ad ex Lorem velit reprehenderit labore fugiat ut culpa anim eiusmod nostrud exercitation. Amet qui pariatur ad sit. Incididunt culpa quis adipisicing nostrud laboris enim proident sunt occaecat irure magna. Tempor esse magna sint anim ea sit adipisicing do irure nulla. Aute excepteur aute ex magna minim et. Eiusmod id quis occaecat adipisicing id non cillum. Esse aute consectetur nulla incididunt anim anim.
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
