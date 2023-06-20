import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'

const DialogEx = () => {

  const [openState, setOpenState] = useState(false)

  const handleClick = ()=> {
    setOpenState(true)
  }
  const handleClose = () =>{
    setOpenState(false)
  }

  return (
    <Box m={3}>
      <Typography variant="h4" color="secondary.main">
        MUI Dialog Box Example
      </Typography>
      <Box 
        m={'2rem'}
      >
        <Button variant="contained" color="secondary" onClick={handleClick}>
          Open Dialog
        </Button>
        <Dialog
          open={openState}
          onClose={handleClose}
        >
          <DialogTitle>
            MUI Dialog Box
          </DialogTitle>
          <DialogContent>
            Do you want to close ?
          </DialogContent>
          <DialogActions>
            <Button variant='contained' color='secondary'> No </Button>
            <Button variant='contained' color='secondary' onClick={handleClose}> Yes </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  )
}

export default DialogEx