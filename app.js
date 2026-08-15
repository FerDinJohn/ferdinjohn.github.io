/**
 * FerDin John J - Java Full Stack Developer Portfolio
 * React 18 Architecture accurately grounded in verified resume credentials
 */

const { useState, useEffect } = React;

// Experience Data
const EXPERIENCE = {
    company: 'KRAN Consulting Pvt Ltd',
    role: 'Associate Software Engineer',
    period: '10/2023 – Present',
    location: 'Trivandrum',
    highlights: [
        'Contributed to the development of enterprise web applications for government clients.',
        'Developed back-end services using Java, Spring Boot, and Oracle 12c.',
        'Built secure REST APIs with JWT and Spring Security for authentication and role-based authorization.',
        'Designed and integrated dynamic front-end components using Thymeleaf, Bootstrap, and JavaScript.',
        'Implemented core modules for user registration, access control, and comprehensive audit tracking.',
        'Worked with JPA / Hibernate for robust database operations, relational mapping, and query optimization.',
        'Participated in Agile sprints, peer code reviews, and cross-functional development efforts.',
        'Utilized tools like Git, Maven, and Postman for versioning, build automation, and end-to-end API testing.'
    ],
    techStack: ['Java', 'Spring Boot', 'Oracle 12c', 'Spring Security', 'JWT', 'JPA/Hibernate', 'Thymeleaf', 'Bootstrap', 'JavaScript', 'Maven', 'Git', 'Postman', 'Agile']
};

// Skills Data
const SKILLS_CATEGORIES = [
    {
        id: 'backend',
        title: 'Backend & Frameworks',
        icon: 'bx bx-server',
        skills: [
            { name: 'Java', icon: 'bxl-java' },
            { name: 'Spring Boot', icon: 'bxl-spring-boot' },
            { name: 'RESTful APIs', icon: 'bx-transfer' },
            { name: 'Spring Security', icon: 'bx-shield-quarter' },
            { name: 'JPA / Hibernate', icon: 'bx-data' },
            { name: 'J2EE', icon: 'bx-code-block' },
            { name: 'Maven', icon: 'bx-cog' },
            { name: 'JWT Auth', icon: 'bx-key' }
        ]
    },
    {
        id: 'database',
        title: 'Databases & Querying',
        icon: 'bx bx-data',
        skills: [
            { name: 'Oracle 12c', icon: 'bxs-data' },
            { name: 'MySQL', icon: 'bx-cylinder' },
            { name: 'SQL Query Optimization', icon: 'bx-line-chart' },
            { name: 'Schema & Relational Design', icon: 'bx-sitemap' }
        ]
    },
    {
        id: 'frontend',
        title: 'Frontend Technologies',
        icon: 'bx bx-code-alt',
        skills: [
            { name: 'HTML5 / CSS3', icon: 'bxl-html5' },
            { name: 'JavaScript (ES6+)', icon: 'bxl-javascript' },
            { name: 'Thymeleaf', icon: 'bx-leaf' },
            { name: 'Bootstrap', icon: 'bxl-bootstrap' },
            { name: 'React', icon: 'bxl-react' },
            { name: 'Responsive Web Design', icon: 'bx-devices' }
        ]
    },
    {
        id: 'tools',
        title: 'Tools & Methodologies',
        icon: 'bx bx-wrench',
        skills: [
            { name: 'Git & Version Control', icon: 'bxl-git' },
            { name: 'Postman API Testing', icon: 'bx-send' },
            { name: 'Agile / Scrum', icon: 'bx-refresh' },
            { name: 'Code Review & Debugging', icon: 'bx-bug' },
            { name: 'UAT Feedback & Compliance', icon: 'bx-check-double' }
        ]
    }
];

// Projects Data
const PROJECTS = [
    {
        id: 1,
        title: 'Audit Management System',
        badge: 'KRAN Consulting | Enterprise',
        image: 'Bank.png',
        period: '10/2023 – Present',
        shortDesc: 'Developed secure, role-based modules for managing government audit operations with Spring Boot, Spring Security, and Oracle 12c.',
        desc: 'An enterprise-grade system built for managing and monitoring government audit workflows with stringent compliance requirements.',
        bullets: [
            'Developed secure, role-based access modules for government audit operations.',
            'Built and integrated REST APIs, data encryption, and automated audit workflow features.',
            'Designed responsive web interfaces using Thymeleaf, Bootstrap, and JavaScript.',
            'Utilized Spring Boot, Spring Security, and Oracle 12c as the core technology stack.',
            'Delivered modules aligned with user acceptance testing (UAT) feedback and government compliance standards.'
        ],
        tags: ['Java', 'Spring Boot', 'Spring Security', 'Oracle 12c', 'JWT', 'Thymeleaf', 'Bootstrap'],
        link: 'https://github.com/FerDinJohn'
    },
    {
        id: 2,
        title: 'Banking Process Application',
        badge: 'Full-Stack Java',
        image: 'Bank.png',
        period: '03/2023',
        shortDesc: 'Full-stack banking system with user signup/login, admin dashboard, savings/current account transactions, and telemetry.',
        desc: 'A complete full-stack banking application engineered for branch transactions, user balance telemetry, and administrative control.',
        bullets: [
            'Developed a full-stack banking application using HTML/CSS frontend, Java & J2EE middleware, and MySQL with Hibernate backend.',
            'Implemented user signup/login, admin telemetry dashboard, and database integration.',
            'Enabled creation of savings and current accounts, with features to transfer funds, withdraw, and view transaction history and balance in real-time.'
        ],
        tags: ['Java', 'J2EE', 'Hibernate', 'MySQL', 'HTML/CSS', 'JavaScript'],
        link: 'https://github.com/FerDinJohn'
    },
    {
        id: 3,
        title: 'Restaurant UI Web App',
        badge: 'Web Application',
        image: 'Restaurant.png',
        period: '2023',
        shortDesc: 'A vibrant, fully responsive web application built for restaurant operations with interactive digital menus and online ordering.',
        desc: 'Specialized digital restaurant portal featuring interactive menu browsing, real-time item customization, and smooth ordering workflows.',
        bullets: [
            'Built with clean JavaScript, HTML5, CSS3, and responsive grid layouts.',
            'Implemented dynamic menu filtering, shopping cart state management, and interactive checkout simulation.'
        ],
        tags: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design', 'UI/UX'],
        link: 'https://github.com/FerDinJohn'
    },
    {
        id: 4,
        title: 'Developer Workspace & Automation',
        badge: 'Tooling & CI/CD',
        image: 'setup4.jpg',
        period: '2023',
        shortDesc: 'Automated developer environment configured for Maven builds, Postman API test suites, and Git version control.',
        desc: 'High-efficiency developer suite tailored for rapid Java prototyping, Maven automated builds, and comprehensive REST API testing.',
        bullets: [
            'Automated Maven build lifecycles and dependency management for Spring Boot microservices.',
            'Created robust Postman collections for automated regression and endpoint verification.'
        ],
        tags: ['Maven', 'Git', 'Postman', 'Java', 'Automation'],
        link: 'https://github.com/FerDinJohn'
    },
    {
        id: 5,
        title: 'Compliance & Telemetry Portal',
        badge: 'Enterprise Architecture',
        image: 'setup5.jpg',
        period: '2024',
        shortDesc: 'Multi-display telemetry dashboard for monitoring enterprise access control, query performance, and audit logging.',
        desc: 'Integrated system telemetry and audit reporting console configured for high-volume database query monitoring and access tracking.',
        bullets: [
            'Engineered optimized JPA/Hibernate queries against Oracle 12c for fast telemetry aggregation.',
            'Implemented granular role-based permissions and activity logging.'
        ],
        tags: ['Oracle 12c', 'Spring Boot', 'Hibernate', 'JWT', 'Security'],
        link: 'https://github.com/FerDinJohn'
    },
    {
        id: 6,
        title: 'Interactive 3D WebGL Portfolio',
        badge: 'Creative Technologist',
        image: 'Portfolio.png',
        period: '2026',
        shortDesc: 'Showcase web application featuring React 18, Three.js 3D WebGL particle constellation, and seamless dark glassmorphism.',
        desc: 'Personal developer showcase application built with React 18, Three.js WebGL particle physics, and cyber aesthetic glassmorphism.',
        bullets: [
            'Engineered custom WebGL dynamic line constellation with parallax scroll tracking.',
            'Designed fully responsive cyber glassmorphism design system in modern CSS3.'
        ],
        tags: ['React 18', 'Three.js', 'WebGL', 'CSS3 Glassmorphism'],
        link: 'https://github.com/FerDinJohn'
    }
];

// Education & Certifications Data
const EDUCATION = [
    {
        degree: 'BE - Computer Science and Engineering',
        institution: 'Ponjesly College of Engineering',
        year: 'Graduated: 07/2022',
        highlight: 'CGPA: 7.5',
        desc: 'Comprehensive foundation in algorithms, data structures, database management systems (DBMS), software engineering, and computer networking.'
    }
];

const CERTIFICATIONS = [
    {
        title: 'Full Stack Java Development',
        issuer: 'Jspiders, Rajajinager, Bangalore',
        period: '09/2022 – 06/2023',
        credentialId: 'Course ID: RAJ-JSP-1526',
        topics: ['Core Java', 'Web Technology', 'J2EE', 'SQL & Relational DBs', 'Spring & Hibernate Frameworks']
    },
    {
        title: 'Web Development Training',
        issuer: 'Internshala',
        period: '09/2021 – 11/2021',
        credentialId: 'Credential ID: BE7EA69A-25F9-B9A7-160A-9BFDFDC8AEB',
        topics: ['HTML5 & CSS3', 'JavaScript', 'Bootstrap', 'PHP & MySQL', 'Full-Stack Architecture']
    }
];

// Services Data
const SERVICES = [
    {
        id: 'java-backend',
        icon: 'bx bxl-java',
        title: 'Java & Spring Boot Backend',
        desc: 'Developing scalable, enterprise-grade backend services with Java and Spring Boot. Building robust RESTful APIs with JWT authentication, Spring Security, and modular architectures.',
        details: 'Specialized in building performant enterprise services, data validation layers, transaction management, and secure microservices aligned with strict compliance guidelines.'
    },
    {
        id: 'database-eng',
        icon: 'bx bx-data',
        title: 'Database Engineering & Optimization',
        desc: 'Designing and optimizing enterprise relational databases with Oracle 12c and MySQL. Implementing efficient JPA / Hibernate data access layers and query optimizations.',
        details: 'Expertise in database normalization, complex SQL queries, index optimization, Hibernate relational mapping, and secure transaction handling.'
    },
    {
        id: 'fullstack-web',
        icon: 'bx bx-code-alt',
        title: 'Full Stack Web Development',
        desc: 'Crafting responsive, dynamic user interfaces integrated with backend APIs using Thymeleaf, Bootstrap, HTML5/CSS3, JavaScript (ES6+), and React.',
        details: 'Delivering end-to-end full stack solutions with clean code, role-based access dashboards, intuitive UI/UX design, and cross-browser responsiveness.'
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
    const roles = [
        'Java Full Stack Developer',
        'Associate Software Engineer',
        'Spring Boot & REST API Specialist',
        'Database & Backend Developer'
    ];

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
        try {
            if (window.Portfolio3D) {
                window.Portfolio3D.init('three-canvas-container');
            }
        } catch (err) {
            console.warn('3D initialization caught:', err);
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
                    setTimeout(() => setIsDeleting(true), 1600);
                }
            } else {
                setText(fullText.substring(0, text.length - 1));
                if (text === '') {
                    setIsDeleting(false);
                    setLoopNum(loopNum + 1);
                }
            }
        }, isDeleting ? 35 : 85);

        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum]);

    // Active Section on Scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'services', 'contact'];
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
        const mailtoUrl = `mailto:ferdinjohnst@gmail.com?subject=${emailSubject}&body=${emailBody}`;

        setTimeout(() => {
            setIsSending(false);
            showToast('Opening your email client...', 'bx-envelope');
            window.location.href = mailtoUrl;
        }, 600);
    };

    return (
        <div className="app-wrapper">
            {/* HEADER */}
            <header className="header">
                <a href="#home" className="logo" onClick={(e) => scrollToSection(e, 'home')}>
                    <span>FerDin</span> John J
                    <span className="logo-tag">Java Full Stack</span>
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
                        { id: 'experience', label: 'Experience' },
                        { id: 'skills', label: 'Skills' },
                        { id: 'projects', label: 'Projects' },
                        { id: 'education', label: 'Education' },
                        { id: 'services', label: 'Services' },
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

            {/* HOME / HERO SECTION */}
            <section className="home" id="home">
                <div className="home-content">
                    <div className="hero-badge">
                        <i className="bx bx-briefcase-alt-2"></i>
                        <span>Associate Software Engineer @ KRAN Consulting</span>
                    </div>

                    <h3>Hello, It's me</h3>
                    <h1>FerDin John J</h1>
                    <h3>
                        And I'm a <span>{text}</span>
                        <span className="typing-cursor"></span>
                    </h3>

                    <p>
                        Associate Software Engineer with proven experience developing enterprise web applications for government clients. Specialized in Java, Spring Boot, Oracle 12c, secure RESTful APIs with JWT & Spring Security, and dynamic full-stack user interfaces.
                    </p>

                    <div className="hero-btn-group">
                        <a href="FerdinResume.pdf" download="FerdinResume.pdf" className="btn">
                            <i className="bx bxs-download"></i> Download Resume
                        </a>
                        <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="btn btn-secondary">
                            <i className="bx bx-envelope"></i> Contact Me
                        </a>
                    </div>

                    <div className="social-media">
                        <a href="https://linkedin.com/in/ferdin-john-3b78b6213/" target="_blank" rel="noreferrer" title="LinkedIn Profile">
                            <i className="bx bxl-linkedin"></i>
                        </a>
                        <a href="https://github.com/FerDinJohn" target="_blank" rel="noreferrer" title="GitHub Profile">
                            <i className="bx bxl-github"></i>
                        </a>
                        <a href="mailto:ferdinjohnst@gmail.com" title="Send Email">
                            <i className="bx bx-envelope"></i>
                        </a>
                        <a href="https://wa.me/919944256465" target="_blank" rel="noreferrer" title="WhatsApp Chat">
                            <i className="bx bxl-whatsapp"></i>
                        </a>
                    </div>
                </div>

                <div className="home-img">
                    <img src="port1img.png" alt="FerDin John J" className="photo1" />
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="about" id="about">
                <div className="about-img">
                    <img src="port2img.png" alt="FerDin John J" className="photo2" />
                </div>

                <div className="about-content">
                    <h2 className="heading">
                        About <span>Me</span>
                    </h2>
                    <h3>Java Full Stack Developer & Associate Software Engineer</h3>
                    <p>
                        I am an Associate Software Engineer at <strong>KRAN Consulting Pvt Ltd</strong> (Trivandrum) with a degree in Computer Science and Engineering from Ponjesly College of Engineering (CGPA 7.5). I completed comprehensive Full Stack Java development training at JSpiders Bangalore.
                    </p>
                    <p>
                        I specialize in building secure, scalable enterprise web solutions for government and corporate clients, utilizing Java, Spring Boot, Spring Security with JWT, JPA/Hibernate, and Oracle 12c, along with responsive frontends using Thymeleaf, Bootstrap, JavaScript, and React.
                    </p>

                    <div className="about-info-grid">
                        <div className="about-info-item">
                            <i className="bx bx-buildings"></i>
                            <div>
                                <strong>Company</strong>
                                <span>KRAN Consulting Pvt Ltd</span>
                            </div>
                        </div>
                        <div className="about-info-item">
                            <i className="bx bx-map"></i>
                            <div>
                                <strong>Location</strong>
                                <span>Kanyakumari, TN / Trivandrum</span>
                            </div>
                        </div>
                        <div className="about-info-item">
                            <i className="bx bx-mail-send"></i>
                            <div>
                                <strong>Email</strong>
                                <span>ferdinjohnst@gmail.com</span>
                            </div>
                        </div>
                        <div className="about-info-item">
                            <i className="bx bx-graduation"></i>
                            <div>
                                <strong>Degree</strong>
                                <span>BE - CSE (CGPA 7.5)</span>
                            </div>
                        </div>
                    </div>

                    {showAboutMore && (
                        <div className="about-more-text">
                            <p>
                                I actively contribute to Agile sprints, peer code reviews, and cross-functional team collaborations. My core focus is practicing clean code principles, performance-tuning database queries with JPA/Hibernate, implementing rigorous API testing with Postman, and automating build lifecycles using Maven and Git.
                            </p>
                        </div>
                    )}

                    <button className="btn" onClick={() => setShowAboutMore(!showAboutMore)}>
                        {showAboutMore ? 'Show Less' : 'Read More'}
                    </button>
                </div>
            </section>

            {/* EXPERIENCE SECTION */}
            <section className="experience" id="experience">
                <h2 className="heading">
                    Work <span>Experience</span>
                </h2>
                <p className="section-subtitle">
                    Professional enterprise software engineering experience building secure, high-compliance systems.
                </p>

                <div className="experience-container">
                    <div className="experience-card">
                        <div className="experience-header">
                            <div className="experience-role">
                                <h3>{EXPERIENCE.role}</h3>
                                <h4>{EXPERIENCE.company}</h4>
                            </div>
                            <div className="experience-badge">
                                <i className="bx bx-calendar"></i>
                                <span>{EXPERIENCE.period} | {EXPERIENCE.location}</span>
                            </div>
                        </div>

                        <ul className="experience-list">
                            {EXPERIENCE.highlights.map((item, idx) => (
                                <li key={idx}>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="experience-tech-stack">
                            {EXPERIENCE.techStack.map((tech, idx) => (
                                <span key={idx} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SKILLS SECTION */}
            <section className="skills" id="skills">
                <h2 className="heading">
                    Technical <span>Skills</span>
                </h2>
                <p className="section-subtitle">
                    Comprehensive technical skill set spanning core backend architectures, database design, and modern web interfaces.
                </p>

                <div className="skills-grid">
                    {SKILLS_CATEGORIES.map((cat) => (
                        <div key={cat.id} className="skill-category">
                            <div className="skill-category-header">
                                <i className={`bx ${cat.icon}`}></i>
                                <h3>{cat.title}</h3>
                            </div>
                            <div className="skill-items">
                                {cat.skills.map((s, idx) => (
                                    <div key={idx} className="skill-chip">
                                        <i className={`bx ${s.icon}`}></i>
                                        <span>{s.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* PROJECTS SECTION */}
            <section className="portfolio" id="projects">
                <h2 className="heading">
                    Featured <span>Projects</span>
                </h2>
                <p className="section-subtitle">
                    Key enterprise and full-stack projects showcasing architecture, database engineering, and secure API design.
                </p>

                <div className="portfolio-container">
                    {PROJECTS.map((proj) => (
                        <div
                            key={proj.id}
                            className="portfolio-box"
                            onClick={() => setSelectedProject(proj)}
                        >
                            <div className="portfolio-img-wrap">
                                <img src={proj.image} alt={proj.title} />
                                <span className="portfolio-badge">{proj.badge}</span>
                            </div>

                            <div className="portfolio-info">
                                <div>
                                    <h4>{proj.title}</h4>
                                    <p>{proj.shortDesc}</p>
                                    <div className="portfolio-tags">
                                        {proj.tags.slice(0, 4).map((tag, idx) => (
                                            <span key={idx}>{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="portfolio-action">
                                    <span>View Project Details</span>
                                    <i className="bx bx-right-arrow-alt"></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* EDUCATION & CERTIFICATIONS SECTION */}
            <section className="education" id="education">
                <h2 className="heading">
                    Education & <span>Certifications</span>
                </h2>
                <p className="section-subtitle">
                    Academic qualifications and professional certifications in full-stack Java engineering.
                </p>

                <div className="education-grid">
                    {/* Education Column */}
                    <div>
                        <h3 className="edu-column-title">
                            <i className="bx bx-graduation"></i> Formal Education
                        </h3>
                        <div className="edu-cards">
                            {EDUCATION.map((edu, idx) => (
                                <div key={idx} className="edu-card">
                                    <div className="edu-card-top">
                                        <h4>{edu.degree}</h4>
                                        <span className="edu-year">{edu.year}</span>
                                    </div>
                                    <h5>{edu.institution}</h5>
                                    <p>{edu.desc}</p>
                                    <div className="edu-highlight">
                                        <i className="bx bx-award"></i> {edu.highlight}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Column */}
                    <div>
                        <h3 className="edu-column-title">
                            <i className="bx bx-certification"></i> Professional Certifications
                        </h3>
                        <div className="edu-cards">
                            {CERTIFICATIONS.map((cert, idx) => (
                                <div key={idx} className="edu-card">
                                    <div className="edu-card-top">
                                        <h4>{cert.title}</h4>
                                        <span className="edu-year">{cert.period}</span>
                                    </div>
                                    <h5>{cert.issuer}</h5>
                                    <span className="cert-id">{cert.credentialId}</span>
                                    <div className="experience-tech-stack" style={{ marginTop: '1.2rem', paddingTop: '1rem' }}>
                                        {cert.topics.map((t, tidx) => (
                                            <span key={tidx} className="tech-tag" style={{ fontSize: '1.2rem', padding: '0.3rem 1rem' }}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section className="services" id="services">
                <h2 className="heading">
                    My <span>Services</span>
                </h2>
                <p className="section-subtitle">
                    Tailored software engineering services across backend microservices, database architecture, and full-stack solutions.
                </p>

                <div className="services-container">
                    {SERVICES.map((serv) => (
                        <div key={serv.id} className="services-box">
                            <div>
                                <i className={`bx ${serv.icon}`}></i>
                                <h3>{serv.title}</h3>
                                <p>{serv.desc}</p>
                            </div>
                            <button className="btn" onClick={() => setSelectedService(serv)}>
                                View Service Scope
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section className="contact" id="contact">
                <h2 className="heading">
                    Contact <span>Me!</span>
                </h2>
                <p className="section-subtitle">
                    Get in touch for enterprise opportunities, Java backend collaborations, or software consulting.
                </p>

                <div className="contact-wrapper">
                    {/* Contact Direct Info Cards */}
                    <div className="contact-info">
                        <a
                            href="mailto:ferdinjohnst@gmail.com"
                            className="contact-info-card"
                            title="Click to Send Email"
                        >
                            <i className="bx bx-envelope"></i>
                            <div>
                                <strong>Email Address</strong>
                                <span>ferdinjohnst@gmail.com</span>
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
                            href="https://linkedin.com/in/ferdin-john-3b78b6213/"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-info-card"
                            title="LinkedIn Profile"
                        >
                            <i className="bx bxl-linkedin"></i>
                            <div>
                                <strong>LinkedIn Profile</strong>
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
                                <strong>GitHub Profile</strong>
                                <span>github.com/FerDinJohn</span>
                            </div>
                        </a>

                        <div className="contact-info-card" style={{ cursor: 'default' }}>
                            <i className="bx bx-map-pin"></i>
                            <div>
                                <strong>Location</strong>
                                <span>Kanyakumari, Tamil Nadu / Trivandrum, India</span>
                            </div>
                        </div>
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
                    <p>Copyright © 2026 by FerDin John J | Java Full Stack Developer | All Rights Reserved.</p>
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
                            <span className="portfolio-badge" style={{ position: 'static', display: 'inline-block', marginBottom: '1rem' }}>
                                {selectedProject.badge} • {selectedProject.period}
                            </span>
                            <h3>{selectedProject.title}</h3>
                            <p>{selectedProject.desc}</p>

                            {selectedProject.bullets && (
                                <ul className="modal-bullets">
                                    {selectedProject.bullets.map((b, idx) => (
                                        <li key={idx}>{b}</li>
                                    ))}
                                </ul>
                            )}

                            <div className="experience-tech-stack" style={{ marginBottom: '2.5rem' }}>
                                {selectedProject.tags.map((tag, idx) => (
                                    <span key={idx} className="tech-tag">{tag}</span>
                                ))}
                            </div>

                            <a
                                href={selectedProject.link}
                                target="_blank"
                                rel="noreferrer"
                                className="btn"
                            >
                                <i className="bx bxl-github"></i> View GitHub Repository
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
                            <i className={`bx ${selectedService.icon}`} style={{ fontSize: '6rem', color: 'var(--main-color)' }}></i>
                            <h3 style={{ marginTop: '1.5rem' }}>{selectedService.title}</h3>
                            <p>{selectedService.desc}</p>
                            <p style={{ color: '#e2e8f0' }}>{selectedService.details}</p>
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
                                <i className="bx bx-envelope"></i> Inquire Regarding Service
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
