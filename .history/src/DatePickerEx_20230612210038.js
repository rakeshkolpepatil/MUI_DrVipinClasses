import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { LocalizationProvider } from '@mui/lab'
import { Box, TextField } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers'

const DatePickerEx = () => {

  const [value, setValue] = useState()

  return (
    <Box>
      <Typography variant="h4" color="initial"> MUI Date Picker Example </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker 
          label='Select Date'
          value={value}
          onChange={(newValue) => setValue(newValue)}
          renderInput={(props)=> <TextField {...props} />}
        />
      </LocalizationProvider>
    </Box>
  )
}

export default DatePickerEx