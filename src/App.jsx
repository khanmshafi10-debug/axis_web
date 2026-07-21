import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatingActions from './components/layout/FloatingActions';

// Import Page Components
import About from './pages/About';
import AutomationControl from './pages/AutomationControl';
import Careers from './pages/Careers';
import CctvSystems from './pages/CctvSystems';
import CivilEngineering from './pages/CivilEngineering';
import Contact from './pages/Contact';
import Decommissioning from './pages/Decommissioning';
import ElectricalInstrumentation from './pages/ElectricalInstrumentation';
import Fertilizer from './pages/Fertilizer';
import GeotechnicalPiling from './pages/GeotechnicalPiling';
import HvacMaintenance from './pages/HvacMaintenance';
import Home from './pages/Home';
import IndustrialInsulation from './pages/IndustrialInsulation';
import IndustrialPainting from './pages/IndustrialPainting';
import ManpowerSupply from './pages/ManpowerSupply';
import MarineOffshore from './pages/MarineOffshore';
import MechanicalWorks from './pages/MechanicalWorks';
import NdtInspection from './pages/NdtInspection';
import OilRefinery from './pages/OilRefinery';
import Petrochemical from './pages/Petrochemical';
import PipingPipeline from './pages/PipingPipeline';
import PlantShutdowns from './pages/PlantShutdowns';
import PreCommissioning from './pages/PreCommissioning';
import ProjectManagement from './pages/ProjectManagement';
import Projects from './pages/Projects';
import RenewableEnergy from './pages/RenewableEnergy';
import Safety from './pages/Safety';
import ScaffoldingRigging from './pages/ScaffoldingRigging';
import Sectors from './pages/Sectors';
import Services from './pages/Services';
import SteelFabrication from './pages/SteelFabrication';
import Team from './pages/Team';
import TransportRental from './pages/TransportRental';
import Vision2030 from './pages/Vision2030';
import WaterTreatment from './pages/WaterTreatment';

function drawMobileSnake() {
  const grid = document.querySelector('.timeline-grid-new');
  if (!grid) return;
  
  grid.style.position = 'relative';
  
  if (window.innerWidth > 768) {
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
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.style.zIndex = '0';
    svg.style.pointerEvents = 'none';
    
    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path1.id = 'mobile-snake-path1';
    path1.setAttribute('fill', 'none');
    path1.setAttribute('stroke', '#1B293A');
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
  svg.style.display = 'block';
  
  const badges = Array.from(grid.querySelectorAll('.timeline-card-new .timeline-badge-new'));
  if (badges.length === 0) return;
  
  const gridRect = grid.getBoundingClientRect();
  let d = '';
  
  for (let i = 0; i < badges.length - 1; i++) {
    const b1 = badges[i];
    const b2 = badges[i+1];
    
    const r1 = b1.getBoundingClientRect();
    const r2 = b2.getBoundingClientRect();
    
    const x1 = r1.left - gridRect.left + r1.width / 2;
    const y1 = r1.bottom - gridRect.top;
    
    const x2 = r2.left - gridRect.left + r2.width / 2;
    const y2 = r2.top - gridRect.top;
    
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

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // 0. Handle SPA 404 Fallback Query Params (for static hosting deep links)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get('redirect');
    if (redirectPath) {
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

  // 1. Global Link Intercept Event
  useEffect(() => {
    const handleGlobalClick = (e) => {
      const link = e.target.closest('a');
      if (link) {
        const href = link.getAttribute('href');
        if (
          href &&
          !href.startsWith('http') &&
          !href.startsWith('mailto:') &&
          !href.startsWith('tel:') &&
          !href.startsWith('#') &&
          !href.startsWith('javascript:') &&
          !link.getAttribute('target')
        ) {
          e.preventDefault();
          let cleanPath = href;
          if (cleanPath.endsWith('.html')) {
            cleanPath = '/' + cleanPath.slice(0, -5);
          }
          if (cleanPath === 'index' || cleanPath === '/index') {
            cleanPath = '/';
          }
          if (!cleanPath.startsWith('/')) {
            cleanPath = '/' + cleanPath;
          }
          navigate(cleanPath);
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, [navigate]);

  // 2. Global Icon Gold Class Toggle
  useEffect(() => {
    const handleIconClick = (e) => {
      if (e.target.closest('#header')) return;

      const vmIcon = e.target.closest('.vm-card-body .card-icon');
      if (vmIcon) {
        vmIcon.classList.toggle('active-gold-badge-global');
        return;
      }

      const wrapper = e.target.closest('.card-icon, .value-card > div:first-child, .service-card-icon-badge, .strip-grid-item');
      if (wrapper) {
        const icon = wrapper.querySelector('i');
        if (icon) {
          icon.classList.toggle('active-gold-global');
          return;
        }
      }

      const icon = e.target.closest('i[class^="ph"], i[class*=" ph-"]');
      if (icon) {
        icon.classList.toggle('active-gold-global');
      }
    };

    document.addEventListener('click', handleIconClick);
    return () => {
      document.removeEventListener('click', handleIconClick);
    };
  }, []);

  // 3. Page Resize Hook for Snake Timeline
  useEffect(() => {
    const handleResize = () => {
      drawMobileSnake();
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 4. Trigger legacy JS interactive scripts on Route Change
  useEffect(() => {
    const timer = setTimeout(() => {
      // Intersection Observer for scroll fade animation
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px', threshold: 0.12 });

      document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in').forEach(el => {
        observer.observe(el);
      });

      // Animated Number Counter Observer
      const counters = document.querySelectorAll('.counter-num');
      const counterObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-target'), 10);
            const suffix = el.getAttribute('data-suffix') || '';
            let current = 0;
            const duration = 2000;
            const step = target / (duration / 16);
            const counterTimer = setInterval(() => {
              current += step;
              if (current >= target) {
                current = target;
                clearInterval(counterTimer);
              }
              el.textContent = Math.floor(current).toLocaleString() + suffix;
            }, 16);
            obs.unobserve(el);
          }
        });
      }, { threshold: 0.5 });
      counters.forEach(c => counterObserver.observe(c));

      // FAQ Accordions (Handled via React State in components)

      // Contact Form Setup
      const contactForm = document.getElementById('contactForm');
      const boqInput = document.getElementById('boq');
      const fileNameDisplay = document.getElementById('file-name-display');

      if (boqInput && fileNameDisplay) {
        boqInput.addEventListener('change', () => {
          if (boqInput.files.length > 0) {
            const file = boqInput.files[0];
            const name = file.name;
            const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
            fileNameDisplay.innerHTML = `<i class="ph ph-file-text" style="color: #16a34a; font-size: 1.1rem; margin-right: 4px;"></i> Selected: <strong>${name}</strong> (${sizeMB} MB)`;
            fileNameDisplay.style.display = 'flex';
          } else {
            fileNameDisplay.innerHTML = '';
            fileNameDisplay.style.display = 'none';
          }
        });
      }

      if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const btn = contactForm.querySelector('button[type="submit"]');
          if (btn) { 
            btn.textContent = '✓ Message Sent!'; 
            btn.style.backgroundColor = '#16a34a'; 
          }
          setTimeout(() => {
            if (btn) { 
              btn.textContent = 'Send Project Inquiry'; 
              btn.style.backgroundColor = ''; 
            }
            contactForm.reset();
            if (fileNameDisplay) {
              fileNameDisplay.innerHTML = '';
              fileNameDisplay.style.display = 'none';
            }
          }, 3000);
        });
      }

      // Home Services Accordion
      document.querySelectorAll('.accordion-header').forEach(header => {
        const handleAccordionClick = () => {
          const item = header.closest('.accordion-item');
          const content = item.querySelector('.accordion-content');
          const isActive = item.classList.contains('active');

          // Close all items
          document.querySelectorAll('.accordion-item').forEach(i => {
            i.classList.remove('active');
            const c = i.querySelector('.accordion-content');
            if (c) c.style.maxHeight = '0';
          });

          if (!isActive) {
            item.classList.add('active');
            if (content) {
              content.style.maxHeight = content.scrollHeight + 'px';
            }
          }
        };
        header.removeEventListener('click', handleAccordionClick);
        header.addEventListener('click', handleAccordionClick);
      });

      // Mobile Animated Timeline Snake Drawing
      drawMobileSnake();

    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/about.html" element={<About />} />
        
        <Route path="/automation-control" element={<AutomationControl />} />
        <Route path="/automation-control.html" element={<AutomationControl />} />
        
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers.html" element={<Careers />} />
        
        <Route path="/cctv-systems" element={<CctvSystems />} />
        <Route path="/cctv-systems.html" element={<CctvSystems />} />
        
        <Route path="/civil-engineering" element={<CivilEngineering />} />
        <Route path="/civil-engineering.html" element={<CivilEngineering />} />
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact.html" element={<Contact />} />
        
        <Route path="/decommissioning" element={<Decommissioning />} />
        <Route path="/decommissioning.html" element={<Decommissioning />} />
        
        <Route path="/electrical-instrumentation" element={<ElectricalInstrumentation />} />
        <Route path="/electrical-instrumentation.html" element={<ElectricalInstrumentation />} />
        
        <Route path="/fertilizer" element={<Fertilizer />} />
        <Route path="/fertilizer.html" element={<Fertilizer />} />
        
        <Route path="/geotechnical-piling" element={<GeotechnicalPiling />} />
        <Route path="/geotechnical-piling.html" element={<GeotechnicalPiling />} />
        
        <Route path="/hvac-maintenance" element={<HvacMaintenance />} />
        <Route path="/hvac-maintenance.html" element={<HvacMaintenance />} />
        
        <Route path="/industrial-insulation" element={<IndustrialInsulation />} />
        <Route path="/industrial-insulation.html" element={<IndustrialInsulation />} />
        
        <Route path="/industrial-painting" element={<IndustrialPainting />} />
        <Route path="/industrial-painting.html" element={<IndustrialPainting />} />
        
        <Route path="/manpower-supply" element={<ManpowerSupply />} />
        <Route path="/manpower-supply.html" element={<ManpowerSupply />} />
        
        <Route path="/marine-offshore" element={<MarineOffshore />} />
        <Route path="/marine-offshore.html" element={<MarineOffshore />} />
        
        <Route path="/mechanical-works" element={<MechanicalWorks />} />
        <Route path="/mechanical-works.html" element={<MechanicalWorks />} />
        
        <Route path="/ndt-inspection" element={<NdtInspection />} />
        <Route path="/ndt-inspection.html" element={<NdtInspection />} />
        
        <Route path="/oil-refinery" element={<OilRefinery />} />
        <Route path="/oil-refinery.html" element={<OilRefinery />} />
        
        <Route path="/petrochemical" element={<Petrochemical />} />
        <Route path="/petrochemical.html" element={<Petrochemical />} />
        
        <Route path="/piping-pipeline" element={<PipingPipeline />} />
        <Route path="/piping-pipeline.html" element={<PipingPipeline />} />
        
        <Route path="/plant-shutdowns" element={<PlantShutdowns />} />
        <Route path="/plant-shutdowns.html" element={<PlantShutdowns />} />
        
        <Route path="/pre-commissioning" element={<PreCommissioning />} />
        <Route path="/pre-commissioning.html" element={<PreCommissioning />} />
        
        <Route path="/project-management" element={<ProjectManagement />} />
        <Route path="/project-management.html" element={<ProjectManagement />} />
        
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects.html" element={<Projects />} />
        
        <Route path="/renewable-energy" element={<RenewableEnergy />} />
        <Route path="/renewable-energy.html" element={<RenewableEnergy />} />
        
        <Route path="/safety" element={<Safety />} />
        <Route path="/safety.html" element={<Safety />} />
        
        <Route path="/scaffolding-rigging" element={<ScaffoldingRigging />} />
        <Route path="/scaffolding-rigging.html" element={<ScaffoldingRigging />} />
        
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/sectors.html" element={<Sectors />} />
        
        <Route path="/services" element={<Services />} />
        <Route path="/services.html" element={<Services />} />
        
        <Route path="/steel-fabrication" element={<SteelFabrication />} />
        <Route path="/steel-fabrication.html" element={<SteelFabrication />} />
        
        <Route path="/team" element={<Team />} />
        <Route path="/team.html" element={<Team />} />
        
        <Route path="/transport-rental" element={<TransportRental />} />
        <Route path="/transport-rental.html" element={<TransportRental />} />
        
        <Route path="/vision-2030" element={<Vision2030 />} />
        <Route path="/vision-2030.html" element={<Vision2030 />} />
        
        <Route path="/water-treatment" element={<WaterTreatment />} />
        <Route path="/water-treatment.html" element={<WaterTreatment />} />

        {/* Wildcard Fallback Route */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <FloatingActions />
    </>
  );
}
