import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        position: 'relative',
    },
    listItem: {
        width: '225px',
        height: '120px',
        backgroundColor: 'var(--main-color)',
        marginRight: '5px',
        overflow: 'hidden',
        cursor: 'pointer',
        color: '#fff',
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
        '&:hover': {
            width: '325px',
            height: '300px',
            position: 'absolute',
            top: '-150px',
            left: '-50px',
            zIndex: 555,
            boxShadow: '0px  0px 15px 0px rgba(255,255,255,0.07)',
            '& img': {
                height: '140px',
            },
        },
    },
}))

export default useStyles;