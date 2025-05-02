import React from "react";
import { useAuth } from "../../hooks/useAuthStore";

const Summary = () => {
  const {user}=useAuth();
  return (
    <>
      <div className="pt-10">
        <h6 className="py-5 text-xl text-gray-700">Hi, {user.username}!</h6>
        <hr className=" border-gray-500/25" />
      </div>
      <div className="pt-5">
        <span>
          <p className="py-10">Equity</p>
        </span>
        <div className=" flex gap-40">
          <div className="">
            <h3 className="text-3xl text-gray-700 pb-10">3.74k</h3>
            <p className="text-gray-700">Margin available</p>
          </div>
          <div className="second">
            <p className=" text-gray-600 pb-3">
              Margins used <span>0</span>{" "}
            </p>
            <p className="text-gray-600">
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="border-gray-400" />
      </div>

      <div className="pt-20">
        <span>
          <p className="pb-20 text-3xl text-gray-700">Holdings (13)</p>
        </span>

        <div className="flex gap-30 pb-10 ">
          <div className="pb-5">
            <h3 className="pb-10 text-3xl text-green-500">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />
          <div className="pb-5">
            <p className="pb-10 text-gray-600">
              Current Value <span>31.43k</span>{" "}
            </p>
            <p className="text-gray-600">
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="border-gray-500" />
      </div>
    </>
  );
};

export default Summary;