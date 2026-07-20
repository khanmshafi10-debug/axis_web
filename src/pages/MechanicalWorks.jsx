import React, { useEffect } from 'react';

export default function MechanicalWorks() {
  useEffect(() => {
    document.title = "Mechanical Works, Piping & Equipment Installation Services | AXIS INFINITY STRUCTURE";
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      {/* Page Banner */}
    <section className="page-banner" style={{"backgroundImage":"url('images/mechanical_works_pipes.png')"}}>
        <div className="container fade-in-up">
            <h1>Mechanical Works</h1>
            <p>Expert Fabrication, Installation & Maintenance for Industrial Success.</p>
        </div>
    </section>

    {/* Overview */}
    <section className="section-padding bg-white">
        <div className="container">
            <div className="two-column" style={{"alignItems":"center"}}>
                <div className="fade-in-left">
                    <span className="section-label">Overview</span>
                    <h2 className="mb-4">Industrial Mechanical Works, Piping & Equipment Installation in Saudi Arabia</h2>
                    <p style={{"lineHeight":"1.8","color":"var(--clr-charcoal)","fontSize":"1.05rem","marginBottom":"1rem"}}>
                        AXIS INFINITY STRUCTURE's Mechanical Works Division specializes in heavy equipment installation, complex industrial piping systems, process plant construction, and comprehensive facility maintenance across the oil & gas, petrochemical, fertilizer, and power generation industries.
                    </p>
                    <p style={{"lineHeight":"1.8","color":"var(--clr-charcoal)","marginBottom":"1rem"}}>
                        Our certified mechanical engineers, pipefitters, and welders operate under international quality codes (ASME B31.3, API 650, API 1104) with in-house NDT capability , delivering precision mechanical solutions that maximize plant uptime and operational efficiency.
                    </p>
                    <div style={{"display":"flex","gap":"30px","flexWrap":"wrap","marginTop":"25px"}}>
                        <div style={{"textAlign":"center"}}>
                            <div style={{"fontSize":"2rem","fontWeight":"800","color":"var(--clr-blue)","fontFamily":"var(--font-heading)"}}>ASME</div>
                            <div style={{"fontSize":"0.85rem","color":"var(--clr-charcoal)","fontWeight":"600"}}>Code Compliance</div>
                        </div>
                        <div style={{"textAlign":"center"}}>
                            <div style={{"fontSize":"2rem","fontWeight":"800","color":"var(--clr-blue)","fontFamily":"var(--font-heading)"}}>API</div>
                            <div style={{"fontSize":"0.85rem","color":"var(--clr-charcoal)","fontWeight":"600"}}>Standards Applied</div>
                        </div>
                        <div style={{"textAlign":"center"}}>
                            <div style={{"fontSize":"2rem","fontWeight":"800","color":"var(--clr-blue)","fontFamily":"var(--font-heading)"}}>100%</div>
                            <div style={{"fontSize":"0.85rem","color":"var(--clr-charcoal)","fontWeight":"600"}}>Quality Assured</div>
                        </div>
                    </div>
                </div>
                <div className="fade-in-right" style={{"padding":"20px"}}>
                    <div style={{"position":"relative","paddingBottom":"20px","paddingRight":"20px"}}>
                        <img src="images/mechanical_works_pipes.png" alt="Mechanical Works Piping Installation AXIS INFINITY STRUCTURE" style={{"width":"100%","display":"block","borderRadius":"12px","boxShadow":"0 15px 40px rgba(0,0,0,0.12)","position":"relative","zIndex":"2","height":"420px","objectFit":"cover"}} />
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
                <h2 style={{"color":"var(--clr-white)"}}>Mechanical Engineering Services</h2>
                <p style={{"color":"rgba(255,255,255,0.75)","maxWidth":"700px","margin":"15px auto 0"}}>From equipment setting and alignment to process piping and plant shutdowns , we cover the full mechanical scope of your industrial project.</p>
            </div>
            <div className="grid-3">
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-wrench" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>Equipment Installation & Alignment</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Precision rigging, setting, and laser alignment of static and rotating equipment , pumps, compressors, turbines, heat exchangers, vessels, and pressure equipment.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-pipe" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>Industrial Piping Systems</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Fabrication and installation of process, utility, and high-pressure piping systems in CS, SS, alloy, and HDPE materials , spool fabrication, fit-up, and radiographic testing.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-factory" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>Structural Steel Fabrication</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Custom off-site fabrication and on-site erection of pipe racks, equipment skids, support structures, platforms, stairways, and access systems.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-fire" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>Specialized Welding Services</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>GTAW, SMAW, FCAW, and SAW welding by CSWIP / AWS qualified welders. WPS/PQR documentation, weld mapping, PWHT, and radiographic test clearance.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-gear" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>Plant Shutdown & Turnaround</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Complete turnaround planning and execution , vessel inspection, heat exchanger cleaning, pump overhaul, relief valve servicing, and mechanical integrity assessments.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-thermometer" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>Insulation & Surface Protection</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Hot and cold insulation of piping and equipment using mineral wool, calcium silicate, and cellular glass , with industrial painting and passive fire protection coatings.</p>
                </div>
            </div>
        </div>
    </section>

    {/* Sub-services */}
    <section className="section-padding bg-white">
        <div className="container">
            <div className="section-header text-center fade-in-up mb-5">
                <span className="section-label">Technical Scope</span>
                <h2>Mechanical Works Sub-Services</h2>
            </div>
            <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(300px, 1fr))","gap":"25px"}}>
                <div style={{"border":"1px solid var(--clr-grey)","borderRadius":"12px","padding":"30px","transition":"all 0.3s ease"}} onmouseover="this.style.borderColor='var(--clr-blue)'; this.style.transform='translateY(-3px)';" onmouseout="this.style.borderColor='var(--clr-grey)'; this.style.transform='translateY(0)';">
                    <i className="ph ph-gauge" style={{"fontSize":"2rem","color":"var(--clr-blue)","marginBottom":"15px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-navy)","marginBottom":"10px"}}>Static Equipment</h4>
                    <ul style={{"listStyle":"none","padding":"0","color":"var(--clr-charcoal)","fontSize":"0.9rem","lineHeight":"1.8"}}>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Pressure Vessel Installation</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Heat Exchanger Bundling</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Tank Erection (API 650 / API 620)</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Reactor Internals Installation</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Distillation Column Erection</li>
                    </ul>
                </div>
                <div style={{"border":"1px solid var(--clr-grey)","borderRadius":"12px","padding":"30px","transition":"all 0.3s ease"}} onmouseover="this.style.borderColor='var(--clr-blue)'; this.style.transform='translateY(-3px)';" onmouseout="this.style.borderColor='var(--clr-grey)'; this.style.transform='translateY(0)';">
                    <i className="ph ph-wind" style={{"fontSize":"2rem","color":"var(--clr-blue)","marginBottom":"15px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-navy)","marginBottom":"10px"}}>Rotating Equipment</h4>
                    <ul style={{"listStyle":"none","padding":"0","color":"var(--clr-charcoal)","fontSize":"0.9rem","lineHeight":"1.8"}}>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Centrifugal Pump Installation</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Gas Compressor Setting</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Turbine Alignment</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Gearbox Mounting</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Fan &amp; Blower Installation</li>
                    </ul>
                </div>
                <div style={{"border":"1px solid var(--clr-grey)","borderRadius":"12px","padding":"30px","transition":"all 0.3s ease"}} onmouseover="this.style.borderColor='var(--clr-blue)'; this.style.transform='translateY(-3px)';" onmouseout="this.style.borderColor='var(--clr-grey)'; this.style.transform='translateY(0)';">
                    <i className="ph ph-waves" style={{"fontSize":"2rem","color":"var(--clr-blue)","marginBottom":"15px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-navy)","marginBottom":"10px"}}>Cross-Country Pipelines</h4>
                    <ul style={{"listStyle":"none","padding":"0","color":"var(--clr-charcoal)","fontSize":"0.9rem","lineHeight":"1.8"}}>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Right-of-Way Preparation</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Pipe Stringing &amp; Welding</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Hydrostatic Testing</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Cathodic Protection Installation</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>River &amp; Road Crossings</li>
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
                <h2>Why Choose AXIS Infinity Structure for Mechanical Works?</h2>
            </div>
            <div className="grid-3">
                <div className="card fade-in-up" style={{"textAlign":"center"}}>
                    <div className="card-icon" style={{"margin":"0 auto 20px"}}><i className="ph ph-shield-check"></i></div>
                    <h3>Certified Welding & NDT</h3>
                    <p>Our welders carry CSWIP 3.1, AWS D1.1, and ASME IX qualifications. In-house RT, UT, PT, and MT NDT capabilities for critical joint inspection.</p>
                </div>
                <div className="card fade-in-up delay-1" style={{"textAlign":"center"}}>
                    <div className="card-icon" style={{"margin":"0 auto 20px"}}><i className="ph ph-timer"></i></div>
                    <h3>Minimal Downtime Approach</h3>
                    <p>We plan mechanical installations to minimize plant downtime using pre-fabrication, parallel work fronts, and modular assembly off-site where feasible.</p>
                </div>
                <div className="card fade-in-up delay-2" style={{"textAlign":"center"}}>
                    <div className="card-icon" style={{"margin":"0 auto 20px"}}><i className="ph ph-chart-line"></i></div>
                    <h3>Code-Compliant Documentation</h3>
                    <p>Full MTRs, weld records, hydro-test reports, alignment records, and as-built documentation delivered with every project for seamless regulatory compliance.</p>
                </div>
            </div>
        </div>
    </section>

    {/* CTA */}
    <section className="cta-banner" style={{"backgroundImage":"url('images/mechanical_works_pipes.png')"}}>
        <div className="container fade-in-up">
            <h2>Ready to Execute Your Industrial Mechanical Scope?</h2>
            <p>Contact our mechanical engineering team for technical consultation, detailed estimation, and project planning support.</p>
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
