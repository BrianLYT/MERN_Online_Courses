import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AuthService from "../services/auth.service";
import logo from "../img/logo.svg";

const RegisterComponent = () => {
  const history = useHistory();
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [role, setRole] = useState("student");
  let [message, setMessage] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeRole = (e) => {
    setRole(e.target.value);
  };
  const handleRegister = () => {
    AuthService.register(username, email, password, role)
      .then(() => {
        window.alert(
          "Registration succeeds. You are now redirected to the login page."
        );
        history.push("/login");
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
        {message && <div className="alert alert-danger">{message}</div>}
        <div>
          <label htmlFor="username">Username</label>
          <input
            onChange={handleChangeUsername}
            type="text"
            className="form-control"
            name="username"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="email">Email</label>
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
        <label htmlFor="password">Role</label>
        <div className="form-floating">
          <select
            onChange={handleChangeRole}
            className="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
          </select>
          <label htmlFor="floatingSelect">Select Role</label>
        </div>
        <br />
        <div className="text-center">
          <button onClick={handleRegister} className="btn btn-primary btn-lg">
            <span>Register</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
