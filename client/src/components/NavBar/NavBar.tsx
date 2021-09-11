import React, { useState } from 'react';
import { Box, Container, Grid, Avatar, Button, Menu, AppBar, Toolbar, Link } from '@material-ui/core';
import { Search, Notifications } from '@material-ui/icons';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import useStyles from './useStyles';

const NavBar = (): JSX.Element => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isScrolled, setIsScrolled] = useState<Boolean>(false);
    

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar className={isScrolled ? classes.navBarScrolled : classes.navBar} elevation={0}>
            <Toolbar>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item className={classes.navLink}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" className={classes.netflixLogo} />
                            <Link href="/">
                                <Box component="span">Homepage</Box>
                            </Link>
                            <Link href="/series">
                                <Box component="span">Series</Box>  
                            </Link>
                            <Link href="/movies">
                                <Box component="span">Movies</Box>
                            </Link>
                            <Box component="span">New and Popular</Box>
                        </Grid>
                        <Grid item className={classes.navLink}>
                            <Search className={classes.icon} />
                            <Box component="span">KID</Box>
                            <Notifications className={classes.icon}/>
                            <Box component="span">
                                <Button onClick={handleClick}>
                                    <Avatar className={classes.icon} />
                                    <ArrowDropDownIcon className={classes.dropDown} />
                                </Button>
                                <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                                    <Button size="large" variant="contained" fullWidth>Settings</Button> 
                                    <Button fullWidth>Logout</Button> 
                                </Menu>
                            </Box>
                        </Grid>
                    </Grid> 
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
