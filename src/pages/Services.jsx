import React, { useEffect } from 'react';
import { AnimatedPage } from '../components/common/ScrollReveal';

export default function Services() {
  useEffect(() => {
    document.title = "Engineering Services | AXIS INFINITY STRUCTURE , Civil, Mechanical, E&I, HVAC, Manpower & Transport";
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatedPage>
      
      {/* Page Banner */}
    <section className="page-banner" style={{"backgroundImage":"url('images/hero_infrastructure.webp')"}}>
        <div className="container fade-in-up">
            <h1>Our Engineering Services</h1>
                        <div style={{"marginTop":"35px","marginBottom":"20px"}}>
                <p className="hero-desc">Integrated, Multi-Disciplinary Engineering Solutions for Construction, Industrial & Infrastructure Projects. </p>
                <p className="hero-desc" style={{"fontSize":"1.05rem","color":"rgba(255,255,255,0.8)","borderLeft":"none","textAlign":"left","paddingLeft":"24px"}}>We bring decades of industrial expertise, deploying innovative technologies and a highly skilled workforce to ensure every milestone is achieved beyond expectations.</p>
                <div className="hero-badges" style={{"justifyContent":"flex-start","marginLeft":"24px"}}>
                    <span className="hero-badge"><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span> Industrial Expertise</span>
                    <span className="hero-badge"><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span> Innovative Tech</span>
                    <span className="hero-badge"><span className="anim-bullet dots" style={{"display":"inline-flex","gap":"3px","marginRight":"12px","transform":"translateY(-2px)"}}><span></span><span></span><span></span></span> Skilled Workforce</span>
                </div>
            </div>
        </div>
    </section>

    {/* Services Staggered Detail */}
    <section className="section-padding bg-white">
        <div className="container">
            <div className="section-header fade-in-up text-center mb-5">
                <span className="section-label">Engineering Solutions</span>
                <h2>Expertise That Moves Projects Forward</h2>
                <p className="max-w-800 mx-auto">AXIS INFINITY STRUCTURE delivers end-to-end engineering, construction, and support solutions across 6 core service divisions , each staffed with certified professionals and supported by our full project management infrastructure.</p>
            </div>
            
            <div className="grid-3" style={{"gap":"30px"}}>
                {/* Civil */}
                <div className="service-card fade-in-up" style={{"padding":"0","overflow":"hidden","display":"flex","flexDirection":"column","backgroundColor":"#f8f9fa"}}>
                    <img src="images/civil_engineering_site.webp" alt="Civil Engineering Construction Services AXIS INFINITY STRUCTURE" style={{"width":"100%","height":"220px","objectFit":"cover"}}  width="1024" height="1024" loading="lazy" decoding="async" />
                    <div style={{"padding":"30px","flex":"1","display":"flex","flexDirection":"column"}}>
                        <div className="card-icon mb-3"><i className="ph ph-buildings"></i></div>
                        <h3>Civil Engineering</h3>
                        <p className="mb-3" style={{"flex":"1"}}>Our civil division forms the bedrock of AXIS Infinity Structure. We handle massive earthworks, complex structural foundations, and high-rise commercial structures.</p>
                        
                        <a href="/civil-engineering" className="btn btn-outline-blue w-100 text-center" style={{"display":"block"}}>Explore Details <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>

                {/* Mechanical */}
                <div className="service-card fade-in-up delay-1" style={{"padding":"0","overflow":"hidden","display":"flex","flexDirection":"column","backgroundColor":"#f8f9fa"}}>
                    <img src="images/mechanical_works_pipes.webp" alt="Mechanical Engineering" style={{"width":"100%","height":"220px","objectFit":"cover"}}  width="678" height="452" loading="lazy" decoding="async" />
                    <div style={{"padding":"30px","flex":"1","display":"flex","flexDirection":"column"}}>
                        <div className="card-icon mb-3"><i className="ph ph-wrench"></i></div>
                        <h3>Mechanical Works</h3>
                        <p className="mb-3" style={{"flex":"1"}}>Precision mechanical support is crucial for industrial success. We specialize in fabrication, equipment installation, and complex piping systems.</p>
                        
                        <a href="/mechanical-works" className="btn btn-outline-blue w-100 text-center" style={{"display":"block"}}>Explore Details <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>

                {/* Electrical */}
                <div className="service-card fade-in-up delay-2" style={{"padding":"0","overflow":"hidden","display":"flex","flexDirection":"column","backgroundColor":"#f8f9fa"}}>
                    <img src="images/ei_works_panel.webp" alt="Electrical and Instrumentation Works AXIS INFINITY STRUCTURE" style={{"width":"100%","height":"220px","objectFit":"cover"}}  width="1024" height="1024" loading="lazy" decoding="async" />
                    <div style={{"padding":"30px","flex":"1","display":"flex","flexDirection":"column"}}>
                        <div className="card-icon mb-3"><i className="ph ph-lightning"></i></div>
                        <h3>Electrical & Instrumentation</h3>
                        <p className="mb-3" style={{"flex":"1"}}>Powering your infrastructure with cutting-edge electrical systems, safety controls, and highly calibrated instrumentation grids.</p>
                        
                        <a href="/electrical-instrumentation" className="btn btn-outline-blue w-100 text-center" style={{"display":"block"}}>Explore Details <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>

                {/* CCTV */}
                <div className="service-card fade-in-up" style={{"padding":"0","overflow":"hidden","display":"flex","flexDirection":"column","backgroundColor":"#f8f9fa"}}>
                    <img src="images/cctv-installation.webp" alt="CCTV & Security Systems" style={{"width":"100%","height":"220px","objectFit":"cover","objectPosition":"center"}}  width="450" height="483" loading="lazy" decoding="async" />
                    <div style={{"padding":"30px","flex":"1","display":"flex","flexDirection":"column"}}>
                        <div className="card-icon mb-3"><i className="ph ph-video-camera"></i></div>
                        <h3>CCTV & Security Systems</h3>
                        <p className="mb-3" style={{"flex":"1"}}>Advanced surveillance, access control, and integrated security solutions to protect your critical infrastructure.</p>
                        
                        <a href="/cctv-systems" className="btn btn-outline-blue w-100 text-center" style={{"display":"block"}}>Explore Details <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>

                {/* Commissioning */}
                <div className="service-card fade-in-up" style={{"padding":"0","overflow":"hidden","display":"flex","flexDirection":"column","backgroundColor":"#f8f9fa"}}>
                    <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop" alt="Commissioning" style={{"width":"100%","height":"220px","objectFit":"cover"}} />
                    <div style={{"padding":"30px","flex":"1","display":"flex","flexDirection":"column"}}>
                        <div className="card-icon mb-3"><i className="ph ph-list-checks"></i></div>
                        <h3>Pre-Commissioning</h3>
                        <p className="mb-3" style={{"flex":"1"}}>Ensuring every system operates flawlessly before launch. We manage the delicate transition from construction to live operation.</p>
                        
                        <a href="/pre-commissioning" className="btn btn-outline-blue w-100 text-center" style={{"display":"block"}}>Explore Details <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>
                
                {/* Manpower */}
                <div className="service-card fade-in-up delay-1" style={{"padding":"0","overflow":"hidden","display":"flex","flexDirection":"column","backgroundColor":"#f8f9fa"}}>
                    <img src="images/manpower_supply.webp" alt="Manpower Supply" style={{"width":"100%","height":"220px","objectFit":"cover"}}  width="678" height="452" loading="lazy" decoding="async" />
                    <div style={{"padding":"30px","flex":"1","display":"flex","flexDirection":"column"}}>
                        <div className="card-icon mb-3"><i className="ph ph-users-three"></i></div>
                        <h3>Manpower Supply</h3>
                        <p className="mb-3" style={{"flex":"1"}}>We provide skilled and experienced manpower to support construction, engineering, safety, quality, and operational project requirements.</p>
                        
                        <a href="/manpower-supply" className="btn btn-outline-blue w-100 text-center" style={{"display":"block"}}>Explore Details <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>

                {/* Transport */}
                <div className="service-card fade-in-up delay-2" style={{"padding":"0","overflow":"hidden","display":"flex","flexDirection":"column","backgroundColor":"#f8f9fa"}}>
                    <img src="images/user_transport.webp" alt="Transport Rental" style={{"width":"100%","height":"220px","objectFit":"cover"}}  width="570" height="388" loading="lazy" decoding="async" />
                    <div style={{"padding":"30px","flex":"1","display":"flex","flexDirection":"column"}}>
                        <div className="card-icon mb-3"><i className="ph ph-truck"></i></div>
                        <h3>Transport & Equipment</h3>
                        <p className="mb-3" style={{"flex":"1"}}>AXIS Infinity Structure provides transport solutions on a rental basis with or without drivers, supporting both project operations and executive mobility.</p>
                        
                        <a href="/transport-rental" className="btn btn-outline-blue w-100 text-center" style={{"display":"block"}}>Explore Details <i className="ph ph-arrow-right"></i></a>
                    </div>
                </div>
            
            {/* Service 7 */}
            <div className="service-card fade-in-up" style={{"padding":"0","overflow":"hidden","display":"flex","flexDirection":"column","backgroundColor":"#f8f9fa"}}>
                <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=800&auto=format&fit=crop" alt="Scaffolding" style={{"width":"100%","height":"220px","objectFit":"cover"}} />
                <div style={{"padding":"30px","flex":"1","display":"flex","flexDirection":"column"}}>
                    <div className="card-icon mb-3"><i className="ph ph-stairs"></i></div>
                    <h3>Scaffolding & Rigging</h3>
                    <p className="mb-3" style={{"flex":"1"}}>Safe, certified access and heavy lifting solutions for complex industrial environments.</p>
                    
                    <a href="/scaffolding-rigging" className="btn btn-outline-blue w-100 text-center" style={{"display":"block"}}>Explore Details <i className="ph ph-arrow-right"></i></a>
                </div>
            </div>

            {/* Service 8 */}
            <div className="service-card fade-in-up delay-1" style={{"padding":"0","overflow":"hidden","display":"flex","flexDirection":"column","backgroundColor":"#f8f9fa"}}>
                <img src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop" alt="Industrial Painting" style={{"width":"100%","height":"220px","objectFit":"cover"}} />
                <div style={{"padding":"30px","flex":"1","display":"flex","flexDirection":"column"}}>
                    <div className="card-icon mb-3"><i className="ph ph-paint-brush"></i></div>
                    <h3>Industrial Painting</h3>
                    <p className="mb-3" style={{"flex":"1"}}>Advanced surface preparation and protective anti-corrosion coating systems.</p>
                    
                    <a href="/industrial-painting" className="btn btn-outline-blue w-100 text-center" style={{"display":"block"}}>Explore Details <i className="ph ph-arrow-right"></i></a>
                </div>
            </div>

            {/* Service 9 */}
            <div className="service-card fade-in-up delay-2" style={{"padding":"0","overflow":"hidden","display":"flex","flexDirection":"column","backgroundColor":"#f8f9fa"}}>
                <img src="https://images.unsplash.com/photo-1615644248254-aa76a44546d8?q=80&w=800&auto=format&fit=crop" alt="Plant Shutdowns" style={{"width":"100%","height":"220px","objectFit":"cover"}} />
                <div style={{"padding":"30px","flex":"1","display":"flex","flexDirection":"column"}}>
                    <div className="card-icon mb-3"><i className="ph ph-calendar-check"></i></div>
                    <h3>Plant Shutdowns</h3>
                    <p className="mb-3" style={{"flex":"1"}}>Rapid, 24/7 execution to minimize downtime and maximize production during turnarounds.</p>
                    
                    <a href="/plant-shutdowns" className="btn btn-outline-blue w-100 text-center" style={{"display":"block"}}>Explore Details <i className="ph ph-arrow-right"></i></a>
                </div>
            </div>

            {/* Service 10 */}
            <div className="service-card fade-in-up" style={{"padding":"0","overflow":"hidden","display":"flex","flexDirection":"column","backgroundColor":"#f8f9fa"}}>
                <img src="images/hvac_maintenance_technician.webp" alt="HVAC Maintenance" style={{"width":"100%","height":"220px","objectFit":"cover"}}  width="1024" height="535" loading="lazy" decoding="async" />
                <div style={{"padding":"30px","flex":"1","display":"flex","flexDirection":"column"}}>
                    <div className="card-icon mb-3"><i className="ph ph-wind"></i></div>
                    <h3>HVAC & Maintenance</h3>
                    <p className="mb-3" style={{"flex":"1"}}>Heavy industrial climate control and ongoing facility maintenance contracts.</p>
                    
                    <a href="/hvac-maintenance" className="btn btn-outline-blue w-100 text-center" style={{"display":"block"}}>Explore Details <i className="ph ph-arrow-right"></i></a>
                </div>
            </div>

            {/* Service 11 */}
            <div className="service-card fade-in-up delay-1" style={{"padding":"0","overflow":"hidden","display":"flex","flexDirection":"column","backgroundColor":"#f8f9fa"}}>
                <img src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=800&auto=format&fit=crop" alt="Piping & Pipeline" style={{"width":"100%","height":"220px","objectFit":"cover"}} />
                <div style={{"padding":"30px","flex":"1","display":"flex","flexDirection":"column"}}>
                    <div className="card-icon mb-3"><i className="ph ph-pipe"></i></div>
                    <h3>Piping & Pipeline</h3>
                    <p className="mb-3" style={{"flex":"1"}}>Industrial piping fabrication and cross-country pipeline construction.</p>
                    
                    <a href="/piping-pipeline" className="btn btn-outline-blue w-100 text-center" style={{"display":"block"}}>Explore Details <i className="ph ph-arrow-right"></i></a>
                </div>
            </div>

            {/* Service 12 */}
            <div className="service-card fade-in-up delay-2" style={{"padding":"0","overflow":"hidden","display":"flex","flexDirection":"column","backgroundColor":"#f8f9fa"}}>
                <img src="images/service_steel_fabrication.webp" alt="Steel Fabrication" style={{"width":"100%","height":"220px","objectFit":"cover"}}  width="738" height="390" loading="lazy" decoding="async" />
                <div style={{"padding":"30px","flex":"1","display":"flex","flexDirection":"column"}}>
                    <div className="card-icon mb-3"><i className="ph ph-buildings"></i></div>
                    <h3>Steel Fabrication</h3>
                    <p className="mb-3" style={{"flex":"1"}}>Heavy structural steel fabrication and precise site erection services.</p>
                    
                    <a href="/steel-fabrication" className="btn btn-outline-blue w-100 text-center" style={{"display":"block"}}>Explore Details <i className="ph ph-arrow-right"></i></a>
                </div>
            </div>

            {/* Service 13 */}
            <div className="service-card fade-in-up" style={{"padding":"0","overflow":"hidden","display":"flex","flexDirection":"column","backgroundColor":"#f8f9fa"}}>
                <img src="images/service_industrial_insulation.webp" alt="Industrial Insulation" style={{"width":"100%","height":"220px","objectFit":"cover"}}  width="649" height="464" loading="lazy" decoding="async" />
                <div style={{"padding":"30px","flex":"1","display":"flex","flexDirection":"column"}}>
                    <div className="card-icon mb-3"><i className="ph ph-fire"></i></div>
                    <h3>Industrial Insulation</h3>
                    <p className="mb-3" style={{"flex":"1"}}>Thermal, acoustic, and cryogenic insulation for extreme industrial environments.</p>
                    
                    <a href="/industrial-insulation" className="btn btn-outline-blue w-100 text-center" style={{"display":"block"}}>Explore Details <i className="ph ph-arrow-right"></i></a>
                </div>
            </div>

            {/* Service 14 */}
            <div className="service-card fade-in-up delay-1" style={{"padding":"0","overflow":"hidden","display":"flex","flexDirection":"column","backgroundColor":"#f8f9fa"}}>
                <img src="images/service_ndt_inspection.webp" alt="NDT & Inspection" style={{"width":"100%","height":"220px","objectFit":"cover"}}  width="678" height="452" loading="lazy" decoding="async" />
                <div style={{"padding":"30px","flex":"1","display":"flex","flexDirection":"column"}}>
                    <div className="card-icon mb-3"><i className="ph ph-magnifying-glass"></i></div>
                    <h3>NDT & Inspection</h3>
                    <p className="mb-3" style={{"flex":"1"}}>Comprehensive Non-Destructive Testing and structural integrity analysis.</p>
                    
                    <a href="/ndt-inspection" className="btn btn-outline-blue w-100 text-center" style={{"display":"block"}}>Explore Details <i className="ph ph-arrow-right"></i></a>
                </div>
            </div>

            {/* Service 15 */}
            <div className="service-card fade-in-up delay-2" style={{"padding":"0","overflow":"hidden","display":"flex","flexDirection":"column","backgroundColor":"#f8f9fa"}}>
                <img src="images/service_marine_offshore.webp" alt="Marine & Offshore" style={{"width":"100%","height":"220px","objectFit":"cover"}}  width="545" height="366" loading="lazy" decoding="async" />
                <div style={{"padding":"30px","flex":"1","display":"flex","flexDirection":"column"}}>
                    <div className="card-icon mb-3"><i className="ph ph-anchor"></i></div>
                    <h3>Marine & Offshore</h3>
                    <p className="mb-3" style={{"flex":"1"}}>Engineering and construction for offshore platforms and marine infrastructure.</p>
                    
                    <a href="/marine-offshore" className="btn btn-outline-blue w-100 text-center" style={{"display":"block"}}>Explore Details <i className="ph ph-arrow-right"></i></a>
                </div>
            </div>

            {/* Service 16 */}
            <div className="service-card fade-in-up" style={{"padding":"0","overflow":"hidden","display":"flex","flexDirection":"column","backgroundColor":"#f8f9fa"}}>
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop" alt="Decommissioning" style={{"width":"100%","height":"220px","objectFit":"cover"}} />
                <div style={{"padding":"30px","flex":"1","display":"flex","flexDirection":"column"}}>
                    <div className="card-icon mb-3"><i className="ph ph-scissors"></i></div>
                    <h3>Decommissioning</h3>
                    <p className="mb-3" style={{"flex":"1"}}>Safe, environmentally responsible industrial plant demolition and dismantling.</p>
                    
                    <a href="/decommissioning" className="btn btn-outline-blue w-100 text-center" style={{"display":"block"}}>Explore Details <i className="ph ph-arrow-right"></i></a>
                </div>
            </div>

            {/* Service 17 */}
            <div className="service-card fade-in-up delay-1" style={{"padding":"0","overflow":"hidden","display":"flex","flexDirection":"column","backgroundColor":"#f8f9fa"}}>
                <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop" alt="Renewable Energy" style={{"width":"100%","height":"220px","objectFit":"cover"}} />
                <div style={{"padding":"30px","flex":"1","display":"flex","flexDirection":"column"}}>
                    <div className="card-icon mb-3"><i className="ph ph-sun"></i></div>
                    <h3>Renewable Energy</h3>
                    <p className="mb-3" style={{"flex":"1"}}>Construction and installation of utility-scale solar and wind facilities.</p>
                    
                    <a href="/renewable-energy" className="btn btn-outline-blue w-100 text-center" style={{"display":"block"}}>Explore Details <i className="ph ph-arrow-right"></i></a>
                </div>
            </div>

            {/* Service 18 */}
            <div className="service-card fade-in-up delay-2" style={{"padding":"0","overflow":"hidden","display":"flex","flexDirection":"column","backgroundColor":"#f8f9fa"}}>
                <img src="images/service_water_wastewater.webp" alt="Water Treatment" style={{"width":"100%","height":"220px","objectFit":"cover"}}  width="597" height="335" loading="lazy" decoding="async" />
                <div style={{"padding":"30px","flex":"1","display":"flex","flexDirection":"column"}}>
                    <div className="card-icon mb-3"><i className="ph ph-drop"></i></div>
                    <h3>Water & Wastewater</h3>
                    <p className="mb-3" style={{"flex":"1"}}>Engineering and construction of water treatment and desalination plants.</p>
                    
                    <a href="/water-treatment" className="btn btn-outline-blue w-100 text-center" style={{"display":"block"}}>Explore Details <i className="ph ph-arrow-right"></i></a>
                </div>
            </div>

            {/* Service 19 */}
            <div className="service-card fade-in-up" style={{"padding":"0","overflow":"hidden","display":"flex","flexDirection":"column","backgroundColor":"#f8f9fa"}}>
                <img src="images/service_geotechnical.webp" alt="Geotechnical Piling" style={{"width":"100%","height":"220px","objectFit":"cover"}}  width="480" height="359" loading="lazy" decoding="async" />
                <div style={{"padding":"30px","flex":"1","display":"flex","flexDirection":"column"}}>
                    <div className="card-icon mb-3"><i className="ph ph-arrow-down"></i></div>
                    <h3>Geotechnical & Piling</h3>
                    <p className="mb-3" style={{"flex":"1"}}>Deep foundations, piling, and advanced geotechnical engineering.</p>
                    
                    <a href="/geotechnical-piling" className="btn btn-outline-blue w-100 text-center" style={{"display":"block"}}>Explore Details <i className="ph ph-arrow-right"></i></a>
                </div>
            </div>

            {/* Service 20 */}
            <div className="service-card fade-in-up delay-1" style={{"padding":"0","overflow":"hidden","display":"flex","flexDirection":"column","backgroundColor":"#f8f9fa"}}>
                <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=800&auto=format&fit=crop" alt="Automation Control" style={{"width":"100%","height":"220px","objectFit":"cover"}} />
                <div style={{"padding":"30px","flex":"1","display":"flex","flexDirection":"column"}}>
                    <div className="card-icon mb-3"><i className="ph ph-cpu"></i></div>
                    <h3>Automation & Control</h3>
                    <p className="mb-3" style={{"flex":"1"}}>Industrial automation, DCS, PLC, and SCADA system integration.</p>
                    
                    <a href="/automation-control" className="btn btn-outline-blue w-100 text-center" style={{"display":"block"}}>Explore Details <i className="ph ph-arrow-right"></i></a>
                </div>
            </div>

            {/* Service 21 */}
            <div className="service-card fade-in-up delay-2" style={{"padding":"0","overflow":"hidden","display":"flex","flexDirection":"column","backgroundColor":"#f8f9fa"}}>
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop" alt="Environmental Management" style={{"width":"100%","height":"220px","objectFit":"cover"}} />
                <div style={{"padding":"30px","flex":"1","display":"flex","flexDirection":"column"}}>
                    <div className="card-icon mb-3"><i className="ph ph-kanban"></i></div>
                    <h3>Project Management & Support</h3>
                    <p className="mb-3" style={{"flex":"1"}}>Comprehensive project management, site supervision, and execution support.</p>
                    
                    <a href="/project-management" className="btn btn-outline-blue w-100 text-center" style={{"display":"block"}}>Explore Details <i className="ph ph-arrow-right"></i></a>
                </div>
            </div>

            {/* Service 23 */}
            <div className="service-card fade-in-up" style={{"padding":"0","overflow":"hidden","display":"flex","flexDirection":"column","backgroundColor":"#f8f9fa"}}>
                <img src="images/service_procurement.webp" alt="Procurement and Supply Chain" style={{"width":"100%","height":"220px","objectFit":"cover"}}  width="1024" height="1024" loading="lazy" decoding="async" />
                <div style={{"padding":"30px","flex":"1","display":"flex","flexDirection":"column"}}>
                    <div className="card-icon mb-3"><i className="ph ph-shopping-cart"></i></div>
                    <h3>Procurement & Supply Chain</h3>
                    <p className="mb-3" style={{"flex":"1"}}>Global sourcing, materials management, and logistics for complex industrial and construction projects.</p>
                    <a href="/services" className="btn btn-outline-blue w-100 text-center" style={{"display":"block"}}>Explore Details <i className="ph ph-arrow-right"></i></a>
                </div>
            </div>

            {/* Service 24 */}
            <div className="service-card fade-in-up delay-1" style={{"padding":"0","overflow":"hidden","display":"flex","flexDirection":"column","backgroundColor":"#f8f9fa"}}>
                <img src="images/service_facility.webp" alt="Facility Management" style={{"width":"100%","height":"220px","objectFit":"cover"}}  width="1024" height="1024" loading="lazy" decoding="async" />
                <div style={{"padding":"30px","flex":"1","display":"flex","flexDirection":"column"}}>
                    <div className="card-icon mb-3"><i className="ph ph-buildings"></i></div>
                    <h3>Facility Management</h3>
                    <p className="mb-3" style={{"flex":"1"}}>Comprehensive operation, maintenance, and facility management services for long-term asset reliability.</p>
                    <a href="/services" className="btn btn-outline-blue w-100 text-center" style={{"display":"block"}}>Explore Details <i className="ph ph-arrow-right"></i></a>
                </div>
            </div>

            </div>
        </div>
    </section>

        {/* Footer */}
    </AnimatedPage>
  );
}
