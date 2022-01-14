/* eslint-disable react/prop-types */
import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';

import useStyles from './styles';

export default function DataTable({ characterList }) {
  const classes = useStyles();

  return (
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
          {characterList.map((character) => {
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
  );
}
