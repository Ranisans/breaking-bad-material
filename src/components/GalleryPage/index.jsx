import React from 'react';
import { useSelector } from 'react-redux';

import ErrorPage from '../ErrorPage';
import Gallery from './Gallery';
import Spinner from '../Spinner';
import * as status from '../../constants/thunkStatus';

export default function GalleryPage() {
  const galleryState = useSelector((state) => state.gallery);
  switch (galleryState.status) {
    case status.SUCCEEDED:
      return <Gallery />;
    case status.FAILED:
      return <ErrorPage />;
    default:
      return <Spinner />;
  }
}
