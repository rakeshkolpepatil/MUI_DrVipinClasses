import { Box, Pagination, Typography } from '@mui/material'
import React from 'react'

const PaginationEx = () => {
  return (
    <Box>
      <Typography variant='h3'> MUI Pagination Example </Typography>
      <Box
        display='flex'
        justifyContent='center'
        mt={5}
      >
        <Pagination
          count={10}
          size='large'
          // shape='rounded'
          color='secondary'

          variant='outlined'
          sx={{
            "Button.MuiPaginationItem-circular.Mui-selected": {
              bgColor: "#97327e" 
            }
          }}
        > </Pagination>
      </Box>
    </Box>

  )
}

export default PaginationEx