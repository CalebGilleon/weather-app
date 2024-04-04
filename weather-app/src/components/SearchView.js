import { useState } from "react";
import Hero from "./Hero";

const SearchView = ({ keyword, searchResults }) => {
  console.log(searchResults);

  const [cityState, setCityState] = useState([]);
  const [cityLat, setCityLat] = useState([])
  const [cityLon, setCityLon] = useState([])

  if (searchResults) {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${searchResults}&appid=3e53e4bc8b9215314789abc753636bf5`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0]);
        if (data[0]) {
          setCityState(data[0].state);
          setCityLat(data[0].lat);
          setCityLon(data[0].lon);
        }
      });
  }

  return (
    <>
      <Hero text="This is the Search View" />
      <h1>State: {cityState}</h1>
      <h3>Latitude: {cityLat}</h3>
      <h3>Longitude: {cityLon}</h3>
    </>
  );
};

export default SearchView;
