import { Autocomplete, Box, Typography } from '@mui/material'
import React from 'react'

const AutocompleteMultiEx = () => {

  const nameList = [
    {firstname:'Gopal', lastName:'Verma'},
    {firstname:'Love', lastName:'Coder'},
    {firstname:'Vipin', lastName:'Bihari'},
    {firstname:'Hari', lastName:'Kumar'},
    {firstname:'Manish', lastName:'Mehata'},
  ]
  
  const [value, setValue] = useState()

  return (
    <Box>
      <Typography variant='h5'> The Autocomplete Multiple Options Example </Typography>
      <Box width={400}>
        <Autocomplete
          options={nameList}
          getOptionLabel={(option)=> option.firstname}
          value={value}
          
        >

        </Autocomplete>
      </Box>
    </Box>
  )
}

export default AutocompleteMultiEx