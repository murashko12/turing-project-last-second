import { 
    Box, 
    ToggleButton,
    ToggleButtonGroup
} from '@mui/material'

import React from 'react'
import LoginForm from './LoginSignup/LoginForm';
import SignupForm from './LoginSignup/SignupForm';


const LoginSignUp = () => {

    const [alignment, setAlignment] = React.useState('login');
    const [mode, setMode] = React.useState(true)
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
  

    return (
    
        <Box 
            width={400} 
            height="auto" 
            bgcolor="white" 
            p={3} 
            borderRadius={5} 
            display="flex" 
            flexDirection="column"
            justifyContent="space-between"
        >
            <ToggleButtonGroup
                color="primary"
                variant="contained"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
            >
                <ToggleButton sx={{height: "45px", width: "50%", p: "10px"}} onClick={e => setMode(true)} value="login" >вход</ToggleButton>
                <ToggleButton sx={{height: "45px", width: "50%", p: "10px"}} onClick={e => setMode(false)} value="signup">регистрация</ToggleButton>
            </ToggleButtonGroup>

            <Box>
                { 
                    mode ? <LoginForm/> : <SignupForm/>
                }
            </Box>
        </Box>
    )
}

export default LoginSignUp
