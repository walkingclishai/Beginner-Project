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
    {
      title: "The Great Gatsby",
      cover: "/The great gatsby.jpg",
      quote:
        "I hope she’ll be a fool—that’s the best thing a girl can be in this world, a beautiful little fool.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slide, setSlide] = useState(false);
  const [pointer, setPointer] = useState(0);

  const handleSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === titles.length - 1 ? 0 : prevIndex + 1
    );
  };

  const onNext = () => {
    setPointer((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const onPrev = () => {
    setPointer((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
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

      <section id="first-section">
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
      </section>

      <section id="second-section">
        <div id="slider">
          {/*first element*/}
          <svg
            onClick={onPrev}
            className="left"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
          >
            <path
              fill="#5484ac"
              d="M10.843 13.069L6.232 8.384a.546.546 0 0 1 0-.768l4.61-4.685a.55.55 0 0 0 0-.771a.53.53 0 0 0-.759 0l-4.61 4.684a1.65 1.65 0 0 0 0 2.312l4.61 4.684a.53.53 0 0 0 .76 0a.55.55 0 0 0 0-.771"
            />
          </svg>

          {/* second element*/}

          {slides.map((item, index) =>
            index == pointer ? (
              <div id="slider-container">
                <div className="picture">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="60 469 1924 1165"
                  >
                    <defs>
                      <pattern
                        id="image-mask"
                        patternUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <image
                          href={item.cover}
                          x="-310"
                          y="0"
                          width="130%"
                          height="130%"
                        />
                      </pattern>
                    </defs>
                    <path
                      transform="translate(977,469)"
                      d="m0 0h49l35 3 34 5 31 7 30 9 25 10 25 12 19 11 17 12 13 11 12 11 10 11 13 18 10 18 8 21 4 17 2 15v29l-3 22-4 15 8-7 17-13 17-9 17-6 15-3 12-1h11l21 3 16 5 19 9 14 10 12 11 10 12 9 14 7 14 6 18 5 25 1 4 10-11 7-8 5-6 8-7 7-7 10-8 15-11 15-9 15-8 25-9 23-5 8-1h40l24 4 26 8 17 7 16 8 16 9 19 13 14 11 15 13 8 8 5 4 7 8 14 15 11 14 14 19 11 17 11 19 12 23 12 28 10 30 6 24 4 24 2 21v27l-2 19-5 25-6 18-8 18-11 17-10 13-10 11-8 7-13 10-13 8-21 11-21 8-24 7-31 6-11 1 4 14 2 15v13l-3 17-6 16-8 14-9 11-10 10-11 8-11 7-21 9-19 5-13 2h-29l-20-4-16-6-13-7-13-10-5-4v-2h-2l-1 26-3 24-5 20-7 20-12 25-12 18-10 13-11 12-17 17-14 11-12 9-17 11-25 14-23 11-34 13-30 9-34 8-29 5-38 4-18 1h-26l-29-2-40-6-45-8-38-8-44-11-35-11-22-8-25-11-21-11-12-8-13-10-10-9-9-10-9-14-5-11-3-12-1-15-37 10-25 6-13 2h-23l-12-3-9-5-9-9-5-10-3-12v-31l1-6-15 16-13 11-15 10-27 14-26 10-28 8-29 6-28 4-32 3h-68l-33-3-22-3-28-5-25-6-27-8-26-10-25-12-16-9-15-11-13-11-10-10-13-17-8-16-5-15-3-17v-18l4-22 1-4-15-1-15-4-14-6-13-9-8-7-11-14-9-17-5-18-1-15 3-16 5-12 10-13 13-9 12-5 12-3 11-2-8-8-9-11-11-13-15-22-12-21-9-19-9-25-6-25-3-19-1-11v-34l3-24 5-23 9-27 13-27 12-19 11-14 9-10 16-16 17-13 13-8 15-8 18-7 25-6 21-2h10l21 2 22 5 22 8 23 12 16 11 14 11 15 13 1 2h2l4-17 5-12 6-11 9-11 7-7 14-10 16-8 20-6 24-3h12l19 2 22 5 19 7 16 8 14 8 2 1 7-25 7-21 9-21 11-22 13-21 11-15 11-14 15-16 15-15 8-7 15-12 20-14 18-11 24-13 24-11 27-10 29-9 30-7 36-6 29-3z"
                      fill="url(#image-mask)"
                    ></path>
                    <path
                      transform="translate(977,469)"
                      d="m0 0h49l35 3 34 5 31 7 30 9 25 10 25 12 19 11 17 12 13 11 12 11 10 11 13 18 10 18 8 21 4 17 2 15v29l-3 22-4 15 8-7 17-13 17-9 17-6 15-3 12-1h11l21 3 16 5 19 9 14 10 12 11 10 12 9 14 7 14 6 18 5 25 1 4 10-11 7-8 5-6 8-7 7-7 10-8 15-11 15-9 15-8 25-9 23-5 8-1h40l24 4 26 8 17 7 16 8 16 9 19 13 14 11 15 13 8 8 5 4 7 8 14 15 11 14 14 19 11 17 11 19 12 23 12 28 10 30 6 24 4 24 2 21v27l-2 19-5 25-6 18-8 18-11 17-10 13-10 11-8 7-13 10-13 8-21 11-21 8-24 7-31 6-11 1 4 14 2 15v13l-3 17-6 16-8 14-9 11-10 10-11 8-11 7-21 9-19 5-13 2h-29l-20-4-16-6-13-7-13-10-5-4v-2h-2l-1 26-3 24-5 20-7 20-12 25-12 18-10 13-11 12-17 17-14 11-12 9-17 11-25 14-23 11-34 13-30 9-34 8-29 5-38 4-18 1h-26l-29-2-40-6-45-8-38-8-44-11-35-11-22-8-25-11-21-11-12-8-13-10-10-9-9-10-9-14-5-11-3-12-1-15-37 10-25 6-13 2h-23l-12-3-9-5-9-9-5-10-3-12v-31l1-6-15 16-13 11-15 10-27 14-26 10-28 8-29 6-28 4-32 3h-68l-33-3-22-3-28-5-25-6-27-8-26-10-25-12-16-9-15-11-13-11-10-10-13-17-8-16-5-15-3-17v-18l4-22 1-4-15-1-15-4-14-6-13-9-8-7-11-14-9-17-5-18-1-15 3-16 5-12 10-13 13-9 12-5 12-3 11-2-8-8-9-11-11-13-15-22-12-21-9-19-9-25-6-25-3-19-1-11v-34l3-24 5-23 9-27 13-27 12-19 11-14 9-10 16-16 17-13 13-8 15-8 18-7 25-6 21-2h10l21 2 22 5 22 8 23 12 16 11 14 11 15 13 1 2h2l4-17 5-12 6-11 9-11 7-7 14-10 16-8 20-6 24-3h12l19 2 22 5 19 7 16 8 14 8 2 1 7-25 7-21 9-21 11-22 13-21 11-15 11-14 15-16 15-15 8-7 15-12 20-14 18-11 24-13 24-11 27-10 29-9 30-7 36-6 29-3zm18 3-30 1-29 3-30 5-27 6-35 10-27 10-29 13-24 13-22 14-17 13-11 9-14 12-16 16-9 11-7 8-13 18-12 19-14 27-10 25-8 25-4 17v2l-9-5-16-9-17-8-15-5-23-5-12-1h-21l-19 3-16 5-17 8-13 10-7 6-10 13-6 11-4 10-3 13v8l3 3 1 3-4-1v14l4 18 6 18-4-3-5-15-4-19-1-17-14-14-11-9-13-10-18-11-15-8-15-6-22-6-18-3h-29l-19 3-26 8-18 8-16 10-12 9-14 12-11 11-9 11-11 15-9 15-8 16-8 19-6 19-5 23-3 25v21l3 31 6 27 10 29 11 23 10 17 11 16 11 14 13 15 11 12 2 4h-14l-17 4-16 8-10 9-9 14-3 9-1 6v16l4 17 8 16 6 9 11 12 10 8 15 8 12 4 19 3h7l-3 9-3 17v25l4 18 6 15 9 14 8 10 11 12 11 9 13 10 21 12 25 12 28 10 23 7 31 7 29 5 38 4 21 1h43l32-2 31-4 26-5 24-6 30-10 24-11 19-11 12-9 14-12 9-10 7-9 2-1-3 24v20l4 16 5 9 7 7 10 5 7 2h27l25-5 40-11 10-2 4 25 5 13 7 12 12 14 11 10 17 12 18 10 27 13 35 13 30 9 34 9 47 10 46 8 33 5 21 2h50l33-3 32-5 36-8 27-8 28-10 23-10 17-8 24-14 12-8 16-12 13-11 12-11 14-15 12-16 9-14 10-19 8-21 5-18 3-16 1-9 1-20v-19l-1-2 4 1 2 4 9 9 15 11 17 8 18 5 14 2h19l20-3 15-4 16-7 11-6 14-10 12-11 11-15 9-19 4-18v-19l-5-25-2-4 12-1 36-7 26-8 20-8 22-12 14-10 13-11 12-12 12-16 10-18 7-16 6-19 4-22 1-8v-42l-2-18-5-26-7-25-9-26-11-25-13-25-14-23-12-17-10-13-9-11-10-11-7-8-16-16-8-7-11-9-17-13-19-12-16-9-23-10-22-7-19-4-16-2h-30l-20 3-25 7-18 8-17 9-16 11-16 13-12 11-12 12-9 11-9 10-2 1v-8l-3-18-5-19-8-19-7-12-9-12-10-11-14-11-14-8-13-6-15-4-12-2h-25l-19 4-19 7-14 8-13 10-12 11-5 4-1-2 6-25 3-23v-21l-3-21-7-24-11-23-11-16-11-13-7-8-8-7-13-11-20-14-21-12-22-10-26-10-35-10-29-6-28-4-22-2-27-1z"
                      fill="#5484ac"
                    ></path>
                  </svg>
                </div>
                <div id="info-container">
                  <h2>{item.title}</h2>
                  <p>
                    <i className="fas fa-quote-left"></i>
                    {item.quote}
                    <i className="fas fa-quote-right"></i>
                  </p>
                  <a>Take the quiz</a>
                </div>
              </div>
            ) : (
              <></>
            )
          )}

          {/* third element*/}

          <svg
            onClick={onNext}
            className="right"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
          >
            <path
              fill="#5484ac"
              d="m5.157 13.069l4.611-4.685a.546.546 0 0 0 0-.768L5.158 2.93a.55.55 0 0 1 0-.771a.53.53 0 0 1 .759 0l4.61 4.684a1.65 1.65 0 0 1 0 2.312l-4.61 4.684a.53.53 0 0 1-.76 0a.55.55 0 0 1 0-.771"
            />
          </svg>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
