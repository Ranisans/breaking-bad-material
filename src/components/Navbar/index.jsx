import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Drawer,
  IconButton,
  Stack,
  Switch,
  Toolbar,
  Typography,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { CATEGORY } from '../../constants/api';
import useStyles from './styles';
import { setCategory } from '../../store/categorySlice';

import bbLogo from '../../assets/breaking-bad-logo.svg';
import bcsLogo from '../../assets/better-call-saul-logo.png';

export default function Navbar() {
  const [isDrawerShown, setIsDrawerShown] = useState(false);
  const drawerHandler = () => {
    setIsDrawerShown(!isDrawerShown);
  };

  const dispatch = useDispatch();

  const sliderHandler = (e) => {
    dispatch(setCategory(e.target.checked));
  };

  const categoryState = useSelector((state) => state.category);

  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <Drawer open={isDrawerShown} onClose={drawerHandler}>
        <ButtonGroup
          size="large"
          orientation="vertical"
          color="primary"
          onClick={drawerHandler}
          className={classes.drawerButtonGroup}
        >
          <Button component={Link} to="/" variant="contained">
            home
          </Button>
          <Button component={Link} to="/gallery" variant="contained">
            gallery
          </Button>
          <Button component={Link} to="/table" variant="contained">
            table
          </Button>
        </ButtonGroup>
      </Drawer>
      <Box className={classes.box}>
        <AppBar position="fixed">
          <Toolbar className={classes.toolBar}>
            <IconButton
              edge="start"
              color="inherit"
              arial-label="open drawer"
              className={classes.drawerButton}
              onClick={drawerHandler}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap className={classes.header}>
              {categoryState.category}
            </Typography>
            <ButtonGroup
              variant="contained"
              color="primary"
              className={classes.buttonMenu}
            >
              <Button component={Link} to="/">
                Home
              </Button>
              <Button component={Link} to="/gallery">
                gallery
              </Button>
              <Button component={Link} to="/table">
                table
              </Button>
            </ButtonGroup>
            <Stack direction="row" spacing={1} className={classes.sliderBlock}>
              <img src={bbLogo} alt="B/B" className={classes.image} />
              <Switch
                size="medium"
                color="secondary"
                checked={categoryState.category === CATEGORY[1]}
                onChange={sliderHandler}
              />
              <img src={bcsLogo} alt="BCS" className={classes.image} />
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </nav>
  );
}
