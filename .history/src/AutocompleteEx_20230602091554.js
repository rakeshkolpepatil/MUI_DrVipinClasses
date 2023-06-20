import { Autocomplete, Box, FormControlLabel, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const AutocompleteEx = () => {

  const langArr = ['C Lang', 'C++ Lang', 'Python', 'JavaScript', 'Java Lang', 'Kotlin Lang', 'Go Lang']
  const [selectItem, setSelectItem] = useState('')
  const [autocompleteItem, setAutocompleteItem] = useState('')

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
          autocompleteItem = {autocompleteItem}
          onChange={(e)=>setAutocompleteItem(e.target.value)}
          renderInput = {(params) => (<TextField {...params} color="secondary" />)}
        >
        </Autocomplete>
        <Typography 
          mt={3}
          marginLeft={'0rem'}
        >
          The Selected autocomplete item is {autocompleteItem}
        </Typography>
        {/* Autocomplete will not work for Textfield. */}
        <div/>
        <TextField
          select
          label='select Your Language'        
          value={selectItem}
          onChange={(e)=>{setSelectItem(e.target.value)}}
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