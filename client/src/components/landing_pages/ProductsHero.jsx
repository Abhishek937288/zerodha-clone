import React from "react";

function ProductsHero() {
  return (
    <div className=" py-10 mt-15">
      <div className="text-center mt-5 p-3">
        <h1 className="font-bold text-4xl text-gray-900">Zerodha Products</h1>
        <h3 className="text-gray-700 text-2xl py-3">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mt-3 mb-5 ">
          Check out our{" "}
          <a href="" className="text-blue-500">
            investment offerings{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default ProductsHero;