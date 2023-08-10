import { Countries } from './Countries';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const AutoCompleteCountries = (props) => {
  return (
    <Autocomplete
      freeSolo
      disableClearable
      inputValue={props.countryName}
      onInputChange={props.inputChangeHandler}
      className='country-autocomplete'
      options={Countries}
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
