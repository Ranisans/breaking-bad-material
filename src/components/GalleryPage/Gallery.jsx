import React from 'react';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import useStyles from './galleryStyles';

export default function Gallery() {
  const galleryState = useSelector((state) => state.gallery);

  const classes = useStyles();

  return (
    <ImageList sx={{ display: 'flex' }} className={classes.imageBox}>
      {galleryState.galleryData.map((character) => (
        <ImageListItem key={character.name} className={classes.characterBox}>
          <Link to={`/character/${character.id}`}>
            <img
              src={character.img}
              alt={character.name}
              className={classes.image}
            />
          </Link>
          <ImageListItemBar title={character.name} className={classes.title} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
