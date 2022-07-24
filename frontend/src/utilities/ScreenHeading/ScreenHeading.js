import React from "react";
import "./ScreenHeading.css";
import { Typography } from "@mui/material";

export default function ScreenHeading(props) {
  return (
    <div className="heading-container">
      <div className="screen-heading">
        <Typography variant="h3">
          {" "}
          <span>{props.title}</span>{" "}
        </Typography>
      </div>
      {props.subHeading ? (
        <div className="screen-sub-heading">
          <Typography variant="h3">
            {" "}
            <span>{props.subHeading}</span>{" "}
          </Typography>
        </div>
      ) : (
        <div></div>
      )}
      <div className="heading-seperator">
        <div className="seperator-line"></div>
        <div className="seperator-blob">
          <div></div>
        </div>
      </div>
    </div>
  );
}
