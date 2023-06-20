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
      <Stack >
        <Collapse in={show}>
          <AcUnitTwoToneIcon/>
        </Collapse>
      </Stack>
    </Box>
  )
}

export default MuiTransitionsEx