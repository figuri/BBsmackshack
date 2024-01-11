import React from "react";

export default function Home() {
  return (
    <section className="homepage">
      <div className='opening'>
        <h1 className="slogan">Brodie loves it, So will you.</h1>
      </div>
      <div>
      <p className="motto">
          Why BB's? Simple; we will cater your hearts desires, from jeffs mouth
          watering barbecue sauce and steak, to ambers heart warming passole.
          The possbilities are endless for your events needs.<strong>See links above for more, or see below for FOOD.</strong>
        </p>
      </div>
      <div className="Menu">
        <ul>
          <h2>What we offer.</h2>
          <li></li>
          <li className="menu-item">
            <h3>Barbecue meats.</h3>
            <p>
              No wood fire, Brought to you fresh and juicy we have: Steak, Ribs,
              Pork, and Sausages.
            </p>
          </li>
          <li className="menu-item">
            <h3>Seafood</h3>
            <p>
              From Crab, to shrimp and beyond, we will bring you fresh fish and
              sauces seasonings to spice up your event. Some of our included
              fish offered are: salmon, cod, tuna, oysters, muscles. If you dont
              see your fish here ask us !{" "}
            </p>
          </li>
          <li className="menu-item">
            <h3>Tacos</h3>
            <p>
              {" "}
              tacos made with fresh local ingredients: veggies, protien of your
              choice, and cheese/sauces.
            </p>
          </li>
          <li className="menu-item">
            <h3>AND MORE!</h3>
            <p>
              BBs Smack Shack lives to make catering events lively and fun with
              a food service you can count on, if you have a request you dont
              see here speak with us and inquire, we aim to meet your needs !
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
