import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  imgWrapper: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  img: {
    maxHeight: '100%',
    height: 'auto',
  },
});

export default useStyles;
