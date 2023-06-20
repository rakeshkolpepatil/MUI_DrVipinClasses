import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Alert, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper } from '@mui/material'
import Draggable from 'react-draggable'

const DialogEx = () => {

  const [openState, setOpenState] = useState(false)

  const handleClick = ()=> {
    setOpenState(true)
  }
  const handleClose = () =>{
    setOpenState(false)
  }

  function DraggableDialog (props) {
    return (
      <Draggable handle='#dialogbox'>
        <Paper/>
      </Draggable>
    )
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
          PaperComponent={DraggableDialog}
        >
          <DialogTitle id='dialogbox' >
            MUI Dialog Box
          </DialogTitle>
          <DialogContent>
            {/* Do you want to close ? */}
            <Alert icon={false} variant='filled' > Do you want to close ? </Alert>
          </DialogContent>
          <DialogActions>
            <Button variant='contained' color='primary'> No </Button>
            <Button variant='contained' color='primary' onClick={handleClose}> Yes </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  )
}

export default DialogEx