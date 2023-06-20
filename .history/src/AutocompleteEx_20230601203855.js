import { Autocomplete, Box, TextField, Typography } from '@mui/material'
import React from 'react'

const AutocompleteEx = () => {

  const langArr = ['C Lang', 'C++ Lang', 'Python', 'JavaScript', 'Java Lang', 'Kotlin Lang', 'Go Lang']

  return (
    <Box>
      <Typography variant='h5'> Material UI Auto-complete Example </Typography>
      <Autocomplete
        style = {{width:'300px'}}
        renderInput = {(params) => (<TextField {...params} color="secondary" />)}
      >
        Hello
      </Autocomplete>
    </Box>
  )
}

export default AutocompleteEx