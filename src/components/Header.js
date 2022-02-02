import React from 'react';

const Header = ({ setValue, value, submit, loading }) => {
  return (
    <div className="header">
      <div className="header_content">
        <h1>Weather App</h1>
        <form noValidate onSubmit={submit}>
          <label>
            <p>Enter your City name</p>
            <input
              value={value}
              placeholder="City name"
              onChange={(e) => setValue(e.target.value)}
              disabled={loading}
            />
          </label>
          <button>
            {loading ? 'Loading...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
