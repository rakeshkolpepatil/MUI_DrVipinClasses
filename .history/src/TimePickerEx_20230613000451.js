import { Box, Stack, Typography } from '@mui/material'
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
          <Box
            display='flex'
            flexDirection='row'
            ml={4}
            sx={{mt:'2rem'}}
          >
            {/* <Stack
              direction='row'
            > */}
              <Typography 
                component={Box}
                height='4rem'
                display='flex'
                alignItems='center'
                sx={{ alignItems:'center', alignContent: 'center', justifyContent: 'center'  }}
                variant="h7" 
                color="initial"
              > 
                Time Picker 
              </Typography>
              <DatePicker 
                label='Select Date'
                sx={{ ml: '2rem'}}
                value={value}
                onChange={(newValue) => setValue(newValue)}
                slotProps={{ textField: { variant: 'outlined' } }}
              />
            {/* </Stack> */}
          </Box>
        </LocalizationProvider>
      <br/>
    </Box>
  )
}

export default TimePickerEx