import React, { useEffect } from 'react';

export default function IndustrialPainting() {
  useEffect(() => {
    document.title = "Industrial Painting & Coating | AXIS INFINITY STRUCTURE";
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      {/* Page Banner */}
    <section className="page-banner" style={{"backgroundImage":"url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2000&auto=format&fit=crop')"}}>
        <div className="container fade-in-up">
            <h1>Industrial Painting & Coating</h1>
            <p>Advanced surface preparation and protective coating systems.</p>
        </div>
    </section>

    {/* Overview Section */}
    <section className="section-padding bg-white">
        <div className="container">
            <div className="two-column" style={{"alignItems":"center"}}>
                <div className="fade-in-left">
                    <span className="section-label">Overview</span>
                    <h2 className="mb-4">Corrosion Protection & Surface Treatment</h2>
                    <p className="mb-4" style={{"lineHeight":"1.8","color":"var(--clr-charcoal)","fontSize":"1.05rem"}}>Protecting your industrial assets from harsh environmental degradation is critical. We offer comprehensive surface preparation, abrasive blasting, and high-performance industrial coating applications.</p>
                    <p className="mb-4" style={{"lineHeight":"1.8","color":"var(--clr-charcoal)"}}>Whether it is a highly corrosive offshore platform or an onshore petrochemical tank farm, our NACE/BGAS certified inspectors and application crews ensure the specified dry film thickness (DFT) and adhesion required for long-term asset integrity.</p>
                </div>
                <div className="fade-in-right" style={{"padding":"20px"}}>
                    <div style={{"position":"relative","paddingBottom":"20px","paddingRight":"20px"}}>
                        <img src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop" alt="Industrial Painting & Coating" style={{"width":"100%","display":"block","borderRadius":"8px","boxShadow":"0 10px 30px rgba(0,0,0,0.1)","position":"relative","zIndex":"2","height":"400px","objectFit":"cover"}} />
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
                    <i className="ph ph-paint-brush" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"15px"}}>Abrasive Sandblasting</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>High-pressure grit, garnet, and sand blasting to achieve specific surface profiles (SA 2.5/SA 3.0).</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-drop" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"15px"}}>Protective Epoxies & Polyurethanes</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Application of multi-coat heavy duty industrial paint systems for steel structures and storage tanks.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-fire" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"15px"}}>Intumescent Fireproofing</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Specialized passive fire protection coatings designed to preserve structural integrity under extreme heat.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-pipe" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"15px"}}>Internal Pipe Coating</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Specialized internal lining and anti-corrosion applications for process piping and water transmission lines.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-check-square-offset" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"15px"}}>NACE/BGAS Inspection</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Rigorous climatic monitoring, WFT/DFT testing, holiday detection, and adhesion testing by certified inspectors.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-leaf" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"15px"}}>Eco-Friendly Water Blasting</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Ultra-high pressure (UHP) water jetting as an environmentally safe alternative to abrasive grit blasting.</p>
                </div>
            </div>
        </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding bg-white">
        <div className="container">
            <div className="section-header text-center fade-in-up mb-5">
                <span className="section-label">Our Approach</span>
                <h2>Why Choose AXIS Infinity Structure for Industrial Painting & Coating?</h2>
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
    <section className="cta-banner" style={{"backgroundImage":"url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2000&auto=format&fit=crop')"}}>
        <div className="container fade-in-up">
            <h2>Ready to start your next Industrial Painting & Coating project?</h2>
            <p>Connect with our technical team to discuss your specific requirements and receive a customized proposal.</p>
            <a href="/contact" className="btn btn-primary">Request a Consultation</a>
        </div>
    </section>

        {/* Footer */}
    </>
  );
}
