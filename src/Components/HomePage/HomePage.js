import { useState } from 'react';
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
  const [fetchError, setFetchError] = useState({ searchTerm: '', message: '' });

  const lookupCountryHandler = async (country) => {
    let rawData = '';
    let results = {};
    try {
      rawData = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`);
      results = await rawData.json();
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
        if (fetchError.message) {
          setFetchError({});
        }
      } else {
        setFetchError({ searchTerm: country, message: results.message });
        setCountryInfo({});
      }
    } catch (error) {
      setFetchError({ searchTerm: country, message: error });
      setCountryInfo({});
    }
  };

  return (
    <div className='body'>
      <div className='body-container'>
        <PageTitle></PageTitle>
        <Header lookupCountryHandler={lookupCountryHandler} />
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
            flagInfo={countryInfo.flagInfo}
            coatOfArms={countryInfo.coatOfArms}
          />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
