import React from 'react';

const SideSection = (props) => {
  return (
    <React.Fragment>
      {props.flag ? (
        <section>
          <img src={props.flag} alt={props.flagInfo} />
          <img src={props.coatOfArms} alt='coat of arms' />
        </section>
      ) : (
        <section>Country flag and coat of arms panel</section>
      )}
    </React.Fragment>
  );
};

export default SideSection;
