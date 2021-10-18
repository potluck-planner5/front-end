import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

const initialValue = {
  email: "",
  username: "",
  password: "",
};
