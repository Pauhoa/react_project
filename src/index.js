import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Field, ErrorMessage, FieldArray, withFormik } from "formik";
import * as Yup from "yup";

const CustomInput = ({ field, form, ...props }) => {
  return (
    <div className="form-group">
      <label>{props.displayname ? props.displayname : field.name}</label>
      <input {...field} type="text" {...props} className="form-control" />
    </div>
  );
};

const CustomError = (props) => {
  return <div className="alert alert-danger">{props.children}</div>;
};



class App extends Component {
  render() {
    const { values, isSubmitting, handleSubmit } = {...this.props}
    return (
      <div className="container-fluid p-5 bg-light d-flex flex-column justify-content-center align-items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white border p-5 d-flex flex-column"
        >
          <Field name="name" component={CustomInput} />
          <ErrorMessage name="name" component={CustomError} />

          <Field name="email" type="email" component={CustomInput} />
          <ErrorMessage name="email" component={CustomError} />

          <Field name="password" type="password" component={CustomInput} />
          <ErrorMessage name="password" component={CustomError} />
          <FieldArray name="items">
            {(arrayHelpers) => (
              <div>
                {values.items && values.items.length
                  ? values.items.map((item, index) => (
                      <div key={index}>
                        <div>Item : {index}</div>
                        <hr className="w-100" />
                        <Field
                          name={`items.${index}.name`}
                          displayname="name"
                          component={CustomInput}
                        />
                        <ErrorMessage
                          name={`items.${index}.name`}
                          component={CustomError}
                        />
                        <Field
                          name={`items.${index}.quantity`}
                          displayname="quantity"
                          component={CustomInput}
                        />
                        <ErrorMessage
                          name={`items.${index}.quantity`}
                          component={CustomError}
                        />
                        <button
                          type="button"
                          className="w-100 btn btn-small btn-danger"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          delete
                        </button>
                      </div>
                    ))
                  : null}
                <button
                  type="button"
                  className="mt-3 w-100 btn btn-small btn-success"
                  onClick={() =>
                    arrayHelpers.push({
                      name: "",
                      quantity: 0,
                    })
                  }
                >
                  Add item
                </button>
              </div>
            )}
          </FieldArray>
          <button
            type="submit"
            className="mt-3 btn btn-primary"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const MyForm = withFormik({
  mapPropsToValues: () => ({ name: "", email: "", password: "", items: [] }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3, "Nom trop court")
      .max(7, "Nom trop long")
      .required("Nom obligatoire"),
    email: Yup.string().email("Email non valide").required("Email obligatoire"),
    password: Yup.string().min(5, "Mot de passe trop court"),
    items: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required("Nom obligatoire"),
        quantity: Yup.number()
          .typeError("Doit être un nombre")
          .min(5, "Nombre trop petit"),
      })
    ),
  }),
  handleSubmit: (values, actions) => {
    // console.log(actions);
    // console.log(values);
    actions.setSubmitting(false);
  },
})(App);

ReactDOM.render(<MyForm />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//? reportWebVitals();
