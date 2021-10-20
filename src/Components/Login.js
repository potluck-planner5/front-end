import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const LoginPage = () => {
  const { push } = useHistory();

  // ==============================================================
  //   const initialValues = {
  //     username: "",
  //     password: "",
  //   };

  //   const [credentials, setCredentials] = useState(initialValues);

  //   const handleChange = (e) => {
  //     setCredentials({ ...credentials, [e.target.name]: e.target.value });
  //   };

  //   const onSubmit = (e) => {
  //     e.preventDefault();
  //     axios
  //       .post(
  //         "https://potluck-planning-app.herokuapp.com/api/auth/login",
  //         credentials
  //       )
  //       .then((res) => {
  //         console.log(res);
  //         localStorage.setItem("token", res.data.token);
  //         setCredentials(initialValues);
  //       })
  //       .catch((err) => {
  //         console.log(err.response);
  //       });
  //   };

  // ==============================================================
  const [state, setState] = useState({
    authentication: {
      username: "",
      password: "",
    },
    error: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://potluck-planning-app.herokuapp.com/api/auth/login", state)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        push("/dashboard");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const routeToHome = () => {
    push("/");
  };

  return (
    <div>
      <button onClick={routeToHome}>Home</button>
      <form onSubmit={onSubmit}>
        <label>Username: </label>
        <input
          name="username"
          type="text"
          value={state.username}
          onChange={handleChange}
        ></input>
        <label>Password: </label>
        <input
          name="password"
          type="password"
          value={state.password}
          onChange={handleChange}
        ></input>
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
