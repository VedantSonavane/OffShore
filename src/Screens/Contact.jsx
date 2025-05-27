"use client"

import { useState, useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

function CountUp({ target, duration = 2000, delay = 0, className = "" }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    let end = parseInt(target)
    if (end === 0) return

    let increment = end / (duration / 50) // update every 50ms
    let current = start
    let timer

    // Delay start if delay is provided
    const startCounting = () => {
      timer = setInterval(() => {
        current += increment
        if (current >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, 50)
    }

    const delayTimeout = setTimeout(startCounting, delay)

    return () => {
      clearInterval(timer)
      clearTimeout(delayTimeout)
    }
  }, [target, duration, delay])

  return <div className={className}>{count}+</div>
}

export default function ContactPage() {
  const [circleColor, setCircleColor] = useState('bg-blue-500')

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    })

    // Automatically change circle color every 3 seconds
    const colors = ['bg-blue-500']
    let colorIndex = 0

    const colorInterval = setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length
      setCircleColor(colors[colorIndex])
    }, 3000)

    return () => clearInterval(colorInterval)
  }, [])

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    usage: "",
    message: "",
  })

  const [showToast, setShowToast] = useState(false)

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Show toast notification
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      usage: "",
      message: "",
    })
  }

  return (
    <div className="min-h-screen px-4 md:px-8 lg:px-16 py-16 relative overflow-hidden">
      {/* Single Large Animated Background Circle Behind Form */}
      <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-90 animate-float transition-colors duration-1000 ${circleColor} z-0`}></div>

      <div className="text-center mb-12" data-aos="fade-up">
        <h1 className="text-[60px] font-bold text-[#0d3557] mb-4 tracking-tight">
          Get in Touch with Offshore365
        </h1>
        <p className="text-base sm:text-lg text-[#0d3557] max-w-2xl mx-auto">
          We're here to help you scale productivity — reach out and let's build success together.
        </p>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">Message sent successfully!</span>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Form Section */}
          <div
            className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12 relative z-20"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="mb-8" data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0d3557] mb-3">Let's Chat</h2>
              <p className="text-[#0d3557] text-lg">An Offshore expert will reach out to discuss your needs.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="300">
                <input
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  className="h-12 px-4  regular border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  className="h-12 px-4 regular border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  required
                />
              </div>

              <div data-aos="fade-up" data-aos-delay="400">
                <input
                  type="email"
                  placeholder="Work Email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full h-12 px-4 regular border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  required
                />
              </div>

              <div className="relative" data-aos="fade-up" data-aos-delay="500">
                <select
                  value={formData.usage}
                  onChange={(e) => handleChange("usage", e.target.value)}
                  className="w-full h-12 px-4 pr-10 regular border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors appearance-none bg-white text-[#0d3557]"
                  required
                >
                  <option value="" disabled className="text-[#0d3557] ">
                    How do you plan on using Calendly?
                  </option>
                  <option value="sales">Sales meetings</option>
                  <option value="customer-success">Customer success</option>
                  <option value="recruiting">Recruiting</option>
                  <option value="education">Education</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute inset-y-0 right-0  flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-[#0d3557]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="600">
                <textarea
                  placeholder="How can we help?"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="w-full min-h-[120px] regular px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                  required
                />
              </div>

              <div data-aos="fade-up" data-aos-delay="700">
                <button
                  type="submit"
                  className="w-full h-12 bg-blue-600 regular hover:bg-blue-700 text-white  rounded-lg transition-colors duration-200 transform hover:scale-105"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Info Section */}
          <div className="lg:pl-8" data-aos="fade-left" data-aos-delay="200">
            <div className="mb-8">
              <h1
                className="text-[60px] font-bold text-[#0d3557] leading-tight mb-8"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Meet with our offshore 365 experts
              </h1>
            </div>

            <div className="space-y-8">
              <div className="border-b-2 border-yellow-500 pb-6" data-aos="fade-up" data-aos-delay="500">
                <CountUp target={500} className="text-5xl lg:text-6xl font-bold text-yellow-500 mb-2" delay={500} />
                <div className="text-yellow-500 regular text-lg">projects completed globally</div>
              </div>

              <div className="border-b-2 border-blue-500 pb-6" data-aos="fade-up" data-aos-delay="600">
                <CountUp target={150} className="text-5xl lg:text-6xl font-bold text-blue-500 mb-2" delay={600} />
                <div className="text-blue-500 regular text-lg">AEC firms partnered</div>
              </div>

              <div className="border-b-2 border-red-500 pb-6" data-aos="fade-up" data-aos-delay="700">
                <CountUp target={25} className="text-5xl lg:text-6xl font-bold text-red-500 mb-2" delay={700} />
                <div className="text-red-500 regular text-lg">countries with active engagements</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(-50%);
          }
          50% {
            transform: translateY(calc(-50% - 20px));
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}