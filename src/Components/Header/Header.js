import { useState, useRef } from 'react';

const Header = (props) => {
  const inputRef = useRef();

  return (
    <div className='header'>
      <input type='text' placeholder='search box' ref={inputRef}></input>
      <button type='button' onClick={() => props.lookupFlagHandler(inputRef.current.value)}>
        submit
      </button>
    </div>
  );
};

export default Header;
