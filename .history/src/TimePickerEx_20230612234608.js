import { Box } from '@mui/material'
import React from 'react'

const TimePickerEx = () => {
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
        </LocalizationProvider>
        <br/>
        <br/>
    </Box>
  )
}

export default TimePickerEx