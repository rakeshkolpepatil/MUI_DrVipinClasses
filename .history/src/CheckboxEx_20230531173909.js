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
        margin={'2rem'} 
      >
        <FormLabel
          sx={{
            marginLeft: '0px',
            textAlign: 'left',
            marginBottom: '1rem'
          }}
        >
          Please select countries
        </FormLabel>
        <FormGroup>
          <FormControl
            sx={{marginLeft:'1rem'}}
          >
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
