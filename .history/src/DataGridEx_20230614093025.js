import { Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

const DataGridEx = () => {

  const fields = [
    {field:'sid', headerName:'Stud Id', width: 100},
    {field:'fname', headerName:'First Name', width: 150},
    {field:'lname', headerName:'Last Name', width: 150}
  ]

  const rows = [
    { id:1, sid:1, fname:'Rakesh', lname:'Patil'},
    { id:2, sid:2, fname:'Vishwesh', lname:'Rane'},
    { id:3, sid:3, fname:'Rajesh', lname:'Mane'},
    { id:4, sid:4, fname:'Devesh', lname:'Shahane'}
  ]
  return (
    <Box>
      <Typography variant='h3'> MUI Data Grid Example  </Typography>
        <Box
          mx={20}
          mt={5}
        >
          <DataGrid rows={rows} columns={fields}/>
        </Box>
    </Box>
  )
}

export default DataGridEx