import React, { useRef, useState } from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';

import useStyles from './useStyles';
import ListItem from '../ListItem/ListItem';

const List = (): JSX.Element => {
    const classes = useStyles();
    const [slideNumber, setSlideNumber ] = useState(0);
    const listRef = useRef<HTMLDivElement>(null);

    const handleClick = (direction: string) => {
        if (listRef.current) {
            let distance = listRef.current.getBoundingClientRect().x - 50;
            if (direction === 'left' && slideNumber > 0) {
                setSlideNumber(slideNumber - 1);
                listRef.current.style.transform = `translateX(${160 + distance}px)`
            }
            if (direction === 'right' && slideNumber < 5) {
                setSlideNumber(slideNumber + 1)
                listRef.current.style.transform = `translateX(${-300 + distance}px)`
            }
        }
    }

    return (
        <Box mt={5}>
            <Container>
                <Box component="span" className={classes.listTitle}>Continue to Watch</Box>
            </Container>
            <Box className={classes.wrapper}>
                <ArrowBackIosOutlined className="sliderArrow left" onClick={() => handleClick("left")}/>
                <Container className='container' ref={listRef}>
                    <Grid container className={classes.gridContainer}>
                        <ListItem index={0}/>
                        <ListItem index={1} />
                        <ListItem index={2} />
                        <ListItem index={3} />
                        <ListItem index={4} />
                        <ListItem index={5} />
                        <ListItem index={6} />
                        <ListItem index={7} />
                        <ListItem index={8} />
                        <ListItem index={9} />
                    </Grid>
                </Container>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")}/>
            </Box>
        </Box>
    )
}

export default List;
