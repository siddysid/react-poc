import React, {useContext} from "react";
import { makeStyles , createMuiTheme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { ProductContext } from '../../ProductContext/ProductContext';

const theme = createMuiTheme();
const useStyles = makeStyles(() => ({
    root:{
      padding: '2px 4px',
      display: 'flex',
      marginBottom: '50px',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      paddingRight: '0px'
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
    button:{
      background : '#000000',
      height: '54px',
      width: '100px'
    },

  }));


const SearchComponent = ({handleChange, data}) => {
  const classes = useStyles();
  const value = useContext(ProductContext);

  return (

      <FormControl className={classes.root}>
        <OutlinedInput
          className={classes.input}
          value={data}
          onChange={handleChange}
          startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
          endAdornment={(
            <InputAdornment position="end">
              <Button variant="contained" color='primary' className={classes.button}>
                Search
              </Button>
            </InputAdornment>
          )}
        />
      </FormControl>

    );
};



export default SearchComponent;
