var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function(){
        return { //default values for testing
            location: 'Miami',
            temp: 88
        }
    },

    handleSearch: function(location){
        // this.setState({
        //     location: location,
        //     temp: 23
        // })
        var that = this;
        openWeatherMap.getTemp(location).then(function(temp){
                that.setState({ //.this get lost because chaining functions, we use this=that to keep reference
                    location: location,
                    temp: temp
                })
            }, function(errorMessage){
                alert(errorMessage); //TODO
        });
    },

    render: function(){
        var {temp, location} = this.state;

        return(
            <div>
                <h3>Weather component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                <WeatherMessage temp={temp} location={location}/>
            </div>
        );
    }
});

module.exports = Weather;