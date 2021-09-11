import React from 'react';
import { Box, CssBaseline } from '@material-ui/core';
import './Home.scss';
import NavBar from '../../components/NavBar/NavBar';
import Featured from '../../components/Featured/Featured';
import List from '../../components/List/List';

import useStyles from './useStyles';

const Home = ({type}: {type?: string}): JSX.Element => {
    const classes = useStyles();
    return (
        <Box className={classes.home}>
            <CssBaseline />
            <NavBar />
            <Featured type={type} />
            <List />
            <List />
            <List />
        </Box>
    )
}

export default Home;
