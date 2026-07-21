import React, { useEffect } from 'react';
import OrgChart from '../components/common/OrgChart';

export default function Team() {
  useEffect(() => {
    document.title = "Our Organizational Structure, AXIS INFINITY STRUCTURE";
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
/* FULL INFOGRAPHIC TREE */
.org-wrapper {
    background-color: #faebd7; /* Warm Peach */
    padding: 80px 0;
    font-family: 'Merriweather', serif;
    overflow-x: auto;
}

.info-tree {
    display: inline-block;
    margin: 0 auto;
    white-space: nowrap;
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
    padding: 30px 15px 0 15px;
    transition: all 0.5s;
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

.info-node {
    display: inline-block;
    text-align: center;
    text-decoration: none;
    position: relative;
    width: 140px; /* Gives some room for text */
    white-space: normal;
    vertical-align: top;
}

.info-circle {
    width: 90px;
    height: 90px;
    background-color: #0c4f42;
    border-radius: 50%;
    margin: 0 auto 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 4px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.info-circle img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.info-node h4 {
    color: #0c4f42;
    font-size: 1rem;
    font-weight: 800;
    margin: 0 0 5px 0;
    line-height: 1.2;
}

.info-node p {
    color: #0c4f42;
    font-size: 0.8rem;
    font-style: italic;
    margin: 0;
    line-height: 1.3;
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


/* MODERN SAAS CARDS IN A TREE STRUCTURE */
.hybrid-org-wrapper {
    background-color: #f8fafc;
    padding: 80px 0;
    font-family: 'Inter', sans-serif;
    overflow-x: auto;
}

.hybrid-tree {
    display: inline-block;
    margin: 0 auto;
    white-space: nowrap;
    text-align: center;
}

.hybrid-tree ul {
    padding-top: 40px;
    position: relative;
    display: flex;
    justify-content: center;
    padding-left: 0;
    margin: 0;
}

.hybrid-tree li {
    float: left;
    text-align: center;
    list-style-type: none;
    position: relative;
    padding: 40px 15px 0 15px;
}

/* Connecting Lines */
.hybrid-tree li::before, .hybrid-tree li::after {
    content: '';
    position: absolute;
    top: 0;
    right: 50%;
    border-top: 2px solid #cbd5e1; /* Subtle slate grey lines */
    width: 50%;
    height: 40px;
}

.hybrid-tree li::after {
    right: auto;
    left: 50%;
    border-left: 2px solid #cbd5e1;
}

.hybrid-tree li:only-child::after, .hybrid-tree li:only-child::before {
    display: none;
}
.hybrid-tree li:only-child {
    padding-top: 0;
}

.hybrid-tree li:first-child::before, .hybrid-tree li:last-child::after {
    border: 0 none;
}

.hybrid-tree li:last-child::before {
    border-right: 2px solid #cbd5e1;
    border-radius: 0 8px 0 0;
}
.hybrid-tree li:first-child::after {
    border-radius: 8px 0 0 0;
}

.hybrid-tree ul ul::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    border-left: 2px solid #cbd5e1;
    width: 0;
    height: 40px;
}

/* Modern Card Node */
.hybrid-node {
    display: inline-block;
    text-align: left;
    text-decoration: none;
    position: relative;
    white-space: normal;
    vertical-align: top;
    
    /* Card Styles */
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
    border: 1px solid #e2e8f0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    width: 240px; /* Specific width for tree nodes to prevent extreme stretching */
    display: flex;
    flex-direction: column;
}

.hybrid-node:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
    border-color: #cbd5e1;
}

.hybrid-node-img {
    height: 220px;
    width: 100%;
    position: relative;
    background: #f1f5f9;
}

.hybrid-node-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
}

.hybrid-node-body {
    padding: 16px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.hybrid-role {
    color: #3b82f6;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 6px;
}

.hybrid-name {
    color: #0f172a;
    font-size: 1.1rem;
    font-weight: 700;
    margin: 0;
    font-family: 'Inter', sans-serif;
}


/* FLAWLESS INFOGRAPHIC TREE */
.flawless-org-wrapper {
    background-color: #fce9d2; /* Exact peach background from screenshot */
    padding: 80px 0;
    font-family: 'Merriweather', serif; /* Elegant font */
}

.tree-container {
    display: flex;
    justify-content: center;
    overflow-x: auto;
    padding: 20px;
}

.flawless-tree {
    display: inline-flex;
    margin: 0 auto;
}

.flawless-tree ul {
    display: flex;
    justify-content: center;
    position: relative;
    padding-top: 30px;
    margin: 0;
    padding-left: 0;
}

.flawless-tree li {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 30px 10px 0;
    list-style-type: none;
}

/* Connecting Lines */
.flawless-tree li::before, .flawless-tree li::after {
    content: '';
    position: absolute;
    top: 0;
    right: 50%;
    border-top: 2px solid #0b4d45; /* Exact dark green */
    width: 50%;
    height: 30px;
}

.flawless-tree li::after {
    right: auto;
    left: 50%;
    border-left: 2px solid #0b4d45;
}

.flawless-tree li:only-child::after, .flawless-tree li:only-child::before {
    display: none;
}
.flawless-tree li:only-child {
    padding-top: 0;
}
.flawless-tree li:first-child::before, .flawless-tree li:last-child::after {
    border: 0 none;
}
.flawless-tree li:last-child::before {
    border-right: 2px solid #0b4d45;
}

.flawless-tree ul ul::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    border-left: 2px solid #0b4d45;
    width: 0;
    height: 30px;
}

/* Node Styling */
.flawless-node {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 120px; /* Restrict width to keep tree compact */
}

.flawless-circle {
    width: 90px;
    height: 90px;
    background-color: white; /* Inner gap */
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 4px;
    margin-bottom: 15px;
    border: 3px solid #0b4d45; /* Premium outer ring */
    box-shadow: 0 10px 20px rgba(11, 77, 69, 0.15); /* Soft depth */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.flawless-node:hover .flawless-circle {
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(11, 77, 69, 0.25);
}

.flawless-name {
    color: #0b4d45;
    font-weight: 800;
    font-size: 1rem;
    margin: 0 0 8px 0;
    line-height: 1.2;
    position: relative;
    padding-bottom: 6px;
}

.flawless-name::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 2px;
    background-color: #0b4d45;
    opacity: 0.4;
}

.secondary-header {
    margin-top: 80px;
    margin-bottom: 30px;
    text-align: center;
    position: relative;
}

.secondary-header h3 {
    color: #0b4d45;
    font-family: 'Merriweather', serif;
    font-size: 2rem;
    display: inline-block;
    padding: 0 20px;
    background: #fce9d2;
    position: relative;
    z-index: 1;
}

.secondary-header::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 10%;
    right: 10%;
    height: 1px;
    background: rgba(11, 77, 69, 0.2);
    z-index: 0;
}

.flawless-circle img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    background: white;
}

.flawless-name {
    color: #0b4d45;
    font-weight: 800;
    font-size: 0.95rem;
    margin: 0 0 4px 0;
    line-height: 1.2;
}

.flawless-role {
    color: #0b4d45;
    font-style: italic;
    font-size: 0.8rem;
    margin: 0;
    line-height: 1.2;
}

/* Page Header */
.flawless-header h2 {
    color: #0b4d45;
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 40px;
    text-align: center;
    font-family: 'Merriweather', serif;
}


/* HIGH-END CORPORATE TEAM GRID */
.corporate-team-section {
    padding: 100px 0;
    background-color: #f8fafc; /* Professional light slate */
    font-family: 'Inter', sans-serif;
}

.corporate-header {
    text-align: center;
    margin-bottom: 80px;
}
.corporate-header h2 {
    font-size: 3rem;
    font-weight: 800;
    color: #0f172a;
    letter-spacing: -0.02em;
    margin-bottom: 20px;
}
.corporate-header p {
    color: #475569;
    font-size: 1.15rem;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

.corporate-category {
    margin-bottom: 80px;
}

.corporate-category-title {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
}
.corporate-category-title h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1e293b;
    margin: 0;
    white-space: nowrap;
    padding-right: 20px;
}
.corporate-category-title::after {
    content: '';
    flex-grow: 1;
    height: 1px;
    background-color: #cbd5e1;
}

.corporate-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 40px;
}

.corporate-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.05);
    border: 1px solid #e2e8f0;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
}

.corporate-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1);
}

.corporate-card-img {
    width: 100%;
    height: 320px; /* Tall portrait ratio */
    background-color: #f1f5f9;
}

.corporate-card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
}

.corporate-card-info {
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    border-top: 3px solid #0056b3; /* AXIS Infinity Structure Blue accent */
}

.corporate-card-role {
    color: #0056b3;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 8px;
}

.corporate-card-name {
    color: #0f172a;
    font-size: 1.3rem;
    font-weight: 700;
    margin: 0;
}


/* DARK POLAROID TEAM DESIGN */
.polaroid-section {
    background-color: var(--clr-white); /* Dark charcoal */
    padding: 100px 0;
    font-family: 'Inter', sans-serif;
}

.polaroid-header {
    text-align: center;
    margin-bottom: 70px;
    color: #e5e3db; /* Off-white / Beige */
}

.polaroid-header h3 {
    font-size: 2.2rem;
    font-weight: 400;
    margin: 0;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.polaroid-header h2 {
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
    color: var(--clr-blue);
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
    transform: scale(1.1) rotate(1deg);
    opacity: 0.5;
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


                :root {
                    --org-gap: 30px;
                }
                .org-wrapper {
                    margin-top: 60px;
                    padding-bottom: 40px;
                    overflow: visible !important; /* Prevent layout clipping before scaling */
                    display: flex !important;
                    justify-content: center !important;
                    width: 100% !important;
                }
                .org-inner-container {
                    min-width: 1750px;
                    padding-bottom: 20px;
                    margin: 0 auto;
                }
                .org-card {
                    background: var(--clr-white);
                    border: 2px solid var(--clr-navy);
                    padding: 22px 16px;
                    border-radius: 12px;
                    text-align: center;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.06);
                    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
                    width: 270px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 5;
                }
                .org-card h4 {
                    color: var(--clr-navy);
                    font-family: var(--font-heading);
                    font-size: 1.1rem;
                    font-weight: 800;
                    margin: 0;
                    line-height: 1.25;
                }
                .org-card p {
                    color: var(--clr-blue);
                    font-weight: 700;
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    margin: 5px 0 0 0;
                }
                .org-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 12px 35px rgba(0,0,0,0.12);
                }
                
                /* Custom card colors from user org chart diagram */
                .org-card.partners-box,
                .org-card.ceo-box,
                .org-card.md-box {
                    background-color: #0b2240 !important;
                    border-color: #051020 !important;
                    color: var(--clr-white) !important;
                }
                .org-card.partners-box h4,
                .org-card.ceo-box h4,
                .org-card.md-box h4 {
                    color: var(--clr-white) !important;
                }
                
                .org-card.ops-box {
                    background-color: #7acc82 !important;
                    border-color: #55a05a !important;
                    color: #0b2240 !important;
                }
                .org-card.ops-box h4 { color: #0b2240 !important; }
                
                .org-card.deputy-box {
                    background-color: #fbd172 !important;
                    border-color: #d5aa3c !important;
                    color: #0b2240 !important;
                }
                .org-card.deputy-box h4 { color: #0b2240 !important; }
                
                .org-card.finance-box,
                .org-card.project-box,
                .org-card.safety-box {
                    background-color: #aed8f2 !important;
                    border-color: #4a90e2 !important;
                    color: #0b2240 !important;
                }
                .org-card.finance-box h4,
                .org-card.project-box h4,
                .org-card.safety-box h4 { color: #0b2240 !important; }
                
                .org-card.qa-box,
                .org-card.qc-box {
                    background-color: #c9b3e6 !important;
                    border-color: #8c67c7 !important;
                    color: #0b2240 !important;
                }
                .org-card.qa-box h4,
                .org-card.qc-box h4 { color: #0b2240 !important; }
                
                .org-card.const-box {
                    background-color: #f7a072 !important;
                    border-color: #d46b38 !important;
                    color: var(--clr-white) !important;
                }
                .org-card.const-box h4 { color: var(--clr-white) !important; }
                
                .org-card.safety-officer-box {
                    background-color: #d1ecc9 !important;
                    border-color: #8bbf80 !important;
                    color: #0b2240 !important;
                }
                .org-card.safety-officer-box h4 { color: #0b2240 !important; }
                
                .org-card.team-leader-box {
                    background-color: #fbe695 !important;
                    border-color: #cbb039 !important;
                    color: #0b2240 !important;
                }
                .org-card.team-leader-box h4 { color: #0b2240 !important; }
                
                .org-card.worker-box {
                    background-color: var(--clr-white) !important;
                    border-color: #b0c4de !important;
                    color: #0b2240 !important;
                }
                .org-card.worker-box h4 { color: #0b2240 !important; }
                
                /* Dashed connection for Deputy Manager functional support */
                .org-branch.deputy-branch::before {
                    border-left: 2px dashed var(--clr-blue) !important;
                    background: none !important;
                }

                .org-line-v {
                    width: 2px;
                    height: 40px;
                    background: var(--clr-blue);
                    margin: 0 auto;
                }
                
                .org-level {
                    display: flex;
                    justify-content: center;
                    position: relative;
                    width: 100%;
                    gap: var(--org-gap); /* Space between branches horizontally to prevent overlap */
                }
                
                /* AUTOMATIC CSS HORIZONTAL LINES WITH GAP OFFSET */
                .org-level > .org-branch::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: calc(-1 * var(--org-gap) / 2);
                    right: calc(-1 * var(--org-gap) / 2);
                    height: 2px;
                    background: var(--clr-blue);
                    z-index: 1;
                }
                .org-level > .org-branch:first-child::after {
                    left: 50%;
                }
                .org-level > .org-branch:last-child::after {
                    right: 50%;
                }
                .org-level > .org-branch:only-child::after {
                    display: none;
                }
                
                .org-branch {
                    flex: 1;
                    position: relative;
                    padding-top: 40px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                
                .org-branch::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 2px;
                    height: 40px;
                    background: var(--clr-blue);
                    z-index: 2;
                }

                /* Responsive Scaled Desktop & Vertical Mobile Layout */
                @media (min-width: 992px) and (max-width: 1300px) {
                    .org-wrapper {
                        overflow-x: hidden !important;
                    }
                    .org-inner-container {
                        transform: scale(0.53);
                        transform-origin: top center;
                        margin-bottom: -540px;
                        min-width: 1750px !important;
                    }
                }
                
                @media (min-width: 1301px) and (max-width: 1600px) {
                    .org-wrapper {
                        overflow-x: hidden !important;
                    }
                    .org-inner-container {
                        transform: scale(0.7);
                        transform-origin: top center;
                        margin-bottom: -320px;
                        min-width: 1750px !important;
                    }
                }
                
                @media (min-width: 1601px) and (max-width: 1800px) {
                    .org-wrapper {
                        overflow-x: hidden !important;
                    }
                    .org-inner-container {
                        transform: scale(0.85);
                        transform-origin: top center;
                        margin-bottom: -150px;
                        min-width: 1750px !important;
                    }
                }

                @media (max-width: 991px) {
                    .org-wrapper {
                        overflow-x: hidden !important;
                        padding: 30px 10px !important;
                        overflow: hidden !important;
                    }
                    .org-inner-container {
                        min-width: 100% !important;
                        width: 100% !important;
                        display: flex !important;
                        flex-direction: column !important;
                        align-items: center !important;
                    }
                    .org-level {
                        flex-direction: column !important;
                        align-items: center !important;
                        width: 100% !important;
                        gap: 20px !important;
                    }
                    .org-branch {
                        width: 100% !important;
                        flex: none !important;
                        padding-top: 25px !important;
                        padding-bottom: 25px !important;
                        display: flex !important;
                        flex-direction: column !important;
                        align-items: center !important;
                    }
                    .org-branch::before {
                        height: 25px !important;
                    }
                    .org-branch::after {
                        display: none !important;
                    }
                    .org-line-h {
                        display: none !important;
                    }
                    .org-line-v {
                        height: 25px !important;
                    }
                    .org-card {
                        width: 270px !important;
                        margin: 0 auto !important;
                    }
                    .org-branch .org-level {
                        display: flex !important;
                        flex-direction: column !important;
                        align-items: center !important;
                        gap: 15px !important;
                    }
                    .org-branch .org-level .org-branch {
                        padding-top: 0 !important;
                        padding-bottom: 0 !important;
                    }
                    .org-branch .org-level .org-branch::before {
                        display: none !important;
                    }
                }
            ` }} />
      {/* Page Banner */}
    <section className="page-banner" style={{"backgroundImage":"url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop')"}}>
        <div className="container fade-in-up">
            <h1>Our Organizational Structure</h1>
            <p>A clear view of our multidisciplinary leadership and operational hierarchy.</p>
        </div>
    </section>

    {/* Dark Polaroid Team Layout */}
    <section className="polaroid-section">
        <div className="container" style={{"maxWidth":"1280px"}}>
            {/* Category: Executive Board */}
            <div className="polaroid-category fade-in-up">
                <div className="polaroid-category-title">
                    <h4>Executive Board</h4>
                </div>
                <div className="polaroid-grid" style={{"maxWidth":"750px"}}>
                    <div className="polaroid-card">
                        <div className="polaroid-img-wrapper" style={{"position":"relative"}}>
                            <div style={{"position":"absolute","top":"15px","right":"15px","zIndex":"10","display":"flex","gap":"8px"}}>
                                <img src="/images/flags/pk.svg" alt="PAK" style={{"width":"36px","height":"24px","borderRadius":"3px","boxShadow":"0 4px 8px rgba(0,0,0,0.8)","border":"2px solid white"}} />
                                <img src="/images/flags/sa.svg" alt="KSA" style={{"width":"36px","height":"24px","borderRadius":"3px","boxShadow":"0 4px 8px rgba(0,0,0,0.8)","border":"2px solid white"}} />
                            </div>
                            <img src="images/team/ceo_and_gm_mobeen_zia.webp" alt="Mobeen Zia"  width="1200" height="1200" loading="lazy" decoding="async" />
                        </div>
                        <div className="polaroid-info">
                            <h4 className="polaroid-name">Mobeen Zia</h4>
                            <div className="polaroid-role">CEO & Founder</div>
                        </div>
                    </div>
                    <div className="polaroid-card">
                        <div className="polaroid-img-wrapper" style={{"position":"relative"}}>
                            <div style={{"position":"absolute","top":"15px","right":"15px","zIndex":"10","display":"flex","gap":"8px"}}>
                                <img src="/images/flags/pk.svg" alt="PAK" style={{"width":"36px","height":"24px","borderRadius":"3px","boxShadow":"0 4px 8px rgba(0,0,0,0.8)","border":"2px solid white"}} />
                                <img src="/images/flags/sa.svg" alt="KSA" style={{"width":"36px","height":"24px","borderRadius":"3px","boxShadow":"0 4px 8px rgba(0,0,0,0.8)","border":"2px solid white"}} />
                            </div>
                            <img src="images/team/partner_mujeeb_ali.webp" alt="Mujeeb Ali"  width="400" height="533" loading="lazy" decoding="async" />
                        </div>
                        <div className="polaroid-info">
                            <h4 className="polaroid-name">Mujeeb Ali</h4>
                            <div className="polaroid-role">Co-Founder & MD</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Category: Operations & Management */}
            <div className="polaroid-category fade-in-up delay-1">
                <div className="polaroid-category-title">
                    <h4>Operations & Management</h4>
                </div>
                <div className="polaroid-grid" style={{"maxWidth":"100%","gap":"20px"}}>
                    <div className="polaroid-card" style={{"flexBasis":"260px"}}>
                        <div className="polaroid-img-wrapper" style={{"position":"relative"}}>
                            <div style={{"position":"absolute","top":"15px","right":"15px","zIndex":"10","display":"flex","gap":"8px"}}>
                                <img src="/images/flags/pk.svg" alt="PAK" style={{"width":"36px","height":"24px","borderRadius":"3px","boxShadow":"0 4px 8px rgba(0,0,0,0.8)","border":"2px solid white"}} />
                                <img src="/images/flags/sa.svg" alt="KSA" style={{"width":"36px","height":"24px","borderRadius":"3px","boxShadow":"0 4px 8px rgba(0,0,0,0.8)","border":"2px solid white"}} />
                            </div>
                            <img src="images/team/Kashif naveed operational manger.webp" alt="Ch Kashif Naveed"  width="1086" height="1448" loading="lazy" decoding="async" />
                        </div>
                        <div className="polaroid-info">
                            <h4 className="polaroid-name">Ch Kashif Naveed</h4>
                            <div className="polaroid-role">Operations Manager</div>
                        </div>
                    </div>
                    <div className="polaroid-card" style={{"flexBasis":"260px"}}>
                        <div className="polaroid-img-wrapper" style={{"position":"relative"}}>
                            <div style={{"position":"absolute","top":"15px","right":"15px","zIndex":"10","display":"flex","gap":"8px"}}>
                                <img src="/images/flags/pk.svg" alt="PAK" style={{"width":"36px","height":"24px","borderRadius":"3px","boxShadow":"0 4px 8px rgba(0,0,0,0.8)","border":"2px solid white"}} />
                            </div>
                            <img src="images/team/deputy_manager_pak_sohail_akhtar.webp" alt="Sohail Akhtar"  width="400" height="533" loading="lazy" decoding="async" />
                        </div>
                        <div className="polaroid-info">
                            <h4 className="polaroid-name">Sohail Akhtar</h4>
                            <div className="polaroid-role">Deputy Manager</div>
                        </div>
                    </div>
                    <div className="polaroid-card" style={{"flexBasis":"260px"}}>
                        <div className="polaroid-img-wrapper" style={{"position":"relative"}}>
                            <div style={{"position":"absolute","top":"15px","right":"15px","zIndex":"10","display":"flex","gap":"8px"}}>
                                <img src="/images/flags/pk.svg" alt="PAK" style={{"width":"36px","height":"24px","borderRadius":"3px","boxShadow":"0 4px 8px rgba(0,0,0,0.8)","border":"2px solid white"}} />
                                <img src="/images/flags/sa.svg" alt="KSA" style={{"width":"36px","height":"24px","borderRadius":"3px","boxShadow":"0 4px 8px rgba(0,0,0,0.8)","border":"2px solid white"}} />
                            </div>
                            <img src="images/team/hr and fiance manger tallal majeed.webp" alt="Tallal Majeed"  width="1200" height="1007" loading="lazy" decoding="async" />
                        </div>
                        <div className="polaroid-info">
                            <h4 className="polaroid-name">Ch Tallal Majeed</h4>
                            <div className="polaroid-role">Finance & HR Manager</div>
                        </div>
                    </div>
                    <div className="polaroid-card" style={{"flexBasis":"260px"}}>
                        <div className="polaroid-img-wrapper" style={{"position":"relative"}}>
                            <div style={{"position":"absolute","top":"15px","right":"15px","zIndex":"10","display":"flex","gap":"8px"}}>
                                <img src="/images/flags/pk.svg" alt="PAK" style={{"width":"36px","height":"24px","borderRadius":"3px","boxShadow":"0 4px 8px rgba(0,0,0,0.8)","border":"2px solid white"}} />
                            </div>
                            <img src="images/team/project_manager_pak_moin_anwar.webp" alt="Moin Anwar"  width="400" height="533" loading="lazy" decoding="async" />
                        </div>
                        <div className="polaroid-info">
                            <h4 className="polaroid-name">Ch Moin Anwar</h4>
                            <div className="polaroid-role">Project Manager</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Category: Technical & Site Leaders */}
            <div className="polaroid-category fade-in-up delay-2">
                <div className="polaroid-category-title">
                    <h4>Technical & Site Leaders</h4>
                </div>
                <div className="polaroid-grid">
                    <div className="polaroid-card">
                        <div className="polaroid-img-wrapper" style={{"position":"relative"}}>
                            <div style={{"position":"absolute","top":"15px","right":"15px","zIndex":"10","display":"flex","gap":"8px"}}>
                                <img src="/images/flags/pk.svg" alt="PAK" style={{"width":"36px","height":"24px","borderRadius":"3px","boxShadow":"0 4px 8px rgba(0,0,0,0.8)","border":"2px solid white"}} />
                                <img src="/images/flags/sa.svg" alt="KSA" style={{"width":"36px","height":"24px","borderRadius":"3px","boxShadow":"0 4px 8px rgba(0,0,0,0.8)","border":"2px solid white"}} />
                            </div>
                            <img src="images/team/qa_qc_manager_mdawood_arif_ksa.webp" alt="Arif Dawood"  width="400" height="500" loading="lazy" decoding="async" />
                        </div>
                        <div className="polaroid-info">
                            <h4 className="polaroid-name">Arif Dawood</h4>
                            <div className="polaroid-role">QA / QC Manager</div>
                        </div>
                    </div>
                    <div className="polaroid-card">
                        <div className="polaroid-img-wrapper" style={{"position":"relative"}}>
                            <div style={{"position":"absolute","top":"15px","right":"15px","zIndex":"10","display":"flex","gap":"8px"}}>
                                <img src="/images/flags/pk.svg" alt="PAK" style={{"width":"36px","height":"24px","borderRadius":"3px","boxShadow":"0 4px 8px rgba(0,0,0,0.8)","border":"2px solid white"}} />
                            </div>
                            <img src="images/team/construction_manager_pak_naeem_ahmad.webp" alt="Naeem"  width="400" height="533" loading="lazy" decoding="async" />
                        </div>
                        <div className="polaroid-info">
                            <h4 className="polaroid-name">Naeem</h4>
                            <div className="polaroid-role">Construction Manager</div>
                        </div>
                    </div>
                    <div className="polaroid-card">
                        <div className="polaroid-img-wrapper" style={{"position":"relative"}}>
                            <div style={{"position":"absolute","top":"15px","right":"15px","zIndex":"10","display":"flex","gap":"8px"}}>
                                <img src="/images/flags/pk.svg" alt="PAK" style={{"width":"36px","height":"24px","borderRadius":"3px","boxShadow":"0 4px 8px rgba(0,0,0,0.8)","border":"2px solid white"}} />
                            </div>
                            <img src="images/team/civil_team_leader_pak_saifullah_khalid.webp" alt="Saifullah Khalid"  width="400" height="533" loading="lazy" decoding="async" />
                        </div>
                        <div className="polaroid-info">
                            <h4 className="polaroid-name">Saifullah Khalid</h4>
                            <div className="polaroid-role">Civil Team Leader</div>
                        </div>
                    </div>
                    <div className="polaroid-card">
                        <div className="polaroid-img-wrapper" style={{"position":"relative"}}>
                            <div style={{"position":"absolute","top":"15px","right":"15px","zIndex":"10","display":"flex","gap":"8px"}}>
                                <img src="/images/flags/pk.svg" alt="PAK" style={{"width":"36px","height":"24px","borderRadius":"3px","boxShadow":"0 4px 8px rgba(0,0,0,0.8)","border":"2px solid white"}} />
                                <img src="/images/flags/sa.svg" alt="KSA" style={{"width":"36px","height":"24px","borderRadius":"3px","boxShadow":"0 4px 8px rgba(0,0,0,0.8)","border":"2px solid white"}} />
                            </div>
                            <img src="images/team/mechanical_leader.webp" alt="Sakhawat Ali"  width="400" height="400" loading="lazy" decoding="async" />
                        </div>
                        <div className="polaroid-info">
                            <h4 className="polaroid-name">Sakhawat Ali</h4>
                            <div className="polaroid-role">Mechanical Team Leader</div>
                        </div>
                    </div>
                    <div className="polaroid-card">
                        <div className="polaroid-img-wrapper" style={{"position":"relative"}}>
                            <div style={{"position":"absolute","top":"15px","right":"15px","zIndex":"10","display":"flex","gap":"8px"}}>
                                <img src="/images/flags/sa.svg" alt="KSA" style={{"width":"36px","height":"24px","borderRadius":"3px","boxShadow":"0 4px 8px rgba(0,0,0,0.8)","border":"2px solid white"}} />
                            </div>
                            <img src="images/team/eiand_t_team_leader_ksa_saeed_imran.webp" alt="Saeed Imran"  width="400" height="533" loading="lazy" decoding="async" />
                        </div>
                        <div className="polaroid-info">
                            <h4 className="polaroid-name">Saeed Imran</h4>
                            <div className="polaroid-role">E, I & Telecom Leader</div>
                        </div>
                    </div>
                    <div className="polaroid-card">
                        <div className="polaroid-img-wrapper" style={{"position":"relative"}}>
                            <div style={{"position":"absolute","top":"15px","right":"15px","zIndex":"10","display":"flex","gap":"8px"}}>
                                <img src="/images/flags/sa.svg" alt="KSA" style={{"width":"36px","height":"24px","borderRadius":"3px","boxShadow":"0 4px 8px rgba(0,0,0,0.8)","border":"2px solid white"}} />
                            </div>
                            <img src="images/team/hse_manager_kse_tahir_zameer.webp" alt="Tahir Zameer"  width="400" height="533" loading="lazy" decoding="async" />
                        </div>
                        <div className="polaroid-info">
                            <h4 className="polaroid-name">Tahir Zameer</h4>
                            <div className="polaroid-role">Safety Manager</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Category: Support & Administration */}
            <div className="polaroid-category fade-in-up delay-3" style={{"marginBottom":"0"}}>
                <div className="polaroid-category-title">
                    <h4>Support & Administration</h4>
                </div>
                <div className="polaroid-grid" style={{"maxWidth":"100%","gap":"20px"}}>
                    <div className="polaroid-card" style={{"flexBasis":"260px"}}>
                        <div className="polaroid-img-wrapper" style={{"position":"relative"}}>
                            <div style={{"position":"absolute","top":"15px","right":"15px","zIndex":"10","display":"flex","gap":"8px"}}>
                                <img src="/images/flags/pk.svg" alt="PAK" style={{"width":"36px","height":"24px","borderRadius":"3px","boxShadow":"0 4px 8px rgba(0,0,0,0.8)","border":"2px solid white"}} />
                                <img src="/images/flags/sa.svg" alt="KSA" style={{"width":"36px","height":"24px","borderRadius":"3px","boxShadow":"0 4px 8px rgba(0,0,0,0.8)","border":"2px solid white"}} />
                            </div>
                            <img src="images/team/technical_manager_mep_basit_aslam.webp" alt="Basit Aslam"  width="400" height="335" loading="lazy" decoding="async" />
                        </div>
                        <div className="polaroid-info">
                            <h4 className="polaroid-name">Basit Aslam</h4>
                            <div className="polaroid-role">Technical Manager MEP</div>
                        </div>
                    </div>
                    <div className="polaroid-card" style={{"flexBasis":"260px"}}>
                        <div className="polaroid-img-wrapper" style={{"position":"relative"}}>
                            <div style={{"position":"absolute","top":"15px","right":"15px","zIndex":"10","display":"flex","gap":"8px"}}>
                                <img src="/images/flags/pk.svg" alt="PAK" style={{"width":"36px","height":"24px","borderRadius":"3px","boxShadow":"0 4px 8px rgba(0,0,0,0.8)","border":"2px solid white"}} />
                            </div>
                            <img src="images/team/transporation_haed_pak_imarn_soomro.webp" alt="Imran Soomro"  width="400" height="430" loading="lazy" decoding="async" />
                        </div>
                        <div className="polaroid-info">
                            <h4 className="polaroid-name">Imran Soomro</h4>
                            <div className="polaroid-role">Transportation Head</div>
                        </div>
                    </div>
                    <div className="polaroid-card" style={{"flexBasis":"260px"}}>
                        <div className="polaroid-img-wrapper" style={{"position":"relative"}}>
                            <div style={{"position":"absolute","top":"15px","right":"15px","zIndex":"10","display":"flex","gap":"8px"}}>
                                <img src="/images/flags/pk.svg" alt="PAK" style={{"width":"36px","height":"24px","borderRadius":"3px","boxShadow":"0 4px 8px rgba(0,0,0,0.8)","border":"2px solid white"}} />
                                <img src="/images/flags/sa.svg" alt="KSA" style={{"width":"36px","height":"24px","borderRadius":"3px","boxShadow":"0 4px 8px rgba(0,0,0,0.8)","border":"2px solid white"}} />
                            </div>
                            <img src="images/team/marketing manager abdullah akhtar.webp" style={{"objectPosition":"bottom"}} alt="Abdullah Akhtar"  width="1023" height="1537" loading="lazy" decoding="async" />
                        </div>
                        <div className="polaroid-info">
                            <h4 className="polaroid-name">Abdullah Akhtar</h4>
                            <div className="polaroid-role">Marketing Manager</div>
                        </div>
                    </div>
                    <div className="polaroid-card" style={{"flexBasis":"260px"}}>
                        <div className="polaroid-img-wrapper" style={{"position":"relative"}}>
                            <div style={{"position":"absolute","top":"15px","right":"15px","zIndex":"10","display":"flex","gap":"8px"}}>
                                <img src="/images/flags/pk.svg" alt="PAK" style={{"width":"36px","height":"24px","borderRadius":"3px","boxShadow":"0 4px 8px rgba(0,0,0,0.8)","border":"2px solid white"}} />
                                <img src="/images/flags/sa.svg" alt="KSA" style={{"width":"36px","height":"24px","borderRadius":"3px","boxShadow":"0 4px 8px rgba(0,0,0,0.8)","border":"2px solid white"}} />
                            </div>
                            <img src="images/team/M rashad hr & coordinTOR.webp" alt="M Rashad"  width="1086" height="1448" loading="lazy" decoding="async" />
                        </div>
                        <div className="polaroid-info">
                            <h4 className="polaroid-name">M Rashad</h4>
                            <div className="polaroid-role">HR & Coordinator</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Organizational Structure Section */}
    <section id="org-structure" className="section-padding bg-off-white" style={{ borderTop: "1px solid rgba(0,0,0,0.05)", overflow: "hidden" }}>
        <div className="container">
            <div className="section-header text-center fade-in-up mb-5">
                <span className="section-label">Company Hierarchy</span>
                <h2 style={{ color: "var(--clr-navy)" }}>Organizational Structure</h2>
                <p className="max-w-800 mx-auto" style={{ color: "var(--clr-text)" }}>A streamlined, highly efficient corporate hierarchy designed to deliver massive infrastructure projects with absolute precision.</p>
            </div>
            
            <div className="fade-in-up delay-1">
                <OrgChart />
            </div>

            {/* Reporting Structure Summary */}
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '40px', padding: '0 10px' }}>
                <div style={{ background: '#FFFFFF', border: '1.5px solid #E2D6C0', borderRadius: '18px', padding: '24px 30px', maxWidth: '850px', width: '100%', boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
                    <h5 style={{ fontWeight: '800', fontSize: '1rem', color: '#0F1B3A', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1.5px solid #E2D6C0', paddingBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <i className="ph ph-tree-structure" style={{ fontSize: '1.3rem', color: '#3B7CB8' }}></i> EXECUTIVE REPORTING HIERARCHY
                    </h5>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
                      {[
                          { from: 'Partners', to: 'CEO' },
                          { from: 'CEO', to: 'Managing Director (MD)' },
                          { from: 'Managing Director (MD)', to: 'Operational Manager' },
                          { from: 'Operational Manager', to: 'Deputy Manager, Finance & HR, Project Manager' },
                          { from: 'Project Manager', to: 'Construction Manager, QA Manager, QC Manager, Safety Manager' },
                          { from: 'Construction Manager', to: 'Civil, Mechanical & Electrical Team Leaders' },
                          { from: 'Team Leaders', to: 'Supervisors / Foremen' },
                          { from: 'Supervisors / Foremen', to: 'Workers / Technicians' },
                      ].map(item => (
                          <div key={item.from} style={{ background: '#F8F4ED', padding: '10px 14px', borderRadius: '10px', border: '1px solid #E2D6C0' }}>
                              <span style={{ color: '#0F1B3A', fontWeight: '700', fontSize: '0.85rem' }}>{item.from}</span>
                              <span style={{ color: '#3B7CB8', margin: '0 6px', fontSize: '0.9rem' }}>→</span>
                              <span style={{ color: '#5A4A38', fontSize: '0.82rem' }}>{item.to}</span>
                          </div>
                      ))}
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  );
}
