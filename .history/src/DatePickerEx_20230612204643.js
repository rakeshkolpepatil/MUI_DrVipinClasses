import React from 'react'
import Typography from '@mui/material/Typography'
import { LocalizationProvider } from '@mui/lab'
import { Box } from '@mui/material'
import { adapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const DatePickerEx = () => {
  return (
    <Box>
      <Typography variant="h4" color="initial"> MUI Date Picker Example </Typography>
      <LocalizationProvider >
        
      </LocalizationProvider>
    </Box>
  )
}

export default DatePickerEx