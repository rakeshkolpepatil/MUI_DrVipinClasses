import { Box, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const DropdownEx = () => {
  const [lang, setLang] = useState('')
  const langArr = ['C++', 'Python', 'Cobol', 'Ruby', 'JavaScript']
  return (
    <Box>
      <Typography variant='h5'> Select Options in MUI </Typography>
      <Box 
        mt={'2rem'}
      >
        <TextField
          label="Please select computer language."
          select
          value={lang}
          width='300px'
          onChange={(e)=>{setLang(e.target.value)}}
          sx={{width:'50%'}}
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

export default DropdownEx