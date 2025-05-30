import React, { useEffect } from 'react';
import { motion } from "framer-motion";
const AboutOffshore365 = () => {
  useEffect(() => {
    // Initialize AOS animation library
    if (typeof window !== 'undefined' && typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  }, []);
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const items = [
    {
      title: "Vision",
      metric:
        "To be the most trusted offshore partner, delivering innovative solutions for Architecture, Interior Design, and Engineering through expertise and excellence.", borderColor: "border-blue-500",
      textColor: "text-blue-500",
      circleColor: "bg-blue-500",
    },
    {
      title: "Mission",
      metric:
        "Improving the quality of every project building process by delivering cutting-edge solutions and empowering client success through innovation and excellence.",
      borderColor: "border-yellow-500",
      textColor: "text-yellow-500",
      circleColor: "bg-yellow-500",
    },
    {
      title: "Core Values",
      metric:
        "Commitment to Excellence, Continuous Process Innovation, Partner in Growth, and upholding Integrity and Trust in every interaction.",
      borderColor: "border-purple-500",
      textColor: "text-purple-500",
      circleColor: "bg-purple-500",
    },
  ];

  return (
    <div className="font-sans text-[#0d3557]  text-center">
      {/* Hero Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-white ">
        <div className="max-w-5xl mx-auto ">
          <div
            className="inline-block bg-blue-100 rounded-full px-6 py-2 mb-8"
            data-aos="fade-up"
          >
            <span className="text-blue-600 regular ">About Us</span>
          </div>

          <h1
            className="text-[50px] font-extrabold leading-tight mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Amplifying productivity for AEC businesses worldwide.
          </h1>

          <p
            className="text-[20px]  mb-12 font-medium opacity-80 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Offshore 365's dedicated global teams and comprehensive AEC solutions, delivers exceptional projects, scale your operations seamlessly, enhance productivity, and drive sustainable growth
          </p>

          <button
            className="bg-[#006bff] hover:bg-blue-800  text-white font-medium px-6 py-4 rounded-lg text-[20px] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Schedule a meet
          </button>

          <p
            className="mt-24 text-[20px] font-medium"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            The trusted offshore AEC partner for firms globally, from dynamic design studios to large-scale construction enterprises.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">


          <div className="text-center">
            <h2
              className="text-[50px]  font-bold mb-8"
              data-aos="fade-up"
            >
              Offshore 365 - One stop solution
            </h2>

            <p
              className="text-[20px]  leading-relaxed max-w-5xl mx-auto regular"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Offshore 365 seamlessly extends your in-house capabilities, serving as your singular hub for comprehensive AEC solutions. Our expertise spans specialized BIM Consultancy, meticulous Design Documentation, and stunning 3D Visualization for Interior Design, Architecture, and Engineering projects. With proficiency across diverse sectors, we adeptly manage projects of any scale, ensuring peak efficiency with minimal client oversight.
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-8 mb-20 mt-20">
            <div

              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2 className="text-[50px] text-red-500  font-bold mb-4">500+</h2>
              <p className="text-[20px] ">Projects Completed</p>
            </div>

            <div

              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h2 className="text-[50px] text-blue-500 font-bold mb-4">250+</h2>
              <p className="text-[20px] ">Satisfied Clients</p>
            </div>

            <div

              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h2 className="text-[50px] text-green-500 font-bold mb-4">6+</h2>
              <p className="text-[20px] ">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-[50px] font-bold  mb-20 text-center"
            data-aos="fade-up"
          >
            Improving the quality <br /> of every project building process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className={`bg-white border-2 ${item.borderColor} rounded-2xl shadow-lg overflow-hidden relative group`}
                style={{ height: "340px" }}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                data-aos="zoom-in"
                data-aos-delay={200 + index * 200}
              >
                {/* Abstract blurred circle inside */}
                <div
                  className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full ${item.circleColor} opacity-20 blur-2xl`}
                ></div>

                {/* Subtle shape top-left */}
                <div
                  className={`absolute -top-5 -left-5 w-24 h-24 rounded-full ${item.circleColor} opacity-10 blur-2xl`}
                ></div>

                {/* Card Content */}
                <div className="relative z-10 text-center px-6 sm:px-8 py-10">
                  <h3
                    className={`text-[34px] font-bold mb-4 ${item.textColor}`}
                    data-aos="fade-up"
                    data-aos-delay={300 + index * 100}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[20px] leading-relaxed font-medium"
                    data-aos="fade-up"
                    data-aos-delay={400 + index * 100}
                  >
                    {item.metric}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 px-16  text-[#0d3557]    mb-20 sm:py-16 scroll-mt-20 rounded-2xl px-4 sm:px-8 text-gray-800"
        data-aos="zoom-in"
      >
        <div className="flex flex-col lg:flex-row-reverse items-start gap-8 md:gap-12 container px-24">
          <div className="flex-1 grid grid-cols-2 gap-6 place-items-center" data-aos="fade-left">

            {/* Office Space */}
            <div className="bg-white rounded-xl p-2 hover:scale-105 hover:shadow-2xl transition-all duration-300 text-center w-full max-w-xs">
              <div className="flex justify-center mb-4">
                {/* Building Icon (Red) */}
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M3 21V3h6v6h6v6h6v6H3z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="text-[14px] text-[#0d3557] regular">Office Space, Desks & Tools</h2>
            </div>

            {/* Computer Hardware */}
            <div className="bg-white rounded-xl p-2 hover:scale-105 hover:shadow-2xl transition-all duration-300 text-center w-full max-w-xs">
              <div className="flex justify-center mb-4">
                {/* Laptop Icon (Green) */}
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M4 6h16v10H4V6zm0 10h16v2H4v-2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="text-[14px] text-[#0d3557] regular">Computer Hardware + Office Software</h2>
            </div>

            {/* Data Security */}
            <div className="bg-white rounded-xl p-2 hover:scale-105 hover:shadow-2xl transition-all duration-300 text-center w-full max-w-xs">
              <div className="flex justify-center mb-4">
                {/* Shield Lock Icon (Blue) */}
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M12 12v2m0-6a2 2 0 0 1 2 2v2a2 2 0 0 1-4 0V10a2 2 0 0 1 2-2zm0-6l7 4v6c0 5-7 9-7 9s-7-4-7-9V4l7-4z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="text-[14px] text-[#0d3557] regular">Data Security</h2>
            </div>

            {/* Payroll, Taxes & Benefits */}
            <div className="bg-white rounded-xl p-2 hover:scale-105 hover:shadow-2xl transition-all duration-300 text-center w-full max-w-xs">
              <div className="flex justify-center mb-4">
                {/* Dollar Coin Icon (Yellow) */}
                <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M12 8c-1.5 0-2.5.5-2.5 1.5s1 1.5 2.5 1.5 2.5.5 2.5 1.5-1 1.5-2.5 1.5M12 5v14" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="text-[14px] text-[#0d3557] regular">Payroll, Taxes & Benefits</h2>
            </div>

            {/* Remote Tools */}
            <div className="bg-white rounded-xl p-2 hover:scale-105 hover:shadow-2xl transition-all duration-300 text-center w-full max-w-xs">
              <div className="flex justify-center mb-4">
                {/* Globe Wifi Icon (Purple) */}
                <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M12 3v18m-9-9h18" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="text-[14px] text-[#0d3557] regular">Remote Tools, Training & Support</h2>
            </div>

            {/* Health Insurance */}
            <div className="bg-white rounded-xl p-2 hover:scale-105 hover:shadow-2xl transition-all duration-300 text-center w-full max-w-xs">
              <div className="flex justify-center mb-4">
                {/* Heart Icon (Pink) */}
                <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M12 21S3 13.5 3 8.5 5.4 3 8.5 3c1.8 0 3.4.9 4.5 2.1C14.1 3.9 15.7 3 17.5 3 20.6 3 23 5.4 23 8.5c0 5-9 12.5-9 12.5z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="text-[14px] text-[#0d3557] regular">Family Health Insurance</h2>
            </div>

          </div>



          <motion.div
            className="flex-1 text-left  text-[#0d3557]  "
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-aos="fade-right"
          >
            <h1 className="text-[40px]  font-bold mb-4  tracking-wide leading-snug">
              Offshore 365 Infrastructure
            </h1>

            {/* New paragraph below the title */}
            <p className="mb-8 text-[18px] leading-relaxed font-medium">
              Offshore 365 operates on a secure, redundant infrastructure with high-speed leased lines and no single point of failure. Our systems are protected by multi-layered security protocols and backed by on-site power generation. Physical facilities are secured round-the-clock with restricted access, while modern training rooms and video conferencing support continuous collaboration and professional development.            </p>


          </motion.div>

        </div>


      </motion.section>

      {/* Leadership Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold mb-8 text-center"
            data-aos="fade-up"
          >
            Offshore 365 leadership
          </h2>

          <p
            className="text-xl opacity-80 text-center max-w-3xl mx-auto mb-16"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our team is customer-obsessed, mission-oriented, and believes anything is possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="h-64 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-white text-6xl font-bold">NM</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Nilesh Malhotra</h3>
                <p className="text-lg opacity-70">Chief Executive Officer</p>
              </div>
            </div>

            <div
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="h-64 bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center">
                <span className="text-white text-6xl font-bold">RM</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Ruby Malhotra</h3>
                <p className="text-lg opacity-70">Chief Operating Officer</p>
              </div>
            </div>

            <div
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="h-64 bg-gradient-to-r from-teal-400 to-teal-600 flex items-center justify-center">
                <span className="text-white text-6xl font-bold">SM</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Shivani Malhotra</h3>
                <p className="text-lg opacity-70">Chief Financial Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            
            <h2
              className="text-[50px] md:text-5xl font-bold"
              data-aos="fade-up"
            >
              CSR at Offshore 365
            </h2>
          </div>

          <p
            className="text-[20px] text-center max-w-4xl mx-auto mb-16 opacity-80"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            "At Offshore 365, we believe that businesses have a responsibility to contribute positively to society. Our CSR initiatives are driven by our commitment to sustainability, community engagement, and ethical business practices."
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div
              className="bg-gray-50 rounded-3xl p-10 shadow-lg border border-gray-100"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <h3 className="text-3xl font-bold mb-8">OUR MISSION</h3>
              <p className="text-xl leading-relaxed opacity-80">
                At Offshore 365, we believe that businesses have a responsibility to contribute positively to society. Our CSR initiatives are driven by our commitment to sustainability, community engagement, and ethical business practices. We strive to create lasting value for our clients while maintaining the highest standards of professional excellence and social responsibility.
              </p>
            </div>

            <div
              className="bg-gray-50 rounded-3xl p-10 shadow-lg border border-gray-100"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <h3 className="text-3xl font-bold mb-8">OUR VISION</h3>
              <p className="text-xl leading-relaxed opacity-80">
                We envision a future where architecture, engineering, and design contribute to a more sustainable, inclusive, and equitable society. We support underrepresented communities by improving their living and working environments through innovative eco-friendly and energy-efficient designs. We encourage education and skill development in architecture and interior design to create opportunities for the next generation of professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-8"
            data-aos="fade-up"
          >
            Ready to transform your AEC workflow?
          </h2>

          <p
            className="text-xl opacity-80 max-w-3xl mx-auto mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Connect with our team to discover how Offshore 365 can enhance your productivity and deliver exceptional results for your projects.
          </p>

          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-10 py-4 rounded-lg text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Schedule a consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 md:px-12 lg:px-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Offshore 365</h3>
            <p className="opacity-70 mb-6">
              Your trusted partner for comprehensive AEC solutions, delivering exceptional results with efficiency and precision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">BIM Consultancy</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Design Documentation</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">3D Visualization</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Interior Design</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Architecture</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Our Team</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Careers</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">CSR</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="opacity-70">123 Business Avenue, Suite 500, New Delhi, India</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="opacity-70">info@offshore365.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="opacity-70">+91 123 456 7890</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800">
          <p className="text-center opacity-70">
            © {new Date().getFullYear()} Offshore 365. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutOffshore365;