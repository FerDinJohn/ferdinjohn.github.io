/**
 * FerDin John - Refined Clean React Portfolio
 * Clean, modern React 18 component architecture with subtle 3D particles,
 * typing role animation, interactive project modals, and reliable contact handling.
 */

const { useState, useEffect } = React;

// Projects Data
const PROJECTS = [
    {
        id: 1,
        title: 'Banking System',
        image: 'Bank.png',
        desc: 'A secure financial system interface for branch operations, currency exchange, automated teller machine monitoring, and account management.',
        link: 'https://github.com/FerDinJohn'
    },
    {
        id: 2,
        title: 'Restaurant UI',
        image: 'Restaurant.png',
        desc: 'A vibrant, fully responsive web application built for gourmet restaurants with interactive digital menus and online food ordering.',
        link: 'https://github.com/FerDinJohn'
    },
    {
        id: 3,
        title: 'Portfolio Concept',
        image: 'Portfolio.png',
        desc: 'A creative director showcase portfolio with bold typography, dark mode aesthetics, and responsive layout.',
        link: 'https://github.com/FerDinJohn'
    },
    {
        id: 4,
        title: 'Web Design Suite',
        image: 'setup4.jpg',
        desc: 'A minimalist, focus-driven developer workspace interface tailored for rapid prototyping and clean web workflows.',
        link: 'https://github.com/FerDinJohn'
    },
    {
        id: 5,
        title: 'Cyber Station UI',
        image: 'setup5.jpg',
        desc: 'Integrated system telemetry and automation workspace configured for multi-display productivity.',
        link: 'https://github.com/FerDinJohn'
    },
    {
        id: 6,
        title: 'Creative Studio',
        image: 'setup6.jpg',
        desc: 'High-performance creative environment engineered for seamless web application testing and development.',
        link: 'https://github.com/FerDinJohn'
    }
];

// Services Data
const SERVICES = [
    {
        id: 'web',
        icon: 'bx bx-code-alt',
        title: 'Web Development',
        desc: 'A successful website does three things: attracts the right kinds of visitors, guides them to the main services or products you offer, and collects contact details for ongoing relations.',
        details: 'Specialized in building fast, scalable single-page applications with React, modern JavaScript (ES6+), semantic HTML5, and responsive CSS grids.'
    },
    {
        id: 'design',
        icon: 'bx bxs-paint',
        title: 'Graphic Design',
        desc: 'A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away. The alternative to good design is always bad design.',
        details: 'Creating intuitive user interfaces, custom iconography, design systems, and engaging visual layouts tailored for digital brands.'
    },
    {
        id: 'content',
        icon: 'bx bxs-edit',
        title: 'Content Creator',
        desc: 'Learn everything you can, anytime you can, from anyone you can - there will always come a time when you will be grateful you did.',
        details: 'Crafting clear technical documentation, engaging web copy, tutorials, and storytelling that connects technology with people.'
    }
];

function PortfolioApp() {
    // Nav & Section State
    const [activeNav, setActiveNav] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);

    // Typing Effect State
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const roles = ['Full Stack Developer', 'Frontend Specialist', 'Creative Web Designer'];

    // Interactive States
    const [showAboutMore, setShowAboutMore] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedService, setSelectedService] = useState(null);
    const [toast, setToast] = useState(null);

    // Contact Form State
    const [formData, setFormData] = useState({ name: '', email: '', number: '', subject: '', message: '' });
    const [isSending, setIsSending] = useState(false);

    // Initialize 3D Canvas
    useEffect(() => {
        if (window.Portfolio3D) {
            window.Portfolio3D.init('three-canvas-container');
        }
    }, []);

    // Typing Role Effect
    useEffect(() => {
        const i = loopNum % roles.length;
        const fullText = roles[i];

        let timer = setTimeout(() => {
            if (!isDeleting) {
                setText(fullText.substring(0, text.length + 1));
                if (text === fullText) {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                setText(fullText.substring(0, text.length - 1));
                if (text === '') {
                    setIsDeleting(false);
                    setLoopNum(loopNum + 1);
                }
            }
        }, isDeleting ? 40 : 90);

        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum]);

    // Active Section on Scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
            const scrollPos = window.scrollY + 200;

            for (let secId of sections) {
                const el = document.getElementById(secId);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPos >= top && scrollPos < top + height) {
                        setActiveNav(secId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth Scroll Helper
    const scrollToSection = (e, id) => {
        e.preventDefault();
        setMenuOpen(false);
        setActiveNav(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Toast Helper
    const showToast = (msg, icon = 'bx-check-circle') => {
        setToast({ msg, icon });
        setTimeout(() => setToast(null), 3500);
    };

    // Copy to clipboard
    const copyText = (val, label) => {
        navigator.clipboard.writeText(val);
        showToast(`${label} copied to clipboard!`, 'bx-copy');
    };

    // Contact Submit with Direct Email Redirection
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            showToast('Please fill in all required fields.', 'bx-error-circle');
            return;
        }

        setIsSending(true);

        const emailSubject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
        const emailBody = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.number || 'N/A'}\n\nMessage:\n${formData.message}`
        );
        const mailtoUrl = `mailto:ferdinworkofficial@gmail.com?subject=${emailSubject}&body=${emailBody}`;

        setTimeout(() => {
            setIsSending(false);
            showToast('Redirecting to your email client...', 'bx-envelope');
            window.location.href = mailtoUrl;
        }, 800);
    };

    return (
        <div className="app-wrapper">
            {/* HEADER */}
            <header className="header">
                <a href="#home" className="logo" onClick={(e) => scrollToSection(e, 'home')}>
                    <span>FerDin's</span> Portfolio
                </a>

                <i
                    className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`}
                    id="menu-icon"
                    onClick={() => setMenuOpen(!menuOpen)}
                ></i>

                <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
                    {[
                        { id: 'home', label: 'Home' },
                        { id: 'about', label: 'About' },
                        { id: 'services', label: 'Services' },
                        { id: 'portfolio', label: 'Portfolio' },
                        { id: 'contact', label: 'Contact' }
                    ].map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={activeNav === item.id ? 'active' : ''}
                            onClick={(e) => scrollToSection(e, item.id)}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </header>

            {/* HOME SECTION */}
            <section className="home" id="home">
                <div className="home-content">
                    <h3>Hello, It's me</h3>
                    <h1>FerDin John</h1>
                    <h3>
                        And I'm a <span>{text}</span>
                        <span className="typing-cursor"></span>
                    </h3>
                    <p>
                        A Developer knows he has achieved perfection not when there is nothing left to add, but when there
                        is nothing left to take away.
                    </p>

                    <div className="social-media">
                        <a href="https://www.linkedin.com/in/ferdin-john-3b78b6213/" target="_blank" rel="noreferrer" title="LinkedIn">
                            <i className="bx bxl-linkedin-square"></i>
                        </a>
                        <a href="https://git-scm.com/" target="_blank" rel="noreferrer" title="Git">
                            <i className="bx bxl-git"></i>
                        </a>
                        <a href="https://github.com/FerDinJohn" target="_blank" rel="noreferrer" title="GitHub">
                            <i className="bx bxl-github"></i>
                        </a>
                        <a href="https://www.instagram.com/ig_ferdin" target="_blank" rel="noreferrer" title="Instagram">
                            <i className="bx bxl-instagram"></i>
                        </a>
                    </div>

                    <a href="FerdinResume.pdf" download="FerdinCV" className="btn">
                        <i className="bx bxs-download"></i> Download CV
                    </a>
                </div>

                <div className="home-img">
                    <img src="port1img.png" alt="FerDin John" className="photo1" />
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="about" id="about">
                <div className="about-img">
                    <img src="port2img.png" alt="FerDin John" className="photo2" />
                </div>

                <div className="about-content">
                    <h2 className="heading">
                        About <span>Me</span>
                    </h2>
                    <h3>Full Stack Developer</h3>
                    <p>
                        I am interested in front-end and I have a lot of interest in back-end. Also, I have the confidence
                        and capability to do work in given time with creative ideas to solve problems. I have past experience
                        in practicing clean code and I am capable to work on real-time projects.
                    </p>

                    {showAboutMore && (
                        <div className="about-more-text">
                            <p>
                                My primary skill set includes React, JavaScript, HTML5, CSS3, Node.js, Express, and modern
                                web engineering tools. I continuously explore new technologies and design paradigms to
                                build responsive, high-performance web applications.
                            </p>
                        </div>
                    )}

                    <button className="btn" onClick={() => setShowAboutMore(!showAboutMore)}>
                        {showAboutMore ? 'Show Less' : 'Read More'}
                    </button>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section className="services" id="services">
                <h2 className="heading">
                    Our <span>Services</span>
                </h2>

                <div className="services-container">
                    {SERVICES.map((serv) => (
                        <div key={serv.id} className="services-box">
                            <div>
                                <i className={serv.icon}></i>
                                <h3>{serv.title}</h3>
                                <p>{serv.desc}</p>
                            </div>
                            <button className="btn" onClick={() => setSelectedService(serv)}>
                                Read More
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* PORTFOLIO SECTION */}
            <section className="portfolio" id="portfolio">
                <h2 className="heading">
                    Latest <span>Projects</span>
                </h2>

                <div className="portfolio-container">
                    {PROJECTS.map((proj) => (
                        <div
                            key={proj.id}
                            className="portfolio-box"
                            onClick={() => setSelectedProject(proj)}
                        >
                            <img src={proj.image} alt={proj.title} />
                            <div className="portfolio-layer">
                                <h4>{proj.title}</h4>
                                <p>{proj.desc}</p>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedProject(proj);
                                    }}
                                    title="View Project Details"
                                >
                                    <i className="bx bx-link-external"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section className="contact" id="contact">
                <h2 className="heading">
                    Contact <span>Me!</span>
                </h2>

                <div className="contact-wrapper">
                    {/* Contact Direct Info Cards */}
                    <div className="contact-info">
                        <a
                            href="mailto:ferdinworkofficial@gmail.com"
                            className="contact-info-card"
                            title="Click to Send Email"
                        >
                            <i className="bx bx-envelope"></i>
                            <div>
                                <strong>Email Me</strong>
                                <span>ferdinworkofficial@gmail.com</span>
                            </div>
                        </a>

                        <a
                            href="https://wa.me/919944256465"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-info-card"
                            title="Click to Chat on WhatsApp"
                        >
                            <i className="bx bxl-whatsapp"></i>
                            <div>
                                <strong>Phone & WhatsApp</strong>
                                <span>+91 9944256465</span>
                            </div>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/ferdin-john-3b78b6213/"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-info-card"
                            title="LinkedIn Profile"
                        >
                            <i className="bx bxl-linkedin"></i>
                            <div>
                                <strong>LinkedIn</strong>
                                <span>linkedin.com/in/ferdin-john</span>
                            </div>
                        </a>

                        <a
                            href="https://github.com/FerDinJohn"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-info-card"
                            title="GitHub Profile"
                        >
                            <i className="bx bxl-github"></i>
                            <div>
                                <strong>GitHub</strong>
                                <span>github.com/FerDinJohn</span>
                            </div>
                        </a>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit}>
                        <div className="input-box">
                            <input
                                type="text"
                                placeholder="Full Name *"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email Address *"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>

                        <div className="input-box">
                            <input
                                type="text"
                                placeholder="Mobile Number"
                                value={formData.number}
                                onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Email Subject"
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            />
                        </div>

                        <textarea
                            placeholder="Your Message *"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                        ></textarea>

                        <button type="submit" className="btn" disabled={isSending}>
                            {isSending ? (
                                <>
                                    <i className="bx bx-loader-alt bx-spin"></i> Sending...
                                </>
                            ) : (
                                <>
                                    <i className="bx bx-send"></i> Send Message
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="footer">
                <div className="footer-text">
                    <p>Copyright © 2026 by FerDin John | All Rights Reserved.</p>
                </div>

                <div className="footer-iconTop">
                    <a href="#home" onClick={(e) => scrollToSection(e, 'home')} title="Back to Top">
                        <i className="bx bx-up-arrow-alt"></i>
                    </a>
                </div>
            </footer>

            {/* TOAST NOTIFICATION */}
            {toast && (
                <div className="toast-msg">
                    <i className={`bx ${toast.icon}`}></i>
                    <span>{toast.msg}</span>
                </div>
            )}

            {/* PROJECT LIGHTBOX MODAL */}
            {selectedProject && (
                <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-close" onClick={() => setSelectedProject(null)}>
                            <i className="bx bx-x"></i>
                        </div>
                        <img src={selectedProject.image} alt={selectedProject.title} className="modal-img" />
                        <div className="modal-body">
                            <h3>{selectedProject.title}</h3>
                            <p>{selectedProject.desc}</p>
                            <a
                                href={selectedProject.link}
                                target="_blank"
                                rel="noreferrer"
                                className="btn"
                            >
                                <i className="bx bxl-github"></i> View Repository
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* SERVICE DETAILS MODAL */}
            {selectedService && (
                <div className="modal-backdrop" onClick={() => setSelectedService(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-close" onClick={() => setSelectedService(null)}>
                            <i className="bx bx-x"></i>
                        </div>
                        <div className="modal-body" style={{ paddingTop: '4rem' }}>
                            <i className={selectedService.icon} style={{ fontSize: '6rem', color: 'var(--main-color)' }}></i>
                            <h3 style={{ marginTop: '1.5rem' }}>{selectedService.title}</h3>
                            <p>{selectedService.desc}</p>
                            <p>{selectedService.details}</p>
                            <a
                                href="#contact"
                                className="btn"
                                onClick={(e) => {
                                    setSelectedService(null);
                                    setFormData((prev) => ({
                                        ...prev,
                                        subject: `Inquiry for ${selectedService.title}`
                                    }));
                                    scrollToSection(e, 'contact');
                                }}
                            >
                                <i className="bx bx-envelope"></i> Inquire Now
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// Render React App
const rootEl = document.getElementById('root');
if (rootEl) {
    ReactDOM.createRoot(rootEl).render(<PortfolioApp />);
}
