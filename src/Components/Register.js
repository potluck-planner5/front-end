import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

const initialValues = {
  email: "",
  username: "",
  password: "",
};

const Register = (props) => {
  const { push } = useHistory();
  const [credentials, setCredentials] = useState(initialValues);
  const [error, setError] = useState();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Register goes here</h1>
    </div>
  );
};

export default Register;
