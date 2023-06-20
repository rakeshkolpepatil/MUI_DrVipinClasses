import { Box, Typography } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React, { useState } from 'react'

const TimePickerEx = () => {

  const [value, setValue] = useState(null)

  return (
    <Box>
      <Typography variant="h4" color="initial"> MUI Time Picker Example </Typography>
      <Box
        sx={{mt:'2rem', left:'0' }}
      >
        <LocalizationProvider 
          dateAdapter={AdapterDayjs}
        >
          <Typography 
            variant="subtitle" 
            color="initial"
            > 
            Time Picker 
          </Typography>
          <DatePicker 
            label='Select Date'
            sx={{ mt: '2rem'}}
            value={value}
            onChange={(newValue) => setValue(newValue)}
            slotProps={{ textField: { variant: 'outlined' } }}
            />
        </LocalizationProvider>
      </Box>
      <br/>
    </Box>
  )
}

export default TimePickerEx