import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { LocalizationProvider } from '@mui/lab'
import { Box } from '@mui/material'
import { adapterDayjs } from '@mui/x-date-pickers'
import { DatePicker } from '@mui/x-date-pickers'


const DatePickerEx = () => {

  const [value, setValue] = useState()

  return (
    <Box>
      <Typography variant="h4" color="initial"> MUI Date Picker Example </Typography>
      <LocalizationProvider dateAdapter={adapterDayjs}>
        <DatePicker 
          label='Select Date'
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </LocalizationProvider>
    </Box>
  )
}

export default DatePickerEx