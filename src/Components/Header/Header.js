import { useState } from 'react';
import './Header.css';
import AutoCompleteCountries from './AutoCompleteCountries';

const Header = (props) => {
  const [countryName, setCountryName] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.lookupCountryHandler(countryName);
    setCountryName('');
  };

  const inputChangeHandler = (e, value) => {
    setCountryName(value);
  };

  return (
    <header className='search-header'>
      <form className='search-form' onSubmit={onSubmitHandler}>
        <AutoCompleteCountries countryName={countryName} inputChangeHandler={inputChangeHandler} />
        <button type='submit' disabled={countryName === ''}>
          Submit
        </button>
      </form>
    </header>
  );
};

export default Header;
