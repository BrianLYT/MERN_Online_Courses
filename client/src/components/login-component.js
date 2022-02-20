import React, { useState } from "react";
import { useHistory } from "react-router";
import AuthService from "../services/auth.service";
import logo from "../img/logo.svg";

const LoginComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  const history = useHistory();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [message, setMessage] = useState("");
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    AuthService.login(email, password)
      .then((response) => {
        console.log(response.data);
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        window.alert(
          "Login successfully,you are now redirected to the profile page."
        );
        setCurrentUser(AuthService.getCurrentUser());
        history.push("/profile");
      })
      .catch((error) => {
        console.log(error.response);
        setMessage(error.response.data);
      });
  };

  return (
    <div className="col-md-3 mx-auto" style={{ padding: "3rem" }}>
      <img
        className="rounded mx-auto d-block"
        src={logo}
        alt="logo"
        width="100"
        height="80"
      ></img>
      <br></br>
      <div>
        {message && (
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        )}
        <div className="form-group">
          <label htmlFor="username">Email</label>
          <input
            onChange={handleChangeEmail}
            type="text"
            className="form-control"
            name="email"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChangePassword}
            type="password"
            className="form-control"
            name="password"
          />
        </div>
        <br />
        <div className="form-group text-center">
          <button
            onClick={handleLogin}
            className="btn btn-primary btn-block btn-lg"
          >
            <span>Log in</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
