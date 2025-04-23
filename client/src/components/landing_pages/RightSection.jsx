import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mx-25  mb-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap">
        <div className="w-full md:w-5/12 mt-5 px-5 py-30 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{productName}</h1>
          <p className="text-lg text-gray-700 mb-6">{productDescription}</p>
          <div>
            <a href={learnMore} className="text-blue-500 hover:underline flex items-center">
              Learn more <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className=" md:w-5/12 mx-15 ">
          <img src={imageURL} className="w-full py-5" alt="" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;