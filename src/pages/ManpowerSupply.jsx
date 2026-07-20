import React, { useEffect } from 'react';

export default function ManpowerSupply() {
  useEffect(() => {
    document.title = "Technical Manpower Supply & Staffing Solutions | AXIS INFINITY STRUCTURE";
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      {/* Page Banner */}
    <section className="page-banner" style={{"backgroundImage":"url('images/manpower_supply_hero.png')"}}>
        <div className="container fade-in-up">
            <h1>Manpower Supply</h1>
            <p>Certified Technical Workforce Solutions for Industrial & Construction Projects.</p>
        </div>
    </section>

    {/* Overview */}
    <section className="section-padding bg-white">
        <div className="container">
            <div className="two-column" style={{"alignItems":"center"}}>
                <div className="fade-in-left">
                    <span className="section-label">Overview</span>
                    <h2 className="mb-4">Certified Technical Manpower Supply & Staffing Solutions for Industrial Projects in Saudi Arabia</h2>
                    <p style={{"lineHeight":"1.8","color":"var(--clr-charcoal)","fontSize":"1.05rem","marginBottom":"1rem"}}>
                        AXIS INFINITY STRUCTURE's Manpower Supply Division provides pre-screened, technically qualified, and certified professional and skilled workforce solutions for construction, oil & gas, petrochemical, and industrial projects across Saudi Arabia and Pakistan.
                    </p>
                    <p style={{"lineHeight":"1.8","color":"var(--clr-charcoal)","marginBottom":"1rem"}}>
                        Whether you need one project manager or 500 skilled tradesmen, our manpower solutions are designed for speed, compliance, and long-term reliability , backed by our dedicated HR, mobilization, and HSSE management teams.
                    </p>
                    <div style={{"display":"flex","gap":"20px","flexWrap":"wrap","marginTop":"25px"}}>
                        <span style={{"background":"rgba(11,143,200,0.1)","color":"var(--clr-blue)","padding":"8px 18px","borderRadius":"50px","fontWeight":"600","fontSize":"0.9rem","border":"1px solid rgba(11,143,200,0.2)"}}>Saudi Aramco Approved</span>
                        <span style={{"background":"rgba(11,143,200,0.1)","color":"var(--clr-blue)","padding":"8px 18px","borderRadius":"50px","fontWeight":"600","fontSize":"0.9rem","border":"1px solid rgba(11,143,200,0.2)"}}>NEOM Ready</span>
                        <span style={{"background":"rgba(11,143,200,0.1)","color":"var(--clr-blue)","padding":"8px 18px","borderRadius":"50px","fontWeight":"600","fontSize":"0.9rem","border":"1px solid rgba(11,143,200,0.2)"}}>NIOSH / NEBOSH</span>
                    </div>
                </div>
                <div className="fade-in-right" style={{"padding":"20px"}}>
                    <div style={{"position":"relative","paddingBottom":"20px","paddingRight":"20px"}}>
                        <img src="images/manpower_supply_new.png" alt="Technical Manpower Supply AXIS INFINITY STRUCTURE" style={{"width":"100%","display":"block","borderRadius":"12px","boxShadow":"0 15px 40px rgba(0,0,0,0.12)","position":"relative","zIndex":"2","height":"420px","objectFit":"cover"}} />
                        <div style={{"position":"absolute","bottom":"0","right":"0","width":"95%","height":"95%","border":"3px solid var(--clr-blue)","borderRadius":"12px","zIndex":"1"}}></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Workforce Categories */}
    <section className="section-padding pattern-bg bg-navy text-white">
        <div className="container">
            <div className="section-header text-center fade-in-up mb-5">
                <span className="section-label white-label">Workforce Categories</span>
                <h2 style={{"color":"var(--clr-white)"}}>Manpower We Supply</h2>
                <p style={{"color":"rgba(255,255,255,0.75)","maxWidth":"700px","margin":"15px auto 0"}}>From senior project managers to skilled blue-collar workers , we supply the right personnel with verified credentials and relevant project experience.</p>
            </div>
            <div className="grid-3">
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-briefcase" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>Management & Engineering</h4>
                    <ul style={{"listStyle":"none","padding":"0","color":"rgba(255,255,255,0.7)","fontSize":"0.9rem","lineHeight":"1.8","margin":"0"}}>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Project Managers & Directors</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Civil / Structural Engineers</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Mechanical Engineers</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Electrical &amp; Instrumentation Engineers</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Procurement &amp; Planning Engineers</li>
                    </ul>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-magnifying-glass" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>QA/QC & Inspection</h4>
                    <ul style={{"listStyle":"none","padding":"0","color":"rgba(255,255,255,0.7)","fontSize":"0.9rem","lineHeight":"1.8","margin":"0"}}>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>QA/QC Managers &amp; Engineers</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>NDT Technicians (RT, UT, MT, PT)</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Welding Inspectors (CSWIP 3.1 / AWS CWI)</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Coating &amp; Painting Inspectors (NACE)</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Third-Party Inspection Coordinators</li>
                    </ul>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-shield-check" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>HSE & Safety Officers</h4>
                    <ul style={{"listStyle":"none","padding":"0","color":"rgba(255,255,255,0.7)","fontSize":"0.9rem","lineHeight":"1.8","margin":"0"}}>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>HSE Managers &amp; Site Safety Officers</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>NEBOSH / IOSH Certified Officers</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Fire Prevention &amp; Emergency Response</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Environmental Compliance Officers</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Scaffolding Inspectors (CISRS)</li>
                    </ul>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-wrench" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>Skilled Technical Trades</h4>
                    <ul style={{"listStyle":"none","padding":"0","color":"rgba(255,255,255,0.7)","fontSize":"0.9rem","lineHeight":"1.8","margin":"0"}}>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Certified Welders (GTAW/SMAW/FCAW)</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Pipefitters &amp; Millwrights</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Electrical Technicians &amp; Wiremen</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Instrument Technicians</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>HVAC Technicians</li>
                    </ul>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-hard-hat" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>Civil & Construction Trades</h4>
                    <ul style={{"listStyle":"none","padding":"0","color":"rgba(255,255,255,0.7)","fontSize":"0.9rem","lineHeight":"1.8","margin":"0"}}>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Formwork Carpenters &amp; Shuttering</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Steel Fixers &amp; Rebar Workers</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Masons &amp; Plasterers</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Heavy Equipment Operators</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Crane Operators (OPITO Certified)</li>
                    </ul>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-users-three" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>General & Support Staff</h4>
                    <ul style={{"listStyle":"none","padding":"0","color":"rgba(255,255,255,0.7)","fontSize":"0.9rem","lineHeight":"1.8","margin":"0"}}>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>General Laborers &amp; Helpers</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Document Controllers</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Site Administrators &amp; Clerks</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Security &amp; Access Control</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Housekeeping &amp; Cleaning Crew</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    {/* Mobilization Process */}
    <section className="section-padding bg-white">
        <div className="container">
            <div className="section-header text-center fade-in-up mb-5">
                <span className="section-label">Our Process</span>
                <h2>How We Mobilize Your Workforce</h2>
                <p className="max-w-800 mx-auto">Our structured manpower mobilization process ensures the right personnel reach your site on time, fully compliant, and ready to work.</p>
            </div>
            <div className="grid-4 fade-in-up">
                <div style={{"textAlign":"center","padding":"20px"}}>
                    <div style={{"width":"60px","height":"60px","background":"var(--clr-blue)","borderRadius":"50%","display":"flex","alignItems":"center","justifyContent":"center","margin":"0 auto 15px","fontSize":"1.5rem","fontWeight":"800","color":"white","fontFamily":"var(--font-heading)"}}>1</div>
                    <h4 style={{"color":"var(--clr-navy)"}}>Requirement Analysis</h4>
                    <p style={{"fontSize":"0.9rem","color":"var(--clr-charcoal)"}}>We review your manpower schedule, required certifications, project scope, and site-specific requirements to build a precise resource plan.</p>
                </div>
                <div style={{"textAlign":"center","padding":"20px"}}>
                    <div style={{"width":"60px","height":"60px","background":"var(--clr-blue)","borderRadius":"50%","display":"flex","alignItems":"center","justifyContent":"center","margin":"0 auto 15px","fontSize":"1.5rem","fontWeight":"800","color":"white","fontFamily":"var(--font-heading)"}}>2</div>
                    <h4 style={{"color":"var(--clr-navy)"}}>Candidate Screening</h4>
                    <p style={{"fontSize":"0.9rem","color":"var(--clr-charcoal)"}}>Rigorous technical testing, credential verification, document authentication, and client-specific competency assessments for every candidate.</p>
                </div>
                <div style={{"textAlign":"center","padding":"20px"}}>
                    <div style={{"width":"60px","height":"60px","background":"var(--clr-blue)","borderRadius":"50%","display":"flex","alignItems":"center","justifyContent":"center","margin":"0 auto 15px","fontSize":"1.5rem","fontWeight":"800","color":"white","fontFamily":"var(--font-heading)"}}>3</div>
                    <h4 style={{"color":"var(--clr-navy)"}}>Visa & Compliance</h4>
                    <p style={{"fontSize":"0.9rem","color":"var(--clr-charcoal)"}}>End-to-end visa processing, Iqama (KSA), medical fitness testing, ARAMCO safety induction, and all immigration compliance management.</p>
                </div>
                <div style={{"textAlign":"center","padding":"20px"}}>
                    <div style={{"width":"60px","height":"60px","background":"var(--clr-blue)","borderRadius":"50%","display":"flex","alignItems":"center","justifyContent":"center","margin":"0 auto 15px","fontSize":"1.5rem","fontWeight":"800","color":"white","fontFamily":"var(--font-heading)"}}>4</div>
                    <h4 style={{"color":"var(--clr-navy)"}}>Site Deployment</h4>
                    <p style={{"fontSize":"0.9rem","color":"var(--clr-charcoal)"}}>On-site orientation, induction training, tool-box talks, and continuous HR support throughout the contract term , including payroll and camp management.</p>
                </div>
            </div>
        </div>
    </section>

    {/* Why Choose */}
    <section className="section-padding bg-off-white">
        <div className="container">
            <div className="section-header text-center fade-in-up mb-5">
                <span className="section-label">Our Advantage</span>
                <h2>Why Choose AXIS Infinity Structure for Manpower Supply?</h2>
            </div>
            <div className="grid-3">
                <div className="card fade-in-up" style={{"textAlign":"center"}}>
                    <div className="card-icon" style={{"margin":"0 auto 20px"}}><i className="ph ph-certificate"></i></div>
                    <h3>Pre-Verified Credentials</h3>
                    <p>Every candidate undergoes credential verification, trade testing, and site safety assessment before mobilization , zero tolerance for unqualified personnel.</p>
                </div>
                <div className="card fade-in-up delay-1" style={{"textAlign":"center"}}>
                    <div className="card-icon" style={{"margin":"0 auto 20px"}}><i className="ph ph-clock"></i></div>
                    <h3>Rapid Mobilization</h3>
                    <p>With our pre-qualified talent pool and established visa processing networks, we can mobilize teams within days , not weeks , for urgent project requirements.</p>
                </div>
                <div className="card fade-in-up delay-2" style={{"textAlign":"center"}}>
                    <div className="card-icon" style={{"margin":"0 auto 20px"}}><i className="ph ph-hands-clapping"></i></div>
                    <h3>Full HR Support Included</h3>
                    <p>We manage payroll, accommodation, transport, insurance, and compliance for all deployed manpower , reducing your administrative burden throughout the project.</p>
                </div>
            </div>
        </div>
    </section>

    {/* CTA */}
    <section className="cta-banner" style={{"backgroundImage":"url('images/manpower_supply_hero.png')"}}>
        <div className="container fade-in-up">
            <h2>Need a Qualified Industrial Workforce for Your Project?</h2>
            <p>Submit your manpower requirements to our team , we will provide a tailored staffing plan, competitive rates, and rapid mobilization timelines.</p>
            <div style={{"display":"flex","gap":"15px","flexWrap":"wrap","justifyContent":"center"}}>
                <a href="contact.html" className="btn btn-primary">Submit Manpower Request</a>
                <a href="careers.html" className="btn btn-secondary">View Current Openings</a>
            </div>
        </div>
    </section>

    {/* Footer */}
    </>
  );
}
