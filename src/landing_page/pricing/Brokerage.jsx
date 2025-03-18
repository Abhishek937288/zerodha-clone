import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center  border-top">
        <div className="col-8 p-4 ">
          <a className="fs-5 " style={{ textDecoration: "none" }}>
            Brokerage calculator
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5",fontSize:"12px" }}
            className="text-muted "
          >
            <li>
              Call & trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per oder.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be
              charged₹20 per contract note. Courrier charges apply.
            </li>
            <li>
              For NRI account(non-PIS),0.5% or ₹100 per executed order forequity
              (whichever lower).
            </li>
            <li>
              For NRI account(PIS),0.5% or ₹200 per executed order for
              equity(whichever lower).
            </li>
            <li>
              If the account is debit balance, any order placed will be
              charged₹40 per executed orders instead of ₹20 per executed order
            </li>
          </ul>
        </div>
        <div className="col-4">
          <a className="fs-5" style={{ textDecoration: "none" }}>
            List of charges
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
