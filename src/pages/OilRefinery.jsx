import React, { useEffect } from 'react';

export default function OilRefinery() {
  useEffect(() => {
    document.title = "Oil & Refinery Department | AXIS INFINITY STRUCTURE";
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      {/* Page Banner */}
    <section className="page-banner" style={{"backgroundImage":"url('images/project_refinery.png')","bgPosition":"center"}}>
        <div className="container fade-in-up">
            <h1>Oil & Refinery Department</h1>
            <p>Delivering high-integrity construction, mechanical outfitting, and critical shutdown support.</p>
        </div>
    </section>

    {/* Overview Section */}
    <section className="section-padding bg-white">
        <div className="container">
            <div className="two-column" style={{"alignItems":"center"}}>
                <div className="fade-in-left">
                    <span className="section-label">Oil & Gas Expertise</span>
                    <h2 className="mb-4">Refinery Engineering & Construction Services</h2>
                    <p className="mb-4" style={{"lineHeight":"1.8","color":"var(--clr-charcoal)","fontSize":"1.05rem"}}>AXIS INFINITY STRUCTURE operates a dedicated Oil & Refinery department equipped to manage high-stakes, technically complex refinery projects. We support major refinery operators from ground-up installations to critical maintenance shutdowns.</p>
                    <p className="mb-4" style={{"lineHeight":"1.8","color":"var(--clr-charcoal)"}}>We possess deep capabilities to supply specialized manpower, heavy rig equipment, scaffolding assets, structural steel fabrication, high-pressure piping, and hazardous-area E&I calibration. Our zero-tolerance safety compliance guarantees project delivery within strict refinery standards.</p>
                </div>
                <div className="fade-in-right" style={{"padding":"20px"}}>
                    <div style={{"position":"relative","paddingBottom":"20px","paddingRight":"20px"}}>
                        <img src="images/projects/red_sea_desalination.png" alt="Oil and Refinery Engineering" style={{"width":"100%","display":"block","borderRadius":"8px","boxShadow":"0 10px 30px rgba(0,0,0,0.1)","position":"relative","zIndex":"2","height":"400px","objectFit":"cover"}} />
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
                <span className="section-label white-label">Refinery Capabilities</span>
                <h2 style={{"color":"var(--clr-white)"}}>What We Deliver</h2>
            </div>
            <div className="grid-3">
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-pipe" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"15px"}}>High-Pressure Piping</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Fabrication, exotic alloy welding (stainless, duplex, chrome-moly), and installation of high-pressure utility and process piping networks.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-wrench" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"15px"}}>Equipment Installation</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Rigging and placement of static and rotating equipment including distillation columns, reactors, pressure vessels, and large heat exchangers.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.15)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-calendar-check" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"15px"}}>Shutdowns & Turnarounds</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>24/7 rapid maintenance support, mechanical cleaning, valve replacements, and internal column overhauls during scheduled plant turnarounds.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-lightning" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"15px"}}>Hazardous E&I Works</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Intrinsically safe electrical distribution, transmitter installation, control loop testing, and transmitter calibration within hazardous Zones.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-users-three" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"15px"}}>Specialized Manpower</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Provision of certified high-pressure welders, structural fitters, instrument technicians, QA/QC inspectors, and safety officers.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-shield-check" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"15px"}}>Safety Compliance (HSE)</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Rigorous risk assessment, permit-to-work (PTW) coordination, LOTO procedures, and full compliance with refinery safety audits.</p>
                </div>
            </div>
        </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding bg-white">
        <div className="container">
            <div className="section-header text-center fade-in-up mb-5">
                <span className="section-label">HSE & Quality</span>
                <h2>Why Choose AXIS Infinity Structure for Refinery Support?</h2>
            </div>
            <div className="grid-3">
                <div className="value-card fade-in-up">
                    <i className="ph ph-shield-check"></i>
                    <h3>Zero-Harm Standard</h3>
                    <p>Refineries are high-risk environments. Our strict HSE protocols ensure accident-free execution with active safety monitoring on-site.</p>
                </div>
                <div className="value-card fade-in-up delay-1">
                    <i className="ph ph-medal"></i>
                    <h3>ASME & ISO Quality</h3>
                    <p>All piping and structural fabrication comply with ASME, API, and ISO codes, verified by certified ASNT level inspectors.</p>
                </div>
                <div className="value-card fade-in-up delay-2">
                    <i className="ph ph-clock-countdown"></i>
                    <h3>Minimized Downtime</h3>
                    <p>We treat project timelines as business-critical. Our coordinated resource supply cuts shutdown durations significantly.</p>
                </div>
            </div>
        </div>
    </section>

    {/* CTA */}
    <section className="cta-banner" style={{"backgroundImage":"url('images/project_refinery.png')"}}>
        <div className="container fade-in-up">
            <h2>Ready to discuss your Refinery engineering or manpower needs?</h2>
            <p>Connect with our technical division to review scope, specifications, and project logistics.</p>
            <a href="https://wa.me/966507673009" target="_blank" className="btn btn-primary" style={{"display":"inline-flex","alignItems":"center","gap":"8px","backgroundColor":"var(--clr-blue)","borderColor":"var(--clr-blue)"}}><i className="ph ph-whatsapp-logo" style={{"fontSize":"1.35rem"}}></i> +966 50 767 3009</a>
        </div>
    </section>

        {/* Footer */}
    </>
  );
}
