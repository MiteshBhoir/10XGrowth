import React from "react";

const services = [
  {
    title: "Growth Consulting",
    description:
      "We begin our engagement with understanding your vision, your current team and resources, and create a roadmap for 10xGrowth.",
    icon: "📈",
  },
  {
    title: "Recruitment",
    description:
      "Discover top talent effortlessly with our recruitment services. We ensure you find the perfect fit for your company.",
    icon: "👥",
  },
  {
    title: "Zoho Implementation",
    description:
      "Maximize your business efficiency with Zoho integration. We customize workflows to suit your needs.",
    icon: "⚙️",
  },
  {
    title: "Fund Raising",
    description:
      "We'll help you connect with investors and craft an attractive pitch deck to achieve your fundraising goals.",
    icon: "💰",
  },
  {
    title: "Website Development",
    description:
      "Achieve your online goals effortlessly with our web development services, hosting, and CRM integration.",
    icon: "💻",
  },
  {
    title: "App Development",
    description:
      "We ensure your app is user-friendly and provide a seamless experience throughout the development process.",
    icon: "📱",
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your online presence with tailored strategies, branding, and audience engagement techniques.",
    icon: "📢",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "We take care of everything from managing IT needs to keeping your data secure, so you can focus on growth.",
    icon: "☁️",
  },
];

const Services = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">🌐 10XGrowth Services</h2>
        <p className="text-gray-600 mb-12 text-lg">
          We provide high-impact services that scale businesses rapidly.
        </p>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-xl transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center text-center"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
