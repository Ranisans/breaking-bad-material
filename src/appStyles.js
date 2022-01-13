import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: 'auto 1fr',
    overflow: 'hidden',
  },
  secondRow: {
    position: 'relative',
    overflowY: 'auto',
  },
});

export default useStyles;
