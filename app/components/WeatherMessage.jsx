var React = require('react');

//var WeatherMessage = (props) => { destructuring as follows
var WeatherMessage = ({temp, location}) => {
    return(
        <h3>It's {temp} on {location} city.</h3>
    );
};

module.exports = WeatherMessage;