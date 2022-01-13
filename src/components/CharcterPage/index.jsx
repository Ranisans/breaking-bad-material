import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { loadCharacterData } from '../../store/characterSlice';
import * as status from '../../constants/thunkStatus';
import ErrorPage from '../ErrorPage';
import Spinner from '../Spinner';
import CharacterCard from './CharacterCard';

export default function CharacterPage() {
  const { characterId } = useParams();

  const dispatch = useDispatch();
  const characterState = useSelector((state) => state.character);

  useEffect(() => {
    dispatch(loadCharacterData(characterId));
  }, [dispatch]);

  switch (characterState.status) {
    case status.SUCCEEDED:
      return <CharacterCard />;
    case status.FAILED:
      return <ErrorPage />;
    default:
      return <Spinner />;
  }
}
