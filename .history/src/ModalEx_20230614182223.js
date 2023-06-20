import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button, Modal } from '@mui/material'

const style = {
  position:'absolute',
  width:400,
  left:"50%",
  top:"50%",
  backgroundColor:"#ffff",
  border:"4px solid #ff0000",
  borderRadious:'10px',
  transform: "translate(-50%, -50%)",
  p:'2rem'
};

const nestedModalEx = () =>{
            const [open, setOpen] = useState(false)
    return <Box> 
      <Button
        // component='Box'
        sx={{ marginTop:'2rem' }}
        color='secondary' variant='contained' size='large' 
        onClick={()=>{setOpen(true)}}  
      >
        Show Modal
      </Button>

      <Modal
        open={open}
        onClose = {()=> setOpen(false)}
      >
        <Box
          sx={{...style}}
        >
          <Typography variant='h5' align='center' > Modal Heading </Typography>
          <Typography variant='subtitle1' align='justify' mt='1.5rem'> 
            Aliquip ea commodo do excepteur. Non ut sit laborum aliquip mollit laborum pariatur dolor. Ipsum mollit laborum enim nulla ut enim magna amet ea adipisicing reprehenderit nostrud mollit. 
          </Typography>

          <Box
            display ='flex'
            flexDirection = 'row'
            justifyContent='center'
            mt='2rem'  
            gap='1rem'
          >
            <Button variant='contained' color='secondary' onClick={()=>setOpen(false)} >
              Close
            </Button>
            <Button variant='contained' color='secondary' onClick={()=>setOpen(false)} >
              Show Nested Modal
            </Button>

          </Box>
        </Box>
      </Modal>
    </Box>
};


const ModalEx = () => {
  const [open, setOpen] = useState(false)
  return (
    <Box> 
      <Typography variant="h3" color="initial"> MUI Modal Example </Typography>
      <Button
        // component='Box'
        sx={{ marginTop:'2rem' }}
        color='secondary' variant='contained' size='large' 
        onClick={()=>{setOpen(true)}}  
      >
        Show Modal
      </Button>

      <Modal
        open={open}
        onClose = {()=> setOpen(false)}
      >
        <Box
          sx={{...style}}
        >
          <Typography variant='h5' align='center' > Modal Heading </Typography>
          <Typography variant='subtitle1' align='justify' mt='1.5rem'> 
            Aliquip ea commodo do excepteur. Non ut sit laborum aliquip mollit laborum pariatur dolor. Ipsum mollit laborum enim nulla ut enim magna amet ea adipisicing reprehenderit nostrud mollit. 
          </Typography>

          <Box
            display ='flex'
            flexDirection = 'row'
            justifyContent='center'
            mt='2rem'  
            gap='1rem'
          >
            <Button variant='contained' color='secondary' onClick={()=>setOpen(false)} >
              Close
            </Button>
            <Button variant='contained' color='secondary' onClick={()=>setOpen(false)} >
              Show Nested Modal
            </Button>

          </Box>
        </Box>
      </Modal>
    </Box>

  )
};

export default ModalEx