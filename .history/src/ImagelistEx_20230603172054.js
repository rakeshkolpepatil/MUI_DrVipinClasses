import { Box, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material'
import React from 'react'

const ImagelistEx = () => {

  const images = [
    {
      src:"https://images.unsplash.com/photo-1685703204758-c37561dff8d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      title:"Model"
    },
    {
      src:"https://images.unsplash.com/photo-1661956600654-edac218fea67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title:"Friends"
    },
    {
      src:"https://images.unsplash.com/photo-1684020171241-3092315f2840?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title:"Space"
    },
    {
      src:"https://plus.unsplash.com/premium_photo-1677373563344-dd6a991e4870?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title:"Fields"
    },
    {
      src:"https://images.unsplash.com/photo-1685524581008-41012ab2f89c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title:"Old Home"
    },
    {
      src:"https://images.unsplash.com/photo-1685367230338-1ff5a9c34971?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title:"A Girl in an Arch"
    },
    {
      src:"https://images.unsplash.com/photo-1685438436929-108c5050855d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title:"Mountain"
    },
    {
      src:"https://plus.unsplash.com/premium_photo-1680293161453-b910085169d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title:"Breakfast"
    },
    {
      src:"https://plus.unsplash.com/premium_photo-1683657860508-e0dd4d2fbd2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title:"Burger"
    },
    {
      src:"https://images.unsplash.com/photo-1684868264391-a6dfb89882dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Bride"
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1685082608490-6653d07fbca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title:'Ball Pattern'
    },
    {
      src:"https://images.unsplash.com/photo-1685555845405-1503f76a5462?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title:"Night Sky"
    },
    {
      src:"https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title:"Table Chair"
    },
    {
      src:"https://images.unsplash.com/photo-1685519318525-4e0689672391?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      title:"Cannine"
    },
    {
      src:"https://images.unsplash.com/photo-1685444213745-fab7153181f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      title:"Waterfall"
    }
  ]

  return (
    <Box>
      <Typography variant='h5'> Material UI ImageList Example </Typography>
      <ImageList
        sx={{
          width: 500, 
          height:800,
          mx:'auto',
          padding:'3rem'
        }}
        cols={3}
        rowHeight={250}
      >
        {
          images.map((img)=>(<ImageListItem key={img.title}>
              <img
                src={img.src}
                alt={img.title}
              />
              <ImageListItemBar title={img.title}/>
            </ImageListItem>))
        }
        <ImageListItem></ImageListItem>
      </ImageList>
    </Box>
  )
}

export default ImagelistEx