var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     var {temp, location} = this.props;
//
//     return (
//       <p>It is currently {temp}° in {location}.</p>
//     );
//   }
// });

var WeatherMessage = ({temp, location}) => {
  return (
    <p>It is currently {temp}° in {location}.</p>
  );
};

module.exports = WeatherMessage;
