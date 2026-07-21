import React, { useEffect } from 'react';

export default function Sectors() {
  useEffect(() => {
    document.title = "Sectors We Serve | AXIS INFINITY STRUCTURE";
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
/* NEW SECTOR CARD PREMIUM DESIGN */
.premium-sector-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 50px;
}
.sector-card-premium {
    background: #fff;
    border-radius: 60px 15px 15px 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    border: 1px solid #f4f4f4;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.sector-card-premium:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}
.sector-card-img-wrapper {
    position: relative;
    width: 100%;
    height: 220px;
    border-radius: 60px 15px 0 0;
}
.sector-card-img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 60px 15px 0 0;
}
.sector-card-badge {
    position: absolute;
    bottom: -25px;
    left: 20px;
    width: 65px;
    height: 65px;
    background-color: #0a192f;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid #fff;
    color: #fff;
    font-size: 1.6rem;
    z-index: 2;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}
.sector-card-content {
    padding: 45px 25px 30px 25px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
.sector-card-title {
    color: #0a192f;
    font-size: 1.25rem;
    font-weight: 800;
    line-height: 1.3;
    margin-bottom: 12px;
}
.sector-card-text {
    color: #666;
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 25px;
    flex-grow: 1;
}
.sector-card-link {
    color: #0a192f;
    font-size: 0.9rem;
    font-weight: 700;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: 0.3s;
}
.sector-card-link i {
    font-size: 1.1rem;
    color: #0b8fc8;
}
.sector-card-link:hover {
    color: #0b8fc8;
}
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
` }} />
      {/* Page Banner */}
    <section className="page-banner" style={{"backgroundImage":"url('images/project_industrial_park.webp')"}}>
        <div className="container fade-in-up">
            <h1>Sectors We Serve</h1>
                        <div style={{"marginTop":"35px","marginBottom":"20px"}}>
                <p className="hero-desc">Multi-sector engineering expertise built for the most demanding construction and industrial environments. </p>
                <p className="hero-desc" style={{"fontSize":"1.05rem","color":"rgba(255,255,255,0.8)","borderLeft":"none","textAlign":"left","paddingLeft":"24px"}}>We bring decades of industrial expertise, deploying innovative technologies and a highly skilled workforce to ensure every milestone is achieved beyond expectations.</p>
                <div className="hero-badges" style={{"justifyContent":"flex-start","marginLeft":"24px"}}>
                    <span className="hero-badge"><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span> Industrial Expertise</span>
                    <span className="hero-badge"><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span> Innovative Tech</span>
                    <span className="hero-badge"><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span> Skilled Workforce</span>
                </div>
            </div>
        </div>
    </section>

    {/* Sector Intro */}
    <section className="section-padding bg-white">
        <div className="container text-center">
            <div className="fade-in-up">
                <span className="section-label">Industries Supported</span>
                <h2>Broad Expertise. Specialized Execution.</h2>
                <p className="max-w-800 mx-auto">AXIS INFINITY STRUCTURE possesses the technical versatility, human capital, and resource scale to effectively serve a wide variety of demanding sectors , from heavy industrial complexes to sensitive healthcare infrastructure.</p>
            </div>
        </div>
    </section>

    {/* Visual Cards Grid */}
    <section className="section-padding">
        <div className="container">
<style dangerouslySetInnerHTML={{ __html: `
/* NEW SECTOR CARD PREMIUM DESIGN */
.premium-sector-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 50px;
}
.sector-card-premium {
    background: #fff;
    border-radius: 60px 15px 15px 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    border: 1px solid #f4f4f4;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.sector-card-premium:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}
.sector-card-img-wrapper {
    position: relative;
    width: 100%;
    height: 220px;
    border-radius: 60px 15px 0 0;
}
.sector-card-img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 60px 15px 0 0;
}
.sector-card-badge {
    position: absolute;
    bottom: -25px;
    left: 20px;
    width: 65px;
    height: 65px;
    background-color: #0a192f;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid #fff;
    color: #fff;
    font-size: 1.6rem;
    z-index: 2;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}
.sector-card-content {
    padding: 45px 25px 30px 25px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
.sector-card-title {
    color: #0a192f;
    font-size: 1.25rem;
    font-weight: 800;
    line-height: 1.3;
    margin-bottom: 12px;
}
.sector-card-text {
    color: #666;
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 25px;
    flex-grow: 1;
}
.sector-card-link {
    color: #0a192f;
    font-size: 0.9rem;
    font-weight: 700;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: 0.3s;
}
.sector-card-link i {
    font-size: 1.1rem;
    color: #0b8fc8;
}
.sector-card-link:hover {
    color: #0b8fc8;
}
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
` }} />

            <div className="premium-sector-grid">
                {/* Sector 1 */}
                <div className="sector-card-premium fade-in-up scale-in">
                    <div className="sector-card-img-wrapper">
                        <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=800&auto=format&fit=crop" alt="Industrial Facilities" />
                        <div className="sector-card-badge"><i className="ph ph-factory"></i></div>
                    </div>
                    <div className="sector-card-content">
                        <h3 className="sector-card-title">Industrial Facilities</h3>
                        <p className="sector-card-text">Heavy plant construction, mechanical outfitting, and electrical commissioning for manufacturing and industrial operations.</p>
                        <a href="#" className="sector-card-link">Learn more <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>

                {/* Sector 2 */}
                <div className="sector-card-premium fade-in-up scale-in delay-1">
                    <div className="sector-card-img-wrapper">
                        <img src="images/commercial-construction.webp" alt="Commercial Buildings" />
                        <div className="sector-card-badge"><i className="ph ph-buildings"></i></div>
                    </div>
                    <div className="sector-card-content">
                        <h3 className="sector-card-title">Commercial Buildings</h3>
                        <p className="sector-card-text">High-rise office towers, retail complexes, and multi-story developments delivered to the highest civil and MEP standards.</p>
                        <a href="#" className="sector-card-link">Learn more <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>

                {/* Sector 3 */}
                <div className="sector-card-premium fade-in-up scale-in delay-2">
                    <div className="sector-card-img-wrapper">
                        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop" alt="Residential Construction" />
                        <div className="sector-card-badge"><i className="ph ph-house"></i></div>
                    </div>
                    <div className="sector-card-content">
                        <h3 className="sector-card-title">Residential Construction</h3>
                        <p className="sector-card-text">Large residential complexes and housing estates, executed with structural precision and premium finishing quality.</p>
                        <a href="#" className="sector-card-link">Learn more <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>

                {/* Sector 4 */}
                <div className="sector-card-premium fade-in-up scale-in">
                    <div className="sector-card-img-wrapper">
                        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop" alt="Roads & Infrastructure" />
                        <div className="sector-card-badge"><i className="ph ph-road-horizon"></i></div>
                    </div>
                    <div className="sector-card-content">
                        <h3 className="sector-card-title">Roads & Infrastructure</h3>
                        <p className="sector-card-text">Earthworks, site preparation, road paving, and general civil infrastructure supporting national development programs.</p>
                        <a href="#" className="sector-card-link">Learn more <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>

                {/* Sector 5 */}
                <div className="sector-card-premium fade-in-up scale-in delay-1">
                    <div className="sector-card-img-wrapper">
                        <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" alt="Healthcare Facilities" />
                        <div className="sector-card-badge"><i className="ph ph-hospital"></i></div>
                    </div>
                    <div className="sector-card-content">
                        <h3 className="sector-card-title">Healthcare Facilities</h3>
                        <p className="sector-card-text">Hospitals and clinics built with specialized MEP systems meeting the highest standards of safety, hygiene, and regulatory compliance.</p>
                        <a href="#" className="sector-card-link">Learn more <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>

                {/* Sector 6 */}
                <div className="sector-card-premium fade-in-up scale-in delay-2">
                    <div className="sector-card-img-wrapper">
                        <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop" alt="Educational Institutions" />
                        <div className="sector-card-badge"><i className="ph ph-student"></i></div>
                    </div>
                    <div className="sector-card-content">
                        <h3 className="sector-card-title">Educational Institutions</h3>
                        <p className="sector-card-text">Safe, durable, and inspiring campuses , schools, universities, and vocational training centers built for the future generation.</p>
                        <a href="#" className="sector-card-link">Learn more <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>

                {/* Sector 7 */}
                <div className="sector-card-premium fade-in-up scale-in">
                    <div className="sector-card-img-wrapper">
                        <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop" alt="Energy & Power" />
                        <div className="sector-card-badge"><i className="ph ph-lightning"></i></div>
                    </div>
                    <div className="sector-card-content">
                        <h3 className="sector-card-title">Energy & Power</h3>
                        <p className="sector-card-text">Critical electrical, instrumentation, testing and commissioning services for power generation and distribution infrastructure.</p>
                        <a href="#" className="sector-card-link">Learn more <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>

                {/* Sector 8 */}
                <div className="sector-card-premium fade-in-up scale-in delay-1">
                    <div className="sector-card-img-wrapper">
                        <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop" alt="Utilities & Pipeline" />
                        <div className="sector-card-badge"><i className="ph ph-drop"></i></div>
                    </div>
                    <div className="sector-card-content">
                        <h3 className="sector-card-title">Utilities & Pipeline</h3>
                        <p className="sector-card-text">Mechanical support for water networks, sewerage systems, and small to medium pipeline installation and maintenance projects.</p>
                        <a href="#" className="sector-card-link">Learn more <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>

                {/* Sector 9 */}
                <div className="sector-card-premium fade-in-up scale-in delay-2">
                    <div className="sector-card-img-wrapper">
                        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop" alt="General Contracting" />
                        <div className="sector-card-badge"><i className="ph ph-hard-hat"></i></div>
                    </div>
                    <div className="sector-card-content">
                        <h3 className="sector-card-title">General Contracting</h3>
                        <p className="sector-card-text">Skilled manpower and integrated logistics support for general contractors operating across all engineering disciplines.</p>
                        <a href="#" className="sector-card-link">Learn more <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>

                {/* Sector 10 */}
                <div className="sector-card-premium fade-in-up scale-in">
                    <div className="sector-card-img-wrapper">
                        <img src="images/oil and gas refineries.webp" alt="Oil & Refinery" />
                        <div className="sector-card-badge"><i className="ph ph-gas-pump"></i></div>
                    </div>
                    <div className="sector-card-content">
                        <h3 className="sector-card-title">Oil & Refinery</h3>
                        <p className="sector-card-text">High-pressure piping, static/rotating equipment rigging, mechanical shutdowns, and specialized refinery manpower supply.</p>
                        <a href="oil-refinery.html" className="sector-card-link">Learn more <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>

                {/* Sector 11 */}
                <div className="sector-card-premium fade-in-up scale-in delay-1">
                    <div className="sector-card-img-wrapper">
                        <img src="images/insulation.webp" alt="Petrochemical" />
                        <div className="sector-card-badge"><i className="ph ph-factory"></i></div>
                    </div>
                    <div className="sector-card-content">
                        <h3 className="sector-card-title">Petrochemical</h3>
                        <p className="sector-card-text">Advanced chemical piping, process skid integration, instrumentation loop checks, and intrinsically safe E&I distribution.</p>
                        <a href="petrochemical.html" className="sector-card-link">Learn more <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>

                {/* Sector 12 */}
                <div className="sector-card-premium fade-in-up scale-in delay-2">
                    <div className="sector-card-img-wrapper">
                        <img src="images/decommissioning.webp" alt="Fertilizer Industry" />
                        <div className="sector-card-badge"><i className="ph ph-leaf"></i></div>
                    </div>
                    <div className="sector-card-content">
                        <h3 className="sector-card-title">Fertilizer Industry</h3>
                        <p className="sector-card-text">Primary reformer catalyst tube welding, heavy equipment rigging, toxic gas safety compliance, and ASME certified welders.</p>
                        <a href="fertilizer.html" className="sector-card-link">Learn more <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Stats */}
    <div className="stats-strip">
        <div className="container">
            <div className="stats-board">
                <div className="stat-item scale-in"><h3><span className="counter-num" data-target="9" data-suffix="+">0</span></h3><p>Sectors Served</p></div>
                <div className="stat-item scale-in delay-1"><h3><span className="counter-num" data-target="150" data-suffix="+">0+</span></h3><p>Completed Projects</p></div>
                <div className="stat-item scale-in delay-2"><h3><span className="counter-num" data-target="500" data-suffix="+">0+</span></h3><p>Workforce Strength</p></div>
                <div className="stat-item scale-in delay-3"><h3><span className="counter-num" data-target="100" data-suffix="%">0%</span></h3><p>Client Satisfaction</p></div>
            </div>
        </div>
    </div>

    {/* Dark Image Section */}
    <section className="dark-image-section">
        <div className="dis-content fade-in-left">
            <span className="section-label white-label">Our Approach</span>
            <h2>Industry-Specific Solutions. Unified Quality Standard.</h2>
            <p>No matter which sector your project falls into, AXIS Infinity Structure applies the same rigorous quality control, safety management, and engineering professionalism. We adapt our methodology to your industry's specific regulatory requirements and operational demands.</p>
            <p>Our multi-disciplinary structure means we can rapidly mobilize specialized teams , civil, mechanical, electrical , simultaneously, slashing project timelines without compromising standards.</p>
            <a href="contact.html" className="btn btn-primary mt-4" style={{"marginTop":"20px","display":"inline-flex"}}>Discuss Your Project</a>
        </div>
        <div className="dis-image">
            <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop" alt="Engineering work" />
        </div>
    </section>

    {/* Section 1: Safety & Quality */}
    <section className="v2030-split-section bg-light">
        <div className="container">
            <div className="v2030-split-inner">
                <div className="v2030-split-text fade-in-left">
                    <span className="v2030-section-label" style={{"background":"var(--clr-navy)","color":"#fff"}}>Safety First</span>
                    <h2>Uncompromising Quality &amp; Safety Standards</h2>
                    <p>Regardless of the sector, our commitment to safety and quality remains our highest priority. We operate under stringent HSE protocols and internationally recognized quality management systems to protect our workforce and deliver flawless results.</p>
                    <ul>
                        <li><span className="anim-bullet dots"><span></span><span></span><span></span></span> Zero-harm safety culture implemented across all sites</li>
                        <li><span className="anim-bullet dots"><span></span><span></span><span></span></span> ISO-certified quality control and assurance programs</li>
                        <li><span className="anim-bullet dots"><span></span><span></span><span></span></span> Regular HSE audits and continuous workforce training</li>
                    </ul>
                </div>
                <div className="v2030-split-image fade-in-up" style={{"animation":"none","overflow":"hidden"}}>
                    <img src="images/safety_first_industry.webp" alt="Safety and Quality Standards" style={{"transition":"transform 0.6s ease"}} onmouseover="this.style.transform='scale(1.08)';" onmouseout="this.style.transform='scale(1)'" />
                </div>
            </div>
        </div>
    </section>

    {/* Section 2: Specialized Machinery */}
    <section className="v2030-split-section">
        <div className="container">
            <div className="v2030-split-inner">
                <div className="v2030-split-image anim-float fade-in-up">
                    <img src="images/transport_heavy_equipment.webp" alt="Specialized Machinery & Workforce" />
                </div>
                <div className="v2030-split-text fade-in-right">
                    <span className="v2030-section-label" style={{"background":"var(--clr-blue)","color":"#fff","border":"none"}}>Resources</span>
                    <h2>Specialized Machinery &amp; Skilled Workforce</h2>
                    <p>Different sectors demand different tools. AXIS INFINITY STRUCTURE maintains a comprehensive fleet of modern, heavy-duty equipment and a versatile pool of highly skilled professionals ready to mobilize for specialized industrial requirements.</p>
                    <ul>
                        <li><span className="anim-bullet dots"><span></span><span></span><span></span></span> Extensive fleet of heavy lifting and earthmoving equipment</li>
                        <li><span className="anim-bullet dots"><span></span><span></span><span></span></span> Highly trained operators, technicians, and engineers</li>
                        <li><span className="anim-bullet dots"><span></span><span></span><span></span></span> Rapid mobilization capabilities for urgent project demands</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    {/* Section 3: End-to-End Execution */}
    <section className="v2030-mega-banner fade-in-up">
        <div className="v2030-mega-bg" style={{"backgroundImage":"url('images/project_industrial_park.webp')"}}></div>
        <div className="v2030-mega-content">
            <span className="v2030-section-label" style={{"background":"rgba(11,143,200,0.2)","border":"1px solid rgba(11,143,200,0.4)","color":"#fff"}}>Lifecycle Support</span>
            <h2>End-to-End Project Execution</h2>
            <p>From initial design and site preparation to mechanical installation, electrical commissioning, and final handover, we provide seamless, integrated project delivery across all industrial and commercial sectors.</p>
        </div>
    </section>

    {/* CTA */}
    <section className="cta-banner" style={{"backgroundImage":"url('images/project_industrial_park.webp')"}}>
        <div className="container fade-in-up">
            <h2>Operating in Any of These Sectors?</h2>
            <p>Let AXIS INFINITY STRUCTURE become your trusted engineering and project support partner , from planning to handover.</p>
            <a href="https://wa.me/966507673009" target="_blank" className="btn btn-primary" style={{"display":"inline-flex","alignItems":"center","gap":"8px","backgroundColor":"var(--clr-blue)","borderColor":"var(--clr-blue)"}}><i className="ph ph-whatsapp-logo" style={{"fontSize":"1.35rem"}}></i> +966 50 767 3009</a>
        </div>
    </section>

        {/* Footer */}
    </>
  );
}
