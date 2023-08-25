import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Step1 from './SignupSteps/Step1';
import Step2 from './SignupSteps/Step2';

const SignupForm = () => {

  // =========== Step1
  const [name, setName] = React.useState()
  const [lastName, setLastName] = React.useState()
  const [email, setEmail] = React.useState()
  const [password, setPassword] = React.useState()
  const [passwordRep, setPasswordRep] = React.useState()
  const handleSubmit = (e) => {
    e.preventDefaul()
    axios.post('http://localhost:3001/turing-final', {name,lastName,email,password,passwordRep})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }
  // =========== Step2
  // const []



  const steps = [
    {
        label: 'Шаг 1',
        inputFields: <Step1
          name={name}
          lastName={lastName}
          email={email}
          password={password}
          passwordRep={passwordRep}
          setName={setName}
          setLastName={setLastName}
          setEmail={setEmail}
          setPassword={setPassword}
          setPasswordRep={setPasswordRep}
          handleSubmit={handleSubmit}
        />
    },
    {
        label: 'Шаг 2',
        inputFields: <Step2 />
    },
    {
        label: 'Шаг 3',
        inputFields: `Обработка данных может занять некоторое время`,
    },
];









    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
        setActiveStep(0);
    };

    



    return (
        <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step  key={step.label}>
            <StepLabel>
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.inputFields}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'ОК' : 'Дальше'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Назад
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>Ожидайте письмо на вашу электронную почту</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }} variant="contained" color="success">
            OK
          </Button>
        </Paper>
      )}
    </Box>
    )
}

export default SignupForm
