import { Countries } from './Countries';

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const AutoCompleteCountries = (props) => {
  return (
    <Autocomplete
      freeSolo
      value={props.countryValue}
      inputValue={props.displayCountry}
      onChange={props.onInputChange}
      onInputChange={props.onDisplayInputChange}
      className='country-autocomplete'
      options={Countries}
      getOptionLabel={(option) => option}
      renderOption={(props, option) => (
        <Box component='li' {...props}>
          {' '}
          {option}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label='Search box'
          sx={{
            '& .MuiInputLabel-root.Mui-focused': { display: 'none' },
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          }}
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
};

export default AutoCompleteCountries;
