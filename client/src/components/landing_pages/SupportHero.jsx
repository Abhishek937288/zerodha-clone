import React from "react";

function SupportHero() {
  return (
    <section className="bg-blue-500 py-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <h4 className="text-white text-lg font-semibold mb-4 sm:mb-0">
          Support Portal
        </h4>
        <a href="#" className="text-white text-sm hover:underline">
          Track Tickets
        </a>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start justify-between">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-white text-2xl sm:text-3xl font-semibold mb-4">
            Search for an answer or browse help topics
            <br className="hidden md:block" />
            to create a ticket
          </h1>
          <input
            className="w-full text-sm py-3 px-4 rounded-md text-gray-800 bg-white border border-transparent focus:outline-none focus:border-blue-400"
            type="text"
            placeholder="Eg. how do I activate F&O, why is my order getting rejected..."
          />

          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href="#"
              className="text-white text-sm hover:underline mr-2 mb-2"
            >
              Track account opening
            </a>
            <a
              href="#"
              className="text-white text-sm hover:underline mr-2 mb-2"
            >
              Track segment activation
            </a>
            <a
              href="#"
              className="text-white text-sm hover:underline mr-2 mb-2"
            >
              Intraday margins
            </a>
            <a
              href="#"
              className="text-white text-sm hover:underline mr-2 mb-2"
            >
              kite user manual
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-end">
          <div className="text-right">
            <h1 className="text-white text-2xl sm:text-3xl font-semibold">
              Featured
            </h1>
            <ol className="list-decimal text-white mt-4">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  1. mcx-crude-option-contract-expiry-march-2025
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  2.current-takeovers-and-delisting-march-2025
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportHero;
