import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button, Modal } from '@mui/material'

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
        <Box>
          <Typography variant='h5' > Modal Heading </Typography>
          <Typography variant='body2'> 
            Aliquip ea commodo do excepteur. Non ut sit laborum aliquip mollit laborum pariatur dolor. Ipsum mollit laborum enim nulla ut enim magna amet ea adipisicing reprehenderit nostrud mollit. 
          </Typography>
          <Button
            variant='contained'
            color='secondary'
            onClick={()=>setOpen(false)}
          >

          </Button>
        </Box>
      </Modal>
    </Box>

  )
}

export default ModalEx