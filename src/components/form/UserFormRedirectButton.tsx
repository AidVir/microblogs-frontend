import {Button} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";

function UserFormRedirectButton(props: { isLoginPage: boolean }) {
  const navigate = useNavigate();
  const loginNavigate = () => navigate("/login");
  const registerNavigate = () => navigate("/register");

  return <>
    {(props.isLoginPage) ?
        <div className="form-group">
          <Button onClick={registerNavigate}>
            Dont have an account yet? Register here.
          </Button>
        </div>
        :
        <div className="form-group">
          <Button onClick={loginNavigate}>
            Already have an account? Log in.
          </Button>
        </div>
    }
  </>;
}

export default UserFormRedirectButton;