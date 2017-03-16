var React = require('react');

var About = (props) => {
        return(
            <div>
                <h1 className="text-center page-title">About</h1>
                <p>This is a weather application built in React and styled with Foundations</p>
                <p>Here are some of the tools used:</p>
                <ol>
                    <li><a href="https://facebook.github.io/react">React</a> - Javascript framework used</li>
                    <li><a href="http://openweathermap.org">OpenWeatherMap</a> - API to search for weather data by city name</li>
                </ol>
            </div>
            
        )
};

module.exports = About;