import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Users, Mail, Briefcase, FileText, Home, Zap, Award, Calendar } from "lucide-react";
import toggleIcon from '/workspaces/OffShore/src/assets/toggle.png';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [moreToggle, setMoreToggle] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  const navLinks = [
    { label: "Architecture", href: "/architecture" },
    { label: "Interior", href: "/interior" },
    { label: "BIM", href: "/bim" },
    { label: "3DVisualization", href: "/3dvisualization" },
    { label: "IT", href: "/it" },
    { label: "Marketing", href: "/marketing" },
    { label: "Admin", href: "/admin" },
  ];

  const tabs = [
    { id: "services", label: "Services", icon: Home },
    { id: "tools", label: "Tools", icon: Zap },
    { id: "plans", label: "Plans", icon: Briefcase },
    { id: "why-us", label: "Why Us?", icon: Award },
    { id: "get-started", label: "Get Started", icon: Calendar },
    { id: "faq", label: "FAQ", icon: FileText }
  ];

  const moreLinks = [
    { label: "About Us", href: "/about", icon: Users },
    { label: "Carrer", href: "/carrers", icon: Briefcase },
    { label: "Blogs", href: "/Blogs", icon: FileText },
    { label: "Contact", href: "/contact", icon: Mail },
  ];

  const handleDropdownToggle = (index) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(index);
  };

  const closeDropdowns = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
      setMoreToggle(false);
    }, 200); // 1.5 seconds delay
    setDropdownTimeout(timeout);
  };

  const handleMoreToggle = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setMoreToggle(true);
  };

  const handleMoreLeave = () => {
    const timeout = setTimeout(() => {
      setMoreToggle(false);
    }, 200); // 1.5 seconds delay
    setDropdownTimeout(timeout);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown-container') && !e.target.closest('.more-toggle')) {
        if (dropdownTimeout) {
          clearTimeout(dropdownTimeout);
        }
        closeDropdowns();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  const handleLinkClick = (href) => {
    window.location.href = href; // Actual page navigation
    closeDropdowns();
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div 
              className="flex items-center cursor-pointer transform transition-all duration-200 hover:scale-105" 
              onClick={() => handleLinkClick('/')}
            >
              <span className="text-[24px] regular text-blue-600">OffShore365</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <div 
                  key={index} 
                  className="relative dropdown-container"
                  onMouseEnter={() => handleDropdownToggle(index)}
                  onMouseLeave={closeDropdowns}
                >
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm regular transition-all duration-200 rounded-lg hover:bg-gray-50 transform hover:scale-105"
                  >
                    {link.label}
                    <ChevronDown 
                      className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  {/* Dropdown Menu - Only Tabs */}
                  {activeDropdown === index && (
                    <div className="absolute left-0 mt-[14px] w-80 bg-white rounded-br-2xl rounded-bl-2xl shadow-2xl border border-gray-100 z-50 transform animate-in fade-in zoom-in duration-200">
                      <div className="p-3">
                        <div className="grid grid-cols-2 gap-2">
                          {tabs.map((tab) => {
                            const IconComponent = tab.icon;
                            return (
                              <button
                                key={tab.id}
                                onClick={() => handleLinkClick(link.href)} // Redirect to parent navLink href
                                className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 transform hover:scale-[1.02] text-left"
                              >
                                <IconComponent size={18} className="text-blue-600" />
                                <span className="regular text-gray-900 text-sm">{tab.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => handleLinkClick('/schedule')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm regular transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
            >
              <span className="regular">   Schedule a  Meet</span>
            </button>
            
            <div 
              className="relative more-toggle"
              onMouseEnter={handleMoreToggle}
              onMouseLeave={handleMoreLeave}
            >
              <button
                className={`w-10 h-10 rounded-full  flex items-center justify-center transition-all duration-300 transform hover:scale-110 `}
              >
                <img
                  src={toggleIcon}
                  alt="Toggle Menu"
                  className={`w-8 h-8 ${moreToggle ? 'opacity-80' : 'opacity-100'}`}
                />
              </button>
              
              {/* More Dropdown */}
              {moreToggle && (
                <div className="absolute right-0 mt-[13px] w-64 bg-white rounded-br-2xl rounded-bl-2xl shadow-2xl border border-gray-100 z-50 transform animate-in fade-in zoom-in duration-200">
                  <div className="p-4">
                    <div className="space-y-2">
                      {moreLinks.map((link, idx) => {
                        const IconComponent = link.icon;
                        return (
                          <button
                            key={idx}
                            onClick={() => handleLinkClick(link.href)}
                            className="flex items-center space-x-3 w-full p-3 text-left rounded-xl hover:bg-gray-50 transition-all duration-200 transform hover:scale-[1.02]"
                          >
                            <IconComponent size={18} className="text-blue-600" />
                            <span className="text-gray-700 regular text-sm">{link.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-md transition-all duration-200 transform hover:scale-110"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transform animate-in fade-in duration-300"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-72 bg-white z-50 lg:hidden transform animate-in slide-in-from-right duration-300 shadow-2xl">
            <div className="p-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900">Offshore365</h2>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors duration-200"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-2 mb-6">
                {navLinks.map((link, index) => (
                  <div 
                    key={index} 
                    className="relative"
                    onMouseEnter={() => handleDropdownToggle(index)}
                    onMouseLeave={closeDropdowns}
                  >
                    <button
                      onClick={() => {
                        handleLinkClick(link.href);
                        setMobileOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium transform hover:scale-[1.02] text-sm"
                    >
                      {link.label}
                    </button>
                    {/* Mobile Dropdown Tabs */}
                    {activeDropdown === index && (
                      <div className="pl-4 space-y-1">
                        {tabs.map((tab) => {
                          const IconComponent = tab.icon;
                          return (
                            <button
                              key={tab.id}
                              onClick={() => {
                                handleLinkClick(link.href); // Redirect to parent navLink href
                                setMobileOpen(false);
                              }}
                              className="flex items-center space-x-2 w-full p-2 text-left rounded-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-[1.02]"
                            >
                              <IconComponent size={16} className="text-blue-600" />
                              <span className="text-gray-700 font-medium text-sm">{tab.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile More Links */}
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">More</h3>
                {moreLinks.map((link, idx) => {
                  const IconComponent = link.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        handleLinkClick(link.href);
                        setMobileOpen(false);
                      }}
                      className="flex items-center space-x-3 w-full p-2 text-left rounded-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-[1.02]"
                    >
                      <IconComponent size={16} className="text-blue-600" />
                      <span className="text-gray-700 font-medium text-sm">{link.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Mobile Schedule Button */}
              <div className="border-t border-gray-200 pt-4 mt-6">
                <button
                  onClick={() => {
                    handleLinkClick('/schedule');
                    setMobileOpen(false);
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-center font-medium transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center space-x-2"
                >
                  <span>   Schedule a  Meet</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;