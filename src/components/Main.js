import moment from 'moment';
import React from 'react';

const WeatherContent = ({ content }) => {
  return (
    <div>
      <div className="upperContent">
        <div className="timeZone">
          <div>
            <h3>Day</h3>
            <p>{moment().format('dddd')}</p>
          </div>
          <div>
            <h3>Date</h3>
            <p>{moment().format('MMM Do YY')}</p>
          </div>
          <div>
            <h3>Time</h3>
            <p>{moment().format('LTS')}</p>
          </div>
          {/* <div>
            <h3>T.Z</h3>
            <p>day</p>
          </div> */}
        </div>
        <div className="weatherContent">
          <p>{content.name}</p>
          <p>{content.main?.temp}</p>
          <div className="icon">
            <img
              src={`http://openweathermap.org/img/w/${content.weather[0]?.icon}.png`}
              alt="_w_"
            />
          </div>
          <p>{content.weather[0]?.description}</p>
        </div>
      </div>
      <div className="cityDesc">
        <div>
          <p>{content.name}</p>
          <p>{content.sys?.country}</p>
        </div>
        <div>
          <p>{content.coord?.lat}</p>
          <p>{content.coord?.lon}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherContent;
