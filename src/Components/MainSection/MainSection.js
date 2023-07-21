import React from 'react';
import './MainSection.css';

const MainSection = (props) => {
  let errorMessage = 'Country Information Panel';
  if (props.fetchError.value === 'Not Found') {
    errorMessage = `"${props.fetchError.searchTerm}" is NOT a country, please try again.`;
  } else if (props.fetchError.value) {
    errorMessage = `There was an error retreiving the country information: ${props.fetchError.value}.`;
  }

  const currencyList = [];
  if (props.currencies) {
    for (let currency in props.currencies) {
      currencyList.push(
        <li key={currency}>
          {props.currencies[currency].name} ( <u>symbol:</u> {props.currencies[currency].symbol} | <u>code:</u>{' '}
          {currency} )
        </li>
      );
    }
  }

  const languageList = [];
  if (props.languages) {
    for (let language in props.languages) {
      languageList.push(<li key={language}>{props.languages[language]}</li>);
    }
  }

  return (
    <section className='main-section'>
      <div className='main-section-container'>
        {props.officialName ? (
          <div className='main-section-content'>
            <h2 className='main-section-title'>{props.commonName}</h2>
            <dl className='country-details'>
              <dt>Common Name:</dt>
              <dd>{props.commonName}</dd>
              <dt>Official Name:</dt>
              <dd>{props.officialName}</dd>
              <dt>Currencies:</dt>
              <dd>
                <ul>{currencyList}</ul>
              </dd>
              <dt>Languages:</dt>
              <dd>
                <ul>{languageList}</ul>
              </dd>
              <dt>Capital City:</dt>
              <dd>{props.capitalCity}</dd>
              <dt>Population:</dt>
              <dd>{props.population.toLocaleString('en-US')}</dd>
            </dl>
          </div>
        ) : (
          <div>{errorMessage}</div>
        )}
      </div>
    </section>
  );
};
export default MainSection;
