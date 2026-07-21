document.addEventListener('DOMContentLoaded', () => {

    // =========================================================
    // 1. Mobile Menu Toggle
    // =========================================================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileNav.classList.contains('active')) {
                icon.classList.replace('ph-list', 'ph-x');
            } else {
                icon.classList.replace('ph-x', 'ph-list');
            }
        });
    }
    const mobileLinks = document.querySelectorAll('.mobile-nav a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Don't close the menu if clicking a dropdown toggle on mobile
            if (window.innerWidth <= 768 && link.parentElement.classList.contains('dropdown')) {
                return;
            }
            if (mobileNav) mobileNav.classList.remove('active');
            if (mobileMenuBtn) {
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) { icon.classList.replace('ph-x', 'ph-list'); }
            }
        });
    });

    // =========================================================
    // 2. Sticky Header
    // =========================================================
    const header = document.getElementById('header');
    const handleScroll = () => {
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    // =========================================================
    // 3. Scroll Animations (Intersection Observer)
    // =========================================================
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

    // =========================================================
    // 4. Animated Number Counter
    // =========================================================
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
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    el.textContent = Math.floor(current).toLocaleString() + suffix;
                }, 16);
                obs.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(c => counterObserver.observe(c));

    // =========================================================
    // 5. FAQ Accordion
    // =========================================================
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const answer = item.querySelector('.faq-answer');
            const isOpen = item.classList.contains('open');

            // Close all
            document.querySelectorAll('.faq-item').forEach(i => {
                i.classList.remove('open');
                const a = i.querySelector('.faq-answer');
                if (a) { a.style.maxHeight = '0'; a.style.paddingBottom = '0'; }
                const icon = i.querySelector('.faq-icon');
                if (icon) icon.style.transform = 'rotate(0deg)';
            });

            if (!isOpen) {
                item.classList.add('open');
                if (answer) { answer.style.maxHeight = answer.scrollHeight + 'px'; answer.style.paddingBottom = '20px'; }
                const icon = btn.querySelector('.faq-icon');
                if (icon) icon.style.transform = 'rotate(45deg)';
            }
        });
    });

    // =========================================================
    // 6. Form Submission & File Upload Feedback
    // =========================================================
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

    // =========================================================
    // 7. Active Nav Link Highlight
    // =========================================================
    const currentPage = window.location.pathname.split('/').pop() || 'index';
    document.querySelectorAll('.desktop-nav a, .mobile-nav a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) link.classList.add('active');
    });

    // =========================================================
    // 8. Mobile Navigation Dropdown Submenus Accordion Fix
    // =========================================================
    const mobileDropdowns = document.querySelectorAll('.mobile-nav .dropdown');
    mobileDropdowns.forEach(dropdown => {
        const link = dropdown.querySelector(':scope > a');
        if (link) {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Toggle current, close others
                    mobileDropdowns.forEach(other => {
                        if (other !== dropdown) other.classList.remove('open');
                    });
                    
                    dropdown.classList.toggle('open');
                }
            });
        }
    });

    // =========================================================
    // 9. Interactive Services Accordion (Homepage)
    // =========================================================
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
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
        });
    });

    // =========================================================
    // 10. Scroll Position Restoration for Back Navigation
    // =========================================================
    const isHomepage = window.location.pathname.endsWith('index') || window.location.pathname.endsWith('/') || window.location.pathname === '';
    if (isHomepage) {
        const savedScroll = sessionStorage.getItem('homepage_scroll_pos');
        if (savedScroll) {
            setTimeout(() => {
                window.scrollTo({
                    top: parseInt(savedScroll, 10),
                    behavior: 'instant'
                });
                sessionStorage.removeItem('homepage_scroll_pos');
            }, 50);
        }

        // Intercept clicks on links to save scroll position
        document.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && !href.startsWith('#') && !href.startsWith('javascript:')) {
                    sessionStorage.setItem('homepage_scroll_pos', window.scrollY);
                }
            });
        });
    }

    // =========================================================
    // 11. Global Icon Click Animation (Gold Color)
    // =========================================================
    document.addEventListener('click', (e) => {
        // Special case for Vision/Mission icons
        const vmIcon = e.target.closest('.vm-card-body .card-icon');
        if (vmIcon) {
            vmIcon.classList.toggle('active-gold-badge-global');
            return;
        }

        // If they click the icon badge wrapper (the blue circle)
        const wrapper = e.target.closest('.card-icon, .value-card > div:first-child, .service-card-icon-badge, .strip-grid-item');
        if (wrapper) {
            const icon = wrapper.querySelector('i');
            if (icon) {
                icon.classList.toggle('active-gold-global');
                return; // Stop here so we don't double toggle if they happened to click the i exactly
            }
        }

        // If they click directly on any other Phosphor icon
        const icon = e.target.closest('i[class^="ph"], i[class*=" ph-"]');
        if (icon) {
            icon.classList.toggle('active-gold-global');
        }
    });

});

// =========================================================

// =========================================================
// Mobile Animated Snake Timeline
// =========================================================
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
    
    document.getElementById('mobile-snake-path1').setAttribute('d', d);
    document.getElementById('mobile-snake-path2').setAttribute('d', d);
    document.getElementById('mobile-snake-path3').setAttribute('d', d);
}

window.addEventListener('load', drawMobileSnake);
window.addEventListener('resize', drawMobileSnake);
setTimeout(drawMobileSnake, 500);
