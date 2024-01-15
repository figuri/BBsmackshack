import React from "react";

const About = () => {
  return (
    <div>
      <div className="brodie">
        <p>Meet our inspiration, Brodie Brown.</p>
        <img src="../../pub/images/brodieupclose.jpg" alt="Brodie Brown" />
        <p>Scroll down.</p>
      </div>
      <section className="about-us-section">
        <div className="about-cards">
          <div className="design">
            <h2>Design.</h2>
            <p>
              We believe that design is the most important aspect of any
              product. never more so than with food. simplicity rules for us.
              BB's is all about quick, and quality, and quantity.
            </p>
          </div>
          <div className="food">
            <h2>Food.</h2>
            <p>
              Do you ever miss moms cooking, dads grilling, or grandmas baking?
              We do too. That's why we created BB's. We wanted to bring back the
              feeling of home, and the taste of home. We want you to feel like
              you can bring your home cooking to any event; but leave all the
              hard work to us.
            </p>
          </div>
          <div className="people">
            <h2>People.</h2>
            <p>
              Owned and operated by Jeff Brown and his family. local to the east
              bay where he was born and raised. Jeff feels a deep connection to
              the community. This is why he has made it his mission to bring
              smiles to the faces of every customer who comes his way.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
