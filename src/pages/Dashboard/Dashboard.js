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
  const [animation, setAnimation] = useState("");

  const handleSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === titles.length - 1 ? 0 : prevIndex + 1
    );
  };

  const onNext = () => {
    setAnimation("right");
    setTimeout(() => {
      setPointer((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
      setAnimation("leftIn");
    }, 300);
  };

  const onPrev = () => {
    setAnimation("left");
    setTimeout(() => {
      setPointer((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
      setAnimation("rightIn");
    }, 300);
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

          {slides.map(
            (item, index) =>
              index == pointer && (
                <div id="slider-container">
                  <div className="picture">
                    <svg
                      className={animation}
                      version="1.1"
                      viewBox="0 0 1932 2048"
                      width="1280"
                      height="1280"
                      xmlns="http://www.w3.org/2000/svg"
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
                            x="-400"
                            y="200"
                            width="100%"
                            height="100%"
                          />
                        </pattern>
                      </defs>
                      <path
                        transform="translate(0)"
                        d="m0 0h1932v2048h-1932z"
                        fill="url(#image-mask)"
                      />
                      <path
                        transform="translate(0)"
                        d="m0 0h1932v2048h-1932zm179 265-1 36-3 728-1 155-1 350-1 249v191h75l766-4 425-2 52-1v-82l-3-457-1-186-2-313-2-342-1-138-1-176-1-1-42-1-379-1-93-1-199-1-103-1-317-1-124-1z"
                      />
                      <path
                        transform="translate(0)"
                        d="m0 0h1932v2048h-1932zm405 54-29 1-31 4-29 6-27 7-28 10-25 11-18 10-15 10-13 10-10 9-13 13-10 13-10 15-5 5-5 4-6 9-5 14-5 23-4 27-6 52-4 57-6 106-2 45-4 120-3 118-2 116-2 148-1 137v298l1 136 1 90 4 168 3 60 3 37 3 14 9 21 7 18 4 12 5 7 7 4 5 1h116l568-3 425-2h165l7 4 4 1h8l10-5 1-1 73-1 10-4 7-8 2-5 1-31v-70l4-4 14-9 21-12 18-8 15-5 17-4 16-2 74-1 51-1 8-3 8-8 2-4v-202l-3-466-1-183-3-464-2-336-1-101-4-10-8-7-6-2-46-1-324-2-287-2-75-1-292-1h-115l-177-1z"
                        fill="#fff"
                      />
                      <path
                        transform="translate(1648,144)"
                        d="m0 0h2l1 1658-4 2-31 5-24 6-20 7-16 7-19 11h-3l-2-283-1-181-1-121-2-360-1-155-1-121-1-204-1-165-2-10-4-6-5-4-5-2-10-1h-18l2-4 13-10 18-14 17-12 13-8 16-5 29-8 38-13z"
                        fill="#afdcee"
                      />
                      <path
                        transform="translate(404,119)"
                        d="m0 0h62l105 2 171 2 180 3 101 1 114 2 174 2 54 1 169 2-4 3-16 8-15 10-19 14-14 11-11 9-13 11-10 8-10 9-8 7-6 2-202-1-271-3-197-1-460-4-57-1 2-4 15-16 14-12 13-9 13-8 25-14 27-13 24-9 25-7z"
                        fill="#afdcee"
                      />
                      <path
                        transform="translate(1695,108)"
                        d="m0 0h33l1 1 1 131 1 188 3 457 2 360 2 289 1 187v82l-4 1h-39l-1-1z"
                        fill="#afdcee"
                      />
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
              )
          )}

          {/* third element*/}

          <svg
            onClick={onNext}
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
