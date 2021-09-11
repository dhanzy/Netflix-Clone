import React from 'react';
import { Box, Button, CssBaseline, Container, Typography, TextField, Link } from '@material-ui/core';
import useStyles from './useStyles';

const Login = (): JSX.Element => {
    const classes = useStyles();

    return (
        <Box className={classes.login}>
            <CssBaseline />
            <Box>
                <Box className={classes.wrapper}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" className={classes.logo} /> 
                </Box>
            </Box>
            <Container className={classes.container}>   
                <form className={classes.form}>
                  <Typography component="h1" variant="h3">Sign In</Typography>    
                  <TextField type="email" placeholder="Email or Phone number" />
                  <TextField type="password" placeholder="Password" />
                  <Button>Sign In</Button>
                    <Box>
                        New to Netflix? <Link href="register"><b>Sign up now. </b></Link>
                    </Box>
                    <Box component="small">
                        This page is protected by Google reCAPTCHA to ensure your'e not a bot. <b>Learn More</b>
                    </Box>
                </form>
            </Container>
        </Box>
    )
}

export default Login;
