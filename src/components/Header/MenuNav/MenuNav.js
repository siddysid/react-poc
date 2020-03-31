import React from "react";
import {Grid} from '@material-ui/core';
import {
    Link
  } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const MenuNav = () => {
    return (
      <Grid container item sm={4} spacing={2}>
        <Grid item>
          <Typography variant="body2" component="p">
            <Link to="/productlist">PRODUCT</Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" component="p">
            <Link to="/movies">Movies</Link>
          </Typography>
        </Grid>
      </Grid>

    );
};

export default MenuNav;
