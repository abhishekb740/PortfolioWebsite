import React from "react";
import InstaLogo from "./icons8-instagram-35.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="logos links">
      <div>
        <a href="https://github.com/abhishekb740" target="_blank">
          <img
          alt="github"
            src="https://ekaterine-mitagvaria.vercel.app/static/media/github-pink.fca99db0960eca67e137a0d38741f5d2.svg"
            className="githubLogo log transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
          ></img>
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/abhishek-bhagat740/"
          target="_blank"
        >
          <img
            href="https://www.linkedin.com/in/abhishek-bhagat740/"
            className="Linkedinlogo log transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
            src="https://ekaterine-mitagvaria.vercel.app/static/media/linkedin-pink.0170ec93bbe0fd3707cfa7e1666d0de5.svg"
            alt="linkedin"
          />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/abhishek_flamekaiser/"
          target="_blank"
        >
          <img
            alt="Instagram"
            className="log transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
            src={InstaLogo}
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
