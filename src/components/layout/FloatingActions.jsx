import React from 'react';

export default function FloatingActions() {
  return (
    <div className="floating-actions">
      <a href="mailto:info@axisinfinitystructure.com" className="float-btn float-email" title="Email Us">
        <i className="ph ph-envelope-simple"></i>
      </a>
      <a href="https://wa.me/966507673009" className="float-btn float-whatsapp" target="_blank" rel="noreferrer" title="WhatsApp KSA Head Office" style={{display: "flex", flexDirection: "column", justifyContent: "center", lineHeight: "1", gap: "2px", textDecoration: "none", color: "white"}}>
        <i className="ph ph-whatsapp-logo" style={{margin: "0", fontSize: "1.6rem"}}></i>
        <span style={{fontSize: "0.6rem", fontWeight: "bold", fontFamily: "var(--font-body)"}}>KSA</span>
      </a>
      <a href="https://wa.me/923029203920" className="float-btn float-whatsapp" target="_blank" rel="noreferrer" title="WhatsApp PAK Head Office" style={{display: "flex", flexDirection: "column", justifyContent: "center", lineHeight: "1", gap: "2px", textDecoration: "none", color: "white"}}>
        <i className="ph ph-whatsapp-logo" style={{margin: "0", fontSize: "1.6rem"}}></i>
        <span style={{fontSize: "0.6rem", fontWeight: "bold", fontFamily: "var(--font-body)"}}>PAK</span>
      </a>
    </div>
  );
}
