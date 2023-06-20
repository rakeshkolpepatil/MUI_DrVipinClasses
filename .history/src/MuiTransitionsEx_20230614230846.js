import { Box, FormControlLabel, Switch, Typography } from '@mui/material'
import React, { useState } from 'react'

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
          control={<Switch checked={value} onChange={handleChange} ></Switch>}
        />
      </Box>

    </Box>
  )
}

export default MuiTransitionsEx