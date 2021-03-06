import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  box: {
    height: 74,
    '@media (max-width: 620px)': {
      height: 56,
    },
  },
  header: {
    width: 145,
  },
  drawerButtonGroup: {
    padding: 5,
  },
  drawerButton: {
    '&.MuiButtonBase-root': {
      '@media (min-width: 620px)': {
        display: 'none',
      },
    },
  },
  buttonMenu: {
    '&.MuiButtonGroup-root': {
      '@media (max-width: 620px)': {
        display: 'none',
      },
    },
  },
  toolBar: {
    justifyContent: 'space-between',
    '&.MuiToolbar-root': {
      '@media (max-width: 620px)': {
        height: 56,
        minHeight: 56,
      },
    },
  },
  image: {
    height: 42,
  },
  sliderBlock: {
    alignItems: 'center',
  },
});

export default useStyles;
