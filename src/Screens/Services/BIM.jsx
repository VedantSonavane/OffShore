import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import architectureHero from "../../assets/bimmain.webp";
import serviceImage from "../../assets/bimmain.webp";
import toolsImage from "../../assets/bimmain.webp";
import plansImage from "../../assets/bimmain.webp";
import whyUsImage from "../../assets/bimmain.webp";
import getStartedImage from "../../assets/bimmain.webp";
import { Link } from "react-router-dom";
import architectureVideo from "../../assets/bimvideo.mp4";
import Scheduling from "../Scheduling";

const figmaLogo =
  "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg";

const Architecture = () => {
  const [activeTab, setActiveTab] = useState("services");
  const [isSticky, setIsSticky] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [showSchedulingSection, setShowSchedulingSection] = useState(false);
  const sectionRefs = useRef({});
  const tabsRef = useRef(null);
  const placeholderRef = useRef(null);
  const originalTopRef = useRef(null);

  const tabs = [
    { id: "services", label: "Services" },
    { id: "tools", label: "Tools" },
    { id: "plans", label: "Plans" },
    { id: "why-us", label: "Why Us?" },
    { id: "get-started", label: "Get Started" },
  ];

  const tabData = {
    services: {
      title: "Comprehensive BIM Services",
      description:
        "We provide end-to-end BIM solutions from concept to completion. Our team delivers innovative designs tailored to your specific needs and vision.",
      image: architectureHero,
      features: [
        { name: "PRE CONCEPT DESIGN", image: serviceImage },
        { name: "SCHEMATIC DESIGN", image: serviceImage },
        { name: "DESIGN DEVELOPMENT", image: serviceImage },
        { name: "CONSTRUCTION DOCUMENTS", image: serviceImage },
        { name: "SPACE PLANING", image: serviceImage },
        { name: "DRAFTING", image: serviceImage },
        { name: "3D MODELLING", image: serviceImage },
        { name: "RENDERING", image: serviceImage },
        { name: "WALK THROUGH ANIMATIONS", image: serviceImage },
        { name: "BOQ AND MATERIAL TAKE OFF", image: serviceImage },
      ],
    },
    tools: {
      title: "Connect with Offshore365 to the tools you already use",
      description: "Boost productivity with 100+ integrations",
      image: toolsImage,
      software: [
        { name: "Zoom", icon: "Z" },
        { name: "Salesforce", icon: "S" },
        { name: "Slack", icon: "S" },
        { name: "Microsoft Teams", icon: "M" },
        { name: "Gmail", icon: "G" },
        { name: "Outlook", icon: "O" },
        { name: "Google Chrome", icon: "C" },
        { name: "PayPal", icon: "P" },
        { name: "LinkedIn", icon: "L" },
        { name: "Stripe", icon: "S" },
      ],
    },
    plans: {
      title: "Pick the perfect plan for your team",
      description: "Choose from a variety of plans tailored to your needs.",
      image: plansImage,
      plans: [
        {
          title: "Hourly Billing Model",
          price: "$50/hr",
          description: "Flexible billing based on hours worked.",
          recommended: false,
        },
        {
          title: "Fixed Fee Model",
          price: "$5,000/project",
          description: "Set price for defined project scope.",
          recommended: false,
        },
        {
          title: "Project Based Model",
          price: "$10,000/project",
          description: "Comprehensive pricing for entire projects.",
          recommended: true,
        },
        {
          title: "Dedicated Team Model",
          price: "$20,000/mo",
          description: "Full-time team for ongoing projects.",
          recommended: false,
        },
        {
          title: "Performance Model",
          price: "Custom",
          description: "Pricing based on project outcomes.",
          recommended: false,
        },
      ],
    },
    "why-us": {
      title: "Why Choose Our BIM Services?",
      description:
        "We combine creativity with technical expertise to deliver exceptional results.",
      image: whyUsImage,
      stats: [
        { number: 250, label: "Architects", max: 300, percentage: 83 },
        { number: 15, label: "Countries", max: 20, percentage: 75 },
        { number: 500, label: "Global Projects", max: 600, percentage: 83 },
      ],
      highlightedBenefits: [
        {
          title: "Reduced Administrative Burden",
          description:
            "Offshore365 handles the administrative tasks associated with hiring and managing staff, such as recruitment, onboarding, and payroll. This allows clients to focus on their core business operations.",
        },
        {
          title: "Time Zone Advantage",
          description:
            "Offshore teams can work while your in-house team is off, enabling faster project turnaround times and shorter project cycles. This can be a significant advantage for projects with tight deadlines.",
        },
      ],
      benefits: [
        {
          title: "AEC Expertise",
          description:
            "We specialize in Architecture, Engineering, and Construction staffing.",
        },
        {
          title: "Global Talent",
          description: "Access highly skilled AEC professionals worldwide.",
        },
        {
          title: "Cost-Effective",
          description:
            "Reduce costs significantly compared to in-house hiring.",
        },
        {
          title: "Scalable Teams",
          description: "Quickly scale your team up or down as needed.",
        },
        {
          title: "Boost Productivity",
          description: "Free up your in-house team to focus on core tasks.",
        },
        {
          title: "Seamless Integration",
          description: "Easy collaboration with your existing workflows.",
        },
        {
          title: "Quality and Reliability",
          description: "Rigorous screening ensures top-tier talent.",
        },
        {
          title: "Faster Turnaround",
          description:
            "Leverage time zone differences for quicker project completion.",
        },
      ],
      academy: {
        title: "Academy - Training on International Standards",
        description:
          "Our academy provides comprehensive training programs aligned with international standards, ensuring our professionals are equipped with the latest skills and knowledge in the AEC industry.",
      },
    },
    "get-started": {
      title: "Start Your BIM Project Today",
      description:
        "Get in touch to discuss your project requirements and how we can help bring your vision to life.",
      image: getStartedImage,
      steps: [
        "Schedule a consultation",
        "Discuss your project needs",
        "Receive a customized proposal",
        "Begin the design process",
      ],
    },
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    if (tabsRef.current && !originalTopRef.current) {
      originalTopRef.current = tabsRef.current.offsetTop;
    }

    const handleScroll = () => {
      if (tabsRef.current && originalTopRef.current) {
        const tabsTop = tabsRef.current.getBoundingClientRect().top;
        const scrollPosition = window.scrollY;

        if (tabsTop <= 0 && scrollPosition >= originalTopRef.current) {
          setIsSticky(true);
        } else if (scrollPosition < originalTopRef.current) {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveTab(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % tabData.tools.software.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const setRef = (id, ref) => {
    sectionRefs.current[id] = ref;
  };

  const handleTabClick = (id) => {
    setActiveTab(id);
    if (sectionRefs.current[id]) {
      sectionRefs.current[id].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 font-sans">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative h-[500px] sm:h-[600px] w-full bg-fixed bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${architectureHero})` }}
      >
        <div className="relative text-center px-4 z-10" data-aos="fade-up">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-8xl font-extrabold text-white tracking-tight mb-4 drop-shadow-2xl"
          >
            BIM 
          </motion.h1>
        </div>
      </motion.div>

      {/* Placeholder for Tabs Bar */}
      <div
        ref={placeholderRef}
        className={`${isSticky ? "block" : "hidden"}`}
        style={{
          height: tabsRef.current ? `${tabsRef.current.offsetHeight}px` : "0px",
        }}
      ></div>

      {/* Tabs Navigation */}
      <motion.div
        ref={tabsRef}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`z-20 bg-white/90 backdrop-blur-xl shadow-lg transition-all duration-300 ${
          isSticky ? "fixed top-[72px] left-0 right-0 shadow-xl" : "relative"
        }`}
      >
        <div className="container flex justify-center items-center mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide py-3">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold transition-all duration-300 mx-1 text-gray-600 hover:text-red-600 hover:bg-red-50`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"
                    layoutId="underline"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Services Section */}
        <motion.section
          ref={(ref) => setRef("services", ref)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-12 sm:py-16 scroll-mt-20"
          id="services"
          data-aos="fade-up"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1" data-aos="fade-right">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {tabData.services.title}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                {tabData.services.description}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                {tabData.services.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, backgroundColor: "#f1f5f9" }}
                    className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="bg-red-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-800 text-base">
                      {feature.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              className="flex-1"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              data-aos="fade-left"
            >
              <img
                src={serviceImage}
                alt={tabData.services.title}
                className="w-full h-auto rounded-xl shadow-2xl object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
          <div className="mt-24">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {tabData.services.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center hover:scale-105 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-24 h-24 rounded-lg overflow-hidden mb-2"
                  >
                    <img
                      src={feature.image}
                      alt={feature.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <span className="text-gray-800 text-xs text-center">
                    {feature.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Tools Section */}
        <motion.section
          ref={(ref) => setRef("tools", ref)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-12 sm:py-16 scroll-mt-20 bg-gradient-to-r from-red-700 to-red-900 rounded-2xl px-4 sm:px-8 text-white"
          id="tools"
          data-aos="fade-up"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <motion.div
              className="flex-1"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              data-aos="fade-right"
            >
              <img
                src={tabData.tools.image}
                alt={tabData.tools.title}
                className="w-full border border-white h-auto rounded-xl shadow-2xl object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <div className="flex-1" data-aos="fade-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                {tabData.tools.title}
              </h2>
              <p className="text-base sm:text-lg text-white mb-8 leading-relaxed">
                {tabData.tools.description}
              </p>
              <div className="grid grid-cols-4 sm:grid-cols-4 gap-4">
                {tabData.tools.software.slice(0, 8).map((tool, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center hover:scale-105 transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-24 h-24 rounded-2xl overflow-hidden mb-2"
                    >
                      <img
                        src={figmaLogo}
                        alt={tool.name}
                        className="w-full h-full object-contain bg-white p-2"
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          ref={(ref) => setRef("plans", ref)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 sm:py-20 scroll-mt-20 "
          id="plans"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-gray-900">
                {tabData.plans.title}
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                {tabData.plans.description}
              </p>
            </div>

            {/* Full Width Image */}
            <motion.div
              className="mb-16"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={tabData.plans.image}
                alt={tabData.plans.title}
                className="w-full h-[350px] border-2 border-red-200 rounded-2xl shadow-2xl object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* 5 Cards in One Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {tabData.plans.plans.slice(0, 5).map((plan, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative group bg-white text-red-900 rounded-2xl shadow-lg p-6 flex flex-col justify-between h-full border border-red-200 transition-all duration-300"
                >
                  {/* Card Content */}
                  <div className="transition-all duration-300 group-hover:text-white">
                    <h3 className="text-lg  font-semibold mb-2">{plan.title}</h3>
                    <p className="text-sm  mb-6">{plan.description}</p>
                  </div>

                  {/* Button */}
                  <button className="mt-auto w-full py-2 rounded-lg bg-red-600 text-white font-semibold group-hover:bg-white group-hover:text-red-700 transition duration-300">
                    Get started
                  </button>

                  {/* Hover Overlay for Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 -z-10"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Why Us Section (Updated with Four Circular Progress Bars) */}
        <motion.section
          ref={(ref) => setRef("why-us", ref)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-12 sm:py-16 scroll-mt-20 bg-gradient-to-r from-red-700 to-red-900 rounded-2xl px-4 sm:px-8 text-white"
          id="why-us"
          data-aos="zoom-in"
        >
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-12">
            <div className="flex-1" data-aos="fade-left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                {tabData["why-us"].title}
              </h2>
              <p className="text-base sm:text-lg mb-8 leading-relaxed">
                {tabData["why-us"].description}
              </p>

              {/* Progress Bars for Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
                {tabData["why-us"].stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="text-2xl font-bold mb-2">
                      {stat.number}+
                    </div>
                    <div className="text-base mb-2">{stat.label}</div>
                    <div className="w-full bg-red-300 rounded-full h-2.5">
                      <motion.div
                        className="bg-white h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlighted Benefits */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 mb-12">
                {tabData["why-us"].highlightedBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                    }}
                    className="p-4 bg-white rounded-xl shadow-lg border border-red-600/30 transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex items-center mb-2">
                      <div className="bg-red-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg text-red-600 font-semibold">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="flex-1"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              data-aos="fade-right"
            >
              <img
                src={tabData["why-us"].image}
                alt={tabData["why-us"].title}
                className="w-full h-auto rounded-xl shadow-2xl object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>

          {/* Circular Progress Bars (Four) */}
          <div className="mt-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
              {[
                { label: "Client Satisfaction", percentage: 92 },
                { label: "Project Efficiency", percentage: 87 },
                { label: "Innovation Score", percentage: 78 },
                { label: "Team Expertise", percentage: 85 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative w-24 h-24">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        className="text-red-300"
                        strokeWidth="10"
                        stroke="currentColor"
                        fill="transparent"
                        r="45"
                        cx="50"
                        cy="50"
                      />
                      <motion.circle
                        className="text-white"
                        strokeWidth="10"
                        stroke="currentColor"
                        fill="transparent"
                        r="45"
                        cx="50"
                        cy="50"
                        strokeDasharray="283"
                        strokeDashoffset={283 - (283 * item.percentage) / 100}
                        strokeLinecap=""
                        initial={{ strokeDashoffset: 283 }}
                        whileInView={{
                          strokeDashoffset: 283 - (283 * item.percentage) / 100,
                        }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                      {item.percentage}%
                    </div>
                  </div>
                  <div className="text-base mt-2 text-center">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits List */}
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {tabData["why-us"].benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                  }}
                  className="p-6 bg-red-400/50 rounded-xl shadow-lg border border-red-600/30 hover:bg-red-800/70 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-center mb-3">
                    <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">{benefit.title}</h3>
                  </div>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Get Started Section */}
        <motion.section
          ref={(ref) => setRef("get-started", ref)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="get-started"
          className="relative py-20 sm:py-24 mt-20 rounded-xl text-white overflow-hidden"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src={architectureVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
          <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                {tabData["get-started"].title}
              </h2>
              <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
                {tabData["get-started"].description}
              </p>
              <div className="space-y-4 mb-8">
                {tabData["get-started"].steps.map((step, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-center"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold text-base">
                      {index + 1}
                    </div>
                    <span className="text-white text-lg">{step}</span>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(255, 255, 255, 0.6)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowSchedulingSection(true)}
                  className="px-6 py-3 bg-white text-black rounded-xl transition-all duration-300 font-semibold text-base shadow-lg"
                >
                  Schedule a Consultation
                </motion.button>
                <Link to="/contact-us">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(255, 255, 255, 0.6)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 border border-white text-white rounded-xl hover:bg-white hover:text-black transition-all duration-300 font-semibold text-base shadow-lg"
                  >
                    Contact Our Team
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Scheduling Section */}
        {showSchedulingSection && (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-12 sm:py-16 scroll-mt-20"
            id="scheduling-section"
            data-aos="fade-up"
          >
            <div className="container mx-auto px-4 sm:px-6">
              <Scheduling />
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default Architecture;
