import React, { useState } from 'react';
import Header from '../Header/Header';
import MainSection from '../MainSection/MainSection';
import SideSection from '../SideSection/SideSection';
import PageTitle from '../PageTitle/PageTitle';
import './WebPage.css';

const WebPage = () => {
  const [countryInfo, setCountryInfo] = useState({
    commoneName: '',
    officialName: '',
    currencies: '',
    languages: '',
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
      currencies: results[0].currencies,
      languages: results[0].languages,
      capitalCity: results[0].capital[0],
      population: results[0].population,
      flag: results[0].flags.svg,
      flagInfo: results[0].flags.alt,
      coatOfArms: results[0].coatOfArms.svg,
    });
  };

  return (
    <div className='body'>
      <PageTitle></PageTitle>
      <Header lookupFlagHandler={lookupFlagHandler} />
      <main className='sections'>
        <MainSection
          officialName={countryInfo.officialName}
          commonName={countryInfo.commonName}
          currencies={countryInfo.currencies}
          languages={countryInfo.languages}
          capitalCity={countryInfo.capitalCity}
          population={countryInfo.population}
        />
        <SideSection flag={countryInfo.flag} coatOfArms={countryInfo.coatOfArms} />
      </main>
    </div>
  );
};

export default WebPage;
