import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  imageBox: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '10px 120px!important',
    '@media (max-width: 1164px)': {
      padding: '10px 0!important',
    },
  },
  characterBox: {
    width: 300,
    overflow: 'hidden',
    backgroundColor: '#ddcece',
    alignItems: 'center',
    '@media (max-width: 620px)': {
      width: 400,
    },
  },
  image: {
    height: 400,
    width: 300,
    objectFit: 'cover',
    '@media (max-width: 620px)': {
      height: 600,
      width: 400,
    },
  },
  title: {
    textAlign: 'center',
  },
});

export default useStyles;
