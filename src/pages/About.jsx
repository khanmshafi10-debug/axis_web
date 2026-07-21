import React, { useEffect } from 'react';
import { AnimatedPage } from '../components/common/ScrollReveal';

export default function About() {
  useEffect(() => {
    document.title = "About Us | AXIS INFINITY STRUCTURE";
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatedPage>
      
      {/* Page Banner */}
      <section className="page-banner" style={{"backgroundImage":"url('images/about-axis-team.webp')"}}>
        <div className="container fade-in-up">
            <h1>About AXIS Infinity Structure</h1>
            <div style={{"marginTop":"35px","marginBottom":"20px"}}>
                <p className="hero-desc">A legacy built on precision engineering, unwavering safety standards, and uncompromised project execution.</p>
                <p className="hero-desc" style={{"fontSize":"1.05rem","color":"rgba(255,255,255,0.8)","borderLeft":"none","textAlign":"left","paddingLeft":"24px"}}>We bring decades of industrial expertise, deploying innovative technologies and a highly skilled workforce to ensure every milestone is achieved beyond expectations.</p>
                <div className="hero-badges" style={{"justifyContent":"flex-start","marginLeft":"24px"}}>
                    <span className="hero-badge"><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span> Industrial Expertise</span>
                    <span className="hero-badge"><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span> Innovative Tech</span>
                    <span className="hero-badge"><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span> Skilled Workforce</span>
                </div>
            </div>
        </div>
      </section>

      {/* Info Strip */}
      <div className="info-strip">
        <div className="container">
            <div className="info-strip-items">
                <div className="info-strip-item"><i className="ph ph-calendar-check"></i><span>Established & Trusted</span></div>
                <div className="info-strip-item"><i className="ph ph-globe"></i><span>Multi-Sector Operations</span></div>
                <div className="info-strip-item"><i className="ph ph-users-four"></i><span>500+ Skilled Workforce</span></div>
                <div className="info-strip-item"><i className="ph ph-shield-check"></i><span>Zero-Harm Safety Policy</span></div>
            </div>
        </div>
      </div>

      {/* Our Story Section 1 (Engineering with Purpose & Integrity) */}
      <section className="section-padding bg-white">
        <div className="container">
            <div className="staggered-row" style={{"alignItems":"center","display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(320px, 1fr))","gap":"50px"}}>
                
                {/* Left: Symmetrical Blue Outline Frame with Circular AXIS Stamp Badge */}
                <div className="staggered-img fade-in-left" style={{"position":"relative","margin":"15px 15px 25px 15px"}}>
                    <div style={{"position":"relative","zIndex":"2"}}>
                        {/* Symmetrical Outer Blue Frame */}
                        <div style={{"position":"absolute","top":"-12px","left":"-12px","right":"-12px","bottom":"-12px","border":"3.5px solid var(--clr-blue)","borderRadius":"28px","zIndex":"-1","pointerEvents":"none"}}></div>
                        <div style={{"borderRadius":"20px","overflow":"hidden","boxShadow":"0 20px 50px rgba(11, 34, 64, 0.18)"}}>
                            <img src="images/about_axis.webp" alt="AXIS Infinity Structure Engineering Team at Work" style={{"width":"100%","display":"block","minHeight":"400px","objectFit":"cover","borderRadius":"18px"}} />
                        </div>
                        {/* Official Circular AXIS Stamp Badge */}
                        <div style={{"position":"absolute","bottom":"-22px","right":"-22px","width":"130px","height":"130px","zIndex":"10","display":"flex","alignItems":"center","justifyContent":"center","boxShadow":"0 10px 30px rgba(0,0,0,0.18)","borderRadius":"50%","background":"#ffffff","border":"3px solid #ffffff","padding":"2px"}}>
                            <img src="images/axis-stamp-clean.webp" alt="Axis Stamp" style={{"width":"100%","height":"100%","objectFit":"contain","borderRadius":"50%"}} width="810" height="810" loading="lazy" decoding="async" />
                        </div>
                    </div>
                </div>

                {/* Right: Text Content */}
                <div className="staggered-content fade-in-right">
                    <span className="section-label">Our Founding Principle</span>
                    <h2>Engineering with Purpose and Integrity</h2>
                    <p className="mb-4" style={{"color":"#475569","lineHeight":"1.75","fontSize":"1.02rem"}}>AXIS INFINITY STRUCTURE was founded with a singular vision: to elevate the standard of multi-disciplinary engineering and construction services in the region. We identified a critical market gap , clients needed a single, accountable partner capable of managing civil, mechanical, and electrical disciplines with equal proficiency and a unified quality standard.</p>
                    <p className="mb-4" style={{"color":"#475569","lineHeight":"1.75","fontSize":"1.02rem"}}>We don't just execute blueprints; we optimize them. Our approach combines rigorous engineering principles with practical site intelligence, ensuring every structure and system we support stands the test of time, regulatory scrutiny, and operational demand.</p>
                    <a href="/contact" className="btn btn-primary" style={{"display":"inline-flex","alignItems":"center","gap":"10px","padding":"16px 36px","fontSize":"1.05rem","fontWeight":"700","borderRadius":"50px","boxShadow":"0 12px 28px rgba(11, 143, 200, 0.25)"}}>Work With Us</a>
                </div>
            </div>
        </div>
      </section>

      {/* Story Section 2 (Dark Image) */}
      <section className="dark-image-section">
        <div className="dis-image">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop" alt="Construction site execution" />
        </div>
        <div className="dis-content fade-in-right">
            <span className="section-label white-label">Beyond Construction</span>
            <h2>A Commitment to Seamless Handover</h2>
            <p>We are uniquely positioned to support the entire lifecycle of a project. From the earliest earthworks and foundation pours to the final pre-commissioning loop checks and operational handover, our teams are integrated directly into your workflow from day one.</p>
            <p>This end-to-end capability eliminates contractor friction, dramatically accelerates timelines, and guarantees a cohesive quality standard across all engineering trades on site.</p>
            <ul className="check-list mt-4">
                <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span> End-to-end lifecycle management</li>
                <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span> Single point of accountability</li>
                <li><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span> Reduced handover risk and delay</li>
            </ul>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-off-white">
        <div className="container">
            <div className="section-header text-center fade-in-up">
                <span className="section-label">What Drives Us</span>
                <h2>Our Core Values</h2>
                <p className="max-w-800 mx-auto" style={{"color":"var(--clr-charcoal)"}}>The principles that govern every decision, every project, and every interaction at AXIS INFINITY STRUCTURE.</p>
            </div>
            <div className="values-grid mt-5">
                <div className="value-card fade-in-up">
                    <i className="ph ph-shield-check"></i>
                    <h3>Zero-Harm Safety</h3>
                    <p>Every worker returns home safe. Our HSE protocols are non-negotiable at every site, every day, without exception.</p>
                </div>
                <div className="value-card fade-in-up delay-1">
                    <i className="ph ph-target"></i>
                    <h3>Precision Execution</h3>
                    <p>Engineering is the science of exactness. We eliminate rework by measuring twice and executing with disciplined precision.</p>
                </div>
                <div className="value-card fade-in-up delay-2">
                    <i className="ph ph-handshake"></i>
                    <h3>Client Partnership</h3>
                    <p>We function as an extension of your team, not just a contractor. Transparent communication at every stage of your project.</p>
                </div>
                <div className="value-card fade-in-up delay-3">
                    <i className="ph ph-leaf"></i>
                    <h3>Sustainable Practices</h3>
                    <p>Minimizing environmental impact through efficient resource use, waste reduction, and responsible modern construction techniques.</p>
                </div>
                <div className="value-card fade-in-up">
                    <i className="ph ph-chart-line-up"></i>
                    <h3>Continuous Improvement</h3>
                    <p>We invest in training, certifications, and the latest technologies to consistently stay ahead of industry standards and client expectations.</p>
                </div>
                <div className="value-card fade-in-up delay-1">
                    <i className="ph ph-clock-countdown"></i>
                    <h3>On-Time Delivery</h3>
                    <p>We treat deadlines as commitments. Our project management systems are specifically designed to protect your schedule and budget.</p>
                </div>
                <div className="value-card fade-in-up delay-2">
                    <i className="ph ph-medal"></i>
                    <h3>Uncompromised Quality</h3>
                    <p>Every material, weld, installation, and system is inspected and verified against client specifications and international standards.</p>
                </div>
                <div className="value-card fade-in-up delay-3">
                    <i className="ph ph-lightbulb"></i>
                    <h3>Innovation-Driven</h3>
                    <p>We actively embrace modern engineering methods, tools, and technologies to deliver smarter, faster, and more cost-effective project outcomes.</p>
                </div>
                <div className="value-card fade-in-up">
                    <i className="ph ph-users"></i>
                    <h3>Workforce Empowerment</h3>
                    <p>We believe our strength lies in our people. We foster an inclusive, respectful environment that encourages continuous professional growth and skills development.</p>
                </div>
            </div>
        </div>
      </section>

      {/* What Makes AXIS Infinity Structure Different */}
      <section className="section-padding bg-white">
        <div className="container">
            <div className="section-header text-center fade-in-up" style={{"marginBottom":"50px"}}>
                <span className="section-label">Our Advantage</span>
                <h2>What Makes AXIS Infinity Structure Different</h2>
                <p className="max-w-800 mx-auto">In a market crowded with single-trade contractors, AXIS Infinity Structure provides something rare: a fully integrated partner with the depth, breadth, and accountability to deliver complex projects from mobilization to final handover.</p>
            </div>

            <div className="grid-3" style={{"gap":"30px","alignItems":"stretch"}}>
                {/* Card 1 */}
                <div className="adv-img-card fade-in-up">
                    <div className="adv-img-card-photo">
                        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=700&auto=format&fit=crop" alt="Multi-disciplinary engineering" />
                        <div className="adv-img-card-badge"><i className="ph ph-buildings"></i></div>
                    </div>
                    <div className="adv-img-card-body">
                        <h3>Multi-Disciplinary Execution</h3>
                        <ul className="styled-list">
                            <li>Civil, Mechanical & Electrical under one management team</li>
                            <li>No coordination gaps between different contractors</li>
                            <li>Commissioning and pre-handover support included</li>
                            <li>Owned manpower and transport resources on demand</li>
                            <li>Single point of accountability from start to finish</li>
                        </ul>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="adv-img-card fade-in-up delay-1">
                    <div className="adv-img-card-photo">
                        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=700&auto=format&fit=crop" alt="Project management" />
                        <div className="adv-img-card-badge"><i className="ph ph-kanban"></i></div>
                    </div>
                    <div className="adv-img-card-body">
                        <h3>Professional Management</h3>
                        <ul className="styled-list">
                            <li>Certified Project Managers assigned to every site</li>
                            <li>Dedicated QA/QC inspectors at every project milestone</li>
                            <li>Real-time schedule and budget tracking systems</li>
                            <li>Transparent reporting and communication protocols</li>
                            <li>HSE officers embedded with full site authority</li>
                        </ul>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="adv-img-card fade-in-up delay-2">
                    <div className="adv-img-card-photo">
                        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=700&auto=format&fit=crop" alt="Workforce and logistics" />
                        <div className="adv-img-card-badge"><i className="ph ph-users-three"></i></div>
                    </div>
                    <div className="adv-img-card-body">
                        <h3>Resources & Logistics</h3>
                        <ul className="styled-list">
                            <li>500+ skilled, pre-vetted professionals available</li>
                            <li>Scalable teams from 10 to 500+ workers on demand</li>
                            <li>Fully maintained, owned transport fleet</li>
                            <li>Short-term and long-term contract flexibility</li>
                            <li>Full documentation and structured project handover</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Executive Leadership Section */}
      <section id="executive-leadership" style={{"padding":"100px 0","background":"linear-gradient(to bottom, #f8fafc, #ffffff)","fontFamily":"'Inter', sans-serif"}}>
        <div className="container text-center fade-in-up">
            <span style={{"display":"inline-block","padding":"6px 14px","background":"rgba(11, 143, 200, 0.1)","color":"var(--clr-blue)","borderRadius":"20px","fontWeight":"700","fontSize":"0.85rem","textTransform":"uppercase","letterSpacing":"1px","marginBottom":"15px"}}>Executive Leadership</span>
            <h2 style={{"fontSize":"2.8rem","fontWeight":"800","color":"var(--clr-navy)","marginBottom":"60px","letterSpacing":"-0.02em"}}>Our Leadership</h2>
            
            <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"center","gap":"40px","maxWidth":"1000px","margin":"0 auto"}}>
                
                {/* CEO Profile */}
                <div style={{"flex":"1 1 350px","position":"relative","background":"white","borderRadius":"24px","padding":"20px","boxShadow":"0 20px 40px rgba(0,0,0,0.04)","border":"2px solid #e2e8f0","transition":"all 0.4s ease"}} onMouseOver={e => { e.currentTarget.style.transform='translateY(-10px)'; e.currentTarget.style.boxShadow='0 30px 60px rgba(11, 143, 200, 0.15)'; e.currentTarget.style.borderColor='var(--clr-blue)'; }} onMouseOut={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 20px 40px rgba(0,0,0,0.04)'; e.currentTarget.style.borderColor='#e2e8f0'; }}>
                    <div style={{"position":"relative","height":"380px","borderRadius":"16px","overflow":"hidden","background":"linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)"}}>
                        <img src="images/team/ceo_and_gm_mobeen_zia.webp" alt="Mobeen Zia, CEO" style={{"width":"100%","height":"100%","objectFit":"cover","objectPosition":"center"}}  width="1200" height="1200" loading="lazy" decoding="async" />
                        <div style={{"position":"absolute","bottom":"0","left":"0","right":"0","height":"150px","background":"linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)"}}></div>
                    </div>
                    <div style={{"padding":"30px 10px 10px","textAlign":"left"}}>
                        <h3 style={{"fontSize":"1.6rem","fontWeight":"800","color":"var(--clr-navy)","margin":"0 0 8px 0","letterSpacing":"-0.01em"}}>Mobeen Zia</h3>
                        <div style={{"display":"flex","alignItems":"center","gap":"10px"}}>
                            <div style={{"width":"30px","height":"2px","background":"var(--clr-blue)"}}></div>
                            <p style={{"color":"var(--clr-blue)","fontWeight":"700","textTransform":"uppercase","fontSize":"0.85rem","letterSpacing":"1.5px","margin":"0"}}>Founder & CEO</p>
                        </div>
                    </div>
                </div>

                {/* MD Profile */}
                <div style={{"flex":"1 1 350px","position":"relative","background":"white","borderRadius":"24px","padding":"20px","boxShadow":"0 20px 40px rgba(0,0,0,0.04)","border":"2px solid #e2e8f0","transition":"all 0.4s ease"}} onMouseOver={e => { e.currentTarget.style.transform='translateY(-10px)'; e.currentTarget.style.boxShadow='0 30px 60px rgba(11, 143, 200, 0.15)'; e.currentTarget.style.borderColor='var(--clr-blue)'; }} onMouseOut={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 20px 40px rgba(0,0,0,0.04)'; e.currentTarget.style.borderColor='#e2e8f0'; }}>
                    <div style={{"position":"relative","height":"380px","borderRadius":"16px","overflow":"hidden","background":"linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)"}}>
                        <img src="images/team/partner_mujeeb_ali.webp" alt="Mujeeb Ali, Co-Founder and MD" style={{"width":"100%","height":"100%","objectFit":"contain","objectPosition":"bottom center","filter":"contrast(1.05)","paddingTop":"20px"}}  width="400" height="533" loading="lazy" decoding="async" />
                        <div style={{"position":"absolute","bottom":"0","left":"0","right":"0","height":"150px","background":"linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)"}}></div>
                    </div>
                    <div style={{"padding":"30px 10px 10px","textAlign":"left"}}>
                        <h3 style={{"fontSize":"1.6rem","fontWeight":"800","color":"var(--clr-navy)","margin":"0 0 8px 0","letterSpacing":"-0.01em"}}>Mujeeb Ali</h3>
                        <div style={{"display":"flex","alignItems":"center","gap":"10px"}}>
                            <div style={{"width":"30px","height":"2px","background":"var(--clr-blue)"}}></div>
                            <p style={{"color":"var(--clr-blue)","fontWeight":"700","textTransform":"uppercase","fontSize":"0.85rem","letterSpacing":"1.5px","margin":"0"}}>Co-Founder & MD</p>
                        </div>
                    </div>
                </div>

            </div>

            <div style={{"marginTop":"60px"}}>
                <a href="/team" className="btn btn-primary" style={{"display":"inline-flex","alignItems":"center","gap":"10px","padding":"18px 45px","fontSize":"1.05rem","fontWeight":"700","borderRadius":"50px","boxShadow":"0 15px 30px rgba(11, 143, 200, 0.25)","textTransform":"uppercase","letterSpacing":"1px","transition":"all 0.3s ease"}}>
                    <span>Explore Our Full Team</span>
                    <i className="ph ph-arrow-right"></i>
                </a>
            </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="section-padding bg-white" style={{"background":"var(--clr-off-white)"}}>
        <div className="container">
            <div className="two-column" style={{"gap":"60px","alignItems":"center"}}>

                {/* Left: Framed Photo with Symmetrical Blue Outline Frame and Circular AXIS Stamp */}
                <div className="fade-in-left" style={{"position":"relative","margin":"15px 15px 25px 15px"}}>
                    <div style={{"position":"relative","zIndex":"2"}}>
                        <div style={{"position":"absolute","top":"-12px","left":"-12px","right":"-12px","bottom":"-12px","border":"3.5px solid var(--clr-blue)","borderRadius":"28px","zIndex":"-1","pointerEvents":"none"}}></div>
                        <div style={{"borderRadius":"20px","overflow":"hidden","boxShadow":"0 20px 60px rgba(22,46,92,0.18)"}}>
                            <img src="images/team/ceo_and_gm_mobeen_zia.webp"
                                alt="CEO AXIS INFINITY STRUCTURE"
                                style={{"width":"100%","aspectRatio":"1 / 1","objectFit":"cover","objectPosition":"center","background":"#fff","borderRadius":"18px","display":"block"}}
                              width="1200" height="1200" loading="lazy" decoding="async" />
                        </div>
                        {/* Official Circular AXIS Stamp Badge */}
                        <div style={{"position":"absolute","bottom":"-22px","right":"-22px","width":"130px","height":"130px","zIndex":"10","display":"flex","alignItems":"center","justifyContent":"center","boxShadow":"0 10px 30px rgba(0,0,0,0.18)","borderRadius":"50%","background":"#ffffff","border":"3px solid #ffffff","padding":"2px"}}>
                            <img src="images/axis-stamp-clean.webp" alt="Axis Stamp" style={{"width":"100%","height":"100%","objectFit":"contain","borderRadius":"50%"}} width="810" height="810" loading="lazy" decoding="async" />
                        </div>
                    </div>
                </div>

                {/* Right: Quote + Info */}
                <div className="fade-in-right">
                    <span className="section-label">Leadership Message</span>
                    <h2 style={{"margin":"16px 0 28px"}}>Message from Our CEO</h2>

                    <div style={{"background":"var(--clr-white)","borderRadius":"16px","padding":"32px","boxShadow":"0 4px 20px rgba(22,46,92,0.08)","borderLeft":"5px solid var(--clr-blue)","marginBottom":"24px","position":"relative"}}>
                        <span style={{"fontSize":"5rem","lineHeight":"0.5","color":"var(--clr-blue)","opacity":"0.25","fontFamily":"Georgia,serif","display":"block","marginBottom":"10px"}}>&#8220;</span>
                        <p style={{"fontSize":"1.05rem","fontStyle":"italic","color":"var(--clr-navy)","lineHeight":"1.8","margin":"0"}}>
                            At AXIS INFINITY STRUCTURE, we believe strong infrastructure is the backbone of economic progress. Every project reflects our uncompromising commitment to quality, safety, and professional execution.
                        </p>
                    </div>

                    <p style={{"color":"var(--clr-charcoal)","marginBottom":"14px","lineHeight":"1.75"}}>
                        Our goal is to deliver integrated engineering solutions that help our clients move forward with total confidence. Through skilled manpower, advanced technical expertise, and disciplined execution, we build lasting partnerships based on trust and measurable results.
                    </p>
                    <p style={{"color":"var(--clr-charcoal)","marginBottom":"28px","lineHeight":"1.75"}}>
                        We take immense pride in supporting construction, infrastructure, and industrial development , always with a laser focus on responsibility, reliability, and long-term client value.
                    </p>

                    <div style={{"marginTop":"30px"}}>
                        <div style={{"fontFamily":"'Alex Brush', cursive","fontSize":"2.5rem","color":"#b5c0d0","lineHeight":"1","marginBottom":"5px"}}>Mobeen Zia</div>
                        <div style={{"fontSize":"0.85rem","color":"#777","textTransform":"uppercase","letterSpacing":"1px","fontWeight":"600"}}>Founder & CEO</div>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner" style={{"backgroundImage":"url('images/about-axis-team.webp')"}}>
        <div className="container">
            <div className="fade-in-up">
                <h2>Ready to Build Something Exceptional?</h2>
                <p>Partner with a team that delivers engineering excellence across every discipline, every stage, and every challenge.</p>
                <div style={{"display":"flex","gap":"20px","justifyContent":"center","flexWrap":"wrap"}}>
                    <a href="/contact" className="btn btn-primary">Start a Project</a>
                    <a href="/services" className="btn btn-outline-white">Explore Services</a>
                </div>
            </div>
        </div>
      </section>

    </AnimatedPage>
  );
}
