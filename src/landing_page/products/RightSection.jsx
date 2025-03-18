import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore
}) {
  return (
    <div className="container mt-5 mb-5">
    <div className="row ">    
      <div className="col-6 mt-5">
        <h1 className="mt-5">{productName}</h1>
        <p>{productDescription}</p>
        <div>
          <a href={learnMore}>
            Learn more{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div className="col-6">
        <img src={imageURL} className="img-fluid"  />
      </div>
    </div>
  </div>
  );
}

export default RightSection;
