import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import AOS from "aos";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const navLinks = [
    { label: "Architecture", href: "/architecture" },
    { label: "Interior", href: "/interior" },
    { label: "BIM", href: "/bim" },
    { label: "3DVisualization", href: "/3dvisualization" },
    { label: "IT", href: "/it" },
    { label: "Marketing", href: "/marketing" },
    { label: "Admin", href: "/admin" },
  ];

  const moreLinks = [
    { label: "About Us", href: "/about" },
    { label: "Blogs", href: "/services" },
    { label: "Contact", href: "/contact" },
    { label: "Carrer", href: "/project" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full py-2 bg-white text-blue-600 shadow-md">
      <nav className="relative z-10 flex items-center justify-between px-6 py-3 md:py-2">
        {/* Logo + Nav Links */}
        <div className="flex items-center gap-6" data-aos="fade-right">
          <div className="text-2xl font-bold">OffShore365</div>
          <ul className="hidden md:flex gap-8 text-sm">
            {navLinks.map((link, idx) => (
              <li key={idx} className="cursor-pointer hover:text-blue-800">
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Schedule Button + Toggle (Desktop Only) */}
        <div className="hidden md:flex items-center gap-4" data-aos="fade-left">
          <button className="bg-blue-100 text-sm border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-200 transition">
            Schedule a Meet
          </button>
          <div
            onClick={() => setMoreOpen(!moreOpen)}
            className={`w-10 h-10 flex items-center justify-center rounded-full border border-blue-600 cursor-pointer transition ${
              moreOpen ? "bg-blue-600 text-white" : "text-blue-600"
            }`}
          >
            ⓘ
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-20 text-blue-600" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          className="md:hidden bg-white text-blue-600 p-6 fixed top-0 right-0 h-full w-3/4 z-50"
        >
          <div className="flex justify-between items-center mb-6">
            <div className="text-xl font-bold">Menu</div>
            <X size={24} onClick={() => setMobileOpen(false)} className="cursor-pointer" />
          </div>
          <ul className="space-y-6 text-lg">
            {navLinks.map((link, idx) => (
              <li key={idx} className="hover:text-blue-800 cursor-pointer">
                <Link
                  to={link.href}
                  onClick={() => {
                    setMobileOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <hr className="my-4 border-blue-200" />
            <p className="font-semibold">More Pages</p>
            {moreLinks.map((link, idx) => (
              <li key={idx} className="hover:text-blue-800 cursor-pointer">
                <Link
                  to={link.href}
                  onClick={() => {
                    setMobileOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* More Dropdown (Desktop) */}
      {moreOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute right-6 mt-2 z-40"
        >
          <div className="bg-white text-blue-600 p-6 rounded-2xl shadow-2xl w-64">
            <ul className="space-y-2">
              {moreLinks.map((link, idx) => (
                <li
                  key={idx}
                  className="hover:bg-blue-50 px-4 py-2 rounded cursor-pointer"
                >
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
