import React from 'react';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import useStyles from './galleryStyles';
import CharacterImage from '../CharacterImage';

export default function Gallery() {
  const galleryState = useSelector((state) => state.gallery);

  const classes = useStyles();

  return (
    <ImageList sx={{ display: 'flex' }} className={classes.imageBox}>
      {galleryState.galleryData.map((character) => {
        const { img, name, isDead } = character;

        return (
          <ImageListItem key={character.name} className={classes.characterBox}>
            <Link to={`/character/${character.id}`}>
              <CharacterImage
                name={name}
                img={img}
                isDead={isDead}
                classes={{
                  imgBox: classes.imgBox,
                  image: classes.image,
                  ribbon: classes.ribbon,
                }}
              />
            </Link>
            <ImageListItemBar
              title={character.name}
              className={classes.title}
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}
