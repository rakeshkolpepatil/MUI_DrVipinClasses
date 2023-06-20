import { Avatar, Box, Chip, Stack, Typography } from '@mui/material'
import React from 'react'
import Face3Icon from '@mui/icons-material/Face3';
import Rakesh_Image from './image/Rakesh_Image.jpeg'

const ChipEx = () => {
  return (
    <Box 
      m={4}
      maxWidth={100}  
    >  

      <Typography variant='h4'> MUI Chip example </Typography>

      <Stack
        spacing={2}
        direction={'row'}
        margin={'2rem'}
        style={{
          width:'300px'
        }}
      >
        <Chip label={'Computer Science'} />
        <Chip variant='outlined' label={'Computer Science'} />
        <Chip variant='outlined' color='secondary' label={'Computer Science'} />
        <Chip variant='filled' color='secondary' label={'Computer Science'} />
      </Stack>

      <Stack
        margin={'1rem'}
        direction={'row'}
        spacing={2}
      >
        <Chip variant='filled' color='secondary' icon={<Face3Icon />} label={'Computer Science'} />
        <Chip variant='filled' color='secondary' avatar={<Avatar children="RR"/>} label={'Computer Science'} />
        <Chip variant='filled' color='secondary' avatar={<Avatar children="RR"/>} label={'Computer Science'} />
        <Chip variant='filled' color='secondary' avatar={<Avatar src={Rakesh_Image}/>} label={'Computer Science'} />
      </Stack>

      <Stack>

      </Stack>

    </Box>
  )
}

export default ChipEx