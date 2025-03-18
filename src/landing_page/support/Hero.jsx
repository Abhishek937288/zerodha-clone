import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className=" p-3" id="supportWrapper">
        <h4> Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-3 mb-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            className="fs-6"
            type="text"
            id="supportHero input"
            placeholder="Eg.how do i activate F&O,why is my order is getting rejected..."
          />
          <br />
          <a href="" className="me-4">
            Track account opening
          </a>
          <a href="" className="me-4">
            Track segment activation
          </a>
          <a href="" className="me-4">
            Intraday margins
          </a>
          <a href="" className="me-4">
            kite user manual
          </a>
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">1. mcx-crude-option-contract-expiry-march-2025</a>
            </li>
            <li>
              <a href="">2.current-takeovers-and-delisting-march-2025</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
