import React from "react";

function Hero() {
  return (
    <div className="container p-4 mb-4 mt-4">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-4"
          style={{ width: "60%", margin: "0 auto" }}
        />
        <h1 className="mt-4 fs-1"> Invest in everything </h1>
        <p className="fs-5">
          Online platform to invest in stocks, derivatives, mutual funds,and
          more
        </p>
        <button
          className="p-1 btn btn-primary fs-5 mb-4"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
