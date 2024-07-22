import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>We’d love to hear from you</h1>
        <h4>
          Whether you’re curious about features, a paid subscription, our future
          roadmap, or even more information about Sauron, lord of the One
          Ring—we’re ready to answer any and all questions.
        </h4>
      </header>
      <div className="contact-sections">
        <div className="contact-box">
          <h1>Features</h1>
          <p>
            We offer a few features, primarily known for showing workout cards
            and possibly rolling dice, and flipping cards in the future to work
            as a fitness game.
          </p>
          <p>
            If you would like to contact us about ideas or more information,
            please call our main office at (555)-Lucky-Fitness.
          </p>
        </div>
        <div className="contact-box">
          <h1>Support</h1>
          <p>
            If you need support in the app, please call our main office at
            (555)-Lucky-Fitness.
          </p>
          <p>
            If you want to support us in our endeavors to make more apps like
            this, be sure to send positive energy to our instructor, to
            influence him to give us a good grade on this app!
          </p>
        </div>
        <div className="contact-box">
          <h1>Roadmap</h1>
          <p>
            We are planning to add dice functionality and a card flip
            opportunity in the future, and we are not planning to make this a
            paid service.
          </p>
          <p>
            If you would like to add your suggestions to our roadmap for future
            updates, please call our main office at (555)-Lucky-Fitness.
          </p>
        </div>
        <div className="contact-box">
          <h1>Sauron, Lord of the One Ring</h1>
          <p>
            After half a century of historical events. Lucky Fitness and its
            team, all believe that Sauron is relaxing off the coast of Puerto
            Rico, and is enjoying refreshing margaritas on the beach.
          </p>
          <p>
            If you have a different theory on what Sauron is up to these days,
            we would love to hear it by giving us a call at our main office at
            (555)-Lucky-Fitness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
