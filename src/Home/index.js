import React from 'react';
import Header from '../components/Header';
import WeatherContent from '../components/Main';

const HomePage = () => {
  const [value, setValue] = React.useState('');
  const [content, setContent] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(`${process.env.REACT_APP_API}/api/city/${value}`)
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setValue('');
        res.error ? alert(res.error) : setContent(res.data);
      })
      .catch((err) => {
        setLoading(false);
        alert(
          err.response?.data ||
            'Something went wrong, try again later'
        );
      });
  };
  return (
    <>
      <div>
        <Header
          submit={submit}
          value={value}
          setValue={setValue}
          loading={loading}
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
