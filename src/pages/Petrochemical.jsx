import React, { useEffect } from 'react';

export default function Petrochemical() {
  useEffect(() => {
    document.title = "Petrochemical Department | AXIS INFINITY STRUCTURE";
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      {/* Page Banner */}
    <section className="page-banner" style={{"backgroundImage":"url('images/insulation.png')"}}>
        <div className="container fade-in-up">
            <h1>Petrochemical Department</h1>
            <p>Providing specialized modular construction, chemical piping, and DCS control system integration.</p>
        </div>
    </section>

    {/* Overview Section */}
    <section className="section-padding bg-white">
        <div className="container">
            <div className="two-column" style={{"alignItems":"center"}}>
                <div className="fade-in-left">
                    <span className="section-label">Petrochemical Expertise</span>
                    <h2 className="mb-4">Advanced Construction & System Integration</h2>
                    <p className="mb-4" style={{"lineHeight":"1.8","color":"var(--clr-charcoal)","fontSize":"1.05rem"}}>AXIS INFINITY STRUCTURE operates a specialized Petrochemical department focused on chemical processing plant developments. Our expertise spans heavy structural assembly, exotic polymer piping, and hazardous-area E&I automation.</p>
                    <p className="mb-4" style={{"lineHeight":"1.8","color":"var(--clr-charcoal)"}}>We are fully equipped to manage chemical storage facilities, tank farm construction, gas detection grids, and DCS panel installations. By combining certified manpower rosters with our in-house crane and equipment fleet, we deliver high-integrity project support that ensures flawless operational handovers.</p>
                </div>
                <div className="fade-in-right" style={{"padding":"20px"}}>
                    <div style={{"position":"relative","paddingBottom":"20px","paddingRight":"20px"}}>
                        <img src="images/project_automation.png" alt="Petrochemical Automation & Control" style={{"width":"100%","display":"block","borderRadius":"8px","boxShadow":"0 10px 30px rgba(0,0,0,0.1)","position":"relative","zIndex":"2","height":"400px","objectFit":"cover"}} />
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
                <span className="section-label white-label">Petrochemical Capabilities</span>
                <h2 style={{"color":"var(--clr-white)"}}>What We Deliver</h2>
            </div>
            <div className="grid-3">
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-paint-brush" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"15px"}}>Polymer & Chemical Piping</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Fabrication and welding of specialized double-walled piping, jacketed lines, and high-purity chemical transit lines.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-cpu" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"15px"}}>DCS & Automation Control</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Installation and loop testing of Distributed Control Systems (DCS), Programmable Logic Controllers (PLC), and process automation safety networks.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.15)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-factory" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"15px"}}>Modular Skid Assembly</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>In-shop fabrication and site integration of modular chemical process skids, pre-assembled structural units, and pumps.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-intersect" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"15px"}}>Tank Farms & Storage</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Civil foundation piling, structural tank erection, and internal chemical-resistant lining for storage facilities.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-users-three" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"15px"}}>Manpower & Site Support</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Certified instrument technicians, industrial safety officers, experienced piping engineers, and technical supervisors.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-shield-check" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"15px"}}>Industrial Safety & HSE</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Risk mitigation, toxic gas monitoring setup, chemical protective protocols, and strict adherence to OSHA and plant safety standards.</p>
                </div>
            </div>
        </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding bg-white">
        <div className="container">
            <div className="section-header text-center fade-in-up mb-5">
                <span className="section-label">HSE & Quality</span>
                <h2>Why Choose AXIS Infinity Structure for Petrochemical Projects?</h2>
            </div>
            <div className="grid-3">
                <div className="value-card fade-in-up">
                    <i className="ph ph-shield-check"></i>
                    <h3>Explosion-Proof Standard</h3>
                    <p>All instrumentation and electrical systems are installed and tested strictly in compliance with ATEX and IECEx explosion-proof requirements.</p>
                </div>
                <div className="value-card fade-in-up delay-1">
                    <i className="ph ph-medal"></i>
                    <h3>High-Purity Quality</h3>
                    <p>Our piping fabrication and exotic alloy welds are executed to zero-defect standards, verified by 100% radiographic inspection (RT).</p>
                </div>
                <div className="value-card fade-in-up delay-2">
                    <i className="ph ph-clock-countdown"></i>
                    <h3>Coordinated Logistics</h3>
                    <p>Our owned transport fleet and ready-to-mobilize workforce ensure rapid response for scheduled maintenance or expansions.</p>
                </div>
            </div>
        </div>
    </section>

    {/* CTA */}
    <section className="cta-banner" style={{"backgroundImage":"url('images/insulation.png')"}}>
        <div className="container fade-in-up">
            <h2>Ready to start your next Petrochemical plant expansion or shutdown?</h2>
            <p>Connect with our technical team to discuss your project requirements and receive a detailed, customized proposal.</p>
            <a href="https://wa.me/966507673009" target="_blank" className="btn btn-primary" style={{"display":"inline-flex","alignItems":"center","gap":"8px","backgroundColor":"var(--clr-blue)","borderColor":"var(--clr-blue)"}}><i className="ph ph-whatsapp-logo" style={{"fontSize":"1.35rem"}}></i> +966 50 767 3009</a>
        </div>
    </section>

        {/* Footer */}
    </>
  );
}
