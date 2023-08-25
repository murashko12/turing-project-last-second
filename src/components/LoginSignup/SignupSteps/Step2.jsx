import { Box, TextField } from '@mui/material'
import React from 'react'

const Step2 = () => {
  return (
    <Box>
        <TextField sx={{ width: "100%", marginTop: "10px"}} id="outlined-basic" label="Институт" variant="outlined" />
        <TextField sx={{ width: "100%", marginTop: "10px"}} id="outlined-basic" label="Направление" variant="outlined" />
        <TextField sx={{ width: "100%", marginTop: "10px"}} id="outlined-basic" label="Группа" variant="outlined" />
        <TextField sx={{ width: "100%", marginTop: "10px"}} id="outlined-basic" label="Студентческий билет" variant="outlined" />
    </Box>
  )
}

export default Step2
