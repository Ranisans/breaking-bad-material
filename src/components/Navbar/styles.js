import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: '100%',
    height: 74,
  },
  header: {
    width: 145,
  },
  drawerButtonGroup: {
    padding: 5,
  },
  drawerButton: {
    '&.MuiButtonBase-root': {
      '@media (min-width: 600px)': {
        display: 'none',
      },
    },
  },
  buttonMenu: {
    '&.MuiButtonGroup-root': {
      '@media (max-width: 600px)': {
        display: 'none',
      },
    },
  },
  toolBar: {
    justifyContent: 'space-between',
  },
  image: {
    height: 42,
  },
  sliderBlock: {
    alignItems: 'center',
  },
});

export default useStyles;
