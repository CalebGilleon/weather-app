import Hero from "./Hero";
import "../styles/NotFound.css";

const NotFound = () => {
  return (
    <>
      <Hero text={404} />
      <div className="sad-face-container">
        <div className="sad-face"></div>
      </div>
      <div className="not-found-message">
        Oops! The page you're looking for doesn't exist
      </div>
    </>
  );
};

export default NotFound;
