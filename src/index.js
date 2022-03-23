import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Formik, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';


const CustomInput = ({ field, form, ...props }) => {
  return (
    <div className="form-group">
      <label>{field.name}</label>
      <input {...field} type="text" {...props} className="form-control" />
    </div>
  )
}

const CustomError = (props) => {
  return (
    <div className="text-danger">{props.children}</div>
  )
}

class App extends Component {

  userSchema = Yup.object().shape({
    name: Yup.string().min(3, 'trop court').max(7, 'trop long').required('required'),
    email: Yup.string().email('email non valide').required('required'),
    password: Yup.string().min(5, 'trop court')
  })

  submit = (values, actions) => {
    // console.log(actions);
    // console.log(values);
    actions.setSubmitting(false);
  }
  


  render() {
    return (
      <div className="container-fluid p-5 bg-light d-flex flex-column justify-content-center align-items-center">
        <Formik
        onSubmit={ this.submit }
        initialValues={ { name: '', email: '', password: '' } }
        validationSchema={this.userSchema}
        >
          { ({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            isSubmitting,
            errors,
            touched
          }) => (
            <form onSubmit={ handleSubmit } className="bg-white border p-5 d-flex flex-column">
              <Field name="name" component={ CustomInput } />
              <ErrorMessage name="name" component={ CustomError }/>
              
              <Field name="email" type="email" component={ CustomInput } />
              <ErrorMessage name="email" component={ CustomError }/>

              <Field name="password"  type="password"  component={ CustomInput } />
              <ErrorMessage name="password" component={ CustomError }/>

              <button type="submit" className="btn btn-primary" disabled={ isSubmitting } >Submit</button>
            </form>
          )}
        </Formik>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//? reportWebVitals();
