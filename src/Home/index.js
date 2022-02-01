import React from 'react';
import Header from '../components/Header';
import WeatherContent from '../components/Main';

const HomePage = () => {
  return (
    <>
      <div>
        <Header />
        <main>
          <WeatherContent />
        </main>
      </div>
    </>
  );
};

export default HomePage;
