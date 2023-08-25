import { Visibility, VisibilityOff } from '@mui/icons-material';
import { 
    Box, Button, Checkbox, Divider, FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Stack, TextField, Typography,
    
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import React from 'react'
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const LoginForm = () => {
    const [forgotPassword, setForgotPassword] = React.useState(false)
    const [showPassword, setShowPassword] = React.useState(false);
    const [confirmCode, setConfirmCode ] = React.useState(false)
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#c7c7c7',
        width: "50px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.palette.text.secondary,
    }));


    return (
    
        <Box>
            { !forgotPassword 
            ?
                <Box>
                    <TextField sx={{ width: "100%", marginTop: "10px"}} id="outlined-basic" label="Логин" variant="outlined" />
                    <FormControl sx={{ width: '100%', marginTop: "10px" }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"       
                        />

                    </FormControl>

                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <FormControlLabel control={<Checkbox defaultChecked />} style={{color: '#616161'}} label="Запомнить" />
                        <Link
                            component="button"
                            variant="body2"
                            onClick={(e) => setForgotPassword(true)} 
                        >
                            Забыли пароль?
                        </Link>    
                    </Box>    
                    <Button sx={{height: "45px",width: "100%", p: "10px"}} variant="contained">Войти</Button>
                </Box> 
                : 
                <Box>
                    <Typography sx={{marginTop: "10px", color: '#616161'}}>Для подтверждения Вашей учетной записи и смены пароля введите email.</Typography>
                    <TextField sx={{ width: "100%", marginTop: "10px"}} id="outlined-basic" label="Email" variant="outlined" />
                    
                    {
                        confirmCode 
                        ? 
                        <Stack
                            direction="row"
                            divider={<Divider orientation="vertical" flexItem />}
                            spacing={2}
                            sx={{
                                marginTop: "10px",
                                display: "flex",
                                justifyContent: "space-between"
                            }}
                        >
                            <Item>1</Item>
                            <Item>2</Item>
                            <Item>3</Item>
                            <Item>4</Item>
                            <Item>5</Item>
                            <Item>6</Item>
                        </Stack>
                        : 
                        null 
                    }


                    <Box sx={{display: "flex", gap: "10px", marginTop: "10px"}}>
                        <Button sx={{height: "45px", p: "10px"}} variant="contained" onClick={(e) => setForgotPassword(false)}><ArrowBackIosNewIcon/></Button>
                        <Button sx={{height: "45px", width: "100%", p: "10px"}} variant="contained" onClick={(e) => setConfirmCode(true)}>Отправить</Button>
                    </Box>
                </Box>
            }
        </Box>         
    )
}

export default LoginForm
