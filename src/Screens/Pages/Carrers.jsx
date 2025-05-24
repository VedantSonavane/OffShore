"use client"

import { useEffect, useState } from "react"
import {
  ArrowRight,
  MapPin,
  Clock,
  Users,
  Zap,
  Shield,
  Heart,
  Coffee,
  Briefcase,
  Code,
  Palette,
  BarChart3,
} from "lucide-react"

export default function CareersPage() {
  const [scrollY, setScrollY] = useState(0)

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

  const positions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      icon: Code,
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "New York / Remote",
      type: "Full-time",
      icon: Palette,
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "London / Remote",
      type: "Full-time",
      icon: BarChart3,
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Berlin / Remote",
      type: "Full-time",
      icon: Shield,
    },
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs",
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Flexible hours and unlimited PTO policy",
    },
    {
      icon: Zap,
      title: "Growth & Learning",
      description: "Annual learning budget and conference attendance",
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative environment with amazing people",
    },
  ]

  // Use standard system font stack
  const fontFamily =  "PlusJakartaSans"

  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "500",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textDecoration: "none",
    fontFamily,
  }

  const primaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#000",
    color: "#fff",
  }

  const outlineButtonStyle = {
    ...buttonStyle,
    backgroundColor: "transparent",
    color: "#000",
    border: "1px solid #000",
  }

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "32px",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    border: "1px solid #e5e5e5",
  }

  const badgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    padding: "4px 12px",
    fontSize: "12px",
    fontWeight: "500",
    borderRadius: "20px",
    border: "1px solid #d1d5db",
    color: "#374151",
    backgroundColor: "transparent",
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
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.5}px)`,
            filter: "grayscale(100%) contrast(1.2)",
            willChange: "transform",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
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
            Build the Future
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
            Join our mission to create tomorrow's technology today
          </p>
          <button
            className="animate-on-scroll"
            style={{
              ...primaryButtonStyle,
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
            Explore Opportunities <ArrowRight style={{ marginLeft: "8px", width: "20px", height: "20px" }} />
          </button>
        </div>
      </section>

      {/* Company Culture Section */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "64px",
              alignItems: "center",
            }}
          >
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
                Our Culture
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  color: "#6b7280",
                  marginBottom: "24px",
                  lineHeight: "1.6",
                  fontFamily,
                }}
              >
                We believe in fostering an environment where innovation thrives, creativity is celebrated, and every
                voice matters. Our team is our greatest asset, and we're committed to creating a workplace where
                everyone can do their best work.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {["Innovation-first mindset", "Collaborative team environment", "Continuous learning culture"].map(
                  (item, index) => (
                    <div key={index} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          backgroundColor: "#000",
                          borderRadius: "50%",
                        }}
                      />
                      <span style={{ color: "#374151", fontFamily }}>{item}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
            <div
              className="animate-on-scroll"
              style={{
                opacity: 0,
                transform: "translateX(50px)",
                transition: "all 1s ease 0.3s",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                style={{
                  borderRadius: "16px",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  filter: "grayscale(100%)",
                  transition: "all 0.5s ease",
                  width: "100%",
                  height: "auto",
                }}
                onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")}
                onMouseLeave={(e) => (e.target.style.filter = "grayscale(100%)")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div
        style={{
          background: "linear-gradient(90deg, transparent 0%, #e5e5e5 50%, transparent 100%)",
          height: "1px",
          width: "100%",
        }}
      />

      {/* Open Positions Section */}
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
              Open Positions
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
              Discover your next career opportunity and join our team of innovators
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {positions.map((position, index) => {
              const Icon = position.icon
              return (
                <div
                  key={index}
                  className="animate-on-scroll"
                  style={{
                    ...cardStyle,
                    opacity: 0,
                    transform: "translateY(32px)",
                    transition: `all 1s ease ${index * 200}ms`,
                  }}
                  onMouseEnter={(e) => (e.target.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1)")}
                  onMouseLeave={(e) => (e.target.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)")}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "16px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                      <div
                        style={{
                          padding: "12px",
                          backgroundColor: "#000",
                          borderRadius: "8px",
                        }}
                      >
                        <Icon style={{ width: "24px", height: "24px", color: "#fff" }} />
                      </div>
                      <div>
                        <h3
                          style={{
                            fontSize: "20px",
                            fontWeight: "600",
                            marginBottom: "8px",
                            fontFamily,
                          }}
                        >
                          {position.title}
                        </h3>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                            color: "#6b7280",
                            flexWrap: "wrap",
                          }}
                        >
                          <span style={{ ...badgeStyle, fontFamily }}>{position.department}</span>
                          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                            <MapPin style={{ width: "16px", height: "16px" }} />
                            <span style={{ fontSize: "14px", fontFamily }}>{position.location}</span>
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                            <Clock style={{ width: "16px", height: "16px" }} />
                            <span style={{ fontSize: "14px", fontFamily }}>{position.type}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      style={outlineButtonStyle}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#000"
                        e.target.style.color = "#fff"
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "transparent"
                        e.target.style.color = "#000"
                      }}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        style={{
          padding: "96px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.1,
            backgroundImage: `url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.3}px)`,
            filter: "grayscale(100%)",
            willChange: "transform",
          }}
        />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 10 }}>
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
              Why Join Us?
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
              We offer more than just a job - we provide a platform for growth, innovation, and making a real impact
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "32px",
            }}
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="animate-on-scroll"
                  style={{
                    ...cardStyle,
                    textAlign: "center",
                    background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    opacity: 0,
                    transform: "translateY(32px)",
                    transition: `all 1s ease ${index * 200}ms`,
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
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
                      marginBottom: "16px",
                      fontFamily,
                    }}
                  >
                    {benefit.title}
                  </h3>
                  <p style={{ color: "#6b7280", fontFamily }}>{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section
        style={{
          padding: "96px 24px",
          backgroundColor: "#000",
          color: "#fff",
        }}
      >
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
              Application Process
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
              Our streamlined process ensures we find the perfect fit for both you and our team
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "32px",
            }}
          >
            {[
              { step: "01", title: "Apply", description: "Submit your application and portfolio" },
              { step: "02", title: "Screen", description: "Initial screening call with our team" },
              { step: "03", title: "Interview", description: "Technical and cultural fit interviews" },
              { step: "04", title: "Offer", description: "Welcome to the team!" },
            ].map((process, index) => (
              <div
                key={index}
                className="animate-on-scroll"
                style={{
                  textAlign: "center",
                  opacity: 0,
                  transform: "translateY(32px)",
                  transition: `all 1s ease ${index * 200}ms`,
                }}
              >
                <div
                  style={{
                    fontSize: "48px",
                    fontWeight: "bold",
                    color: "#6b7280",
                    marginBottom: "16px",
                    fontFamily,
                  }}
                >
                  {process.step}
                </div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    marginBottom: "12px",
                    fontFamily,
                  }}
                >
                  {process.title}
                </h3>
                <p style={{ color: "#9ca3af", fontFamily }}>{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "96px 24px", backgroundColor: "#f9fafb" }}>
        <div
          className="animate-on-scroll"
          style={{
            maxWidth: "1024px",
            margin: "0 auto",
            textAlign: "center",
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
            Ready to Start?
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#6b7280",
              marginBottom: "32px",
              maxWidth: "512px",
              margin: "0 auto 32px auto",
              fontFamily,
            }}
          >
            Take the next step in your career journey. We're excited to hear from you and learn about what you can bring
            to our team.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              style={{
                ...primaryButtonStyle,
                fontSize: "18px",
                padding: "16px 32px",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#374151")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#000")}
            >
              <Briefcase style={{ marginRight: "8px", width: "20px", height: "20px" }} />
              View All Positions
            </button>
            <button
              style={{
                ...outlineButtonStyle,
                fontSize: "18px",
                padding: "16px 32px",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#000"
                e.target.style.color = "#fff"
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent"
                e.target.style.color = "#000"
              }}
            >
              Learn More About Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}