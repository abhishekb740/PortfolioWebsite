import React from "react";
import "./Header2.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const Header2 = () => {

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand int " href="#">
          <Link className="title" style={{ textDecoration: "none" }} to="/home">
            My Portfolio
          </Link>
        </a>
        <button
          className="navbar-toggler ml-auto custom-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav  ml-auto">
            <li className="nav-item ">
              <a className="nav-link transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110" href="#">
                <Link to="./home" style={{ textDecoration: "none" }} className='lk' >
                  Home
                </Link>
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110" href="#">
                <Link to='./home/projects' style={{ textDecoration: "none" }} className='lk' >Projects</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110" href="#">
                <Link to='./home/resume' style={{ textDecoration: "none" }} className='lk' >Resume</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110" href="#">
                <Link to="./home/contact" style={{ textDecoration: "none" }} className='lk' >Contact</Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header2;
