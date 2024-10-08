function Footer() {
  return (
    <div id="footer">
      <svg
        className="footer-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 224 1440 96"
      >
        <path
          fill="#afdcee"
          fillOpacity="1"
          d="M0,256L48,261.3C96,267,192,277,288,266.7C384,256,480,224,576,224C672,224,768,256,864,256C960,256,1056,224,1152,224C1248,224,1344,256,1392,272L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>{" "}
      </svg>

      <div id="footer-section">
        <ul id="contact-details">
          <li>
            <i className="fas fa-phone"></i>+31 20 123 4567
          </li>
          <li>
            <i className="fas fa-envelope"></i>contact@example.com
          </li>
        </ul>

        <p>© 2024 "Company Name". All rights reserved.</p>

        <ul id="contact-links">
          <li>
            <a href="" target="_blank">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
