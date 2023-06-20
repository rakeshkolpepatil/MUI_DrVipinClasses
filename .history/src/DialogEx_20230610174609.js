import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button, Dialog } from '@mui/material'

const DialogEx = () => {

  const [openState, setOpenState] = useState()

  return (
    <Box m={3}>
      <Typography variant="h4" color="secondary.main">
        MUI Dialog Box Example
      </Typography>
      <Box>
        <Button variant="contained" color="secondary">
          Open Dialog
        </Button>
        <Dialog>
          
        </Dialog>
      </Box>
    </Box>
  )
}

export default DialogEx