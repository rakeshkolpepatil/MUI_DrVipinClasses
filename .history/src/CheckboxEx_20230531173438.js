import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Typography } from '@mui/material'
import React, { useState } from 'react'

const CheckboxEx = () => {

  const [countryArr, setCountryArr] = useState([])

  return (
    <Box>
      <Typography variant='h5'> This is CheckBox Example </Typography>
      <Box 
        display='flex'
        flexDirection = 'column'
        margin={'1rem'} 
      >
        <FormLabel
          sx={{marginLeft: '0px'}}
        >
          Please select countries
        </FormLabel>
        <FormGroup>
          <FormControl>
            <FormControlLabel label='India' value='Ind' control={<Checkbox />}> </FormControlLabel>
            <FormControlLabel label='America' value='USA' control={<Checkbox />}> </FormControlLabel>
            <FormControlLabel label='Russia' value='USSR' control={<Checkbox />}> </FormControlLabel>
          </FormControl>
        </FormGroup>
      </Box>
    </Box>
  )
}

export default CheckboxEx
