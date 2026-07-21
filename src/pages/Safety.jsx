import React, { useEffect } from 'react';

export default function Safety() {
  useEffect(() => {
    document.title = "Safety & Quality | AXIS INFINITY STRUCTURE";
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
                        @keyframes pulseGlow {
                            0% { box-shadow: 0 15px 40px rgba(0,0,0,0.08), 0 0 0 0 rgba(37, 211, 102, 0.4); }
                            70% { box-shadow: 0 15px 40px rgba(0,0,0,0.08), 0 0 0 15px rgba(37, 211, 102, 0); }
                            100% { box-shadow: 0 15px 40px rgba(0,0,0,0.08), 0 0 0 0 rgba(37, 211, 102, 0); }
                        }
                        @keyframes textGradient {
                            0% { background-position: 0% 50%; }
                            50% { background-position: 100% 50%; }
                            100% { background-position: 0% 50%; }
                        }
                        @keyframes slideRightLine {
                            0% { left: -50%; }
                            100% { left: 100%; }
                        }
                    ` }} />
      {/* Page Banner */}
    <section className="page-banner" style={{"backgroundImage":"url('images/safety_ppe_engineers.webp')"}}>
        <div className="container fade-in-up">
            <h1>Safety & Quality</h1>
                        <div style={{"marginTop":"35px","marginBottom":"20px"}}>
                <p className="hero-desc">Uncompromising standards in Health, Safety, Environment (HSE) and Quality Assurance / Quality Control (QA/QC) , built into every project stage. </p>
                <p className="hero-desc" style={{"fontSize":"1.05rem","color":"rgba(255,255,255,0.8)","borderLeft":"none","textAlign":"left","paddingLeft":"24px"}}>We bring decades of industrial expertise, deploying innovative technologies and a highly skilled workforce to ensure every milestone is achieved beyond expectations.</p>
                <div className="hero-badges" style={{"justifyContent":"flex-start","marginLeft":"24px"}}>
                    <span className="hero-badge"><i className="ph ph-check-circle"></i> Industrial Expertise</span>
                    <span className="hero-badge"><i className="ph ph-check-circle"></i> Innovative Tech</span>
                    <span className="hero-badge"><i className="ph ph-check-circle"></i> Skilled Workforce</span>
                </div>
            </div>
        </div>
    </section>

    {/* Safety Stats */}
    <div className="stats-strip">
        <div className="container">
            <div className="stats-board">
                <div className="stat-item scale-in"><h3><span className="counter-num" data-target="100" data-suffix="%">0%</span></h3><p>Safety Compliance</p></div>
                <div className="stat-item scale-in delay-1"><h3><span className="counter-num" data-target="0" data-suffix="">0</span></h3><p>Lost Time Incidents</p></div>
                <div className="stat-item scale-in delay-2"><h3><span className="counter-num" data-target="500" data-suffix="+">0+</span></h3><p>Safety Inspections</p></div>
                <div className="stat-item scale-in delay-3"><h3><span className="counter-num" data-target="100" data-suffix="%">0%</span></h3><p>PPE Compliance</p></div>
            </div>
        </div>
    </div>

    {/* Commitment Section */}
    <section className="section-padding bg-white">
        <div className="container">
            <div className="two-column safety-commitment-grid" style={{"alignItems":"stretch","gap":"60px"}}>
                <div className="fade-in-left" style={{"display":"flex","flexDirection":"column"}}>
                    <div style={{"position":"relative","height":"380px","marginTop":"12px","paddingBottom":"20px","paddingRight":"20px"}}>
                        <img src="images/safety.webp" alt="HSE Safety" style={{"width":"100%","height":"100%","objectFit":"cover","display":"block","borderRadius":"8px","boxShadow":"0 10px 30px rgba(0,0,0,0.1)","position":"relative","zIndex":"2"}} />
                        <div style={{"position":"absolute","bottom":"0","right":"0","width":"95%","height":"95%","border":"3px solid var(--clr-blue)","borderRadius":"8px","zIndex":"1"}}></div>
                    </div>
                    
                    <style dangerouslySetInnerHTML={{ __html: `
                        @keyframes pulseGlow {
                            0% { box-shadow: 0 15px 40px rgba(0,0,0,0.08), 0 0 0 0 rgba(37, 211, 102, 0.4); }
                            70% { box-shadow: 0 15px 40px rgba(0,0,0,0.08), 0 0 0 15px rgba(37, 211, 102, 0); }
                            100% { box-shadow: 0 15px 40px rgba(0,0,0,0.08), 0 0 0 0 rgba(37, 211, 102, 0); }
                        }
                        @keyframes textGradient {
                            0% { background-position: 0% 50%; }
                            50% { background-position: 100% 50%; }
                            100% { background-position: 0% 50%; }
                        }
                        @keyframes slideRightLine {
                            0% { left: -50%; }
                            100% { left: 100%; }
                        }
                    ` }} />
                    <div className="safety-anim-card" style={{"marginTop":"40px","display":"flex","alignItems":"center","gap":"20px","background":"white","borderRadius":"12px","padding":"25px","borderLeft":"5px solid #25D366","animation":"floatImage 4s ease-in-out infinite, pulseGlow 2s infinite"}}>
                        <div style={{"width":"70px","height":"70px","background":"rgba(37, 211, 102, 0.1)","borderRadius":"50%","display":"flex","alignItems":"center","justifyContent":"center","flexShrink":"0","color":"#25D366","fontSize":"2.2rem","position":"relative"}}>
                            <i className="ph ph-shield-check"></i>
                            <div style={{"position":"absolute","width":"100%","height":"100%","borderRadius":"50%","border":"2.5px solid rgba(37, 211, 102, 0.3)","borderTopColor":"#25D366","animation":"bullet-spin 1.5s linear infinite"}}></div>
                        </div>
                        <div style={{"flexGrow":"1"}}>
                            <h4 style={{"fontSize":"1.35rem","marginBottom":"5px","fontWeight":"800","background":"linear-gradient(270deg, var(--clr-navy), #25D366, var(--clr-navy))","backgroundSize":"200% 200%","WebkitBackgroundClip":"text","WebkitTextFillColor":"transparent","animation":"textGradient 3s ease infinite"}}>100% ZERO-HARM RECORD</h4>
                            <p style={{"color":"var(--clr-body-text)","fontSize":"0.95rem","margin":"0","lineHeight":"1.5"}}>Uncompromising safety across all projects.</p>
                            
                            <div style={{"width":"100%","height":"4px","background":"rgba(37, 211, 102, 0.15)","borderRadius":"4px","marginTop":"15px","overflow":"hidden","position":"relative"}}>
                                <div style={{"position":"absolute","top":"0","left":"0","height":"100%","width":"40%","background":"#25D366","borderRadius":"4px","animation":"slideRightLine 2s linear infinite"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fade-in-right" style={{"display":"flex","flexDirection":"column","justifyContent":"flex-start"}}>
                    <span className="section-label">Our Commitment</span>
                    <h2>Safety and Quality Are Non-Negotiable</h2>
                    <p className="mb-4" style={{"textAlign":"justify"}}>At AXIS INFINITY STRUCTURE, safety and quality are not procedures on a checklist , they are the foundation of our operational culture. From the first day of site mobilization to the final project handover, every action is governed by our Zero-Harm policy and rigorous quality standards.</p>
                    <p className="mb-4" style={{"textAlign":"justify"}}>Our dedicated HSE officers and QA/QC inspectors are embedded on every project site, with the authority to halt work if safety or quality thresholds are not met. This empowers our workforce to prioritize doing the job right over doing it fast.</p>
                    <ul className="check-list">
                        <li><i className="ph ph-check-circle"></i> Mandatory daily safety briefings for all site personnel</li>
                        <li><i className="ph ph-check-circle"></i> Real-time quality inspection at every project milestone</li>
                        <li><i className="ph ph-check-circle"></i> Incident reporting and root cause analysis protocols</li>
                        <li><i className="ph ph-check-circle"></i> Continuous HSE training and re-certification programs</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    {/* HSE vs QA/QC Policies */}
    <section className="section-padding">
        <div className="container">
            <div className="section-header text-center fade-in-up mb-5">
                <span className="section-label white-label">Standards & Protocols</span>
                <h2 style={{"color":"var(--clr-white)"}}>Our Two-Pillar Framework</h2>
                <p className="max-w-800 mx-auto" style={{"color":"rgba(255,255,255,0.85)"}}>AXIS Infinity Structure operates on a dual-standard framework that simultaneously protects people and guarantees quality outcomes.</p>
            </div>
            <div className="two-column" style={{"alignItems":"stretch","gap":"40px"}}>
                {/* HSE */}
                <div className="fade-in-left">
                    <div style={{"background":"var(--clr-navy)","padding":"40px","borderRadius":"16px","color":"var(--clr-white)","height":"100%","display":"flex","flexDirection":"column"}}>
                        <div style={{"display":"flex","alignItems":"center","gap":"15px","marginBottom":"25px"}}>
                            <i className="ph ph-shield-plus" style={{"fontSize":"2.5rem","color":"var(--clr-blue)"}}></i>
                            <h3 style={{"color":"var(--clr-white)","margin":"0"}}>Health, Safety & Environment</h3>
                        </div>
                        <p style={{"color":"rgba(255,255,255,0.8)","marginBottom":"20px"}}>Our Zero-Harm policy ensures that every individual on-site returns home safely. We mandate strict compliance with local and international safety regulations across all operations.</p>
                        <ul className="service-bullets-new" style={{"marginTop":"auto"}}>
                            <li style={{"color":"rgba(255,255,255,0.85)"}}><span className="anim-bullet dots"><span></span><span></span><span></span></span>Mandatory full PPE compliance at all times</li>
                            <li style={{"color":"rgba(255,255,255,0.85)"}}><span className="anim-bullet dots"><span></span><span></span><span></span></span>Regular site hazard assessments and toolbox talks</li>
                            <li style={{"color":"rgba(255,255,255,0.85)"}}><span className="anim-bullet dots"><span></span><span></span><span></span></span>Continuous HSE training for all site staff</li>
                            <li style={{"color":"rgba(255,255,255,0.85)"}}><span className="anim-bullet dots"><span></span><span></span><span></span></span>Emergency response planning and drills</li>
                            <li style={{"color":"rgba(255,255,255,0.85)"}}><span className="anim-bullet dots"><span></span><span></span><span></span></span>Environmental waste management protocols</li>
                            <li style={{"color":"rgba(255,255,255,0.85)"}}><span className="anim-bullet dots"><span></span><span></span><span></span></span>Incident investigation and corrective action system</li>
                        </ul>
                    </div>
                </div>
                {/* QA/QC */}
                <div className="fade-in-right">
                    <div style={{"background":"var(--clr-blue)","padding":"40px","borderRadius":"16px","color":"var(--clr-white)","height":"100%","display":"flex","flexDirection":"column"}}>
                        <div style={{"display":"flex","alignItems":"center","gap":"15px","marginBottom":"25px"}}>
                            <i className="ph ph-magnifying-glass-plus" style={{"fontSize":"2.5rem","color":"var(--clr-white)"}}></i>
                            <h3 style={{"color":"var(--clr-white)","margin":"0"}}>Quality Assurance & Control</h3>
                        </div>
                        <p style={{"color":"rgba(255,255,255,0.9)","marginBottom":"20px"}}>Our QA/QC framework ensures that every material, process, and output meets the precise specifications of the client and applicable engineering standards.</p>
                        <ul className="service-bullets-new" style={{"marginTop":"auto"}}>
                            <li style={{"color":"rgba(255,255,255,0.9)"}}><span className="anim-bullet dots dark-navy"><span></span><span></span><span></span></span>Stringent incoming material inspection and testing</li>
                            <li style={{"color":"rgba(255,255,255,0.9)"}}><span className="anim-bullet dots dark-navy"><span></span><span></span><span></span></span>Multi-stage quality checkpoints during execution</li>
                            <li style={{"color":"rgba(255,255,255,0.9)"}}><span className="anim-bullet dots dark-navy"><span></span><span></span><span></span></span>Comprehensive documentation and as-built records</li>
                            <li style={{"color":"rgba(255,255,255,0.9)"}}><span className="anim-bullet dots dark-navy"><span></span><span></span><span></span></span>Third-party inspection coordination when required</li>
                            <li style={{"color":"rgba(255,255,255,0.9)"}}><span className="anim-bullet dots dark-navy"><span></span><span></span><span></span></span>Pre-commissioning system verification procedures</li>
                            <li style={{"color":"rgba(255,255,255,0.9)"}}><span className="anim-bullet dots dark-navy"><span></span><span></span><span></span></span>Non-conformance reporting and corrective measures</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Our Culture Section */}
    <section className="section-padding" style={{"backgroundColor":"#f4f6f9"}}>
        <div className="container">
            <div className="two-column" style={{"alignItems":"stretch","gap":"50px"}}>
                <div className="fade-in-left" style={{"display":"flex","flexDirection":"column"}}>
                    <img src="images/safetyreponsibility.webp" alt="Safety Culture" style={{"width":"100%","height":"calc(100% - 45px)","minHeight":"300px","marginTop":"45px","objectFit":"cover","borderRadius":"12px","boxShadow":"0 10px 30px rgba(0,0,0,0.1)"}} />
                </div>
                <div className="fade-in-right" style={{"display":"flex","flexDirection":"column","justifyContent":"flex-start"}}>
                    <span className="section-label">Our Culture</span>
                    <h2 style={{"color":"var(--clr-primary-navy)","marginBottom":"20px"}}>Safety is Everyone's Responsibility</h2>
                    <p style={{"color":"var(--clr-charcoal)","marginBottom":"20px"}}>At AXIS Infinity Structure, safety culture starts at the top and is practiced by every member of our workforce , from senior engineers to general laborers. We invest heavily in awareness, training, and behavioral safety programs to ensure this culture is lived, not just documented.</p>
                    <p style={{"color":"var(--clr-charcoal)","marginBottom":"20px"}}>Our sites operate with full documentation trails, daily safety observations, and a clear escalation path for any concern , creating an environment where every worker feels empowered to speak up.</p>
                    <ul className="check-list mt-2" style={{"display":"flex","flexWrap":"nowrap","gap":"15px","fontSize":"0.95rem","marginBottom":"0"}}>
                        <li style={{"color":"var(--clr-charcoal)","whiteSpace":"nowrap"}}><i className="ph ph-check-circle" style={{"color":"#E2940F","marginRight":"5px"}}></i> Stop-Work Authority</li>
                        <li style={{"color":"var(--clr-charcoal)","whiteSpace":"nowrap"}}><i className="ph ph-check-circle" style={{"color":"#E2940F","marginRight":"5px"}}></i> Safety Recognition</li>
                        <li style={{"color":"var(--clr-charcoal)","whiteSpace":"nowrap"}}><i className="ph ph-check-circle" style={{"color":"#E2940F","marginRight":"5px"}}></i> Zero Tolerance</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    {/* Certifications */}
    <section className="section-padding bg-white">
        <div className="container">
            <div className="section-header text-center fade-in-up mb-5">
                <span className="section-label">Standards We Follow</span>
                <h2>Compliance & Certifications</h2>
                <p className="max-w-800 mx-auto">AXIS Infinity Structure operates in alignment with leading international safety and quality standards, ensuring every project meets global benchmarks.</p>
            </div>
            <div className="cert-grid grid-3">
                <div className="cert-card fade-in-up">
                    <i className="ph ph-certificate"></i>
                    <h4>ISO 9001 Aligned</h4>
                    <p style={{"fontSize":"0.85rem","color":"var(--clr-charcoal)","marginTop":"8px"}}>Quality Management System Standards</p>
                </div>
                <div className="cert-card fade-in-up delay-1">
                    <i className="ph ph-shield-check"></i>
                    <h4>OSHA Compliant</h4>
                    <p style={{"fontSize":"0.85rem","color":"var(--clr-charcoal)","marginTop":"8px"}}>Occupational Safety & Health Standards</p>
                </div>
                <div className="cert-card fade-in-up delay-2">
                    <i className="ph ph-leaf"></i>
                    <h4>Environmental Compliance</h4>
                    <p style={{"fontSize":"0.85rem","color":"var(--clr-charcoal)","marginTop":"8px"}}>Responsible waste and resource management</p>
                </div>
                <div className="cert-card fade-in-up delay-3">
                    <i className="ph ph-clipboard-text"></i>
                    <h4>ITP Compliance</h4>
                    <p style={{"fontSize":"0.85rem","color":"var(--clr-charcoal)","marginTop":"8px"}}>Inspection & Test Plan implementation</p>
                </div>
                <div className="cert-card fade-in-up">
                    <i className="ph ph-hard-hat"></i>
                    <h4>Site Safety Plans</h4>
                    <p style={{"fontSize":"0.85rem","color":"var(--clr-charcoal)","marginTop":"8px"}}>Project-specific HSE management plans</p>
                </div>
                <div className="cert-card fade-in-up delay-1">
                    <i className="ph ph-file-text"></i>
                    <h4>Method Statements</h4>
                    <p style={{"fontSize":"0.85rem","color":"var(--clr-charcoal)","marginTop":"8px"}}>Detailed work methodology documentation</p>
                </div>
            </div>
        </div>
    </section>

    {/* CTA */}
    <section className="cta-banner" style={{"backgroundImage":"url('images/safety_ppe_engineers.webp')"}}>
        <div className="container fade-in-up">
            <h2>Safety and Quality , Built Into Your Project</h2>
            <p>When you work with AXIS Infinity Structure, you gain a partner who treats safety and quality as core deliverables , not additional costs.</p>
            <a href="https://wa.me/966507673009" target="_blank" className="btn btn-primary" style={{"display":"inline-flex","alignItems":"center","gap":"8px","backgroundColor":"var(--clr-blue)","borderColor":"var(--clr-blue)"}}><i className="ph ph-whatsapp-logo" style={{"fontSize":"1.35rem"}}></i> +966 50 767 3009</a>
        </div>
    </section>

        {/* Footer */}
    </>
  );
}
