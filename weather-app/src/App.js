import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import HomeView from "./components/HomeView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchView from "./components/SearchView";
import AboutView from "./components/AboutView";
import NotFound from "./components/NotFound";

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
            element={<SearchView searchResults={searchResults} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
