import React, { useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className="relative text-white pt-16 pb-10 bg-[#1e3a8a]  overflow-hidden">
      {/* Animated Circles */}
      <div className="absolute w-60 h-60 top-[-50px] right-[-50px] bg-white/50 backdrop-blur-lg rounded-full z-0 animate-float-right" />
      <div className="absolute w-72 h-72 bottom-[-60px] left-[-60px] bg-white/50 backdrop-blur-lg rounded-full z-0 animate-float-left" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 opacity-90" />

      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12">
        {/* About Us */}
        <div data-aos="fade-up">
          <h3 className="text-xl font-bold mb-4">OffShore365</h3>
          <p className="text-sm text-white/90 mb-3">
            Your global productivity partner delivering tech smart workforce
            solutions tailored for your AEC Business ensuring seamless expansion
            and efficiency.
          </p>
          
        </div>

        {/* Services */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul className="text-sm space-y-2 text-white/90">
            <li><a href="#">Architecture</a></li>
            <li><a href="#">Interior</a></li>
            <li><a href="#">3D Visualisation</a></li>
            <li><a href="#">BIM</a></li>
            <li><a href="#">IT</a></li>
            <li><a href="#">Admin</a></li>
            <li><a href="#">Marketing</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div data-aos="fade-up" data-aos-delay="150">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2 text-white/90">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Blogs</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
         
        </div>

        {/* Newsletter */}
        <div data-aos="fade-up" data-aos-delay="250">
          <h3 className="text-xl font-bold mb-4">Subscribe</h3>
          <p className="text-sm mb-4 text-white/90">
            Join our newsletter for updates and offers.
          </p>
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
      <div className="relative z-10 mt-12 flex justify-center gap-5">
        {[FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map(
          (Icon, idx) => (
            <a
              key={idx}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-black transition duration-300"
            >
              <Icon size={18} />
            </a>
          )
        )}
      </div>

      {/* Copyright */}
      <div className="relative z-10 text-center mt-6 text-sm text-white/70">
        © {new Date().getFullYear()} OffShore365. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
