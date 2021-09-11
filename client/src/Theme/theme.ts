import { createTheme } from '@material-ui/core';

export const theme = createTheme({
    typography: {
        fontFamily: ['Roboto', 'sans-serif'].join(','),
        fontSize: 12,
        h1: {
            fontSize: '40px',
            fontWeight: 800,
        },
        h3: {
            fontSize: '20px',
            fontWeight: 700,
        },
        button: {
            fontWeight: 500,
        },
    },
    overrides:{
        MuiLink: {
            root: {
                textDecoration: 'none',
                color: 'inherit',
            },
        },
    },
    props: {
        MuiLink: {
            color: 'inherit',
            underline: 'none',
        },
    },
})