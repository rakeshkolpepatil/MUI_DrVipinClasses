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
      <Box width={400}>
        <Autocomplete
          options={nameList}
          getOptionLabel={(option)=> option.firstname}
          value={value}
          onChange={handleChange}
          renderInput={ (params) => (<TextField {...params} label="Select name"/>)}
        >

        </Autocomplete>
      </Box>
    </Box>
  )
}

export default AutocompleteMultiEx