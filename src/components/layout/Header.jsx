import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run immediately on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  const toggleMobileDropdown = (e, menuName) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenMobileDropdown(openMobileDropdown === menuName ? null : menuName);
  };

  // Helper active state checkers
  const isHome = path === '/' || path === '/index' || path === '/index';
  const isAbout = path.includes('about') || path.includes('team') || path.includes('vision-2030');
  const isServices = path.includes('service') || path.includes('civil') || path.includes('mechanical') || path.includes('electrical') || path.includes('hvac') || path.includes('cctv') || path.includes('transport') || path.includes('manpower');
  const isSectors = path.includes('sector') || path.includes('oil') || path.includes('petrochemical') || path.includes('fertilizer');
  const isProjects = path.includes('project');
  const isSafety = path.includes('safety');
  const isCareers = path.includes('career');
  const isContact = path.includes('contact');

  return (
    <header id="header" className={isScrolled ? "scrolled" : ""}>
      <div className="container header-container">
        <div className="logo">
          <a href="/" className="logo-link">
            <img src="images/axis logo.webp" alt="Axis Infinity Structure, Engineering &amp; Infrastructure" className="brand-logo" width="1057" height="443" fetchpriority="high" decoding="async" style={{ width: "auto", height: "62px", aspectRatio: "1057 / 443", objectFit: "contain" }} />
          </a>
        </div>

        <nav className="desktop-nav">
          <ul className="nav-links">
            <li>
              <a href="/" className={isHome ? "nav-link active" : "nav-link"}>Home</a>
            </li>
            
            <li className="dropdown">
              <a href="/about" className={isAbout ? "nav-link active" : "nav-link"}>
                About <i className="nav-caret ph ph-caret-down"></i>
              </a>
              <ul className="dropdown-menu">
                <li><a href="/about" className={path.includes('about') || path === '/about' ? 'active-sub' : ''}>About AXIS Infinity Structure</a></li>
                <li><a href="/team" className={path.includes('team') ? 'active-sub' : ''}>Our Team</a></li>
                <li><a href="/vision-2030" className={path.includes('vision-2030') ? 'active-sub' : ''}>Vision 2030</a></li>
              </ul>
            </li>
            
            <li className="dropdown">
              <a href="/services" className={isServices ? "nav-link active" : "nav-link"}>
                Services <i className="nav-caret ph ph-caret-down"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-wide">
                <li><a href="/services" className={path.includes('services') || path === '/services' ? 'active-sub' : ''}>All Services Overview</a></li>
                <li><a href="/civil-engineering" className={path.includes('civil') ? 'active-sub' : ''}>Civil Engineering</a></li>
                <li><a href="/mechanical-works" className={path.includes('mechanical') ? 'active-sub' : ''}>Mechanical Works</a></li>
                <li><a href="/electrical-instrumentation" className={path.includes('electrical') ? 'active-sub' : ''}>E&I Works</a></li>
                <li><a href="/hvac-maintenance" className={path.includes('hvac') ? 'active-sub' : ''}>HVAC & Maintenance</a></li>
                <li><a href="/cctv-systems" className={path.includes('cctv') ? 'active-sub' : ''}>CCTV &amp; Security</a></li>
                <li><a href="/transport-rental" className={path.includes('transport') ? 'active-sub' : ''}>Transport & Equipment</a></li>
                <li><a href="/manpower-supply" className={path.includes('manpower') ? 'active-sub' : ''}>Manpower Supply</a></li>
              </ul>
            </li>
            
            <li className="dropdown">
              <a href="/sectors" className={isSectors ? "nav-link active" : "nav-link"}>
                Sectors <i className="nav-caret ph ph-caret-down"></i>
              </a>
              <ul className="dropdown-menu">
                <li><a href="/sectors" className={path.includes('sectors') || path === '/sectors' ? 'active-sub' : ''}>All Sectors Overview</a></li>
                <li><a href="/oil-refinery" className={path.includes('oil') ? 'active-sub' : ''}>Oil & Refinery</a></li>
                <li><a href="/petrochemical" className={path.includes('petrochemical') ? 'active-sub' : ''}>Petrochemical</a></li>
                <li><a href="/fertilizer" className={path.includes('fertilizer') ? 'active-sub' : ''}>Fertilizer</a></li>
              </ul>
            </li>
            
            <li>
              <a href="/projects" className={isProjects ? "nav-link active" : "nav-link"}>Projects</a>
            </li>
            
            <li>
              <a href="/safety" className={isSafety ? "nav-link active" : "nav-link"}>Safety & Quality</a>
            </li>
            
            <li>
              <a href="/careers" className={isCareers ? "nav-link active" : "nav-link"}>Careers</a>
            </li>
            
            <li>
              <a href="/contact" className={isContact ? "nav-link active" : "nav-link"}>Contact</a>
            </li>
          </ul>
        </nav>

        <div className="header-cta">
          <a href="https://wa.me/966507673009" target="_blank" rel="noreferrer" className="header-whatsapp-btn">
            <span className="wa-icon-glow">
              <i className="ph ph-whatsapp-logo"></i>
            </span>
            <span className="wa-text">+966 50 767 3009</span>
          </a>
        </div>

        <button className="mobile-menu-btn" aria-label="Toggle Navigation Menu" onClick={toggleMobileMenu}>
          <i className={isMobileMenuOpen ? "ph ph-x" : "ph ph-list"}></i>
        </button>
      </div>
      
      {/* Mobile Nav Drawer */}
      <nav className={`mobile-nav ${isMobileMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="/" className={isHome ? "active" : ""} onClick={closeMobileMenu}>Home</a>
          </li>
          
          <li className={`dropdown ${openMobileDropdown === 'about' ? 'open' : ''}`}>
            <a href="#" className={isAbout ? "active" : ""} onClick={(e) => toggleMobileDropdown(e, 'about')}>
              <span>About</span>
              <i className="ph ph-caret-down"></i>
            </a>
            <ul className="dropdown-menu">
              <li><a href="/about" onClick={closeMobileMenu}>About AXIS Infinity Structure</a></li>
              <li><a href="/team" onClick={closeMobileMenu}>Our Team</a></li>
              <li><a href="/vision-2030" onClick={closeMobileMenu}>Vision 2030</a></li>
            </ul>
          </li>
          
          <li className={`dropdown ${openMobileDropdown === 'services' ? 'open' : ''}`}>
            <a href="#" className={isServices ? "active" : ""} onClick={(e) => toggleMobileDropdown(e, 'services')}>
              <span>Services</span>
              <i className="ph ph-caret-down"></i>
            </a>
            <ul className="dropdown-menu">
              <li><a href="/services" onClick={closeMobileMenu}>All Services Overview</a></li>
              <li><a href="/civil-engineering" onClick={closeMobileMenu}>Civil Engineering</a></li>
              <li><a href="/mechanical-works" onClick={closeMobileMenu}>Mechanical Works</a></li>
              <li><a href="/electrical-instrumentation" onClick={closeMobileMenu}>E&I Works</a></li>
              <li><a href="/hvac-maintenance" onClick={closeMobileMenu}>HVAC & Maintenance</a></li>
              <li><a href="/cctv-systems" onClick={closeMobileMenu}>CCTV &amp; Security</a></li>
              <li><a href="/transport-rental" onClick={closeMobileMenu}>Transport & Equipment</a></li>
              <li><a href="/manpower-supply" onClick={closeMobileMenu}>Manpower Supply</a></li>
            </ul>
          </li>
          
          <li className={`dropdown ${openMobileDropdown === 'sectors' ? 'open' : ''}`}>
            <a href="#" className={isSectors ? "active" : ""} onClick={(e) => toggleMobileDropdown(e, 'sectors')}>
              <span>Sectors</span>
              <i className="ph ph-caret-down"></i>
            </a>
            <ul className="dropdown-menu">
              <li><a href="/sectors" onClick={closeMobileMenu}>All Sectors Overview</a></li>
              <li><a href="/oil-refinery" onClick={closeMobileMenu}>Oil & Refinery</a></li>
              <li><a href="/petrochemical" onClick={closeMobileMenu}>Petrochemical</a></li>
              <li><a href="/fertilizer" onClick={closeMobileMenu}>Fertilizer</a></li>
            </ul>
          </li>
          
          <li>
            <a href="/projects" className={isProjects ? "active" : ""} onClick={closeMobileMenu}>Projects</a>
          </li>
          <li>
            <a href="/safety" className={isSafety ? "active" : ""} onClick={closeMobileMenu}>Safety & Quality</a>
          </li>
          <li>
            <a href="/careers" className={isCareers ? "active" : ""} onClick={closeMobileMenu}>Careers</a>
          </li>
          <li>
            <a href="/contact" className={isContact ? "active" : ""} onClick={closeMobileMenu}>Contact</a>
          </li>
          
          <li className="mobile-cta-wrapper">
            <a href="https://wa.me/966507673009" target="_blank" rel="noreferrer" className="header-whatsapp-btn mobile-btn" onClick={closeMobileMenu}>
              <i className="ph ph-whatsapp-logo" style={{fontSize: "1.25rem"}}></i> +966 50 767 3009
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

