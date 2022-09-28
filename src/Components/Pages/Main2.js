import React from "react";
import { Link } from "react-router-dom";
import "./Main2.css";
import Footer from "../Footer/Footer"
const Main2 = () => {
  return (
    <div className="container">
      <div className="ques">Looking for a Web-Developer?</div>
      <div className="sol ">
        I am a Web-Developer and Programmer from Pune. I make Web-Applications
        using React.js. ✌️
      </div>
      <button className="btn hover:animate-none animate-pulse antialiased border border-slate-300 transition ease-in-out delay-50 bg-slate-500 hover:-translate-y-1 hover:scale-110 hover:bg-#10b981-500  ">
        <Link
          to="/home/about"
          style={{ textDecoration: "none" }}
          className="link-about"
        >
          About Me
        </Link>
      </button>
      <div>
      <Footer />
      </div>
    </div>
  );
};

export default Main2;
