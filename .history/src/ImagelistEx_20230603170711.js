import { Box, ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react'

const ImagelistEx = () => {

  const images = [
    {
      img:"https://images.unsplash.com/photo-1685703204758-c37561dff8d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      title:"Model"
    },
    {
      img:"https://images.unsplash.com/photo-1661956600654-edac218fea67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title:"Friends"
    },
    {
      img:"https://images.unsplash.com/photo-1684020171241-3092315f2840?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title:"Space"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1677373563344-dd6a991e4870?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title:"Fields"
    },
    {
      img:"https://images.unsplash.com/photo-1685524581008-41012ab2f89c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title:"Old Home"
    },
    {
      img:"https://images.unsplash.com/photo-1685367230338-1ff5a9c34971?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title:"Girl in Arch"
    },
    {
      img:"https://images.unsplash.com/photo-1685438436929-108c5050855d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title:"Mountain"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1680293161453-b910085169d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title:"Breakfast"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1683657860508-e0dd4d2fbd2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title:"Burger"
    },
  ]

  return (
    <Box>
      <Typography variant='h5'> Material UI ImageList Example </Typography>
      <ImageList>
        {
          images.map((img)=>(<ImageListItem key={img.title}>
              
            </ImageListItem>))
        }
        <ImageListItem></ImageListItem>
      </ImageList>
    </Box>
  )
}

export default ImagelistEx