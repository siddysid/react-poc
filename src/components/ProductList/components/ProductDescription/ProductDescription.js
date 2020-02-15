import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({

    content: {
      textAlign: 'center',

    }
  }));


const ProductDescription = () => {
    const classes = useStyles();
    return (
      <div className={classes.content}>

        <h3>Lorem Ipsum</h3>
        <p>
            is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the
                leap into electronic typesetting.
        </p>

      </div>
    );
};

export default ProductDescription;
