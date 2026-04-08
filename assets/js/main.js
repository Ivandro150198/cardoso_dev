// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Initialize EmailJS
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Você precisa configurar isso
})();

// Portfolio Data
const portfolioData = {
    projects: [
        {
            id: 1,
            title: "Gestão de Armazéns",
            description: "Sistema web para controle de estoque e gestão de armazéns com dashboard em tempo real.",
            technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
            github: "https://github.com/Ivandro150198/Gestao-de-Armazens"
        },
        {
            id: 2,
            title: "Ticket - Venda de Bilhetes",
            description: "Plataforma online para venda de bilhetes de eventos com sistema de pagamento integrado.",
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
            github: "https://github.com/Ivandro150198/Ticket"
        },
        {
            id: 3,
            title: "Laboratório",
            description: "Sistema de gestão laboratorial com controle de amostras, resultados e integração com equipamentos.",
            technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
            github: "#",
            private: true
        }
    ],
    
    skills: {
        "Backend": [
            { name: "PHP", level: 95 },
            { name: "JavaScript", level: 90 },
            { name: "MySQL", level: 85 },
            { name: "HTML5", level: 95 },
            { name: "CSS3", level: 90 }
        ],
        "Frontend": [
            { name: "HTML5", level: 95 },
            { name: "CSS3", level: 90 },
            { name: "JavaScript", level: 90 },
            { name: "Bootstrap", level: 85 },
            { name: "jQuery", level: 80 }
        ],
        "Banco de Dados": [
            { name: "MySQL", level: 85 },
            { name: "SQL", level: 90 },
            { name: "Database Design", level: 80 }
        ],
        "DevOps & Ferramentas": [
            { name: "Git", level: 95 },
            { name: "Jenkins", level: 75 },
            { name: "CI/CD", level: 75 },
            { name: "Version Control", level: 90 }
        ]
    },
    
    experience: [
        {
            date: "03/2025 - Atual",
            title: "Técnico de Informática",
            company: "Médicos do Mundo",
            location: "Bissau",
            description: "Suporte técnico em infraestrutura de TI e sistemas médicos."
        },
        {
            date: "2023 - Atual",
            title: "Informático",
            company: "Hospital do Mal de Hansen",
            location: "Cumura",
            description: "Administração de sistemas hospitalares e manutenção de TI."
        },
        {
            date: "06/2022 - 10/2022",
            title: "Assistente Informático",
            company: "Hospital do Mal de Hansen",
            location: "Bissau",
            description: "Manutenção de computadores e monitoramento de sistemas."
        },
        {
            date: "11/2022",
            title: "Técnico de Manutenção",
            company: "CEFAP",
            location: "Bissau",
            description: "Manutenção preventiva e corretiva de computadores."
        }
    ],
    
    };

// Load Projects
function loadProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    portfolioData.projects.forEach(project => {
        const githubLink = project.private ? "#" : project.github;
        const githubText = project.private ? "Privado" : "Código";
        const githubIcon = project.private ? "fas fa-lock" : "fab fa-github";
        
        const projectCard = `
            <div class="col-lg-4 col-md-6" data-aos="fade-up">
                <div class="project-card">
                    <div class="project-content">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        
                        <div class="project-tech">
                            ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                        </div>
                        
                        <div class="project-links">
                            <a href="${githubLink}" target="_blank" class="github-link ${project.private ? 'private-project' : ''}">
                                <i class="${githubIcon} me-1"></i> ${githubText}
                            </a>
                            <a href="${githubLink}" target="_blank" class="demo-link">
                                <i class="fas fa-info-circle me-1"></i> Detalhes
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += projectCard;
    });
}

// Load Skills
function loadSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    Object.entries(portfolioData.skills).forEach(([category, skills]) => {
        const categoryHtml = `
            <div class="col-lg-6" data-aos="fade-up">
                <div class="skill-category">
                    <h3>
                        <i class="fas fa-${getCategoryIcon(category)} me-2"></i>
                        ${category}
                    </h3>
                    ${skills.map(skill => `
                        <div class="skill-item">
                            <span class="skill-name">${skill.name}</span>
                            <div class="skill-level">
                                <div class="skill-progress" style="width: 0%" data-level="${skill.level}%"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        container.innerHTML += categoryHtml;
    });
    
    // Animate skill bars after a delay
    setTimeout(() => {
        document.querySelectorAll('.skill-progress').forEach(bar => {
            bar.style.width = bar.dataset.level;
        });
    }, 500);
}

// Load Experience
function loadExperience() {
    const container = document.getElementById('experience-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    portfolioData.experience.forEach((exp, index) => {
        const experienceHtml = `
            <div class="timeline-item" data-aos="fade-up">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-date">${exp.date}</div>
                    <h4 class="timeline-title">${exp.title}</h4>
                    <div class="timeline-company">${exp.company}</div>
                    <p>${exp.description}</p>
                </div>
            </div>
        `;
        container.innerHTML += experienceHtml;
    });
}


// Load GitHub Widget
async function loadGitHubWidget() {
    const container = document.getElementById('github-widget');
    if (!container) return;
    
    container.innerHTML = '<div class="text-center"><div class="loading"></div><p class="mt-2">Carregando repositórios...</p></div>';
    
    try {
        const response = await fetch('https://api.github.com/users/Ivandro150198/repos?sort=updated&per_page=6');
        const repos = await response.json();
        
        let html = '<h5 class="mb-4">Repositórios Recentes</h5>';
        repos.forEach(repo => {
            const language = repo.language || 'Outros';
            const description = repo.description || 'Repositório sem descrição';
            
            html += `
                <div class="github-repo">
                    <a href="${repo.html_url}" target="_blank" class="repo-name">
                        <i class="fab fa-github me-1"></i> ${repo.name}
                    </a>
                    <p class="repo-description">${description}</p>
                    <div class="repo-stats">
                        <span><i class="fas fa-star text-warning"></i> ${repo.stargazers_count}</span>
                        <span><i class="fas fa-code-branch text-info"></i> ${repo.forks_count}</span>
                        <span><i class="fas fa-circle text-primary"></i> ${language}</span>
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = html;
    } catch (error) {
        console.error('Erro ao carregar repositórios:', error);
        container.innerHTML = '<p class="text-center text-muted">Não foi possível carregar os repositórios no momento.</p>';
    }
}

// Helper Functions
function getCategoryIcon(category) {
    const icons = {
        "Backend": "server",
        "Frontend": "desktop",
        "Banco de Dados": "database",
        "DevOps & Ferramentas": "cogs"
    };
    return icons[category] || "code";
}


// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value.trim();
            const privacyCheck = document.getElementById('privacy-check').checked;
            
            // Basic validation
            if (name.length < 3) {
                showMessage('Por favor, insira seu nome completo.', 'danger');
                return;
            }
            
            if (!validateEmail(email)) {
                showMessage('Por favor, insira um email válido.', 'danger');
                return;
            }
            
            if (!subject) {
                showMessage('Por favor, selecione um assunto.', 'danger');
                return;
            }
            
            if (message.length < 10) {
                showMessage('A mensagem deve ter pelo menos 10 caracteres.', 'danger');
                return;
            }
            
            if (!privacyCheck) {
                showMessage('Por favor, concorde com a política de privacidade.', 'danger');
                return;
            }
            
            const formData = {
                name: name,
                email: email,
                subject: getSubjectText(subject),
                message: message
            };
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> Enviando...';
            submitBtn.disabled = true;
            
            // Send email using EmailJS
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
                .then(function(response) {
                    showMessage('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
                    contactForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, function(error) {
                    showMessage('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.', 'danger');
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                });
        });
    }
    
    // Load all content
    loadProjects();
    loadSkills();
    loadExperience();
    loadGitHubWidget();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Typing effect for hero section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            // Check if we're at an HTML tag
            if (text.charAt(i) === '<') {
                // Find the end of the tag
                let tagEnd = text.indexOf('>', i);
                if (tagEnd !== -1) {
                    // Add the entire tag at once
                    element.innerHTML += text.substring(i, tagEnd + 1);
                    i = tagEnd + 1;
                } else {
                    element.innerHTML += text.charAt(i);
                    i++;
                }
            } else {
                element.innerHTML += text.charAt(i);
                i++;
            }
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 500);
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.skill-progress, .timeline-item, .project-card');
    animatedElements.forEach(el => observer.observe(el));
});
