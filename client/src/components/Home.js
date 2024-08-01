import React from "react";
import homeImage from "../assets/Mackies-truck.jpg";

const Home = () => {
  return (
    <div className="welcomePageDiv universal-margin">
      <h1 className="welcomePageHeader">Welcome to Mackies Shave Ice!</h1>
      <div className="welcomePageSectionDivs">
        <p className="welcomePageSections">
          Thank You For Choosing Mackies! We Are Local People Trying To Serve
          The Best Quality Product At The Most Reasonable Price Possible! We are
          currently located at the Harrogate Plant and Produce.
        </p>
      </div>
      <div className="welcomePageSectionDivs">
        <p className="welcomePageSections">
          <img src={homeImage} alt="Mackies shave ice" className="homeImage" />
        </p>
      </div>
      <div className="welcomePageSectionDivs">
        <p className="welcomePageSections">
          This Is Our Permanent Location!! No Need To Chase Around, We Will Be
          Right Here In This Convenient Location! You Can Follow Us On Facebook
          For All Our Updates &amp; Specials Like Our Page &amp; Let Us Know How
          We Are Doing
        </p>
      </div>
    </div>
  );
};

export default Home;
