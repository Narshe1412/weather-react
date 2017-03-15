var React = require('react');

//var WeatherMessage = (props) => { destructuring as follows
var WeatherMessage = ({temp, location}) => {
    return(
        <h3 className="text-center">It's {temp}ºC on {location}.</h3>
    );
};

module.exports = WeatherMessage;