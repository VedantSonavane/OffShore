import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    reason: "",
    teamSize: "",
    services: [],
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => {
        const newServices = checked
          ? [...prevData.services, value]
          : prevData.services.filter((service) => service !== value);
        return { ...prevData, services: newServices };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      reason: "",
      teamSize: "",
      services: [],
      message: "",
    });
  };

  return (
    <section className="min-h-screen px-4 md:px-20 py-16 ">
      <ToastContainer />

      {/* Section Heading */}
      <div className="text-center mb-16">
        <h1 className="text-[36px] md:text-[64px] font-bold text-gray-900 mb-4 tracking-wide gsap-heading">
          Get in Touch with Offshore 365
        </h1>
        <p className="text-[18px] md:text-[20px] text-gray-500 max-w-2xl mx-auto">
          Have questions, ideas, or partnership opportunities? Reach out and let's build something amazing together.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Info Section */}
        <div className="w-full lg:w-1/2 text-[#1a2e45]">
          <h2 className="text-[28px] md:text-[36px] font-bold leading-snug mb-6">
            Meet with our Offshore 365 experts
          </h2>
          <div className="mt-12 space-y-12 text-lg md:text-xl font-semibold">
            <div>
              <span className="text-[40px] md:text-[64px] font-bold text-blue-500">500+</span> projects completed globally
            </div>
            <div>
              <span className="text-[40px] md:text-[64px] font-bold text-red-500">150+</span> AEC firms partnered
            </div>
            <div>
              <span className="text-[40px] md:text-[64px] font-bold text-yellow-500">25+</span> countries with active engagements
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 bg-white border border-gray-200 rounded-3xl shadow-xl p-6 md:p-12">
          <h2 className="text-3xl font-bold mb-2 text-[#1a2e45]">Let's Chat</h2>
          <p className="text-gray-600 mb-6">An Offshore 365 expert will reach out to discuss your needs.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Work Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

            <select
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            >
              <option value="">How do you plan on using our services?</option>
              <option value="sales">Sales</option>
              <option value="recruiting">Recruiting</option>
              <option value="support">Customer Support</option>
              <option value="consulting">Consulting</option>
              <option value="other">Other</option>
            </select>

            <select
              name="teamSize"
              value={formData.teamSize}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            >
              <option value="">Select your team size</option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-200">51-200</option>
              <option value="200+">200+</option>
            </select>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">Services Interested In:</label>
              <div className="flex flex-wrap gap-4 text-gray-700">
                {["BIM Modeling", "CAD Drafting", "3D Rendering", "Project Management", "MEP Services"].map((service) => (
                  <label key={service} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="services"
                      value={service}
                      checked={formData.services.includes(service)}
                      onChange={handleChange}
                      className="accent-blue-500"
                    />
                    {service}
                  </label>
                ))}
              </div>
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help?"
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

            <button
              type="submit"
              className="w-full bg-[#2d6bff] text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Submit
            </button>

            <p className="text-xs text-gray-500 mt-4">
              By clicking submit you consent to receive email communications about Offshore 365 products and services and agree to our <a href="#" className="text-blue-500 underline">Terms</a>. Your data will be processed in accordance with our <a href="#" className="text-blue-500 underline">Privacy Policy</a>. You may opt out at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
