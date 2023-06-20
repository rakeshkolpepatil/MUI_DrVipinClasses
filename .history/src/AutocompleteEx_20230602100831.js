import { Autocomplete, Box, FormControlLabel, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const AutocompleteEx = () => {

  const langArr = ['C Lang', 'C++ Lang', 'Python', 'JavaScript', 'Java Lang', 'Kotlin Lang', 'Go Lang']
  const langObjArr = langArr.map((value, index) =>({id:index+1, lang:value}))

  const [selectItem, setSelectItem] = useState('')
  const [autocompleteItem, setAutocompleteItem] = useState('')
  const [autocompleteObjItem, setAutocompleteObjItem] = useState({id:'', lang:''})

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
          autocompleteitem = {autocompleteItem}
          onChange={(e, selectedValue)=>setAutocompleteItem(selectedValue)}
          renderInput = {(params) => (<TextField {...params} color="secondary" />)}
        >
        </Autocomplete>
        <Box
          marginLeft={'0rem'}
          display={'flex'}
          justifyContent={'left'}
        >
          <Typography 
            mt={3}
          >
            The Selected autocomplete item is {autocompleteItem}
          </Typography>
        </Box>

        {/* The autocomplete component with objects as items. */}
        <Autocomplete
          style = {{width:'300px', marginTop:'2rem'}}
          options={langObjArr}
          getOptionLabel={(option)=> option.lang}
          autocompleteitem = {autocompleteObjItem}
          onChange={(e, selectedValue)=>setAutocompleteObjItem(selectedValue)}
          renderInput = {(params) => (<TextField {...params} color="secondary" />)}
        >
        </Autocomplete>
        <Box
          marginLeft={'0rem'}
          display={'flex'}
          justifyContent={'left'}
        >
          <Typography 
            mt={3}
          >
            The Selected autocomplete item is {JSON.stringify(autocompleteObjItem)}
          </Typography>
        </Box>


        {/* Autocomplete will not work for Textfield. */}
        <br/>
        <TextField
          select
          label='select Your Language'        
          value={selectItem}
          display='flex'
          aligncontent='flex-start'
          alignitems='left'
          justifycontent='left'
          onChange={(e)=>{setSelectItem(e.target.value)}}
          sx={{ marginTop:'2rem', width:'300px'}}
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