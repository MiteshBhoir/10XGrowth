import React from "react";

const EmailSubscription = () => {
  return (
    <section className="py-12 bg-gray-100 flex justify-center">
      <div className="max-w-lg text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Stay Updated with Our Latest News!
        </h1>
        <p className="text-gray-600 mt-3">
          Subscribe to our newsletter and be the first to know about exclusive updates, trends, and special offers.
        </p>
        <div className="flex mt-5 border border-blue-400 rounded-lg overflow-hidden">
          <input
            className="flex-grow px-4 py-3 outline-none bg-white text-gray-700"
            type="email"
            placeholder="Enter your email"
          />
          <button className="bg-blue-600 text-white px-5 py-3 hover:bg-blue-700 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmailSubscription;
