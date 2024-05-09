import React from 'react'
import { useState } from 'react'
// import axios from 'axios';
function WeatherHomework() {
    var [data, setData] = useState([]);
    var [location, setLocation] = useState('');
    var urlData = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;
    const searchLocation = (event) => {
        let promise;
        if (event.key === 'Enter') {
            promise = axios({
                url: urlData,
                method: 'GET'
            })
            promise.then(function (res) {
                console.log(res);
                setData(res.data);
            }).catch(function (err) {
                console.log(err);
            })
            setLocation('');
        }
    }
    return (
        <div className='weatherApp'>
            <div className="search">
                <input
                    value={location}
                    onChange={event => setLocation(event.target.value)}
                    onKeyPress={searchLocation}
                    placeholder='Enter Location'
                    type="text" />
            </div>
            <div className="container">
                <div className="top">
                    <div className="location">
                        <p>{data.name}</p>
                    </div>
                    <div className="temp">
                        {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
                    </div>
                    <div className="description">
                        {data.weather ? <p>{data.weather[0].main}</p> : null}
                    </div>
                </div>
                {data.name !== undefined &&
                    <div className="bottom">
                        <div className="feels">
                            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
                            <p>Feels Like</p>
                        </div>
                        <div className="humidity">
                            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                            <p>Humidity</p>
                        </div>
                        <div className="wind">
                            {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
                            <p>Wind Speed</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default WeatherHomework
