import React, { useState } from 'react';
import { Paper, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';

import DataTable from '../DataTable';
import useStyles from './style';
import { loadCharacterByName } from '../../store/characterFilterSlice';

export default function SearchPage() {
  const characterFilterState = useSelector((state) => state.characterFilter);

  const [searchString, setSearchString] = useState('');
  const dispatch = useDispatch();
  const inputHandler = ({ target }) => {
    setSearchString(target.value);
    dispatch(loadCharacterByName(target.value));
  };

  const classes = useStyles();
  return (
    <Paper>
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
      <DataTable characterList={characterFilterState.characterList} />
    </Paper>
  );
}
