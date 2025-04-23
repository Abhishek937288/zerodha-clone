import React from "react";

function AboutHero() {
  return (
    <div className=" my-37 mb-10">
      <div
        className=" mb-32" 
      >
        <h1 className=" font-semibold text-gray-800 text-3xl text-center">
          We pioneered the discount broking model in India. <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div className=" py-16  flex border-t  border-gray-200  px-30 gap-10">
        <div className="py-10 px-10">
          <p className="py-2 text-gray-700 text-lg">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>

          <p className="py-2 text-gray-700 text-lg">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p className="py-2 text-gray-700 text-lg">
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>
        <div className="py-10 px-10">
          <p className="py-2 text-gray-700 text-lg">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
            Rainmatter, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>
          <p className="py-2 text-gray-700 text-lg">
            <a href="" className="text-blue-500">
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p className="py-2 text-gray-700 text-lg">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
