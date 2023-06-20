import { Autocomplete, Box, FormControlLabel, TextField, Typography } from '@mui/material'
import React from 'react'

const AutocompleteEx = () => {

  const langArr = ['C Lang', 'C++ Lang', 'Python', 'JavaScript', 'Java Lang', 'Kotlin Lang', 'Go Lang']

  return (
    <Box>
      <Typography variant='h5'> Material UI Auto-complete Example </Typography>
      <Box
        display={'flex'}
        justifyContent={'center'}
        marginTop={'2rem'}
      >
        <Autocomplete
          style = {{width:'300px'}}
          options={langArr}
          renderInput = {(params) => (<TextField {...params} color="secondary" />)}
        >
        </Autocomplete>
        <FormControlLabel
          select
          label='select Your lang'        
          options={langArr}
        />
      </Box>
    </Box>
  )
}

export default AutocompleteEx