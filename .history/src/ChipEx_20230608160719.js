import { Avatar, Box, Button, Chip, List, ListItem, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Face3Icon from '@mui/icons-material/Face3';
import Rakesh_Image from './image/Rakesh_Image.jpeg'

const ChipEx = () => {

  const [item, setItem] = useState()
  const [itemList, setItemList] = useState(['Item 1'])
  const handleChange = (event) =>{
    setItem( event.target.value )
  }
  const addItem = ()=>{
    setItemList([...itemList, item])
  }

  return (
    <Box 
      m={4}
      // maxWidth={100}  
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

      <Box 
        width={300} 
        mx='auto'  
        mt={'3rem'}
      >
        <Stack>
          <TextField
            id='chipValue'
            label='Enter Chip Item'
            value={item}
            size= {'small'}
            onChange={(event)=>handleChange(event)}
            width={300}
          />
        </Stack>
        <Button 
          // margin='2rem'
          sx={{
            margin: '1rem' 
          }}
          onClick={addItem}
          variant='contained'  
          color='secondary'
        >
          Add chip Item
        </Button>
        <Box>
          {
              itemList.map( (item) => (
                <>
                  <chip
                    variant='filled'
                  >
                    {item}
                  </chip>
                  <br/>
                </>
            ))
          }
        </Box>
      </Box>

    </Box>
  )
}

export default ChipEx