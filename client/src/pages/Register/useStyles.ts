import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    register: {
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%), url("https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg");',
        backgroundSize: 'cover',
        position: 'relative',
    },
    wrapper: {
        padding: '20px 50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        height: '40px',
    },
    loginBtn: {
        backgroundColor: 'red',
        color: '#fff',
        fontWeight: 500,
    },
    container: {
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '100%',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
     h1: {
        fontSize: '50px',
    },
    h2: {
        margin: '20px',
    },
    inputField: {
        width: '50%',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
        height: '50px',
        borderRadius: '5px',
        '& .MuiTextField-root': {
            flex: 9,            
            border: 'none',
            padding: '0 10px',
            '& .MuiInput-underline::after': {
                border: '0px',
            },
            '& .MuiInput-underline::before': {
                border: '0px',
            },
        },
    },
    registerBtn: {
        flex: 3,
        borderRadius: '0px',
        height: '100%',
        backgroundColor: 'red',
        border: 'none',
        color: '#fff',
        cursor: 'pointer',
    },
}))

export default useStyles;