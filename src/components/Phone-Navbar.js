import { useState } from "react";

function Phonebar() {
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
  };

  return (
    <nav id="phone-bar">
      <img alt="logo" height="70px" width="70px" src="logo.png" />

      <div id="phone-search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607"
          />
        </svg>
        <input type="text" placeholder=" search.."></input>
      </div>

      <button onClick={toggleMenu}>{visible ? "X" : "☰"} </button>
      <ul id="phone-menu" className={visible ? "show" : ""}>
        <li>
          <a href="#">Dashboard</a>
        </li>
        <li>
          <a href="#">Course</a>
        </li>
        <li>
          <a href="#">Sign In</a>
        </li>
      </ul>
    </nav>
  );
}

export default Phonebar;
