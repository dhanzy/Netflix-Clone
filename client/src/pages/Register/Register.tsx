import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, CssBaseline, Container, Typography, TextField } from '@material-ui/core';
import useStyles from './useStyles';

const Register = (): JSX.Element => {
    const classes = useStyles();
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const emailRef = React.useRef<HTMLInputElement>(null)
    const passwordRef = React.useRef<HTMLInputElement>(null)

    const handleStart = ()=>{
        console.log("Clicked")
        if (emailRef.current){
            console.log('Found Email Ref')
            console.log(emailRef.current)
            setEmail(emailRef.current.value);
        }
        console.log(email);
    }
    const handleFinish = ()=> {
        if (passwordRef.current){
            setPassword(passwordRef.current.value)
        }
    }
    return (
        <Box className={classes.register}>
            <CssBaseline />
            <Box>
                <Box className={classes.wrapper}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" className={classes.logo} />
                    <Button component={Link} to="/login" className={classes.loginBtn}>Sign In</Button>
                </Box>
            </Box>
            <Container className={classes.container}>   
                <Typography className={classes.h1} component="h1" variant="h3"> Unlimited movies, Tv Shows, and more.</Typography>
                <Typography className={classes.h2} component="h2" variant="h4"> Watch anywhere. Cancel anytime.</Typography>
                <Typography component="p"> Ready to watch? Enter your email address to create or restart a membership.</Typography>
                {!email ? (
                    <Box className={classes.inputField}>
                        <TextField name="email" type="email" placeholder="email address" ref={emailRef} />
                        <Button className={classes.registerBtn} onClick={handleStart}>Get Started</Button>
                    </Box>
                ): (
                    <form>
                        <Box className={classes.inputField}>
                            <TextField name="password" type="password" placeholder="password" ref={passwordRef} />
                            <Button className={classes.registerBtn} onClick={handleFinish}>Start</Button>
                        </Box>
                    </form>
                )} 
            </Container>
        </Box>
    )
}

export default Register;
