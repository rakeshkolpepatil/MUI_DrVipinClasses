import { TreeItem, TreeView } from '@mui/lab'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

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
        <Box
          width='20%'
        >
          <TreeView
            defaultCollapseIcon={<ExpandLessIcon/>}
            defaultExpandIcon={<ExpandCircleDownIcon/>}
            >
            {
              treeHeading.map((itr, index)=>{
                return <TreeItem nodeId={index} label={itr}> </TreeItem>
              })
            }
          </TreeView>
        </Box>
      </Stack>
    </Box>
  )
}

export default MuiTreeEx