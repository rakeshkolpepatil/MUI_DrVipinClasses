import { IconButton } from '@mui/material'
import React from 'react'
import CircleNotificationsTwoToneIcon from '@mui/icons-material/CircleNotificationsTwoTone';

const IconButtonEx = () => {
  return (
    <div>
      <IconButton color='theme.palette.grey[700]'>
        <CircleNotificationsTwoToneIcon/>
      </IconButton>
    </div>
  )
}

export default IconButtonEx