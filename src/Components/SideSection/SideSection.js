import React from 'react';

const SideSection = (props) => {
  return (
    <React.Fragment>
      {props.flag ? (
        <div>
          <img src={props.flag} alt={props.flagInfo} />
          <img src={props.coatOfArms} alt='coat of arms' />
        </div>
      ) : (
        <div>Country flag and coat of arms panel</div>
      )}
    </React.Fragment>
  );
};

export default SideSection;
