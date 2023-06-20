import { TreeItem, TreeView } from '@mui/lab'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const MuiTreeEx = () => {

  const treeHeading = [
    'Slider',
    'Portal',
    'Stepper',
    'Modal'
  ]

  return (
    <Box>
      <Typography variant="h3" color="secondary"> MUI Tree Example </Typography>
      <Stack spacing={3} direction='row'>
        <TreeView>
          {
            treeHeading.map((itr, index)=>{
              return 
              <TreeItem nodeId={index} label={itr}> </TreeItem>
            })
          }
        </TreeView>
      </Stack>
    </Box>
  )
}

export default MuiTreeEx