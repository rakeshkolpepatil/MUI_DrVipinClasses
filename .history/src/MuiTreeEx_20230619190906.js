import { TreeItem, TreeView } from '@mui/lab'
import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone';
import MuiSliderEx from './MuiSliderEx';
import MuiPortalEx from './MuiPortalEx';
import MuiStepperEx from './MuiStepperEx';
import ModalEx from './ModalEx';

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
    setActiveNode(selectedNode)
  }

  const ShowTreeComponent = (props) => {
    const { children, activeNode, selectedNode } = props
    return <div hidden= {activeNode !== selectedNode}>
      { activeNode === selectedNode && <Box mx={2}> {children} </Box> }
    </div>

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
      <Box width='80%'>
        <ShowTreeComponent activeNode={activeNode} selectedNode='Slider One'> <MuiSliderEx/> </ShowTreeComponent>
        <ShowTreeComponent activeNode={activeNode} selectedNode='Portal One'> <MuiPortalEx/> </ShowTreeComponent>
        <ShowTreeComponent activeNode={activeNode} selectedNode='Stepper One'> <MuiStepperEx/> </ShowTreeComponent>
        <ShowTreeComponent activeNode={activeNode} selectedNode='Modal One'> <ModalEx/> </ShowTreeComponent>
      </Box>
    </Box>
  )
}

export default MuiTreeEx