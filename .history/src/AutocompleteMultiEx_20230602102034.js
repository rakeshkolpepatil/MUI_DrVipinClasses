import { Box, Typography } from '@mui/material'
import React from 'react'

const AutocompleteMultiEx = () => {

  const nameList = [
    {firstname:'Gopal', lastName:'Verma'},
    {firstname:'Love', lastName:'Coder'},
    {firstname:'Vipin', lastName:'Bihari'},
    {firstname:'Hari', lastName:'Kumar'},
    {firstname:'Manish', lastName:'Mehata'},
  ]

  return (
    <Box>
      <Typography> The Autocomplete Multiple Options Example </Typography>
    </Box>
  )
}

export default AutocompleteMultiEx