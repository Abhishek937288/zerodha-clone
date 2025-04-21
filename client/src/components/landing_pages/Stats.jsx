import React from "react";

function Stats() {
  return (
    <div className="max-w-[1400px] px-20 py-5">
      <div className="flex justify-between gap-50">
        <div className="w-full md:w-1/2 ">
          <h1 className="text-4xl mb-10 text-gray-700 font-bold ">Trust with confidence</h1>
          <h2 className="text-xl text-gray-700 font-semibold">customer-first always</h2>
          <p className="text-gray-600 mt-2">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <h2 className="text-xl font-semibold text-gray-700 mt-4">No spam or gimmicks</h2>
          <p className="text-gray-600 mt-2">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="text-xl font-semibold text-gray-700 mt-4">The Zerodha universe</h2>
          <p className="text-gray-600 mt-2">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="text-xl font-semibold text-gray-700 mt-4">Do better with money</h2>
          <p className="text-gray-600 mt-2">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="w-full md:w-1/2 ">
          <img src="images\ecosystem.png" className='w-[90%]' alt="" />
          <div className="text-center mt-4">
            <a href="" className="mx-12 text-blue-500 no-underline">
              Explore our products
              <i className="fa fa-long-arrow-right " aria-hidden="true"></i>
            </a>
            <a href="" className="no-underline mx-12 text-blue-500">
              Try kite demo
              <i className="fa fa-long-arrow-right " aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;