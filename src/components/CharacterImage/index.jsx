/* eslint-disable react/prop-types */
import React from 'react';

export default function CharacterImage({ classes, isDead, name, img }) {
  const { imgBox, image, ribbon } = classes;
  return (
    <div className={imgBox}>
      <img src={img} alt={name} className={image} />
      {isDead && <div className={ribbon}>DEAD</div>}
    </div>
  );
}
