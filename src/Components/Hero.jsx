import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full mx-auto bg-gradient-to-b from-orange-50 px-6 md:px-0">
      {/* Left Side (Text Content) */}
      <div className="max-w-4xl flex flex-col md:pt-36 pt-20 space-y-4 text-center md:text-left">
        <h1 className="text-home-heading-small md:text-home-heading-large font-bold max-w-3xl mx-auto md:mx-0">
          Scale your <span className="text-blue-500">Business</span> <br />
          <span className="text-blue-500">10X Faster</span>
        </h1>
        <p className="max-w-xl mx-auto md:mx-0 pt-3">
          At 10XGrowth, we empower businesses with cutting-edge strategies, digital marketing, and technology solutions to maximize revenue and impact.
        </p>
        {/* Buttons */}
        <div className="text-white flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 pt-5">
          <button className="bg-green-500 rounded px-6 py-3 w-full md:w-auto">Get Started</button>
          <button className="bg-black rounded px-6 py-3 w-full md:w-auto">Learn More</button>
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="mt-10 md:mt-0 md:ml-10">
        <img
          className="w-full max-w-xs md:max-w-md"
          src="https://cdni.iconscout.com/illustration/premium/thumb/business-growth-illustration-download-in-svg-png-gif-file-formats--successful-strategy-motivation-achieving-goals-leadership-success-pack-illustrations-3658876.png"
          alt="Business Growth"
        />
      </div>
    </div>
  );
};

export default Hero;
