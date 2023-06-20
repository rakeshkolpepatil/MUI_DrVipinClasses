import { Box, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

const TableEx = () => {

  const tableData = 
  [  
    {  
      name:'arun',
      gender:'Male',
      physics:88,
      maths:87,
      english:78
    },
    {  
      name:'rajesh',
      gender:'Male',
      physics:96,
      maths:100,
      english:95
    },
    {  
      name:'moorthy',
      gender:'Male',
      physics:89,
      maths:90,
      english:70
    },
    {  
      name:'raja',
      gender:'Male',
      physics:30,
      maths:25,
      english:40
    }, 
    {  
      name:'usha',
      gender:'Female',
      physics:67,
      maths:45,
      english:78
    },
    {  
      name:'priya',
      gender:'Female',
      physics:56,
      maths:46,
      english:78
    },
    {  
      name:'Sundar',
      gender:'Male',
      physics:12,
      maths:67,
      english:67
    },
    {  
      name:'Kavitha',
      gender:'Female',
      physics:78,
      maths:71,
      english:67
    }
  ]

  return (
    <Box>
      <Typography variant='h4'> MUI Table Example </Typography>
      <br/>
      <Box 
        mx={'auto'}
        width={'100vw'}
      >
        <TableContainer>
          <TableHead>
            <TableRow>
              <TableCell> Name </TableCell>
              <TableCell> Gender </TableCell>
              <TableCell> Physics </TableCell>
              <TableCell> Maths </TableCell>
              <TableCell> English </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {
                tableData.map( (row)=>(
                  <TableRow>
                    <TableCell> {row.name} </TableCell>
                    <TableCell> {row.gender} </TableCell>
                    <TableCell> {row.physics} </TableCell>
                    <TableCell> {row.maths} </TableCell>
                    <TableCell> {row.english} </TableCell>
                  </TableRow>
                ))
              }
          </TableBody>
        </TableContainer>
      </Box>
    </Box>
  )
}

export default TableEx