import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { Paper } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import { FilledInput } from "@mui/material";
import { Box } from "@mui/system";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import axioswithAuth from "../utils/axiosWithAuth";

const initialValues = {
  //   email: "",
  username: "",
  password: "",
};

const initialPWDisplay = {
  showPassword: false,
};

const Register = (props) => {
  const { push } = useHistory();
  const [values, setValues] = useState(initialValues);
  const [showPw, setShowPw] = useState(initialPWDisplay);
  const [error, setError] = useState();

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPw({ showPassword: !showPw.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = () => {
    axios
      .post(
        "https://potluck-planning-app.herokuapp.com/api/auth/register",
        values
      )
      .then((res) => {
        console.log(res);
        setValues(initialValues);
        push("/login");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div className="register">
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <Paper sx={{ display: "inline-block" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
            <InputLabel htmlFor="outlined-username">Username</InputLabel>
            <OutlinedInput
              id="outlined-username"
              value={values.username}
              onChange={handleChange("username")}
              label="Username"
            />
          </FormControl>
          {/* <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
            <InputLabel htmlFor="outlined-eMail">E-Mail</InputLabel>
            <OutlinedInput
              id="outlined-eMail"
              value={values.email}
              onChange={handleChange("email")}
              label="Email"
            />
          </FormControl> */}
          <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPw.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPw.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <Button onClick={handleSubmit} variant="contained">
            Create Account
          </Button>
        </Box>
      </Paper>
    </div>
  );
};

export default Register;
