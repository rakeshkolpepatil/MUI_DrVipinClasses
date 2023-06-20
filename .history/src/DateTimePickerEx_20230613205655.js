import { Box, Typography } from '@mui/material'
import { LocalizationProvider, StaticTimePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import dayjs from 'dayjs'
import React from 'react'

const DateTimePickerEx = () => {
  return (
    <Box>
      <Typography variant="h4" color="initial"> MUI Time Picker Example </Typography>
      {/* <LocalizationProvider 
        dateAdapter={AdapterDayjs}
      >
      </LocalizationProvider> */}

      <DemoContainer
        components={['StaticTimePicker']}
      >
        <DemoItem label='Static Variant'>
          <StaticTimePicker 
            openTo='seconds'
            orientation='portrait'
            views={['hours', 'minutes', 'seconds']} 
            defaultValue={dayjs('2022-02-23T10:12')}
          />  
        </DemoItem>
      </DemoContainer>
    </Box>
  )
}

export default DateTimePickerEx