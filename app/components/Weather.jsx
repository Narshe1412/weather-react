var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function(){
        return { 
            isLoading: false,

        }
    },

    handleSearch: function(location){
        // this.setState({
        //     location: location,
        //     temp: 23
        // })
        var that = this;

        //debugger;
        this.setState({ 
            isLoading:true,
            errorMessage:undefined
         });

        openWeatherMap.getTemp(location).then(function(temp){
                that.setState({ //.this get lost because chaining functions, we use this=that to keep reference
                    location: location,
                    temp: temp,
                    isLoading: false
                })
            }, function(e){
                that.setState({
                    isLoading : false,
                    errorMessage: e.message
                })
        });
    },

    render: function(){
        var {isLoading, temp, location, errorMessage} = this.state;

        function renderMessage() {
            if(isLoading) {
                return <h3 className="text-center">Fetching weather ...</h3>;
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>; 
            }
        }

        function renderError(){
            if (typeof errorMessage==='string'){
                return(
                    <ErrorModal message={errorMessage}/>
                )
            }
        }

        return(
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;