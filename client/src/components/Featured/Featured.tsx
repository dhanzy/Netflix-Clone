import React from 'react';
import { Box, Button, Select } from '@material-ui/core';

import useStyles from './useStyles';
import { InfoOutlined, PlayArrow } from '@material-ui/icons';

interface FeaturedProps {
    type?: string;
}

const Featured = ({type}: FeaturedProps): JSX.Element => {
    const [genre, setGenre] = React.useState('');
    const classes = useStyles();
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setGenre(event.target.value as string);
    };

    return (
        <Box className={classes.featured}>
            {type && (
                <Box className={classes.category}>
                    <Box component="span">{type === "movies" ? "Movies":  "Series"}</Box>
                    <Select native name="genre" id="genre" onChange={handleChange} value={genre} className={classes.select}>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                    </Select>
                </Box>
            )}
            <img className={classes.img} src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            <Box className={classes.info}>
                <img className={classes.img} src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" alt="" />
                <Box className={classes.desc}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Nihil, doloribus fugiat facilis quisquam distinctio alias 
                    maxime. Ut adipisci odio nulla veniam blanditiis, animi 
                    sunt possimus qui repellendus consequatur reiciendis eligendi.
                </Box>
                <Box>
                    <Button className={classes.play}>
                        <PlayArrow />
                        <Box component="span">Play</Box>
                    </Button>
                    <Button className={classes.more}>
                        <InfoOutlined />
                        <Box component="span">Info</Box>
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Featured;
