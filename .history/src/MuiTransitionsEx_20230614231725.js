import { Box, Collapse, FormControlLabel, Stack, Switch, Typography } from '@mui/material'
import React, { useState } from 'react'
import AcUnitTwoToneIcon from '@mui/icons-material/AcUnitTwoTone';

const MuiTransitionsEx = () => {
  const [show, setShow] = useState()
  const handleChange = () =>{
    setShow(!show)
  }

  return (
    <Box>
      <Typography variant="h4" color="secondary"> MUI Transitions Example</Typography>
      <Box>
        <FormControlLabel
          label='Show Transition'
          control={<Switch checked={show} onChange={handleChange} ></Switch>}
        />
      </Box>
      <Stack spacing={2} direction='row' mx={2} mt={4}>
        <Typography variant="h6" color="secondary"> Collapse: </Typography>
        <Collapse in={show} >
          <AcUnitTwoToneIcon sx={{ height:100, width:100 }}/>
        </Collapse>
        <Collapse in={show} collapsedSize={50}>
          <AcUnitTwoToneIcon sx={{ height:100, width:100 }}/>
        </Collapse>
        <Collapse in={show} collapsedSize={50} timeout={1000} >
          <AcUnitTwoToneIcon sx={{ height:100, width:100 }}/>
        </Collapse>
      </Stack>
    </Box>
  )
}

export default MuiTransitionsEx