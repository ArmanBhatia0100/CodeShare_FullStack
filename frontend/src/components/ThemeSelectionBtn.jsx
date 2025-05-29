import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';

export default function SelectAutoWidth( {options} ) {


  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">{options[0]}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={"Theme"}
          autoWidth
          label={options[0]}
        >
          <MenuItem value="">
            <em>{options[0]}</em>
          </MenuItem>
          <MenuItem value={20}>{options[0]}</MenuItem>
          <MenuItem value={21}>{options[1]}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

SelectAutoWidth.propTypes = {
  options: PropTypes.array.isRequired,
};
