import React, {Component} from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";
import Truncate from 'react-truncate';
import {
    Link
  } from "react-router-dom";


const Product = ({product, classes}) => {
  return (

    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={product.image}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          <Link to={"/product-description?nid=" + product.nid}>{product.title}</Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Truncate lines={2}>
            {product.body}
          </Truncate>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Product;
