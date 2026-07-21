import React, { useEffect } from 'react';

export default function ElectricalInstrumentation() {
  useEffect(() => {
    document.title = "Electrical & Instrumentation Works | AXIS INFINITY STRUCTURE";
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      {/* Page Banner */}
    <section className="page-banner" style={{"backgroundImage":"url('images/ei_works_panel.webp')"}}>
        <div className="container fade-in-up">
            <h1>Electrical & Instrumentation Works</h1>
            <p>From High-Voltage Substations to DCS Loop Commissioning , Full E&I Scope Delivery.</p>
        </div>
    </section>

    {/* Overview */}
    <section className="section-padding bg-white">
        <div className="container">
            <div className="two-column" style={{"alignItems":"center"}}>
                <div className="fade-in-left">
                    <span className="section-label">Overview</span>
                    <h2 className="mb-4">Electrical & Instrumentation Works for Industrial & Commercial Projects in Saudi Arabia</h2>
                    <p style={{"lineHeight":"1.8","color":"var(--clr-charcoal)","fontSize":"1.05rem","marginBottom":"1rem"}}>
                        AXIS INFINITY STRUCTURE's Electrical & Instrumentation (E&I) Division provides comprehensive electrical engineering, instrumentation, automation, and control systems services to the oil & gas, petrochemical, power, and industrial sectors across Saudi Arabia and Pakistan.
                    </p>
                    <p style={{"lineHeight":"1.8","color":"var(--clr-charcoal)","marginBottom":"1rem"}}>
                        Our IEC/NEC/SBC-certified electrical engineers and CSWIP-qualified instrumentation technicians design, install, test, and commission complete electrical infrastructure , from HV/MV substation construction to complex DCS/PLC automation systems and fiber-optic communication networks.
                    </p>
                    <div style={{"display":"flex","gap":"20px","flexWrap":"wrap","marginTop":"25px"}}>
                        <span style={{"background":"rgba(11,143,200,0.1)","color":"var(--clr-blue)","padding":"8px 18px","borderRadius":"50px","fontWeight":"600","fontSize":"0.9rem","border":"1px solid rgba(11,143,200,0.2)"}}>IEC Standards</span>
                        <span style={{"background":"rgba(11,143,200,0.1)","color":"var(--clr-blue)","padding":"8px 18px","borderRadius":"50px","fontWeight":"600","fontSize":"0.9rem","border":"1px solid rgba(11,143,200,0.2)"}}>NEC Compliant</span>
                        <span style={{"background":"rgba(11,143,200,0.1)","color":"var(--clr-blue)","padding":"8px 18px","borderRadius":"50px","fontWeight":"600","fontSize":"0.9rem","border":"1px solid rgba(11,143,200,0.2)"}}>ATEX / IECEx</span>
                        <span style={{"background":"rgba(11,143,200,0.1)","color":"var(--clr-blue)","padding":"8px 18px","borderRadius":"50px","fontWeight":"600","fontSize":"0.9rem","border":"1px solid rgba(11,143,200,0.2)"}}>SBC Compliant</span>
                    </div>
                </div>
                <div className="fade-in-right" style={{"padding":"20px"}}>
                    <div style={{"position":"relative","paddingBottom":"20px","paddingRight":"20px"}}>
                        <img src="images/ei_works_panel.webp" alt="Electrical Instrumentation Control Room AXIS INFINITY STRUCTURE" style={{"width":"100%","display":"block","borderRadius":"12px","boxShadow":"0 15px 40px rgba(0,0,0,0.12)","position":"relative","zIndex":"2","height":"420px","objectFit":"cover"}}  width="1024" height="1024" loading="lazy" decoding="async" />
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
                <h2 style={{"color":"var(--clr-white)"}}>Electrical & Instrumentation Services</h2>
                <p style={{"color":"rgba(255,255,255,0.75)","maxWidth":"700px","margin":"15px auto 0"}}>From HV substations to DCS loop testing , we deliver the full E&I scope for complex industrial and commercial projects.</p>
            </div>
            <div className="grid-3">
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-lightning" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>HV/MV Substation Construction</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Design and construction of 132kV, 33kV, and 11kV substations including transformers, switchgear, protection relays, and earthing systems for industrial facilities and townships.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-plug" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>MCC & Power Distribution</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Motor Control Centre (MCC) installation, LV switchboard assembly, cable trays, cable pulling, termination, and commissioning for industrial power distribution systems.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-cpu" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>DCS / PLC / SCADA Systems</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Installation, configuration, and loop commissioning of DCS, PLC, and SCADA systems from leading vendors , Honeywell, Emerson, Siemens, ABB, and Rockwell Automation.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-sliders-horizontal" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>Field Instrumentation & Calibration</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Installation and calibration of transmitters, flow meters, control valves, safety systems, and fire & gas detection systems , full loop testing and documentation.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-lightbulb" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>Industrial Lighting Systems</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>High-mast, area, and hazardous area lighting design and installation for industrial facilities, roads, ports, and townships , ATEX-rated fixtures in classified zones.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-broadcast" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>Telecoms & Networking</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Fiber-optic backbone, CCTV, access control, PA systems, and industrial Ethernet networks for smart facilities and industrial communication infrastructure.</p>
                </div>
            </div>
        </div>
    </section>

    {/* Sub-services */}
    <section className="section-padding bg-white">
        <div className="container">
            <div className="section-header text-center fade-in-up mb-5">
                <span className="section-label">Technical Scope</span>
                <h2>E&I Sub-Services , Detailed Breakdown</h2>
            </div>
            <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(300px, 1fr))","gap":"25px"}}>
                <div style={{"border":"1px solid var(--clr-grey)","borderRadius":"12px","padding":"30px","transition":"all 0.3s ease"}} onmouseover="this.style.borderColor='var(--clr-blue)'; this.style.transform='translateY(-3px)';" onmouseout="this.style.borderColor='var(--clr-grey)'; this.style.transform='translateY(0)';">
                    <i className="ph ph-transformer" style={{"fontSize":"2rem","color":"var(--clr-blue)","marginBottom":"15px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-navy)","marginBottom":"10px"}}>Power System Works</h4>
                    <ul style={{"listStyle":"none","padding":"0","color":"var(--clr-charcoal)","fontSize":"0.9rem","lineHeight":"1.8"}}>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Transformer Installation &amp; Testing</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>VFD &amp; Soft Starter Commissioning</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>UPS &amp; Battery System Setup</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Generator Synchronization</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Power Factor Correction Systems</li>
                    </ul>
                </div>
                <div style={{"border":"1px solid var(--clr-grey)","borderRadius":"12px","padding":"30px","transition":"all 0.3s ease"}} onmouseover="this.style.borderColor='var(--clr-blue)'; this.style.transform='translateY(-3px)';" onmouseout="this.style.borderColor='var(--clr-grey)'; this.style.transform='translateY(0)';">
                    <i className="ph ph-check-square-offset" style={{"fontSize":"2rem","color":"var(--clr-blue)","marginBottom":"15px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-navy)","marginBottom":"10px"}}>Pre-Commissioning & Commissioning</h4>
                    <ul style={{"listStyle":"none","padding":"0","color":"var(--clr-charcoal)","fontSize":"0.9rem","lineHeight":"1.8"}}>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Loop Checking &amp; I/O Testing</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Interlock Logic Verification</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Cause &amp; Effect Chart Validation</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>SIL-rated Safety System Testing</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>PSSR &amp; Ready-for-Startup Review</li>
                    </ul>
                </div>
                <div style={{"border":"1px solid var(--clr-grey)","borderRadius":"12px","padding":"30px","transition":"all 0.3s ease"}} onmouseover="this.style.borderColor='var(--clr-blue)'; this.style.transform='translateY(-3px)';" onmouseout="this.style.borderColor='var(--clr-grey)'; this.style.transform='translateY(0)';">
                    <i className="ph ph-fire" style={{"fontSize":"2rem","color":"var(--clr-blue)","marginBottom":"15px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-navy)","marginBottom":"10px"}}>Fire & Gas Detection Systems</h4>
                    <ul style={{"listStyle":"none","padding":"0","color":"var(--clr-charcoal)","fontSize":"0.9rem","lineHeight":"1.8"}}>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>F&G Detector Installation</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Fire Alarm Panel Configuration</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Gas Detection Calibration</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Emergency Shutdown Integration</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Deluge &amp; Suppression Systems</li>
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
                <h2>Why Choose AXIS Infinity Structure for Electrical & Instrumentation?</h2>
            </div>
            <div className="grid-3">
                <div className="card fade-in-up" style={{"textAlign":"center"}}>
                    <div className="card-icon" style={{"margin":"0 auto 20px"}}><i className="ph ph-shield-check"></i></div>
                    <h3>Hazardous Area Specialists</h3>
                    <p>Our team is trained for classified area installations (Zone 1, Zone 2) using ATEX/IECEx certified equipment, ensuring the highest level of personnel and asset safety.</p>
                </div>
                <div className="card fade-in-up delay-1" style={{"textAlign":"center"}}>
                    <div className="card-icon" style={{"margin":"0 auto 20px"}}><i className="ph ph-certificate"></i></div>
                    <h3>Multi-Vendor Integration Experts</h3>
                    <p>We have hands-on commissioning experience with Honeywell, Yokogawa, Siemens, ABB, Emerson, and Rockwell Automation systems , reducing your vendor coordination burden.</p>
                </div>
                <div className="card fade-in-up delay-2" style={{"textAlign":"center"}}>
                    <div className="card-icon" style={{"margin":"0 auto 20px"}}><i className="ph ph-file-text"></i></div>
                    <h3>Full Loop Documentation</h3>
                    <p>Complete E&I turnover packages including loop drawings, calibration records, pre-commissioning checksheets, and punch-list closeout for seamless asset handover.</p>
                </div>
            </div>
        </div>
    </section>

    {/* CTA */}
    <section className="cta-banner" style={{"backgroundImage":"url('images/electrical_panelboard.webp')"}}>
        <div className="container fade-in-up">
            <h2>Ready to Commission Your Electrical & Instrumentation Scope?</h2>
            <p>Talk to our E&I specialists for loop testing schedules, scope estimation, and commissioning support planning.</p>
            <div style={{"display":"flex","gap":"15px","flexWrap":"wrap","justifyContent":"center"}}>
                <a href="/contact" className="btn btn-primary">Request a Consultation</a>
                <a href="/projects" className="btn btn-secondary">View Our Projects</a>
            </div>
        </div>
    </section>

    {/* Footer */}
    </>
  );
}
