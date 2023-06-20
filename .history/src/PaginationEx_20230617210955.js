import { Box, Pagination, Typography } from '@mui/material'
import React from 'react'

const PaginationEx = () => {
  return (
    <Box>
      <Typography variant='h3'> MUI Pagination Example </Typography>
      <Box
        display='flex'
        justifyContent='center'
      >
        <Pagination
          count={10}
        > </Pagination>
      </Box>
    </Box>

  )
}

export default PaginationEx