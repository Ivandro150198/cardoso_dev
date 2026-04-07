// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Portfolio Data
const portfolioData = {
    projects: [
        {
            id: 1,
            title: "Sistema de Gestão Empresarial",
            description: "Plataforma completa para gestão de pequenas e médias empresas com módulos de vendas, estoque e financeiro.",
            image: "assets/images/projects/project1.jpg",
            technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "jQuery"],
            github: "https://github.com/Ivandro150198/sistema-gestao",
            demo: "https://demo.sistema.com",
            caseStudy: {
                problem: "Empresas pequenas enfrentavam dificuldades em gerenciar múltiplos processos de forma integrada.",
                solution: "Desenvolvi um sistema modular que centraliza todas as operações empresariais em uma única plataforma.",
                result: "Aumento de 40% na produtividade e redução de 60% em erros de processamento."
            }
        },
        {
            id: 2,
            title: "E-commerce Moderno",
            description: "Loja virtual com sistema de pagamento integrado, gestão de produtos e painel administrativo completo.",
            image: "assets/images/projects/project2.jpg",
            technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Redux"],
            github: "https://github.com/Ivandro150198/ecommerce-moderno",
            demo: "https://loja-demo.com",
            caseStudy: {
                problem: "Necessidade de uma plataforma de e-commerce escalável com baixa latência.",
                solution: "Arquitetura baseada em microserviços com cache Redis e CDN para performance.",
                result: "Redução de 50% no tempo de carregamento e suporte para 10k usuários simultâneos."
            }
        },
        {
            id: 3,
            title: "API de Serviços Financeiros",
            description: "RESTful API para integração de serviços financeiros com autenticação OAuth2 e documentação Swagger.",
            image: "assets/images/projects/project3.jpg",
            technologies: ["Python", "Django", "PostgreSQL", "Docker", "JWT"],
            github: "https://github.com/Ivandro150198/api-financeira",
            demo: "https://api.financeira.com/docs",
            caseStudy: {
                problem: "Fragmentação de serviços financeiros em diferentes sistemas sem integração.",
                solution: "API unificada com endpoints padronizados e sistema de rate limiting.",
                result: "Integração de 15 sistemas diferentes com 99.9% de uptime."
            }
        }
    ],
    
    skills: {
        "Backend": [
            { name: "PHP", level: 90 },
            { name: "Python", level: 85 },
            { name: "Node.js", level: 80 },
            { name: "Java", level: 75 },
            { name: "C#", level: 70 }
        ],
        "Frontend": [
            { name: "JavaScript", level: 90 },
            { name: "React", level: 85 },
            { name: "Vue.js", level: 75 },
            { name: "HTML/CSS", level: 95 },
            { name: "TypeScript", level: 80 }
        ],
        "Banco de Dados": [
            { name: "MySQL", level: 90 },
            { name: "PostgreSQL", level: 85 },
            { name: "MongoDB", level: 80 },
            { name: "Redis", level: 75 },
            { name: "SQLite", level: 85 }
        ],
        "DevOps": [
            { name: "Docker", level: 80 },
            { name: "Git", level: 90 },
            { name: "CI/CD", level: 75 },
            { name: "AWS", level: 70 },
            { name: "Linux", level: 85 }
        ]
    },
    
    experience: [
        {
            date: "2022 - Presente",
            title: "Engenheiro de Software Sênior",
            company: "Tech Solutions Ltda",
            description: "Liderança técnica no desenvolvimento de sistemas críticos para clientes enterprise. Arquitetura de microserviços e otimização de performance."
        },
        {
            date: "2020 - 2022",
            title: "Desenvolvedor Full-stack",
            company: "Digital Innovation",
            description: "Desenvolvimento de aplicações web modernas usando React e Node.js. Implementação de APIs RESTful e integração com serviços de terceiros."
        },
        {
            date: "2018 - 2020",
            title: "Desenvolvedor PHP",
            company: "Web Agency Pro",
            description: "Criação de sites e sistemas personalizados para clientes diversos. Manutenção e evolução de aplicações legadas."
        },
        {
            date: "2017 - 2018",
            title: "Estagiário de Desenvolvimento",
            company: "StartUp Tech",
            description: "Apoio no desenvolvimento de novas funcionalidades e correção de bugs. Aprendizado em metodologias ágeis e boas práticas."
        }
    ],
    
    blogPosts: [
        {
            id: 1,
            title: "Otimizando Performance em Aplicações PHP",
            excerpt: "Descubra técnicas avançadas para melhorar o desempenho das suas aplicações PHP usando cache, otimização de queries e padrões de projeto.",
            date: "15 de Março, 2024",
            image: "assets/images/blog/post1.jpg",
            readTime: "8 min"
        },
        {
            id: 2,
            title: "Arquitetura de Microserviços: Guia Prático",
            excerpt: "Aprenda como projetar e implementar uma arquitetura de microserviços escalável usando Docker e Kubernetes.",
            date: "10 de Março, 2024",
            image: "assets/images/blog/post2.jpg",
            readTime: "12 min"
        },
        {
            id: 3,
            title: "Segurança em APIs REST: Melhores Práticas",
            excerpt: "Proteja suas APIs contra ataques comuns usando autenticação JWT, rate limiting e validação de dados.",
            date: "5 de Março, 2024",
            image: "assets/images/blog/post3.jpg",
            readTime: "10 min"
        }
    ]
};

// Load Projects
function loadProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    portfolioData.projects.forEach(project => {
        const projectCard = `
            <div class="col-lg-4 col-md-6" data-aos="fade-up">
                <div class="project-card">
                    <img src="${project.image}" alt="${project.title}" class="project-image">
                    <div class="project-content">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        
                        <div class="case-study mb-3">
                            <h6>Estudo de Caso:</h6>
                            <p><strong>Problema:</strong> ${project.caseStudy.problem}</p>
                            <p><strong>Solução:</strong> ${project.caseStudy.solution}</p>
                            <p><strong>Resultado:</strong> ${project.caseStudy.result}</p>
                        </div>
                        
                        <div class="project-tech">
                            ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                        </div>
                        
                        <div class="project-links">
                            <a href="${project.github}" target="_blank" class="github-link">
                                <i class="fab fa-github me-1"></i> GitHub
                            </a>
                            <a href="${project.demo}" target="_blank" class="demo-link">
                                <i class="fas fa-external-link-alt me-1"></i> Live Demo
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

// Load Blog Posts
function loadBlogPosts() {
    const container = document.getElementById('blog-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    portfolioData.blogPosts.forEach(post => {
        const blogCard = `
            <div class="col-lg-4 col-md-6" data-aos="fade-up">
                <div class="blog-card">
                    <img src="${post.image}" alt="${post.title}" class="blog-image">
                    <div class="blog-content">
                        <h3 class="blog-title">${post.title}</h3>
                        <div class="blog-meta">
                            <i class="far fa-calendar me-1"></i> ${post.date}
                            <span class="ms-3"><i class="far fa-clock me-1"></i> ${post.readTime}</span>
                        </div>
                        <p class="blog-excerpt">${post.excerpt}</p>
                        <a href="#" class="read-more" onclick="openBlogPost(${post.id}); return false;">
                            Ler mais <i class="fas fa-arrow-right ms-1"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += blogCard;
    });
}

// Load GitHub Widget
function loadGitHubWidget() {
    const container = document.getElementById('github-widget');
    if (!container) return;
    
    container.innerHTML = '<div class="text-center"><div class="loading"></div><p class="mt-2">Carregando repositórios...</p></div>';
    
    // Simulate GitHub API call (replace with real API call)
    setTimeout(() => {
        const repos = [
            {
                name: "sistema-gestao",
                description: "Sistema completo de gestão empresarial com módulos integrados",
                stars: 45,
                forks: 12,
                language: "PHP"
            },
            {
                name: "ecommerce-moderno",
                description: "Plataforma de e-commerce construída com React e Node.js",
                stars: 38,
                forks: 8,
                language: "JavaScript"
            },
            {
                name: "api-financeira",
                description: "API RESTful para serviços financeiros com autenticação OAuth2",
                stars: 52,
                forks: 15,
                language: "Python"
            }
        ];
        
        let html = '<h5 class="mb-4">Repositórios Recentes</h5>';
        repos.forEach(repo => {
            html += `
                <div class="github-repo">
                    <a href="https://github.com/Ivandro150198/${repo.name}" target="_blank" class="repo-name">
                        <i class="fab fa-github me-1"></i> ${repo.name}
                    </a>
                    <p class="repo-description">${repo.description}</p>
                    <div class="repo-stats">
                        <span><i class="fas fa-star text-warning"></i> ${repo.stars}</span>
                        <span><i class="fas fa-code-branch text-info"></i> ${repo.forks}</span>
                        <span><i class="fas fa-circle text-primary"></i> ${repo.language}</span>
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = html;
    }, 1500);
}

// Helper Functions
function getCategoryIcon(category) {
    const icons = {
        "Backend": "server",
        "Frontend": "desktop",
        "Banco de Dados": "database",
        "DevOps": "cogs"
    };
    return icons[category] || "code";
}

function openBlogPost(postId) {
    const post = portfolioData.blogPosts.find(p => p.id === postId);
    if (post) {
        // In a real application, this would navigate to a blog post page
        alert(`Abrindo post: ${post.title}\n\nEm uma implementação real, isso navegaria para a página completa do post.`);
    }
}

// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
                humanCheck: document.getElementById('human-check').checked
            };
            
            // Simple validation
            if (!formData.humanCheck) {
                showMessage('Por favor, confirme que você não é um robô.', 'danger');
                return;
            }
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="loading"></span> Enviando...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                showMessage('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
    
    // Load all content
    loadProjects();
    loadSkills();
    loadExperience();
    loadBlogPosts();
    loadGitHubWidget();
});

function showMessage(message, type) {
    const messageContainer = document.getElementById('form-message');
    if (messageContainer) {
        messageContainer.innerHTML = `
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `;
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            const alert = messageContainer.querySelector('.alert');
            if (alert) {
                alert.classList.remove('show');
                setTimeout(() => alert.remove(), 150);
            }
        }, 5000);
    }
}

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
    const animatedElements = document.querySelectorAll('.skill-progress, .timeline-item, .project-card, .blog-card');
    animatedElements.forEach(el => observer.observe(el));
});
