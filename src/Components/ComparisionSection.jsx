import React from "react";

const ComparisonSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          With 10XGrowth vs. Without 10XGrowth
        </h2>
        <p className="text-gray-600 mt-4">
          Discover the difference our platform can make for your business.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-10 max-w-6xl mx-auto px-6">
        {/* Without 10XGrowth */}
        <div className="bg-white shadow-lg p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-semibold text-red-600">Without 10XGrowth</h3>
          <ul className="mt-4 text-gray-600 space-y-3">
            <li>❌ Struggling to generate leads</li>
            <li>❌ High marketing costs, low ROI</li>
            <li>❌ Unoptimized digital presence</li>
            <li>❌ Limited business growth</li>
            <li>❌ Lack of customer engagement</li>
            <li>❌ Trial-and-error approach</li>
            <li>❌ Missing out on sales opportunities</li>
          </ul>
        </div>

        {/* With 10XGrowth */}
        <div className="bg-white shadow-lg p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-semibold text-green-600">With 10XGrowth</h3>
          <ul className="mt-4 text-gray-600 space-y-3">
            <li>✅ Automated lead generation</li>
            <li>✅ Cost-effective marketing strategies</li>
            <li>✅ High-converting website & SEO</li>
            <li>✅ 10X revenue boost with AI-powered strategies</li>
            <li>✅ AI chatbots & personalized engagement</li>
            <li>✅ Data-driven decision-making</li>
            <li>✅ Increased conversions & profits</li>
          </ul>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-10">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
          Get Started with 10XGrowth 🚀
        </button>
      </div>
    </section>
  );
};

export default ComparisonSection;
