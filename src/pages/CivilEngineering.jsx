import React, { useEffect } from 'react';

export default function CivilEngineering() {
  useEffect(() => {
    document.title = "Civil Engineering & Infrastructure Construction Services | AXIS INFINITY STRUCTURE";
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      {/* Page Banner */}
    <section className="page-banner" style={{"backgroundImage":"url('images/civil_engineering_banner.webp')"}}>
        <div className="container fade-in-up">
            <h1>Civil Engineering</h1>
            <p>Building the Foundations of Tomorrow , From Site Preparation to Structural Completion.</p>
        </div>
    </section>

    {/* Overview */}
    <section className="section-padding bg-white">
        <div className="container">
            <div className="two-column" style={{"alignItems":"center"}}>
                <div className="fade-in-left">
                    <span className="section-label">Overview</span>
                    <h2 className="mb-4">Comprehensive Civil Engineering & Infrastructure Construction in Saudi Arabia</h2>
                    <p style={{"lineHeight":"1.8","color":"var(--clr-charcoal)","fontSize":"1.05rem","marginBottom":"1rem"}}>
                        AXIS INFINITY STRUCTURE's Civil Engineering Division is the cornerstone of our operations. We provide turnkey civil construction, infrastructure development, and earthwork solutions for industrial, commercial, and government clients across Saudi Arabia and Pakistan.
                    </p>
                    <p style={{"lineHeight":"1.8","color":"var(--clr-charcoal)","marginBottom":"1rem"}}>
                        From large-scale site preparation and deep foundation piling to high-rise structural construction and road network development, our certified engineers and skilled workforce deliver every project with strict adherence to international standards (BS, ASTM, ACI, Saudi Building Code) , on time, within budget, and to the highest quality benchmarks.
                    </p>
                    <div style={{"display":"flex","gap":"30px","flexWrap":"wrap","marginTop":"25px"}}>
                        <div style={{"textAlign":"center"}}>
                            <div style={{"fontSize":"2rem","fontWeight":"800","color":"var(--clr-blue)","fontFamily":"var(--font-heading)"}}>140+</div>
                            <div style={{"fontSize":"0.85rem","color":"var(--clr-charcoal)","fontWeight":"600"}}>Projects Completed</div>
                        </div>
                        <div style={{"textAlign":"center"}}>
                            <div style={{"fontSize":"2rem","fontWeight":"800","color":"var(--clr-blue)","fontFamily":"var(--font-heading)"}}>12+</div>
                            <div style={{"fontSize":"0.85rem","color":"var(--clr-charcoal)","fontWeight":"600"}}>Years Experience</div>
                        </div>
                        <div style={{"textAlign":"center"}}>
                            <div style={{"fontSize":"2rem","fontWeight":"800","color":"var(--clr-blue)","fontFamily":"var(--font-heading)"}}>0</div>
                            <div style={{"fontSize":"0.85rem","color":"var(--clr-charcoal)","fontWeight":"600"}}>Safety Incidents</div>
                        </div>
                    </div>
                </div>
                <div className="fade-in-right" style={{"padding":"20px"}}>
                    <div style={{"position":"relative","paddingBottom":"20px","paddingRight":"20px"}}>
                        <img src="images/civil_engineering_site.webp" alt="Civil Engineering Construction Site AXIS INFINITY STRUCTURE" style={{"width":"100%","display":"block","borderRadius":"12px","boxShadow":"0 15px 40px rgba(0,0,0,0.12)","position":"relative","zIndex":"2","height":"420px","objectFit":"cover"}}  width="1024" height="1024" loading="lazy" decoding="async" />
                        <div style={{"position":"absolute","bottom":"0","right":"0","width":"95%","height":"95%","border":"3px solid var(--clr-blue)","borderRadius":"12px","zIndex":"1"}}></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Key Services Grid */}
    <section className="section-padding pattern-bg bg-navy text-white">
        <div className="container">
            <div className="section-header text-center fade-in-up mb-5">
                <span className="section-label white-label">Core Expertise</span>
                <h2 style={{"color":"var(--clr-white)"}}>Our Civil Engineering Services</h2>
                <p style={{"color":"rgba(255,255,255,0.75)","maxWidth":"700px","margin":"15px auto 0"}}>We offer a comprehensive spectrum of civil engineering solutions tailored to the unique demands of industrial, residential, commercial, and infrastructure projects.</p>
            </div>
            <div className="grid-3">
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-buildings" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>Commercial & High-Rise Construction</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Full-cycle construction for commercial towers, office complexes, shopping centers, and high-rise developments meeting Saudi Building Code and international safety standards.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-road-horizon" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>Roads, Highways & Infrastructure</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Development of road networks, highways, interchange ramps, urban street systems, and allied civil infrastructure including stormwater drainage and pavement works.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-trowel" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>Heavy Earthworks & Site Preparation</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Large-scale site clearing, mass excavation, grading, cut-and-fill operations, soil compaction, and subgrade preparation using advanced heavy machinery fleets.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-wall" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>Reinforced Concrete Structures</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Design and construction of reinforced concrete foundations, retaining walls, slabs, columns, beams, and specialized industrial structures with full lab testing and QA compliance.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-drop" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>Underground Utilities & Pipeline Networks</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Complete design and installation of water supply, foul sewerage, stormwater, telecom duct, and utility corridor systems for townships, industrial parks, and urban developments.</p>
                </div>
                <div style={{"background":"rgba(255,255,255,0.05)","padding":"30px","borderRadius":"12px","border":"1px solid rgba(255,255,255,0.1)","transition":"all 0.3s ease"}} onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='var(--clr-blue)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)';">
                    <i className="ph ph-hard-hat" style={{"fontSize":"2.5rem","color":"var(--clr-blue)","marginBottom":"20px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-white)","fontSize":"1.15rem","marginBottom":"10px"}}>Structural Steel Fabrication & Erection</h4>
                    <p style={{"color":"rgba(255,255,255,0.7)","fontSize":"0.95rem","lineHeight":"1.6","margin":"0"}}>Precision fabrication and on-site erection of structural steel frameworks for industrial plants, warehouses, hangers, and complex architectural steel structures.</p>
                </div>
            </div>
        </div>
    </section>

    {/* Sub-Services Detailed Section */}
    <section className="section-padding bg-white">
        <div className="container">
            <div className="section-header text-center fade-in-up mb-5">
                <span className="section-label">Specialized Divisions</span>
                <h2>Detailed Civil Engineering Sub-Services</h2>
            </div>
            <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(300px, 1fr))","gap":"25px"}}>
                <div style={{"border":"1px solid var(--clr-grey)","borderRadius":"12px","padding":"30px","transition":"all 0.3s ease"}} onmouseover="this.style.borderColor='var(--clr-blue)'; this.style.transform='translateY(-3px)';" onmouseout="this.style.borderColor='var(--clr-grey)'; this.style.transform='translateY(0)';">
                    <i className="ph ph-columns" style={{"fontSize":"2rem","color":"var(--clr-blue)","marginBottom":"15px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-navy)","marginBottom":"10px"}}>Deep Foundation & Piling</h4>
                    <ul style={{"listStyle":"none","padding":"0","color":"var(--clr-charcoal)","fontSize":"0.9rem","lineHeight":"1.8"}}>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Bored Pile & CFA Pile Installation</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Driven Steel &amp; Precast Piles</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Micro Piles for Confined Spaces</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Pile Load Testing &amp; Integrity Testing</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Sheet Piling &amp; Earth Retention</li>
                    </ul>
                </div>
                <div style={{"border":"1px solid var(--clr-grey)","borderRadius":"12px","padding":"30px","transition":"all 0.3s ease"}} onmouseover="this.style.borderColor='var(--clr-blue)'; this.style.transform='translateY(-3px)';" onmouseout="this.style.borderColor='var(--clr-grey)'; this.style.transform='translateY(0)';">
                    <i className="ph ph-building-apartment" style={{"fontSize":"2rem","color":"var(--clr-blue)","marginBottom":"15px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-navy)","marginBottom":"10px"}}>Structural Civil Works</h4>
                    <ul style={{"listStyle":"none","padding":"0","color":"var(--clr-charcoal)","fontSize":"0.9rem","lineHeight":"1.8"}}>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Foundation Design &amp; Construction</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>RC Frames, Slabs &amp; Shear Walls</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Pre-stressed Concrete Elements</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Industrial Equipment Foundations</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Retaining Walls &amp; Basements</li>
                    </ul>
                </div>
                <div style={{"border":"1px solid var(--clr-grey)","borderRadius":"12px","padding":"30px","transition":"all 0.3s ease"}} onmouseover="this.style.borderColor='var(--clr-blue)'; this.style.transform='translateY(-3px)';" onmouseout="this.style.borderColor='var(--clr-grey)'; this.style.transform='translateY(0)';">
                    <i className="ph ph-arrows-split" style={{"fontSize":"2rem","color":"var(--clr-blue)","marginBottom":"15px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-navy)","marginBottom":"10px"}}>Road & Highway Works</h4>
                    <ul style={{"listStyle":"none","padding":"0","color":"var(--clr-charcoal)","fontSize":"0.9rem","lineHeight":"1.8"}}>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Subgrade Preparation &amp; Subbase</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Asphalt Paving &amp; Surface Dressing</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Road Markings &amp; Road Furniture</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Curb, Gutter &amp; Median Works</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Traffic Management Systems</li>
                    </ul>
                </div>
                <div style={{"border":"1px solid var(--clr-grey)","borderRadius":"12px","padding":"30px","transition":"all 0.3s ease"}} onmouseover="this.style.borderColor='var(--clr-blue)'; this.style.transform='translateY(-3px)';" onmouseout="this.style.borderColor='var(--clr-grey)'; this.style.transform='translateY(0)';">
                    <i className="ph ph-waves" style={{"fontSize":"2rem","color":"var(--clr-blue)","marginBottom":"15px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-navy)","marginBottom":"10px"}}>Water & Sanitation Works</h4>
                    <ul style={{"listStyle":"none","padding":"0","color":"var(--clr-charcoal)","fontSize":"0.9rem","lineHeight":"1.8"}}>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Water Treatment Plants</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Sewer Network Installation</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Pump Stations &amp; Reservoirs</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Water Towers &amp; Tanks</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Irrigation &amp; Landscape Systems</li>
                    </ul>
                </div>
                <div style={{"border":"1px solid var(--clr-grey)","borderRadius":"12px","padding":"30px","transition":"all 0.3s ease"}} onmouseover="this.style.borderColor='var(--clr-blue)'; this.style.transform='translateY(-3px)';" onmouseout="this.style.borderColor='var(--clr-grey)'; this.style.transform='translateY(0)';">
                    <i className="ph ph-factory" style={{"fontSize":"2rem","color":"var(--clr-blue)","marginBottom":"15px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-navy)","marginBottom":"10px"}}>Industrial Facility Construction</h4>
                    <ul style={{"listStyle":"none","padding":"0","color":"var(--clr-charcoal)","fontSize":"0.9rem","lineHeight":"1.8"}}>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Warehouses &amp; Logistics Facilities</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Manufacturing Plant Civil Works</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Industrial Yard &amp; Hardstanding</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Precast Concrete Structures</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Tank Farm Civil Works</li>
                    </ul>
                </div>
                <div style={{"border":"1px solid var(--clr-grey)","borderRadius":"12px","padding":"30px","transition":"all 0.3s ease"}} onmouseover="this.style.borderColor='var(--clr-blue)'; this.style.transform='translateY(-3px)';" onmouseout="this.style.borderColor='var(--clr-grey)'; this.style.transform='translateY(0)';">
                    <i className="ph ph-medal" style={{"fontSize":"2rem","color":"var(--clr-blue)","marginBottom":"15px","display":"block"}}></i>
                    <h4 style={{"color":"var(--clr-navy)","marginBottom":"10px"}}>QA/QC & Code Compliance</h4>
                    <ul style={{"listStyle":"none","padding":"0","color":"var(--clr-charcoal)","fontSize":"0.9rem","lineHeight":"1.8"}}>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>ISO 9001:2015 Compliant QMS</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Material Testing &amp; Lab Certification</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Saudi Building Code (SBC) Adherence</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>Third-Party Inspection Coordination</li>
                        <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span>As-Built Documentation &amp; Handover</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    {/* Why Choose AXIS Infinity Structure Civil */}
    <section className="section-padding bg-off-white">
        <div className="container">
            <div className="section-header text-center fade-in-up mb-5">
                <span className="section-label">Our Approach</span>
                <h2>Why Choose AXIS Infinity Structure for Civil Engineering?</h2>
                <p className="max-w-800 mx-auto">We combine technical depth, modern equipment, and a safety-first culture to consistently deliver superior civil engineering outcomes.</p>
            </div>
            <div className="grid-3">
                <div className="card fade-in-up" style={{"textAlign":"center"}}>
                    <div className="card-icon" style={{"margin":"0 auto 20px"}}>
                        <i className="ph ph-shield-check"></i>
                    </div>
                    <h3>Zero-Harm Safety Culture</h3>
                    <p>Every civil operation is governed by our strict HSE Management System. Our on-site safety officers enforce PPE compliance, permit-to-work systems, and toolbox talks before every shift.</p>
                </div>
                <div className="card fade-in-up delay-1" style={{"textAlign":"center"}}>
                    <div className="card-icon" style={{"margin":"0 auto 20px"}}>
                        <i className="ph ph-medal"></i>
                    </div>
                    <h3>Technical Excellence & Certified Workforce</h3>
                    <p>Our civil team includes licensed structural engineers, quantity surveyors, and QA/QC inspectors holding international certifications, ensuring every structure meets the required specification.</p>
                </div>
                <div className="card fade-in-up delay-2" style={{"textAlign":"center"}}>
                    <div className="card-icon" style={{"margin":"0 auto 20px"}}>
                        <i className="ph ph-clock-countdown"></i>
                    </div>
                    <h3>On-Time, On-Budget Delivery</h3>
                    <p>We deploy advanced project planning tools (Primavera P6, MS Project) to monitor critical paths, allocate resources efficiently, and proactively mitigate delays before they impact delivery.</p>
                </div>
            </div>
        </div>
    </section>

    {/* CTA Banner */}
    <section className="cta-banner" style={{"backgroundImage":"url('images/civil_engineering_banner.webp')"}}>
        <div className="container fade-in-up">
            <h2>Ready to Start Your Next Civil Engineering Project in Saudi Arabia?</h2>
            <p>Connect with our civil engineering experts for a detailed technical proposal, BOQ estimation, and project timeline review.</p>
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
