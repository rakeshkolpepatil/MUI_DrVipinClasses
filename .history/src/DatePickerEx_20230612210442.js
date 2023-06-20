import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
// import {  } from '@mui/lab'
import { Box, TextField } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'

const DatePickerEx = () => {

  const [value, setValue] = useState(null)

  return (
    <Box>
      <Typography variant="h4" color="initial"> MUI Date Picker Example </Typography>
      <LocalizationProvider 
        dateAdapter={AdapterDayjs}
        >
        <DatePicker 
          label='Select Date'
          sx={{ mt: '2rem'}}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          renderInput={(props)=> <TextField {...props} />}
        />
      </LocalizationProvider>
    </Box>
  )
}

export default DatePickerEx