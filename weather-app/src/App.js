import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomeView from "./components/HomeView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchView from "./components/SearchView";
import AboutView from "./components/AboutView";

//install react-router-dom
//52a55b468amsh30c045b4169b68fp12e3e8jsn2c2316bdcf7f

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  // useEffect(() => {
  //   if(searchText) {
  //   fetch(`http://api.themoviedb.org/3/search/movie?api_key=936331d0d4df8bf835d065d4992d25a8&language=en-US&query=${searchText}&page=1&include_adult=false`)
  //   .then(response => response.json())
  //   .then(data => {
  //     setSearchResults(data.results)
  //   })
  // }
  // }, [searchText])

  return (
    <div>
      <BrowserRouter>
        <Navbar searchText={searchText} setSearchText={setSearchText} />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/about" element={<AboutView />} />
          <Route
            path="/search" element={
              <SearchView keyword={searchText} searchResults={searchResults} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
