import React from "react";
import "./Projects.css";
import Card from "../Card/Card";
import { Container } from "@mui/material";
const Projects = () => {
  return (
    <div >
      <h1 className="heading"> Projects</h1>
      <Container>
        <a 
          target="_blank"
          href="https://abhishekb740.github.io/Food-order-app/"
        >
          <Card
            className=" proj log transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
            title="Food Order App" content="A simple Food Order Application"
          />
        </a>
        <a
          target="_blank"
          href="https://abhishekb740.github.io/Crypto_curr_tracker/"
        >
          <Card
            className="proj log transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
            title="Crypto Currency Tracker" content="Live Crypto Currency price tracker"
          />
        </a>
        <a target="_blank" href="https://abhishekb740.github.io/UserInfo/">
          <Card
            className="proj log transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
            title="User-Info" content="Displaying details of the User"
          />
        </a>
        <a
          target="_blank"
          href="https://abhishekb740.github.io/interactive-rating-component/" 
        >
          <Card
            className="proj log transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
            title="Interactive Rating Component" content="A simple Rating component"
          />
        </a>
        <a
          target="_blank"
          href="https://abhishekb740.github.io/Huddle-landing-page/"
        >
          <Card
            className="proj log transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
            title="Huddle Landing Page" content="A simple Huddle landing page"
          />
        </a>
        <a
        target="_blank" href="https://abhishekb740.github.io/NFT_Card/"
        >
          <Card
            className="proj log transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
            title="NFT-Card" content="NFT-card Component"
          />
        </a>

        {/* <div className="crypto_curr_tracker proj log transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110" >
        <a target="_blank" href="https://abhishekb740.github.io/Crypto_curr_tracker/" >
          Crypto Currency Tracker
        </a>
      </div>
      <div className="food-order-app proj log transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
        <a
          target="_blank"
          href="https://abhishekb740.github.io/Food-order-app/"
        >
          Food-Order-App
        </a>
      </div>
      <div className="calci proj log transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
        <a
          target="_blank"
          href="https://abhishekb740.github.io/Calculator_React/"
        >
          Calculator
        </a>
      </div>
      <div className="userinfo proj log transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
        <a target="_blank" href="https://abhishekb740.github.io/UserInfo/">
          User-Info
        </a>
      </div>
      <div className="rating-component proj log transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
        <a
          target="_blank"
          href="https://abhishekb740.github.io/interactive-rating-component/"
        >
          Interactive Rating Component
        </a>
      </div>
      <div className="huddle-landing-page proj log transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
        <a
          target="_blank"
          href="https://abhishekb740.github.io/Huddle-landing-page/"
        >
          Huddle Landing Page
        </a>
      </div>
      <div className="NFT-Card proj log transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
        <a target="_blank" href="https://abhishekb740.github.io/NFT_Card/">
          NFT-Card
        </a>
      </div>
      <div className="QR-component proj log transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
        <a target="_blank" href="https://abhishekb740.github.io/CSS_Card/">
          QR-Component
        </a>
      </div>
    </div> */}
      </Container>
    </div>
  );
};

export default Projects;
