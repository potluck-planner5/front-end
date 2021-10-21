import axioswithAuth from "../utils/axiosWithAuth";
import React, { useState } from "react";

const itemServices = (props) => {
  return axioswithAuth()
    .post("https://potluck-planning-app.herokuapp.com/api/parties", props)
    .then((res) => {
      console.log(res);
      return res.data.party_id;
    });
};

export default itemServices;
