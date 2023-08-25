import { Box, Typography } from '@mui/material'
import React from 'react'

import mpeiLogo from '../Images/mpeiLogo.png'

const MainPage = () => {
    return (
        <Box sx={{width: "100%", height: "auto"}}>
            <Typography variant="h1" gutterBottom fontWeight={400} color={"#adadad"}>
                IT - клуб при НИУ МЭИ
            </Typography>
            <Typography variant="h1" gutterBottom fontWeight={400} color={"#adadad"}>
                TURING
            </Typography>
            <img height={"250px"} src={mpeiLogo} alt="" />
        </Box>  
    )
}

export default MainPage
