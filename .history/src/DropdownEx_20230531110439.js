import { Box, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const DropdownEx = () => {
  const [lang, setLang] = useState('')
  const [multiLang, setMultiLang] = useState([])
  
  const langArr = ['C++', 'Python', 'Cobol', 'Ruby', 'JavaScript']
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'flex-start'}
      m={'2rem'}
    >
        <Typography variant='h5'> Select Options in MUI </Typography>
        <Box 
          m={'2rem'}
          display={'flex'}
          justifyContent={'center'}
          SelectProps = {{multiple: true}}
        >
          <TextField
            label="Select Computer Language"
            select
            value={multiLang}
            onChange={(e)=>{setMultiLang(e.target.value)}}
            sx={{width:'50%'}}
          >
            {
              langArr.map( (itr) => {
                return <MenuItem value={itr} key={itr}> {itr} </MenuItem>;
              } )
            }
          </TextField>
        </Box>

        <Box
          m={'2rem'}
        >
          <TextField
            label="Select Computer Language"
            select
            SelectProps={{ native: true, multiple: true }}
            value={lang}
            onChange={(e)=>{setLang(e.target.value)}}
            sx={{width:'50%'}}
          >
            {
              langArr.map((itr) => (
                <option value={itr} key={itr}> {itr} </option>
              ))
            }
          </TextField>
        </Box>

    </Box>
  )
}

export default DropdownEx