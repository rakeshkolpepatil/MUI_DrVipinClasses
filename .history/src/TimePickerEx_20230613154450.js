import { Box, Stack, Typography } from '@mui/material'
import { DatePicker, DesktopTimePicker, LocalizationProvider, MobileTimePicker, StaticTimePicker, TimePicker } from '@mui/x-date-pickers'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import React, { useState } from 'react'

const TimePickerEx = () => {

  const [timeValue, setTimeValue] = useState()
  const [defaultTimeValue, setDefaultTimeValue] = useState(dayjs("2023-06-13T10:10"))

  return (
    <Box>
      <Typography variant="h4" color="initial"> MUI Time Picker Example </Typography>
        <LocalizationProvider 
          dateAdapter={AdapterDayjs}
        >

          <Box display='flex' flexDirection='row' ml={4} sx={{mt:'3rem'}} >
            <Typography 
              component={Box}
              height='3rem'
              display='flex'
              alignItems='center'
              variant="h6" 
              color="secondary"
              sx ={{ fontWeight: 'bold' }}
            > 
              Time Picker 
            </Typography>
            <TimePicker 
              label='Time Picker'
              sx={{ ml: '2rem'}}
              value={timeValue}
              onChange={(newValue) => setTimeValue(newValue)}
              slotProps={{ textField: { variant: 'outlined' } }}
            />
          </Box>

          <Box display='flex' flexDirection='row' ml={4} sx={{mt:'3rem'}} >
            <Typography 
              component={Box}
              height='3rem'
              display='flex'
              alignItems='center'
              variant="h6" 
              color="secondary"
              sx ={{ fontWeight: 'bold' }}
            > 
              Default Value Time Picker 
            </Typography>
            <TimePicker 
              label='Default Value'
              defaultValue={dayjs("2023-06-13T10:10")}
              sx={{ ml: '2rem'}}
              value={defaultTimeValue}
              onChange={(newValue) => setDefaultTimeValue(newValue)}
              slotProps={{ textField: { variant: 'outlined' } }}
            />
          </Box>

          <Box display='flex' flexDirection='row' ml={4} sx={{mt:'3rem'}} >
            <Typography 
              component={Box}
              height='3rem'
              display='flex'
              alignItems='center'
              variant="h6" 
              color="secondary"
              sx ={{ fontWeight: 'bold' }}
            > 
              Mobile Time Picker 
            </Typography>
            <MobileTimePicker  
              label='Mobile Time Picker'
              sx={{ ml: '2rem'}}
              value={timeValue}
              onChange={(newValue) => setTimeValue(newValue)}
              slotProps={{ textField: { variant: 'outlined' } }}
            />
          </Box>

          <Box display='flex' flexDirection='row' ml={4} sx={{mt:'3rem'}} >
            <Typography 
              component={Box}
              height='3rem'
              display='flex'
              alignItems='center'
              variant="h6" 
              color="secondary"
              sx ={{ fontWeight: 'bold' }}
            > 
              Desktop Time Picker 
            </Typography>
            <DesktopTimePicker  
              minTime={dayjs("2022-02-22T08:10")}
              maxTime={dayjs("2022-02-22T10:10")}
              label='Desktop Time Picker'
              sx={{ ml: '2rem'}}
              value={timeValue}
              onChange={(newValue) => setTimeValue(newValue)}
              slotProps={{ textField: { variant: 'outlined' } }}
            />
          </Box>

          <DemoContainer
            components={['StaticTimePicker']}
          >
            <DemoItem label='Static Variant'>
              <StaticTimePicker/>  
            </DemoItem>
          </DemoContainer>

        </LocalizationProvider>
        <br/>
    </Box>
  )
}

export default TimePickerEx