import React from "react"; 

const EmailSubscription = () => {
  return (
    <section className="py-16 bg-gray-100 flex justify-center px-4">
      <div className="max-w-lg text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          📩 Stay Updated with 10XGrowth!
        </h1>
        <p className="text-gray-600 mt-3">
          Subscribe to our newsletter and be the first to receive growth strategies, insights, and special offers.
        </p>
        
        {/* Input Box */}
        <div className="flex mt-5 border border-blue-400 rounded-lg overflow-hidden shadow-md">
          <input
            className="flex-grow px-4 py-3 outline-none bg-white text-gray-700 placeholder-gray-500"
            type="email"
            placeholder="Enter your email"
          />
          <button className="bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition font-semibold">
            Subscribe
          </button> 
        </div>
      </div>
    </section>
  );
};

export default EmailSubscription;
