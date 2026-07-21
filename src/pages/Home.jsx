import React, { useEffect, useState } from 'react';
import { AnimatedPage } from '../components/common/ScrollReveal';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of projects does AXIS INFINITY STRUCTURE handle?",
      answer: "AXIS Infinity Structure handles a full spectrum of civil engineering, mechanical works, electrical & instrumentation, pre-commissioning, manpower supply, and transport rental projects. We operate across industrial, commercial, residential, healthcare, infrastructure, and energy sectors."
    },
    {
      question: "How quickly can AXIS Infinity Structure mobilize a team to our project site?",
      answer: "Depending on project scale and location, AXIS Infinity Structure can mobilize initial teams within 48 to 72 hours for urgent requirements. Larger deployments are typically mobilized within 1 to 2 weeks following scope confirmation and documentation."
    },
    {
      question: "Does AXIS Infinity Structure provide transport with or without drivers?",
      answer: "Yes. We offer both options — fully managed transport with professional, licensed drivers; or bare vehicle rental for clients who prefer to use their own operators. Fleet includes buses, coasters, vans, and premium SUVs."
    },
    {
      question: "How does AXIS Infinity Structure ensure the quality of deployed manpower?",
      answer: "All manpower candidates undergo rigorous vetting including trade test verification, certification checks, medical fitness evaluation, and safety compliance assessment before being placed on any project. We also conduct continuous on-site performance monitoring."
    },
    {
      question: "Can AXIS Infinity Structure handle projects requiring multiple engineering disciplines simultaneously?",
      answer: "Absolutely. This is one of AXIS Infinity Structure's key differentiators. Our multi-disciplinary structure allows us to deploy Civil, Mechanical, and Electrical teams simultaneously under unified project management, reducing coordination complexity and accelerating schedules."
    },
    {
      question: "Does AXIS Infinity Structure operate on short-term contracts or long-term engagements?",
      answer: "We are flexible. AXIS Infinity Structure serves clients on short-term sprint projects, single-trade task orders, and multi-year long-term strategic partnerships. Contract terms are customized based on client requirements and project scope."
    }
  ];

  useEffect(() => {
    document.title = "AXIS INFINITY STRUCTURE | Engineering, Construction & Infrastructure Solutions";
    window.scrollTo(0, 0);

    function drawMobileSnake() {
      const grid = document.querySelector('.timeline-grid-new');
      if (!grid) return;
      
      grid.style.position = 'relative';
      
      if (window.innerWidth > 1200) {
        const svg = document.getElementById('mobile-snake-svg');
        if (svg) svg.style.display = 'none';
        return;
      }
      
      let svg = document.getElementById('mobile-snake-svg');
      if (!svg) {
        svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.id = 'mobile-snake-svg';
        svg.style.position = 'absolute';
        svg.style.top = '0';
        svg.style.left = '0';
        svg.style.zIndex = '1';
        svg.style.pointerEvents = 'none';
        svg.style.overflow = 'visible';
        
        const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path1.id = 'mobile-snake-path1';
        path1.setAttribute('fill', 'none');
        path1.setAttribute('stroke', '#0B8FC8');
        path1.setAttribute('stroke-width', '12');
        
        const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path2.id = 'mobile-snake-path2';
        path2.setAttribute('fill', 'none');
        path2.setAttribute('stroke', '#0A192F');
        path2.setAttribute('stroke-width', '8');
        
        const path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path3.id = 'mobile-snake-path3';
        path3.setAttribute('fill', 'none');
        path3.setAttribute('stroke', '#ffffff');
        path3.setAttribute('stroke-width', '2');
        path3.setAttribute('stroke-dasharray', '8, 8');
        path3.style.animation = 'svg-snake-move 0.8s linear infinite';
        
        const style = document.createElement('style');
        style.innerHTML = `@keyframes svg-snake-move { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -16; } }`;
        svg.appendChild(style);
        svg.appendChild(path1);
        svg.appendChild(path2);
        svg.appendChild(path3);
        grid.insertBefore(svg, grid.firstChild);
      }
      
      const gridRect = grid.getBoundingClientRect();
      if (gridRect.width === 0 || gridRect.height === 0) return;

      svg.style.display = 'block';
      svg.setAttribute('width', gridRect.width);
      svg.setAttribute('height', gridRect.height);
      svg.style.width = gridRect.width + 'px';
      svg.style.height = gridRect.height + 'px';
      
      const badges = Array.from(grid.querySelectorAll('.timeline-card-new .timeline-badge-new'));
      if (badges.length === 0) return;
      
      let d = '';
      
      for (let i = 0; i < badges.length - 1; i++) {
        const b1 = badges[i];
        const b2 = badges[i+1];
        
        const r1 = b1.getBoundingClientRect();
        const r2 = b2.getBoundingClientRect();
        
        const x1 = r1.left - gridRect.left + r1.width / 2;
        const y1 = r1.top - gridRect.top + r1.height / 2;
        
        const x2 = r2.left - gridRect.left + r2.width / 2;
        const y2 = r2.top - gridRect.top + r2.height / 2;
        
        const radius = 20;
        const verticalDist = y2 - y1;
        let r = radius;
        if (verticalDist < radius * 2) {
          r = verticalDist / 2;
        }
        
        const y_mid = y1 + verticalDist / 2;
        
        if (x2 > x1) {
          if (i === 0) { d += ` M ${x1} ${y1}`; } else { d += ` L ${x1} ${y1}`; }
          d += ` L ${x1} ${y_mid - r}`;
          d += ` Q ${x1} ${y_mid} ${x1 + r} ${y_mid}`;
          d += ` L ${x2 - r} ${y_mid}`;
          d += ` Q ${x2} ${y_mid} ${x2} ${y_mid + r}`;
          d += ` L ${x2} ${y2}`;
        } else {
          if (i === 0) { d += ` M ${x1} ${y1}`; } else { d += ` L ${x1} ${y1}`; }
          d += ` L ${x1} ${y_mid - r}`;
          d += ` Q ${x1} ${y_mid} ${x1 - r} ${y_mid}`;
          d += ` L ${x2 + r} ${y_mid}`;
          d += ` Q ${x2} ${y_mid} ${x2} ${y_mid + r}`;
          d += ` L ${x2} ${y2}`;
        }
      }
      
      const p1 = document.getElementById('mobile-snake-path1');
      const p2 = document.getElementById('mobile-snake-path2');
      const p3 = document.getElementById('mobile-snake-path3');
      if (p1) p1.setAttribute('d', d);
      if (p2) p2.setAttribute('d', d);
      if (p3) p3.setAttribute('d', d);
    }

    drawMobileSnake();
    window.addEventListener('resize', drawMobileSnake);
    window.addEventListener('scroll', drawMobileSnake);

    const t1 = setTimeout(drawMobileSnake, 100);
    const t2 = setTimeout(drawMobileSnake, 400);
    const t3 = setTimeout(drawMobileSnake, 800);
    const t4 = setTimeout(drawMobileSnake, 1500);

    let ro = null;
    const gridEl = document.querySelector('.timeline-grid-new');
    if (gridEl && window.ResizeObserver) {
      ro = new ResizeObserver(drawMobileSnake);
      ro.observe(gridEl);
    }

    return () => {
      window.removeEventListener('resize', drawMobileSnake);
      window.removeEventListener('scroll', drawMobileSnake);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      if (ro) ro.disconnect();
    };
  }, []);

  return (
    <AnimatedPage>

      <style dangerouslySetInnerHTML={{ __html: `
        /* FAQ Accordion Styling matching Contact page */
        .home-faq-item {
            background: #ffffff !important;
            border: 2px solid #e2e8f0 !important;
            border-radius: 16px !important;
            padding: 22px 28px !important;
            margin-bottom: 16px !important;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03) !important;
            cursor: pointer !important;
        }

        .home-faq-item:hover {
            border-color: #0b8fc8 !important;
            box-shadow: 0 10px 25px rgba(11, 143, 200, 0.12) !important;
            transform: translateY(-2px) !important;
        }

        .home-faq-question {
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            font-weight: 700 !important;
            font-size: 1.05rem !important;
            color: #0b2240 !important;
            user-select: none !important;
        }

        .home-faq-icon {
            font-size: 1.3rem !important;
            color: #0b8fc8 !important;
            transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
            flex-shrink: 0;
            margin-left: 12px;
        }

        .home-faq-item.active .home-faq-icon {
            transform: rotate(180deg) !important;
            color: #0072ff !important;
        }

        .home-faq-answer {
            max-height: 0 !important;
            overflow: hidden !important;
            padding-top: 0 !important;
            margin-top: 0 !important;
            border-top: 1px solid transparent !important;
            color: #4b5563 !important;
            line-height: 1.75 !important;
            font-size: 0.95rem !important;
            transition: all 0.35s ease-out !important;
            opacity: 0 !important;
        }

        .home-faq-item.active .home-faq-answer {
            max-height: 500px !important;
            margin-top: 14px !important;
            padding-top: 14px !important;
            border-top-color: #e2e8f0 !important;
            opacity: 1 !important;
        }

/* INFOGRAPHIC TEAM SECTION */
.info-team-section {
    background-color: #faebd7; /* Warm Peach */
    padding: 80px 0;
    font-family: 'Merriweather', serif;
}

.info-split-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
}

.info-left {
    flex: 1;
    min-width: 300px;
    padding-right: 40px;
}

.info-right {
    flex: 1.5;
    min-width: 400px;
    display: flex;
    justify-content: center;
    background: transparent;
}

.info-title {
    font-size: 3rem;
    font-weight: 800;
    color: #0c4f42; /* Dark Green */
    line-height: 1.2;
    margin-bottom: 30px;
    font-family: 'Merriweather', serif;
}

.info-illustration {
    width: 100%;
    max-width: 400px;
    margin-bottom: 30px;
    border-radius: 20px;
    mix-blend-mode: multiply; /* Helps it blend into the peach background */
}

.info-box {
    background-color: #0c4f42;
    color: white;
    padding: 30px;
    border-radius: 12px;
    font-size: 1.1rem;
    line-height: 1.6;
    display: flex;
    align-items: center;
    gap: 20px;
}

.info-box-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid white;
    position: relative;
}
.info-box-icon::before, .info-box-icon::after {
    content: ''; position: absolute; background: white; border-radius: 50%;
}
.info-box-icon::before { width: 10px; height: 10px; bottom: -5px; left: -10px; }
.info-box-icon::after { width: 10px; height: 10px; bottom: -5px; right: -10px; }

/* Infographic Tree Lines */
.info-tree {
    text-align: center;
}
.info-tree ul {
    padding-top: 30px;
    position: relative;
    display: flex;
    justify-content: center;
    padding-left: 0;
    margin: 0;
}
.info-tree li {
    float: left;
    text-align: center;
    list-style-type: none;
    position: relative;
    padding: 30px 20px 0 20px;
}

.info-tree li::before, .info-tree li::after {
    content: '';
    position: absolute;
    top: 0;
    right: 50%;
    border-top: 2px solid #0c4f42;
    width: 50%;
    height: 30px;
}
.info-tree li::after {
    right: auto;
    left: 50%;
    border-left: 2px solid #0c4f42;
}

.info-tree li:only-child::after, .info-tree li:only-child::before {
    display: none;
}
.info-tree li:only-child {
    padding-top: 0;
}
.info-tree li:first-child::before, .info-tree li:last-child::after {
    border: 0 none;
}
.info-tree li:last-child::before {
    border-right: 2px solid #0c4f42;
}
.info-tree ul ul::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    border-left: 2px solid #0c4f42;
    width: 0;
    height: 30px;
}

/* Nodes */
.info-node {
    display: inline-block;
    text-align: center;
    text-decoration: none;
    position: relative;
}

.info-circle {
    width: 100px;
    height: 100px;
    background-color: white; /* Inner gap color */
    border-radius: 50%;
    margin: 0 auto 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 4px; /* Size of the inner gap */
    border: 3px solid #0c4f42; /* Outer premium ring */
    box-shadow: 0 10px 25px rgba(12, 79, 66, 0.15); /* Soft depth shadow */
}

.info-circle img {
    background-color: #0c4f42; /* Ensure image background acts as the inner boundary */
}

.info-circle img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.info-node h4 {
    color: #0c4f42;
    font-size: 1.05rem;
    font-weight: 800;
    margin: 0 0 8px 0;
    position: relative;
    padding-bottom: 8px;
}
.info-node h4::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 25px;
    height: 2px;
    background-color: #0c4f42;
    opacity: 0.5;
}

.info-node p {
    color: #0c4f42;
    font-size: 0.85rem;
    font-style: italic;
    margin: 0;
}


/* MODERN SAAS TEAM DESIGN */
.modern-team-section {
    padding: 100px 0;
    background: #f8fafc; /* Very light slate */
    font-family: 'Inter', sans-serif;
}

.modern-section-title {
    text-align: center;
    margin-bottom: 60px;
}
.modern-section-title h2 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #0f172a;
    letter-spacing: -0.02em;
    margin-bottom: 15px;
}
.modern-section-title p {
    color: #64748b;
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
}

.modern-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
}

.modern-card {
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
    border: 1px solid #e2e8f0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    flex: 1 1 280px;
    max-width: 320px;
    display: flex;
    flex-direction: column;
}

.modern-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
    border-color: #cbd5e1;
}

.modern-card-img {
    height: 300px;
    width: 100%;
    position: relative;
    background: #f1f5f9;
}

.modern-card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
}

.modern-card-body {
    padding: 24px;
    text-align: left;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.modern-role {
    color: #3b82f6; /* Modern Blue */
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 8px;
}

.modern-name {
    color: #0f172a;
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0;
    font-family: 'Inter', sans-serif;
}

/* Tier Headings for Full Team Page */
.modern-tier-wrapper {
    margin-bottom: 80px;
}

.modern-tier-header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-bottom: 40px;
}

.modern-tier-header::before, .modern-tier-header::after {
    content: '';
    height: 1px;
    background: #cbd5e1;
    flex-grow: 1;
    max-width: 200px;
}

.modern-tier-header h3 {
    color: #475569;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin: 0;
    white-space: nowrap;
}

@media (max-width: 768px) {
    .modern-card { max-width: 100%; }
}


/* DARK POLAROID TEAM DESIGN */
.polaroid-section {
    background-color: var(--clr-navy); /* Dark charcoal */
    padding: 100px 0;
    font-family: 'Inter', sans-serif;
}

.polaroid-header {
    text-align: center;
    margin-bottom: 70px;
    color: #e5e3db; /* Off-white / Beige */
}

.polaroid-header h3 {
    color: rgba(255, 255, 255, 0.8);
    font-size: 2.2rem;
    font-weight: 400;
    margin: 0;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.polaroid-header h2 {
    color: var(--clr-white);
    font-size: 5.5rem;
    font-weight: 900;
    margin: -10px 0 0 0;
    text-transform: uppercase;
    letter-spacing: -2px;
    line-height: 1;
}

.polaroid-category {
    margin-bottom: 80px;
}

.polaroid-category-title {
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 40px;
}

.polaroid-category-title h4 {
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0;
    display: inline-block;
    padding-bottom: 10px;
    border-bottom: 3px solid var(--clr-blue);
    text-transform: uppercase;
    letter-spacing: 2px;
}

.polaroid-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    max-width: 1100px;
    margin: 0 auto;
}

.polaroid-card {
    flex: 0 1 320px;
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
    cursor: pointer;
    background: #000;
    padding: 0;
    border: none;
    height: 420px;
}

.polaroid-img-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0; left: 0;
    border-radius: 0;
}

.polaroid-img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
    opacity: 0.85;
}

.polaroid-card:hover .polaroid-img-wrapper img {
    transform: scale(1.05);
    opacity: 0.85;
}

.polaroid-info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 60px 20px 30px;
    background: linear-gradient(to top, rgba(10, 25, 47, 0.95) 0%, rgba(10, 25, 47, 0.6) 70%, transparent 100%);
    text-align: center;
    transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}

.polaroid-card:hover .polaroid-info {
    padding-bottom: 40px;
    background: linear-gradient(to top, var(--clr-navy) 0%, rgba(10, 25, 47, 0.8) 80%, transparent 100%);
}

.polaroid-info::before {
    display: none;
}

.polaroid-name {
    color: var(--clr-white);
    font-size: 1.5rem;
    font-weight: 800;
    margin: 0 0 5px 0;
    transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}

.polaroid-card:hover .polaroid-name {
    color: var(--clr-blue);
}

.polaroid-role {
    color: rgba(255,255,255,0.7);
    font-size: 0.95rem;
    font-weight: 600;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    opacity: 1;
    transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}

.polaroid-card:hover .polaroid-role {
    color: var(--clr-white);
}

@media (max-width: 768px) {
    .polaroid-header h2 { font-size: 3.5rem; }
    .polaroid-header h3 { font-size: 1.5rem; }
}
/* Marquee Slider */
.marquee-wrapper {
    overflow: hidden;
    width: 100%;
    mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
}
.marquee-track {
    display: flex;
    gap: 60px;
    width: max-content;
    animation: marqueeSlide 25s linear infinite;
}
.marquee-wrapper:hover .marquee-track {
    animation-play-state: paused;
}
@keyframes marqueeSlide {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

.strip-grid-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 12px 25px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-left: 4px solid var(--clr-blue);
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    backdrop-filter: blur(5px);
    transition: all 0.3s ease;
}
.strip-grid-item:hover {
    border-left-color: #E0930F;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.05) 100%);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.3);
}
.strip-grid-item i {
    font-size: 2.2rem;
    color: var(--clr-blue);
    transition: all 0.3s ease;
}
.strip-grid-item:hover i {
    transform: scale(1.1);
    color: #E0930F;
}
i.active-gold-global,
.strip-grid-item i.active-gold-global {
    color: #E0930F !important;
    text-shadow: 0 0 10px rgba(224, 147, 15, 0.4) !important;
}
.strip-grid-item span {
    font-family: var(--font-heading);
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--clr-white);
    line-height: 1.2;
}
@media (max-width: 768px) {
    .strip-grid-item { min-width: 140px; padding: 10px 15px; border-left-width: 3px; }
    .strip-grid-item i { font-size: 1.8rem; }
    .strip-grid-item span { font-size: 0.9rem; }
}


/* NEW PREMIUM HERO DESIGN */
.premium-hero-wrapper {
    background-color: #0a192f; /* Dark Navy background */
    padding: 135px 20px 40px;
    position: relative;
    overflow: hidden;
    font-family: 'Inter', sans-serif;
}

.premium-hero-wrapper::before,
.premium-hero-wrapper::after {
    content: '';
    position: absolute;
    border: 1px solid rgba(11, 143, 200, 0.15); /* Light blue faint circles */
    border-radius: 50%;
}
.premium-hero-wrapper::before {
    width: 600px;
    height: 600px;
    top: -200px;
    left: -200px;
}
.premium-hero-wrapper::after {
    width: 800px;
    height: 800px;
    bottom: -300px;
    right: -100px;
}

.premium-hero-card {
    background-color: #ffffff;
    border-radius: 30px;
    max-width: 1300px;
    margin: 0 auto;
    padding: 40px;
    display: flex;
    gap: 40px;
    position: relative;
    z-index: 2;
    box-shadow: 0 15px 40px rgba(0,0,0,0.2);
}

.premium-hero-left {
    flex: 1.1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
}

.premium-hero-right {
    flex: 1;
    display: flex;
    gap: 15px;
    align-items: stretch;
}

.premium-hero-title {
    font-size: 2.8rem;
    font-weight: 800;
    color: #2b3a4a;
    line-height: 1.15;
    margin-bottom: 15px;
    font-family: 'Inter', sans-serif;
}

.premium-hero-text {
    font-size: 1rem;
    color: #555;
    margin-bottom: 25px;
    line-height: 1.5;
}

.premium-hero-actions {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    margin-bottom: 30px;
}

.premium-btn-primary {
    background-color: #0b8fc8;
    color: white;
    padding: 12px 28px;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
    transition: 0.3s;
    font-size: 1rem;
    border: 2px solid #0b8fc8;
    display: inline-block;
}
.premium-btn-primary:hover {
    background-color: #0977a6;
    border-color: #0977a6;
    color: white;
}

.premium-btn-secondary {
    background-color: #ffffff;
    color: #0b8fc8;
    padding: 12px 28px;
    border-radius: 8px;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 1rem;
    border: 2px solid #0b8fc8;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 4px 12px rgba(11, 143, 200, 0.15);
}
.premium-btn-secondary:hover {
    background-color: #0b8fc8;
    color: #ffffff;
    border-color: #0b8fc8;
}
.premium-btn-secondary .icon-circle {
    width: 32px;
    height: 32px;
    background-color: #0b8fc8;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    transition: all 0.3s ease;
}
.premium-btn-secondary:hover .icon-circle {
    background-color: #ffffff;
    color: #0b8fc8;
    transform: rotate(45deg);
}

.premium-testimonial {
    position: relative;
    padding-top: 20px;
    display: flex;
    gap: 15px;
    align-items: center;
}
.premium-testimonial::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 1px;
    background-color: #eaeaea;
}
.premium-testimonial img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
}
.premium-testimonial p {
    font-size: 0.9rem;
    color: #555;
    margin: 0;
    font-weight: 500;
}
.premium-testimonial strong {
    display: block;
    font-size: 0.85rem;
    color: #222;
    margin-top: 4px;
    font-weight: 700;
}



.premium-image-col {
    flex: 1;
    position: relative;
    border-radius: 16px;
    overflow: visible; 
    min-height: 380px;
}
.premium-image-col .img-wrapper {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    overflow: hidden;
}
.premium-image-col .img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}
.premium-image-col:hover .img-wrapper img {
    transform: scale(1.05);
}

.premium-badge {
    position: absolute;
    top: 30px;
    right: -40px;
    width: 100px;
    height: 100px;
    background-color: #0b8fc8;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    box-shadow: 0 10px 25px rgba(11, 143, 200, 0.4);
    z-index: 10;
    cursor: pointer;
    transition: all 0.3s ease;
}
/* .premium-badge:hover removed as per user request */
@keyframes rotateText {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@media (max-width: 1200px) {
    .premium-hero-title {
        font-size: 2.4rem;
    }
}
@media (max-width: 992px) {
    .premium-hero-card {
        flex-direction: column;
    }
    .premium-hero-right {
        flex-direction: column;
    }
    .premium-image-col {
        height: 350px;
        min-height: auto;
    }
    .premium-badge {
        right: 20px;
    }
}
@media (max-width: 768px) {
    .premium-hero-wrapper {
        padding: 95px 20px 40px;
    }
    .premium-badge {
        width: 90px !important;
        height: 90px !important;
    }
    .premium-badge svg {
        width: 80px !important;
        height: 80px !important;
    }
    .premium-badge i {
        font-size: 24px !important;
    }
}
@media (max-width: 576px) {
    .premium-hero-actions {
        flex-direction: column;
        gap: 15px;
        width: 100%;
    }
    .premium-hero-actions a {
        width: 100%;
        text-align: center;
        justify-content: center;
    }
}
.hero-center-stamp {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 140px;
    height: 140px;
    border-radius: 50%;
    border: 4px solid #ffffff;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    z-index: 10;
    background-color: #ffffff;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}
.hero-center-stamp img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.about-badge {
    bottom: -20px !important;
    top: auto !important;
    right: -20px !important;
}
.static-capabilities-strip {
    background-color: #ffffff;
    padding: 20px 0;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
    z-index: 10;
}
.capabilities-marquee-wrapper {
    overflow: hidden;
    width: 100%;
}
.capabilities-marquee-track {
    display: flex;
    gap: 60px;
    width: max-content;
    animation: marqueeSlide 30s linear infinite;
}
.capabilities-marquee-wrapper:hover .capabilities-marquee-track {
    animation-play-state: paused;
}
.capabilities-strip-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
}
.capabilities-strip-item i {
    color: #0b8fc8;
    font-size: 1.55rem;
    display: flex;
    align-items: center;
}
.capabilities-strip-item span {
    color: #0B1F3A;
    font-size: 0.95rem;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
    white-space: nowrap;
}
@media (max-width: 768px) {
    .capabilities-marquee-track {
        gap: 40px;
        animation-duration: 20s;
    }
}


/* PREMIUM ABOUT SECTION */
.premium-about-section {
    padding: 100px 0;
    background-color: #f8fbff;
    position: relative;
    overflow: hidden;
}
.premium-about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 70px;
    align-items: center;
}
@media (max-width: 992px) {
    .premium-about-grid {
        display: flex;
        flex-direction: column-reverse;
        gap: 60px;
    }
    .about-img-main-wrapper {
        height: 320px;
    }
    .about-bullet-list {
        margin-bottom: 30px !important;
    }
    .premium-about-right {
        text-align: center;
    }
    .premium-about-right p {
        text-align: left;
    }
    .premium-about-right .btn-new-style {
        margin: 0 auto;
        display: inline-flex !important;
    }
}
@keyframes flashOutAnim {
    0% { transform: scale(0.85); opacity: 0; filter: brightness(2) contrast(1.2); }
    100% { transform: scale(1); opacity: 1; filter: brightness(1) contrast(1); }
}
.about-images-wrapper.visible {
    animation: flashOutAnim 1s cubic-bezier(0.1, 0.8, 0.2, 1) forwards !important;
}
.about-images-wrapper {
    position: relative;
    display: block;
    max-width: 90%;
    margin: 20px auto 0 20px;
}
.about-img-main-outer {
    position: relative;
    z-index: 2;
}
.about-img-main-outer::before {
    content: '';
    position: absolute;
    top: -12px;
    left: -12px;
    right: -12px;
    bottom: -12px;
    border: 3px solid #0b8fc8;
    border-radius: 32px;
    z-index: -1;
    pointer-events: none;
}
.about-img-main-wrapper {
    width: 100%;
    height: 500px;
    border-radius: 20px;
    position: relative;
    box-shadow: 0 25px 50px rgba(10, 25, 47, 0.3);
    overflow: hidden;
}
.about-img-main {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.about-img-main-wrapper:hover .about-img-main {
    transform: scale(1.1);
}
.premium-about-content .section-label-new {
    color: #E2940F;
    font-weight: 600;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
}
.premium-about-content .section-label-new::before {
    content: '';
    display: inline-block;
    width: 35px;
    height: 2px;
    background-color: #E2940F;
    flex-shrink: 0;
}
.premium-about-content h2 {
    font-size: clamp(1.7rem, 2.8vw, 2.2rem);
    color: #0a192f;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 25px;
}
.premium-about-content p {
    color: #555;
    font-size: 1.05rem;
    line-height: 1.7;
    margin-bottom: 20px;
}
.about-bullet-list {
    list-style: none;
    padding: 0;
    margin: 30px 0 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px 20px;
}
.about-bullet-list li {
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 700;
    color: #0a192f;
    font-size: 1rem;
}
@keyframes pulseTick {
    0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(11, 143, 200, 0.4); }
    50% { transform: scale(1.15); box-shadow: 0 0 0 10px rgba(11, 143, 200, 0); }
}
.about-bullet-list li i {
    color: #0b8fc8;
    font-size: 1.4rem;
    background: rgba(11, 143, 200, 0.1);
    padding: 8px;
    border-radius: 50%;
    animation: pulseTick 2s infinite;
}
.about-bullet-list li:nth-child(1) i { animation-delay: 0s; }
.about-bullet-list li:nth-child(2) i { animation-delay: 0.3s; }
.about-bullet-list li:nth-child(3) i { animation-delay: 0.6s; }
.about-bullet-list li:nth-child(4) i { animation-delay: 0.9s; }
@media (max-width: 576px) {
    .about-bullet-list {
        grid-template-columns: 1fr;
    }
    .about-experience-badge {
        left: 10px;
        bottom: 10px;
        padding: 20px;
    }
}


                            .interactive-stamp {
                                width: 100%; height: 100%; 
                                object-fit: cover; 
                                border-radius: 50%;
                                transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                                cursor: pointer;
                            }
                            .interactive-stamp:hover {
                                transform: rotate(-15deg) scale(1.05);
                            }
                            .interactive-stamp:active {
                                transform: rotate(-25deg) scale(0.95);
                            }
                        

/* NEW WHY CHOOSE AXIS Infinity Structure DESIGN */
.why-section-new {
    background-color: #0a192f;
    padding: 80px 0;
}
.why-header-new {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    flex-wrap: wrap;
    gap: 30px;
}
.section-label-new {
    color: #E2940F;
    font-weight: 600;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
}
.section-label-new::before {
    content: '';
    display: inline-block;
    width: 35px;
    height: 2px;
    background-color: #E2940F;
    flex-shrink: 0;
}
.why-header-left h2 {
    font-size: clamp(1.8rem, 3.2vw, 2.2rem);
    color: #ffffff;
    font-weight: 800;
    line-height: 1.2;
    margin: 0;
}
.why-header-left p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.05rem;
    line-height: 1.6;
    margin-top: 15px;
    max-width: 700px;
}
.why-header-right {
    display: flex;
    align-items: center;
}
.btn-new-style {
    background: #0b8fc8;
    color: #fff;
    padding: 10px 10px 10px 25px;
    border-radius: 40px;
    text-decoration: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 15px;
    transition: 0.3s;
}
.btn-new-style:hover {
    background: #0a192f;
}
.btn-new-style .icon-circle {
    background: #ffffff;
    color: #0b8fc8;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
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
}
.sector-card-badge i {
    color: #fff !important;
    font-size: 2rem;
}
.btn-new-style .icon-circle {
    transition: 0.3s;
}
.btn-new-style:hover .icon-circle {
    background: #0b8fc8;
    color: #ffffff;
}
.btn-new-style:hover .icon-circle i {
    color: #ffffff !important;
}

@keyframes floatImage {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
}
.why-header-image {
    flex: 1;
    min-width: 280px;
    max-width: 480px;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    aspect-ratio: 1.35;
    border: 3px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 15px 35px rgba(0,0,0,0.3);
    animation: floatImage 6s ease-in-out infinite;
}
.why-header-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.why-header-image:hover img {
    transform: scale(1.05);
}

.why-features-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 40px;
}
.why-feature-card-horizontal {
    background-color: transparent;
    border: none;
    padding: 0;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    cursor: pointer;
}
.why-feature-card-horizontal:hover {
    transform: translateY(-3px);
    background-color: transparent;
}
.why-feature-card-horizontal .why-feature-icon {
    margin-bottom: 0;
    display: flex;
    align-items: center;
}
.why-feature-card-horizontal .why-feature-icon i {
    font-size: 2rem;
    color: #0b8fc8;
    transition: color 0.3s ease, transform 0.3s ease;
}
.why-feature-card-horizontal.active .why-feature-icon i {
    color: #ffd700 !important;
    transform: scale(1.15);
}
.why-feature-card-horizontal h3 {
    color: #ffffff;
    font-size: 1.15rem;
    font-weight: 700;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
}
.why-feature-card-horizontal p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.92rem;
    line-height: 1.6;
    margin: 0;
}

@media(max-width: 992px) {
    .why-header-new {
        flex-direction: column;
        align-items: center;
        gap: 35px;
        text-align: center;
    }
    .why-header-left {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .why-header-left h2 br {
        display: none;
    }
    .why-header-left .btn-new-style {
        margin: 0 auto;
    }
    .why-features-row {
        grid-template-columns: 1fr;
        gap: 20px;
    }
}


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


                        .compliance-item {
                            transition: transform 0.3s ease;
                            padding: 8px 10px;
                            border-radius: 8px;
                            cursor: default;
                            margin-left: -10px; /* Offset for padding */
                        }
                        .compliance-item:hover {
                            transform: translateX(8px);
                            background: rgba(11, 143, 200, 0.05);
                        }
                        .compliance-item i {
                            transition: transform 0.3s ease, color 0.3s ease;
                        }
                        .compliance-item:hover i {
                            transform: scale(1.2);
                            color: #E2940F !important;
                        }
                    ` }} />
      <style dangerouslySetInnerHTML={{ __html: `
/* NEW PREMIUM HERO DESIGN */
.premium-hero-wrapper {
    background-color: #0a192f; /* Dark Navy background */
    padding: 135px 20px 40px;
    position: relative;
    overflow: hidden;
    font-family: 'Inter', sans-serif;
}

.premium-hero-wrapper::before,
.premium-hero-wrapper::after {
    content: '';
    position: absolute;
    border: 1px solid rgba(11, 143, 200, 0.15); /* Light blue faint circles */
    border-radius: 50%;
}
.premium-hero-wrapper::before {
    width: 600px;
    height: 600px;
    top: -200px;
    left: -200px;
}
.premium-hero-wrapper::after {
    width: 800px;
    height: 800px;
    bottom: -300px;
    right: -100px;
}

.premium-hero-card {
    background-color: #ffffff;
    border-radius: 30px;
    max-width: 1300px;
    margin: 0 auto;
    padding: 40px;
    display: flex;
    gap: 40px;
    position: relative;
    z-index: 2;
    box-shadow: 0 15px 40px rgba(0,0,0,0.2);
}

.premium-hero-left {
    flex: 1.1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
}

.premium-hero-right {
    flex: 1;
    display: flex;
    gap: 15px;
    align-items: stretch;
}

.premium-hero-title {
    font-size: 2.8rem;
    font-weight: 800;
    color: #2b3a4a;
    line-height: 1.15;
    margin-bottom: 15px;
    font-family: 'Inter', sans-serif;
}

.premium-hero-text {
    font-size: 1rem;
    color: #555;
    margin-bottom: 25px;
    line-height: 1.5;
}

.premium-hero-actions {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    margin-bottom: 30px;
}

.premium-btn-primary {
    background-color: #0b8fc8;
    color: white;
    padding: 12px 28px;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
    transition: 0.3s;
    font-size: 1rem;
    border: 2px solid #0b8fc8;
    display: inline-block;
}
.premium-btn-primary:hover {
    background-color: #0977a6;
    border-color: #0977a6;
    color: white;
}

.premium-btn-secondary {
    background-color: #ffffff;
    color: #0b8fc8;
    padding: 12px 28px;
    border-radius: 8px;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 1rem;
    border: 2px solid #0b8fc8;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 4px 12px rgba(11, 143, 200, 0.15);
}
.premium-btn-secondary:hover {
    background-color: #0b8fc8;
    color: #ffffff;
    border-color: #0b8fc8;
}
.premium-btn-secondary .icon-circle {
    width: 32px;
    height: 32px;
    background-color: #0b8fc8;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    transition: all 0.3s ease;
}
.premium-btn-secondary:hover .icon-circle {
    background-color: #ffffff;
    color: #0b8fc8;
    transform: rotate(45deg);
}

.premium-testimonial {
    position: relative;
    padding-top: 20px;
    display: flex;
    gap: 15px;
    align-items: center;
}
.premium-testimonial::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 1px;
    background-color: #eaeaea;
}
.premium-testimonial img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
}
.premium-testimonial p {
    font-size: 0.9rem;
    color: #555;
    margin: 0;
    font-weight: 500;
}
.premium-testimonial strong {
    display: block;
    font-size: 0.85rem;
    color: #222;
    margin-top: 4px;
    font-weight: 700;
}



.premium-image-col {
    flex: 1;
    position: relative;
    border-radius: 16px;
    overflow: visible; 
    min-height: 380px;
}
.premium-image-col .img-wrapper {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    overflow: hidden;
}
.premium-image-col .img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}
.premium-image-col:hover .img-wrapper img {
    transform: scale(1.05);
}

.premium-badge {
    position: absolute;
    top: 30px;
    right: -40px;
    width: 100px;
    height: 100px;
    background-color: #0b8fc8;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    box-shadow: 0 10px 25px rgba(11, 143, 200, 0.4);
    z-index: 10;
    cursor: pointer;
    transition: all 0.3s ease;
}
/* .premium-badge:hover removed as per user request */
@keyframes rotateText {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@media (max-width: 1200px) {
    .premium-hero-title {
        font-size: 2.4rem;
    }
}
@media (max-width: 992px) {
    .premium-hero-card {
        flex-direction: column;
    }
    .premium-hero-right {
        flex-direction: column;
    }
    .premium-image-col {
        height: 350px;
        min-height: auto;
    }
    .premium-badge {
        right: 20px;
    }
}
@media (max-width: 768px) {
    .premium-hero-wrapper {
        padding: 95px 20px 40px;
    }
    .premium-badge {
        width: 90px !important;
        height: 90px !important;
    }
    .premium-badge svg {
        width: 80px !important;
        height: 80px !important;
    }
    .premium-badge i {
        font-size: 24px !important;
    }
}
@media (max-width: 576px) {
    .premium-hero-actions {
        flex-direction: column;
        gap: 15px;
        width: 100%;
    }
    .premium-hero-actions a {
        width: 100%;
        text-align: center;
        justify-content: center;
    }
}
.hero-center-stamp {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 140px;
    height: 140px;
    border-radius: 50%;
    border: 4px solid #ffffff;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    z-index: 10;
    background-color: #ffffff;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}
.hero-center-stamp img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.about-badge {
    bottom: -20px !important;
    top: auto !important;
    right: -20px !important;
}
.static-capabilities-strip {
    background-color: #ffffff;
    padding: 20px 0;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
    z-index: 10;
}
.capabilities-marquee-wrapper {
    overflow: hidden;
    width: 100%;
}
.capabilities-marquee-track {
    display: flex;
    gap: 60px;
    width: max-content;
    animation: marqueeSlide 30s linear infinite;
}
.capabilities-marquee-wrapper:hover .capabilities-marquee-track {
    animation-play-state: paused;
}
.capabilities-strip-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
}
.capabilities-strip-item i {
    color: #0b8fc8;
    font-size: 1.55rem;
    display: flex;
    align-items: center;
}
.capabilities-strip-item span {
    color: #0B1F3A;
    font-size: 0.95rem;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
    white-space: nowrap;
}
@media (max-width: 768px) {
    .capabilities-marquee-track {
        gap: 40px;
        animation-duration: 20s;
    }
}
` }} />

    {/* Premium Hero Section */}
    <section className="premium-hero-wrapper">
        <div className="premium-hero-card">
            <div className="premium-hero-left">
                <h1 className="premium-hero-title">Engineering Excellence. Building the Future.</h1>
                <p className="premium-hero-text">
                    Fuel your project's success with our integrated civil, mechanical, electrical, instrumentation, manpower, transport, and support solutions for infrastructure development.
                </p>
                <div className="premium-hero-actions">
                    <a href="contact.html" className="premium-btn-primary">Start a Project</a>
                    <a href="services.html" className="premium-btn-secondary">Our Services</a>
                </div>

            </div>
            
            <div className="premium-hero-right">
                <div className="premium-image-col">
                    <div className="img-wrapper">
                        <img src="images/hero section image.webp" alt="Civil Engineering Site Hero Image" />
                    </div>
                    {/* Center Stamp: Blue premium badge style with play icon */}
                    <div className="premium-badge" style={{"position":"absolute","top":"50%","left":"50%","transform":"translate(-50%, -50%)","right":"auto","width":"140px","height":"140px"}}>
                        <svg viewBox="0 0 140 140" width="130" height="130" style={{"position":"absolute","animation":"rotateText 10s linear infinite"}}>
                            <path id="circlePathHero" d="M 70, 70 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" fill="none"/>
                            <text font-size="14" font-weight="bold" fill="white" letter-spacing="4">
                                <textPath href="#circlePathHero" startOffset="50%" text-anchor="middle">
                                    AXIS INFINITY &#9733; STRUCTURE
                                </textPath>
                            </text>
                        </svg>
                        <i className="ph ph-play" style={{"position":"absolute","zIndex":"2","fontSize":"34px"}}></i>
                    </div>



                </div>
            </div>
        </div>
    </section>

    {/* Capabilities Strip */}
    <section id="capabilities-strip" className="static-capabilities-strip">
        <div className="container">
            <div className="capabilities-marquee-wrapper">
                <div className="capabilities-marquee-track">
                    {/* Set 1 */}
                    <div className="capabilities-strip-item">
                        <i className="ph ph-buildings"></i>
                        <span>Civil Engineering</span>
                    </div>
                    <div className="capabilities-strip-item">
                        <i className="ph ph-gear"></i>
                        <span>Mechanical Works</span>
                    </div>
                    <div className="capabilities-strip-item">
                        <i className="ph ph-lightning"></i>
                        <span>Electrical &amp; Instrumentation</span>
                    </div>
                    <div className="capabilities-strip-item">
                        <i className="ph ph-clipboard-text"></i>
                        <span>Commissioning Support</span>
                    </div>
                    <div className="capabilities-strip-item">
                        <i className="ph ph-users-three"></i>
                        <span>Manpower Supply</span>
                    </div>
                    <div className="capabilities-strip-item">
                        <i className="ph ph-truck"></i>
                        <span>Transport &amp; Equipment Rental</span>
                    </div>
                    
                    {/* Set 2 (Duplicate for Seamless Loop) */}
                    <div className="capabilities-strip-item">
                        <i className="ph ph-buildings"></i>
                        <span>Civil Engineering</span>
                    </div>
                    <div className="capabilities-strip-item">
                        <i className="ph ph-gear"></i>
                        <span>Mechanical Works</span>
                    </div>
                    <div className="capabilities-strip-item">
                        <i className="ph ph-lightning"></i>
                        <span>Electrical &amp; Instrumentation</span>
                    </div>
                    <div className="capabilities-strip-item">
                        <i className="ph ph-clipboard-text"></i>
                        <span>Commissioning Support</span>
                    </div>
                    <div className="capabilities-strip-item">
                        <i className="ph ph-users-three"></i>
                        <span>Manpower Supply</span>
                    </div>
                    <div className="capabilities-strip-item">
                        <i className="ph ph-truck"></i>
                        <span>Transport &amp; Equipment Rental</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

<style dangerouslySetInnerHTML={{ __html: `
/* PREMIUM ABOUT SECTION */
.premium-about-section {
    padding: 100px 0;
    background-color: #f8fbff;
    position: relative;
    overflow: hidden;
}
.premium-about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 70px;
    align-items: center;
}
@media (max-width: 992px) {
    .premium-about-grid {
        display: flex;
        flex-direction: column-reverse;
        gap: 60px;
    }
    .about-img-main-wrapper {
        height: 320px;
    }
    .about-bullet-list {
        margin-bottom: 30px !important;
    }
    .premium-about-right {
        text-align: center;
    }
    .premium-about-right p {
        text-align: left;
    }
    .premium-about-right .btn-new-style {
        margin: 0 auto;
        display: inline-flex !important;
    }
}
@keyframes flashOutAnim {
    0% { transform: scale(0.85); opacity: 0; filter: brightness(2) contrast(1.2); }
    100% { transform: scale(1); opacity: 1; filter: brightness(1) contrast(1); }
}
.about-images-wrapper.visible {
    animation: flashOutAnim 1s cubic-bezier(0.1, 0.8, 0.2, 1) forwards !important;
}
.about-images-wrapper {
    position: relative;
    display: block;
    max-width: 90%;
    margin: 20px auto 0 20px;
}
.about-img-main-outer {
    position: relative;
    z-index: 2;
}
.about-img-main-outer::before {
    content: '';
    position: absolute;
    top: -12px;
    left: -12px;
    right: -12px;
    bottom: -12px;
    border: 3px solid #0b8fc8;
    border-radius: 32px;
    z-index: -1;
    pointer-events: none;
}
.about-img-main-wrapper {
    width: 100%;
    height: 500px;
    border-radius: 20px;
    position: relative;
    box-shadow: 0 25px 50px rgba(10, 25, 47, 0.3);
    overflow: hidden;
}
.about-img-main {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.about-img-main-wrapper:hover .about-img-main {
    transform: scale(1.1);
}
.premium-about-content .section-label-new {
    color: #E2940F;
    font-weight: 600;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
}
.premium-about-content .section-label-new::before {
    content: '';
    display: inline-block;
    width: 35px;
    height: 2px;
    background-color: #E2940F;
    flex-shrink: 0;
}
.premium-about-content h2 {
    font-size: clamp(1.7rem, 2.8vw, 2.2rem);
    color: #0a192f;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 25px;
}
.premium-about-content p {
    color: #555;
    font-size: 1.05rem;
    line-height: 1.7;
    margin-bottom: 20px;
}
.about-bullet-list {
    list-style: none;
    padding: 0;
    margin: 30px 0 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px 20px;
}
.about-bullet-list li {
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 700;
    color: #0a192f;
    font-size: 1rem;
}
@keyframes pulseTick {
    0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(11, 143, 200, 0.4); }
    50% { transform: scale(1.15); box-shadow: 0 0 0 10px rgba(11, 143, 200, 0); }
}
.about-bullet-list li i {
    color: #0b8fc8;
    font-size: 1.4rem;
    background: rgba(11, 143, 200, 0.1);
    padding: 8px;
    border-radius: 50%;
    animation: pulseTick 2s infinite;
}
.about-bullet-list li:nth-child(1) i { animation-delay: 0s; }
.about-bullet-list li:nth-child(2) i { animation-delay: 0.3s; }
.about-bullet-list li:nth-child(3) i { animation-delay: 0.6s; }
.about-bullet-list li:nth-child(4) i { animation-delay: 0.9s; }
@media (max-width: 576px) {
    .about-bullet-list {
        grid-template-columns: 1fr;
    }
    .about-experience-badge {
        left: 10px;
        bottom: 10px;
        padding: 20px;
    }
}
` }} />

    {/* Premium Company Overview */}
    <section id="about" className="premium-about-section">
        <div className="container">
            <div className="premium-about-grid">
                
                {/* Left: Image Area */}
                <div className="about-images-wrapper fade-in-left">
                    <div className="about-img-main-outer">
                        <div className="about-img-main-wrapper">
                            <img src="images/about section.webp" alt="AXIS Infinity Structure Corporate Office" className="about-img-main" />
                        </div>
                        <style dangerouslySetInnerHTML={{ __html: `
                            .interactive-stamp {
                                width: 100%; height: 100%; 
                                object-fit: cover; 
                                border-radius: 50%;
                                transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                                cursor: pointer;
                            }
                            .interactive-stamp:hover {
                                transform: rotate(-15deg) scale(1.05);
                            }
                            .interactive-stamp:active {
                                transform: rotate(-25deg) scale(0.95);
                            }
                        ` }} />
                        <div className="about-badge" style={{"position":"absolute","width":"140px","height":"140px","zIndex":"10","display":"flex","alignItems":"center","justifyContent":"center","boxShadow":"0 10px 30px rgba(0,0,0,0.15)","borderRadius":"50%","background":"white"}}>
                            <img src="images/axis-stamp-clean.webp" alt="Axis Stamp" className="interactive-stamp" />
                        </div>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="premium-about-content fade-in-right">
                    <span className="section-label-new">About Us</span>
                    <h2>One Partner. Multiple Engineering Capabilities.</h2>
                    <p>AXIS INFINITY STRUCTURE supports construction, infrastructure, industrial, commercial, and public-sector projects through coordinated engineering services, manpower resources, transport support, equipment solutions, and commissioning assistance.</p>
                    <p>From site mobilization to final handover, our work is built around disciplined execution, technical coordination, safety, and accountability.</p>
                    
                    <ul className="about-bullet-list">
                        <li><i className="ph ph-check"></i> Civil Engineering</li>
                        <li><i className="ph ph-check"></i> MEP Services</li>
                        <li><i className="ph ph-check"></i> Heavy Transport</li>
                        <li><i className="ph ph-check"></i> Manpower Supply</li>
                    </ul>

                    <a href="about.html" className="btn-new-style" style={{"display":"inline-flex","width":"fit-content"}}>
                        Learn More About Us
                        <span className="icon-circle"><i className="ph ph-arrow-right"></i></span>
                    </a>
                </div>

            </div>
        </div>
    </section>




    {/* Why Choose AXIS Infinity Structure , Redesigned Premium Section */}
<style dangerouslySetInnerHTML={{ __html: `
/* NEW WHY CHOOSE AXIS Infinity Structure DESIGN */
.why-section-new {
    background-color: #0a192f;
    padding: 80px 0;
}
.why-header-new {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    flex-wrap: wrap;
    gap: 30px;
}
.section-label-new {
    color: #E2940F;
    font-weight: 600;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
}
.section-label-new::before {
    content: '';
    display: inline-block;
    width: 35px;
    height: 2px;
    background-color: #E2940F;
    flex-shrink: 0;
}
.why-header-left h2 {
    font-size: clamp(1.8rem, 3.2vw, 2.2rem);
    color: #ffffff;
    font-weight: 800;
    line-height: 1.2;
    margin: 0;
}
.why-header-left p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.05rem;
    line-height: 1.6;
    margin-top: 15px;
    max-width: 700px;
}
.why-header-right {
    display: flex;
    align-items: center;
}
.btn-new-style {
    background: #0b8fc8;
    color: #fff;
    padding: 10px 10px 10px 25px;
    border-radius: 40px;
    text-decoration: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 15px;
    transition: 0.3s;
}
.btn-new-style:hover {
    background: #0a192f;
}
.btn-new-style .icon-circle {
    background: #ffffff;
    color: #0b8fc8;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
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
}
.sector-card-badge i {
    color: #fff !important;
    font-size: 2rem;
}
.btn-new-style .icon-circle {
    transition: 0.3s;
}
.btn-new-style:hover .icon-circle {
    background: #0b8fc8;
    color: #ffffff;
}
.btn-new-style:hover .icon-circle i {
    color: #ffffff !important;
}

@keyframes floatImage {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
}
.why-header-image {
    flex: 1;
    min-width: 280px;
    max-width: 480px;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    aspect-ratio: 1.35;
    border: 3px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 15px 35px rgba(0,0,0,0.3);
    animation: floatImage 6s ease-in-out infinite;
}
.why-header-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.why-header-image:hover img {
    transform: scale(1.05);
}

.why-features-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 40px;
}
.why-feature-card-horizontal {
    background-color: transparent;
    border: none;
    padding: 0;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    cursor: pointer;
}
.why-feature-card-horizontal:hover {
    transform: translateY(-3px);
    background-color: transparent;
}
.why-feature-card-horizontal .why-feature-icon {
    margin-bottom: 0;
    display: flex;
    align-items: center;
}
.why-feature-card-horizontal .why-feature-icon i {
    font-size: 2rem;
    color: #0b8fc8;
    transition: color 0.3s ease, transform 0.3s ease;
}
.why-feature-card-horizontal.active .why-feature-icon i {
    color: #ffd700 !important;
    transform: scale(1.15);
}
.why-feature-card-horizontal h3 {
    color: #ffffff;
    font-size: 1.15rem;
    font-weight: 700;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
}
.why-feature-card-horizontal p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.92rem;
    line-height: 1.6;
    margin: 0;
}

@media(max-width: 992px) {
    .why-header-new {
        flex-direction: column;
        align-items: center;
        gap: 35px;
        text-align: center;
    }
    .why-header-left {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .why-header-left h2 br {
        display: none;
    }
    .why-header-left .btn-new-style {
        margin: 0 auto;
    }
    .why-features-row {
        grid-template-columns: 1fr;
        gap: 20px;
    }
}
` }} />

    {/* Why Choose AXIS Infinity Structure */}
    <section className="why-section-new">
        <div className="container">
            <div className="why-header-new fade-in-up" style={{"display":"flex","justifyContent":"space-between","alignItems":"center","gap":"40px","marginBottom":"50px","flexWrap":"wrap"}}>
                {/* Left: Content */}
                <div className="why-header-left" style={{"flex":"1","minWidth":"280px","maxWidth":"750px"}}>
                    <span className="section-label-new">Why Choose Us</span>
                    <h2>From Planning to Execution. <br /><span style={{"color":"#0b8fc8"}}>One Reliable Team.</span></h2>
                    <p className="text-justify-mobile-left" style={{"marginTop":"15px","marginBottom":"25px","textAlign":"justify","lineHeight":"1.7","color":"rgba(255, 255, 255, 0.85)"}}>Unlike fragmented multi-contractor approaches, AXIS Infinity Structure provides complete engineering coverage under a single management structure. No coordination gaps, no blame-shifting, just unified delivery responsibility from mobilization to handover.</p>
                    <a href="about.html" className="btn-new-style" style={{"display":"inline-flex","alignItems":"center","justifyContent":"center","marginTop":"5px","width":"fit-content"}}>
                        Discover Our Story
                        <span className="icon-circle"><i className="ph ph-arrow-right"></i></span>
                    </a>
                </div>

                {/* Right: The image of engineers */}
                <div className="why-header-image">
                    <img src="images/why_choose_axis.webp" alt="AXIS Infinity Structure Planning and Execution" />
                </div>
            </div>
            
            {/* Bottom: 3 features in a single horizontal line */}
            <div className="why-features-row fade-in-up delay-1">
                <div className="why-feature-card-horizontal">
                    <div className="why-feature-icon"><i className="ph ph-shield-check"></i></div>
                    <h3>Unified Management</h3>
                </div>
                <div className="why-feature-card-horizontal">
                    <div className="why-feature-icon"><i className="ph ph-clock"></i></div>
                    <h3>On-Time Execution</h3>
                </div>
                <div className="why-feature-card-horizontal">
                    <div className="why-feature-icon"><i className="ph ph-hard-hat"></i></div>
                    <h3>Safety &amp; Compliance</h3>
                </div>
            </div>
        </div>
    </section>

    {/* Values Section */}
    <section id="values" className="section-padding bg-off-white">
        <div className="container">
            <div className="section-header text-center fade-in-up">
                <span className="section-label">OUR CORE VALUES</span>
                <h2>The Principles That Drive Our Projects</h2>
            </div>
            
            <div className="grid-4 mt-5">
                {/* Value 1 */}
                <div className="value-card fade-in-up" style={{"background":"var(--clr-navy)","border":"1px solid rgba(255,255,255,0.1)","padding":"35px 25px","borderRadius":"12px","textAlign":"center","transition":"all 0.3s ease","borderBottom":"4px solid transparent"}} onmouseover="this.style.transform='translateY(-10px)'; this.style.borderBottomColor='var(--clr-blue)'; this.style.boxShadow='0 15px 30px rgba(0,0,0,0.08)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderBottomColor='transparent'; this.style.boxShadow='none';">
                    <div style={{"width":"70px","height":"70px","background":"rgba(11,143,200,0.1)","borderRadius":"50%","display":"grid","placeItems":"center","margin":"0 auto 20px"}}>
                        <i className="ph ph-shield-check" style={{"fontSize":"2.2rem","color":"#E2940F","lineHeight":"1","margin":"0","padding":"0"}}></i>
                    </div>
                    <h3 style={{"fontSize":"1.25rem","color":"var(--clr-white)","marginBottom":"12px"}}>Safety First</h3>
                    <p style={{"fontSize":"0.95rem","color":"rgba(255,255,255,0.8)","lineHeight":"1.6","margin":"0"}}>Uncompromising commitment to the health and safety of our workforce and sites.</p>
                </div>

                {/* Value 2 */}
                <div className="value-card fade-in-up delay-1" style={{"background":"var(--clr-navy)","border":"1px solid rgba(255,255,255,0.1)","padding":"35px 25px","borderRadius":"12px","textAlign":"center","transition":"all 0.3s ease","borderBottom":"4px solid transparent"}} onmouseover="this.style.transform='translateY(-10px)'; this.style.borderBottomColor='var(--clr-blue)'; this.style.boxShadow='0 15px 30px rgba(0,0,0,0.08)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderBottomColor='transparent'; this.style.boxShadow='none';">
                    <div style={{"width":"70px","height":"70px","background":"rgba(11,143,200,0.1)","borderRadius":"50%","display":"grid","placeItems":"center","margin":"0 auto 20px"}}>
                        <i className="ph ph-medal" style={{"fontSize":"2.2rem","color":"#E2940F","lineHeight":"1","margin":"0","padding":"0"}}></i>
                    </div>
                    <h3 style={{"fontSize":"1.25rem","color":"var(--clr-white)","marginBottom":"12px"}}>Excellence</h3>
                    <p style={{"fontSize":"0.95rem","color":"rgba(255,255,255,0.8)","lineHeight":"1.6","margin":"0"}}>Delivering the highest quality standards in engineering and construction execution.</p>
                </div>
                
                {/* Value 3 */}
                <div className="value-card fade-in-up delay-2" style={{"background":"var(--clr-navy)","border":"1px solid rgba(255,255,255,0.1)","padding":"35px 25px","borderRadius":"12px","textAlign":"center","transition":"all 0.3s ease","borderBottom":"4px solid transparent"}} onmouseover="this.style.transform='translateY(-10px)'; this.style.borderBottomColor='var(--clr-blue)'; this.style.boxShadow='0 15px 30px rgba(0,0,0,0.08)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderBottomColor='transparent'; this.style.boxShadow='none';">
                    <div style={{"width":"70px","height":"70px","background":"rgba(11,143,200,0.1)","borderRadius":"50%","display":"grid","placeItems":"center","margin":"0 auto 20px"}}>
                        <i className="ph ph-handshake" style={{"fontSize":"2.2rem","color":"#E2940F","lineHeight":"1","margin":"0","padding":"0"}}></i>
                    </div>
                    <h3 style={{"fontSize":"1.25rem","color":"var(--clr-white)","marginBottom":"12px"}}>Integrity</h3>
                    <p style={{"fontSize":"0.95rem","color":"rgba(255,255,255,0.8)","lineHeight":"1.6","margin":"0"}}>Conducting business with transparency, honesty, and accountability at all levels.</p>
                </div>

                {/* Value 4 */}
                <div className="value-card fade-in-up delay-3" style={{"background":"var(--clr-navy)","border":"1px solid rgba(255,255,255,0.1)","padding":"35px 25px","borderRadius":"12px","textAlign":"center","transition":"all 0.3s ease","borderBottom":"4px solid transparent"}} onmouseover="this.style.transform='translateY(-10px)'; this.style.borderBottomColor='var(--clr-blue)'; this.style.boxShadow='0 15px 30px rgba(0,0,0,0.08)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderBottomColor='transparent'; this.style.boxShadow='none';">
                    <div style={{"width":"70px","height":"70px","background":"rgba(11,143,200,0.1)","borderRadius":"50%","display":"grid","placeItems":"center","margin":"0 auto 20px"}}>
                        <i className="ph ph-lightbulb" style={{"fontSize":"2.2rem","color":"#E2940F","lineHeight":"1","margin":"0","padding":"0"}}></i>
                    </div>
                    <h3 style={{"fontSize":"1.25rem","color":"var(--clr-white)","marginBottom":"12px"}}>Innovation</h3>
                    <p style={{"fontSize":"0.95rem","color":"rgba(255,255,255,0.8)","lineHeight":"1.6","margin":"0"}}>Continuously improving and adopting modern solutions to solve complex challenges.</p>
                </div>
            </div>
        </div>
    </section>

    {/* Core Services */}
    <section id="services" className="section-padding bg-navy">
        <div className="container">
            <div className="section-header text-center fade-in-up">
                <span className="section-label white-label">CORE DIVISIONS</span>
                <h2 style={{"color":"var(--clr-white)"}}>Expertise That Moves Projects Forward</h2>
                <p className="max-w-800 mx-auto" style={{"color":"rgba(255,255,255,0.8)"}}>From civil works and MEP support to manpower, transport, equipment, and commissioning, AXIS Infinity Structure provides coordinated project support under one accountable structure.</p>
            </div>
            
            <div className="grid-3 mt-5">
                {/* Service 1: Civil Engineering */}
                <div className="service-card-new fade-in-up" onclick="location.href='civil-engineering.html'">
                    <div className="service-card-img">
                        <img src="images/cicil engineering.webp" alt="Civil Engineering Site Construction" />
                        <div className="service-card-icon-badge"><i className="ph ph-crane"></i></div>
                    </div>
                    <div className="service-card-body-new">
                        <h3>Civil Engineering</h3>
                        <p className="service-desc">Site preparation, foundations, structural works, roads, drainage, and infrastructure construction support.</p>
                        <ul className="service-bullets-new">
                            <li><span className="anim-bullet dots"><span></span><span></span><span></span></span>Site development</li>
                            <li><span className="anim-bullet dots"><span></span><span></span><span></span></span>RCC works</li>
                            <li><span className="anim-bullet dots"><span></span><span></span><span></span></span>Road networks</li>
                        </ul>
                        <a href="civil-engineering.html" className="service-card-cta">View Civil Works <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>

                {/* Service 2: Mechanical Works */}
                <div className="service-card-new fade-in-up delay-1" onclick="location.href='mechanical-works.html'">
                    <div className="service-card-img">
                        <img src="images/mechanicalworks.webp" alt="Industrial Mechanical Piping Works" />
                        <div className="service-card-icon-badge"><i className="ph ph-gear"></i></div>
                    </div>
                    <div className="service-card-body-new">
                        <h3>Mechanical Works</h3>
                        <p className="service-desc">Industrial mechanical installation, piping, plant support, maintenance, and turnaround assistance.</p>
                        <ul className="service-bullets-new">
                            <li><span className="anim-bullet dots"><span></span><span></span><span></span></span>Equipment installation</li>
                            <li><span className="anim-bullet dots"><span></span><span></span><span></span></span>Piping support</li>
                            <li><span className="anim-bullet dots"><span></span><span></span><span></span></span>Maintenance works</li>
                        </ul>
                        <a href="mechanical-works.html" className="service-card-cta">View Mechanical Works <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>

                {/* Service 3: Electrical & Instrumentation */}
                <div className="service-card-new fade-in-up delay-2" onclick="location.href='electrical-instrumentation.html'">
                    <div className="service-card-img">
                        <img src="images/electrical and instrumentations.webp" alt="Electrical Panel and Instrumentation" />
                        <div className="service-card-icon-badge"><i className="ph ph-lightning"></i></div>
                    </div>
                    <div className="service-card-body-new">
                        <h3>Electrical & Instrumentation</h3>
                        <p className="service-desc">Power distribution, control systems, instrumentation, testing, pre-commissioning, and automation support.</p>
                        <ul className="service-bullets-new">
                            <li><span className="anim-bullet dots"><span></span><span></span><span></span></span>LV/MV systems</li>
                            <li><span className="anim-bullet dots"><span></span><span></span><span></span></span>Testing support</li>
                            <li><span className="anim-bullet dots"><span></span><span></span><span></span></span>Control systems</li>
                        </ul>
                        <a href="electrical-instrumentation.html" className="service-card-cta">View E&I Services <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>

                {/* CCTV */}
                <div className="service-card-new fade-in-up" onclick="location.href='cctv-systems.html'">
                    <div className="service-card-img">
                        <img src="images/cctv-installation.webp" alt="CCTV and Security Systems" style={{"objectFit":"cover","objectPosition":"center"}} />
                        <div className="service-card-icon-badge"><i className="ph ph-video-camera"></i></div>
                    </div>
                    <div className="service-card-body-new">
                        <h3>Integrated IT & CCTV Infrastructure</h3>
                        <p className="service-desc">Complete surveillance, access control, and integrated security infrastructure for industrial and commercial facilities.</p>
                        <ul className="service-bullets-new">
                            <li><span className="anim-bullet dots"><span></span><span></span><span></span></span>IP Camera Networks</li>
                            <li><span className="anim-bullet dots"><span></span><span></span><span></span></span>Access Control</li>
                            <li><span className="anim-bullet dots"><span></span><span></span><span></span></span>Security Integration</li>
                        </ul>
                        <a href="cctv-systems.html" className="service-card-cta">View CCTV Services <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>



                {/* Service 5: Manpower Supply */}
                <div className="service-card-new fade-in-up delay-1" onclick="location.href='manpower-supply.html'">
                    <div className="service-card-img">
                        <img src="images/manpower_supply_new.webp" alt="Skilled Technical Manpower Workforce" />
                        <div className="service-card-icon-badge"><i className="ph ph-users-three"></i></div>
                    </div>
                    <div className="service-card-body-new">
                        <h3>Manpower Supply</h3>
                        <p className="service-desc">Engineers, supervisors, technicians, QA/QC inspectors, safety officers, operators, and skilled workers for project sites.</p>
                        <ul className="service-bullets-new">
                            <li><span className="anim-bullet dots"><span></span><span></span><span></span></span>Skilled teams</li>
                            <li><span className="anim-bullet dots"><span></span><span></span><span></span></span>Site supervision</li>
                            <li><span className="anim-bullet dots"><span></span><span></span><span></span></span>Flexible deployment</li>
                        </ul>
                        <a href="manpower-supply.html" className="service-card-cta">Request Manpower Support <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>

                {/* Service 6: Transport & Equipment Rental */}
                <div className="service-card-new fade-in-up delay-2" onclick="location.href='transport-rental.html'">
                    <div className="service-card-img">
                        <img src="images/user_transport.webp?v=3" alt="Heavy Construction Equipment Rental Fleet" />
                        <div className="service-card-icon-badge"><i className="ph ph-truck"></i></div>
                    </div>
                    <div className="service-card-body-new">
                        <h3>Transport & Equipment</h3>
                        <p className="service-desc">Construction equipment, heavy vehicles, site transport, logistics, and mobilization support.</p>
                        <ul className="service-bullets-new">
                            <li><span className="anim-bullet dots"><span></span><span></span><span></span></span>Fleet support</li>
                            <li><span className="anim-bullet dots"><span></span><span></span><span></span></span>Equipment rental</li>
                            <li><span className="anim-bullet dots"><span></span><span></span><span></span></span>Site logistics</li>
                        </ul>
                        <a href="transport-rental.html" className="service-card-cta">Request Equipment Support <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>
            </div>

            <div className="text-center mt-5 fade-in-up" style={{"marginTop":"40px","marginBottom":"20px"}}>
                <a href="services.html" className="btn btn-primary" style={{"padding":"12px 30px","fontWeight":"600"}}>More Services</a>
            </div>
        </div>
    </section>

    {/* Standalone CTA Section */}
    <section className="cta-section-new" style={{"backgroundColor":"var(--clr-off-white)","padding":"60px 0"}}>
        <div className="container">
            <div className="mid-section-cta fade-in-up" style={{"backgroundColor":"var(--clr-primary-navy)","borderRadius":"12px","padding":"40px","border":"1px solid rgba(255, 255, 255, 0.1)","boxShadow":"0 15px 35px rgba(0,0,0,0.15)"}}>
                <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","flexWrap":"wrap","gap":"30px"}}>
                    <div style={{"flex":"1 1 500px"}}>
                        <h3 style={{"color":"var(--clr-white)","fontSize":"clamp(1.2rem, 3vw, 1.6rem)","marginBottom":"10px","fontWeight":"700","fontFamily":"var(--font-heading)"}}>Need Civil, MEP, Manpower, or Equipment Support?</h3>
                        <p style={{"color":"rgba(255, 255, 255, 0.8)","margin":"0","fontSize":"0.95rem"}}>Submit your requirement and our team will review the right support option.</p>
                    </div>
                    <div>
                        <a href="#contact" className="btn btn-primary" style={{"whiteSpace":"nowrap"}}>Submit Project Requirement</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Sectors Served */}
    <section id="sectors" className="section-padding bg-white">
        <div className="container">
            <div className="section-header text-center fade-in-up">
                <span className="section-label">SECTORS WE SERVE</span>
                <h2>Supporting Infrastructure, Industrial, Commercial & Public-Sector Projects</h2>
                <p className="max-w-800 mx-auto">AXIS Infinity Structure supports project owners, contractors, developers, industrial companies, and public-sector stakeholders across demanding construction, infrastructure, and industrial environments.</p>
            </div>
            
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
` }} />

            <div className="premium-sector-grid">
                {/* Sector 1: Infrastructure Projects */}
                <div className="sector-card-premium fade-in-up">
                    <div className="sector-card-img-wrapper">
                        <img src="images/project_highway.webp" alt="Infrastructure Projects" />
                        <div className="sector-card-badge"><i className="ph ph-road-horizon"></i></div>
                    </div>
                    <div className="sector-card-content">
                        <h3 className="sector-card-title">Infrastructure Projects</h3>
                        <p className="sector-card-text">Civil, roadworks, utilities, drainage, manpower, equipment, and site support for infrastructure development.</p>
                        <a href="sectors.html" className="sector-card-link">Learn more <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>

                {/* Sector 2: Industrial Facilities */}
                <div className="sector-card-premium fade-in-up delay-1">
                    <div className="sector-card-img-wrapper">
                        <img src="images/project_industrial_park.webp" alt="Industrial Facilities" />
                        <div className="sector-card-badge"><i className="ph ph-factory"></i></div>
                    </div>
                    <div className="sector-card-content">
                        <h3 className="sector-card-title">Industrial Facilities</h3>
                        <p className="sector-card-text">Industrial facility construction, MEP support, structural steel works, and specialized site services.</p>
                        <a href="sectors.html" className="sector-card-link">Learn more <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>

                {/* Sector 3: Oil & Gas Refineries */}
                <div className="sector-card-premium fade-in-up delay-2">
                    <div className="sector-card-img-wrapper">
                        <img src="images/oil and gas refineries.webp" alt="Oil & Gas Refineries" />
                        <div className="sector-card-badge"><i className="ph ph-drop"></i></div>
                    </div>
                    <div className="sector-card-content">
                        <h3 className="sector-card-title">Oil & Gas Refineries</h3>
                        <p className="sector-card-text">Support for refinery construction, maintenance, E&I works, mechanical works, manpower, transport, and commissioning assistance.</p>
                        <a href="oil-refinery.html" className="sector-card-link">Learn more <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>

                {/* Sector 4: Fertilizer Plants */}
                <div className="sector-card-premium fade-in-up">
                    <div className="sector-card-img-wrapper">
                        <img src="images/project_shutdown.webp" alt="Fertilizer Plants" />
                        <div className="sector-card-badge"><i className="ph ph-shield-warning"></i></div>
                    </div>
                    <div className="sector-card-content">
                        <h3 className="sector-card-title">Fertilizer Plants</h3>
                        <p className="sector-card-text">Engineering, industrial maintenance, plant support, skilled manpower, equipment, and site execution support.</p>
                        <a href="fertilizer.html" className="sector-card-link">Learn more <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>

                {/* Sector 5: Petrochemical */}
                <div className="sector-card-premium fade-in-up delay-1">
                    <div className="sector-card-img-wrapper">
                        <img src="images/project_automation.webp" alt="Petrochemical" />
                        <div className="sector-card-badge"><i className="ph ph-atom"></i></div>
                    </div>
                    <div className="sector-card-content">
                        <h3 className="sector-card-title">Petrochemical</h3>
                        <p className="sector-card-text">Advanced chemical piping, process skid integration, instrumentation loop checks, and safe E&I distribution.</p>
                        <a href="petrochemical.html" className="sector-card-link">Learn more <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>

                {/* Sector 6: Commercial Construction */}
                <div className="sector-card-premium fade-in-up delay-2">
                    <div className="sector-card-img-wrapper">
                        <img src="images/commercial-construction.webp" alt="Commercial Construction" />
                        <div className="sector-card-badge"><i className="ph ph-buildings"></i></div>
                    </div>
                    <div className="sector-card-content">
                        <h3 className="sector-card-title">Commercial Construction</h3>
                        <p className="sector-card-text">High-rise buildings, business parks, offices, retail developments, civil works, and comprehensive HVAC/E&I support.</p>
                        <a href="sectors.html" className="sector-card-link">Learn more <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            
            <div className="text-center mt-5 fade-in-up" style={{"marginTop":"40px"}}>
                <a href="sectors.html" className="btn btn-solid-blue" style={{"padding":"12px 30px","fontWeight":"600","borderWidth":"2px"}}>More Sectors</a>
            </div>
        </div>
    </section>

    {/* Featured Projects */}
    <section id="projects" className="section-padding bg-navy text-white" style={{"backgroundColor":"var(--clr-primary-navy)"}}>
        <div className="blueprint-pattern"></div>
        <div className="container" style={{"position":"relative","zIndex":"2"}}>
            <div className="section-header text-center fade-in-up">
                <span className="section-label white-label">PROJECT CAPABILITIES</span>
                <h2 style={{"color":"var(--clr-white)"}}>Project Support Proven Across Active Development Environments</h2>
                <p className="max-w-800 mx-auto" style={{"color":"rgba(255,255,255,0.75)"}}>Showcase selected projects with real images, scope, location, service category, and status. This section proves that AXIS Infinity Structure supports serious project environments.</p>
            </div>
            
            <div className="grid-2 mt-5">
                {/* Project 1 */}
                <div className="project-card-new fade-in-up">
                    <div className="project-card-img">
                        <img src="images/projects/dha_road_work.webp" alt="DHA Multan Civil and Infrastructure Development" />
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
                        <a href="projects.html" className="btn btn-outline-blue w-100 mt-3" style={{"fontSize":"0.875rem"}}>View Project Details</a>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="project-card-new fade-in-up delay-1">
                    <div className="project-card-img">
                        <img src="images/projects/e_and_i.webp" alt="DHA Multan Electrical and Instrumentation Works" />
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
                        <a href="projects.html" className="btn btn-outline-blue w-100 mt-3" style={{"fontSize":"0.875rem"}}>View Project Details</a>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="project-card-new fade-in-up delay-2">
                    <div className="project-card-img">
                        <img src="images/projects/wasa.webp" alt="Punjab WASA Municipal Water Infrastructure" />
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
                        <a href="projects.html" className="btn btn-outline-blue w-100 mt-3" style={{"fontSize":"0.875rem"}}>View Project Details</a>
                    </div>
                </div>

                                {/* Project 4: CCTV */}
                <div className="project-card-new fade-in-up">
                    <div className="project-card-img">
                        <img src="images/cctv-camera.webp" alt="IT Office CCTV Setup" style={{"width":"100%","height":"100%","objectFit":"cover","objectPosition":"center"}} />
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
                        <a href="projects.html" className="btn btn-outline-blue w-100 mt-3" style={{"fontSize":"0.875rem"}}>View Project Details</a>
                    </div>
                </div>
            </div>

            <div className="text-center mt-5 fade-in-up" style={{"marginTop":"40px","marginBottom":"20px"}}>
                <a href="projects.html" className="btn btn-solid-blue" style={{"padding":"12px 30px","fontWeight":"600","borderWidth":"2px"}}>More Projects</a>
            </div>

            {/* Milestone and CTA after Projects */}
            <div className="mt-5" style={{"background":"var(--clr-white)","borderRadius":"12px","padding":"40px","boxShadow":"0 15px 40px rgba(0,0,0,0.1)","marginTop":"60px"}}>
                <div className="two-column" style={{"alignItems":"center","gap":"40px"}}>
                    <div className="fade-in-left">
                        <h3 className="mb-3" style={{"color":"var(--clr-primary-navy)","fontWeight":"700","fontFamily":"var(--font-heading)"}}>Planning a Similar Project?</h3>
                        <p style={{"color":"var(--clr-body-text)","fontSize":"1rem","marginBottom":"20px"}}>We combine multi-disciplinary coordination, owned heavy equipment, and highly skilled engineering rosters to support project owners and EPC contractors from start to finish.</p>
                        <a href="#contact" className="btn btn-primary">Discuss Your Project</a>
                    </div>
                    <div className="fade-in-right text-center" style={{"background":"var(--clr-navy)","padding":"40px","borderRadius":"12px","color":"var(--clr-white)"}}>
                        <div style={{"position":"relative","display":"inline-flex","alignItems":"center","justifyContent":"center","width":"110px","height":"110px","marginBottom":"25px"}}>
                            <div style={{"position":"absolute","width":"100%","height":"100%","borderRadius":"50%","border":"3px dashed #E2940F","opacity":"0.6","animation":"bullet-spin 15s linear infinite"}}></div>
                            <div style={{"position":"absolute","width":"85%","height":"85%","borderRadius":"50%","border":"4px solid rgba(226, 148, 15, 0.2)"}}></div>
                            <div style={{"position":"absolute","width":"70%","height":"70%","borderRadius":"50%","border":"1px solid rgba(226, 148, 15, 0.5)"}}></div>
                            <div style={{"position":"absolute","width":"100%","height":"100%","background":"radial-gradient(circle, rgba(226, 148, 15, 0.15) 0%, transparent 60%)","borderRadius":"50%"}}></div>
                            <i className="ph ph-medal" style={{"fontSize":"3.5rem","color":"#E2940F","position":"relative","zIndex":"2"}}></i>
                        </div>
                        <div style={{"fontSize":"4rem","fontWeight":"800","fontFamily":"var(--font-heading)","lineHeight":"1","marginBottom":"10px","color":"var(--clr-white)"}}>140<span style={{"color":"var(--clr-white)"}}>+</span></div>
                        <div style={{"fontSize":"1.1rem","fontWeight":"500","textTransform":"uppercase","letterSpacing":"0.05em","color":"rgba(255,255,255,0.85)"}}>Successfully Completed Projects</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Project Lifecycle Support Section (Snake Road Timeline) */}
    <section id="lifecycle" className="section-padding bg-off-white">
        <div className="container">
            <div className="section-header text-center fade-in-up">
                <span className="section-label">PROJECT LIFECYCLE</span>
                <h2>From Mobilization to Final Handover</h2>
                <p className="max-w-800 mx-auto">AXIS Infinity Structure supports project requirements across planning, resource mobilization, site execution, inspection, testing, pre-commissioning, commissioning, documentation, and handover.</p>
            </div>
            
            <div className="timeline-container mt-5">
                <div className="timeline-desktop-wrapper">
                    <div className="timeline-grid-new">
                        {/* Continuous Road for Row 1 */}
                        <div className="timeline-row1-road"></div>
                        
                        {/* Row 1: Steps 1 to 4 */}
                        <div className="timeline-card-new card-odd fade-in-up">
                            <div className="timeline-badge-new">1</div>
                            <h4>Requirement Review</h4>
                        </div>
                        <div className="timeline-card-new card-even fade-in-up delay-1">
                            <div className="timeline-badge-new">2</div>
                            <h4>Planning & Coordination</h4>
                        </div>
                        <div className="timeline-card-new card-odd fade-in-up delay-2">
                            <div className="timeline-badge-new">3</div>
                            <h4>Resource Mobilization</h4>
                        </div>
                        <div className="timeline-card-new card-even fade-in-up delay-3" style={{ gridColumn: "4", gridRow: "1" }}>
                            <div className="timeline-badge-new">4</div>
                            <h4>Site Execution</h4>
                        </div>
                        
                        {/* Step 4 Hook Connector (Right Turn to Middle Road) */}
                        <div className="step4-hook-wrapper">
                            <div className="hook-segment hook-top">
                                <div className="hook-dash-h"></div>
                            </div>
                            <div className="hook-segment hook-right">
                                <div className="hook-dash-v"></div>
                            </div>
                            <div className="hook-segment hook-bottom">
                                <div className="hook-dash-h reverse"></div>
                            </div>
                            <div className="hook-corner-patch patch-tr"></div>
                            <div className="hook-corner-patch patch-br"></div>
                        </div>
                        
                        {/* Row 2: Blank Middle Road Line */}
                        <div className="timeline-middle-road-new"></div>

                        {/* Step 5 Hook Connector (Left Turn from Middle Road) */}
                        <div className="step5-hook-wrapper">
                            <div className="hook-segment hook-left-top">
                                <div className="hook-dash-h reverse"></div>
                            </div>
                            <div className="hook-segment hook-left-vertical">
                                <div className="hook-dash-v"></div>
                            </div>
                            <div className="hook-segment hook-left-bottom">
                                <div className="hook-dash-h"></div>
                            </div>
                            <div className="hook-corner-patch patch-tl"></div>
                            <div className="hook-corner-patch patch-bl"></div>
                        </div>

                        {/* Continuous Road for Row 3 */}
                        <div className="timeline-row3-road"></div>

                        {/* Row 3: Steps 5 to 8 */}
                        <div className="timeline-card-new card-odd fade-in-up delay-4" style={{ marginTop: "30px" }}>
                            <div className="timeline-badge-new">5</div>
                            <h4>QA/QC Inspection</h4>
                        </div>
                        <div className="timeline-card-new card-even fade-in-up delay-5" style={{ marginTop: "30px" }}>
                            <div className="timeline-badge-new">6</div>
                            <h4>Testing & Pre-Commissioning</h4>
                        </div>
                        <div className="timeline-card-new card-odd fade-in-up delay-6" style={{ marginTop: "30px" }}>
                            <div className="timeline-badge-new">7</div>
                            <h4>Commissioning Support</h4>
                        </div>
                        <div className="timeline-card-new card-even fade-in-up delay-7" style={{ marginTop: "30px" }}>
                            <div className="timeline-badge-new">8</div>
                            <h4>Handover & Docs</h4>
                        </div>

                    </div>
                </div>
            </div>

            <div className="text-center mt-5 fade-in-up">
                <a href="#contact" className="btn btn-primary">Discuss Project Support</a>
            </div>
        </div>
    </section>

    


    {/* Why Choose AXIS Infinity Structure */}
    <section id="why-choose-axis" className="section-padding bg-navy text-white" style={{"backgroundColor":"var(--clr-primary-navy)","position":"relative","overflow":"hidden","borderTop":"4px solid var(--clr-blue)"}}>
        <div className="blueprint-pattern" style={{"opacity":"0.5"}}></div>
        
        {/* Premium glowing orbs for background depth */}
        <div style={{"position":"absolute","top":"-10%","left":"-10%","width":"40%","height":"60%","background":"radial-gradient(circle, rgba(11,143,200,0.12) 0%, transparent 60%)","borderRadius":"50%","zIndex":"1","pointerEvents":"none"}}></div>
        <div style={{"position":"absolute","bottom":"-10%","right":"-10%","width":"50%","height":"70%","background":"radial-gradient(circle, rgba(226,148,15,0.06) 0%, transparent 60%)","borderRadius":"50%","zIndex":"1","pointerEvents":"none"}}></div>
        
        <div className="container" style={{"position":"relative","zIndex":"2"}}>
            <div className="section-header text-center fade-in-up">
                <span className="section-label white-label">WHY AXIS Infinity Structure</span>
                <h2 className="mb-4" style={{"color":"var(--clr-white)","fontSize":"clamp(1.4rem, 2.5vw, 1.9rem)"}}>Why Leading Projects Need the Right Engineering Partner</h2>
                <p className="max-w-800 mx-auto" style={{"color":"rgba(255,255,255,0.85)","fontSize":"1.1rem","fontWeight":"300"}}>AXIS Infinity Structure combines engineering services, skilled manpower, transport, equipment, safety practices, and site coordination to help clients execute demanding projects with greater control and reliability.</p>
            </div>
            
            <div className="grid-3 mt-5 pt-3">
                <div className="premium-why-card fade-in-up">
                    <div className="why-icon-badge"><i className="ph ph-squares-four"></i></div>
                    <h3>Multi-Discipline Capability</h3>
                    <p>Complete civil, mechanical, E&I, and HVAC works handled by a unified project management team.</p>
                </div>
                
                <div className="premium-why-card fade-in-up delay-1">
                    <div className="why-icon-badge"><i className="ph ph-rocket"></i></div>
                    <h3>Site Mobilization Support</h3>
                    <p>Rapid deployment of equipment, vehicles, and manpower to fast-track on-site initiation.</p>
                </div>
                
                <div className="premium-why-card fade-in-up delay-2">
                    <div className="why-icon-badge"><i className="ph ph-users-three"></i></div>
                    <h3>Skilled Technical Manpower</h3>
                    <p>Provision of certified engineers, QA/QC inspectors, safety officers, and technical field staff.</p>
                </div>
                
                <div className="premium-why-card fade-in-up delay-3">
                    <div className="why-icon-badge"><i className="ph ph-truck"></i></div>
                    <h3>Transport & Equipment</h3>
                    <p>Direct access to our heavy transportation fleet and rental machinery for uninterrupted site supply.</p>
                </div>
                
                <div className="premium-why-card fade-in-up delay-4">
                    <div className="why-icon-badge"><i className="ph ph-shield-check"></i></div>
                    <h3>Safety & Quality Focus</h3>
                    <p>Rigorous QA/QC verification and disciplined work practices ensuring a zero-harm site culture.</p>
                </div>
                
                <div className="premium-why-card fade-in-up delay-5">
                    <div className="why-icon-badge"><i className="ph ph-handshake"></i></div>
                    <h3>Project Accountability</h3>
                    <p>Single-source accountability eliminating interface gaps and blame-shifting on-site.</p>
                </div>
            </div>
        </div>
    </section>

    {/* Safety, Quality & Compliance */}
    <section id="safety-quality" className="section-padding bg-white" style={{"position":"relative"}}>
        <div className="container">
            <div className="two-column" style={{"gap":"60px"}}>
                <div className="fade-in-left">
                    <span className="section-label">SAFETY & QUALITY</span>
                    <h2>Safety and Quality Built Into Every Stage</h2>
                    <p>AXIS INFINITY STRUCTURE follows disciplined site practices, QA/QC inspections, safety-focused coordination, documentation support, and client requirement compliance across all project stages.</p>
                    
                    <style dangerouslySetInnerHTML={{ __html: `
                        .compliance-item {
                            transition: transform 0.3s ease;
                            padding: 8px 10px;
                            border-radius: 8px;
                            cursor: default;
                            margin-left: -10px; /* Offset for padding */
                        }
                        .compliance-item:hover {
                            transform: translateX(8px);
                            background: rgba(11, 143, 200, 0.05);
                        }
                        .compliance-item i {
                            transition: transform 0.3s ease, color 0.3s ease;
                        }
                        .compliance-item:hover i {
                            transform: scale(1.2);
                            color: #E2940F !important;
                        }
                    ` }} />
                    <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"5px 15px","marginTop":"30px","marginBottom":"30px"}}>
                        <div className="compliance-item" style={{"display":"flex","alignItems":"center","gap":"10px"}}>
                            <i className="ph ph-check-circle" style={{"color":"var(--clr-blue)","fontSize":"1.5rem"}}></i>
                            <span style={{"fontWeight":"600","fontSize":"0.95rem"}}>QA/QC Inspections</span>
                        </div>
                        <div className="compliance-item" style={{"display":"flex","alignItems":"center","gap":"10px"}}>
                            <i className="ph ph-check-circle" style={{"color":"var(--clr-blue)","fontSize":"1.5rem"}}></i>
                            <span style={{"fontWeight":"600","fontSize":"0.95rem"}}>Safe Work Practices</span>
                        </div>
                        <div className="compliance-item" style={{"display":"flex","alignItems":"center","gap":"10px"}}>
                            <i className="ph ph-check-circle" style={{"color":"var(--clr-blue)","fontSize":"1.5rem"}}></i>
                            <span style={{"fontWeight":"600","fontSize":"0.95rem"}}>Site Supervision</span>
                        </div>
                        <div className="compliance-item" style={{"display":"flex","alignItems":"center","gap":"10px"}}>
                            <i className="ph ph-check-circle" style={{"color":"var(--clr-blue)","fontSize":"1.5rem"}}></i>
                            <span style={{"fontWeight":"600","fontSize":"0.95rem"}}>Testing & Documentation</span>
                        </div>
                        <div className="compliance-item" style={{"display":"flex","alignItems":"center","gap":"10px"}}>
                            <i className="ph ph-check-circle" style={{"color":"var(--clr-blue)","fontSize":"1.5rem"}}></i>
                            <span style={{"fontWeight":"600","fontSize":"0.95rem"}}>HSE-Focused Execution</span>
                        </div>
                        <div className="compliance-item" style={{"display":"flex","alignItems":"center","gap":"10px"}}>
                            <i className="ph ph-check-circle" style={{"color":"var(--clr-blue)","fontSize":"1.5rem"}}></i>
                            <span style={{"fontWeight":"600","fontSize":"0.95rem"}}>Tender Compliance</span>
                        </div>
                    </div>
                    
                    <a href="safety.html" className="btn btn-outline-blue">View Safety & Quality System</a>
                </div>
                <div className="fade-in-right col-image" style={{"position":"relative"}}>
                    <div className="blueprint-pattern" style={{"position":"absolute","top":"-20px","left":"-20px","width":"100%","height":"100%","zIndex":"-1","backgroundSize":"20px 20px"}}></div>
                    <img src="images/safety and quality iamge.webp" alt="AXIS Infinity Structure Safety QA/QC site inspection" style={{"width":"100%","height":"350px","objectFit":"cover","borderRadius":"12px","boxShadow":"0 20px 40px rgba(0,0,0,0.15)"}} />
                    <div style={{"position":"absolute","bottom":"-20px","right":"-20px","backgroundColor":"var(--clr-primary-navy)","padding":"20px 30px","borderRadius":"12px","boxShadow":"0 15px 30px rgba(0,0,0,0.2)","display":"flex","alignItems":"center","gap":"15px","border":"1px solid rgba(255,255,255,0.1)","zIndex":"10"}}>
                        <i className="ph ph-shield-check" style={{"color":"#E2940F","fontSize":"2.5rem"}}></i>
                        <p style={{"color":"var(--clr-white)","fontWeight":"700","margin":"0","fontSize":"1.1rem","fontFamily":"var(--font-heading)","lineHeight":"1.2"}}>Zero-Harm<br />HSE Practice</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Vision 2030 / Strategic Alignment */}
    <section id="vision-2030" className="section-padding bg-navy text-white" style={{"backgroundColor":"var(--clr-primary-navy)","position":"relative","overflow":"hidden","borderTop":"4px solid var(--clr-blue)"}}>
        <div style={{"position":"absolute","top":"-120px","right":"-120px","width":"450px","height":"450px","borderRadius":"50%","background":"radial-gradient(circle, rgba(11,143,200,0.12) 0%, transparent 70%)","pointerEvents":"none"}}></div>
        
        <div className="container" style={{"position":"relative","zIndex":"2"}}>
            <div className="two-column" style={{"gap":"60px","alignItems":"stretch"}}>
                <div className="fade-in-left col-image" style={{"maxWidth":"90%","margin":"0 auto","height":"100%","position":"relative"}}>
                    <div style={{"position":"absolute","top":"20px","left":"-20px","right":"20px","bottom":"-20px","border":"2px solid rgba(11,143,200,0.3)","borderRadius":"16px","zIndex":"1"}}></div>
                    <div style={{"borderRadius":"16px","overflow":"hidden","boxShadow":"0 30px 60px rgba(0,0,0,0.4)","position":"relative","zIndex":"2","height":"100%"}}>
                        <img src="images/saudi_tower_vertical.webp" alt="Riyadh towers representing KSA Vision 2030" style={{"width":"100%","height":"100%","objectFit":"cover","display":"block","minHeight":"500px"}} />
                        <div style={{"position":"absolute","inset":"0","background":"linear-gradient(to top, rgba(11, 31, 58, 0.8) 0%, transparent 50%)"}}></div>
                        <div style={{"position":"absolute","bottom":"25px","left":"25px"}}>
                            <div style={{"background":"var(--clr-blue)","color":"#fff","fontSize":"0.75rem","fontWeight":"700","letterSpacing":"0.1em","textTransform":"uppercase","padding":"4px 12px","borderRadius":"50px","display":"inline-block","marginBottom":"5px"}}>Aligned</div>
                            <p style={{"color":"#fff","fontSize":"1.25rem","fontWeight":"700","margin":"0","textShadow":"0 2px 4px rgba(0,0,0,0.5)"}}>Vision 2030 KSA</p>
                        </div>
                    </div>
                </div>
                
                <div className="fade-in-right">
                    <span className="section-label white-label">STRATEGIC ALIGNMENT</span>
                    <h2 style={{"color":"var(--clr-white)"}}>Aligned With the Future of Infrastructure Development</h2>
                    <p style={{"color":"rgba(255,255,255,0.85)","marginBottom":"30px"}}>AXIS Infinity Structure supports transformation-driven infrastructure, construction, industrial, manpower, transport, and technical project requirements with scalable project support and disciplined execution.</p>
                    
                    <div style={{"display":"flex","flexDirection":"column","gap":"15px","marginBottom":"35px"}}>
                        <div style={{"display":"flex","alignItems":"center","gap":"14px","background":"rgba(255,255,255,0.05)","border":"1px solid rgba(255,255,255,0.1)","borderRadius":"12px","padding":"18px 20px","transition":"border-color 0.3s ease"}} onmouseover="this.style.borderColor='rgba(11,143,200,0.4)';" onmouseout="this.style.borderColor='rgba(255,255,255,0.1)';">
                            <i className="ph ph-buildings" style={{"color":"#E2940F","fontSize":"1.8rem","flexShrink":"0"}}></i>
                            <span style={{"fontWeight":"700","fontSize":"1rem","color":"var(--clr-white)"}}>Giga-Project Infrastructure Support</span>
                        </div>
                        <div style={{"display":"flex","alignItems":"center","gap":"14px","background":"rgba(255,255,255,0.05)","border":"1px solid rgba(255,255,255,0.1)","borderRadius":"12px","padding":"18px 20px","transition":"border-color 0.3s ease"}} onmouseover="this.style.borderColor='rgba(11,143,200,0.4)';" onmouseout="this.style.borderColor='rgba(255,255,255,0.1)';">
                            <i className="ph ph-users-three" style={{"color":"#E2940F","fontSize":"1.8rem","flexShrink":"0"}}></i>
                            <span style={{"fontWeight":"700","fontSize":"1rem","color":"var(--clr-white)"}}>Saudization & Workforce Development</span>
                        </div>
                        <div style={{"display":"flex","alignItems":"center","gap":"14px","background":"rgba(255,255,255,0.05)","border":"1px solid rgba(255,255,255,0.1)","borderRadius":"12px","padding":"18px 20px","transition":"border-color 0.3s ease"}} onmouseover="this.style.borderColor='rgba(11,143,200,0.4)';" onmouseout="this.style.borderColor='rgba(255,255,255,0.1)';">
                            <i className="ph ph-sun" style={{"color":"#E2940F","fontSize":"1.8rem","flexShrink":"0"}}></i>
                            <span style={{"fontWeight":"700","fontSize":"1rem","color":"var(--clr-white)"}}>Renewable Energy & Sustainability</span>
                        </div>
                    </div>
                    
                    <a href="vision-2030.html" className="btn btn-primary">Explore Vision 2030 Commitment</a>
                </div>
            </div>
        </div>
    </section>

    {/* Resources, Manpower, Transport & Equipment */}
    <section id="resources-strength" className="section-padding bg-white">
        <div className="container">
            <div className="section-header text-center fade-in-up">
                <span className="section-label">RESOURCE SUPPORT</span>
                <h2>Manpower, Transport & Equipment Support When Projects Demand Scale</h2>
                <p className="max-w-800 mx-auto">AXIS Infinity Structure provides project teams, technical manpower, operators, supervisors, safety personnel, QA/QC support, equipment, heavy vehicles, logistics, and site mobilization resources for demanding project environments.</p>
            </div>
            
            <div className="grid-3 mt-5">
                <div className="resource-column fade-in-up">
                    <div className="resource-col-header">
                        <i className="ph ph-users-three"></i>
                        <h3>Skilled Manpower</h3>
                    </div>
                    <p className="resource-col-desc">Engineers, operators, and safety specialists prepared for immediate deployment.</p>
                    <ul className="resource-list">
                        <li><i className="ph ph-check-circle"></i> Project Engineers</li>
                        <li><i className="ph ph-check-circle"></i> Construction Supervisors</li>
                        <li><i className="ph ph-check-circle"></i> Mechanical Technicians</li>
                        <li><i className="ph ph-check-circle"></i> QA/QC Inspectors</li>
                        <li><i className="ph ph-check-circle"></i> Safety Officers</li>
                        <li><i className="ph ph-check-circle"></i> Heavy Equipment Operators</li>
                        <li><i className="ph ph-check-circle"></i> Skilled Welders & Riggers</li>
                    </ul>
                </div>
                
                <div className="resource-column fade-in-up delay-1">
                    <div className="resource-col-header">
                        <i className="ph ph-truck"></i>
                        <h3>Transport Support</h3>
                    </div>
                    <p className="resource-col-desc">Comprehensive logistic vehicles and dispatch services for raw materials and personnel.</p>
                    <ul className="resource-list">
                        <li><i className="ph ph-check-circle"></i> Flatbed & Lowbed Trailers</li>
                        <li><i className="ph ph-check-circle"></i> Site Transport Vehicles</li>
                        <li><i className="ph ph-check-circle"></i> Personnel Coasters & Buses</li>
                        <li><i className="ph ph-check-circle"></i> Water Tankers & Fuel Trucks</li>
                        <li><i className="ph ph-check-circle"></i> Logistics Coordination</li>
                        <li><i className="ph ph-check-circle"></i> Material Delivery Fleets</li>
                        <li><i className="ph ph-check-circle"></i> Site Mobilization Runs</li>
                    </ul>
                </div>

                <div className="resource-column fade-in-up delay-2">
                    <div className="resource-col-header">
                        <i className="ph ph-wrench"></i>
                        <h3>Equipment Support</h3>
                    </div>
                    <p className="resource-col-desc">Modern construction and industrial machinery rental to cover equipment supply gaps.</p>
                    <ul className="resource-list">
                        <li><i className="ph ph-check-circle"></i> Mobile & Crawler Cranes</li>
                        <li><i className="ph ph-check-circle"></i> Excavators & Backhoes</li>
                        <li><i className="ph ph-check-circle"></i> Wheel Loaders & Bulldozers</li>
                        <li><i className="ph ph-check-circle"></i> Air Compressors & Generators</li>
                        <li><i className="ph ph-check-circle"></i> Concrete Mixers</li>
                        <li><i className="ph ph-check-circle"></i> Welding Sub-stations</li>
                        <li><i className="ph ph-check-circle"></i> Testing & Calibration Kits</li>
                    </ul>
                </div>
            </div>
            
            <div className="text-center mt-5 fade-in-up">
                <a href="#contact" className="btn btn-primary">Request Manpower or Equipment Support</a>
            </div>
        </div>
    </section>

    {/* Strong Project Inquiry CTA Banner */}
    <section className="pro-cta-banner text-center">
        <div className="container fade-in-up">
            <div className="pro-cta-card">
                <span className="section-label white-label mb-3 d-inline-block" style={{ color: '#E2940F' }}>
                    <span className="anim-bullet dots" style={{ display: 'inline-flex', gap: '3px', marginRight: '8px', transform: 'translateY(-2px)' }}>
                        <span></span><span></span><span></span>
                    </span>
                    Fast Response & Mobilization Guarantee
                </span>
                <h2 style={{ color: 'var(--clr-white)', fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '20px', fontWeight: '800', lineHeight: '1.2' }}>
                    Need Reliable Engineering Support for Your Next Project?
                </h2>
                <p className="max-w-800 mx-auto" style={{ color: 'rgba(255, 255, 255, 0.88)', fontSize: '1.125rem', lineHeight: '1.75', marginBottom: '35px' }}>
                    Share your project scope, BOQ, manpower requirement, equipment need, transport requirement, or site support request. AXIS Infinity Structure will review your requirement and recommend the right project support solution.
                </p>
                <div className="hero-buttons justify-center" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                    <a href="#contact" className="btn btn-primary" style={{ padding: '15px 32px', fontSize: '1.05rem' }}>
                        <span>Submit Project Requirement</span>
                        <i className="ph ph-paper-plane-right" style={{ marginLeft: '10px', fontSize: '1.2rem' }}></i>
                    </a>
                    <a href="#contact" className="btn btn-outline-white" style={{ padding: '15px 32px', fontSize: '1.05rem' }}>
                        <span>Contact Technical Team</span>
                        <i className="ph ph-headset" style={{ marginLeft: '10px', fontSize: '1.2rem' }}></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    {/* Message from CEO Section */}
    <section id="ceo-message" className="ceo-message-section">
        <div className="container">
            <div className="ceo-card-new fade-in-up">
                
                {/* Left: Image */}
                <div className="ceo-card-img-col">
                    <img src="images/team/ceo_and_gm_mobeen_zia.webp" alt="Mobeen Zia" />
                </div>

                {/* Right: Content */}
                <div className="ceo-card-content-col">
                    {/* Quote Icon */}
                    <i className="ph ph-quotes ceo-card-quote-icon"></i>
                    
                    <div style={{"position":"relative","zIndex":"1"}}>
                        <span style={{"display":"block","fontSize":"0.8rem","fontWeight":"700","color":"#888","letterSpacing":"2px","textTransform":"uppercase","marginBottom":"10px","fontFamily":"var(--font-heading)"}}>A Message From The Founder</span>
                        <h2 style={{"fontFamily":"var(--font-heading)","fontWeight":"800","fontSize":"2.2rem","color":"var(--clr-navy)","marginBottom":"25px"}}>We Build The Future</h2>
                        
                        <p style={{"color":"#555","fontSize":"0.95rem","lineHeight":"1.8","marginBottom":"30px"}}>
                            "At AXIS INFINITY STRUCTURE, we don't just build infrastructure; we build trust, reliability, and a sustainable future. Our commitment to zero-harm safety and uncompromised quality has been the cornerstone of our success."
                        </p>
                        
                        <div style={{"marginTop":"auto"}}>
                            {/* Signature */}
                            <div style={{"fontFamily":"'Alex Brush', cursive","fontSize":"2.5rem","color":"#b5c0d0","lineHeight":"1","marginBottom":"5px"}}>Mobeen Zia</div>
                            <div style={{"fontSize":"0.85rem","color":"#777","textTransform":"uppercase","letterSpacing":"1px","fontWeight":"600"}}>Founder & CEO</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    {/* Careers Section */}
    <section id="careers" style={{"padding":"100px 0","backgroundColor":"var(--clr-navy)"}}>
        <div className="container">
            <div className="two-column" style={{"gap":"50px","alignItems":"center"}}>
                <div className="col-image fade-in-up">
                    <img src="images/careers_homepage.webp" alt="Join AXIS INFINITY STRUCTURE" style={{"width":"100%","borderRadius":"12px","boxShadow":"0 10px 40px rgba(0,0,0,0.4)"}} />
                </div>
                <div className="col-text fade-in-up delay-1">
                    <span className="section-label" style={{"color":"var(--clr-orange)"}}>Join Our Team</span>
                    <h2 style={{"color":"var(--clr-white)","fontWeight":"800","fontFamily":"var(--font-heading)","marginBottom":"20px"}}>Build Your Career With AXIS Infinity Structure</h2>
                    <p className="mb-4" style={{"color":"rgba(255,255,255,0.85)","fontSize":"1.05rem","lineHeight":"1.75"}}>We are always looking for driven, skilled professionals who share our commitment to safety, precision, and excellence. Whether you are an experienced engineer or an ambitious recent graduate, there is a place for you to grow at AXIS Infinity Structure.</p>
                    <ul className="check-list mt-4 mb-4" style={{"color":"var(--clr-white)","paddingLeft":"0","listStyle":"none","display":"flex","flexDirection":"column","gap":"12px"}}>
                        <li style={{"display":"flex","alignItems":"center","gap":"12px","fontWeight":"600","fontSize":"1rem"}}><i className="ph ph-briefcase" style={{"color":"var(--clr-orange)","fontSize":"1.35rem","flexShrink":"0"}}></i> Engineering & Technical Roles</li>
                        <li style={{"display":"flex","alignItems":"center","gap":"12px","fontWeight":"600","fontSize":"1rem"}}><i className="ph ph-hard-hat" style={{"color":"var(--clr-orange)","fontSize":"1.35rem","flexShrink":"0"}}></i> Project Management & Site Execution</li>
                        <li style={{"display":"flex","alignItems":"center","gap":"12px","fontWeight":"600","fontSize":"1rem"}}><i className="ph ph-chart-line-up" style={{"color":"var(--clr-orange)","fontSize":"1.35rem","flexShrink":"0"}}></i> Continuous Training & Growth Opportunities</li>
                    </ul>
                    <div className="career-btn-wrapper">
                        <a href="careers.html" className="btn btn-primary mt-3" style={{"display":"inline-flex","alignItems":"center","gap":"8px"}}>Explore Open Positions <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="contact" style={{"padding":"100px 0","backgroundColor":"var(--clr-white)"}}>
        <div className="container">
            <div className="two-column" style={{"gap":"50px","alignItems":"flex-start"}}>
                <div className="col-text fade-in-up" style={{"position":"sticky","top":"100px"}}>
                    <span className="section-label" style={{"color":"var(--clr-blue)","background":"rgba(11,143,200,0.1)"}}>Contact AXIS Infinity Structure</span>
                    <h2 style={{"color":"var(--clr-navy)","fontWeight":"800","fontFamily":"var(--font-heading)"}}>Let's Discuss Your Project Requirements</h2>
                    <p className="mb-4" style={{"color":"var(--clr-body-text)","fontSize":"1.05rem","lineHeight":"1.75"}}>Share your project needs with AXIS INFINITY STRUCTURE. Our engineering and procurement teams will review your specifications, BOQs, or mobilization requests and respond with a structured technical proposal.</p>
                    
                    <ul className="check-list mt-4 mb-4" style={{"color":"var(--clr-body-text)","paddingLeft":"0","listStyle":"none","display":"flex","flexDirection":"column","gap":"12px"}}>
                        <li style={{"display":"flex","alignItems":"center","gap":"12px","fontWeight":"600","fontSize":"1rem"}}><i className="ph ph-check-circle" style={{"color":"var(--clr-blue)","fontSize":"1.35rem","flexShrink":"0"}}></i> Prompt technical review & response within 24 hours</li>
                        <li style={{"display":"flex","alignItems":"center","gap":"12px","fontWeight":"600","fontSize":"1rem"}}><i className="ph ph-check-circle" style={{"color":"var(--clr-blue)","fontSize":"1.35rem","flexShrink":"0"}}></i> Tailored technical submittals and resource planning</li>
                        <li style={{"display":"flex","alignItems":"center","gap":"12px","fontWeight":"600","fontSize":"1rem"}}><i className="ph ph-check-circle" style={{"color":"var(--clr-blue)","fontSize":"1.35rem","flexShrink":"0"}}></i> Flexible mobilization support for remote or urban projects</li>
                        <li style={{"display":"flex","alignItems":"center","gap":"12px","fontWeight":"600","fontSize":"1rem"}}><i className="ph ph-check-circle" style={{"color":"var(--clr-blue)","fontSize":"1.35rem","flexShrink":"0"}}></i> Comprehensive safety and QA/QC documentation</li>
                        <li style={{"display":"flex","alignItems":"center","gap":"12px","fontWeight":"600","fontSize":"1rem"}}><i className="ph ph-check-circle" style={{"color":"var(--clr-blue)","fontSize":"1.35rem","flexShrink":"0"}}></i> Dedicated engineering project manager assigned</li>
                    </ul>
                    <p style={{"color":"var(--clr-body-text)","fontSize":"0.95rem","lineHeight":"1.6","marginBottom":"20px"}}>Whether you require an end-to-end EPC execution or specialized sub-contracting support, our team is equipped with the manpower, machinery, and expertise to ensure your project's success. Reach out today to start the conversation.</p>
                    <p style={{"color":"var(--clr-body-text)","fontSize":"0.95rem","lineHeight":"1.6","marginBottom":"0"}}>We take pride in our rapid deployment capabilities. Our technical experts are available for site visits, feasibility assessments, and initial project scoping across the entire KSA and major international sectors.</p>

                    <div style={{"display":"flex","flexDirection":"column","gap":"15px","marginTop":"35px","marginBottom":"30px"}}>
                        <a href="tel:+966507673009" className="btn btn-primary" style={{"display":"inline-flex","alignItems":"center","justifyContent":"center","gap":"12px","backgroundColor":"var(--clr-blue)","borderColor":"var(--clr-blue)","fontWeight":"700","width":"fit-content","minWidth":"280px","padding":"14px 24px"}}>
                            <i className="ph ph-phone-call" style={{"fontSize":"1.25rem"}}></i> +966 50 767 3009 (KSA)
                        </a>
                        <a href="https://wa.me/923029203920" className="btn" target="_blank" style={{"display":"inline-flex","alignItems":"center","justifyContent":"center","gap":"12px","fontWeight":"700","width":"fit-content","minWidth":"280px","padding":"14px 24px","border":"2px solid #25D366","color":"#25D366","background":"rgba(37, 211, 102, 0.05)"}} onmouseover="this.style.backgroundColor='#25D366'; this.style.color='#fff';" onmouseout="this.style.backgroundColor='rgba(37, 211, 102, 0.05)'; this.style.color='#25D366';">
                            <i className="ph ph-whatsapp-logo" style={{"fontSize":"1.4rem"}}></i> +92 302 9203920 (PAK)
                        </a>
                    </div>
                    
                    <a href="contact.html" className="btn btn-outline-blue" style={{"display":"inline-flex","alignItems":"center","gap":"8px"}}>Full Contact Details <i className="ph ph-arrow-right"></i></a>
                </div>
                <div className="col-form fade-in-up delay-1" style={{"width":"100%"}}>
                    <div className="form-card" style={{"boxShadow":"0 30px 60px rgba(0,0,0,0.2)","border":"1px solid rgba(255,255,255,0.1)","backgroundColor":"var(--clr-white)","borderRadius":"8px"}}>
                        <form action="#" method="POST" id="contactForm" enctype="multipart/form-data">
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name</label>
                                <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="companyName">Company Name</label>
                                <input type="text" id="companyName" name="companyName" placeholder="Enter your company name" required />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="email" placeholder="email@company.com" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone / WhatsApp Number</label>
                                    <input type="tel" id="phone" name="phone" placeholder="e.g. +966 50 123 4567" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="service">Service Required</label>
                                <select id="service" name="service" required>
                                    <option value="" disabled selected>Select a service...</option>
                                    <option value="civil">Civil Engineering & Infrastructure</option>
                                    <option value="mechanical">Mechanical Works</option>
                                    <option value="electrical">Electrical & Instrumentation</option>
                                    <option value="commissioning">Pre-Commissioning & Commissioning</option>
                                    <option value="manpower">Manpower Supply</option>
                                    <option value="transport">Transport & Equipment Rental</option>
                                    <option value="other">Other / General Inquiry</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="location">Project Location</label>
                                <input type="text" id="location" name="location" placeholder="City, Region, or Site Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message / Scope Details</label>
                                <textarea id="message" name="message" rows="4" placeholder="Briefly describe your project requirements, duration, and mobilization timeline..." required></textarea>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="boq">Attach BOQ, Scope or Specifications (Optional)</label>
                                <div className="file-upload-wrapper">
                                    <input type="file" id="boq" name="boq" accept=".pdf,.doc,.docx,.xls,.xlsx,.zip" style={{"position":"absolute","inset":"0","opacity":"0","cursor":"pointer","zIndex":"10"}} />
                                    <i className="ph ph-cloud-arrow-up"></i>
                                    <p className="upload-title">Drag & drop or <span className="browse-link">browse files</span></p>
                                    <span className="upload-meta">PDF, Word, Excel, or ZIP (Max 15MB)</span>
                                    <div id="file-name-display" className="file-name-display"></div>
                                </div>
                            </div>
                            
                            <button type="submit" className="btn btn-primary w-100" style={{"padding":"14px 20px","fontWeight":"700","marginTop":"10px"}}>Send Project Inquiry</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* FAQ Section */}
    <section className="section-padding" style={{ background: "linear-gradient(180deg, #071325 0%, #0a192f 100%)" }}>
        <div className="container">
            <div className="section-header text-center fade-in-up mb-5">
                <span className="section-label white-label">Common Questions</span>
                <h2 style={{ color: "#ffffff" }}>Frequently Asked Questions</h2>
                <p className="max-w-800 mx-auto" style={{ color: "rgba(255, 255, 255, 0.85)" }}>Quick answers to the questions we hear most from new clients and project partners.</p>
            </div>
            
            <div className="faq-list max-w-800 mx-auto fade-in-up">
                {faqs.map((faq, idx) => (
                    <div 
                        key={idx} 
                        className={`home-faq-item ${openFaq === idx ? 'active' : ''}`}
                        onClick={() => toggleFaq(idx)}
                    >
                        <div className="home-faq-question">
                            <span>{faq.question}</span>
                            <i className="ph ph-caret-down home-faq-icon"></i>
                        </div>
                        <div className="home-faq-answer">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>

    {/* Footer */}
    </AnimatedPage>
  );
}
