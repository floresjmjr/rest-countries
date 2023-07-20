import { useRef } from 'react';

const Header = (props) => {
  const inputRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.lookupFlagHandler(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <div className='header'>
      <form onSubmit={onSubmitHandler}>
        <input type='text' placeholder='search box' ref={inputRef}></input>
        <button type='submit'>submit</button>
      </form>
    </div>
  );
};

export default Header;
