import React, { useEffect } from 'react';

export default function Careers() {
  useEffect(() => {
    document.title = "Engineering Services | AXIS INFINITY STRUCTURE , Civil, Mechanical, E&I, HVAC, Manpower & Transport";
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      {/* Page Banner */}
    <section className="page-banner" style={{"backgroundImage":"url('images/careers_homepage.webp')"}}>
        <div className="container fade-in-up">
            <div style={{"marginTop":"35px","marginBottom":"20px"}}>
                <p className="hero-desc"><strong>Join the AXIS Infinity Structure Team</strong></p>
                <p className="hero-desc" style={{"fontSize":"1.05rem","color":"rgba(255,255,255,0.8)","borderLeft":"none","textAlign":"left","paddingLeft":"24px"}}>Build your career with an industry leader. We are looking for talented, driven individuals who are ready to shape the future of industrial engineering and construction.</p>
                <div className="hero-badges" style={{"justifyContent":"flex-start","marginLeft":"24px"}}>
                    <span className="hero-badge"><i className="ph ph-briefcase"></i> Professional Growth</span>
                    <span className="hero-badge"><i className="ph ph-hard-hat"></i> Technical Excellence</span>
                </div>
            </div>
        </div>
    </section>

    {/* Open Positions Section */}
    <section className="section-padding bg-white" id="open-positions">
        <div className="container">
            <div className="section-header text-center fade-in-up">
                <span className="section-label">Current Opportunities</span>
                <h2>Open Positions</h2>
                <p className="max-w-800 mx-auto">Explore our current job openings and find your fit at AXIS INFINITY STRUCTURE.</p>
            </div>
            
            <div className="grid-2" style={{"gap":"30px","marginTop":"50px"}}>
                {/* Job 1 */}
                <div className="service-card fade-in-up" style={{"padding":"40px"}}>
                    <div style={{"display":"flex","justifyContent":"space-between","alignItems":"flex-start","marginBottom":"15px"}}>
                        <h3 style={{"marginBottom":"0"}}>Senior Civil Engineer</h3>
                        <span style={{"background":"rgba(11,143,200,0.1)","color":"var(--clr-blue)","padding":"5px 12px","borderRadius":"50px","fontSize":"0.85rem","fontWeight":"600"}}>Full-Time</span>
                    </div>
                    <p className="mb-3 text-muted"><i className="ph ph-map-pin mr-2"></i> Riyadh, KSA</p>
                    <p className="mb-4">Lead major civil construction projects, ensuring compliance with structural requirements and safety protocols.</p>
                    <a href="contact.html" className="btn btn-outline-blue w-100 text-center">Apply Now</a>
                </div>

                {/* Job 2 */}
                <div className="service-card fade-in-up delay-1" style={{"padding":"40px"}}>
                    <div style={{"display":"flex","justifyContent":"space-between","alignItems":"flex-start","marginBottom":"15px"}}>
                        <h3 style={{"marginBottom":"0"}}>HSE Safety Manager</h3>
                        <span style={{"background":"rgba(11,143,200,0.1)","color":"var(--clr-blue)","padding":"5px 12px","borderRadius":"50px","fontSize":"0.85rem","fontWeight":"600"}}>Full-Time</span>
                    </div>
                    <p className="mb-3 text-muted"><i className="ph ph-map-pin mr-2"></i> NEOM, KSA</p>
                    <p className="mb-4">Oversee and enforce site safety policies to achieve our Zero-Harm objective across all active construction sites.</p>
                    <a href="contact.html" className="btn btn-outline-blue w-100 text-center">Apply Now</a>
                </div>

                {/* Job 3 */}
                <div className="service-card fade-in-up" style={{"padding":"40px"}}>
                    <div style={{"display":"flex","justifyContent":"space-between","alignItems":"flex-start","marginBottom":"15px"}}>
                        <h3 style={{"marginBottom":"0"}}>Mechanical QA/QC Inspector</h3>
                        <span style={{"background":"rgba(11,143,200,0.1)","color":"var(--clr-blue)","padding":"5px 12px","borderRadius":"50px","fontSize":"0.85rem","fontWeight":"600"}}>Contract</span>
                    </div>
                    <p className="mb-3 text-muted"><i className="ph ph-map-pin mr-2"></i> Jubail, KSA</p>
                    <p className="mb-4">Conduct rigorous quality inspections for piping and mechanical installations in petrochemical facilities.</p>
                    <a href="contact.html" className="btn btn-outline-blue w-100 text-center">Apply Now</a>
                </div>

                {/* Job 4 */}
                <div className="service-card fade-in-up delay-1" style={{"padding":"40px"}}>
                    <div style={{"display":"flex","justifyContent":"space-between","alignItems":"flex-start","marginBottom":"15px"}}>
                        <h3 style={{"marginBottom":"0"}}>Project Estimator</h3>
                        <span style={{"background":"rgba(11,143,200,0.1)","color":"var(--clr-blue)","padding":"5px 12px","borderRadius":"50px","fontSize":"0.85rem","fontWeight":"600"}}>Full-Time</span>
                    </div>
                    <p className="mb-3 text-muted"><i className="ph ph-map-pin mr-2"></i> Multan, Pakistan</p>
                    <p className="mb-4">Prepare precise BOQs and cost estimates for upcoming international infrastructure tenders.</p>
                    <a href="contact.html" className="btn btn-outline-blue w-100 text-center">Apply Now</a>
                </div>
            </div>
        </div>
    </section>

    {/* Why Join Us Section */}
    <section className="section-padding" style={{"backgroundColor":"var(--clr-navy)","color":"var(--clr-white)"}}>
        <div className="container text-center">
            <h2 className="mb-4 text-white">Why Join AXIS Infinity Structure?</h2>
            <p className="max-w-800 mx-auto mb-5" style={{"color":"rgba(255,255,255,0.75)"}}>We foster an environment of continuous learning and safety. Our team members are our greatest asset, and we invest heavily in their professional development.</p>
            <div className="grid-3" style={{"gap":"30px"}}>
                <div style={{"padding":"30px","border":"1px solid rgba(255,255,255,0.1)","borderRadius":"12px","background":"rgba(255,255,255,0.02)"}}>
                    <i className="ph ph-student" style={{"fontSize":"3rem","color":"var(--clr-orange)","marginBottom":"20px"}}></i>
                    <h3 className="text-white mb-3" style={{"fontSize":"1.25rem"}}>Skill Development</h3>
                    <p style={{"color":"rgba(255,255,255,0.6)","fontSize":"0.95rem"}}>Access to global training programs and certifications.</p>
                </div>
                <div style={{"padding":"30px","border":"1px solid rgba(255,255,255,0.1)","borderRadius":"12px","background":"rgba(255,255,255,0.02)"}}>
                    <i className="ph ph-heartbeat" style={{"fontSize":"3rem","color":"var(--clr-orange)","marginBottom":"20px"}}></i>
                    <h3 className="text-white mb-3" style={{"fontSize":"1.25rem"}}>Health & Wellness</h3>
                    <p style={{"color":"rgba(255,255,255,0.6)","fontSize":"0.95rem"}}>Comprehensive health coverage for you and your family.</p>
                </div>
                <div style={{"padding":"30px","border":"1px solid rgba(255,255,255,0.1)","borderRadius":"12px","background":"rgba(255,255,255,0.02)"}}>
                    <i className="ph ph-globe" style={{"fontSize":"3rem","color":"var(--clr-orange)","marginBottom":"20px"}}></i>
                    <h3 className="text-white mb-3" style={{"fontSize":"1.25rem"}}>Global Projects</h3>
                    <p style={{"color":"rgba(255,255,255,0.6)","fontSize":"0.95rem"}}>Work on diverse, large-scale projects across borders.</p>
                </div>
            </div>
        </div>
    </section>
        {/* Footer */}
    </>
  );
}
