import "./Dashboard.css";
import { useEffect } from "react";
import { useState } from "react";

function Dashboard() {
  const titles = [
    {
      primary: "Lorem ipsum dolor sit amet",
      secondary: "consectetur adipiscing elit",
    },
    {
      primary: "Ut enim ad minim veniam",
      secondary: "quis nostrud exercitation ullamco",
    },
    { primary: "Excepteur sint occaecat", secondary: "cupidatat non proident" },
  ];

  const slides = [
    {
      title: "The Little Prince",
      cover: "/Le petit prince.jpg",
      quote:
        "It is only with the heart that one can see rightly. What is essential is invisible to the eye.",
    },
    {
      title: "Animal Farm",
      cover: "/Animal farm.jpg",
      quote:
        "The creatures outside looked from pig to man, and from man to pig, and from pig to man again; but already it was impossible to say which was which.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slide, setSlide] = useState(false);

  const handleSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === titles.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!slide) {
    const sliderIntervall = setInterval(handleSlide, 3000);
    setSlide(true);
  }

  return (
    <div id="container">
      <div id="stars">
        <img className="star" height="40px" width="auto" src={"star.png"} />
        <img className="star" height="40px" width="auto" src={"star.png"} />
        <img className="star" height="40px" width="auto" src={"star.png"} />
        <img className="star" height="40px" width="auto" src={"star.png"} />
      </div>

      <div id="first-section">
        <svg
          className="page-svg one"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 300"
        >
          <path
            fill="#afdcee"
            fillOpacity="1"
            d="M0,256L48,261.3C96,267,192,277,288,266.7C384,256,480,224,576,224C672,224,768,256,864,256C960,256,1056,224,1152,224C1248,224,1344,256,1392,272L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div id="inner-container">
          <img src={"icon one.png"} height="auto" width="22%" />

          <div id="small-slider">
            {titles.map(
              (item, index) =>
                index == currentIndex && (
                  <div className="title-holder">
                    <h1>{item.primary}</h1>
                    <p>{item.secondary}</p>
                  </div>
                )
            )}

            <div id="circles">
              {titles.map((item, index) => (
                <div
                  id="circle"
                  className={index == currentIndex ? "filled" : "empty"}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <svg
          className="page-svg two"
          vxmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 300"
        >
          <path
            fill="#afdcee"
            fillOpacity="1"
            d="M0,256L48,261.3C96,267,192,277,288,266.7C384,256,480,224,576,224C672,224,768,256,864,256C960,256,1056,224,1152,224C1248,224,1344,256,1392,272L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Dashboard;
