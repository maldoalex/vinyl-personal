import React from "react";

import LogIn from "../../components/Login/LogIn";
import Register from "../../components/Register/Register";

import "./RegisterAndLoginPage.scss";

//Page where users can log in to account or register, each respective component is rendered
const RegisterAndLoginPage = () => (
  <div className="reg-login">
    <LogIn />
    <Register />
  </div>
);

export default RegisterAndLoginPage;
