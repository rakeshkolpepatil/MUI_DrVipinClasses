import { TreeItem, TreeView } from '@mui/lab'
import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone';

const MuiTreeEx = () => {

  const [activeNode, setActiveNode] = useState()
  const treeHeading = [
    'Slider',
    'Portal',
    'Stepper',
    'Modal'
  ]

  const treeSubHeading = [
    'Slider One',
    'Portal One',
    'Stepper One',
    'Modal One'
  ]

  const handleNodeSelect = (event, selectedNode) => {

  }

  return (
    <Box>
      <Typography variant="h3" color="secondary"> MUI Tree Example </Typography>
      <Box
        mt={3}
        ml={3}
        width='20%'
      >
        <Stack spacing={3} direction='row'>
            <TreeView
              // defaultCollapseIcon={<ExpandLessIcon/>}
              // defaultExpandIcon={<ExpandCircleDownIcon/>}
              onNodeSelect={handleNodeSelect}
              defaultCollapseIcon={<RemoveCircleTwoToneIcon/>}
              defaultExpandIcon={<AddCircleTwoToneIcon/>}
              >
              {
                treeHeading.map((itr, index)=>{
                  return <TreeItem nodeId={index} label={itr}> 
                    <TreeItem nodeId={treeSubHeading[index]} label={treeSubHeading[index]} />
                  </TreeItem>
                })
              }
            </TreeView>
        </Stack>
      </Box>
    </Box>
  )
}

export default MuiTreeEx