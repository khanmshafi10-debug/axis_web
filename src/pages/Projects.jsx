import React, { useEffect } from 'react';
import { AnimatedPage } from '../components/common/ScrollReveal';

export default function Projects() {
  useEffect(() => {
    document.title = "Our Projects | Civil, Mechanical & E&I Works | AXIS INFINITY STRUCTURE";
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatedPage>
      <style dangerouslySetInnerHTML={{ __html: `
/* Reusable Animated Section Styles */
.v2030-split-section {
    padding: 90px 0;
    background: #fff;
}
.v2030-split-section.bg-light {
    background: var(--clr-off-white);
}
.v2030-split-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}
@media (max-width: 900px) {
    .v2030-split-inner {
        grid-template-columns: 1fr;
        gap: 40px;
    }
}
.v2030-split-image {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 15px 45px rgba(0,0,0,0.1);
}
.v2030-split-image img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 16px;
}
.v2030-split-image.anim-float {
    animation: floatImage 6s ease-in-out infinite;
}
.v2030-split-text h2 {
    font-family: var(--font-heading);
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    font-weight: 800;
    color: var(--clr-navy);
    margin-bottom: 20px;
}
.v2030-split-text p {
    color: var(--clr-charcoal);
    font-size: 1.05rem;
    line-height: 1.8;
    margin-bottom: 25px;
}
.v2030-split-text ul {
    list-style: none;
    padding: 0;
    margin-bottom: 30px;
}
.v2030-split-text ul li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 0.95rem;
    color: var(--clr-charcoal);
    margin-bottom: 12px;
    font-weight: 500;
}
.v2030-split-text ul li i {
    color: var(--clr-blue);
    font-size: 1.2rem;
    margin-top: 2px;
}
.v2030-split-text ul li .anim-bullet {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    flex-shrink: 0;
    width: 20px;
    margin-top: 5px;
}

.v2030-mega-banner {
    position: relative;
    padding: 120px 0;
    background: var(--clr-navy);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.v2030-mega-bg {
    position: absolute;
    inset: -10%;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    opacity: 0.3;
    animation: bgPanZoom 20s linear infinite alternate;
}
.v2030-mega-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
}
.v2030-mega-content h2 {
    font-family: var(--font-heading);
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    color: #fff;
    margin-bottom: 20px;
}
.v2030-mega-content p {
    color: rgba(255,255,255,0.85);
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 30px;
}

/* Impact Banner */
.impact-banner {
    position: relative;
    padding: 140px 0;
    background-color: var(--clr-navy);
    text-align: center;
    overflow: hidden;
}
.impact-banner-bg {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    opacity: 0.4;
    transition: transform 10s ease;
}
.impact-banner:hover .impact-banner-bg {
    transform: scale(1.05);
}
.impact-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(11,36,69,0.95) 0%, rgba(11,143,200,0.3) 100%);
}
.impact-content {
    position: relative;
    z-index: 3;
    max-width: 700px;
    margin: 0 auto;
}
.impact-content h2 {
    color: #fff;
    font-family: var(--font-heading);
    font-size: clamp(2.2rem, 4vw, 3.5rem);
    font-weight: 800;
    margin-bottom: 25px;
    text-shadow: 0 4px 10px rgba(0,0,0,0.3);
}
.impact-content p {
    color: rgba(255,255,255,0.9);
    font-size: 1.15rem;
    line-height: 1.7;
    margin-bottom: 0;
}
/* Animated Counter Section */
.proj-stats-section {
    background: linear-gradient(135deg, var(--clr-navy) 0%, #0a2d5a 100%);
    padding: 80px 0;
}
.proj-stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
}
@media (max-width: 900px) { .proj-stats-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 500px) { .proj-stats-grid { grid-template-columns: 1fr 1fr; } }
.proj-stat-card {
    text-align: center;
    padding: 40px 20px;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 16px;
    background: rgba(255,255,255,0.04);
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.proj-stat-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(11,143,200,0.2);
    border-color: rgba(11,143,200,0.4);
}
.proj-stat-icon {
    font-size: 2.5rem;
    color: var(--clr-blue);
    margin-bottom: 15px;
}
.proj-stat-number {
    font-family: var(--font-heading);
    font-size: 3.5rem;
    font-weight: 800;
    color: #fff;
    line-height: 1;
    display: inline;
}
.proj-stat-symbol {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--clr-blue);
    display: inline;
    margin-left: 2px;
}
.proj-stat-label {
    font-size: 0.85rem;
    color: rgba(255,255,255,0.55);
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-top: 12px;
    font-weight: 600;
}

/* Dark Navy Feature Section (Mechanical) */
.proj-feature-dark {
    background: linear-gradient(135deg, var(--clr-navy) 0%, #112244 100%);
    padding: 90px 0;
}
.proj-feature-dark-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 70px;
    align-items: start;
}
@media (max-width: 900px) { .proj-feature-dark-inner { grid-template-columns: 1fr; gap: 40px; } }
.proj-feature-dark-text h2 {
    font-family: var(--font-heading);
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    font-weight: 800;
    color: #fff;
    margin-bottom: 20px;
}
.proj-feature-dark-text p {
    color: rgba(255,255,255,0.75);
    font-size: 1.05rem;
    line-height: 1.85;
    margin-bottom: 30px;
}
.proj-feature-dark-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}
@media (max-width: 500px) { .proj-feature-dark-cards { grid-template-columns: 1fr; } }
.proj-feature-card {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 14px;
    padding: 28px 22px;
    transition: all 0.3s ease;
}
.proj-feature-card:hover {
    background: rgba(11,143,200,0.15);
    border-color: rgba(11,143,200,0.4);
    transform: translateY(-5px);
}
.proj-feature-card i {
    font-size: 2rem;
    color: var(--clr-blue);
    margin-bottom: 12px;
    display: block;
}
.proj-feature-card h4 {
    color: #fff;
    font-family: var(--font-heading);
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 8px;
}
.proj-feature-card p {
    color: rgba(255,255,255,0.6);
    font-size: 0.88rem;
    line-height: 1.6;
    margin: 0;
}

/* E&I Image Cards Section */
.proj-ei-section {
    padding: 90px 0;
    background: var(--clr-off-white);
}
.proj-ei-header {
    text-align: center;
    max-width: 720px;
    margin: 0 auto 55px;
}
.proj-ei-header h2 {
    font-family: var(--font-heading);
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    font-weight: 800;
    color: var(--clr-navy);
    margin: 12px 0 16px;
}
.proj-ei-header p {
    color: var(--clr-charcoal);
    font-size: 1.05rem;
    line-height: 1.8;
}
.proj-ei-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}
@media (max-width: 900px) { .proj-ei-grid { grid-template-columns: 1fr; } }
.proj-ei-card {
    background: #fff;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 8px 30px rgba(0,0,0,0.07);
    transition: transform 0.35s ease, box-shadow 0.35s ease;
}
.proj-ei-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(11,143,200,0.15);
}
.proj-ei-img {
    height: 210px;
    overflow: hidden;
}
.proj-ei-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
}
.proj-ei-card:hover .proj-ei-img img { transform: scale(1.07); }
.proj-ei-body {
    padding: 30px 28px;
}
.proj-ei-icon {
    width: 48px;
    height: 48px;
    background: rgba(11,143,200,0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--clr-blue);
    margin-bottom: 16px;
}
.proj-ei-body h4 {
    font-family: var(--font-heading);
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--clr-navy);
    margin-bottom: 10px;
}
.proj-ei-body p {
    color: var(--clr-charcoal);
    font-size: 0.92rem;
    line-height: 1.65;
    margin: 0;
}
/* Compact Mechanical Pill Section */
.proj-mech-section {
    padding: 70px 0;
    background: #fff;
}
.proj-mech-header {
    text-align: center;
    max-width: 680px;
    margin: 0 auto 40px;
}
.proj-mech-header h2 {
    font-family: var(--font-heading);
    font-size: clamp(1.6rem, 2.5vw, 2.1rem);
    font-weight: 800;
    color: var(--clr-navy);
    margin: 10px 0 14px;
}
.proj-mech-header p {
    color: var(--clr-charcoal);
    font-size: 1rem;
    line-height: 1.75;
}
.proj-mech-pills {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    max-width: 860px;
    margin: 0 auto;
}
@media (max-width: 650px) { .proj-mech-pills { grid-template-columns: 1fr; } }
.proj-mech-pill {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 18px 22px;
    background: var(--clr-off-white);
    border: 1px solid rgba(11,36,69,0.08);
    border-radius: 12px;
    transition: all 0.3s ease;
}
.proj-mech-pill:hover {
    background: rgba(11,143,200,0.06);
    border-color: rgba(11,143,200,0.3);
    transform: translateX(5px);
}
.proj-mech-pill-icon {
    width: 42px;
    height: 42px;
    flex-shrink: 0;
    background: rgba(11,143,200,0.12);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    color: var(--clr-blue);
}
.proj-mech-pill-text {
    display: flex;
    flex-direction: column;
    gap: 3px;
}
.proj-mech-pill-text strong {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--clr-navy);
}
.proj-mech-pill-text span {
    font-size: 0.83rem;
    color: var(--clr-charcoal);
    line-height: 1.5;
}
` }} />
      {/* Page Banner */}
    <section className="page-banner" style={{"backgroundImage":"url('images/projects/dha_civil.webp')"}}>
        <div className="container fade-in-up">
            <h1>Our Engineering Project Portfolio</h1>
            <p>Proven execution across civil, mechanical, electrical, and instrumentation disciplines, delivering world-class results in Saudi Arabia and beyond.</p>
        </div>
    </section>


    {/* Comprehensive Portfolio Section */}
    <section className="section-padding bg-off-white">
        <div className="container text-center mb-5 fade-in-up">
            <span className="section-label">Complete Portfolio</span>
            <h2>Our Project Legacy</h2>
            <p className="max-w-800 mx-auto">Explore our extensive track record of successful deliveries across the Kingdom.</p>
        </div>
        
        <div className="container">
            <div className="grid-3" style={{"gap":"40px"}}>
{/* Project 1 */}
                <div className="project-card-new fade-in-up">
                    <div className="project-card-img">
                        <img src="images/projects/dha_road_work.webp" alt="DHA Multan Civil and Infrastructure Development"  width="736" height="552" loading="lazy" decoding="async" />
                        <div className="project-status-tag">Active</div>
                    </div>
                    <div className="project-card-body-new">
                        <span className="project-cat">Infrastructure Development</span>
                        <h4>DHA Multan Development</h4>
                        <ul style={{"listStyle":"none","padding":"0","margin":"0 0 20px 0"}}>
                            <li style={{"fontSize":"0.9rem","color":"var(--clr-body-text)","marginBottom":"6px"}}><i className="ph ph-check" style={{"color":"var(--clr-blue)","marginRight":"6px"}}></i> Site Execution & Civil Works</li>
                            <li style={{"fontSize":"0.9rem","color":"var(--clr-body-text)","marginBottom":"6px"}}><i className="ph ph-check" style={{"color":"var(--clr-blue)","marginRight":"6px"}}></i> Skilled Manpower Supply</li>
                            <li style={{"fontSize":"0.9rem","color":"var(--clr-body-text)","marginBottom":"6px"}}><i className="ph ph-check" style={{"color":"var(--clr-blue)","marginRight":"6px"}}></i> Equipment & Coordination</li>
                        </ul>
                        <div className="project-meta-details">
                            <span><i className="ph ph-map-pin"></i> Multan</span>
                            <span><i className="ph ph-clock"></i> In Progress</span>
                        </div>
                        <a href="/projects" className="btn btn-outline-blue w-100 mt-3" style={{"fontSize":"0.875rem"}}>View Project Details</a>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="project-card-new fade-in-up delay-1">
                    <div className="project-card-img">
                        <img src="images/projects/e_and_i.webp" alt="DHA Multan Electrical and Instrumentation Works"  width="669" height="298" loading="lazy" decoding="async" />
                        <div className="project-status-tag">Active</div>
                    </div>
                    <div className="project-card-body-new">
                        <span className="project-cat">Electrical & Instrumentation</span>
                        <h4>DHA Multan E&I Works</h4>
                        <ul style={{"listStyle":"none","padding":"0","margin":"0 0 20px 0"}}>
                            <li style={{"fontSize":"0.9rem","color":"var(--clr-body-text)","marginBottom":"6px"}}><i className="ph ph-check" style={{"color":"var(--clr-blue)","marginRight":"6px"}}></i> Electrical Installations</li>
                            <li style={{"fontSize":"0.9rem","color":"var(--clr-body-text)","marginBottom":"6px"}}><i className="ph ph-check" style={{"color":"var(--clr-blue)","marginRight":"6px"}}></i> Substation Coordination</li>
                            <li style={{"fontSize":"0.9rem","color":"var(--clr-body-text)","marginBottom":"6px"}}><i className="ph ph-check" style={{"color":"var(--clr-blue)","marginRight":"6px"}}></i> Instrumentation Support</li>
                        </ul>
                        <div className="project-meta-details">
                            <span><i className="ph ph-map-pin"></i> Multan</span>
                            <span><i className="ph ph-clock"></i> In Progress</span>
                        </div>
                        <a href="/projects" className="btn btn-outline-blue w-100 mt-3" style={{"fontSize":"0.875rem"}}>View Project Details</a>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="project-card-new fade-in-up delay-2">
                    <div className="project-card-img">
                        <img src="images/projects/wasa.webp" alt="Punjab WASA Municipal Water Infrastructure"  width="800" height="480" loading="lazy" decoding="async" />
                        <div className="project-status-tag">Active</div>
                    </div>
                    <div className="project-card-body-new">
                        <span className="project-cat">Public Infrastructure</span>
                        <h4>Gov of Punjab, WASA</h4>
                        <ul style={{"listStyle":"none","padding":"0","margin":"0 0 20px 0"}}>
                            <li style={{"fontSize":"0.9rem","color":"var(--clr-body-text)","marginBottom":"6px"}}><i className="ph ph-check" style={{"color":"var(--clr-blue)","marginRight":"6px"}}></i> Water Systems Construction</li>
                            <li style={{"fontSize":"0.9rem","color":"var(--clr-body-text)","marginBottom":"6px"}}><i className="ph ph-check" style={{"color":"var(--clr-blue)","marginRight":"6px"}}></i> Pipeline Laying</li>
                            <li style={{"fontSize":"0.9rem","color":"var(--clr-body-text)","marginBottom":"6px"}}><i className="ph ph-check" style={{"color":"var(--clr-blue)","marginRight":"6px"}}></i> Sewer Repairs & Resource Support</li>
                        </ul>
                        <div className="project-meta-details">
                            <span><i className="ph ph-map-pin"></i> Punjab</span>
                            <span><i className="ph ph-clock"></i> In Progress</span>
                        </div>
                        <a href="/projects" className="btn btn-outline-blue w-100 mt-3" style={{"fontSize":"0.875rem"}}>View Project Details</a>
                    </div>
                </div>

                {/* Project 4: CCTV */}
                <div className="project-card-new fade-in-up">
                    <div className="project-card-img">
                        <img src="images/cctv-camera.webp" alt="IT Office CCTV Setup" style={{"width":"100%","height":"100%","objectFit":"cover","objectPosition":"center"}}  width="1024" height="1024" loading="lazy" decoding="async" />
                        <div className="project-status-tag">Active</div>
                    </div>
                    <div className="project-card-body-new">
                        <span className="project-cat">Security & Surveillance</span>
                        <h4>IT Office CCTV Setup</h4>
                        <ul style={{"listStyle":"none","padding":"0","margin":"0 0 20px 0"}}>
                            <li style={{"fontSize":"0.9rem","color":"var(--clr-body-text)","marginBottom":"6px"}}><i className="ph ph-check" style={{"color":"var(--clr-blue)","marginRight":"6px"}}></i> High-Definition IP CCTV Installation</li>
                            <li style={{"fontSize":"0.9rem","color":"var(--clr-body-text)","marginBottom":"6px"}}><i className="ph ph-check" style={{"color":"var(--clr-blue)","marginRight":"6px"}}></i> Biometric Access Control Integration</li>
                            <li style={{"fontSize":"0.9rem","color":"var(--clr-body-text)","marginBottom":"6px"}}><i className="ph ph-check" style={{"color":"var(--clr-blue)","marginRight":"6px"}}></i> Centralized Server Room Security Setup</li>
                        </ul>
                        <div className="project-meta-details">
                            <span><i className="ph ph-map-pin"></i> DHA</span>
                            <span><i className="ph ph-clock"></i> In Progress</span>
                        </div>
                        <a href="/projects" className="btn btn-outline-blue w-100 mt-3" style={{"fontSize":"0.875rem"}}>View Project Details</a>
                    </div>
                </div>
                <div className="fade-in-up" style={{"background":"white","borderRadius":"12px","overflow":"hidden","boxShadow":"0 10px 30px rgba(0,0,0,0.05)","transition":"transform 0.3s ease"}} onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='translateY(0)'">
                    <div style={{"height":"220px","overflow":"hidden","backgroundColor":"#eee","display":"flex","alignItems":"center","justifyContent":"center"}}>
                        <i className="ph ph-buildings" style={{"fontSize":"4rem","color":"#ccc"}}></i>
                    </div>
                    <div style={{"padding":"25px"}}>
                        <span style={{"color":"var(--clr-blue)","fontWeight":"700","fontSize":"0.8rem","textTransform":"uppercase","letterSpacing":"1px"}}>General Contracting</span>
                        <h4 style={{"color":"var(--clr-navy)","fontSize":"1.2rem","margin":"10px 0"}}>Project 1</h4>
                        <p style={{"color":"var(--clr-charcoal)","fontSize":"0.9rem","lineHeight":"1.6","marginBottom":"20px"}}>Successful execution of Project 1 meeting all client requirements and quality standards.</p>
                        <div style={{"display":"flex","alignItems":"center","gap":"8px","fontWeight":"600","color":"var(--clr-blue)","fontSize":"0.85rem"}}>
                            <i className="ph ph-circle-notch ph-spin"></i> In Progress
                        </div>
                    </div>
                </div>        
                <div className="fade-in-up" style={{"background":"white","borderRadius":"12px","overflow":"hidden","boxShadow":"0 10px 30px rgba(0,0,0,0.05)","transition":"transform 0.3s ease"}} onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='translateY(0)'">
                    <div style={{"height":"220px","overflow":"hidden","backgroundColor":"#eee","display":"flex","alignItems":"center","justifyContent":"center"}}>
                        <i className="ph ph-buildings" style={{"fontSize":"4rem","color":"#ccc"}}></i>
                    </div>
                    <div style={{"padding":"25px"}}>
                        <span style={{"color":"var(--clr-blue)","fontWeight":"700","fontSize":"0.8rem","textTransform":"uppercase","letterSpacing":"1px"}}>General Contracting</span>
                        <h4 style={{"color":"var(--clr-navy)","fontSize":"1.2rem","margin":"10px 0"}}>Project 2</h4>
                        <p style={{"color":"var(--clr-charcoal)","fontSize":"0.9rem","lineHeight":"1.6","marginBottom":"20px"}}>Successful execution of Project 2 meeting all client requirements and quality standards.</p>
                        <div style={{"display":"flex","alignItems":"center","gap":"8px","fontWeight":"600","color":"#888","fontSize":"0.85rem"}}>
                            <i className="ph ph-clock"></i> Coming Soon
                        </div>
                    </div>
                </div>        
                <div className="fade-in-up" style={{"background":"white","borderRadius":"12px","overflow":"hidden","boxShadow":"0 10px 30px rgba(0,0,0,0.05)","transition":"transform 0.3s ease"}} onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='translateY(0)'">
                    <div style={{"height":"220px","overflow":"hidden","backgroundColor":"#eee","display":"flex","alignItems":"center","justifyContent":"center"}}>
                        <i className="ph ph-buildings" style={{"fontSize":"4rem","color":"#ccc"}}></i>
                    </div>
                    <div style={{"padding":"25px"}}>
                        <span style={{"color":"var(--clr-blue)","fontWeight":"700","fontSize":"0.8rem","textTransform":"uppercase","letterSpacing":"1px"}}>General Contracting</span>
                        <h4 style={{"color":"var(--clr-navy)","fontSize":"1.2rem","margin":"10px 0"}}>Project 3</h4>
                        <p style={{"color":"var(--clr-charcoal)","fontSize":"0.9rem","lineHeight":"1.6","marginBottom":"20px"}}>Successful execution of Project 3 meeting all client requirements and quality standards.</p>
                        <div style={{"display":"flex","alignItems":"center","gap":"8px","fontWeight":"600","color":"#E2940F","fontSize":"0.85rem"}}>
                            <span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span> Completed
                        </div>
                    </div>
                </div>        
                <div className="fade-in-up" style={{"background":"white","borderRadius":"12px","overflow":"hidden","boxShadow":"0 10px 30px rgba(0,0,0,0.05)","transition":"transform 0.3s ease"}} onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='translateY(0)'">
                    <div style={{"height":"220px","overflow":"hidden","backgroundColor":"#eee","display":"flex","alignItems":"center","justifyContent":"center"}}>
                        <i className="ph ph-buildings" style={{"fontSize":"4rem","color":"#ccc"}}></i>
                    </div>
                    <div style={{"padding":"25px"}}>
                        <span style={{"color":"var(--clr-blue)","fontWeight":"700","fontSize":"0.8rem","textTransform":"uppercase","letterSpacing":"1px"}}>General Contracting</span>
                        <h4 style={{"color":"var(--clr-navy)","fontSize":"1.2rem","margin":"10px 0"}}>Project 4</h4>
                        <p style={{"color":"var(--clr-charcoal)","fontSize":"0.9rem","lineHeight":"1.6","marginBottom":"20px"}}>Successful execution of Project 4 meeting all client requirements and quality standards.</p>
                        <div style={{"display":"flex","alignItems":"center","gap":"8px","fontWeight":"600","color":"var(--clr-blue)","fontSize":"0.85rem"}}>
                            <i className="ph ph-circle-notch ph-spin"></i> In Progress
                        </div>
                    </div>
                </div>        
                <div className="fade-in-up" style={{"background":"white","borderRadius":"12px","overflow":"hidden","boxShadow":"0 10px 30px rgba(0,0,0,0.05)","transition":"transform 0.3s ease"}} onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='translateY(0)'">
                    <div style={{"height":"220px","overflow":"hidden","backgroundColor":"#eee","display":"flex","alignItems":"center","justifyContent":"center"}}>
                        <i className="ph ph-buildings" style={{"fontSize":"4rem","color":"#ccc"}}></i>
                    </div>
                    <div style={{"padding":"25px"}}>
                        <span style={{"color":"var(--clr-blue)","fontWeight":"700","fontSize":"0.8rem","textTransform":"uppercase","letterSpacing":"1px"}}>General Contracting</span>
                        <h4 style={{"color":"var(--clr-navy)","fontSize":"1.2rem","margin":"10px 0"}}>Project 5</h4>
                        <p style={{"color":"var(--clr-charcoal)","fontSize":"0.9rem","lineHeight":"1.6","marginBottom":"20px"}}>Successful execution of Project 5 meeting all client requirements and quality standards.</p>
                        <div style={{"display":"flex","alignItems":"center","gap":"8px","fontWeight":"600","color":"#888","fontSize":"0.85rem"}}>
                            <i className="ph ph-clock"></i> Coming Soon
                        </div>
                    </div>
                </div>        
                <div className="fade-in-up" style={{"background":"white","borderRadius":"12px","overflow":"hidden","boxShadow":"0 10px 30px rgba(0,0,0,0.05)","transition":"transform 0.3s ease"}} onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='translateY(0)'">
                    <div style={{"height":"220px","overflow":"hidden","backgroundColor":"#eee","display":"flex","alignItems":"center","justifyContent":"center"}}>
                        <i className="ph ph-buildings" style={{"fontSize":"4rem","color":"#ccc"}}></i>
                    </div>
                    <div style={{"padding":"25px"}}>
                        <span style={{"color":"var(--clr-blue)","fontWeight":"700","fontSize":"0.8rem","textTransform":"uppercase","letterSpacing":"1px"}}>General Contracting</span>
                        <h4 style={{"color":"var(--clr-navy)","fontSize":"1.2rem","margin":"10px 0"}}>Project 6</h4>
                        <p style={{"color":"var(--clr-charcoal)","fontSize":"0.9rem","lineHeight":"1.6","marginBottom":"20px"}}>Successful execution of Project 6 meeting all client requirements and quality standards.</p>
                        <div style={{"display":"flex","alignItems":"center","gap":"8px","fontWeight":"600","color":"#E2940F","fontSize":"0.85rem"}}>
                            <span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span> Completed
                        </div>
                    </div>
                </div>        
                <div className="fade-in-up" style={{"background":"white","borderRadius":"12px","overflow":"hidden","boxShadow":"0 10px 30px rgba(0,0,0,0.05)","transition":"transform 0.3s ease"}} onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='translateY(0)'">
                    <div style={{"height":"220px","overflow":"hidden","backgroundColor":"#eee","display":"flex","alignItems":"center","justifyContent":"center"}}>
                        <i className="ph ph-buildings" style={{"fontSize":"4rem","color":"#ccc"}}></i>
                    </div>
                    <div style={{"padding":"25px"}}>
                        <span style={{"color":"var(--clr-blue)","fontWeight":"700","fontSize":"0.8rem","textTransform":"uppercase","letterSpacing":"1px"}}>General Contracting</span>
                        <h4 style={{"color":"var(--clr-navy)","fontSize":"1.2rem","margin":"10px 0"}}>Project 7</h4>
                        <p style={{"color":"var(--clr-charcoal)","fontSize":"0.9rem","lineHeight":"1.6","marginBottom":"20px"}}>Successful execution of Project 7 meeting all client requirements and quality standards.</p>
                        <div style={{"display":"flex","alignItems":"center","gap":"8px","fontWeight":"600","color":"var(--clr-blue)","fontSize":"0.85rem"}}>
                            <i className="ph ph-circle-notch ph-spin"></i> In Progress
                        </div>
                    </div>
                </div>        
                <div className="fade-in-up" style={{"background":"white","borderRadius":"12px","overflow":"hidden","boxShadow":"0 10px 30px rgba(0,0,0,0.05)","transition":"transform 0.3s ease"}} onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='translateY(0)'">
                    <div style={{"height":"220px","overflow":"hidden","backgroundColor":"#eee","display":"flex","alignItems":"center","justifyContent":"center"}}>
                        <i className="ph ph-buildings" style={{"fontSize":"4rem","color":"#ccc"}}></i>
                    </div>
                    <div style={{"padding":"25px"}}>
                        <span style={{"color":"var(--clr-blue)","fontWeight":"700","fontSize":"0.8rem","textTransform":"uppercase","letterSpacing":"1px"}}>General Contracting</span>
                        <h4 style={{"color":"var(--clr-navy)","fontSize":"1.2rem","margin":"10px 0"}}>Project 8</h4>
                        <p style={{"color":"var(--clr-charcoal)","fontSize":"0.9rem","lineHeight":"1.6","marginBottom":"20px"}}>Successful execution of Project 8 meeting all client requirements and quality standards.</p>
                        <div style={{"display":"flex","alignItems":"center","gap":"8px","fontWeight":"600","color":"#888","fontSize":"0.85rem"}}>
                            <i className="ph ph-clock"></i> Coming Soon
                        </div>
                    </div>
                </div>        
                <div className="fade-in-up" style={{"background":"white","borderRadius":"12px","overflow":"hidden","boxShadow":"0 10px 30px rgba(0,0,0,0.05)","transition":"transform 0.3s ease"}} onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='translateY(0)'">
                    <div style={{"height":"220px","overflow":"hidden","backgroundColor":"#eee","display":"flex","alignItems":"center","justifyContent":"center"}}>
                        <i className="ph ph-buildings" style={{"fontSize":"4rem","color":"#ccc"}}></i>
                    </div>
                    <div style={{"padding":"25px"}}>
                        <span style={{"color":"var(--clr-blue)","fontWeight":"700","fontSize":"0.8rem","textTransform":"uppercase","letterSpacing":"1px"}}>General Contracting</span>
                        <h4 style={{"color":"var(--clr-navy)","fontSize":"1.2rem","margin":"10px 0"}}>Project 9</h4>
                        <p style={{"color":"var(--clr-charcoal)","fontSize":"0.9rem","lineHeight":"1.6","marginBottom":"20px"}}>Successful execution of Project 9 meeting all client requirements and quality standards.</p>
                        <div style={{"display":"flex","alignItems":"center","gap":"8px","fontWeight":"600","color":"#E2940F","fontSize":"0.85rem"}}>
                            <span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span> Completed
                        </div>
                    </div>
                </div>        
                <div className="fade-in-up" style={{"background":"white","borderRadius":"12px","overflow":"hidden","boxShadow":"0 10px 30px rgba(0,0,0,0.05)","transition":"transform 0.3s ease"}} onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='translateY(0)'">
                    <div style={{"height":"220px","overflow":"hidden","backgroundColor":"#eee","display":"flex","alignItems":"center","justifyContent":"center"}}>
                        <i className="ph ph-buildings" style={{"fontSize":"4rem","color":"#ccc"}}></i>
                    </div>
                    <div style={{"padding":"25px"}}>
                        <span style={{"color":"var(--clr-blue)","fontWeight":"700","fontSize":"0.8rem","textTransform":"uppercase","letterSpacing":"1px"}}>General Contracting</span>
                        <h4 style={{"color":"var(--clr-navy)","fontSize":"1.2rem","margin":"10px 0"}}>Project 10</h4>
                        <p style={{"color":"var(--clr-charcoal)","fontSize":"0.9rem","lineHeight":"1.6","marginBottom":"20px"}}>Successful execution of Project 10 meeting all client requirements and quality standards.</p>
                        <div style={{"display":"flex","alignItems":"center","gap":"8px","fontWeight":"600","color":"var(--clr-blue)","fontSize":"0.85rem"}}>
                            <i className="ph ph-circle-notch ph-spin"></i> In Progress
                        </div>
                    </div>
                </div>        
                <div className="fade-in-up" style={{"background":"white","borderRadius":"12px","overflow":"hidden","boxShadow":"0 10px 30px rgba(0,0,0,0.05)","transition":"transform 0.3s ease"}} onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='translateY(0)'">
                    <div style={{"height":"220px","overflow":"hidden","backgroundColor":"#eee","display":"flex","alignItems":"center","justifyContent":"center"}}>
                        <i className="ph ph-buildings" style={{"fontSize":"4rem","color":"#ccc"}}></i>
                    </div>
                    <div style={{"padding":"25px"}}>
                        <span style={{"color":"var(--clr-blue)","fontWeight":"700","fontSize":"0.8rem","textTransform":"uppercase","letterSpacing":"1px"}}>General Contracting</span>
                        <h4 style={{"color":"var(--clr-navy)","fontSize":"1.2rem","margin":"10px 0"}}>Project 11</h4>
                        <p style={{"color":"var(--clr-charcoal)","fontSize":"0.9rem","lineHeight":"1.6","marginBottom":"20px"}}>Successful execution of Project 11 meeting all client requirements and quality standards.</p>
                        <div style={{"display":"flex","alignItems":"center","gap":"8px","fontWeight":"600","color":"#888","fontSize":"0.85rem"}}>
                            <i className="ph ph-clock"></i> Coming Soon
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Post-Portfolio: Section 3 - Mechanical - Compact Service Pills */}
    <section className="proj-mech-section fade-in-up">
        <div className="container">
            <div className="proj-mech-header">
                <span className="section-label">Mechanical Works</span>
                <h2>Advanced Mechanical &amp; Industrial Installations</h2>
                <p>Our mechanical teams deliver high-pressure piping, rotating equipment, structural steel, and plant maintenance to the most stringent international codes across Saudi Arabia's industrial sector.</p>
            </div>
            <div className="proj-mech-pills">
                <div className="proj-mech-pill fade-in-up">
                    <div className="proj-mech-pill-icon"><i className="ph ph-pipe"></i></div>
                    <div className="proj-mech-pill-text">
                        <strong>High-Pressure Piping</strong>
                        <span>ASME and API fabrication, hydro-testing, and commissioning.</span>
                    </div>
                </div>
                <div className="proj-mech-pill fade-in-up delay-1">
                    <div className="proj-mech-pill-icon"><i className="ph ph-gear-six"></i></div>
                    <div className="proj-mech-pill-text">
                        <strong>Rotating Equipment</strong>
                        <span>Precision alignment, vibration analysis, and predictive maintenance.</span>
                    </div>
                </div>
                <div className="proj-mech-pill fade-in-up delay-2">
                    <div className="proj-mech-pill-icon"><i className="ph ph-wrench"></i></div>
                    <div className="proj-mech-pill-text">
                        <strong>Steel Fabrication</strong>
                        <span>Structural steel erection, support frames, and pressure vessel installation.</span>
                    </div>
                </div>
                <div className="proj-mech-pill fade-in-up delay-3">
                    <div className="proj-mech-pill-icon"><i className="ph ph-factory"></i></div>
                    <div className="proj-mech-pill-text">
                        <strong>Plant Maintenance</strong>
                        <span>Shutdown maintenance for refineries, petrochemical, and fertilizer plants.</span>
                    </div>
                </div>
            </div>
            <div style={{"textAlign":"center","marginTop":"35px"}}>
                <a href="/mechanical-works" className="btn btn-outline-blue">Explore Mechanical Services &rarr;</a>
            </div>
        </div>
    </section>

    {/* Post-Portfolio: Section 4 - E&I - Centered Light Section with Timeline Badges */}
    <section className="proj-ei-section fade-in-up">
        <div className="container">
            <div className="proj-ei-header">
                <span className="section-label">E&amp;I Works</span>
                <h2>Next-Generation Electrical &amp; Instrumentation Systems</h2>
                <p>Reliable power distribution and intelligent control systems are the backbone of any successful industrial facility. Our licensed E&amp;I engineers deliver comprehensive, code-compliant solutions, from primary substations to field instrumentation, ensuring your operations run safely, efficiently, and without interruption.</p>
            </div>
            <div className="proj-ei-grid">
                <div className="proj-ei-card fade-in-up">
                    <div className="proj-ei-img">
                        <img src="images/projects/e_and_i.webp" alt="Electrical and Instrumentation Works"  width="669" height="298" loading="lazy" decoding="async" />
                    </div>
                    <div className="proj-ei-body">
                        <div className="proj-ei-icon"><i className="ph ph-lightning"></i></div>
                        <h4>Power Distribution</h4>
                        <p>HV, MV, and LV systems, substation construction, transformer installation, and cable routing.</p>
                    </div>
                </div>
                <div className="proj-ei-card fade-in-up delay-1">
                    <div className="proj-ei-img">
                        <img src="images/site-execution.webp" alt="SCADA and DCS Control Systems"  width="1024" height="1024" loading="lazy" decoding="async" />
                    </div>
                    <div className="proj-ei-body">
                        <div className="proj-ei-icon"><i className="ph ph-cpu"></i></div>
                        <h4>Control Systems</h4>
                        <p>DCS, SCADA, and PLC integration, industrial automation, loop testing, and system commissioning.</p>
                    </div>
                </div>
                <div className="proj-ei-card fade-in-up delay-2">
                    <div className="proj-ei-img">
                        <img src="images/safety_first_industry.webp" alt="Fire and Gas Detection Systems"  width="1024" height="1024" loading="lazy" decoding="async" />
                    </div>
                    <div className="proj-ei-body">
                        <div className="proj-ei-icon"><i className="ph ph-fire"></i></div>
                        <h4>Safety Systems</h4>
                        <p>Fire and gas detection, ESD systems, instrument calibration, and hazardous area installations.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Post-Portfolio: Section 5 - Track Record - Full-Width Impact Banner */}
    <section className="impact-banner fade-in-up">
        <div className="impact-banner-bg" style={{"backgroundImage":"url('images/track_record_success.webp')"}}></div>
        <div className="impact-overlay"></div>
        <div className="impact-content">
            <span className="v2030-section-label" style={{"background":"rgba(11,143,200,0.25)","border":"1px solid rgba(11,143,200,0.5)","color":"#fff","marginBottom":"25px","display":"inline-block"}}>Our Commitment</span>
            <h2>Trusted. Proven. Delivering Excellence at Every Scale.</h2>
            <p>From small-scope maintenance contracts to multi-million-dollar industrial developments, AXIS INFINITY STRUCTURE brings the same level of professionalism, precision, and dedication to every engagement. Our clients trust us because we deliver on time, within budget, and to the highest quality standards, every single time.</p>
            <a href="/contact" className="btn btn-primary" style={{"marginTop":"25px","fontSize":"1rem","padding":"14px 40px"}}>Start Your Project Today</a>
        </div>
    </section>

    {/* Footer */}
    </AnimatedPage>
  );
}
