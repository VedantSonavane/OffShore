"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Updated services array with the requested services
const services = [
  {
    name: "Architecture",
    bgColor: "bg-white",
    hoverColor: "hover:bg-blue-100",
  },
  {
    name: "Interior",
    bgColor: "bg-white",
    hoverColor: "hover:bg-blue-100",
  },
  {
    name: "BIM",
    bgColor: "bg-white",
    hoverColor: "hover:bg-blue-100",
  },
  {
    name: "3DVisualization",
    bgColor: "bg-white",
    hoverColor: "hover:bg-blue-100",
  },
  {
    name: "IT",
    bgColor: "bg-white",
    hoverColor: "hover:bg-blue-100",
  },
  {
    name: "Marketing",
    bgColor: "bg-white",
    hoverColor: "hover:bg-blue-100",
  },
  {
    name: "Admin",
    bgColor: "bg-white",
    hoverColor: "hover:bg-blue-100",
  },
  {
    name: "Others",
    bgColor: "bg-white",
    hoverColor: "hover:bg-blue-100",
  },
]

const baseTimeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
]

const employeeOptions = ["0-5", "5-20", "20-50", "50+"]

const countries = [
  { name: "United States", timeZone: "America/New_York" },
  { name: "United Kingdom", timeZone: "Europe/London" },
  { name: "India", timeZone: "Asia/Kolkata" },
  { name: "Australia", timeZone: "Australia/Sydney" },
  { name: "Japan", timeZone: "Asia/Tokyo" },
  { name: "Brazil", timeZone: "America/Sao_Paulo" },
  { name: "Germany", timeZone: "Europe/Berlin" },
  { name: "South Africa", timeZone: "Africa/Johannesburg" },
  { name: "China", timeZone: "Asia/Shanghai" },
  { name: "Canada", timeZone: "America/Toronto" },
]

// Custom Calendar Component
const CustomCalendar = ({ selected, onChange }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const daysInMonth = getDaysInMonth(currentMonth)
  const firstDay = getFirstDayOfMonth(currentMonth)

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const handleDayClick = (day) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    if (newDate >= today && newDate.getDay() !== 0 && newDate.getDay() !== 6) {
      onChange(newDate)
    }
  }

  const renderDays = () => {
    const days = []
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-12 h-12"></div>)
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
      const isDisabled = date < today || date.getDay() === 0 || date.getDay() === 6
      const isSelected =
        selected &&
        selected.getDate() === day &&
        selected.getMonth() === currentMonth.getMonth() &&
        selected.getFullYear() === currentMonth.getFullYear()
      days.push(
        <button
          key={day}
          onClick={() => handleDayClick(day)}
          disabled={isDisabled}
          className={`w-12 h-12 flex items-center justify-center rounded-full text-sm ${isSelected ? "bg-blue-600 text-white" : "text-gray-800"
            } ${isDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-100"}`}
        >
          {day}
        </button>,
      )
    }
    return days
  }

  return (
    <div className="w-full h-[420px] bg-white rounded-lg p-4" id="schdeule">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth} className="text-gray-600 hover:text-blue-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="text-lg font-medium text-gray-800">
          {currentMonth.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </span>
        <button onClick={handleNextMonth} className="text-gray-600 hover:text-blue-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-xs font-medium text-gray-600 mb-2">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="grid grid-cols-7 gap-2">{renderDays()}</div>
    </div>
  )
}

// ClockCard Component
const ClockCard = ({ value, timeZone, country, selectedDate }) => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  // Format the time for display
  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
  }

  // Use provided value or current time
  const displayTimeRaw = value && value !== "" ? value : formatTime(currentTime)

  // Parse the time to separate hours, minutes and period (AM/PM)
  const timeMatch = displayTimeRaw.match(/(\d+):(\d+)\s(AM|PM)/)
  const hours = timeMatch ? timeMatch[1] : "00"
  const minutes = timeMatch ? timeMatch[2] : "00"
  const period = timeMatch ? timeMatch[3] : "AM"

  // Format the date for display
  const dateToFormat = selectedDate || currentTime
  const formattedDate = dateToFormat.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })

  // Add ordinal suffix to day
  const day = dateToFormat.getDate()
  const ordinalSuffix = getOrdinalSuffix(day)
  const formattedDateWithOrdinal = formattedDate.replace(new RegExp(`${day}`), `${day}${ordinalSuffix}`)

  // Helper function to get ordinal suffix for day of month
  function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) return "th"
    switch (day % 10) {
      case 1:
        return "st"
      case 2:
        return "nd"
      case 3:
        return "rd"
      default:
        return "th"
    }
  }

  return (
    <div
      className="w-[280px] h-[150px] rounded-xl shadow-lg mx-auto
                 bg-gradient-to-r from-blue-900 to-blue-700
                 flex flex-col justify-center relative overflow-hidden
                 cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl"
    >
      {/* Country indicator */}
      <div className="absolute top-2 right-2 bg-blue-600/30 px-2 py-1 rounded-lg text-xs">{country}</div>

      {/* Time display */}
      <p className="text-5xl font-semibold text-white ml-4 mt-0 font-sans flex items-center">
        <span>
          {hours}:{minutes}
        </span>
        <span className="text-sm ml-1">{period}</span>
      </p>

      {/* Date display */}
      <p className="text-lg font-medium text-white ml-4 mt-0 font-sans">{formattedDateWithOrdinal}</p>

      {/* Color overlay for visual effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-900/50 pointer-events-none"></div>
    </div>
  )
}

// Main ScheduleMeeting Component
const ScheduleMeeting = () => {
  const [step, setStep] = useState(1)
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const [timeSlots, setTimeSlots] = useState(baseTimeSlots)
  const [form, setForm] = useState({
    service: "Architecture",
    date: null,
    time: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    companyLocation: "",
    employees: "",
    companyName: "",
  })
  const [animationComplete, setAnimationComplete] = useState([false, false, false, false])

  useEffect(() => {
    const newAnimationComplete = [...animationComplete]
    newAnimationComplete[step - 1] = true
    setAnimationComplete(newAnimationComplete)

    const updateTimeSlots = () => {
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: selectedCountry.timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
      const updatedSlots = baseTimeSlots.map((slot) => {
        const [hours, minutes] = slot.split(":")
        const period = slot.split(" ")[1]
        const date = new Date()
        date.setHours(Number.parseInt(hours) + (period === "PM" && hours !== "12" ? 12 : 0))
        date.setMinutes(Number.parseInt(minutes))
        return formatter.format(date).replace(/:\d{2}\s/, " ")
      })
      setTimeSlots(updatedSlots)
    }
    updateTimeSlots()
  }, [step, selectedCountry])

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleServiceSelect = (service) => {
    setForm((prev) => ({ ...prev, service: service.name }))
  }

  const handleDateSelect = (date) => {
    setForm((prev) => ({ ...prev, date }))
  }

  const handleTimeSelect = (time) => {
    setForm((prev) => ({ ...prev, time }))
  }

  const handleCountryChange = (e) => {
    const country = countries.find((c) => c.name === e.target.value)
    setSelectedCountry(country)
  }

  const handleNext = () => {
    if (step < 4) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = () => {
    alert("Meeting Scheduled!")
    console.log(form)
  }

  const isStepComplete = () => {
    switch (step) {
      case 1:
        return !!form.service
      case 2:
        return !!form.date
      case 3:
        return !!form.time
      case 4:
        return !!form.name && !!form.email && !!form.companyName
      default:
        return false
    }
  }

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h1
          className="text-[60px] font-extrabold text-[#0d3557] mb-3 tracking-wide"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Power your business today
        </motion.h1>
        <motion.p
          className="text-gray-500 text-[20px]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Schedule a meeting with offshore 365 experts
        </motion.p>
      </div>

      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto mb-12 relative">
        <div className="flex items-center justify-between relative z-10">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex flex-col items-center">
              <motion.div
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-lg font-medium ${step >= s ? "border-blue-600 bg-blue-50" : "border-gray-200 bg-white"
                  } relative overflow-hidden`}
                initial={{ scale: 0.9 }}
                animate={{ scale: step === s ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-blue-600"
                  initial={{ height: "0%" }}
                  animate={{ height: step >= s ? "100%" : "0%" }}
                  transition={{ duration: 0.8, delay: (s - 1) * 0.2 }}
                />
                <span
                  className={`relative z-10 ${step > s ? "text-white" : step === s ? "text-white" : "text-gray-600"}`}
                >
                  {step > s ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    s
                  )}
                </span>
              </motion.div>
              <span className="mt-2 text-xs font-medium text-gray-600">
                {s === 1 ? "Service" : s === 2 ? "Date" : s === 3 ? "Time" : "Details"}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute top-5 left-0 right-0 flex justify-between z-0 px-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex-1 relative h-1 mx-2">
              <div className="absolute inset-0 bg-gray-200 rounded-full" />
              <motion.div
                className="absolute inset-0 bg-blue-600 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: animationComplete[s] ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ transformOrigin: "left" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto">
        <div
          className="relative rounded-xl shadow-md p-6 min-h-[600px] flex flex-col bg-blue-700 text-white transition-colors duration-200 w-full"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex-1"
            >
              {step === 1 && (
                <div className="h-[250px]  flex flex-col">
                  <h1 className="text-[34px] font-light text-center mb-6 tracking-tight">Select a Service</h1>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 flex-1">
                    {services.map((service) => (
                      <motion.button
                        key={service.name}
                        onClick={() => handleServiceSelect(service)}
                        className={`p-9 border border-blue-800 rounded-lg text-blue-600 font-extrabold text-[20px] text-center transition-all ${service.bgColor
                          } ${form.service === service.name ? "ring-1 ring-blue-600" : ""} ${service.hoverColor}`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {service.name}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="h-full flex flex-col">
                  <h1 className="text-[34px] text-center font-extrabold mb-6 tracking-wide">Choose a Date</h1>
                  <div className="flex-1">
                    <CustomCalendar selected={form.date} onChange={handleDateSelect} />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="h-full flex flex-col">
                  <h2 className="text-[34px] font-extrabold mb-6 text-center tracking-wide">Select Time</h2>
                  <div className="flex justify-end mb-4">
                    <select
                      value={selectedCountry.name}
                      onChange={handleCountryChange}
                      className="p-2 bg-white border border-blue-600 rounded-lg text-blue-800 text-sm focus:ring-1 focus:ring-blue-400 focus:outline-none"
                    >
                      {countries.map((country) => (
                        <option key={country.name} value={country.name} className="text-gray-800">
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="mb-6">
                      <ClockCard
                        value={form.time}
                        timeZone={selectedCountry.timeZone}
                        country={selectedCountry.name}
                        selectedDate={form.date}
                      />
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 w-full">
                      {timeSlots.map((time) => (
                        <motion.button
                          key={time}
                          onClick={() => handleTimeSelect(time)}
                          className={`p-2 rounded-lg h-[75px]  border text-[20px] font-extrabold text-center ${form.time === time
                            ? "border-blue-600 bg-blue-100 text-blue-600"
                            : "border-blue-600 bg-white text-blue-600"
                            } hover:border-blue-600 hover:bg-blue-100 transition-all`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {time}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="h-full flex flex-col">
                  <h2 className="text-[34px] text-center font-extrabold mb-6 tracking-wide">Your Information</h2>
                  <div className="space-y-4 flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[16px] font-medium mb-1">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          className="w-full p-2 border border-blue-600 bg-white rounded-lg focus:border-blue-400 focus:ring-0 focus:outline-none text-sm text-blue-600 placeholder-blue-300"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[16px] font-medium mb-1">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          className="w-full p-2 border border-blue-600 bg-white rounded-lg focus:border-blue-400 focus:ring-0 focus:outline-none text-sm text-blue-600 placeholder-blue-300"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[16px] font-medium mb-1">Company Name</label>
                      <input
                        type="text"
                        name="companyName"
                        value={form.companyName}
                        onChange={handleChange}
                        className="w-full p-2 border border-blue-600 bg-white rounded-lg focus:border-blue-400 focus:ring-0 focus:outline-none text-sm text-blue-600 placeholder-blue-300"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[16px] font-medium mb-1">Company Location</label>
                        <input
                          type="text"
                          name="companyLocation"
                          value={form.companyLocation}
                          onChange={handleChange}
                          className="w-full p-2 border border-blue-600 bg-white rounded-lg focus:border-blue-400 focus:ring-0 focus:outline-none text-sm text-blue-600 placeholder-blue-300"
                        />
                      </div>
                      <div>
                        <label className="block text-[16px] font-medium mb-1">Number of Employees</label>
                        <select
                          name="employees"
                          value={form.employees}
                          onChange={handleChange}
                          className="w-full p-2 border border-blue-600 bg-white rounded-lg focus:border-blue-400 focus:ring-0 focus:outline-none text-sm text-blue-600 placeholder-blue-300"
                        >
                          <option value="" className="text-gray-800">
                            Select number of employees
                          </option>
                          {employeeOptions.map((option) => (
                            <option key={option} value={option} className="text-gray-800">
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[16px] font-medium mb-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full p-2 border border-blue-600 bg-white rounded-lg focus:border-blue-400 focus:ring-0 focus:outline-none text-sm text-blue-600 placeholder-blue-300"
                      />
                    </div>
                    <div>
                      <label className="block text-[16px] font-medium mb-1">Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full p-2 border border-blue-600 bg-white rounded-lg focus:border-blue-400 focus:ring-0 focus:outline-none text-sm text-blue-600 placeholder-blue-300"
                      />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6 pt-4 border-t border-white/20">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
            {step < 4 ? (
              <button
                onClick={handleNext}
                disabled={!isStepComplete()}
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!isStepComplete()}
                className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Schedule Meeting
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScheduleMeeting