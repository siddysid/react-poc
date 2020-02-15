import React, {useContext, useState}  from "react";
import { Container, Grid } from '@material-ui/core';
import { MovieContext } from '../MovieContext/MovieContext';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
	modal: {
	  display: 'flex',
	  alignItems: 'center',
	  justifyContent: 'center',
	  width:'50%',
	  margin: '0 auto',
	},
	close: {
		cursor: 'pointer',
	},
	paper: {
	  backgroundColor: theme.palette.background.paper,
	  border: '2px solid #000',
	  boxShadow: theme.shadows[5],
	  padding: theme.spacing(2, 4, 3),
	},
  }));


const DisplayItems = ({product,movieid, movieDetail}) => {

	const classes = useStyles();
	const [showDetails, setShowDetails] = useState(false);
	const handleClose = () => setShowDetails(false);
	const handleShow = () => setShowDetails(true);
	const image = "https://image.tmdb.org/t/p/w500";
	const sendId = (id) => {

		setShowDetails(!showDetails);
		movieid(id);
		console.log(movieDetail[2]);
	}

	return (
	<>
	 <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={showDetails}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >

        <Fade in={showDetails}>
          <div className={classes.paper}>
		  <div onClick = {handleClose} className ={classes.close}>X</div>
            <h2 id="transition-modal-title">{movieDetail[2].original_name}</h2>
            <p id="transition-modal-description">{movieDetail[2].overview}</p>
          </div>
        </Fade>
      </Modal>
	<Grid container item xs={4} direction="column">
		  <Grid item>
		  <img height='300px' width='300px' src={image + product.poster_path} alt="tvshow"  onClick={()=> {sendId(product.id)}}/>
		  </Grid>
		  <Grid item>
		  <div key={product.id}>
		  	{product.original_name}
		  </div>
		  </Grid>
	  </Grid>
	 </>

	)
}


export default DisplayItems;
