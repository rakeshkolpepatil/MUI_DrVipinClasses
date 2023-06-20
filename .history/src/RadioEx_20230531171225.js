import { Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'

const RadioEx = () => {
  const [country, setCountry] = useState('')
  return (
    <Box>
      <Typography> Example of Radio Button </Typography>
      <Box
                display='flex'
                justifyContent ="left"
                margin={'1rem'}
      >
        <FormControl>
          <FormLabel
            error={!country}
          >
            Please Select your country -
          </FormLabel>
          <RadioGroup
            onChange={(e)=>{setCountry(e.target.value)}}
          >
            <FormControlLabel label="India" value='India' control={<Radio color="secondary"/>}></FormControlLabel>
            <FormControlLabel label="America" value='USA' control={<Radio color="primary"/>}></FormControlLabel>
            <FormControlLabel label="Russia" value='USSR' control={<Radio color="success"/>}></FormControlLabel>
          </RadioGroup>
          {!country? <FormHelperText> You must select the country! </FormHelperText>: null }
        </FormControl>
      </Box>
        You have selected following country = {country} 
    </Box>
  )
}

export default RadioEx