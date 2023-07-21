import React, { useState } from 'react';
import Header from '../Header/Header';
import MainSection from '../MainSection/MainSection';
import SideSection from '../SideSection/SideSection';
import PageTitle from '../PageTitle/PageTitle';
import './HomePage.css';

const HomePage = () => {
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
  const [fetchError, setFetchError] = useState({ searchTerm: '', value: '' });

  const lookupFlagHandler = async (country) => {
    let rawData = '';
    let results = {};
    try {
      rawData = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`);
      results = await rawData.json();
    } catch (error) {
      setFetchError({ searchTerm: country, value: error });
      setCountryInfo({});
    }

    if (results[0]) {
      setCountryInfo({
        commonName: results[0].name.common,
        officialName: results[0].name.official,
        currencies: results[0].currencies,
        languages: results[0].languages,
        capitalCity: results[0].capital[0],
        population: results[0].population,
        flag: results[0].flags.png,
        flagInfo: results[0].flags.alt,
        coatOfArms: results[0].coatOfArms.png,
      });
      if (fetchError.value) {
        setFetchError({});
      }
    } else if (results.status === 404) {
      setFetchError({ searchTerm: country, value: results.message });
      setCountryInfo({});
    }
  };

  return (
    <div className='body'>
      <div className='body-container'>
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
            fetchError={fetchError}
          />
          <SideSection
            flag={countryInfo.flag}
            coatOfArms={countryInfo.coatOfArms}
            fetchError={fetchError}
          />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
