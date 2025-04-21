import React from 'react';

function Education () {
  return (
    <div className=" mt-10 mb-10 mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-wrap  ">
        <div className="w-full md:w-1/2">
          <img src="images\education.svg" alt="" className="w-4/5 mx-auto block"/>
        </div>
        <div className="w-full md:w-1/2">
          <div className="text-center">
            <h1 className="text-3xl font-semibold mb-4">Free and open market education</h1>
            <p className="mb-4 text-gray-700">
              Varsity, the largest online stock market education book in the world
              covering everything from the basic to advanced trading
            </p>
            <a href="" className="no-underline text-blue-500 hover:underline">
              Varsity <i className="fa fa-long-arrow-right ml-2" aria-hidden="true"></i>
            </a>
            <p className="mt-8 text-gray-700">
              TradingQ&A, the most active trading and investment community in India
              for all your market related queries
            </p>
            <a href="" className="no-underline text-blue-500 hover:underline">
              TradingQ&A <i className="fa fa-long-arrow-right ml-2" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education ;