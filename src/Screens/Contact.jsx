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
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      reason: "",
      message: "",
    });
  };

  return (
    <section className="min-h-screen bg-[#f7f8fa] px-4 md:px-20 py-16">
      <ToastContainer />
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        {/* Form Side */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-2 text-[#1a2e45]">Let's Chat</h2>
          <p className="text-gray-600 mb-6">A Calendly expert will reach out to discuss your needs.</p>

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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-700"
              required
            >
              <option value="">How do you plan on using Calendly?</option>
              <option value="sales">Sales</option>
              <option value="recruiting">Recruiting</option>
              <option value="support">Customer Support</option>
              <option value="other">Other</option>
            </select>

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
              By clicking submit you consent to receive email communications about Calendly products and services and agree to our <a href="#" className="text-blue-500 underline">Terms</a>. Your data will be processed in accordance with our <a href="#" className="text-blue-500 underline">Privacy Policy</a>. You may opt out at any time.
            </p>
          </form>
        </div>

        {/* Info Side */}
        <div className="w-full md:w-1/2 bg-[#f9fafb] px-8 py-12 flex flex-col justify-center text-[#1a2e45]">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Increase revenue, <br />
            accelerate sales pipeline, <br />
            and improve customer retention.
          </h2>

          <div className="mt-6 space-y-4 text-xl font-semibold">
            <div>
              <span className="text-3xl font-bold">20m</span> users worldwide
            </div>
            <div>
              <span className="text-3xl font-bold">100k</span> companies use Calendly
            </div>
            <div>
              <span className="text-3xl font-bold">230+</span> countries with monthly active users
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
