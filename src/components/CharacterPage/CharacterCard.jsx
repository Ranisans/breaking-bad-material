import { Card } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

import useStyles from './characterCardStyles';

export default function CharacterCard() {
  const characterState = useSelector((state) => state.character);

  const classes = useStyles();

  const { img, name, isDead, nickname, occupation, portrayed, appearance } =
    characterState.characterData;

  return (
    <Card className={classes.card}>
      <div className={classes.imgContainer}>
        <div className={classes.imgBox}>
          <img src={img} alt={name} className={classes.img} />
          {isDead && <div className={classes.ribbon}>DEAD</div>}
        </div>
      </div>
      <div className={classes.infoBlock}>
        <div className={classes.name}>{name}</div>
        <div className={classes.table}>
          <span>Nickname:</span> {nickname}
          <span>Occupation:</span> <span>{occupation.join(', ')}</span>
          <span>Played by:</span> {portrayed}
          <span>Appearance in seasons:</span> {appearance.join(', ')}
        </div>
      </div>
    </Card>
  );
}
