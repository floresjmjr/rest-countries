import React from 'react';
import './MainSection.css';

const MainSection = (props) => {
  const currencyList = [];
  if (props.currencies) {
    for (let currency in props.currencies) {
      currencyList.push(
        <li>
          {props.currencies[currency].name}
          (symbol: {props.currencies[currency].symbol} code: {currency})
        </li>
      );
    }
  }

  const languageList = [];
  if (props.languages) {
    for (let language in props.languages) {
      languageList.push(<li>{props.languages[language]}</li>);
    }
  }

  return (
    <section className='main-section'>
      <div className='main-section-container'>
        {props.officialName ? (
          <div className='main-section-content'>
            <h2 className='main-section-title'>{props.commonName}</h2>
            <dl>
              <dt>Common Name</dt>
              <dd>{props.commonName}</dd>
              <dt>Official Name</dt>
              <dd>{props.officialName}</dd>
              <dt>Currencies</dt>
              <dd>
                <ul>{currencyList}</ul>
              </dd>
              <dt>Languages</dt>
              <dd>
                <ul>{languageList}</ul>
              </dd>
              <dt>Capital City</dt>
              <dd>{props.capitalCity}</dd>
              <dt>Population</dt>
              <dd>{props.population}</dd>
            </dl>
          </div>
        ) : (
          <div>Country information panel or error display</div>
        )}
      </div>
    </section>
  );
};
export default MainSection;
