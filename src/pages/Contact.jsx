import React, { useEffect, useState } from 'react';
import { AnimatedPage } from '../components/common/ScrollReveal';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact Us | AXIS INFINITY STRUCTURE";
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const faqs = [
    {
      question: "What types of projects does AXIS INFINITY STRUCTURE handle?",
      answer: "AXIS Infinity Structure handles a full spectrum of civil engineering, mechanical works, electrical & instrumentation, pre-commissioning, manpower supply, and transport rental projects. We operate across industrial, commercial, residential, healthcare, infrastructure, and energy sectors."
    },
    {
      question: "How quickly can AXIS Infinity Structure mobilize a team to our project site?",
      answer: "Depending on project scale and location, AXIS Infinity Structure can mobilize initial teams within 48-72 hours for urgent requirements. Larger deployments are typically mobilized within 1-2 weeks following scope confirmation and documentation."
    },
    {
      question: "Does AXIS Infinity Structure provide transport with or without drivers?",
      answer: "Yes. We offer both options — fully managed transport with professional, licensed drivers; or bare vehicle rental for clients who prefer to use their own operators. Fleet includes buses, coasters, vans, and premium SUVs."
    },
    {
      question: "How does AXIS Infinity Structure ensure the quality of deployed manpower?",
      answer: "All manpower candidates undergo rigorous vetting including trade test verification, certification checks, medical fitness evaluation, and safety compliance assessment before being placed on any project. We also conduct continuous on-site performance monitoring."
    },
    {
      question: "Can AXIS Infinity Structure handle projects requiring multiple engineering disciplines simultaneously?",
      answer: "Absolutely. This is one of AXIS Infinity Structure's key differentiators. Our multi-disciplinary structure allows us to deploy Civil, Mechanical, and Electrical teams simultaneously under unified project management, reducing coordination complexity and accelerating schedules."
    },
    {
      question: "Does AXIS Infinity Structure operate on short-term contracts or long-term engagements?",
      answer: "We are flexible. AXIS Infinity Structure serves clients on short-term sprint projects, single-trade task orders, and multi-year long-term strategic partnerships. Contract terms are customized based on client requirements and project scope."
    }
  ];

  return (
    <AnimatedPage>
      <style dangerouslySetInnerHTML={{ __html: `
        /* PREMIUM CONTACT FORM & CARD DESIGN SYSTEM */
        .contact-page-container {
            background: linear-gradient(180deg, #071325 0%, #0a192f 100%);
        }

        .form-card {
            background: #ffffff !important;
            border-radius: 24px !important;
            padding: 40px !important;
            box-shadow: 0 20px 50px rgba(11, 31, 58, 0.1) !important;
            border: 1.5px solid #e2e8f0 !important;
            transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        .form-card:hover {
            box-shadow: 0 30px 60px rgba(11, 143, 200, 0.14) !important;
            border-color: rgba(11, 143, 200, 0.3) !important;
        }

        .form-group {
            margin-bottom: 22px !important;
        }

        .form-group label {
            font-weight: 700 !important;
            font-size: 0.9rem !important;
            color: #0b2240 !important;
            margin-bottom: 8px !important;
            display: block !important;
            letter-spacing: 0.2px !important;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100% !important;
            padding: 14px 18px !important;
            background: #f8fafc !important;
            border: 2px solid #cbd5e1 !important;
            border-radius: 12px !important;
            font-size: 0.95rem !important;
            color: #0f172a !important;
            font-family: inherit !important;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
            outline: none !important;
        }

        .form-group input:hover,
        .form-group select:hover,
        .form-group textarea:hover {
            border-color: #0b8fc8 !important;
            background: #ffffff !important;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
            border-color: #0b8fc8 !important;
            background: #ffffff !important;
            box-shadow: 0 0 0 4px rgba(11, 143, 200, 0.18), 0 4px 16px rgba(11, 143, 200, 0.1) !important;
            transform: translateY(-1px) !important;
        }

        .form-row {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 20px !important;
        }

        @media (max-width: 640px) {
            .form-row {
                grid-template-columns: 1fr !important;
                gap: 0 !important;
            }
            .form-card {
                padding: 24px !important;
                border-radius: 18px !important;
            }
        }

        /* Dark navy blue box styling for inner contact info cards */
        .form-card .contact-info-card {
            background: linear-gradient(135deg, #0b2240 0%, #061529 100%) !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            border-left: 4px solid #00d2ff !important;
            border-radius: 16px !important;
            padding: 24px !important;
            margin-bottom: 20px !important;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15) !important;
            display: flex !important;
            align-items: flex-start !important;
            gap: 20px !important;
            transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        .form-card .contact-info-card:last-child {
            margin-bottom: 0 !important;
        }

        .form-card .contact-info-card:hover {
            transform: translateY(-4px) scale(1.01) !important;
            box-shadow: 0 14px 32px rgba(0, 210, 255, 0.25) !important;
            border-left-color: #0072ff !important;
        }

        .form-card .contact-info-card .icon-circle {
            width: 52px !important;
            height: 52px !important;
            background: linear-gradient(135deg, #00d2ff, #0072ff) !important;
            border-radius: 50% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            flex-shrink: 0 !important;
            font-size: 1.5rem !important;
            color: #ffffff !important;
            box-shadow: 0 0 14px rgba(0, 210, 255, 0.5) !important;
            transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
        }

        .form-card .contact-info-card:hover .icon-circle {
            transform: scale(1.15) rotate(8deg) !important;
        }

        .form-card .contact-info-card h4 {
            color: #ffffff !important;
            margin-bottom: 4px !important;
            font-weight: 700 !important;
        }

        .form-card .contact-info-card p {
            color: rgba(255,255,255,0.85) !important;
            margin: 0 !important;
            font-size: 0.95rem !important;
        }

        .form-card .contact-info-card a {
            color: #00d2ff !important;
            text-decoration: none !important;
            font-weight: 600 !important;
            transition: color 0.25s ease !important;
        }

        .form-card .contact-info-card a:hover {
            color: #ffffff !important;
            text-decoration: underline !important;
        }

        /* Flex Layout Side-by-Side */
        .contact-row-flex {
            display: flex !important;
            flex-direction: row !important;
            align-items: stretch !important;
            gap: 40px !important;
            width: 100% !important;
        }

        .contact-col-item {
            flex: 1 !important;
            display: flex !important;
            flex-direction: column !important;
        }

        .contact-col-item .form-card {
            height: 100% !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
        }

        @media (max-width: 767px) {
            .contact-row-flex {
                flex-direction: column !important;
                gap: 30px !important;
            }
        }

        /* FAQ Accordion Styling */
        .faq-item {
            background: #ffffff !important;
            border: 2px solid #e2e8f0 !important;
            border-radius: 16px !important;
            padding: 22px 28px !important;
            margin-bottom: 16px !important;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03) !important;
            cursor: pointer !important;
        }

        .faq-item:hover {
            border-color: #0b8fc8 !important;
            box-shadow: 0 10px 25px rgba(11, 143, 200, 0.12) !important;
            transform: translateY(-2px) !important;
        }

        .faq-question {
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            font-weight: 700 !important;
            font-size: 1.05rem !important;
            color: #0b2240 !important;
            user-select: none !important;
        }

        .faq-icon {
            font-size: 1.3rem !important;
            color: #0b8fc8 !important;
            transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
        }

        .faq-item.active .faq-icon {
            transform: rotate(180deg) !important;
            color: #0072ff !important;
        }

        .faq-answer {
            margin-top: 14px !important;
            padding-top: 14px !important;
            border-top: 1px solid #e2e8f0 !important;
            color: #4b5563 !important;
            line-height: 1.75 !important;
            font-size: 0.95rem !important;
            animation: fadeInFaq 0.35s ease-out !important;
        }

        @keyframes fadeInFaq {
            from { opacity: 0; transform: translateY(-8px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .submit-success-badge {
            background: linear-gradient(135deg, #10b981, #059669) !important;
            color: #ffffff !important;
            padding: 14px 20px !important;
            border-radius: 12px !important;
            margin-bottom: 20px !important;
            font-weight: 600 !important;
            display: flex !important;
            align-items: center !important;
            gap: 10px !important;
            animation: fadeInFaq 0.3s ease !important;
        }
      ` }} />

      {/* Page Banner */}
      <section className="page-banner" style={{ "backgroundImage": "url('images/engineering5.webp')" }}>
        <div className="container fade-in-up">
          <h1>Contact Us</h1>
          <div style={{ "marginTop": "35px", "marginBottom": "20px" }}>
            <p className="hero-desc">Let's discuss your project requirements. Our team is ready to provide the right engineering and support solution.</p>
            <p className="hero-desc" style={{ "fontSize": "1.05rem", "color": "rgba(255,255,255,0.8)", "borderLeft": "none", "textAlign": "left", "paddingLeft": "24px" }}>We bring decades of industrial expertise, deploying innovative technologies and a highly skilled workforce to ensure every milestone is achieved beyond expectations.</p>
            <div className="hero-badges" style={{ "justifyContent": "flex-start", "marginLeft": "24px" }}>
              <span className="hero-badge"><span className="anim-bullet dots"></span> Industrial Expertise</span>
              <span className="hero-badge"><span className="anim-bullet dots"></span> Innovative Tech</span>
              <span className="hero-badge"><span className="anim-bullet dots"></span> Skilled Workforce</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding contact-page-container">
        <div className="container">
          {/* Section Header */}
          <div className="section-header text-center fade-in-up mb-5">
            <span className="section-label white-label">Get In Touch</span>
            <h2 style={{ "color": "var(--clr-white)" }}>We Are Here to Support Your Project</h2>
            <p className="max-w-800 mx-auto" style={{ "color": "rgba(255,255,255,0.85)" }}>Whether you are planning a large-scale infrastructure development or need immediate project support resources • AXIS INFINITY STRUCTURE is ready to respond.</p>
          </div>

          <div className="contact-row-flex">
            {/* Left: Info Panel */}
            <div className="fade-in-left contact-col-item">
              <div className="form-card">
                <div className="contact-info-card">
                  <div className="icon-circle"><i className="ph ph-map-pin"></i></div>
                  <div>
                    <h4>Head Office (PAK)</h4>
                    <p>Railway Road Jahanian Mandi<br />District Khanewal, Multan</p>
                  </div>
                </div>
                
                <div className="contact-info-card">
                  <div className="icon-circle"><i className="ph ph-map-pin"></i></div>
                  <div>
                    <h4>Head Office (KSA)</h4>
                    <p>481 Al Abrar Street, Al Aqrabiyah District.<br />Al Khobar, Saudi Arabia</p>
                  </div>
                </div>
                
                <div className="contact-info-card">
                  <div className="icon-circle"><i className="ph ph-phone-call"></i></div>
                  <div>
                    <h4>Call &amp; WhatsApp</h4>
                    <p><a href="tel:+923029203920">+92 302 9203920</a> (PAK)</p>
                    <p><a href="tel:+966507673009">+966 50 767 3009</a> (KSA)</p>
                  </div>
                </div>
                
                <div className="contact-info-card">
                  <div className="icon-circle"><i className="ph ph-globe"></i></div>
                  <div>
                    <h4>Email &amp; Website</h4>
                    <p><a href="mailto:info@axisinfinitystructure.com">info@axisinfinitystructure.com</a></p>
                    <p><a href="https://www.axisinfinitystructure.com" target="_blank" rel="noopener noreferrer">www.axisinfinitystructure.com</a></p>
                  </div>
                </div>
                
                <div className="contact-info-card">
                  <div className="icon-circle"><i className="ph ph-clock"></i></div>
                  <div>
                    <h4>Working Hours</h4>
                    <p>Sunday – Thursday: 8:00 AM – 6:00 PM</p>
                    <p>Friday – Saturday: Emergency Support Only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form Panel */}
            <div className="col-form fade-in-right contact-col-item">
              <div className="form-card">
                <h3 className="mb-4" style={{ color: '#0b2240', fontWeight: '800' }}>Send Us an Inquiry</h3>
                
                {formSubmitted && (
                  <div className="submit-success-badge">
                    <i className="ph ph-check-circle" style={{ fontSize: '1.4rem' }}></i>
                    Thank you! Your inquiry has been sent successfully. Our team will contact you shortly.
                  </div>
                )}

                <form onSubmit={handleSubmit} id="contactForm">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input type="text" id="fullName" name="fullName" placeholder="Your full name" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="companyName">Company / Organization *</label>
                    <input type="text" id="companyName" name="companyName" placeholder="Your company name" required />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input type="email" id="email" name="email" placeholder="email@company.com" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input type="tel" id="phone" name="phone" placeholder="+966 (50) 767-3009" required />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="service">Service Required *</label>
                    <select id="service" name="service" required defaultValue="">
                      <option value="" disabled>Select a service...</option>
                      <option value="civil">Civil Engineering &amp; Infrastructure</option>
                      <option value="mechanical">Mechanical Works</option>
                      <option value="electrical">Electrical &amp; Instrumentation</option>
                      <option value="commissioning">Pre-Commissioning &amp; Commissioning</option>
                      <option value="manpower">Manpower Supply</option>
                      <option value="transport">Transport &amp; Equipment Rental</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="location">Project Location</label>
                    <input type="text" id="location" name="location" placeholder="City, Region, or Site Name" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Project Description *</label>
                    <textarea id="message" name="message" rows="4" placeholder="Briefly describe your project scope and requirements..." required></textarea>
                  </div>
                  
                  <button type="submit" id="submitBtn" className="btn btn-primary w-100" style={{ padding: '16px', fontSize: '1.05rem', fontWeight: '700', borderRadius: '14px' }}>
                    Send Inquiry <i className="ph ph-paper-plane-right" style={{ marginLeft: '8px' }}></i>
                  </button>
                </form>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #071325 0%, #0a192f 100%)" }}>
        <div className="container">
          <div className="section-header text-center fade-in-up mb-5">
            <span className="section-label white-label">Common Questions</span>
            <h2 style={{ color: "#ffffff" }}>Frequently Asked Questions</h2>
            <p className="max-w-800 mx-auto" style={{ color: "rgba(255, 255, 255, 0.85)" }}>Quick answers to the questions we hear most from new clients and project partners.</p>
          </div>
          
          <div className="faq-list max-w-800 mx-auto fade-in-up">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item ${openFaq === idx ? 'active' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-question">
                  <span>{faq.question}</span>
                  <i className="ph ph-caret-down faq-icon"></i>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
