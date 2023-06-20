import { Autocomplete, Box, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const AutocompleteMultiEx = () => {

  const nameList = [
    {firstname:'Gopal', lastName:'Verma'},
    {firstname:'Love', lastName:'Coder'},
    {firstname:'Vipin', lastName:'Bihari'},
    {firstname:'Hari', lastName:'Kumar'},
    {firstname:'Manish', lastName:'Mehata'},
  ]
  
  const [value, setValue] = useState()
  const handleChange = (event, newVal) => {
    setValue(newVal)
  }
  return (
    <Box>
      <Typography variant='h5'> The Autocomplete Multiple Options Example </Typography>
      <Box width={400}
        mt={'3rem'}
        ml={'2rem'}
      >
        <Autocomplete
          options={nameList}
          getOptionLabel={(option)=> option.firstname}
          value={value}
          onChange={handleChange}
          renderInput={ (params) => (<TextField {...params} label="Select name"/>)}
        />
      </Box>
      <Typography mt={'3rem'} align='left' ml={3rem'}> {value? `${value.firstname} ${value.lastName}` : null}
      </Typography>
    </Box>
  )
}

export default AutocompleteMultiEx