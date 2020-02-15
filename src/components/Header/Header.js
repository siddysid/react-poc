import React from "react";
import { Grid } from '@material-ui/core';
import { makeStyles , createMuiTheme } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from "@material-ui/core/Typography";
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { themes } from "@storybook/theming";
import {useMediaQuery} from 'react-responsive';
import MobMenu from "./MobMenu/MobMenu";
import MenuNav from "./MenuNav/MenuNav";
import Logo from "./Logo/Logo";



const theme = createMuiTheme();
const useStyles = makeStyles(() => ({
    root: {
      paddingTop:theme.spacing(3),
      marginBottom:theme.spacing(5)
    },
  }));

 const Header = () => {
   const classes = useStyles();
   const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });
  return (

    <Grid container className={classes.root}>
      <Grid item xs={11} sm={11} md={7}>
        <Logo
          width='100px'
          height='50px'
        />
      </Grid>
      {isDesktopOrLaptop ? (
        <>
          <MenuNav />
          <Grid item sm={1}>
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Grid>
        </>
      ) : (
        <MobMenu />
      )}


    </Grid>



  );


};

export default Header;
