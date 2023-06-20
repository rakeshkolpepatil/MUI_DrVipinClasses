import { IconButton, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'
import CircleNotificationsTwoToneIcon from '@mui/icons-material/CircleNotificationsTwoTone';

const theme = createTheme()


const IconButtonEx = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <IconButton  sx={{color: 'theme.palette.grey[50]'}} >
          Notification
          <CircleNotificationsTwoToneIcon/>
        </IconButton>
      </ThemeProvider>
    </div>
  )
}

export default IconButtonEx