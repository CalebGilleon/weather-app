import { useState, useEffect } from "react";
import Hero from "./Hero";

const SearchView = ({ searchResults }) => {
  console.log(searchResults);

  const [cityName, setCityName] = useState("Search for any city");
  const [cityState, setCityState] = useState("");
  const [cityLat, setCityLat] = useState(null);
  const [cityLon, setCityLon] = useState(null);
  const [currentTemp, setCurrentTemp] = useState("");
  const [conditions, setConditions] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);

  useEffect(() => {
    // Fetch cityLat and cityLon based on searchResults
    console.log(searchResults)
    if (searchResults) {
      fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${searchResults}&appid=3e53e4bc8b9215314789abc753636bf5`
      )
        .then((response) => response.json())
        .then((data) => {
        //   console.log(data[0]);
          if (data && data[0]) {
            setCityName(data[0].name)
            setCityState(data[0].state);
            setCityLat(data[0].lat);
            setCityLon(data[0].lon);
          } else {
            console.log(alert("Invalid City Name!"))
          }
        });
    }

    //use lat and lon to make second call to retrieve weather info
    if (cityLat && cityLon) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLon}&appid=3e53e4bc8b9215314789abc753636bf5`
      )
        .then((response) => response.json())
        .then((data) => {
            let current = (data.main.temp - 273.15) * 9/5 + 32;
            let currentConditions = data.weather[0].description;
            let feels = (data.main.feels_like - 273.15) * 9/5 + 32;
            let humid = (data.main.humidity);
            let wind = (data.wind.speed * 2.23694);
            
          setCurrentTemp(`Temperature: ${current.toFixed(1)}`);
          setConditions(`Conditions: ${currentConditions}`);
          setFeelsLike(`Feels like: ${feels.toFixed(1)}`);
          setHumidity(humid);
          setWindSpeed(wind.toFixed(1))
        });
    }
  },[searchResults, cityLat, cityLon]);

  return (
    <>
      <Hero text={cityName} />
      <h1>{currentTemp} &deg;F</h1>
      <h4>{conditions}</h4>
      <h4>{feelsLike}&deg;F</h4>
      <h4>Humidity: {humidity}%</h4>
      <h4>Wind: {windSpeed} mph</h4>
      <h2>{cityState}</h2>
      <h4>Latitude: {cityLat}</h4>
      <h4>Longitude: {cityLon}</h4>
    </>
  );
};

export default SearchView;
