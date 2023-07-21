import { useState } from 'react';
import './Header.css';

const Header = (props) => {
  const [country, setCountry] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.lookupFlagHandler(country);
    setCountry('');
  };

  const onInputChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <header className='search-header'>
      <form className='search-form' onSubmit={onSubmitHandler}>
        <input
          type='text'
          placeholder='Search box'
          value={country}
          onChange={onInputChange}
          autoFocus
        ></input>
        <button type='submit'>submit</button>
      </form>
    </header>
  );
};

export default Header;
