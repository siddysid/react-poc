import React, { useEffect , useState} from "react"
import PropTypes from 'prop-types';
import AllMovies from "./AllMovie/AllMovies";
import TvShows from "./TvShows/TvShows";

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import  MovieProvider  from './MovieContext/MovieContext';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const handleClick = (id) => {
    console.log('this is:'+id);
  }

export default function MovieTab() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Movies"  />
          <Tab label="TV Shows"/>
        </Tabs>
      </AppBar>
      <>
        <MovieProvider>
  	      <TabPanel value={value} index={0}>
  	        <AllMovies onChildClick ={() => handleClick()}/>
  	      </TabPanel>
  	      <TabPanel value={value} index={1}>
  	        <TvShows />
  	      </TabPanel>
          </MovieProvider>


      </>

    </div>
  );
}
