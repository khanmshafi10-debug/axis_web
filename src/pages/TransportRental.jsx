import React, { useEffect } from 'react';

export default function TransportRental() {
  useEffect(() => {
    document.title = "Heavy Equipment Rental & Transport Logistics Services | AXIS INFINITY STRUCTURE";
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      {/* Page Banner */}
    <section className="page-banner" style={{"backgroundImage":"url('images/transport_equipment_fleet.webp')"}}>
        <div className="container fade-in-up">
            <h1>Transport & Equipment Rental</h1>
            <p>Your Reliable Heavy Equipment & Project Logistics Partner in Saudi Arabia.</p>
        </div>
    </section>

    {/* Overview */}
    <section className="section-padding bg-white">
        <div className="container">
            <div className="two-column" style={{"alignItems":"center"}}>
                <div className="fade-in-left">
                    <span className="section-label">Overview</span>
                    <h2 className="mb-4">Heavy Equipment Rental & Transport Logistics Services in Saudi Arabia</h2>
                    <p style={{"lineHeight":"1.8","color":"var(--clr-charcoal)","fontSize":"1.05rem","marginBottom":"1rem"}}>
                        AXIS INFINITY STRUCTURE's Transport & Equipment Division provides a comprehensive fleet of construction and industrial heavy equipment, cranes, and specialized logistics solutions to support project execution across Saudi Arabia and Pakistan.
                    </p>
                    <p style={{"lineHeight":"1.8","color":"var(--clr-charcoal)","marginBottom":"1rem"}}>
                        Our owned and managed fleet eliminates dependency on third-party rentals, ensuring guaranteed equipment availability, cost certainty, and seamless coordination with site operations teams , keeping your project on schedule.
                    </p>
                    <div style={{"display":"flex","gap":"30px","flexWrap":"wrap","marginTop":"25px"}}>
                        <div style={{"textAlign":"center"}}>
                            <div style={{"fontSize":"2rem","fontWeight":"800","color":"var(--clr-blue)","fontFamily":"var(--font-heading)"}}>50+</div>
                            <div style={{"fontSize":"0.85rem","color":"var(--clr-charcoal)","fontWeight":"600"}}>Equipment Units</div>
                        </div>
                        <div style={{"textAlign":"center"}}>
                            <div style={{"fontSize":"2rem","fontWeight":"800","color":"var(--clr-blue)","fontFamily":"var(--font-heading)"}}>24/7</div>
                            <div style={{"fontSize":"0.85rem","color":"var(--clr-charcoal)","fontWeight":"600"}}>Dispatch Ready</div>
                        </div>
                        <div style={{"textAlign":"center"}}>
                            <div style={{"fontSize":"2rem","fontWeight":"800","color":"var(--clr-blue)","fontFamily":"var(--font-heading)"}}>KSA+PK</div>
                            <div style={{"fontSize":"0.85rem","color":"var(--clr-charcoal)","fontWeight":"600"}}>Coverage Regions</div>
                        </div>
                    </div>
                </div>
                <div className="fade-in-right" style={{"padding":"20px"}}>
                    <div style={{"position":"relative","paddingBottom":"20px","paddingRight":"20px"}}>
                        <img src="images/user_transport.webp?v=3" alt="Heavy Equipment Crane Fleet AXIS INFINITY STRUCTURE" style={{"width":"100%","display":"block","borderRadius":"12px","boxShadow":"0 15px 40px rgba(0,0,0,0.12)","position":"relative","zIndex":"2","height":"420px","objectFit":"cover"}} />
                        <div style={{"position":"absolute","bottom":"0","right":"0","width":"95%","height":"95%","border":"3px solid var(--clr-blue)","borderRadius":"12px","zIndex":"1"}}></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Equipment Fleet */}
    <section className="section-padding pattern-bg bg-navy text-white">
        <div className="container">
            <div className="section-header text-center fade-in-up mb-5">
                <span className="section-label white-label">Our Fleet</span>
                <h2 style={{"color":"var(--clr-white)"}}>Heavy Equipment & Transport Fleet</h2>
                <p style={{"color":"rgba(255,255,255,0.75)","maxWidth":"700px","margin":"15px auto 0"}}>Our diverse equipment portfolio covers every lifting, earthmoving, and logistics need for construction and industrial project sites.</p>
            </div>
            <div className="grid-3">
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-crane-tower" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>Crane Fleet</h4>
                    <ul style={{"listStyle":"none","padding":"0","color":"rgba(255,255,255,0.7)","fontSize":"0.9rem","lineHeight":"1.8","margin":"0"}}>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Mobile Cranes: 50T to 500T capacity</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Tower Cranes for high-rise construction</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Crawler Cranes for heavy lifts</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Pick &amp; Carry Cranes for yard operations</li>
                    </ul>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-tractor" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>Earthmoving Equipment</h4>
                    <ul style={{"listStyle":"none","padding":"0","color":"rgba(255,255,255,0.7)","fontSize":"0.9rem","lineHeight":"1.8","margin":"0"}}>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Excavators: 20T to 60T class</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Bulldozers for site clearing</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Motor Graders for road works</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Compactors &amp; Vibro Rollers</li>
                    </ul>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-truck" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>Transport & Logistics Fleet</h4>
                    <ul style={{"listStyle":"none","padding":"0","color":"rgba(255,255,255,0.7)","fontSize":"0.9rem","lineHeight":"1.8","margin":"0"}}>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Flatbed &amp; Low-Loader Trailers</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Tipper / Dump Trucks</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Tanker Trucks (water, fuel)</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Personnel Carrier Buses</li>
                    </ul>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-arrow-up" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>Access Equipment</h4>
                    <ul style={{"listStyle":"none","padding":"0","color":"rgba(255,255,255,0.7)","fontSize":"0.9rem","lineHeight":"1.8","margin":"0"}}>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Boom Lifts &amp; Scissor Lifts</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Man Lifts for elevated work</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Telescopic Handlers (Telehandlers)</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Forklifts (3T to 15T capacity)</li>
                    </ul>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-concrete-mixer" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>Concrete & Piling Equipment</h4>
                    <ul style={{"listStyle":"none","padding":"0","color":"rgba(255,255,255,0.7)","fontSize":"0.9rem","lineHeight":"1.8","margin":"0"}}>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Concrete Batching Plants</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Transit Mixers (6m³ to 10m³)</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Concrete Pumps (stationary &amp; boom)</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Piling Rigs (bored &amp; driven)</li>
                    </ul>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-package" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>Project Logistics Services</h4>
                    <ul style={{"listStyle":"none","padding":"0","color":"rgba(255,255,255,0.7)","fontSize":"0.9rem","lineHeight":"1.8","margin":"0"}}>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Port Clearance &amp; Custom Handling</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Heavy Module Transportation</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Over-Dimensional Cargo Logistics</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Freight Forwarding Support</li>
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
                <h2>Why Choose AXIS Infinity Structure for Transport & Equipment?</h2>
            </div>
            <div className="grid-3">
                <div className="card fade-in-up" style={{"textAlign":"center"}}>
                    <div className="card-icon" style={{"margin":"0 auto 20px"}}><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span></div>
                    <h3>Guaranteed Availability</h3>
                    <p>Our owned fleet ensures no rental availability issues or last-minute delays , your critical path equipment is mobilized on schedule, every time.</p>
                </div>
                <div className="card fade-in-up delay-1" style={{"textAlign":"center"}}>
                    <div className="card-icon" style={{"margin":"0 auto 20px"}}><i className="ph ph-shield-check"></i></div>
                    <h3>Certified Operators & Riggers</h3>
                    <p>All crane operators, riggers, and drivers are OPITO/LEEA certified with valid Saudi Aramco or SEC approvals, ensuring compliant and safe lifts on every job.</p>
                </div>
                <div className="card fade-in-up delay-2" style={{"textAlign":"center"}}>
                    <div className="card-icon" style={{"margin":"0 auto 20px"}}><i className="ph ph-currency-dollar"></i></div>
                    <h3>Competitive Rates & Flexibility</h3>
                    <p>Flexible rental terms , hourly, daily, weekly, or long-term contracts , with transparent pricing, integrated operator costs, and dedicated site coordination support.</p>
                </div>
            </div>
        </div>
    </section>

    {/* CTA */}
    <section className="cta-banner" style={{"backgroundImage":"url('images/transport_equipment_fleet.webp')"}}>
        <div className="container fade-in-up">
            <h2>Need Heavy Equipment or Transport for Your Project?</h2>
            <p>Contact our fleet operations team for immediate availability checks, lift studies, and competitive rental quotations.</p>
            <div style={{"display":"flex","gap":"15px","flexWrap":"wrap","justifyContent":"center"}}>
                <a href="/contact" className="btn btn-primary">Request Equipment Rental</a>
                <a href="/projects" className="btn btn-secondary">View Our Projects</a>
            </div>
        </div>
    </section>

    {/* Footer */}
    </>
  );
}
