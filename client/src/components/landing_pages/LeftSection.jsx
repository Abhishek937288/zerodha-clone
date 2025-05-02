import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className=" mx-25 mt-5 mb-5 px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-wrap">
        <div className="w-full md:w-5/12 pb-5">
          <img src={imageURL} alt={productName} className="w-full" />
        </div>
        <div className="w-full md:w-1/12"></div>
        <div className="w-full md:w-5/12 mt-5 px-5 py-5 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {productName}
          </h1>
          <p className="text-lg text-gray-700 mb-6">{productDescription}</p>
          <div className="flex items-center mb-4">
            <a
              href={tryDemo}
              className="text-blue-500 hover:underline flex items-center"
            >
              Try Demo{" "}
              <i className="fa fa-long-arrow-right ml-2" aria-hidden="true"></i>
            </a>
            <a
              href={learnMore}
              className="text-green-500 hover:underline flex items-center ml-16"
            >
              Learn more{" "}
              <i className="fa fa-long-arrow-right ml-2" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-3 flex items-center">
            <a href={googlePlay} className="mr-5">
              <img
                src="images/googlePlayBadge.svg"
                alt="Google Play"
                className="h-12"
              />
            </a>
            <a href={appStore}>
              <img
                src="images/appstoreBadge.svg"
                alt="App Store"
                className="h-12"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
