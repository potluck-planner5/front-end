import React from "react";
import { useParams } from "react-router";
import axioswithAuth from "../utils/axiosWithAuth";

const Event = (props) => {
  const { id } = useParams();
  console.log(props);

  axioswithAuth().get();

  return <div>Event details go here</div>;
};

export default Event;
