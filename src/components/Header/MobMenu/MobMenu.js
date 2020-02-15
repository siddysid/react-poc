import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  menuContainer: {
    marginTop: theme.spacing(5),
  },
  iconSpacing: {
    paddingRight: theme.spacing(2),
    color: theme.palette.text.primary,
  },
}));
const MobMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container xs={1}>
      <IconButton aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        PaperProps={{
          style: {
            minWidth: 152,
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className={classes.menuContainer}
      >
        <MenuItem onClick={handleClose}>
          <ul>
            <li>
              <Typography variant="body2" color="textPrimary">
                    ProductList
              </Typography>
            </li>
            <li>
              <Typography variant="body2" color="textPrimary">
                About
              </Typography>
            </li>
            <li>
              <Typography variant="body2" color="textPrimary">
                About
              </Typography>
            </li>
            <li>
              <Typography variant="body2" color="textPrimary">
                Art
              </Typography>
            </li>
          </ul>
        </MenuItem>
      </Menu>

    </Grid>
  );
};

export default MobMenu;
