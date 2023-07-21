import { useState } from 'react';
import './Header.css';
import AutoCompleteCountries from './AutoCompleteCountries';

const Header = (props) => {
  const [countryValue, setCountryValue] = useState('');
  const [displayCountry, setDisplayCountry] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.lookupFlagHandler(countryValue);
    setCountryValue('');
    setDisplayCountry('');
  };

  const onInputChange = (e, value) => {
    setCountryValue(value);
  };

  const onDisplayInputChange = (e, value) => {
    setDisplayCountry(value);
  };

  return (
    <header className='search-header'>
      <form className='search-form' onSubmit={onSubmitHandler}>
        <AutoCompleteCountries
          countryValue={countryValue}
          displayCountry={displayCountry}
          onInputChange={onInputChange}
          onDisplayInputChange={onDisplayInputChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </header>
  );
};

export default Header;
