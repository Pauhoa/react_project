import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Formik } from 'formik';
import * as Yup from 'yup';

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
              <div className="form-group">
                <label>Name</label>
                { errors.name && touched.name ?(
                  <div className="text-danger">{ errors.name }</div>
                ) : null }
                <input name="name" value={ values.name } onChange={ handleChange } onBlur={ handleBlur } type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Email</label>
                { errors.email && touched.email ?(
                  <div className="text-danger">{ errors.email }</div>
                ) : null }
                <input name="email" value={ values.email } onChange={ handleChange } onBlur={ handleBlur } type="email" className="form-control" />
              </div>
              <div className="form-group">
                <label>Password</label>
                { errors.password && touched.password ?(
                  <div className="text-danger">{ errors.password }</div>
                ) : null }
                <input name="password" value={ values.password } onChange={ handleChange } onBlur={ handleBlur } type="password" className="form-control" />
              </div>
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
