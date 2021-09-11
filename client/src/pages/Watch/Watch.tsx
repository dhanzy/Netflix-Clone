import React from 'react';
import { Box } from '@material-ui/core';
import { ArrowBackOutlined } from '@material-ui/icons';


export default function Watch(): JSX.Element {
    return (
        <Box>
            <Box>
                <ArrowBackOutlined />
                Home
            </Box>
            <video
            src="https://www.youtube.com/embed/-FmWuCgJmxo"
            autoPlay/>
        </Box>
    )
}