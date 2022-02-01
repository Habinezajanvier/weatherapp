import React from 'react';

const WeatherContent = ({ content }) => {
  return (
    <div>
      <div className="upperContent">
        <div className="timeZone">
          <div>
            <h3>Day</h3>
            <p>day</p>
          </div>
          <div>
            <h3>Date</h3>
            <p>day</p>
          </div>
          <div>
            <h3>Time</h3>
            <p>day</p>
          </div>
          <div>
            <h3>T.Z</h3>
            <p>day</p>
          </div>
        </div>
        <div className="weatherContent">
          <p>City</p>
          <p>Celcius</p>
          <div className="icons"></div>
          <p>Sunny</p>
        </div>
      </div>
      <div className="cityDesc">
        <div>
          <p>City</p>
          <p>Country</p>
        </div>
        <div>
          <p>Lat</p>
          <p>Long</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherContent;
