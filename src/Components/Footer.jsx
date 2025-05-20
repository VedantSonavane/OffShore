import React, { useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className="relative text-white pt-16 pb-10">
      {/* Wave Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-blue-400 to-blue-600 animate-gradient">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/waves.svg')] bg-no-repeat bg-cover bg-center animate-wave" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About Section */}
        <div data-aos="fade-up">
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            We are a modern company dedicated to innovation and excellence, delivering top-notch services to our clients worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            {["Home", "Services", "Portfolio", "Contact"].map((label, idx) => (
              <li key={idx}>
                <a
                  href={`/${label.toLowerCase()}`}
                  className="relative hover:text-gray-300 transition after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <p className="text-sm mb-2">123 Minimal Street, Suite 456</p>
          <p className="text-sm mb-2">City, Country 78910</p>
          <p className="text-sm mb-2">Email: contact@company.com</p>
          <p className="text-sm">Phone: +1 (234) 567-890</p>
        </div>

        {/* Subscribe */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
          <p className="text-sm mb-4">Join our newsletter for updates and offers.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-black rounded-l-md focus:outline-none"
            />
            <button className="bg-white/30 text-white px-4 py-2 rounded-r-md hover:bg-white/50 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="relative z-10 mt-12 flex justify-center gap-4">
        {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
          <div
            key={idx}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-black transition duration-300"
          >
            <Icon size={18} />
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="relative z-10 text-center mt-6 text-sm text-white/70">
        © {new Date().getFullYear()} OffShore365. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
