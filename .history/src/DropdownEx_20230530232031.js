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
          label="Select Computer Language"
          select
          value={lang}
          width='300px'
          onChange={(e)=>{setLang(e.target.value)}}
          sx={{width:'40%'}}
        >
          {
            langArr.map( (itr) => {
              return <MenuItem key={itr}> {itr} </MenuItem>;
            } )
          }
        </TextField>
      </Box>
    </Box>
  )
}

export default DropdownEx