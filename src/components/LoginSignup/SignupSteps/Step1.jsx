import { Visibility, VisibilityOff } from '@mui/icons-material';
import { 
    Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField
    
} from '@mui/material';
import React from 'react'


const Step1 = ({setName,setLastName,setEmail,setPassword,setPasswordRep,handleSubmit}) => {
    const [showPassword_1, setShowPassword_1] = React.useState(false);
    const [showPassword_2, setShowPassword_2] = React.useState(false);
    const handleClickShowPassword_1 = () => setShowPassword_1((show) => !show);
    const handleClickShowPassword_2 = () => setShowPassword_2((show) => !show);
    const handleMouseDownPassword_1 = (event) => {
        event.preventDefault();
    };
    const handleMouseDownPassword_2 = (event) => {
        event.preventDefault();
    };
    
    return (
    
        <Box>
            <form onSubmit={handleSubmit}>
            <TextField sx={{ width: "100%", marginTop: "10px"}} id="outlined-basic" label="Имя" variant="outlined" onChange={(e) => setName(e.target.value)}/>
            <TextField sx={{ width: "100%", marginTop: "10px"}} id="outlined-basic" label="Фамилия" variant="outlined" onChange={(e) => setLastName(e.target.value)}/>
            <TextField sx={{ width: "100%", marginTop: "10px"}} id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)}/>

            <FormControl sx={{ width: '100%', marginTop: "10px" }} variant="outlined">
                <InputLabel>Пароль</InputLabel>
                <OutlinedInput
                    id="outlined-basic"
                    variant="outlined"
                    type={showPassword_1 ? 'text' : 'password'}
                    onChange={(e) => setPassword(e.target.value)}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword_1}
                                onMouseDown={handleMouseDownPassword_1}
                                edge="end"
                            >
                                {showPassword_1 ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"       
                />    
            </FormControl>
            <FormControl sx={{ width: '100%', marginTop: "10px" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Подтвердить</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword_2 ? 'text' : 'password'}
                    onChange={(e) => setPasswordRep(e.target.value)}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword_2}
                                onMouseDown={handleMouseDownPassword_2}
                                edge="end"
                            >
                                {showPassword_2 ? <VisibilityOff /> : <Visibility />}
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
              <Button onClick={() => handleSubmit}>Отправить</Button>
            </Box>
            </form>
        </Box>
                  
                  
  )
}

export default Step1
