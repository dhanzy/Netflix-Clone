import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    login: {
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%), url("https://mppmduse2pmpovwapp.azurewebsites.net/wp-content/uploads/2019/09/netflix-background-9.jpg");',
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
    form: {
        width: '400px',
        height: '400px',
        padding: '30px',
        borderRadius: '5px',
        backgroundColor: 'var(--main-color)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        '& .MuiTextField-root': {          
            padding: '0',
            height: '40px',
            '& .MuiInputBase-root': {
                background: 'gray',
                height: '100%',
                borderRadius: '5px',
            },
            '& .MuiInput-underline::after': {
                border: '0px',
            },
            '& .MuiInput-underline::before': {
                border: '0px',
            },
            '& input': {
                color: '#fff',
                paddingLeft: '10px',
            },
        },
        '& button': {
          height: '40px',
          backgroundColor: 'red',
          color: '#fff',
          fontWeight: 500,
          fontSize: '18px',
        }
    },
    loginBtn: {
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