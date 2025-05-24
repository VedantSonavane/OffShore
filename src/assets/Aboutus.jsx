import React, { useState, useEffect } from 'react';
import { ChevronDown, Shield, Users, Target, Eye, Award, Lightbulb, Heart, Phone, Mail, MapPin } from 'lucide-react';
import architectureHero from "../../assets/aboutus.jpg";
import visionImage from '../../assets/vision.jpg';
import missionImage from '../../assets/mission.jpg';
import goalsImage from '../../assets/goals.jpg'

const AboutPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, transform: 'translateY(60px)' },
    animate: { opacity: 1, transform: 'translateY(0px)' },
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
  };

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Principal Designer & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=400&h=400&fit=crop&crop=face",
      bio: "15+ years transforming spaces with innovative design solutions"
    },
    {
      name: "Marcus Rodriguez",
      role: "Senior Interior Architect",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Specialist in sustainable luxury residential projects"
    },
    {
      name: "Emily Watson",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Award-winning designer focused on contemporary aesthetics"
    },
    {
      name: "David Kim",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Ensuring seamless execution from concept to completion"
    }
  ];

  const infrastructureFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption protecting your design concepts and personal information"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Secure cloud storage with 99.9% uptime for all project files and communications"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Advanced Tools",
      description: "Cutting-edge 3D modeling and VR visualization technology"
    }
  ];

  const csrInitiatives = [
    {
      title: "Sustainable Design",
      description: "Committed to eco-friendly materials and energy-efficient solutions in every project"
    },
    {
      title: "Community Spaces",
      description: "Pro-bono design services for local schools and community centers annually"
    },
    {
      title: "Artisan Support",
      description: "Partnering with local craftspeople and suppliers to strengthen our community"
    }
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div

        className="relative h-[500px] sm:h-[600px] w-full bg-fixed bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${architectureHero})` }}
      >
        <div className="relative text-center px-4 z-10" data-aos="fade-up">
          <h1

            className="text-8xl font-extrabold text-white tracking-tight mb-4 drop-shadow-2xl"
          >
            About Us
          </h1>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8" style={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900">
                Redefining <span className="text-blue-600 font-extrabold">Interior Excellence</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                For over a decade, Luxe Interiors has been at the forefront of luxury interior design,
                transforming spaces into masterpieces that reflect our clients' personalities and aspirations.
                We believe that every space has a story to tell, and our role is to help it speak eloquently.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From intimate residential sanctuaries to grand commercial spaces, we approach each project
                with meticulous attention to detail, innovative thinking, and an unwavering commitment to excellence.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-blue-600">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-blue-600">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-blue-600">50+</div>
                  <div className="text-gray-600">Awards Won</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=700&fit=crop"
                alt="Luxury interior design"
                className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Vision Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-black group hover:scale-105 transition-transform duration-500">
            <img
              src={visionImage}
              alt="Vision"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent px-6 py-8 flex flex-col justify-end text-white">
              <p className="text-sm tracking-wide mb-1">2025 | Vision</p>
              <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
              <p className="text-sm text-gray-300 mb-4">
                To be a global leader in design and innovation, shaping a future where purpose coexist.
              </p>
              <button className="text-white text-sm font-medium border-t border-white/20 pt-2 w-fit">
                See More
              </button>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-black group hover:scale-105 transition-transform duration-500">
            <img
              src={missionImage}
              alt="Mission"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent px-6 py-8 flex flex-col justify-end text-white">
              <p className="text-sm tracking-wide mb-1">2025 | Mission</p>
              <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
              <p className="text-sm text-gray-300 mb-4">
                Empowering communities through design excellence, innovation, and lasting impact.
              </p>
              <button className="text-white text-sm font-medium border-t border-white/20 pt-2 w-fit">
                See More
              </button>
            </div>
          </div>

          {/* Goals Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-black group hover:scale-105 transition-transform duration-500">
            <img
              src={goalsImage}
              alt="Goals"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent px-6 py-8 flex flex-col justify-end text-white">
              <p className="text-sm tracking-wide mb-1">2025 | Goals</p>
              <h2 className="text-2xl font-semibold mb-2">Our Goals</h2>
              <p className="text-sm text-gray-300 mb-4">
                Drive sustainable growth, foster creativity, and inspire change across all sectors.
              </p>
              <button className="text-white text-sm font-medium border-t border-white/20 pt-2 w-fit">
                See More
              </button>
            </div>
          </div>

          {/* Motive Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-black group hover:scale-105 transition-transform duration-500">
            <img
              src={visionImage}
              alt="Motive"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent px-6 py-8 flex flex-col justify-end text-white">
              <p className="text-sm tracking-wide mb-1">2025 | Motive</p>
              <h2 className="text-2xl font-semibold mb-2">Our Motive</h2>
              <p className="text-sm text-gray-300 mb-4">
                Building a community driven by design, purpose, and positive transformation.
              </p>
              <button className="text-white text-sm font-medium border-t border-white/20 pt-2 w-fit">
                See More
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* Infrastructure & Data Security */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Infrastructure & <span className="text-amber-600">Security</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trust is paramount. We've invested in enterprise-grade infrastructure to protect
              your data and ensure seamless collaboration throughout your project journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {infrastructureFeatures.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Data Protection Promise</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We understand that your design concepts and personal information are valuable assets.
                  Our infrastructure includes end-to-end encryption, regular security audits, and
                  compliance with international data protection standards.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><Shield className="w-4 h-4 text-amber-600 mr-2" /> ISO 27001 Certified</li>
                  <li className="flex items-center"><Shield className="w-4 h-4 text-amber-600 mr-2" /> GDPR Compliant</li>
                  <li className="flex items-center"><Shield className="w-4 h-4 text-amber-600 mr-2" /> 24/7 Security Monitoring</li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=400&fit=crop"
                  alt="Data security infrastructure"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Meet Our <span className="text-amber-600">Dream Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate designers, architects, and project managers united by a shared vision
              of creating extraordinary spaces that inspire and delight.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-4"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Corporate <span className="text-amber-600">Responsibility</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in giving back to our community and protecting our planet through
              sustainable design practices and meaningful social initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {csrInitiatives.map((initiative, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100"
              >
                <Heart className="w-12 h-12 text-amber-600 mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{initiative.title}</h3>
                <p className="text-gray-600 leading-relaxed">{initiative.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Impact in Numbers</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-600 mb-2">25</div>
                    <div className="text-gray-600 text-sm">Community Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-600 mb-2">80%</div>
                    <div className="text-gray-600 text-sm">Sustainable Materials</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-600 mb-2">100+</div>
                    <div className="text-gray-600 text-sm">Local Artisans Supported</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-600 mb-2">50%</div>
                    <div className="text-gray-600 text-sm">Carbon Footprint Reduction</div>
                  </div>
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

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Ready to Transform <span className="text-amber-400">Your Space?</span>
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's collaborate to create something extraordinary together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              View Portfolio
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-12 pt-8 border-t border-gray-700">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-amber-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-amber-400" />
              <span>hello@luxeinteriors.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-400" />
              <span>New York, NY</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;