var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function(){
        return { 
            isLoading: false
        }
    },

    handleSearch: function(location){
        // this.setState({
        //     location: location,
        //     temp: 23
        // })
        var that = this;
        this.setState({ isLoading:true });

        openWeatherMap.getTemp(location).then(function(temp){
                that.setState({ //.this get lost because chaining functions, we use this=that to keep reference
                    location: location,
                    temp: temp,
                    isLoading: false
                })
            }, function(errorMessage){
                alert(errorMessage);
                that.setState({isLoading : false}) //TODO
        });
    },

    render: function(){
        var {isLoading, temp, location} = this.state;

        function renderMessage() {
            if(isLoading) {
                return <h3>Fetching weather ...</h3>;
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>; 
            }
        }

        return(
            <div>
                <h3>Weather component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;