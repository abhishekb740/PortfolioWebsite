import React from "react";
import { Link } from "react-router-dom";
import './Learn-more.css';
const Learn_more = () => {
  return (
    <div className="myself">
      <div className="quote animate-bounce">
        “We don't just sell websites, we create websites that SELL.”
      </div>
      <div className="heading">
        Hii, I'm Abhishek Bhagat pursuing B.Tech from Indian Institute of
        Information and Technology, Sricity, India. Currently I am a 2nd-year
        undergraduate Student.
      </div>
      <div className="para1">
        <p>
          I strive to create elegant Solutions that would surprise and delight
          the users. I discover ways to improve the website efficiency by
          writing the code efficiently. Website without visitors is like a ship lost in the
          horizon. ✌️
        </p>
      </div>
      <div className="para2">
        "Your website is the center of your digital eco-system, like a brick and
        mortar location, the experience matters once a customer enters, just as
        much as the perception they have of you before they walk through the
        door."
      </div>
      <div className="para3">I think I can be one of the best Web-Developer in the world!</div>
      <div className="last-para">
        <span className="ending">Got an Interesting Project?</span>
        <button className="btn-contact btn animate-pulse antialiased border border-slate-300 transition ease-in-out delay-50 bg-slate-500 hover:-translate-y-1 hover:scale-110 hover:bg-#10b981-500  hover:animate-none" > <Link style={{ textDecoration: "none" }} to="/home/contact" className="link-contact " > Let's have a coffee!</Link></button>
      </div>
    </div>
  );
};

export default Learn_more;
