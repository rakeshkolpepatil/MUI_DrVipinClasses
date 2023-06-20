import { Box, Typography } from '@mui/material'
import { DateTimePicker, LocalizationProvider, StaticTimePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import dayjs from 'dayjs'
import React, { useState } from 'react'

const DateTimePickerEx = () => {

  const [value, setValue] = useState(dayjs('2023-12-2T10:12'))

  return (
    <Box>
      <Typography variant="h4" color="initial"> MUI Time Picker Example </Typography>
      <LocalizationProvider 
        dateAdapter={AdapterDayjs}
      >
        <Box
          mt={'2rem'}
          sx={{ display:'flex', flexDirection:'row', width:'50rem'  }}
        >
          <DemoContainer
            components={['DateTimePicker']}
          >
          
            <DemoItem label='Static Variant'>
              <DateTimePicker 
                label='Uncontrolled DateTimePicker'
                value={value}
                openTo='seconds'
                onChange={(newVal)=> setValue(newVal)}
                orientation='portrait'
                views={['year', 'month', 'day', 'hours', 'minutes', 'seconds']} 
                defaultValue={dayjs('2022-02-23T10:12')}
                />  
            </DemoItem>
          </DemoContainer>
        </Box>
      </LocalizationProvider>
    </Box>
  )
}

export default DateTimePickerEx