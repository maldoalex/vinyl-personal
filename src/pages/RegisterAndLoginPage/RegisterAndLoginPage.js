import React from "react";
import LogOut from "../../components/LogOut/LogOut";
import LogIn from "../../components/Login/LogIn";
import Register from "../../components/Register/Register";
import UpdateUser from "../../components/UpdateUser/UpdateUser";
import "./RegisterAndLoginPage.scss";

//Page where users can log in to account or register, each respective component is rendered
const RegisterAndLoginPage = () => (
  <div className="reg-login">
    <LogIn />
    <Register />
    <LogOut />
    <UpdateUser />
  </div>
);

export default RegisterAndLoginPage;
