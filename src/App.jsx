import React, { useEffect } from 'react';
import { Navigate, Route, BrowserRouter, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import GalleryPage from './components/GalleryPage';
import Navbar from './components/Navbar';
import { loadCharacterCount } from './store/characterListSlice';
import { loadCharactersGallery } from './store/charactersGallerySlice';
import useStyles from './appStyles';
import CharacterPage from './components/CharacterPage';
import TablePage from './components/TablePage';

function App() {
  const dispatch = useDispatch();
  const categoryState = useSelector((state) => state.category);

  useEffect(() => {
    const { category } = categoryState;
    dispatch(loadCharacterCount(category));
    dispatch(loadCharactersGallery(category));
  }, [categoryState.category]);

  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Navbar />
        <div className={classes.secondRow}>
          <Routes>
            <Route exact path="/" element={<div>Main </div>} />
            <Route
              exact
              path="/character/:characterId"
              element={<CharacterPage />}
            />
            <Route exact path="/gallery" element={<GalleryPage />} />
            <Route exact path="/table" element={<TablePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
