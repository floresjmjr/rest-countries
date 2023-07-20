import React from 'react';
import Header from '../Header/Header';
import MainSection from '../MainSection/MainSection';
import SideSection from '../SideSection/SideSection';
import './WebPage.css';

const lookupFlagHandler = async (country) => {
  const rawData = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  const results = await rawData.json();
};

const WebPage = () => {
  return (
    <React.Fragment>
      <Header lookupFlagHandler={lookupFlagHandler} />
      <div className='sections'>
        <MainSection />
        <SideSection />
      </div>
    </React.Fragment>
  );
};

export default WebPage;
