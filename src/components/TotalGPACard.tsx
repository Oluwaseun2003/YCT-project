import React from "react";
import CountUp from "react-countup";

const TotalGPACard = ({ label, value, rating, topup, showDecimals }) => {
  return (
    <div className="w-full h-[110px] flex items-center gap-7 mt-5 mb-14">
      <div className="flex flex-1 flex-col bg-shades-white rounded-2xl h-[150px] w-full">
        <div className="flex flex-1 items-start px-10 pt-7">
          <div className="flex flex-col">
            <div>
              <span className="text-sm font-medium">{label}</span>

              <h4 className="text-[40px] font-semibold text-green-400">
                <CountUp
                  end={value}
                  duration={2}
                  decimals={showDecimals ? 2 : 0} // Include decimals conditionally
                />{" "}
                <span className="text-[24px] text-grey-base">{rating}</span>
              </h4>
            </div>
            {topup !== undefined && ( // Check if topup prop is defined
              <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
                <CountUp end={topup} duration={2} decimals={2} />
                <svg
                  className="fill-meta-3 text-green-400"
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 0L10 10H0L5 0Z" fill="currentColor" />
                </svg>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalGPACard;
