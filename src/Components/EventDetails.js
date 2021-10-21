import React from "react";
import { Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";

const EventDetails = (props) => {
  console.log(props);
  //   const { potlucks } = props;

  return (
    <Grid item xs={3} padding="1%">
      <Card>
        <CardContent>
          <Typography variant="h5">
            Party ID#{props.potlucks.party_id}
          </Typography>
          <Typography>Time: {props.potlucks.time}</Typography>
          <Typography>Date: {props.potlucks.date}</Typography>
          <Typography>Location: {props.potlucks.location}</Typography>
          <Typography>Invite URL: {props.potlucks.party_url_string}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default EventDetails;
