import { Box, Typography } from '@mui/material'
import React from 'react'

const DataGridEx = () => {

  const fields = [
    {field:'sid', headerName:'Stud Id', width: 150},
    {field:'fname', headerName:'First Name', width: 150},
    {field:'lname', headerName:'Last Name', width: 150}
  ]

  const rows = [
    { sid:1, fname:'Rakesh', lname:'Patil'},
    { sid:1, fname:'Vishwesh', lname:'Rane'},
    { sid:1, fname:'Rajesh', lname:'Mane'},
    { sid:1, fname:'Devesh', lname:'Shahane'}
  ]
  return (
    <Box>
      <Typography> MUI Data Grid Example  </Typography>

    </Box>
  )
}

export default DataGridEx