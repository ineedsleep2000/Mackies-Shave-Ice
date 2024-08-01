import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>A little bit about us</h1>
      </header>
      <div className="about-sections">
        <div className="about-box">
          <h1>Our Story</h1>
          <p>
            We opened our food truck in Harrogate Tennessee, back in 2021 and
            are open Monday-Saturday, from Spring to Fall every year.
          </p>
        </div>
        <div className="about-box">
          <h1>Roadmap</h1>
          <p>
            We are currently planning to make more and more combination flavors
            and will be striving to have more available flavors in time.
          </p>
          <p></p>
        </div>
        <div className="about-box">
          <h1>Fun Facts</h1>
          <p>Mackies Shave Ice has up to 67 shaved ice flavors!</p>
        </div>
      </div>
    </div>
  );
};

export default About;
