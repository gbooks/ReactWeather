var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application built on React.</p>
      <p>Some elements we use on this site:</p>
      <ol>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This is the JavaScript framework
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - This is used to search weather data by city name
        </li>
      </ol>
    </div>
  )
};

module.exports = About;
