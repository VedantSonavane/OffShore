import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import architectureHero from "../../assets/architecture.png";
import serviceImage from "../../assets/architecture.png";
import toolsImage from "../../assets/architecttools.png";
import plansImage from "../../assets/architectplans.png";
import whyUsImage from "../../assets/architectwhy.png";
import getStartedImage from "../../assets/architecture.png";
import { Link } from "react-router-dom";
import architectureVideo from "../../assets/architecture.mp4";
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
    { id: "faq", label: "FAQ" },
  ];

  const tabData = {
    services: {
      title: "Comprehensive Admin  Services",
      description:
        "We provide end-to-end Admin  solutions from concept to completion. Our team delivers innovative designs tailored to your specific needs and vision.",
      image: architectureHero,
      features: [

        { name: "EMAIL HANDLING", image: serviceImage },
        { name: "REPORT MANAGEMENT", image: serviceImage },
        { name: "MANAGING SPREADSHEETS", image: serviceImage },
        { name: "INVOICE MANAGEMENT", image: serviceImage },
        { name: "CRM MANAGEMENT", image: serviceImage },
        { name: "PROJECT COORDINATION", image: serviceImage },
        { name: "DATA MANAGEMENT", image: serviceImage },
        { name: "CALENDAR MANAGEMENT", image: serviceImage },
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
      title: "Why Choose Our Admin  Services?",
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
          title: "Comprehensive Workspace Setup",
          description:
            "Includes all office space, desks, and essential tools to ensure your remote team operates efficiently from day one.",
        },

        {
          title: "Payroll and Benefits Management",
          description:
            "Handles payroll administration, taxes, and benefits, reducing compliance risks and internal workload.",
        },
        {
          title: "Remote Worker Enablement",
          description:
            "Equips teams with the necessary tools, training, and support to excel in remote work environments.",
        },
        {
          title: "Employee Health Coverage",
          description:
            "Includes family health insurance for team members, ensuring well-being and peace of mind.",
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
    faq: {
      title: "Frequently Asked Questions",
      description: "Here are some of the frequently asked questions",
      faqs: [
        {
          question: "What types of interior design projects do you handle?",
          answer:
            "We handle a wide range of projects, including residential, commercial, and hospitality spaces. From schematic design to 3D rendering, our team manages every aspect to bring your vision to life.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
          ),
        },
        {
          question: "How long does a typical interior design project take?",
          answer:
            "Project timelines vary based on scope and complexity. A typical residential project may take 3-6 months, while commercial projects can range from 6-12 months, depending on requirements.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          ),
        },
        {
          question: "Can you work with my existing tools and software?",
          answer:
            "Yes, we integrate seamlessly with over 100 tools, including Zoom, Slack, and Salesforce, ensuring smooth collaboration with your existing workflows.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
          ),
        },
        {
          question: "What is included in your design process?",
          answer:
            "Our process includes consultation, schematic design, design development, construction documents, and final execution, ensuring a comprehensive approach tailored to your needs.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
          ),
        },
        {
          question: "How do you ensure the quality of your designs?",
          answer:
            "We conduct rigorous quality checks at every stage, employ skilled professionals trained to international standards, and use advanced tools like 3D modeling and rendering to ensure precision and excellence.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              />
            </svg>
          ),
        },
        {
          question: "What is the cost structure for your services?",
          answer:
            "We offer flexible pricing models, including hourly billing ($50/hr), fixed fee ($5,000/project), project-based ($10,000/project), dedicated team ($20,000/mo), and custom performance-based pricing.",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
              />
            </svg>
          ),
        },
      ],
    },
    "get-started": {
      title: "Start Your Admin  Project Today",
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

  const [activeIndex, setActiveIndex] = useState(0);
  const features = tabData.services.features;
  const doubledFeatures = [...features, ...features]; // Double for continuous loop
  const imageWidth = 100; // w-24 (24 * 4px/rem = 96px)
  const gap = 16; // mx-2 (2 * 0.5rem * 16px/rem = 16px)

  // Auto-slide with pause
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === features.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Pause for 3 seconds

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="min-h-screen">
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
            Admin
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
        className={`z-20 bg-gray-500 backdrop-blur-xl shadow-lg transition-all duration-300 ${isSticky ? "fixed top-[72px] left-0 right-0 shadow-xl" : "relative"
          }`}
      >
        <div className="container flex justify-center items-center mx-auto ">
          <div className="flex overflow-x-auto scrollbar-hide py-3">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold transition-all duration-300 mx-1 text-white hover:text-gray-600 hover:bg-gray-100 rounded-md`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-600"
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
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 px-4 sm:px-8">
            <div className="flex-1" data-aos="fade-right">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {tabData.services.title}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                {tabData.services.description}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, backgroundColor: "#f1f5f9" }}
                    className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="bg-gray-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-gray-600"
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
                    <span className="text-gray-800 text-base">{feature.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex-1" data-aos="fade-left">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative w-full h-[600px]"
              >
                <img
                  src={features[activeIndex].image}
                  alt={features[activeIndex].name}
                  className="w-full h-[400px] rounded-xl shadow-2xl object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 w-full h-[140px] overflow-hidden">
                  <motion.div
                    className="flex"
                    animate={{
                      x: `-${activeIndex * (imageWidth + gap)}px`,
                      transition: {
                        x: {
                          duration: 0.5,
                          ease: "easeInOut",
                        },
                      },
                    }}
                    style={{ width: `${doubledFeatures.length * (imageWidth + gap)}px` }}
                  >
                    {doubledFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center mx-2 py-2"
                        onClick={() => setActiveIndex(index % features.length)}
                      >
                        <div
                          className={`w-24 h-24 rounded-lg overflow-hidden mb-1 cursor-pointer ${activeIndex === index % features.length ? "scale-105" : ""
                            }`}
                        >
                          <img
                            src={feature.image}
                            alt={feature.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-gray-800 text-xs text-center">
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
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
          className="py-12 sm:py-16 scroll-mt-20 rounded-2xl px-4 sm:px-8 text-white"
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
                className="w-full border border-white h-[550px] rounded-xl shadow-2xl object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <div className="flex-1" data-aos="fade-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                {tabData.tools.title}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
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

        {/* Plans Section */}
        <motion.section
          ref={(ref) => setRef("plans", ref)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 sm:py-20 scroll-mt-20"
          id="plans"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-extrabold text-gray-900">
                {tabData.plans.title}
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                {tabData.plans.description}
              </p>
            </div>
            <motion.div
              className="mb-12"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={tabData.plans.image}
                alt={tabData.plans.title}
                className="w-full h-[350px] border-2 border-gray-200 rounded-2xl shadow-2xl object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {tabData.plans.plans.slice(0, 5).map((plan, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative group bg-white text-gray-900 rounded-2xl shadow-lg p-6 flex flex-col justify-between h-full border border-gray-500 transition-all duration-300"
                >
                  <div className="transition-all duration-300 group-hover:text-white">
                    <h3 className="text-lg font-semibold mb-2">{plan.title}</h3>
                    <p className="text-sm mb-6">{plan.description}</p>
                  </div>
                  <button className="mt-auto w-full py-2 rounded-lg bg-gray-600 text-white font-semibold group-hover:bg-white group-hover:text-gray-700 transition duration-300">
                    Get started
                  </button>
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-700 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 -z-10"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Why Us Section */}
        <motion.section
          ref={(ref) => setRef("why-us", ref)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-12 sm:py-16 scroll-mt-20 rounded-2xl px-4 sm:px-8 text-gray-800"
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
                    <div className="w-full bg-gray-300 rounded-full h-2.5">
                      <motion.div
                        className="bg-gray-500 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 mb-12">
                {tabData["why-us"].highlightedBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                    }}
                    className="p-4 bg-white rounded-xl shadow-lg border border-gray-600/30 transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex items-center mb-2">
                      <div className="bg-gray-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
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
                      <h3 className="text-lg text-gray-600 font-semibold">
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
                className="w-full h-[550px] border border-white rounded-xl shadow-2xl object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
          <div className="py-16 px-4 sm:px-6 lg:px-20">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-gray-800">Our Expertise</h2>
              <p className="text-gray-500 mt-3 text-base max-w-xl mx-auto">
                We specialize in delivering solutions that drive real results. Here's what makes us stand out.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {tabData["why-us"].benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center bg-white rounded-3xl shadow-md p-8 border border-gray-200 transform transition-all duration-300 hover:scale-105 hover:bg-gray-500 hover:text-white hover:shadow-2xl"
                >
                  <div className="mb-6">
                    <div className="flex items-center justify-center w-12 h-12 border border-gray-500 rounded-full bg-gray-100 text-gray-600 shadow-md transition-all duration-300 group-hover:bg-white group-hover:text-gray-800">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
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

        {/* FAQ Section */}
        <motion.section
          ref={(ref) => setRef("faq", ref)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-12 sm:py-16 scroll-mt-20  rounded-2xl px-4 sm:px-8"
          id="faq"
          data-aos="fade-up"
        >
          <div className="  p-4 sm:p-8 rounded-lg ">
            <h4 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">
              {tabData.faq.title}
            </h4>
            <p className="text-center text-gray-600 text-sm mt-2">
              {tabData.faq.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-12 px-2 xl:px-12 mt-4">
              {tabData.faq.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex space-x-8 mt-8"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div>{faq.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-700">{faq.question}</h4>
                    <p className="text-gray-600 my-2">{faq.answer}</p>
                    <Link
                      to="/contact-us"
                      className="text-gray-600 hover:text-gray-800 hover:underline capitalize"
                      title="Read More"
                    >
                      Read More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Architecture;