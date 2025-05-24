"use client"

import { useEffect, useState } from "react"
import {
  Calendar,
  Clock,
  User,
  Search,
  Heart,
  MessageCircle,
  Share2,
  BookOpen,
  Code,
  Palette,
  Zap,
  Mail,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react"

export default function BlogPage() {
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

  const featuredPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the cutting-edge technologies and methodologies shaping the future of web development.",
      author: "Sarah Chen",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      id: 2,
      title: "Building Scalable Design Systems",
      excerpt: "Learn how to create and maintain design systems that grow with your organization.",
      author: "Marcus Johnson",
      date: "Dec 12, 2024",
      readTime: "6 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
  ]

  const recentPosts = [
    {
      id: 3,
      title: "Mastering CSS Grid: Advanced Layouts Made Simple",
      excerpt: "Deep dive into CSS Grid and discover how to create complex layouts with ease.",
      author: "Alex Rivera",
      date: "Dec 10, 2024",
      readTime: "5 min read",
      category: "CSS",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      likes: 42,
      comments: 8,
    },
    {
      id: 4,
      title: "The Art of Code Reviews: Best Practices",
      excerpt: "Transform your code review process with these proven strategies and techniques.",
      author: "Emma Thompson",
      date: "Dec 8, 2024",
      readTime: "7 min read",
      category: "Development",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      likes: 38,
      comments: 12,
    },
    {
      id: 5,
      title: "UX Research Methods That Actually Work",
      excerpt: "Practical approaches to user research that deliver actionable insights.",
      author: "David Park",
      date: "Dec 5, 2024",
      readTime: "9 min read",
      category: "UX Research",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      likes: 56,
      comments: 15,
    },
    {
      id: 6,
      title: "Performance Optimization: Beyond the Basics",
      excerpt: "Advanced techniques for optimizing web application performance.",
      author: "Lisa Wang",
      date: "Dec 3, 2024",
      readTime: "10 min read",
      category: "Performance",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      likes: 73,
      comments: 21,
    },
    {
      id: 7,
      title: "Accessibility in Modern Web Design",
      excerpt: "Creating inclusive digital experiences that work for everyone.",
      author: "Jordan Smith",
      date: "Nov 30, 2024",
      readTime: "6 min read",
      category: "Accessibility",
      image:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      likes: 45,
      comments: 9,
    },
    {
      id: 8,
      title: "The Psychology of User Interface Design",
      excerpt: "Understanding how users think and behave to create better interfaces.",
      author: "Rachel Green",
      date: "Nov 28, 2024",
      readTime: "8 min read",
      category: "Psychology",
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      likes: 62,
      comments: 18,
    },
  ]

  const categories = [
    { name: "Technology", count: 24, icon: Code },
    { name: "Design", count: 18, icon: Palette },
    { name: "Development", count: 32, icon: Zap },
    { name: "UX Research", count: 15, icon: Search },
  ]

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
    overflow: "hidden",
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
    backgroundColor: "#f3f4f6",
    color: "#374151",
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
            backgroundImage: `url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
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
            Insights & Ideas
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
            Exploring the intersection of technology, design, and human experience
          </p>
          <div
            className="animate-on-scroll"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
              opacity: 0,
              transform: "translateY(32px)",
              transition: "all 1s ease 0.5s",
            }}
          >
            <button
              style={{
                ...primaryButtonStyle,
                backgroundColor: "#fff",
                color: "#000",
                fontSize: "18px",
                padding: "16px 32px",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#fff")}
            >
              <BookOpen style={{ marginRight: "8px", width: "20px", height: "20px" }} />
              Start Reading
            </button>
            <button
              style={{
                ...outlineButtonStyle,
                borderColor: "#fff",
                color: "#fff",
                fontSize: "18px",
                padding: "16px 32px",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#fff"
                e.target.style.color = "#000"
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent"
                e.target.style.color = "#fff"
              }}
            >
              <Search style={{ marginRight: "8px", width: "20px", height: "20px" }} />
              Explore Topics
            </button>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
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
              Featured Articles
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
              Handpicked stories that are shaping the future of technology and design
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "32px",
            }}
          >
            {featuredPosts.map((post, index) => (
              <article
                key={post.id}
                className="animate-on-scroll"
                style={{
                  ...cardStyle,
                  opacity: 0,
                  transform: "translateY(32px)",
                  transition: `all 1s ease ${index * 300}ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)"
                  e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div style={{ position: "relative" }}>
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    style={{
                      width: "100%",
                      height: "240px",
                      objectFit: "cover",
                      filter: "grayscale(100%)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")}
                    onMouseLeave={(e) => (e.target.style.filter = "grayscale(100%)")}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      left: "16px",
                    }}
                  >
                    <span style={{ ...badgeStyle, backgroundColor: "#000", color: "#fff" }}>Featured</span>
                  </div>
                </div>
                <div style={{ padding: "32px" }}>
                  <div style={{ marginBottom: "16px" }}>
                    <span style={badgeStyle}>{post.category}</span>
                  </div>
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      marginBottom: "12px",
                      fontFamily,
                      lineHeight: "1.3",
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{
                      color: "#6b7280",
                      marginBottom: "20px",
                      fontFamily,
                      lineHeight: "1.6",
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontSize: "14px",
                      color: "#9ca3af",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <User style={{ width: "16px", height: "16px" }} />
                        <span style={{ fontFamily }}>{post.author}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <Calendar style={{ width: "16px", height: "16px" }} />
                        <span style={{ fontFamily }}>{post.date}</span>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <Clock style={{ width: "16px", height: "16px" }} />
                      <span style={{ fontFamily }}>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
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

      {/* Recent Posts Section */}
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
              Recent Posts
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
              Stay up to date with our latest insights and discoveries
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "32px",
            }}
          >
            {recentPosts.map((post, index) => (
              <article
                key={post.id}
                className="animate-on-scroll"
                style={{
                  ...cardStyle,
                  opacity: 0,
                  transform: "translateY(32px)",
                  transition: `all 1s ease ${index * 150}ms`,
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
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    filter: "grayscale(100%)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")}
                  onMouseLeave={(e) => (e.target.style.filter = "grayscale(100%)")}
                />
                <div style={{ padding: "24px" }}>
                  <div style={{ marginBottom: "12px" }}>
                    <span style={badgeStyle}>{post.category}</span>
                  </div>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      marginBottom: "8px",
                      fontFamily,
                      lineHeight: "1.3",
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{
                      color: "#6b7280",
                      marginBottom: "16px",
                      fontFamily,
                      fontSize: "14px",
                      lineHeight: "1.5",
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontSize: "12px",
                      color: "#9ca3af",
                      marginBottom: "16px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ fontFamily }}>{post.author}</span>
                      <span style={{ fontFamily }}>{post.date}</span>
                      <span style={{ fontFamily }}>{post.readTime}</span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: "16px",
                      borderTop: "1px solid #e5e7eb",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "#6b7280" }}>
                        <Heart style={{ width: "16px", height: "16px" }} />
                        <span style={{ fontSize: "14px", fontFamily }}>{post.likes}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "#6b7280" }}>
                        <MessageCircle style={{ width: "16px", height: "16px" }} />
                        <span style={{ fontSize: "14px", fontFamily }}>{post.comments}</span>
                      </div>
                    </div>
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        color: "#6b7280",
                        cursor: "pointer",
                        padding: "4px",
                        borderRadius: "4px",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#000")}
                      onMouseLeave={(e) => (e.target.style.color = "#6b7280")}
                    >
                      <Share2 style={{ width: "16px", height: "16px" }} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
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
            opacity: 0.05,
            backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
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
              Explore Topics
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
              Dive deep into the subjects that matter most to you
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "32px",
            }}
          >
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={index}
                  className="animate-on-scroll"
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "16px",
                    padding: "32px",
                    textAlign: "center",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    border: "1px solid #e5e5e5",
                    transition: "all 0.3s ease",
                    opacity: 0,
                    transform: "translateY(32px)",
                    transitionDelay: `${index * 200}ms`,
                    cursor: "pointer",
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
                    {category.name}
                  </h3>
                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: "14px",
                      fontFamily,
                    }}
                  >
                    {category.count} articles
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section style={{ padding: "96px 24px", backgroundColor: "#000", color: "#fff" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <div
            className="animate-on-scroll"
            style={{
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
              Stay in the Loop
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "#d1d5db",
                marginBottom: "40px",
                fontFamily,
              }}
            >
              Get the latest insights delivered straight to your inbox. No spam, just quality content.
            </p>
            <div
              style={{
                display: "flex",
                gap: "16px",
                maxWidth: "400px",
                margin: "0 auto",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  minWidth: "250px",
                  padding: "16px 20px",
                  borderRadius: "8px",
                  border: "1px solid #374151",
                  backgroundColor: "#1f2937",
                  color: "#fff",
                  fontSize: "16px",
                  fontFamily,
                }}
              />
              <button
                style={{
                  ...primaryButtonStyle,
                  backgroundColor: "#fff",
                  color: "#000",
                  padding: "16px 24px",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#fff")}
              >
                <Mail style={{ marginRight: "8px", width: "20px", height: "20px" }} />
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "64px 24px 32px", backgroundColor: "#f9fafb" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            className="animate-on-scroll"
            style={{
              textAlign: "center",
              opacity: 0,
              transform: "translateY(32px)",
              transition: "all 1s ease",
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
              Connect With Us
            </h3>
            <p
              style={{
                color: "#6b7280",
                marginBottom: "32px",
                fontFamily,
              }}
            >
              Follow us on social media for the latest updates and behind-the-scenes content
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "24px",
                marginBottom: "32px",
              }}
            >
              {[
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Github, label: "GitHub" },
              ].map((social, index) => {
                const Icon = social.icon
                return (
                  <button
                    key={index}
                    style={{
                      padding: "12px",
                      backgroundColor: "#000",
                      borderRadius: "50%",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#374151")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#000")}
                  >
                    <Icon style={{ width: "20px", height: "20px", color: "#fff" }} />
                  </button>
                )
              })}
            </div>
            <div
              style={{
                paddingTop: "32px",
                borderTop: "1px solid #e5e7eb",
                color: "#9ca3af",
                fontSize: "14px",
                fontFamily,
              }}
            >
              © 2024 Insights & Ideas. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
