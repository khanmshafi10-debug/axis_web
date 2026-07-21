import React, { useEffect } from 'react';

export default function Vision2030() {
  useEffect(() => {
    document.title = "Vision 2030 Alignment | AXIS INFINITY STRUCTURE";
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
/* ========================
   VISION 2030 PAGE STYLES
   Color Scheme: Dark Navy | Light Blue | White | Black
======================== */
.v2030-hero {
    position: relative;
    height: calc(100vh, 75px);
    max-height: 680px;
    min-height: 480px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: var(--clr-navy);
    padding-top: 100px; /* Offset for fixed header */
}
.v2030-hero-bg {
    position: absolute;
    inset: 0;
    background-image: url('images/vision_hero_bg_new.webp');
    background-size: cover;
    background-position: center;
    opacity: 0.4;
}
.v2030-hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(22,46,92,0.88) 0%, rgba(11,143,200,0.35) 100%);
}
.v2030-hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 30px 20px;
    max-width: 820px;
    margin: 0 auto;
}
.v2030-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(11,143,200,0.18);
    border: 1px solid rgba(11,143,200,0.45);
    backdrop-filter: blur(10px);
    padding: 6px 16px;
    border-radius: 50px;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    margin-bottom: 18px;
}
.v2030-badge i { color: var(--clr-blue); font-size: 1rem; }
.v2030-hero-content h1 {
    font-family: var(--font-heading);
    font-size: clamp(1.4rem, 2.8vw, 2.2rem);
    font-weight: 700;
    color: #ffffff;
    line-height: 1.25;
    margin-bottom: 12px;
    letter-spacing: -0.01em;
}
.v2030-hero-content h1 span { color: var(--clr-blue); }
.v2030-hero-content p {
    font-size: 0.95rem;
    font-weight: 400;
    color: rgba(255,255,255,0.8);
    max-width: 620px;
    margin: 0 auto 24px;
    line-height: 1.7;
}
.v2030-hero-cta {
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
}

/* Stat Strip */
.v2030-stats-strip {
    background: linear-gradient(90deg, #162E5C 0%, #0B2645 100%);
    padding: 40px 0;
    border-top: 3px solid var(--clr-blue);
}
.v2030-stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
}
@media (max-width: 768px) {
    .v2030-stats-grid { grid-template-columns: repeat(2, 1fr); }
}
.v2030-stat {
    text-align: center;
    padding: 20px;
    border-right: 1px solid rgba(255,255,255,0.1);
}
.v2030-stat:last-child { border-right: none; }
.v2030-stat-number {
    font-family: var(--font-heading);
    font-size: 2.4rem;
    font-weight: 800;
    color: var(--clr-blue);
    display: block;
    line-height: 1;
    margin-bottom: 8px;
}
.v2030-stat-label {
    color: rgba(255,255,255,0.7);
    font-size: 0.9rem;
    font-weight: 500;
}

/* Pillars Section */
.v2030-pillars {
    background: var(--clr-off-white);
    padding: 90px 0;
}
.v2030-section-label {
    display: inline-block;
    background: var(--clr-navy);
    color: #fff;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 6px 18px;
    border-radius: 50px;
    margin-bottom: 18px;
}
.v2030-section-title {
    font-family: var(--font-heading);
    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    font-weight: 800;
    color: var(--clr-navy);
    line-height: 1.2;
    margin-bottom: 15px;
}
.v2030-section-sub {
    color: var(--clr-charcoal);
    font-size: 1rem;
    line-height: 1.8;
    max-width: 650px;
}
.v2030-pillars-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
    margin-top: 50px;
}
@media (max-width: 900px) {
    .v2030-pillars-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
    .v2030-pillars-grid { grid-template-columns: 1fr; }
}
.v2030-pillar-card {
    background: #fff;
    border-radius: 16px;
    padding: 36px 28px;
    box-shadow: 0 4px 20px rgba(22,46,92,0.07);
    border: 1px solid rgba(22,46,92,0.09);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}
.v2030-pillar-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--clr-navy), var(--clr-blue));
    opacity: 0;
    transition: opacity 0.3s ease;
}
.v2030-pillar-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 45px rgba(22,46,92,0.14);
}
.v2030-pillar-card:hover::before { opacity: 1; }
.v2030-pillar-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #ddeef8, #b8dcf0);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    color: var(--clr-navy);
    margin-bottom: 22px;
}
.v2030-pillar-card h3 {
    font-family: var(--font-heading);
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--clr-navy);
    margin-bottom: 12px;
}
.v2030-pillar-card p {
    color: var(--clr-charcoal);
    font-size: 0.92rem;
    line-height: 1.7;
    margin: 0;
}

/* Commitment Section */
.v2030-commitment {
    background: var(--clr-navy);
    padding: 90px 0;
    position: relative;
    overflow: hidden;
}
.v2030-commitment::before {
    content: '';
    position: absolute;
    top: -150px; right: -150px;
    width: 500px; height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(11,143,200,0.12) 0%, transparent 70%);
}
.v2030-commitment::after {
    content: '';
    position: absolute;
    bottom: -100px; left: -100px;
    width: 400px; height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(11,143,200,0.08) 0%, transparent 70%);
}
.v2030-commitment-inner {
    position: relative; z-index: 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}
@media (max-width: 900px) {
    .v2030-commitment-inner { grid-template-columns: 1fr; gap: 40px; }
}
.v2030-commitment-text .v2030-section-label {
    background: rgba(11,143,200,0.2);
    color: var(--clr-blue);
    border: 1px solid rgba(11,143,200,0.35);
}
.v2030-commitment-text .v2030-section-title { color: #fff; }
.v2030-commitment-text p { color: rgba(255,255,255,0.75); line-height: 1.8; margin-bottom: 20px; }
.v2030-check-list {
    list-style: none;
    padding: 0; margin: 0;
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-top: 30px;
}
.v2030-check-list li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    color: rgba(255,255,255,0.85);
    font-size: 0.95rem;
    line-height: 1.6;
}
.v2030-check-list li i {
    color: var(--clr-blue);
    font-size: 1.2rem;
    flex-shrink: 0;
    margin-top: 2px;
}
.v2030-right-cards {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.v2030-right-card {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 14px;
    padding: 26px 28px;
    display: flex;
    gap: 18px;
    align-items: flex-start;
    transition: all 0.3s ease;
}
.v2030-right-card:hover {
    background: rgba(11,143,200,0.12);
    border-color: rgba(11,143,200,0.4);
    transform: translateX(5px);
}
.v2030-right-card i {
    font-size: 1.8rem;
    color: var(--clr-blue);
    flex-shrink: 0;
}
.v2030-right-card h4 {
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 6px;
}
.v2030-right-card p {
    color: rgba(255,255,255,0.65);
    font-size: 0.87rem;
    line-height: 1.6;
    margin: 0;
}

/* Projects Section */
.v2030-projects {
    background: #fff;
    padding: 90px 0;
}
.v2030-projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    margin-top: 50px;
}
@media (max-width: 900px) {
    .v2030-projects-grid { grid-template-columns: repeat(2,1fr); }
}
@media (max-width: 600px) {
    .v2030-projects-grid { grid-template-columns: 1fr; }
}
.v2030-project-card {
    position: relative;
    border-radius: 14px;
    overflow: hidden;
    height: 280px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.12);
}
.v2030-project-card img {
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}
.v2030-project-card:hover img { transform: scale(1.06); }
.v2030-project-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(22,46,92,0.92) 0%, transparent 60%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 25px;
}
.v2030-project-tag {
    display: inline-block;
    background: var(--clr-blue);
    color: #fff;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 4px 12px;
    border-radius: 50px;
    margin-bottom: 8px;
    width: fit-content;
}
.v2030-project-overlay h4 {
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    margin: 0;
}

/* CTA Banner */
.v2030-cta {
    background: var(--clr-off-white);
    padding: 80px 0;
    text-align: center;
}
.v2030-cta h2 {
    font-family: var(--font-heading);
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    font-weight: 800;
    color: var(--clr-navy);
    margin-bottom: 15px;
}
.v2030-cta p {
    color: var(--clr-charcoal);
    font-size: 1.05rem;
    max-width: 600px;
    margin: 0 auto 35px;
    line-height: 1.7;
}
.v2030-cta-btns {
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
}
/* New Sections */
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
    align-items: center;
    gap: 12px;
    font-size: 0.95rem;
    color: var(--clr-charcoal);
    margin-bottom: 12px;
    font-weight: 500;
}
.v2030-split-text ul li i {
    color: var(--clr-blue);
    font-size: 1.2rem;
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
    background-image: url('images/vision_image.webp');
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
      {/* Hero */}
    <section className="v2030-hero">
        <div className="v2030-hero-bg"></div>
        <div className="v2030-hero-overlay"></div>
        <div className="v2030-hero-content fade-in-up">
            <div className="v2030-badge">
                <i className="ph ph-star-four"></i>
                Kingdom of Saudi Arabia
            </div>
            <h1>Proudly Aligned with<br /><span>Vision 2030</span></h1>
            <p>AXIS INFINITY STRUCTURE is committed to contributing to Saudi Arabia's ambitious national transformation , delivering world-class engineering, infrastructure, and construction solutions that drive economic diversification and sustainable development.</p>
            <div className="v2030-hero-cta">
                <a href="#pillars" className="btn btn-primary">Explore Our Alignment</a>
                <a href="contact.html" className="btn btn-secondary">Partner With Us</a>
            </div>
        </div>
    </section>

    {/* Stats Strip */}
    <div className="v2030-stats-strip">
        <div className="container">
            <div className="v2030-stats-grid">
                <div className="v2030-stat">
                    <span className="v2030-stat-number">2030</span>
                    <span className="v2030-stat-label">National Transformation Goal</span>
                </div>
                <div className="v2030-stat">
                    <span className="v2030-stat-number">21+</span>
                    <span className="v2030-stat-label">Engineering Service Disciplines</span>
                </div>
                <div className="v2030-stat">
                    <span className="v2030-stat-number">100%</span>
                    <span className="v2030-stat-label">Commitment to Localization</span>
                </div>
                <div className="v2030-stat">
                    <span className="v2030-stat-number">Zero</span>
                    <span className="v2030-stat-label">Compromise on Quality &amp; Safety</span>
                </div>
            </div>
        </div>
    </div>

    {/* Pillars Section */}
    <section id="pillars" className="v2030-pillars">
        <div className="container">
            <div className="text-center">
                <span className="v2030-section-label">Our Contribution</span>
                <h2 className="v2030-section-title">How AXIS Infinity Structure Supports Vision 2030</h2>
                <p className="v2030-section-sub mx-auto">We actively contribute to the Kingdom's three core pillars , a Vibrant Society, a Thriving Economy, and an Ambitious Nation , through disciplined engineering delivery and workforce development.</p>
            </div>
            <div className="v2030-pillars-grid">
                <div className="v2030-pillar-card fade-in-up">
                    <div className="v2030-pillar-icon"><i className="ph ph-buildings"></i></div>
                    <h3>Infrastructure Development</h3>
                    <p>Contributing to Giga-Projects and national infrastructure programs through civil, structural, MEP, and industrial construction services that build the backbone of a modern Saudi Arabia.</p>
                </div>
                <div className="v2030-pillar-card fade-in-up delay-1">
                    <div className="v2030-pillar-icon"><i className="ph ph-users-three"></i></div>
                    <h3>Workforce Nationalization</h3>
                    <p>Supporting Saudization (Nitaqat) by creating employment opportunities, investing in skills development programs, and building a technically capable Saudi national workforce in engineering disciplines.</p>
                </div>
                <div className="v2030-pillar-card fade-in-up delay-2">
                    <div className="v2030-pillar-icon"><i className="ph ph-factory"></i></div>
                    <h3>Industrial Diversification</h3>
                    <p>Enabling the Kingdom's shift away from oil dependency by supporting industrial, manufacturing, logistics, and energy sector expansion with reliable engineering and manpower solutions.</p>
                </div>
                <div className="v2030-pillar-card fade-in-up">
                    <div className="v2030-pillar-icon"><i className="ph ph-leaf"></i></div>
                    <h3>Sustainable Engineering</h3>
                    <p>Incorporating sustainable construction practices, energy-efficient systems, and environmentally responsible project delivery that aligns with the Kingdom's Green Initiative targets.</p>
                </div>
                <div className="v2030-pillar-card fade-in-up delay-1">
                    <div className="v2030-pillar-icon"><i className="ph ph-lightning"></i></div>
                    <h3>Renewable Energy Projects</h3>
                    <p>Delivering civil, electrical, and instrumentation works for renewable energy installations , solar, wind, and hybrid power systems , that advance the Kingdom's clean energy goals.</p>
                </div>
                <div className="v2030-pillar-card fade-in-up delay-2">
                    <div className="v2030-pillar-icon"><i className="ph ph-chart-line-up"></i></div>
                    <h3>Quality &amp; Innovation</h3>
                    <p>Upholding international quality standards (ISO, ARAMCO, SEC) and continuously adopting advanced engineering technologies to deliver projects with precision, safety, and long-term durability.</p>
                </div>
            </div>
        </div>
    </section>

    {/* Commitment Section */}
    <section className="v2030-commitment">
        <div className="container">
            <div className="v2030-commitment-inner">
                <div className="v2030-commitment-text fade-in-left">
                    <span className="v2030-section-label">Our Pledge</span>
                    <h2 className="v2030-section-title" style={{"color":"#fff"}}>Built to Power the Kingdom's Future</h2>
                    <p>As Saudi Arabia embarks on one of the most ambitious national transformations in modern history, AXIS INFINITY STRUCTURE stands ready to be a trusted partner in that journey.</p>
                    <p>Our company was built on values that mirror Vision 2030's core principles: excellence, accountability, innovation, and commitment to the long-term prosperity of the Kingdom.</p>
                    <ul className="v2030-check-list">
                        <li><span className="anim-bullet dots"><span></span><span></span><span></span></span> Active contributor to national Giga-Project supply chains</li>
                        <li><span className="anim-bullet dots"><span></span><span></span><span></span></span> Supporting local content requirements and Saudization goals</li>
                        <li><span className="anim-bullet dots"><span></span><span></span><span></span></span> Zero-harm safety culture aligned with ARAMCO &amp; SEC standards</li>
                        <li><span className="anim-bullet dots"><span></span><span></span><span></span></span> Partnerships with certified Saudi subcontractors and suppliers</li>
                        <li><span className="anim-bullet dots"><span></span><span></span><span></span></span> Delivering multi-discipline projects with international quality benchmarks</li>
                    </ul>
                </div>
                <div className="v2030-right-cards fade-in-right">
                    <div className="v2030-right-card">
                        <i className="ph ph-city"></i>
                        <div>
                            <h4>NEOM &amp; Giga-Projects</h4>
                            <p>Providing specialist engineering and manpower support to mega-developments shaping the future of the Kingdom.</p>
                        </div>
                    </div>
                    <div className="v2030-right-card">
                        <i className="ph ph-sun"></i>
                        <div>
                            <h4>Clean Energy Transition</h4>
                            <p>Supporting Saudi Arabia's target of 50% renewable energy by 2030 through electrical, instrumentation, and civil engineering works.</p>
                        </div>
                    </div>
                    <div className="v2030-right-card">
                        <i className="ph ph-handshake"></i>
                        <div>
                            <h4>Local Partnerships</h4>
                            <p>Building strong partnerships with Saudi businesses and national institutions to grow local capacity and expertise in engineering.</p>
                        </div>
                    </div>
                    <div className="v2030-right-card">
                        <i className="ph ph-graduation-cap"></i>
                        <div>
                            <h4>Technical Training &amp; Development</h4>
                            <p>Investing in the training and professional development of Saudi national engineers, technicians, and skilled tradespeople.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Smart Infrastructure Section */}
    <section className="v2030-split-section">
        <div className="container">
            <div className="v2030-split-inner">
                <div className="v2030-split-image anim-float fade-in-up">
                    <img src="images/vision2030_riyadh.webp" alt="Smart Infrastructure & Digital Transformation" />
                </div>
                <div className="v2030-split-text fade-in-right">
                    <span className="v2030-section-label">Digital Future</span>
                    <h2>Smart Infrastructure &amp; Digital Transformation</h2>
                    <p>In line with Vision 2030's technological mandate, we are integrating digital engineering, modern methods of construction (MMC), and smart city infrastructure into our project delivery.</p>
                    <ul>
                        <li><i className="ph ph-check-circle-fill"></i> Implementation of advanced digital engineering tools</li>
                        <li><i className="ph ph-check-circle-fill"></i> Development of smart utility networks &amp; automated controls</li>
                        <li><i className="ph ph-check-circle-fill"></i> Sustainable, data-driven construction methodologies</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    {/* Mega Banner Section */}
    <section className="v2030-mega-banner fade-in-up">
        <div className="v2030-mega-bg"></div>
        <div className="v2030-mega-content">
            <span className="v2030-section-label" style={{"background":"rgba(11,143,200,0.2)","border":"1px solid rgba(11,143,200,0.4)","color":"#fff"}}>Giga-Projects</span>
            <h2>Powering the Kingdom's Mega-Developments</h2>
            <p>From NEOM to the Red Sea Project and Qiddiya, AXIS INFINITY STRUCTURE provides the critical engineering, manpower, and infrastructure support required to turn visionary blueprints into reality.</p>
        </div>
    </section>

    {/* Local Talent Section */}
    <section className="v2030-split-section bg-light">
        <div className="container">
            <div className="v2030-split-inner">
                <div className="v2030-split-text fade-in-left">
                    <span className="v2030-section-label">Saudization</span>
                    <h2>Empowering Local Talent</h2>
                    <p>We are deeply committed to the Kingdom's human capital development. Our Saudization initiatives focus on recruiting, training, and empowering Saudi nationals across engineering, technical, and management roles.</p>
                    <ul>
                        <li><i className="ph ph-check-circle-fill"></i> Comprehensive technical training for young Saudi engineers</li>
                        <li><i className="ph ph-check-circle-fill"></i> Fostering leadership through dedicated mentorship programs</li>
                        <li><i className="ph ph-check-circle-fill"></i> Strategic partnerships with local universities and institutes</li>
                    </ul>
                </div>
                <div className="v2030-split-image fade-in-up" style={{"animation":"none","overflow":"hidden"}}>
                    <img src="images/safety_ppe_engineers.webp" alt="Empowering Local Talent" style={{"transition":"transform 0.6s ease"}} onmouseover="this.style.transform='scale(1.08)';" onmouseout="this.style.transform='scale(1)'" />
                </div>
            </div>
        </div>
    </section>

    {/* Project Showcase */}
    <section className="v2030-projects">
        <div className="container">
            <div className="text-center">
                <span className="v2030-section-label">On the Ground</span>
                <h2 className="v2030-section-title">Delivering Vision 2030 Projects</h2>
                <p className="v2030-section-sub mx-auto">From large-scale civil infrastructure and water treatment facilities to industrial electrical works and renewable energy installations , our portfolio reflects the Kingdom's transformation in progress.</p>
            </div>
            <div className="v2030-projects-grid">
                <div className="v2030-project-card">
                    <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800&auto=format&fit=crop" alt="Urban Infrastructure" />
                    <div className="v2030-project-overlay">
                        <span className="v2030-project-tag">Civil Engineering</span>
                        <h4>Urban Infrastructure &amp; Roads</h4>
                    </div>
                </div>
                <div className="v2030-project-card">
                    <img src="images/sports_leisure_venue.webp" alt="Sports &amp; Entertainment" />
                    <div className="v2030-project-overlay">
                        <span className="v2030-project-tag">Entertainment</span>
                        <h4>Sports &amp; Leisure Venues</h4>
                    </div>
                </div>
                <div className="v2030-project-card">
                    <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop" alt="Solar Energy" />
                    <div className="v2030-project-overlay">
                        <span className="v2030-project-tag">Renewable Energy</span>
                        <h4>Solar &amp; Clean Energy</h4>
                    </div>
                </div>
                <div className="v2030-project-card">
                    <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop" alt="Industrial Facilities" />
                    <div className="v2030-project-overlay">
                        <span className="v2030-project-tag">Mechanical Works</span>
                        <h4>Industrial &amp; Oil &amp; Gas Facilities</h4>
                    </div>
                </div>
                <div className="v2030-project-card">
                    <img src="https://images.unsplash.com/photo-1529148482759-b35b25c5f217?q=80&w=800&auto=format&fit=crop" alt="Water Treatment" />
                    <div className="v2030-project-overlay">
                        <span className="v2030-project-tag">Water &amp; Utilities</span>
                        <h4>Water Treatment &amp; WASA Projects</h4>
                    </div>
                </div>
                <div className="v2030-project-card">
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" alt="Commercial Buildings" />
                    <div className="v2030-project-overlay">
                        <span className="v2030-project-tag">Construction</span>
                        <h4>Commercial &amp; Mixed-Use Developments</h4>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5">
                <a href="projects.html" className="btn btn-primary" style={{"padding":"14px 40px","fontSize":"1rem"}}>View All Projects <i className="ph ph-arrow-right"></i></a>
            </div>
        </div>
    </section>

    {/* CTA */}
    <section className="v2030-cta">
        <div className="container fade-in-up">
            <span className="v2030-section-label" style={{"marginBottom":"20px"}}>Join Us</span>
            <h2>Partner With AXIS Infinity Structure for Vision 2030 Projects</h2>
            <p>Whether you are a developer, government entity, or main contractor working on Vision 2030 initiatives , AXIS Infinity Structure is your trusted engineering and construction partner.</p>
            <div className="v2030-cta-btns">
                <a href="contact.html" className="btn btn-primary" style={{"padding":"14px 35px","fontSize":"1rem"}}>Get in Touch <i className="ph ph-paper-plane-tilt"></i></a>
                <a href="services.html" className="btn btn-outline-blue">Our Services</a>
            </div>
        </div>
    </section>

        {/* Footer */}
    </>
  );
}
