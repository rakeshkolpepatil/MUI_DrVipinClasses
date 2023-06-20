import { Box, Typography } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React, { useState } from 'react'

const TimePickerEx = () => {
  const [value, setValue] = useState(null)

  return (
    <Box>
      <Typography variant="h4" color="initial"> MUI Time Picker Example </Typography>
      <LocalizationProvider 
        dateAdapter={AdapterDayjs}
      >
        <Typography variant="subtitle" color="initial"> Time Picker </Typography>
        <DatePicker 
          label='Select Date'
          sx={{ mt: '2rem'}}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          slotProps={{ textField: { variant: 'outlined' } }}
          // renderInput={(props)=> <TextField {...props} />}
        />
      </LocalizationProvider>
      <br/>
    </Box>
  )
}

export default TimePickerEx