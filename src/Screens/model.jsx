import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Clock, DollarSign, Layers, Users, TrendingUp } from 'lucide-react';
import card1 from "../assets/architecture.webp";
import card2 from "../assets/interior.webp";
import card3 from "../assets/BIM.webp";
import card4 from "../assets/3DVisualization.webp";
import card6 from "../assets/it.webp";

const Model = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [progress, setProgress] = useState(0);

  const sections = [
    {
      title: "Hourly Billing Model",
      description:
        "Clients are billed based on the number of hours worked by the outsourcing team. Suitable for projects with dynamic requirements and variable scopes.",
      image: card3,
      colorClass: "bg-red-500",
      icon: <Clock className="h-6 w-6 text-red-500 mr-2" />,
    },
    {
      title: "Fixed Fee Model",
      description:
        "A predetermined, fixed cost is agreed upon for the entire project.Appropriate for well-defined projects with clear specifications.",
      image: card2,
      colorClass: "bg-yellow-500",
      icon: <DollarSign className="h-6 w-6 text-yellow-500 mr-2" />,
    },
    {
      title: "Project Based Model",
      description:
        "Costs are determined based on the overall scope and milestones of the project.Ideal for projects with distinct phases and deliverables.",
      image: card4,
      colorClass: "bg-green-500",
      icon: <Layers className="h-6 w-6 text-green-500 mr-2" />,
    },
    {
      title: "Dedicated Team Model",
      description:
        "The outsourcing firm provides a dedicated team of architects and professionals exclusively for the client.Suited for long-term projects requiring ongoing collaboration and support.",
      image: card1,
      colorClass: "bg-blue-500",
      icon: <Users className="h-6 w-6 text-blue-500 mr-2" />,
    },
    {
      title: "Performance Model",
      description:
        "Payment is tied to specific project outcomes or performance metrics.Encourages the outsourcing firm to meet or exceed predefined goals.",
      image: card6,
      colorClass: "bg-purple-500",
      icon: <TrendingUp className="h-6 w-6 text-purple-500 mr-2" />,
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % sections.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sections.length]);

  useEffect(() => {
    setProgress(0);
    const timer = setTimeout(() => setProgress(100), 50);
    return () => clearTimeout(timer);
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-10">
      {/* Header */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h1 className="text-[60px] font-bold text-[#0d3557] mb-4 tracking-tight">
          Scalable Productivity Models
        </h1>
        <p className="text-base sm:text-lg text-[#0d3557] max-w-2xl mx-auto">
          Optimised for your success
        </p>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-6 px-4 md:px-8">
        {/* Accordion Panel */}
        <div className="w-full md:w-1/2 bg-white space-y-4">
          {sections.map((section, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              {/* Accordion Item */}
              <div
                className="p-4 cursor-pointer rounded-md transition "
                onClick={() => setActiveSection(index)}
              >
                <div className="flex items-center mb-2">
                  {section.icon}
                  <h1
                    className={`text-[20px] tracking-wide font-bold transition-all duration-300 ${activeSection === index ? 'text-[#0d3557]' : 'text-gray-500'
                      }`}
                  >
                    {section.title}
                  </h1>
                </div>
                {/* Description */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${activeSection === index ? 'max-h-40 opacity-100 mt-2 p-2' : 'max-h-0 opacity-0'
                    }`}
                >
                  <p className="text-[16px]  text-[#0d3557]">{section.description}</p>
                </div>
                {/* Progress Bar */}
                <div className="h-0.5 bg-gray-200 w-full mt-3 rounded">
                  {activeSection === index && (
                    <div
                      className={`h-0.5 transition-all duration-[5000ms] ease-in-out rounded ${section.colorClass}`}
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </div>
              </div>
              {/* Mobile Image Box (Visible only on mobile) */}
              <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${activeSection === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="relative w-full h-64 mt-4 rounded-md overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 right-4">
                    <button className="bg-white/30 text-white px-4 py-2 rounded-full backdrop-blur-md shadow-md hover:bg-white/50 transition duration-300">
                      Choose Model
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Image Panel (Visible only on desktop) */}
        <div
          className="hidden md:flex md:w-1/2 flex-col items-center justify-center"
          data-aos="fade-left"
        >
          <div className="relative w-full max-w-[600px] h-[400px] rounded-md overflow-hidden">
            <img
              key={sections[activeSection].image}
              src={sections[activeSection].image}
              alt={sections[activeSection].title}
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
            />
            <div className="absolute bottom-4 right-4">
              <button className="bg-white/30 text-white px-4 py-2 rounded-full backdrop-blur-md shadow-md hover:bg-white/50 transition duration-300">
                Choose Model
              </button>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-base sm:text-lg text-[#0d3557]">
              Not sure which model is right for you?{" "}
              <a
                href="#schdeule"
                className="text-blue-600 underline regular cursor-pointer"
              >
                Schedule a meet
              </a>{" "}
              with our experts
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Model;