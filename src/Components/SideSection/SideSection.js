import React from 'react';
import './SideSection.css';

const SideSection = (props) => {
  return (
    <section className='side-section'>
      {props.flag ? (
        <div className="flags">
          <img src={props.flag} alt={props.flagInfo} />
          <img src={props.coatOfArms} alt='coat of arms' />
        </div>
      ) : (
        <p>Country flag and coat of arms panel</p>
      )}
    </section>
  );
};

export default SideSection;
