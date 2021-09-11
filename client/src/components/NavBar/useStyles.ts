import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    navBar: {
       background: 'linear-gradient(to top, transparent 0%, rgba(0,0,0,0.3) 50%)',
    },
    navBarScrolled: {
        backgroundColor: 'var(--main-color)',
    },
    netflixLogo: {
        height: '20px',
        marginRight: '40px',
    },
    navLink: {
        display: "flex",
        alignItems: 'center',
        "& span": {
            marginRight: "20px",
            cursor: 'pointer',            
        },
    },
    dropDown: {
        color: "#fff",
    },
    icon: {
        margin: "0px 15px",
    },
}))

export default useStyles;