"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import AOS from "aos"
import "aos/dist/aos.css"
import { gsap } from "gsap"
import { SplitText } from "gsap/SplitText"

// Register GSAP plugin
gsap.registerPlugin(SplitText)

export default function TestimonialMetrics() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const sliderRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)

  const testimonials = [
    {
      company: "Chris P",
      metric: "<1%",
      description: "Fewer than 1% rework requests, thanks to Offshore 365’s precision in architectural and 3D work.",
      color: "bg-red-500",
      hoverColor: "bg-red-700",
      dotColor: "#ef4444",
      textColor: "text-white",
    },
    {
      company: "David L",
      metric: "40%",
      description: "Operational costs cut by 40% without compromising on quality.",
      color: "bg-blue-500",
      hoverColor: "bg-blue-700",
      dotColor: "#3b82f6",
      textColor: "text-white",
    },
    {
      company: "Jessica M",
      metric: "2x",
      description: "Doubled our team’s capacity with scalable offshore talent.",
      color: "bg-amber-500",
      hoverColor: "bg-amber-700",
      dotColor: "#f59e0b",
      textColor: "text-white",
    },
    {
      company: "Anna K",
      metric: "30%",
      description: "Accelerated timelines by 30% using the time zone advantage.",
      color: "bg-purple-500",
      hoverColor: "bg-purple-700",
      dotColor: "#a855f7",
      textColor: "text-white",
    },
    {
      company: "Robert D",
      metric: "100%",
      description: "Top-tier BIM expertise powering our tech-heavy deliverables.",
      color: "bg-red-500",
      hoverColor: "bg-red-700",
      dotColor: "#ef4444",
      textColor: "text-white",
    },
    {
      company: "Mark T",
      metric: "35%",
      description: "Project output increased by 35% in Q1 with seamless integration.",
      color: "bg-blue-500",
      hoverColor: "bg-blue-700",
      dotColor: "#3b82f6",
      textColor: "text-white",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 800, once: true })

    // GSAP Text Animation for Title
    const title = titleRef.current
    const splitTitle = new SplitText(title, { type: "words,chars" })
    gsap.from(splitTitle.chars, {
      y: 50,
      opacity: 0,
      stagger: 0.03,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.2,
    })

    // GSAP Text Animation for Subtitle
    const subtitle = subtitleRef.current
    const splitSubtitle = new SplitText(subtitle, { type: "words" })
    gsap.from(splitSubtitle.words, {
      y: 30,
      opacity: 0,
      stagger: 0.05,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.4,
    })

    // Auto-slide interval
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => {
      clearInterval(interval)
      splitTitle.revert()
      splitSubtitle.revert()
    }
  }, [isPaused, testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  // Responsive slide and card settings
  const totalSlides = testimonials.length
  const getVisibleSlides = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1
      if (window.innerWidth < 1024) return 2
      return 4
    }
    return 4
  }
  const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides())

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(getVisibleSlides())
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const displaySlides = [...testimonials, ...testimonials, ...testimonials]
  const cardWidth = visibleSlides === 1 ? 280 : visibleSlides === 2 ? 260 : 250
  const gap = visibleSlides === 1 ? 16 : 8
  const slideWidth = cardWidth + gap
  const containerWidth = slideWidth * visibleSlides

  return (
    <div className="w-full bg-white py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8" data-aos="fade-up">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 sm:mb-12">
          <div className="max-w-2xl mb-6 md:mb-0" data-aos="fade-right" data-aos-delay="100">
            <motion.h1
              className="text-[64px] font-extrabold text-gray-900 mb-3 tracking-wide"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              This Impact Is Real
            </motion.h1>
            <motion.p
              className="text-gray-500 text-[20px]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover how businesses grow with offshore 365
            </motion.p>
          </div>
          <div className="flex space-x-3" data-aos="fade-left" data-aos-delay="200">
            <button
              onClick={prevSlide}
              className="p-3 sm:p-4 border border-gray-300 rounded-full hover:bg-gray-100 touch-manipulation"
              aria-label="Previous slide"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 sm:p-4 border border-gray-300 rounded-full hover:bg-gray-100 touch-manipulation"
              aria-label="Next slide"
              data-aos="zoom-in"
              data-aos-delay="350"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
            </button>
          </div>
        </div>

        <div
          className="flex justify-center overflow-hidden"
          style={{ width: `${containerWidth}px`, margin: "0 auto" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={sliderRef}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(currentSlide % totalSlides) * slideWidth}px)`,
              gap: `${gap}px`,
            }}
          >
            {displaySlides.map((item, index) => (
              <motion.div
                key={index}
                className={`testimonial-card card ${item.color} ${item.textColor} rounded-2xl shadow-xl`}
                style={{ minWidth: `${cardWidth}px`, height: visibleSlides === 1 ? "380px" : "350px", flexShrink: 0 }}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                data-aos="zoom-in"
                data-aos-delay={500 + (index % totalSlides) * 100}
              >
                <div className="z-10 relative text-center px-6 sm:px-8 py-8 sm:py-10">
                  <span
                    className="font-semibold text-[20px] block mb-2"
                    data-aos="fade-up"
                    data-aos-delay={600 + (index % totalSlides) * 100}
                  >
                    {item.company}
                  </span>
                  <h3
                    className="text-[64px] font-bold mb-2"
                    data-aos="fade-up"
                    data-aos-delay={700 + (index % totalSlides) * 100}
                  >
                    {item.metric}
                  </h3>
                  <p
                    className="text-[16px] leading-relaxed"
                    data-aos="fade-up"
                    data-aos-delay={800 + (index % totalSlides) * 100}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div
          className="flex justify-center mt-8 sm:mt-12 relative z-10"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <div className="flex space-x-3 sm:space-x-4">
            {testimonials.map((item, index) => {
              const isActive = (currentSlide % totalSlides) === index
              return (
                <button
                  key={`dot-${index}`}
                  onClick={() => goToSlide(index)}
                  className="relative focus:outline-none group touch-manipulation"
                  aria-label={`Go to testimonial ${item.company}`}
                  data-aos="zoom-in"
                  data-aos-delay={1000 + index * 100}
                >
                  <div
                    className={`liquid-dot w-2.5 h-2.5 sm:w-3 sm:h-3 border border-white rounded-full transition-all duration-500 flex items-center justify-center ${isActive ? "scale-125" : "scale-100 opacity-70 hover:opacity-100"}`}
                    style={{ background: item.dotColor }}
                  >
                    <div
                      className={`absolute inset-0 rounded-full overflow-hidden ${isActive ? "animate-pulse" : ""}`}
                    >
                      <div
                        className="liquid-bubble absolute w-4 h-4 sm:w-5 sm:h-5 rounded-full"
                        style={{ background: item.dotColor }}
                      />
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}