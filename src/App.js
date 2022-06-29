import React from "react";
import {useFormik} from 'formik';
// TODO: import useFormik from formik library

function App() {
  let errors = {}
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password:'',
    },

    onSubmit: values => {
      console.log('form:', values); 
      if(!errors.email || !errors.password){
        alert('login succesful')
      }
      // else{
      //   alert('keep trying')

      // }

      
      
      
    },

    validate: values => {
      
      if (!values.email) {
        errors.email = 'Field required';
      }else if (!values.email.includes('@') || !values.email.includes('.com')){
        errors.email = 'Username should be an email'
      }
      if (!values.password) {
        errors.password = 'Field required'
      }else if (values.password.length <= 6){
        errors.password = 'Password has to be atleast six characters long'

      }
      return errors

    }

  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input name="email" type="text" onChange = {formik.handleChange} value = {formik.values.email}/>
        {formik.errors.email ? <div style = {{color:'red'}}> {formik.errors.email} </div>:null}
        
        <div> Password </div>
        <input name="password" type="text" onChange = {formik.handleChange} value = {formik.values.password} />
        {formik.errors.password ? <div style = {{color:'red'}}> {formik.errors.password} </div>:null}

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default App;
