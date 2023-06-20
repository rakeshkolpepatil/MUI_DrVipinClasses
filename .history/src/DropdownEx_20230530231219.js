import { Box, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const DropdownEx = () => {
  const [lang, setLang] = useState('Python')
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
          onChange={(e)=>{setLang(e.target.value)}}

        >
          langArr.map( (itr) =>({
            return <MenuItem> C++ </MenuItem>;
          }) )
          
        </TextField>
      </Box>
    </Box>
  )
}

export default DropdownEx