import Hero from "./Hero";
import "../styles/HomeView.css";

const HomeView = () => {
  return (
    <>
      <Hero text="Welcome to my weather app!" />
      <div className="home-container">
        <div className="container py-5">
          <div className="home-message">
            <img src="../search.png" alt="search" className="search-pic"></img>
            <p className="home-text">Search for your city to get weather info...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeView;
