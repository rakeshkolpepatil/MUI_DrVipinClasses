import { Autocomplete, Box, TextField, Typography } from '@mui/material'
import React from 'react'

const AutocompleteEx = () => {

  const langArr = ['C Lang', 'C++ Lang', 'Python', 'JavaScript', 'Java Lang', 'Kotlin Lang', 'Go Lang']

  return (
    <Box>
      <Typography variant='h5'> Material UI Auto-complete Example </Typography>
      <Autocomplete
        renderInput = {(params) => (<TextField  />)}
      >
        Hello
      </Autocomplete>
    </Box>
  )
}

export default AutocompleteEx