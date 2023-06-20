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
        <DemoContainer
          components={['DateTimePicker']}
        >
          <DemoItem label='Static Variant'>
            <DateTimePicker 
              value={'2023-12-2T10:12'}
              openTo='seconds'
              orientation='portrait'
              views={['hours', 'minutes', 'seconds']} 
              defaultValue={dayjs('2022-02-23T10:12')}
            />  
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  )
}

export default DateTimePickerEx