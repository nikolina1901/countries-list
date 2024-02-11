import React from "react";
import { TextField } from "@mui/material";

const CountrySearchBar = () => {
  return (
    <div className="countrySearchBar">
      <TextField style={{ width: "60%", marginLeft: "10px" }} />
      <h2 style={{ marginLeft: "10px" }}>Countries</h2>
    </div>
  );
};

export default CountrySearchBar;
