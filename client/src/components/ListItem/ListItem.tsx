import React from 'react';
import { Box } from '@material-ui/core';
import { PlayArrow, Add, ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import Polska from '../../Pictures/polska.jpg';

import useStyles from './useStyles';

const ListItem = ({index}: {index: number}) => {
    const [isHovered, setisHovered] = React.useState<boolean>();
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box 
                className={classes.listItem} 
                onMouseEnter={()=> setisHovered(true)} 
                onMouseLeave={()=> setisHovered(false)}
            >
                <img src={Polska} alt="" />
                <Box>
                    <Box>
                        <PlayArrow />
                        <Add />
                        <ThumbUpAltOutlined />
                        <ThumbDownOutlined />
                    </Box>
                    <Box>
                        <Box component="span">1 hour 14 mins</Box>
                        <Box component="span">+16</Box>
                        <Box component="span">1999</Box>
                    </Box>
                    <Box>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea nihil odit commodi numquam?
                    </Box>
                    <Box className="genre">Action</Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ListItem
