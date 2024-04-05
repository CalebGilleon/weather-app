import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import HomeView from "./components/HomeView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchView from "./components/SearchView";
import AboutView from "./components/AboutView";

//install react-router-dom
function App() {
  const [searchResults, setSearchResults] = useState("");

  return (
    <div>
      <BrowserRouter>
        <Navbar setSearchResults={setSearchResults} />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/about" element={<AboutView />} />
          <Route
            path="/search"
            element={
              <SearchView searchResults={searchResults} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
