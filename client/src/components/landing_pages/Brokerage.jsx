import React from "react";

function Brokerage() {
  return (
    <div className="mx-30 py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-start justify-between">
        <div className="mb-4 lg:mb-0">
          <a href="#" className="text-lg flex items-center justify-center sm:text-2xl md:text-lg font-semibold text-blue-500 no-underline">
            Brokerage calculator
          </a>
          <ul
            className="text-gray-600 text-sm sm:text-base leading-relaxed list-disc ml-6 mt-4"
          >
            <li>
              Call & trade and RMS auto-squareoff: Additional charges of ₹50 + GST
              per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged₹20
              per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account(non-PIS),0.5% or ₹100 per executed order for equity
              (whichever lower).
            </li>
            <li>
              For NRI account(PIS),0.5% or ₹200 per executed order for equity
              (whichever lower).
            </li>
            <li>
              If the account is debit balance, any order placed will be charged₹40
              per executed orders instead of ₹20 per executed order
            </li>
          </ul>
        </div>
        <div className="text-right">
          <a href="#" className="text-lg flex items-center justify-center sm:text-2xl md:text-lg font-semibold text-blue-500 no-underline">
            List of charges
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;