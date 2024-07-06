import Hero from "./Hero";
import "../styles/AboutView.css";

const AboutView = () => {
  return (
    <>
      <Hero text="About" />
      <div className="about-body">
        <div className="about-container">
          <h1>About me...</h1>
          <ul>
            <li>
              <p className="list-points">
                Hi! My name is Caleb Gilleon and I'm a computer science student
                at Georgia Southern University.
              </p>
            </li>
          </ul>
          <h1>About this project...</h1>
          <ul>
            <li>
              <p className="list-points">
                React framework used to create an SPA (single page application)
              </p>
            </li>
            <li>
              <p className="list-points">
                Breaks down UI into reusable components
              </p>
            </li>
            <li>
              <p className="list-points">
                Client-side routing used to navigate between home, about, and
                search pages
              </p>
            </li>
            <li>
              <p className="list-points">
                Uses Open Weather API to dynamically display current weather
                data
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutView;
