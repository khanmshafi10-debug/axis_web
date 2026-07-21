import React, { useEffect } from 'react';

export default function HvacMaintenance() {
  useEffect(() => {
    document.title = "HVAC & Facility Maintenance Services | AXIS INFINITY STRUCTURE";
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      {/* Page Banner */}
    <section className="page-banner" style={{"backgroundImage":"url('images/hvac_industrial.webp')"}}>
        <div className="container fade-in-up">
            <h1>HVAC & Maintenance</h1>
            <p>Complete HVAC Engineering and Integrated Facility Management Solutions.</p>
        </div>
    </section>

    {/* Overview */}
    <section className="section-padding bg-white">
        <div className="container">
            <div className="two-column" style={{"alignItems":"center"}}>
                <div className="fade-in-left">
                    <span className="section-label">Overview</span>
                    <h2 className="mb-4">Industrial HVAC Systems & Facility Maintenance Services in Saudi Arabia</h2>
                    <p style={{"lineHeight":"1.8","color":"var(--clr-charcoal)","fontSize":"1.05rem","marginBottom":"1rem"}}>
                        AXIS INFINITY STRUCTURE's HVAC & Maintenance Division delivers full-spectrum heating, ventilation, air conditioning, and integrated facility management services for commercial buildings, industrial plants, hospitals, data centers, and government institutions.
                    </p>
                    <p style={{"lineHeight":"1.8","color":"var(--clr-charcoal)","marginBottom":"1rem"}}>
                        From engineering design and equipment installation to annual maintenance contracts (AMC) and 24/7 emergency response , we ensure your HVAC systems and facilities operate at peak efficiency, extending asset life and reducing operational costs.
                    </p>
                    <div style={{"display":"flex","gap":"20px","flexWrap":"wrap","marginTop":"25px"}}>
                        <span style={{"background":"rgba(11,143,200,0.1)","color":"var(--clr-blue)","padding":"8px 18px","borderRadius":"50px","fontWeight":"600","fontSize":"0.9rem","border":"1px solid rgba(11,143,200,0.2)"}}>ASHRAE Standards</span>
                        <span style={{"background":"rgba(11,143,200,0.1)","color":"var(--clr-blue)","padding":"8px 18px","borderRadius":"50px","fontWeight":"600","fontSize":"0.9rem","border":"1px solid rgba(11,143,200,0.2)"}}>AMC Services</span>
                        <span style={{"background":"rgba(11,143,200,0.1)","color":"var(--clr-blue)","padding":"8px 18px","borderRadius":"50px","fontWeight":"600","fontSize":"0.9rem","border":"1px solid rgba(11,143,200,0.2)"}}>24/7 Support</span>
                    </div>
                </div>
                <div className="fade-in-right" style={{"padding":"20px"}}>
                    <div style={{"position":"relative","paddingBottom":"20px","paddingRight":"20px"}}>
                        <img src="images/hvac_industrial.webp" alt="Industrial HVAC System AXIS INFINITY STRUCTURE" style={{"width":"100%","display":"block","borderRadius":"12px","boxShadow":"0 15px 40px rgba(0,0,0,0.12)","position":"relative","zIndex":"2","height":"420px","objectFit":"cover"}}  width="1024" height="1024" loading="lazy" decoding="async" />
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
                <h2 style={{"color":"var(--clr-white)"}}>HVAC & Maintenance Services</h2>
                <p style={{"color":"rgba(255,255,255,0.75)","maxWidth":"700px","margin":"15px auto 0"}}>Comprehensive HVAC engineering and facility maintenance solutions tailored to the harsh Saudi climate and demanding industrial environments.</p>
            </div>
            <div className="grid-3">
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-wind" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>Central Chilled Water Systems</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Design and installation of centralized chilled water plants with centrifugal and screw chillers, cooling towers, AHUs, and FCUs for large commercial and industrial facilities.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-thermometer-cold" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>VRF & Split AC Systems</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Supply, installation, and commissioning of Variable Refrigerant Flow (VRF) systems, cassette units, ducted splits, and multi-split systems for offices and commercial spaces.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-factory" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>Industrial Ventilation Systems</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Explosion-proof and heavy-duty ventilation systems for industrial plants, process areas, paint booths, warehouses, and confined-space work environments.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-gear-six" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>Annual Maintenance Contracts (AMC)</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Structured preventive and corrective maintenance programs for all HVAC and MEP systems , planned PM schedules, KPI reporting, and emergency breakdown support.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-buildings" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>Integrated Facility Management</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Total facility management including civil, electrical, plumbing, and MEP maintenance , single-point accountability for entire facility operations and upkeep.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-leaf" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>Energy Efficiency & BMS</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Building Management System (BMS) integration, energy audits, variable speed drive (VSD) retrofits, and LED lighting upgrades to reduce operating costs and carbon footprint.</p>
                </div>
            </div>
        </div>
    </section>

    {/* Sub-services detail */}
    <section className="section-padding bg-white">
        <div className="container">
            <div className="section-header text-center fade-in-up mb-5">
                <span className="section-label">Specialized Divisions</span>
                <h2>HVAC & MEP Sub-Services</h2>
            </div>
            <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(300px, 1fr))","gap":"25px"}}>
                <div style={{"border":"1px solid var(--clr-grey)","borderRadius":"12px","padding":"30px","transition":"all 0.3s ease"}} onmouseover="this.style.borderColor='var(--clr-blue)'; this.style.transform='translateY(-3px)';" onmouseout="this.style.borderColor='var(--clr-grey)'; this.style.transform='translateY(0)';">
                    <h4 style={{"color":"var(--clr-navy)","marginBottom":"10px"}}>Plumbing & Drainage Works</h4>
                    <ul style={{"listStyle":"none","padding":"0","color":"var(--clr-charcoal)","fontSize":"0.9rem","lineHeight":"1.8"}}>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Potable Water Supply Systems</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Sanitary Drainage Networks</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Hot Water Generation Systems</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Grease Traps &amp; Interceptors</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Roof &amp; Floor Drainage Systems</li>
                    </ul>
                </div>
                <div style={{"border":"1px solid var(--clr-grey)","borderRadius":"12px","padding":"30px","transition":"all 0.3s ease"}} onmouseover="this.style.borderColor='var(--clr-blue)'; this.style.transform='translateY(-3px)';" onmouseout="this.style.borderColor='var(--clr-grey)'; this.style.transform='translateY(0)';">
                    <h4 style={{"color":"var(--clr-navy)","marginBottom":"10px"}}>Fire Fighting Systems</h4>
                    <ul style={{"listStyle":"none","padding":"0","color":"var(--clr-charcoal)","fontSize":"0.9rem","lineHeight":"1.8"}}>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Sprinkler System Design &amp; Installation</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Fire Hydrant Networks</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Foam Suppression Systems</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>FM200 &amp; Clean Agent Systems</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Periodic Testing &amp; Commissioning</li>
                    </ul>
                </div>
                <div style={{"border":"1px solid var(--clr-grey)","borderRadius":"12px","padding":"30px","transition":"all 0.3s ease"}} onmouseover="this.style.borderColor='var(--clr-blue)'; this.style.transform='translateY(-3px)';" onmouseout="this.style.borderColor='var(--clr-grey)'; this.style.transform='translateY(0)';">
                    <h4 style={{"color":"var(--clr-navy)","marginBottom":"10px"}}>Civil & Building Maintenance</h4>
                    <ul style={{"listStyle":"none","padding":"0","color":"var(--clr-charcoal)","fontSize":"0.9rem","lineHeight":"1.8"}}>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Painting &amp; Surface Finishing</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Waterproofing &amp; Roofing</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Flooring &amp; Tiling Works</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Partition &amp; False Ceiling</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>External Cladding Maintenance</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    {/* Why Choose */}
    <section className="section-padding bg-off-white">
        <div className="container">
            <div className="section-header text-center fade-in-up mb-5">
                <span className="section-label">Our Advantage</span>
                <h2>Why Choose AXIS Infinity Structure for HVAC & Maintenance?</h2>
            </div>
            <div className="grid-3">
                <div className="card fade-in-up" style={{"textAlign":"center"}}>
                    <div className="card-icon" style={{"margin":"0 auto 20px"}}><i className="ph ph-clock"></i></div>
                    <h3>24/7 Emergency Response</h3>
                    <p>Our round-the-clock maintenance team ensures rapid response to HVAC breakdowns and facility emergencies, minimizing disruption to your operations.</p>
                </div>
                <div className="card fade-in-up delay-1" style={{"textAlign":"center"}}>
                    <div className="card-icon" style={{"margin":"0 auto 20px"}}><i className="ph ph-chart-line-up"></i></div>
                    <h3>Proactive Asset Management</h3>
                    <p>We deploy CMMS-based preventive maintenance scheduling to extend equipment life, reduce reactive breakdowns, and optimize energy consumption across your facility.</p>
                </div>
                <div className="card fade-in-up delay-2" style={{"textAlign":"center"}}>
                    <div className="card-icon" style={{"margin":"0 auto 20px"}}><i className="ph ph-medal"></i></div>
                    <h3>Certified HVAC Engineers</h3>
                    <p>Our HVAC team holds ASHRAE certifications and manufacturer-specific accreditations, ensuring precise system design, commissioning, and optimization per project requirements.</p>
                </div>
            </div>
        </div>
    </section>

    {/* CTA */}
    <section className="cta-banner" style={{"backgroundImage":"url('images/hvac_industrial.webp')"}}>
        <div className="container fade-in-up">
            <h2>Ready to Optimize Your HVAC & Facility Maintenance?</h2>
            <p>Contact our team for a detailed HVAC survey, AMC proposal, and energy-saving recommendations for your facility.</p>
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
