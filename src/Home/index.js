import React from 'react';
import Header from '../components/Header';
import WeatherContent from '../components/Main';

const HomePage = () => {
  const [value, setValue] = React.useState('');
  const [content, setContent] = React.useState({});
  const submit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API}/api/city/${value}`)
      .then((res) => res.json())
      .then((res) => {
        setContent(res.data);
      })
      .catch((err) => {
        alert(err.response?.data);
      });
  };
  return (
    <>
      <div>
        <Header
          submit={submit}
          value={value}
          setValue={setValue}
        />
        <main>
          {Boolean(content.weather) && (
            <WeatherContent content={content} />
          )}
        </main>
      </div>
    </>
  );
};

export default HomePage;
