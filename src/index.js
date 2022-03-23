import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Formik } from 'formik';

class App extends Component {

  submit = (values, actions) => {
    // console.log(actions);
    // console.log(values);
    actions.setSubmitting(false);
  }
  
  validate(values){
    console.log({values})
    let errors = {};
    if (!values.name){
      errors.name= 'required'
    }
    else if ( values.name.length < 3) {
      errors.name = 'trop court';
    }
    return errors;
  }

  render() {
    return (
      <div className="container-fluid p-5 bg-light d-flex flex-column justify-content-center align-items-center">
        <Formik
        onSubmit={ this.submit }
        initialValues={ { name: '', email: '', password: '' } }
        validate={ this.validate}
        // validateOnChange={false}
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
                <input name="email" value={ values.email } onChange={ handleChange } onBlur={ handleBlur } type="email" className="form-control" />
              </div>
              <div className="form-group">
                <label>Password</label>
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
