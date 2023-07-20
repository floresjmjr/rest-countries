import React from 'react';
import Header from '../Header/Header';
import MainSection from '../MainSection/MainSection';
import SideSection from '../SideSection/SideSection';
import './WebPage.css';

const WebPage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className='sections'>
        <MainSection />
        <SideSection />
      </div>
    </React.Fragment>
  );
};

export default WebPage;
