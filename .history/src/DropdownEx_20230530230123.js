import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

const DropdownEx = () => {
  const [lang, setLang] = useState('Python')
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
        >

        </TextField>
      </Box>
    </Box>
  )
}

export default DropdownEx