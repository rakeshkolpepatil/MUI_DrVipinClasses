import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Typography } from '@mui/material'
import React, { useState } from 'react'

const CheckboxEx = () => {

  const [countryArr, setCountryArr] = useState([])

  const handleChange = (e) => {
    const idx = countryArr.indexOf(e.target.value)
    if(idx == -1){
      setCountryArr([...countryArr, e.target.value ])
    }
    else{
      setCountryArr(countryArr.filter( cntry => cntry != e.target.value ))
    }
  }

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
          error = {countryArr.length === 0}
        >
          Please select countries
        </FormLabel>
        <FormGroup>
          <FormControl
            sx={{marginLeft:'1rem'}}
          >
            <FormControlLabel label='India' value='Ind' onChange={handleChange} control={<Checkbox />}> </FormControlLabel>
            <FormControlLabel label='America' value='USA' onChange={handleChange} control={<Checkbox />}> </FormControlLabel>
            <FormControlLabel label='Russia' value='USSR' onChange={handleChange} control={<Checkbox />}> </FormControlLabel>
          </FormControl>
          
          {
            countryArr.length === 0 ? <FormHelperText> You must select a country </FormHelperText> : null  
          }
        </FormGroup>
      </Box>
      You have slected - {countryArr.join(", ")}
    </Box>
  )
}

export default CheckboxEx