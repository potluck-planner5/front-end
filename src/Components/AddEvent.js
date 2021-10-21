import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import { Paper } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import { FilledInput } from "@mui/material";
import { Box } from "@mui/system";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";

import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import itemServices from "../services/itemServices";

import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import axioswithAuth from "../utils/axiosWithAuth";

const initialDetailValues = {
  date: "",
  time: "",
  location: "",
};

const initialItemValues = {
  completed: false,
  item_name: "",
  person_bringing: null,
};

const AddEvent = (props) => {
  const { push } = useHistory();
  const [eventDetails, setEventDetails] = useState(initialDetailValues);
  const [items, setItems] = useState(initialItemValues);
  const [error, setError] = useState();

  const handleChange = (prop) => (e) => {
    setEventDetails({ ...eventDetails, [prop]: e.target.value });
  };
  const handleItemsChange = (prop) => (e) => {
    setItems({ ...items, [prop]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axioswithAuth()
      .post(
        "https://potluck-planning-app.herokuapp.com/api/parties",
        eventDetails
      )
      .then((res) => {
        console.log("promise response:", res);
        axioswithAuth()
          .post(
            `https://potluck-planning-app.herokuapp.com/api/items/${res.data.party_id} `,
            items
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err.response);
          });
      });
  };

  return (
    <div className="add-event">
      <Typography variant="h4" gutterBottom>
        Add Event
      </Typography>
      <Paper sx={{ display: "inline-block" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
            <InputLabel htmlFor="outlined-date">Date</InputLabel>
            <OutlinedInput
              id="outlined-username"
              value={eventDetails.date}
              onChange={handleChange("date")}
              label="date"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
            <InputLabel htmlFor="outlined-time">Time</InputLabel>
            <OutlinedInput
              id="outlined-eMail"
              value={eventDetails.time}
              onChange={handleChange("time")}
              label="time"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
            <InputLabel htmlFor="outlined-location">Location</InputLabel>
            <OutlinedInput
              id="outlined-eMail"
              value={eventDetails.location}
              onChange={handleChange("location")}
              label="location"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
            <InputLabel htmlFor="outlined-items">Items</InputLabel>
            <OutlinedInput
              id="outlined-eMail"
              value={items.item_name}
              onChange={handleItemsChange("item_name")}
              label="items"
            />
          </FormControl>

          <Button onClick={handleSubmit} variant="contained">
            Create Event
          </Button>
        </Box>
      </Paper>
    </div>
  );
};

export default AddEvent;
