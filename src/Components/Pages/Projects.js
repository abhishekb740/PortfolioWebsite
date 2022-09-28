import React from "react";
import "./Projects.css";
import Card from "../Card/Card";
import { Container } from '@mui/material';
const Projects = () => {
  return (
    <div>
      <h1 className="heading"> Projects</h1>
    <Container className="projects-main container">
      <Card title="testing" content="this card is being tested" />
      <Card title="testing" content="this card is being tested" />
      <Card title="testing" content="this card is being tested" />
      <Card title="testing" content="this card is being tested" />
      <Card title="testing" content="this card is being tested" />
      <Card title="testing" content="this card is being tested" />

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
