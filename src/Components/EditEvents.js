import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@mui/material/Grid";

import { connect } from "react-redux";

import axioswithAuth from "../utils/axiosWithAuth";
import EventDetails from "./EventDetails";

const EditEvents = (props) => {
  const [potlucks, setPotlucks] = useState([]);

  useEffect(() => {
    axioswithAuth()
      .get("https://potluck-planning-app.herokuapp.com/api/parties")
      .then((res) => {
        console.log(res.data);
        setPotlucks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
    >
      {potlucks.map((items) => {
        return <EventDetails potlucks={items} />;
      })}
    </Grid>
  );
};

export default EditEvents;
