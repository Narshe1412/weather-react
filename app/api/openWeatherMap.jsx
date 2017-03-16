var axios = require('axios');
//var OpenWeatherKey = require('../../keys.jsx');
const API_KEY = '0fdc07b79d98b893a536bb201860fbf3'//OpenWeatherKey.module.OpenWeatherKey;

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&units=metric&appid=';

module.exports= {
    getTemp: function(location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}${API_KEY}&q=${encodedLocation}`;

        return axios.get(requestUrl).then( function(res){ //API success, but city is not guaranteed
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message); //no city was returned
            } else {
                return res.data.main.temp; //city returned, temparature return
            }

        }, function(err){
           // throw new Error(res.data.message); //API fails
           throw new Error('Unable to fetch weather for that location.');
        });
    }
}