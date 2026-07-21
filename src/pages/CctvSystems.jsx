import React, { useEffect } from 'react';

export default function CctvSystems() {
  useEffect(() => {
    document.title = "CCTV & Security Systems | AXIS INFINITY STRUCTURE";
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      {/* Page Banner */}
    <section className="page-banner" style={{"backgroundImage":"url('images/cctv_hero_bg.webp?v=2')"}}>
        <div className="container fade-in-up">
            <h1>CCTV & Security Systems</h1>
            <p>Advanced Surveillance, Access Control, and Integrated Security Solutions for Maximum Protection.</p>
        </div>
    </section>

    {/* Overview */}
    <section className="section-padding bg-white">
        <div className="container">
            <div className="two-column" style={{"alignItems":"center"}}>
                <div className="fade-in-left">
                    <span className="section-label">Overview</span>
                    <h2 className="mb-4">Comprehensive CCTV & Security Integration for Industrial & Commercial Projects</h2>
                    <p style={{"lineHeight":"1.8","color":"var(--clr-charcoal)","fontSize":"1.05rem","marginBottom":"1rem"}}>
                        At AXIS INFINITY STRUCTURE, we specialize in the design, installation, and maintenance of cutting-edge CCTV and physical security systems. We protect your assets, personnel, and facilities with highly reliable technology tailored for Saudi Arabia's demanding industrial sectors.
                    </p>
                    <p style={{"lineHeight":"1.8","color":"var(--clr-charcoal)","marginBottom":"1rem"}}>
                        Our certified engineers implement end-to-end security architectures , from high-definition IP camera networks and biometrics to fully integrated central monitoring rooms. We ensure compliance with high security directives and global standards.
                    </p>
                    <div style={{"display":"flex","gap":"20px","flexWrap":"wrap","marginTop":"25px"}}>
                        <span style={{"background":"rgba(11,143,200,0.1)","color":"var(--clr-blue)","padding":"8px 18px","borderRadius":"50px","fontWeight":"600","fontSize":"0.9rem","border":"1px solid rgba(11,143,200,0.2)"}}>IP Surveillance</span>
                        <span style={{"background":"rgba(11,143,200,0.1)","color":"var(--clr-blue)","padding":"8px 18px","borderRadius":"50px","fontWeight":"600","fontSize":"0.9rem","border":"1px solid rgba(11,143,200,0.2)"}}>Access Control</span>
                        <span style={{"background":"rgba(11,143,200,0.1)","color":"var(--clr-blue)","padding":"8px 18px","borderRadius":"50px","fontWeight":"600","fontSize":"0.9rem","border":"1px solid rgba(11,143,200,0.2)"}}>Intrusion Detection</span>
                        <span style={{"background":"rgba(11,143,200,0.1)","color":"var(--clr-blue)","padding":"8px 18px","borderRadius":"50px","fontWeight":"600","fontSize":"0.9rem","border":"1px solid rgba(11,143,200,0.2)"}}>24/7 Monitoring</span>
                    </div>
                </div>
                <div className="fade-in-right" style={{"padding":"20px"}}>
                    <div style={{"position":"relative","paddingBottom":"20px","paddingRight":"20px"}}>
                        <img src="images/cctv-installation.webp" alt="CCTV Camera Installation by AXIS INFINITY STRUCTURE" style={{"width":"100%","display":"block","borderRadius":"12px","boxShadow":"0 15px 40px rgba(0,0,0,0.12)","position":"relative","zIndex":"2","height":"420px","objectFit":"cover"}}  width="450" height="483" loading="lazy" decoding="async" />
                        <div style={{"position":"absolute","bottom":"0","right":"0","width":"95%","height":"95%","border":"3px solid var(--clr-blue)","borderRadius":"12px","zIndex":"1"}}></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Key Services */}
    <section className="section-padding pattern-bg bg-navy text-white">
        <div className="container">
            <div className="section-header text-center fade-in-up mb-5">
                <span className="section-label white-label">Core Expertise</span>
                <h2 style={{"color":"var(--clr-white)"}}>Security System Solutions</h2>
                <p style={{"color":"rgba(255,255,255,0.75)","maxWidth":"700px","margin":"15px auto 0"}}>From perimeter defense to intelligent video analytics , delivering robust security infrastructure.</p>
            </div>
            <div className="grid-3">
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-video-camera" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>CCTV & Video Surveillance</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>High-resolution IP cameras, PTZ networks, and NVR/VMS systems designed for comprehensive site coverage, night-vision capability, and extreme weather resilience.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-fingerprint" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>Access Control Systems</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Secure facility entry using biometric scanners, RFID readers, turnstiles, and electronic gate barriers integrated into a unified management software.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-desktop" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>Control Room Integration</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Design and fit-out of central command centers with video wall displays, operator consoles, and specialized network infrastructure for real-time monitoring.</p>
                </div>
            </div>
        </div>
    </section>

    {/* Why Choose */}
    <section className="section-padding bg-off-white">
        <div className="container">
            <div className="section-header text-center fade-in-up mb-5">
                <span className="section-label">Our Advantage</span>
                <h2>Why Choose AXIS Infinity Structure for Security Systems?</h2>
            </div>
            <div className="grid-3">
                <div className="card fade-in-up" style={{"textAlign":"center"}}>
                    <div className="card-icon" style={{"margin":"0 auto 20px"}}><i className="ph ph-shield-check"></i></div>
                    <h3>Certified Technicians</h3>
                    <p>Our installation teams hold relevant IT and security vendor certifications to ensure flawless configuration and zero blind spots.</p>
                </div>
                <div className="card fade-in-up delay-1" style={{"textAlign":"center"}}>
                    <div className="card-icon" style={{"margin":"0 auto 20px"}}><i className="ph ph-lightning"></i></div>
                    <h3>Seamless Integration</h3>
                    <p>We tie your CCTV, fire alarms, access control, and public address systems together into one intuitive management platform.</p>
                </div>
                <div className="card fade-in-up delay-2" style={{"textAlign":"center"}}>
                    <div className="card-icon" style={{"margin":"0 auto 20px"}}><i className="ph ph-wrench"></i></div>
                    <h3>Ongoing Maintenance</h3>
                    <p>Post-installation support including lens cleaning, DVR/NVR health checks, firmware updates, and 24/7 technical troubleshooting.</p>
                </div>
            </div>
        </div>
    </section>

    {/* CTA */}
    <section className="cta-banner" style={{"backgroundImage":"url('images/cctv-banner-bg.webp')"}}>
        <div className="container fade-in-up">
            <h2>Secure Your Project Site Today</h2>
            <p>Contact our security experts to design a surveillance system that meets your operational and safety requirements.</p>
            <div style={{"display":"flex","gap":"15px","flexWrap":"wrap","justifyContent":"center"}}>
                <a href="contact.html" className="btn btn-primary">Request a Consultation</a>
                <a href="projects.html" className="btn btn-secondary">View Our Projects</a>
            </div>
        </div>
    </section>

    {/* Footer */}
    </>
  );
}
