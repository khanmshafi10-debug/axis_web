import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="footer" className="bg-navy text-white pb-3" style={{ borderTop: "4px solid #00D2FF", paddingTop: "80px", position: "relative", overflow: "hidden" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        /* Animated Footer Border Top */
        #footer {
            border-image: linear-gradient(90deg, #00D2FF 0%, #3B82F6 50%, #00D2FF 100%) 1;
        }

        /* Ambient Glow behind Footer */
        #footer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(0, 210, 255, 0.6), transparent);
            box-shadow: 0 0 30px rgba(0, 210, 255, 0.4);
            pointer-events: none;
        }

        /* Animated Social Media Buttons */
        .footer-social-btn {
            width: 42px;
            height: 42px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.05);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: #FFFFFF;
            border: 1px solid rgba(255, 255, 255, 0.12);
            font-size: 1.15rem;
            position: relative;
            transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
            text-decoration: none;
            overflow: hidden;
        }

        .footer-social-btn::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 50%;
            opacity: 0;
            transition: opacity 0.35s ease;
            z-index: 0;
        }

        .footer-social-btn i {
            position: relative;
            z-index: 1;
            transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Individual Social Colors & Glows */
        .footer-social-btn.linkedin:hover {
            background: linear-gradient(135deg, #0A66C2 0%, #004182 100%);
            border-color: #0A66C2;
            transform: translateY(-5px) scale(1.1);
            box-shadow: 0 8px 24px rgba(10, 102, 194, 0.55);
        }

        .footer-social-btn.twitter:hover {
            background: linear-gradient(135deg, #1DA1F2 0%, #0C7ABF 100%);
            border-color: #1DA1F2;
            transform: translateY(-5px) scale(1.1);
            box-shadow: 0 8px 24px rgba(29, 161, 242, 0.55);
        }

        .footer-social-btn.email:hover {
            background: linear-gradient(135deg, #FF8A00 0%, #E05600 100%);
            border-color: #FF8A00;
            transform: translateY(-5px) scale(1.1);
            box-shadow: 0 8px 24px rgba(255, 138, 0, 0.55);
        }

        .footer-social-btn.whatsapp:hover {
            background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
            border-color: #25D366;
            transform: translateY(-5px) scale(1.1);
            box-shadow: 0 8px 24px rgba(37, 211, 102, 0.55);
        }

        .footer-social-btn:hover i {
            transform: scale(1.15) rotate(6deg);
        }

        /* Animated Footer Link Items */
        .footer-links ul li {
            margin-bottom: 10px;
        }

        .footer-nav-link {
            color: rgba(255, 255, 255, 0.72);
            text-decoration: none;
            font-size: 0.92rem;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            transition: all 0.25s ease;
            position: relative;
        }

        .footer-nav-link::before {
            content: '→';
            font-size: 0.85rem;
            color: #00D2FF;
            opacity: 0;
            transform: translateX(-8px);
            transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .footer-nav-link:hover {
            color: #00D2FF;
            transform: translateX(6px);
            padding-left: 2px;
        }

        .footer-nav-link:hover::before {
            opacity: 1;
            transform: translateX(0);
        }

        /* Floating Contact Icon Glow */
        .footer-contact-icon {
            color: #E2940F;
            font-size: 1.25rem;
            flex-shrink: 0;
            transition: transform 0.3s ease, color 0.3s ease;
        }

        .footer-contact-item:hover .footer-contact-icon {
            transform: scale(1.25) rotate(-8deg);
            color: #F5B031;
        }

        /* Logo Shine Animation */
        .brand-logo-wrapper {
            display: inline-block;
            position: relative;
            overflow: hidden;
            border-radius: 8px;
        }

        .brand-logo-wrapper::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -60%;
            width: 50%;
            height: 200%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
            transform: rotate(30deg);
            transition: all 0.6s ease;
        }

        .brand-logo-wrapper:hover::after {
            left: 120%;
        }
      ` }} />

      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand */}
          <div className="footer-brand">
            <div className="logo mb-3">
              <Link to="/" className="logo-link brand-logo-wrapper">
                <img src="images/axis logo.png" alt="Axis Infinity Structure, Engineering &amp; Infrastructure" className="brand-logo" />
              </Link>
            </div>
            <p className="footer-tagline" style={{ marginBottom: "15px", fontSize: "1rem", fontWeight: "700", color: "#FFFFFF" }}>
              Engineering. Construction. Infrastructure.
            </p>
            <p className="footer-desc" style={{ fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "24px", color: "rgba(255,255,255,0.7)" }}>
              Building the future with precision, powered by expertise, and driven by quality, safety, and operational excellence.
            </p>
            
            {/* Animated Social Buttons */}
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-social-btn linkedin" title="LinkedIn">
                <i className="ph ph-linkedin-logo"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-social-btn twitter" title="X / Twitter">
                <i className="ph ph-x-logo"></i>
              </a>
              <a href="mailto:info@axisinfinitystructure.com" className="footer-social-btn email" title="Email Us">
                <i className="ph ph-envelope"></i>
              </a>
              <a href="https://wa.me/966507673009" target="_blank" rel="noreferrer" className="footer-social-btn whatsapp" title="WhatsApp Direct">
                <i className="ph ph-whatsapp-logo"></i>
              </a>
            </div>
          </div>
          
          {/* Column 2: Services */}
          <div className="footer-links">
            <h4 className="mb-3" style={{ color: "var(--clr-white)", fontSize: "1.15rem", fontFamily: "var(--font-heading)", fontWeight: "700", borderBottom: "2px solid #00D2FF", paddingBottom: "8px", display: "inline-block" }}>Our Services</h4>
            <ul>
              <li><Link to="/civil-engineering" className="footer-nav-link">Civil Construction</Link></li>
              <li><Link to="/mechanical-works" className="footer-nav-link">Mechanical & Piping</Link></li>
              <li><Link to="/electrical-instrumentation" className="footer-nav-link">Electrical & Instrument</Link></li>
              <li><Link to="/hvac-maintenance" className="footer-nav-link">HVAC & Maintenance</Link></li>
              <li><Link to="/cctv-systems" className="footer-nav-link">CCTV &amp; Security</Link></li>
              <li><Link to="/manpower-supply" className="footer-nav-link">Manpower Supply</Link></li>
              <li><Link to="/transport-rental" className="footer-nav-link">Transport Rental</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Quick Links */}
          <div className="footer-links">
            <h4 className="mb-3" style={{ color: "var(--clr-white)", fontSize: "1.15rem", fontFamily: "var(--font-heading)", fontWeight: "700", borderBottom: "2px solid #00D2FF", paddingBottom: "8px", display: "inline-block" }}>Quick Links</h4>
            <ul>
              <li><Link to="/" className="footer-nav-link">Home</Link></li>
              <li><Link to="/about" className="footer-nav-link">About AXIS Infinity</Link></li>
              <li><Link to="/team" className="footer-nav-link">Our Team & Structure</Link></li>
              <li><Link to="/sectors" className="footer-nav-link">Sectors We Serve</Link></li>
              <li><Link to="/safety" className="footer-nav-link">Safety & Quality</Link></li>
              <li><Link to="/contact" className="footer-nav-link">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="footer-links">
            <h4 className="mb-3" style={{ color: "var(--clr-white)", fontSize: "1.15rem", fontFamily: "var(--font-heading)", fontWeight: "700", borderBottom: "2px solid #00D2FF", paddingBottom: "8px", display: "inline-block" }}>Contact Info</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <li className="footer-contact-item" style={{ display: "flex", gap: "12px", fontSize: "0.9rem", alignItems: "flex-start", color: "rgba(255,255,255,0.75)" }}>
                <i className="ph ph-map-pin footer-contact-icon" style={{ marginTop: "3px" }}></i>
                <div>
                  <strong style={{ color: "var(--clr-white)" }}>Head Office (KSA):</strong><br />481 Al Abrar Street, Al Aqrabiyah District.<br />Al Khobar, Saudi Arabia
                </div>
              </li>
              <li className="footer-contact-item" style={{ display: "flex", gap: "12px", fontSize: "0.9rem", alignItems: "flex-start", color: "rgba(255,255,255,0.75)" }}>
                <i className="ph ph-map-pin footer-contact-icon" style={{ marginTop: "3px" }}></i>
                <div>
                  <strong style={{ color: "var(--clr-white)" }}>Head Office (PAK):</strong><br />Railway Road Jahanian Mandi<br />District Khanewal, Multan
                </div>
              </li>
              <li className="footer-contact-item" style={{ display: "flex", gap: "12px", fontSize: "0.9rem", alignItems: "center", color: "rgba(255,255,255,0.75)" }}>
                <i className="ph ph-phone footer-contact-icon"></i>
                <div>
                  <strong style={{ color: "var(--clr-white)", fontWeight: "600", display: "block", marginBottom: "2px" }}>Call & WhatsApp</strong>
                  <a href="tel:+923029203920" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>+92 302 9203920</a><br />
                  <a href="tel:+966507673009" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>+966 50 767 3009</a>
                </div>
              </li>
              <li className="footer-contact-item" style={{ display: "flex", gap: "12px", fontSize: "0.9rem", alignItems: "center", color: "rgba(255,255,255,0.75)" }}>
                <i className="ph ph-envelope footer-contact-icon"></i>
                <div>
                  <strong style={{ color: "var(--clr-white)", fontWeight: "600", display: "block", marginBottom: "2px" }}>Email Address</strong>
                  <a href="mailto:info@axisinfinitystructure.com" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>info@axisinfinitystructure.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom mt-5 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "25px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "15px" }}>
          <p style={{ margin: "0", fontSize: "0.88rem", color: "rgba(255,255,255,0.5)" }}>&copy; 2026 AXIS INFINITY STRUCTURE. All Rights Reserved.</p>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link to="/contact" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "var(--transition-fast)" }}>Privacy Policy</Link>
            <Link to="/contact" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "var(--transition-fast)" }}>Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
