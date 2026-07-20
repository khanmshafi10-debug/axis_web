import React, { useEffect } from 'react';

export default function ScaffoldingRigging() {
  useEffect(() => {
    document.title = "Scaffolding & Rigging | AXIS INFINITY STRUCTURE";
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      {/* Page Banner */}
    <section className="page-banner" style={{"backgroundImage":"url('https://images.unsplash.com/photo-1517089535811-5842c9ab1562?q=80&w=2000&auto=format&fit=crop')"}}>
        <div className="container fade-in-up">
            <h1>Scaffolding & Rigging</h1>
            <p>Safe, certified access and heavy lifting solutions for complex environments.</p>
        </div>
    </section>

    {/* Overview Section */}
    <section className="section-padding bg-white">
        <div className="container">
            <div className="two-column" style={{"alignItems":"center"}}>
                <div className="fade-in-left">
                    <span className="section-label">Overview</span>
                    <h2 className="mb-4">Certified Access & Lifting Operations</h2>
                    <p className="mb-4" style={{"lineHeight":"1.8","color":"var(--clr-charcoal)","fontSize":"1.05rem"}}>AXIS Infinity Structure provides highly engineered scaffolding and complex rigging solutions for industrial, commercial, and offshore environments. Our priority is providing rock-solid, safe access for all parallel trades to work efficiently at height.</p>
                    <p className="mb-4" style={{"lineHeight":"1.8","color":"var(--clr-charcoal)"}}>Operating under strict international safety standards (OSHA/BS EN), our certified scaffolders and riggers utilize premium materials to design and erect custom access structures, drop-zones, and heavy lifting plans that guarantee zero-harm operations.</p>
                </div>
                <div className="fade-in-right" style={{"padding":"20px"}}>
                    <div style={{"position":"relative","paddingBottom":"20px","paddingRight":"20px"}}>
                        <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=800&auto=format&fit=crop" alt="Scaffolding & Rigging" style={{"width":"100%","display":"block","borderRadius":"8px","boxShadow":"0 10px 30px rgba(0,0,0,0.1)","position":"relative","zIndex":"2","height":"400px","objectFit":"cover"}} />
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
                    <i className="ph ph-stairs" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"15px"}}>Industrial Scaffolding</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Erection of Cuplock, Tube & Fitting, and suspended scaffolding systems for complex process plants.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-crane" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"15px"}}>Heavy Rigging & Lifting</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Engineered lifting plans and execution for oversized static equipment, vessels, and structural modules.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-anchor" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"15px"}}>Suspended & Hanging Access</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Specialized hanging scaffolds and cantilevered systems for difficult-to-reach offshore and high-rise areas.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-shield-check" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"15px"}}>Inspection & Certification</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Third-party equivalent load-testing, tag-management, and rigorous daily safety inspections of all erected structures.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-truck" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"15px"}}>Scaffold Material Supply</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Rental and supply of massive inventories of BS-certified scaffolding tubes, boards, fittings, and base plates.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-users-three" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"15px"}}>Confined Space Access</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Custom-designed entry and rescue scaffolding for highly restricted and hazardous confined space work.</p>
                </div>
            </div>
        </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding bg-white">
        <div className="container">
            <div className="section-header text-center fade-in-up mb-5">
                <span className="section-label">Our Approach</span>
                <h2>Why Choose AXIS Infinity Structure for Scaffolding & Rigging?</h2>
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
    <section className="cta-banner" style={{"backgroundImage":"url('https://images.unsplash.com/photo-1517089535811-5842c9ab1562?q=80&w=2000&auto=format&fit=crop')"}}>
        <div className="container fade-in-up">
            <h2>Ready to start your next Scaffolding & Rigging project?</h2>
            <p>Connect with our technical team to discuss your specific requirements and receive a customized proposal.</p>
            <a href="contact.html" className="btn btn-primary">Request a Consultation</a>
        </div>
    </section>

        {/* Footer */}
    </>
  );
}
