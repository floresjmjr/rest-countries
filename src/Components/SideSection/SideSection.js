import React from 'react';
import './SideSection.css';

const SideSection = (props) => {
  return (
    <section className='side-section'>
      <div className='flags'>
        {props.flag ? (
          <React.Fragment>
            <img src={props.flag} alt={props.flagInfo} />
            <p>Country Flag</p>
            <img src={props.coatOfArms} alt='coat of arms' />
            <p>Coat of Arms</p>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <img
              src='https://geekflare.com/wp-content/uploads/2023/03/img-placeholder.png'
              alt='flag placeholder'
            />
            <p>Country Flag</p>
            <img
              src='https://geekflare.com/wp-content/uploads/2023/03/img-placeholder.png'
              alt='coat of arms placeholder'
            />
            <p>Coat of Arms</p>
          </React.Fragment>
        )}
      </div>
    </section>
  );
};

export default SideSection;
