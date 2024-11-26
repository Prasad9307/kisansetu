import React from "react";
import "./PreHeader.css";

const PreHeader = () => {
  const width = window.innerWidth;
  console.log(width);
  return (
    <div className="bg-[#219653] px-6 py-2 md:inline-block hidden w-full">
      <div className="flex justify-between items-center ml-6">
        <div className="flex justify-center items-center">
          <img
            src="https://lh5.googleusercontent.com/proxy/JGtnHr-_pKLZznL5wSNctPnRtpb1SlNXZ2pgf6vhmOvh5hv9dgfvPjmMsOy3ZRecyQNkUyZfcCsi4dUS4Ow7qK8x1uiO0rl8fIX_mmmP2ZuVyCYd6s5JMX5g8bw_iMuIgvU-pI98xj4kfHZY9MQH"
            className="logo"
            alt=""
          />
          <p className="font-semibold text-white text-xs sm:text-sm ml-1">
            NBN Sinhgad School Of Engineering
          </p>
        </div>
        <div className="">
          <div className="" id="google_element"></div>
        </div>
      </div>
    </div>
  );
};

export default PreHeader;
