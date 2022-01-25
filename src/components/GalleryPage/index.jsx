import React, { useEffect, useState } from 'react';
import { Paper, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';

import ErrorPage from '../ErrorPage';
import Gallery from './Gallery';
import Spinner from '../Spinner';
import { loadCharactersGallery } from '../../store/charactersGallerySlice';
import * as status from '../../constants/thunkStatus';
import useStyles from './style';

export default function GalleryPage() {
  const [searchString, setSearchString] = useState('');
  const dispatch = useDispatch();
  const inputHandler = ({ target }) => {
    setSearchString(target.value);
    dispatch(loadCharactersGallery(target.value));
  };
  const galleryState = useSelector((state) => state.gallery);

  useEffect(() => {
    dispatch(loadCharactersGallery());
  }, []);

  function getComputedComponent() {
    switch (galleryState.status) {
      case status.SUCCEEDED:
        return <Gallery />;
      case status.FAILED:
        return <ErrorPage />;
      default:
        return <Spinner />;
    }
  }

  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <div className={classes.searchRow}>
        <div aria-label="search" className={classes.searchWrapper}>
          <div className={classes.searchIconWrapper}>
            <SearchIcon />
          </div>
          <InputBase
            value={searchString}
            onChange={inputHandler}
            className={classes.inputBase}
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </div>
      <div className={classes.contentBox}>{getComputedComponent()}</div>
    </Paper>
  );
}
