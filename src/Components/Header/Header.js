import { useRef } from 'react';
import './Header.css';

const Header = (props) => {
  const inputRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.lookupFlagHandler(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <header className='search-header'>
      <form className='search-form' onSubmit={onSubmitHandler}>
        <input type='text' placeholder='Search box' ref={inputRef} autofocus></input>
        <button type='submit'>submit</button>
      </form>
    </header>
  );
};

export default Header;
