import React, { useEffect, useState } from 'react';
import {
  Paper,
  TableContainer,
  TablePagination,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { CATEGORY, LIMIT } from '../../constants/api';
import { setPage, loadCharacterList } from '../../store/characterListSlice';
import Spinner from '../Spinner';
import ErrorPage from '../ErrorPage';
import * as status from '../../constants/thunkStatus';
import useStyles from './styles';

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

  const classes = useStyles();

  switch (characterListState.status) {
    case status.SUCCEEDED:
      return (
        <Paper>
          <TableContainer>
            <Table area-label="table view">
              <TableHead>
                <TableRow variant="head">
                  <TableCell className={classes.header} align="center">
                    Name
                  </TableCell>
                  <TableCell className={classes.header} align="center">
                    Nickname
                  </TableCell>
                  <TableCell className={classes.header} align="center">
                    Birthday
                  </TableCell>
                  <TableCell className={classes.header} align="center">
                    Played by
                  </TableCell>
                  <TableCell className={classes.header} align="center">
                    Appearance in seasons
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {characterListState.characterList.map((character) => {
                  const {
                    name,
                    nickname,
                    birthday,
                    portrayed: playedBy,
                    appearance,
                  } = character;
                  return (
                    <TableRow key={name}>
                      <TableCell align="center">{name}</TableCell>
                      <TableCell align="center">{nickname}</TableCell>
                      <TableCell align="center">{birthday}</TableCell>
                      <TableCell align="center">{playedBy}</TableCell>
                      <TableCell align="center">
                        {appearance.join(' ', ',')}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
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
