//  /src/components/Form.js
import React, {useState} from "react"
import { Container, Grid } from '@material-ui/core'
import { compose } from 'recompose'
import PropTypes from 'prop-types'
import { withStyles } from "@material-ui/core/styles"
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'

const styles = theme => ({
  formItem: {
    padding: "10px"
  }
});


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const { classes } = this.props;
  const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
 


  return  (
    

       <Grid container md = {12} alignItems= "center" justify = "center">
           <Grid container item direction='column' alignItems= "center" justify = "center">
            <Grid  item >
           
        <Form>
         
          <Field type="email" name="email" placeholder="Email"/>
           
          <Field type="password" name="password" placeholder="Password"/>
          <button>Submit</button>
        </Form>

          </Grid>
       </Grid>
     </Grid>
    
    );
  }
LoginForm.propTypes = {
  errors: PropTypes.objectOf(PropTypes.any).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.objectOf(PropTypes.any),
}

LoginForm.defaultProps = {
  values: {},
}
const MyEnhancedForm = withFormik({
       mapPropsToValues({ email, password}) {
          return {
            email: email || '',
            password: password || '',
          }
      },
       validationSchema: Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required()
      }),
      
   })(LoginForm)

export default MyEnhancedForm