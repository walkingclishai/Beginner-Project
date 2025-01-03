import "./Sign in.css";
import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function SignIn({ admin }) {
  const [invisible, setInvisible] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cookie, setCookie] = useCookies(["email"]);
  const navigate = useNavigate();

  const handleSwitch = () => {
    setInvisible(!invisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/signin", {
      email,
      password,
    });
    if (res.data.message == "Log in Successfully") {
      setCookie("email", email, { path: "/" });
      admin(res.data.admin);
      navigate("/");
      window.location.reload();
    }
    setError(res.data.message);
  };

  return (
    <div id="signin">
      <svg
        className="wave"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="471"
        height="600"
      >
        <defs>
          <pattern
            id="image-mask"
            patternUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <image
              href="/girl icon.png"
              x="-80"
              y="0"
              width="150%"
              height="100%"
            />
          </pattern>
        </defs>
        <path
          d="M0 0 C155.43 0 310.86 0 471 0 C471 198 471 396 471 600 C315.57 600 160.14 600 0 600 C0 402 0 204 0 0 Z "
          fill="url(#image-mask)"
          transform="translate(0,0)"
        />
        <path
          d="M0 0 C155.43 0 310.86 0 471 0 C471 0.33 471 0.66 471 1 C327.45 1 183.9 1 36 1 C38.31 8.59 40.62 16.18 43 24 C44.17705384 27.93518991 45.35077995 31.86938338 46.5 35.8125 C46.78278809 36.78131104 47.06557617 37.75012207 47.35693359 38.74829102 C49.8605418 47.3921606 52.19788957 56.07809049 54.51342773 64.77392578 C56.11480572 70.77197849 57.77472246 76.74248772 59.5625 82.6875 C65.29491782 101.93037565 69.71362571 121.4082036 73.76747131 141.06077576 C74.62677136 145.22279625 75.5092934 149.37889051 76.4140625 153.53125 C79.39019974 167.24852695 81.86458298 180.98009703 83.71557617 194.89544678 C84.01975126 197.14614658 84.33858561 199.39450996 84.65820312 201.64306641 C91.44679002 250.09485975 92.61773585 301.5690563 85 350 C84.78336195 351.4192454 84.56689272 352.83851658 84.35058594 354.2578125 C79.61683014 384.88972345 72.85173752 415.30037459 64 445 C63.51532785 446.65095446 63.03094182 448.30199295 62.546875 449.953125 C61.3461812 454.02145519 60.11769796 458.08073657 58.87597656 462.13671875 C58.23485799 464.23232595 57.59658585 466.32880455 56.95996094 468.42578125 C55.81244412 472.20231792 54.65705746 475.97637638 53.5 479.75 C52.96656982 481.50715332 52.96656982 481.50715332 52.42236328 483.29980469 C49.84726736 491.64875761 46.88733601 499.79489802 43.77508545 507.95288086 C42.49604055 511.33103392 41.25818822 514.7240619 40.01953125 518.1171875 C33.03323872 537.20912081 25.91033997 556.24622214 18.6875 575.25 C18.26159576 576.37146423 17.83569153 577.49292847 17.3968811 578.64837646 C16.18659018 581.83383901 14.97457258 585.01863751 13.76171875 588.203125 C13.3956955 589.16592377 13.02967224 590.12872253 12.65255737 591.12069702 C12.3169278 592.00029083 11.98129822 592.87988464 11.63549805 593.78613281 C11.34241257 594.55532043 11.04932709 595.32450806 10.74736023 596.11700439 C10 598 10 598 9 600 C6.03 600 3.06 600 0 600 C0 402 0 204 0 0 Z "
          fill="#FEFEFE"
          transform="translate(0,0)"
        />
      </svg>

      <div id="signin-container">
        <h1>Hello,</h1>
        <p>Please sign in here.</p>

        <form>
          <div className="input-container">
            <i className="login__icon fas fa-user"></i>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="input-container">
            <i className="login__icon fas fa-lock"></i>
            <input
              type={invisible ? "password" : "text"}
              id="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {invisible ? (
              <svg
                onClick={handleSwitch}
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 -5 24 24"
              >
                <path
                  fill="#545454"
                  d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.8 11.8 0 0 1-4 5.19l-1.42-1.43A9.86 9.86 0 0 0 20.82 12A9.82 9.82 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.82 9.82 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13"
                />
              </svg>
            ) : (
              <svg
                onClick={handleSwitch}
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 -50 256 256"
              >
                <path
                  fill="#545454"
                  d="M245.48 125.57c-.34-.78-8.66-19.23-27.24-37.81C201 70.54 171.38 50 128 50S55 70.54 37.76 87.76c-18.58 18.58-26.9 37-27.24 37.81a6 6 0 0 0 0 4.88c.34.77 8.66 19.22 27.24 37.8C55 185.47 84.62 206 128 206s73-20.53 90.24-37.75c18.58-18.58 26.9-37 27.24-37.8a6 6 0 0 0 0-4.88M128 194c-31.38 0-58.78-11.42-81.45-33.93A134.8 134.8 0 0 1 22.69 128a134.6 134.6 0 0 1 23.86-32.06C69.22 73.42 96.62 62 128 62s58.78 11.42 81.45 33.94A134.6 134.6 0 0 1 233.31 128C226.94 140.21 195 194 128 194m0-112a46 46 0 1 0 46 46a46.06 46.06 0 0 0-46-46m0 80a34 34 0 1 1 34-34a34 34 0 0 1-34 34"
                />
              </svg>
            )}
          </div>
          {error && <div id="error">{error}</div>}
          <a href="" target="_blank">
            Forgot Password?
          </a>

          <button
            id="login"
            disabled={!email || !password}
            className={email && password ? "active" : "inactive"}
            onClick={handleLogin}
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
