import React from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import { Route, Routes, Navigate } from "react-router-dom";
import Main2 from "./Components/Pages/Main2";
import Learn_more from "./Components/Pages/Learn-more";
import Contact from "./Components/Pages/Contact";
import Projects from "./Components/Pages/Projects";
import Resume from "./Components/Pages/Resume";
import DrawerAppBar from "./Components/Header/Header";
function App() {
  return (
    <div className="body">
      <div className="portfolio">
        <DrawerAppBar/>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />}></Route>
          </Routes>
        </div>
        <div>
          <Routes>
            <Route path="/home" element={<Main2 />} exact />
          </Routes>
        </div>
        <div>
          <Routes>
            <Route path="/home/about" element={<Learn_more />} exact></Route>
          </Routes>
        </div>
        <div>
          <Routes>
            <Route path="/home/contact" element={<Contact />} exact></Route>
          </Routes>
        </div>
        <div>
          <Routes>
            <Route path="/home/projects" element={<Projects/>} exact>
            </Route>
          </Routes>
        </div>
        <div>
          <Routes>
            <Route path="/home/resume" element={<Resume/>} exact>

            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
