import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
// import {  } from '@mui/lab'
import { Box, TextField } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker, LocalizationProvider, StaticDatePicker, MobileDatePicker, DesktopDatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
// import { MobileDatePicker,  } from '@mui/lab'

const DatePickerEx = () => {

  const [value, setValue] = useState(null)

  return (
    <Box>
      <Typography variant="h4" color="initial"> MUI Date Picker Example </Typography>
      <LocalizationProvider 
        dateAdapter={AdapterDayjs}
        >
        <Typography variant="subtitle" color="initial"> Date Picker </Typography>
        <DatePicker 
          label='Select Date'
          sx={{ mt: '2rem'}}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          slotProps={{ textField: { variant: 'outlined' } }}
          // renderInput={(props)=> <TextField {...props} />}
        />
        <br/>
        <br/>
        <Typography variant="subtitle" color="initial" sx={{ml:'0px'}}> Static Date Picker </Typography>
        <StaticDatePicker
          displayStaticWrapperAs = 'desktop'
          label='Select Date'
          sx={{ mt: '2rem'}}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          slotProps={{ textField: { variant: 'outlined' } }}
          // renderInput={(props)=> <TextField {...props} />}
          />
        <br/>
        <br/>
        <Typography variant="subtitle" color="initial"> Desktop Date Picker </Typography>
        <DesktopDatePicker
          displayStaticWrapperAs = 'desktop'
          label='Select Date'
          openTo='day'
          views={["day","month", "year"]}
          minDate={dayjs('2022-02-12')}
          sx={{ mt: '2rem'}}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          slotProps={{ textField: { variant: 'outlined' } }}
          // renderInput={(props)=> <TextField {...props} />}
          />
        <br/>
        <br/>
        <Typography variant="subtitle" color="initial"> Mobile Date Picker </Typography>
        <MobileDatePicker 
          label='Select Date'
          sx={{ mt: '2rem'}}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          slotProps={{ textField: { variant: 'outlined' } }}
          // renderInput={(props)=> <TextField {...props} />}
          />
      </LocalizationProvider>
    </Box>
  )
}

export default DatePickerEx