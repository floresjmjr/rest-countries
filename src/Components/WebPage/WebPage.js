import React, { useState } from 'react';
import Header from '../Header/Header';
import MainSection from '../MainSection/MainSection';
import SideSection from '../SideSection/SideSection';
import './WebPage.css';

const WebPage = () => {
  const [countryInfo, setCountryInfo] = useState({
    commoneName: '',
    officialName: '',
    currencySymbol: '',
    language: '',
    capitalCity: '',
    population: '',
    flag: '',
    flagInfo: '',
    coatOfArms: '',
  });

  const lookupFlagHandler = async (country) => {
    const rawData = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const results = await rawData.json();
    setCountryInfo({
      commoneName: results[0].name.common,
      officialName: results[0].name.official,
      currencySymbol: results[0].currencies, //iterate
      language: results[0].languages, //iterate
      capitalCity: results[0].capital[0],
      population: results[0].population,
      flag: results[0].flags.svg,
      flagInfo: results[0].flags.alt,
      coatOfArms: results[0].coatOfArms.svg,
    });
  };

  return (
    <React.Fragment>
      <Header lookupFlagHandler={lookupFlagHandler} />
      <div className='sections'>
        <MainSection />
        <SideSection flag={countryInfo.flag} coatOfArms={countryInfo.coatOfArms} />
      </div>
    </React.Fragment>
  );
};

export default WebPage;
