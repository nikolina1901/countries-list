import React from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const CountrySearchBar = ({ size, label, onChange, onClear, value }) => {
  return (
    <div className="countrySearchBar">
      <TextField
        size={size}
        label={label}
        onChange={onChange}
        value={value}
        style={{ width: "60%", marginLeft: "10px" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {value && (
                <IconButton onClick={onClear} edge="end">
                  <ClearIcon />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
      <h2 style={{ marginLeft: "10px" }}>Countries</h2>
    </div>
  );
};

export default CountrySearchBar;
