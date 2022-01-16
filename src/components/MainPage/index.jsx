import { Paper } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

import useStyles from './styles';
import { BB_POSTER_URL, BCS_POSTER_URL } from '../../constants/posters';
import { CATEGORY } from '../../constants/api';

export default function MainPage() {
  const categoryState = useSelector((state) => state.category);
  const imgUrl =
    categoryState.category === CATEGORY[0] ? BB_POSTER_URL : BCS_POSTER_URL;

  const classes = useStyles();
  return (
    <Paper className={classes.imgWrapper}>
      <img src={imgUrl} alt={categoryState.category} className={classes.img} />
    </Paper>
  );
}
