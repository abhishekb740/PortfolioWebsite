import React from 'react'
import "./Resume.css";
import Footer from "../Footer/Footer"
import Resumeimg from "../Abhishek Bhagat_Resume_page-0001.jpg";

const Resume = () => {
  return (
    <>
      <div className='resume'>
        <img src={Resumeimg} style={{
          display: "block",
          height: "50%"
        }}/>
      </div>
    </>
  )
}

export default Resume;