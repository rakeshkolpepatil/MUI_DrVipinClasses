import { Box, FormControlLabel, Switch, Typography } from '@mui/material'
import React, { useState } from 'react'

const MuiTransitionsEx = () => {
  const [value, setValue] = useState()
  return (
    <Box>
      <Typography variant="h4" color="secondary"> MUI Transitions Example</Typography>
      <Box>
        <FormControlLabel
          label='Show Transition'
          control={<Switch checked={value} ></Switch>}
        />
      </Box>

    </Box>
  )
}

export default MuiTransitionsEx