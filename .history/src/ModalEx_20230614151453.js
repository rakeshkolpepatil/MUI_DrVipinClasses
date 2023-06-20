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
      >

      </Modal>
    </Box>

  )
}

export default ModalEx