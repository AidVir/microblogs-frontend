import React, {useRef} from "react";
import {Button, Card, CardContent, TextField, Typography} from "@mui/material";
import {Field, Form, Formik} from "formik";

import "./UserForm.scss";
import UserFormRedirectButton from "./UserFormRedirectButton";

function UserForm(props: {
  onSubmit: () => void,
  username: string,
  setUsername: React.Dispatch<React.SetStateAction<string>>,
  password: string,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  disabled: boolean,
  message: string,
  isLoginPage: boolean,
}) {

  const required = (value: string) => {
    if (!value) {
      return (
          <div className="alert alert-danger" role="alert">
            This field is required!
          </div>
      );
    }
  };

  const labelText = props.isLoginPage ? "Login" : "Register";

  return <div className ="user-form">
    <Card className="card-container">
      <CardContent>
          <Typography variant="h6" className="card-label">
            {labelText}
          </Typography>
        <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
        />

        <Formik initialValues={{username: "", password: ""}} onSubmit={props.onSubmit}>
          <Form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Field
                  as={TextField}
                  type="text"
                  className="form-control"
                  name="username"
                  value={props.username}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    console.log(e.target.value)
                    props.setUsername(e.target.value)
                  }}
                  validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                  as={TextField}
                  type="password"
                  className="form-control"
                  name="password"
                  value={props.password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.setPassword(e.target.value)}
                  validations={[required]}
              />
            </div>

            <div className="form-group">
              <Button type="submit" variant="contained" className="button"
                      disabled={props.disabled}>
                {props.disabled}
                <span>{labelText}</span>
              </Button>
            </div>

            {props.message && (
                <div className="form-group">
                  <div>
                    {props.message}
                  </div>
                </div>
            )}

            <UserFormRedirectButton isLoginPage={props.isLoginPage}/>
            <Field style={{display: "none"}}/>
          </Form>
        </Formik>
      </CardContent>
    </Card>
  </div>;
}

export default UserForm;