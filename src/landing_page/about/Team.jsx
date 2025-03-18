import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-2 border-top">
        <h1 className="text-center mb-3">People</h1>
      </div>

      <div
        className="row p-2 text-muted"
        style={{ lineHeight: "1.4", fontSize: "1.2em" }}
      >
        <div className="col-6 p-2 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt=""
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-2 mb-1">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-2 text-muted">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
          He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
          Playing basketball is his zen.
          </p>
          <p>
          Connect on <a href="" style={{textDecoration:"none"}}> Homepage </a> / <a href="" style={{textDecoration:"none"}}> TradingQnA </a> / <a href="" style={{textDecoration:"none"}}>Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
