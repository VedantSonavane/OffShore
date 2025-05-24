"use client"

import { useEffect, useState } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Facebook,
  Youtube,
  ArrowRight,
} from "lucide-react"

export default function ContactPage() {
  const [scrollY, setScrollY] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    // AOS-like animation setup
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0) translateX(0)"
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    // Parallax scroll effect
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@company.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Business St, Tech City, TC 12345",
      description: "Come say hello at our office",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 9AM-6PM",
      description: "Weekend appointments available",
    },
  ]

  const socialMedia = [
    {
      icon: Twitter,
      name: "Twitter",
      handle: "@company",
      url: "https://twitter.com/company",
      followers: "12.5K",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      handle: "/company/company",
      url: "https://linkedin.com/company/company",
      followers: "8.2K",
    },
    {
      icon: Github,
      name: "GitHub",
      handle: "@company",
      url: "https://github.com/company",
      followers: "15.3K",
    },
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@company",
      url: "https://instagram.com/company",
      followers: "25.1K",
    },
    {
      icon: Facebook,
      name: "Facebook",
      handle: "/company",
      url: "https://facebook.com/company",
      followers: "18.7K",
    },
    {
      icon: Youtube,
      name: "YouTube",
      handle: "/company",
      url: "https://youtube.com/company",
      followers: "45.2K",
    },
  ]
  const fontFamily =  "PlusJakartaSans"

  const inputStyle = {
    width: "100%",
    padding: "16px 20px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "16px",
    fontFamily,
    transition: "all 0.3s ease",
    backgroundColor: "#fff",
  }

  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px 32px",
    fontSize: "16px",
    fontWeight: "600",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textDecoration: "none",
    fontFamily,
    backgroundColor: "#000",
    color: "#fff",
  }

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "32px",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    border: "1px solid #e5e5e5",
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        color: "#000",
        overflowX: "hidden",
        fontFamily,
        lineHeight: "1.6",
      }}
    >
      {/* Hero Section with Parallax */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.5}px)`,
            willChange: "transform",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
            color: "#fff",
            maxWidth: "1024px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <h1
            className="animate-on-scroll"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: "bold",
              marginBottom: "24px",
              opacity: 0,
              transform: "translateY(32px)",
              transition: "all 1s ease",
              fontFamily,
            }}
          >
            Let's Connect
          </h1>
          <p
            className="animate-on-scroll"
            style={{
              fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
              marginBottom: "32px",
              opacity: 0,
              transform: "translateY(32px)",
              transition: "all 1s ease 0.3s",
              fontFamily,
            }}
          >
            Ready to start a conversation? We'd love to hear from you.
          </p>
          <button
            className="animate-on-scroll"
            style={{
              ...buttonStyle,
              backgroundColor: "#fff",
              color: "#000",
              fontSize: "18px",
              padding: "16px 32px",
              opacity: 0,
              transform: "translateY(32px)",
              transition: "all 1s ease 0.5s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#fff")}
          >
            Get In Touch <ArrowRight style={{ marginLeft: "8px", width: "20px", height: "20px" }} />
          </button>
        </div>
      </section>

      {/* Contact Information Section */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            className="animate-on-scroll"
            style={{
              textAlign: "center",
              marginBottom: "64px",
              opacity: 0,
              transform: "translateY(32px)",
              transition: "all 1s ease",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2.5rem, 5vw, 3rem)",
                fontWeight: "bold",
                marginBottom: "24px",
                background: "linear-gradient(135deg, #000000 0%, #434343 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily,
              }}
            >
              How to Reach Us
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "#6b7280",
                maxWidth: "512px",
                margin: "0 auto",
                fontFamily,
              }}
            >
              Multiple ways to connect with our team. Choose what works best for you.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "32px",
            }}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div
                  key={index}
                  className="animate-on-scroll"
                  style={{
                    ...cardStyle,
                    textAlign: "center",
                    opacity: 0,
                    transform: "translateY(32px)",
                    transition: `all 1s ease ${index * 200}ms`,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-8px)"
                    e.target.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)"
                    e.target.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <div
                    style={{
                      marginBottom: "24px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        padding: "16px",
                        backgroundColor: "#000",
                        borderRadius: "50%",
                      }}
                    >
                      <Icon style={{ width: "32px", height: "32px", color: "#fff" }} />
                    </div>
                  </div>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      marginBottom: "8px",
                      fontFamily,
                    }}
                  >
                    {info.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#000",
                      marginBottom: "4px",
                      fontFamily,
                    }}
                  >
                    {info.content}
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#6b7280",
                      fontFamily,
                    }}
                  >
                    {info.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Image Section */}
      <section style={{ padding: "96px 24px", backgroundColor: "#f9fafb" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
              gap: "64px",
              alignItems: "center",
            }}
          >
            {/* Contact Form */}
            <div
              className="animate-on-scroll"
              style={{
                opacity: 0,
                transform: "translateX(-50px)",
                transition: "all 1s ease",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.5rem)",
                  fontWeight: "bold",
                  marginBottom: "24px",
                  fontFamily,
                }}
              >
                Send us a message
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "#6b7280",
                  marginBottom: "32px",
                  fontFamily,
                }}
              >
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#374151",
                        fontFamily,
                      }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#000")}
                      onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#374151",
                        fontFamily,
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#000")}
                      onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                    />
                  </div>
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#374151",
                      fontFamily,
                    }}
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#000")}
                    onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#374151",
                      fontFamily,
                    }}
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#000")}
                    onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#374151",
                      fontFamily,
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: "120px",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#000")}
                    onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    ...buttonStyle,
                    alignSelf: "flex-start",
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#374151")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#000")}
                >
                  <Send style={{ marginRight: "8px", width: "20px", height: "20px" }} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Image */}
            <div
              className="animate-on-scroll"
              style={{
                opacity: 0,
                transform: "translateX(50px)",
                transition: "all 1s ease 0.3s",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Contact us"
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "cover",
                  borderRadius: "16px",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ padding: "0", height: "500px", position: "relative" }}>
        <div
          className="animate-on-scroll"
          style={{
            opacity: 0,
            transform: "translateY(32px)",
            transition: "all 1s ease",
            height: "100%",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799160891!2d-74.25987368715491!3d40.697670063539654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: "grayscale(100%) contrast(1.2)",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              color: "#fff",
              padding: "24px 32px",
              borderRadius: "12px",
              textAlign: "center",
              backdropFilter: "blur(10px)",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "8px",
                fontFamily,
              }}
            >
              Visit Our Office
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#d1d5db",
                fontFamily,
              }}
            >
              123 Business St, Tech City, TC 12345
            </p>
          </div>
        </div>
      </section>

      {/* Things Section */}
      <section style={{ padding: "96px 24px", backgroundColor: "#000", color: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            className="animate-on-scroll"
            style={{
              textAlign: "center",
              marginBottom: "64px",
              opacity: 0,
              transform: "translateY(32px)",
              transition: "all 1s ease",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2.5rem, 5vw, 3rem)",
                fontWeight: "bold",
                marginBottom: "24px",
                fontFamily,
              }}
            >
              What We Do
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "#d1d5db",
                maxWidth: "512px",
                margin: "0 auto",
                fontFamily,
              }}
            >
              Discover the services and solutions we offer to help your business grow
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "32px",
            }}
          >
            {[
              {
                title: "Web Development",
                description: "Custom web applications built with modern technologies and best practices.",
                features: ["React & Next.js", "Node.js Backend", "Database Design", "API Development"],
              },
              {
                title: "UI/UX Design",
                description: "Beautiful, user-centered designs that convert visitors into customers.",
                features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
              },
              {
                title: "Digital Strategy",
                description: "Comprehensive digital strategies to help your business thrive online.",
                features: ["Market Analysis", "Brand Strategy", "Growth Planning", "Performance Metrics"],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="animate-on-scroll"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "16px",
                  padding: "32px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  opacity: 0,
                  transform: "translateY(32px)",
                  transition: `all 1s ease ${index * 200}ms`,
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)"
                  e.target.style.transform = "translateY(-8px)"
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.05)"
                  e.target.style.transform = "translateY(0)"
                }}
              >
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    marginBottom: "16px",
                    fontFamily,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    color: "#d1d5db",
                    marginBottom: "24px",
                    lineHeight: "1.6",
                    fontFamily,
                  }}
                >
                  {service.description}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "8px",
                        color: "#9ca3af",
                        fontSize: "14px",
                        fontFamily,
                      }}
                    >
                      <div
                        style={{
                          width: "6px",
                          height: "6px",
                          backgroundColor: "#fff",
                          borderRadius: "50%",
                          marginRight: "12px",
                        }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section style={{ padding: "96px 24px", backgroundColor: "#f9fafb" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            className="animate-on-scroll"
            style={{
              textAlign: "center",
              marginBottom: "64px",
              opacity: 0,
              transform: "translateY(32px)",
              transition: "all 1s ease",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2.5rem, 5vw, 3rem)",
                fontWeight: "bold",
                marginBottom: "24px",
                background: "linear-gradient(135deg, #000000 0%, #434343 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily,
              }}
            >
              Follow Our Journey
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "#6b7280",
                maxWidth: "512px",
                margin: "0 auto",
                fontFamily,
              }}
            >
              Stay connected with us across all social media platforms
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {socialMedia.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate-on-scroll"
                  style={{
                    ...cardStyle,
                    textDecoration: "none",
                    color: "inherit",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    opacity: 0,
                    transform: "translateY(32px)",
                    transition: `all 1s ease ${index * 100}ms`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)"
                    e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <div
                    style={{
                      padding: "12px",
                      backgroundColor: "#000",
                      borderRadius: "50%",
                      flexShrink: 0,
                    }}
                  >
                    <Icon style={{ width: "24px", height: "24px", color: "#fff" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        marginBottom: "4px",
                        fontFamily,
                      }}
                    >
                      {social.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#6b7280",
                        marginBottom: "2px",
                        fontFamily,
                      }}
                    >
                      {social.handle}
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#9ca3af",
                        fontFamily,
                      }}
                    >
                      {social.followers} followers
                    </p>
                  </div>
                  <ArrowRight style={{ width: "20px", height: "20px", color: "#6b7280" }} />
                </a>
              )
            })}
          </div>
        </div>
      </section>

     
    </div>
  )
}
