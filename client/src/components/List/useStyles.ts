import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  listTitle: {
    color: '#fff',
    fontSize: '30px',
    fontWeight: 500,
  },
  wrapper: {
    position: 'relative',
    '& .sliderArrow': {
      width: '50px',
      height: '100%',
      backgroundColor: 'rgba(22,22,22,0.5)',
      color: '#fff',
      position: 'absolute',
      top: 0,
      bottom: 0,
      cursor: 'pointer',
      zIndex: 99,
      '&.left': {
        left: 0,
      },
      '&.right': {
        right: 0,
      },
    },
    '& .container': {
      marginTop: '10px',
      transform: 'translateX(0px)',
      transition: 'all 1s ease',
    },
  },
  gridContainer: {
    flexWrap: 'nowrap',
    width: 'max-content',
  },
}))

export default useStyles;