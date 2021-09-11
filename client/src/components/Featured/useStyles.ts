import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    featured: {
        height: '90vh',
    },
    category: {
        position: 'absolute',
        top: '80px',
        left: '50px',
        fontSize: '30px',
        fontWeight: 'bold',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
    },
    select: {
        backgroundColor: 'var(--main-color)',
        border: '1px solid #fff',
        color: '#fff',
        marginLeft: '20px',
        padding: '5px',
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    info: {
        width: '35%',
        position: 'absolute',
        left: '50px',
        bottom: '100px',
    },
    desc: {
        margin: '20px 0px',
        fontSize: '16px',
    },
    play: {
        backgroundColor: '#fff',
        color: 'var(--main-color)',
        marginRight: '20px',
    },
    more: {
        backgroundColor: 'gray',
        color: '#fff',
    },
}))

export default useStyles;