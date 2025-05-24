import React, { useState, useEffect } from 'react';
import { ChevronDown, Shield, Users, Target, Eye, Award, Lightbulb, Heart, Phone, Mail, MapPin, Check } from 'lucide-react';
import architectureHero from "../../assets/aboutus.jpg";
import aboutus from "../../assets/aboutus.jpg";
import TeamImage from '../../assets/profileimage.avif';
import visionImage from '../../assets/vision.jpg';
import missionImage from '../../assets/mission.jpg';
import goalsImage from '../../assets/goals.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [followedMembers, setFollowedMembers] = useState([]);
  const [projects, setProjects] = useState(0);
  const [experience, setExperience] = useState(0);
  const [awards, setAwards] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const animateValue = (start, end, setter, duration = 1500) => {
      const range = end - start;
      let current = start;
      const increment = end > start ? 1 : -1;
      const stepTime = Math.abs(Math.floor(duration / range));
      const timer = setInterval(() => {
        current += increment;
        setter(current);
        if (current === end) clearInterval(timer);
      }, stepTime);
    };
    animateValue(0, 500, setProjects);
    animateValue(0, 15, setExperience);
    animateValue(0, 50, setAwards);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: 'Alice Johnson',
      role: 'Lead Architect who specializes in sustainable design',
      bio: 'Alice turns dreams into blueprints with her visionary designs.',
      followers: 312,
      likes: 48,
      isVerified: true,
    },
    {
      id: 2,
      name: 'Mark Patel',
      role: 'Project Manager with 8+ years experience',
      bio: 'Mark ensures everything runs on time, every time.',
      followers: 245,
      likes: 32,
      isVerified: true,
    },
    {
      id: 3,
      name: 'Sophie Lee',
      role: 'Interior Designer focused on modern aesthetics',
      bio: 'Sophie brings warmth and personality to every space.',
      followers: 189,
      likes: 27,
      isVerified: true,
    },
    {
      id: 4,
      name: 'Daniel Kim',
      role: 'Structural Engineer ensuring safety & innovation',
      bio: 'Daniel ensures your dreams stand strong and tall.',
      followers: 276,
      likes: 41,
      isVerified: true,
    },
  ];

  const handleFollow = (id) => {
    if (followedMembers.includes(id)) {
      setFollowedMembers(followedMembers.filter((memberId) => memberId !== id));
    } else {
      setFollowedMembers([...followedMembers, id]);
    }
  };

  const infrastructureFeatures = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption protecting your design concepts and personal information",
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Cloud Infrastructure",
      description: "Secure cloud storage with 99.9% uptime for all project files and communications",
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Advanced Tools",
      description: "Cutting-edge 3D modeling and VR visualization technology",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Resilient Backup Systems",
      description: "Automatic data backup and quick recovery to ensure business continuity",
    },
  ];

  const csrInitiatives = [
    {
      title: "Sustainable Design",
      description: "Committed to eco-friendly materials and energy-efficient solutions in every project",
    },
    {
      title: "Community Spaces",
      description: "Pro-bono design services for local schools and community centers annually",
    },
    {
      title: "Artisan Support",
      description: "Partnering with local craftspeople and suppliers to strengthen our community",
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div
        className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full bg-fixed bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${architectureHero})` }}
        data-aos="fade-in"
      >
        <div className="relative text-center px-4 z-10">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-4 drop-shadow-2xl">
            About Us
          </h1>
        </div>
      </div>

      {/* Genius Way Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" data-aos="fade-up">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-7xl w-full mx-auto">
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              The genius way to work better
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Luxe Interiors makes it easy to work smarter when you're creating dream spaces. Design, collaboration, and execution become more efficient ways to achieve stunning transformations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg w-full sm:w-auto">
                Schedule a Meet
              </button>
              <button className="border border-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 w-full sm:w-auto">
                Know More
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 max-w-md">
            <img
              src={aboutus || "/placeholder.svg"}
              alt="Designer on video call"
              className="rounded-xl w-full h-auto object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Vision/Mission/Goals Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6" data-aos="fade-up">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { title: "Our Vision", image: visionImage, description: "To be a global leader in design and innovation, shaping a future where purpose coexist." },
            { title: "Our Mission", image: missionImage, description: "Empowering communities through design excellence, innovation, and lasting impact." },
            { title: "Our Goals", image: goalsImage, description: "Drive sustainable growth, foster creativity, and inspire change across all sectors." },
            { title: "Our Motive", image: visionImage, description: "Building a community driven by design, purpose, and positive transformation." },
          ].map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-xl bg-black group hover:scale-105 transition-transform duration-500"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent px-4 sm:px-6 py-6 sm:py-8 flex flex-col justify-end text-white">
                <p className="text-xs sm:text-sm tracking-wide mb-1">2025 | {item.title.split(' ')[1]}</p>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{item.title}</h2>
                <p className="text-xs sm:text-sm text-gray-300 mb-4">{item.description}</p>
                <button className="text-white text-xs sm:text-sm font-medium border-t border-white/20 pt-2 w-fit">
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Infrastructure & Data Security */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">
              Uncompromising Infrastructure & Security
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your trust is our foundation. Our enterprise-grade infrastructure ensures your data is protected with cutting-edge security measures, enabling seamless and secure collaboration across your projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-20" data-aos="fade-up" data-aos-delay="100">
            {infrastructureFeatures.map((feature, index) => {
              const cardGradients = [
                'from-red-400 to-red-800',
                'from-green-400 to-green-800',
                'from-blue-400 to-blue-800',
                'from-yellow-400 to-yellow-600',
              ];
              const iconSmallGradients = [
                'from-red-400 to-red-600',
                'from-green-400 to-green-600',
                'from-blue-400 to-blue-600',
                'from-yellow-400 to-yellow-600',
              ];
              const cardGradient = cardGradients[index % cardGradients.length];
              const iconSmallGradient = iconSmallGradients[index % iconSmallGradients.length];

              return (
                <div
                  key={index}
                  className={`relative rounded-3xl p-4 sm:p-6 bg-gradient-to-br border-2 border-gray-100 ${cardGradient} group transition-transform duration-300 hover:scale-105 hover:shadow-xl`}
                  style={{ minHeight: '280px' }}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div
                    className={`absolute border-2 border-white z-50 top-4 right-4 rounded-full flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${iconSmallGradient} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="rounded-2xl h-full p-4 sm:p-6 flex flex-col justify-center text-center shadow-2xl border-2 border-white bg-opacity-20 backdrop-blur-md">
                    <h3 className="text-lg sm:text-xl font-extrabold text-white mb-4">{feature.title}</h3>
                    <p className="text-white leading-relaxed text-xs sm:text-sm">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-orange-100 rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg" data-aos="fade-right">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">Our Data Protection Commitment</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6 sm:mb-8">
                  Your design concepts, intellectual property, and personal information are safeguarded by our state-of-the-art security protocols. We prioritize your privacy with end-to-end encryption, regular security audits, and adherence to global compliance standards, ensuring your data remains secure at every step.
                </p>
                <ul className="space-y-4 text-gray-700 text-sm sm:text-base">
                  {[
                    "ISO 27001 Certified Infrastructure",
                    "Fully GDPR and CCPA Compliant",
                    "24/7 Real-Time Security Monitoring",
                    "Regular Penetration Testing & Vulnerability Assessments",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/security-details"
                  className="mt-6 sm:mt-8 inline-block px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More About Our Security
                </a>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=450&fit=crop"
                  alt="Secure data infrastructure"
                  className="rounded-xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 md:mt-20 text-center" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8 sm:mb-12">Security by the Numbers</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {[
                { stat: "99.99%", label: "Uptime Guarantee" },
                { stat: "256-bit", label: "End-to-End Encryption" },
                { stat: "50+", label: "Global Compliance Standards" },
              ].map((item, index) => (
                <div key={index} className="p-4 sm:p-6 bg-white rounded-xl shadow-lg" data-aos="zoom-in" data-aos-delay={index * 100}>
                  <p className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">{item.stat}</p>
                  <p className="text-gray-600 text-sm sm:text-base">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 0" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Meet Our <span className="text-blue-600">Dream Team</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Passionate designers, architects, and project managers united by a shared vision of creating extraordinary spaces that inspire and delight.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 transform hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={member.id * 100}
              >
                <div className="relative p-3">
                  <img
                    src={TeamImage || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-[200px] sm:h-[280px] object-cover rounded-2xl"
                  />
                  <div className="mt-4 px-2">
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-base sm:text-lg font-medium text-gray-800">{member.name}</h3>
                      {member.isVerified && (
                        <span className="bg-green-500 text-white p-0.5 rounded-full">
                          <Check className="w-3 h-3" />
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1 line-clamp-2">{member.role}</p>
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5 text-gray-500 text-xs sm:text-sm">
                          <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{member.followers}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-500 text-xs sm:text-sm">
                          <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{member.likes}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleFollow(member.id)}
                        className={`text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full transition-colors ${
                          followedMembers.includes(member.id)
                            ? 'bg-gray-200 text-gray-800'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                      >
                        {followedMembers.includes(member.id) ? 'Connecting' : 'Connect +'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-orange-50 to-yellow-50" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Corporate <span className="text-blue-600">Responsibility</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in giving back to our community and protecting our planet through sustainable design practices and meaningful social initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12" data-aos="fade-up" data-aos-delay="100">
            {csrInitiatives.map((initiative, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">{initiative.title}</h3>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">{initiative.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl" data-aos="fade-right">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">Our Impact in Numbers</h3>
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { number: "25", label: "Community Projects" },
                    { number: "80%", label: "Sustainable Materials" },
                    { number: "100+", label: "Local Artisans Supported" },
                    { number: "50%", label: "Carbon Footprint Reduction" },
                  ].map((item, index) => (
                    <div key={index} className="text-center" data-aos="zoom-in" data-aos-delay={index * 100}>
                      <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">{item.number}</div>
                      <div className="text-gray-600 text-xs sm:text-sm">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&h=400&fit=crop"
                  alt="Sustainable design practices"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;