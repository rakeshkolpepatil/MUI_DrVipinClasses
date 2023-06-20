import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button, Dialog } from '@mui/material'

const DialogEx = () => {

  const [openState, setOpenState] = useState()

  const handleClick = ()=> {
    setOpenState(openState)
  }
  const handleClose = () =>{
    setOpenState(false)
  }

  return (
    <Box m={3}>
      <Typography variant="h4" color="secondary.main">
        MUI Dialog Box Example
      </Typography>
      <Box>
        <Button variant="contained" color="secondary" onClick={handleClick}>
          Open Dialog
        </Button>
        <Dialog
          open={openState}
          onClose={handleClose}
        >
        </Dialog>
      </Box>
    </Box>
  )
}

export default DialogEx