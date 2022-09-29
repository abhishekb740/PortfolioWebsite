import React from 'react'
import "./Resume.css";
import Footer from "../Footer/Footer"
import Resumeimg from "../../Resume.png";

const Resume = () => {
  return (
    <>
      <div className='resume'>
        <img src={Resumeimg} style={{
          display: "block",
          height: "80%"
        }}/>
      </div>
    </>
  )
}

export default Resume;