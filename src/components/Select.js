import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DestinationContext } from "../contexts/DestinationContext";
import { useContext, useState} from "react"

const SelectAutoWidth=()=> {
  const {selectedDestination, setSelectedDestination} = React.useContext(DestinationContext);

  const handleChange = (event) => {
    setSelectedDestination(event.target.value);
  };
  const options = [
    { value: 'prague', label: 'Prague' },
    { value: 'paris', label: 'Paris' },
    { value: 'tokyo', label: 'Tokyo' },
    { value: 'london', label: 'London' },
    // add more options as needed
  ];
  return (
    <div>
       <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Age</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={selectedDestination}
        label="Your dream destination?"
        onChange={handleChange}
      >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {options.map((option) => (
    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
  ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectAutoWidth