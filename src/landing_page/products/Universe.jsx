import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p className="mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media\images\smallcaseLogo.png" />
          <p className="text-small text-muted p-3">
            Thematic investment platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\images\streakLogo.png" style={{ width: "50%" }} />
          <p className="text-small text-muted p-2">Algo & strtegy platform</p>
        </div>
        <div className="col-4 p-3 mt-5 ">
          <img src="media\images\sensibullLogo.svg" style={{ width: "60%" }} />
          <p className="text-small text-muted p-4">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img
            src="media\images\zerodhaFundhouse.png"
            style={{ width: "60%" }}
          />
          <p className="text-small text-muted p-2">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src="media\images\goldenpiLogo.png" style={{ width: "60%" }} />
          <p className="text-small text-muted p-2">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src="media\images\dittoLogo.png" style={{ width: "40%" }} />
          <p className="text-small text-muted p-3">Insurance</p>
        </div>
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

export default Universe;
