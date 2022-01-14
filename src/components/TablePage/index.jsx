import React, { useEffect, useState } from 'react';
import { Paper, TablePagination } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { CATEGORY, LIMIT } from '../../constants/api';
import { setPage, loadCharacterList } from '../../store/characterListSlice';
import Spinner from '../Spinner';
import ErrorPage from '../ErrorPage';
import * as status from '../../constants/thunkStatus';
import DataTable from '../DataTable';

export default function TablePage() {
  const characterListState = useSelector((state) => state.characterList);
  const categoryState = useSelector((state) => state.category);

  const dispatch = useDispatch();
  const pageChangeHandler = (_, page) => {
    dispatch(setPage(page));
  };

  const [category, setCategory] = useState(
    categoryState.category || CATEGORY[0]
  );

  useEffect(() => {
    let { page } = characterListState;
    if (category !== categoryState.category) {
      page = 0;
      setCategory(categoryState.category);
      dispatch(setPage(0));
    }
    dispatch(
      loadCharacterList({
        category: categoryState.category,
        page,
      })
    );
  }, [dispatch, characterListState.page, categoryState.category]);

  switch (characterListState.status) {
    case status.SUCCEEDED:
      return (
        <Paper>
          <DataTable characterList={characterListState.characterList || []} />
          <TablePagination
            component="div"
            rowsPerPageOptions={[LIMIT]}
            rowsPerPage={LIMIT}
            page={characterListState.page}
            count={characterListState.numberOfCharacters}
            onPageChange={pageChangeHandler}
          />
        </Paper>
      );
    case status.FAILED:
      return <ErrorPage />;
    default:
      return <Spinner />;
  }
}
