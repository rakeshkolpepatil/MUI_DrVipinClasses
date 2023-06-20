import { Box, Typography } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react'

const DateTimePickerEx = () => {
  return (
    <Box>
    <Typography variant="h4" color="initial"> MUI Time Picker Example </Typography>
      <LocalizationProvider 
        dateAdapter={AdapterDayjs}
      >
      </LocalizationProvider>
    </Box>
  )
}

export default DateTimePickerEx