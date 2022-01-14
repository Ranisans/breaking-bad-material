import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  card: {
    paddingTop: 25,
  },
  imgContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  imgBox: {
    height: 400,
    width: 'fit-content',
    position: 'relative',
    overflow: 'hidden',
  },
  img: {
    height: 400,
  },
  ribbon: {
    position: 'absolute',
    backgroundColor: 'black',
    height: '2rem',
    lineHeight: '2rem',
    width: 170,
    color: 'white',
    bottom: 30,
    right: -40,
    textAlign: 'center',
    transform: 'rotate(-45deg)',
  },
  infoBlock: {
    justifyContent: 'center',
    padding: ' 1rem 4rem',
    fontSize: '1.2rem',
    '@media (max-width: 640px)': {
      padding: '1rem 5px 0 5px',
    },
  },
  table: {
    display: 'grid',
    gridTemplateColumns: '150px 300px',
    justifyContent: 'center',
    '@media (max-width: 640px)': {
      gridTemplateColumns: '150px 1fr',
    },
  },
  name: {
    fontSize: '2rem',
    fontWeight: '800',
    textAlign: 'center',
  },
});

export default useStyles;
