import Hero from "./Hero";
import "../styles/HomeView.css";

const HomeView = () => {
  return (
    <>
      <Hero text="Home" />
      <div className="home-container">
        <div className="container py-5">
          <div className="home-message">
            <p className="home-text">
              Search for your city to get weather info...
            </p>
          </div>

          <div className="container text-center my-5">
            <div className="row">
              <div className="col">
                <div className="sun-image"></div>
              </div>
              <div className="col">
                <div className="storm-image"></div>
              </div>
              <div className="col">
                <div className="rain-drop-image"></div>
              </div>
              <div className="col">
                <div className="wind-image"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeView;
