import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
// import {  } from '@mui/lab'
import { Box, TextField } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker, LocalizationProvider, StaticDatePicker, MobileDatePicker, DesktopDatePicker } from '@mui/x-date-pickers'
// import { MobileDatePicker,  } from '@mui/lab'

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
        <br/>
        <StaticDatePicker
          displayStaticWrapperAs = 'desktop'
          label='Select Date'
          sx={{ mt: '2rem'}}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          renderInput={(props)=> <TextField {...props} />}
        />
        <br/>
        <DesktopDatePicker
          displayStaticWrapperAs = 'desktop'
          label='Select Date'
          sx={{ mt: '2rem'}}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          renderInput={(props)=> <TextField {...props} />}
        />
        <br/>
        <MobileDatePicker 
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