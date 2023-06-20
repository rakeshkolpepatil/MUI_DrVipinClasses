import { Box, Typography } from '@mui/material'
import React from 'react'

const ImagelistEx = () => {

  const images = [
    {
      img:"https://images.unsplash.com/photo-1685703204758-c37561dff8d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      title:"Model"
    },
    {
      img:"",
      title:""
    },
    {
      img:"",
      title:""
    },
    {
      img:"",
      title:""
    },
    {
      img:"",
      title:""
    },
    {
      img:"",
      title:""
    },
    {
      img:"",
      title:""
    },
    {
      img:"",
      title:""
    },
    {
      img:"",
      title:""
    },
  ]

  return (
    <Box>
      <Typography variant='h5'> Material UI ImageList Example </Typography>

    </Box>
  )
}

export default ImagelistEx