import React, { useEffect } from 'react';

export default function IndustrialInsulation() {
  useEffect(() => {
    document.title = "Industrial Insulation | AXIS INFINITY STRUCTURE";
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      {/* Page Banner */}
    <section className="page-banner" style={{"backgroundImage":"url('https://images.unsplash.com/photo-1610279213517-b268c1e756e1?q=80&w=2000&auto=format&fit=crop')"}}>
        <div className="container fade-in-up">
            <h1>Industrial Insulation & Refractory</h1>
            <p>Energy conservation and extreme temperature protection systems.</p>
        </div>
    </section>

    {/* Overview Section */}
    <section className="section-padding bg-white">
        <div className="container">
            <div className="two-column" style={{"alignItems":"center"}}>
                <div className="fade-in-left">
                    <span className="section-label">Overview</span>
                    <h2 className="mb-4">Advanced Thermal Protection</h2>
                    <p className="mb-4" style={{"lineHeight":"1.8","color":"var(--clr-charcoal)","fontSize":"1.05rem"}}>We provide specialized insulation and refractory solutions designed to maximize energy efficiency, protect personnel, and maintain process temperature stability in extreme industrial environments.</p>
                    <p className="mb-4" style={{"lineHeight":"1.8","color":"var(--clr-charcoal)"}}>Our expertise covers hot, cold, and acoustic insulation for piping, vessels, and tanks, utilizing materials ranging from cellular glass and polyurethane to advanced aerogels and ceramic fibers.</p>
                </div>
                <div className="fade-in-right" style={{"padding":"20px"}}>
                    <div style={{"position":"relative","paddingBottom":"20px","paddingRight":"20px"}}>
                        <img src="https://images.unsplash.com/photo-1508150148186-aaee953f5b43?q=80&w=800&auto=format&fit=crop" alt="Industrial Insulation & Refractory" style={{"width":"100%","display":"block","borderRadius":"8px","boxShadow":"0 10px 30px rgba(0,0,0,0.1)","position":"relative","zIndex":"2","height":"400px","objectFit":"cover"}} />
                        <div style={{"position":"absolute","bottom":"0","right":"0","width":"95%","height":"95%","border":"3px solid var(--clr-blue)","borderRadius":"8px","zIndex":"1"}}></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Key Capabilities Section */}
    <section className="section-padding pattern-bg bg-navy text-white">
        <div className="container">
            <div className="section-header text-center fade-in-up mb-5">
                <span className="section-label white-label">Core Expertise</span>
                <h2 style={{"color":"var(--clr-white)"}}>Key Capabilities</h2>
            </div>
            <div className="grid-3">
                
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-fire" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"15px"}}>Hot Insulation</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Application of mineral wool and calcium silicate for high-temperature process piping and exhaust systems.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-snowflake" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"15px"}}>Cryogenic & Cold Insulation</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Cellular glass and PIR/PUR foam application for LNG, liquid nitrogen, and ammonia facilities.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-speaker-high" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"15px"}}>Acoustic Insulation</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Noise reduction cladding and soundproofing systems for heavy compressors, turbines, and generators.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-cube" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"15px"}}>Refractory Brick Lining</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Installation of high-alumina and fireclay bricks for furnaces, kilns, and industrial incinerators.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-shield" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"15px"}}>Sheet Metal Cladding</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Precision fabrication and installation of aluminum, stainless steel, and galvanized jacketing.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-wrench" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"15px"}}>Maintenance & CUI Inspection</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Removal, inspection for Corrosion Under Insulation (CUI), and rapid re-insulation during plant turnarounds.</p>
                </div>
            </div>
        </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding bg-white">
        <div className="container">
            <div className="section-header text-center fade-in-up mb-5">
                <span className="section-label">Our Approach</span>
                <h2>Why Choose AXIS Infinity Structure for Industrial Insulation?</h2>
            </div>
            <div className="grid-3">
                <div className="value-card fade-in-up">
                    <i className="ph ph-shield-check"></i>
                    <h3>Uncompromising Safety</h3>
                    <p>Every operation is executed under our strict Zero-Harm policy, prioritizing the well-being of our workforce and site security.</p>
                </div>
                <div className="value-card fade-in-up delay-1">
                    <i className="ph ph-medal"></i>
                    <h3>Technical Excellence</h3>
                    <p>Our engineers and technicians bring decades of specialized experience, guaranteeing precision in every output.</p>
                </div>
                <div className="value-card fade-in-up delay-2">
                    <i className="ph ph-clock-countdown"></i>
                    <h3>On-Time Delivery</h3>
                    <p>We employ advanced project management methodologies to ensure strict adherence to timelines without sacrificing quality.</p>
                </div>
            </div>
        </div>
    </section>

    {/* CTA */}
    <section className="cta-banner" style={{"backgroundImage":"url('https://images.unsplash.com/photo-1610279213517-b268c1e756e1?q=80&w=2000&auto=format&fit=crop')"}}>
        <div className="container fade-in-up">
            <h2>Ready to start your next Industrial Insulation project?</h2>
            <p>Connect with our technical team to discuss your specific requirements and receive a customized proposal.</p>
            <a href="contact.html" className="btn btn-primary">Request a Consultation</a>
        </div>
    </section>

        {/* Footer */}
    </>
  );
}
