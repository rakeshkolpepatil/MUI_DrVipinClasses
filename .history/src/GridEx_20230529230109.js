import { Grid, Typography } from '@mui/material'
import React from 'react'

const GridEx = () => {
  return (
    <Grid container>
      <Grid item>
        <Typography display={'flex'} mx={'auto'}> The Example of Grid Component </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}> One </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}> Two </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}> Three </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}> Four </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}> Five </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}> Six </Grid>
    </Grid>
  )
}

export default GridEx