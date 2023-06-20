import { Autocomplete, Box, FormControlLabel, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const AutocompleteEx = () => {

  const langArr = ['C Lang', 'C++ Lang', 'Python', 'JavaScript', 'Java Lang', 'Kotlin Lang', 'Go Lang']
  const [selectItem, setSelectItem] = useState('')

  return (
    <Box>
      <Typography variant='h5'> Material UI Auto-complete Example </Typography>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        margin={'2rem'}
        padding={'1rem'}
      >
        <Autocomplete
          style = {{width:'300px'}}
          options={langArr}
          renderInput = {(params) => (<TextField {...params} color="secondary" />)}
        >
        </Autocomplete>
        <div/>
        <TextField
          select
          label='select Your lang'        
          value={selectItem}
          sx={{ marginTop:'2rem'}}
        >
          {
            langArr.map( (itr) => {
              return <MenuItem value={itr} key={itr}> {itr} </MenuItem>;
            } )
          }
        </TextField>
      </Box>
    </Box>
  )
}

export default AutocompleteEx