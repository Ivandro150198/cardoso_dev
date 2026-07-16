const portfolioData = {
    projects: [
        {
            id: 1,
            title: "Bidera",
            description: "Sistema de Ponto de Venda (PDV/POS) para digitalizar o comércio de retalho — mercearias e lojas de conveniência — unindo a tradição do balcão à gestão de dados.",
            technologies: ["JavaScript", "PHP", "CSS"],
            github: "https://github.com/Ivandro150198/Bidera",
            private: false
        },
        {
            id: 2,
            title: "Nu Chao",
            description: "Loja online de roupas e acessórios com catálogo e experiência de compra focada no retalho digital.",
            technologies: ["PHP", "CSS", "JavaScript"],
            github: "https://github.com/Ivandro150198/Nu_Chao",
            demo: "https://nu-chao.vercel.app",
            private: false
        },
        {
            id: 3,
            title: "Hospital",
            description: "Interface web para gestão e apresentação de serviços hospitalares, com foco em clareza e acesso rápido à informação.",
            technologies: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/Ivandro150198/Hospital",
            demo: "https://hospital-plum-seven.vercel.app",
            private: false
        },
        {
            id: 4,
            title: "Gestão de Armazéns",
            description: "Sistema web para controlo de stock e gestão de armazéns de uma instituição.",
            technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
            github: "https://github.com/Ivandro150198/Gestao-de-Armazens",
            private: false
        },
        {
            id: 5,
            title: "Ticket",
            description: "Site de venda de bilhetes online para eventos e shows.",
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
            github: "https://github.com/Ivandro150198/Ticket",
            private: false
        }
    ],

    skills: {
        Backend: [
            { name: "PHP" },
            { name: "JavaScript" },
            { name: "MySQL" },
            { name: "HTML5" },
            { name: "CSS3" }
        ],
        Frontend: [
            { name: "HTML5" },
            { name: "CSS3" },
            { name: "JavaScript" },
            { name: "Bootstrap" },
            { name: "jQuery" }
        ],
        "Banco de Dados": [
            { name: "MySQL" },
            { name: "SQL" },
            { name: "Database Design" }
        ],
        "DevOps & Ferramentas": [
            { name: "Git" },
            { name: "Jenkins" },
            { name: "CI/CD" },
            { name: "Version Control" }
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
    ]
};

function getCategoryIcon(category) {
    const icons = {
        Backend: "server",
        Frontend: "desktop",
        "Banco de Dados": "database",
        "DevOps & Ferramentas": "cogs"
    };
    return icons[category] || "code";
}

function getSubjectText(subjectValue) {
    const subjects = {
        projeto: "Proposta de Novo Projeto",
        colaboracao: "Oportunidade de Colaboração",
        duvida: "Consulta Técnica ou Suporte",
        curriculo: "Solicitação de Currículo",
        feedback: "Feedback ou Sugestão",
        outro: "Outro Assunto"
    };
    return subjects[subjectValue] || subjectValue;
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showMessage(message, type = "info") {
    const container = document.getElementById("form-message");
    if (!container) return;

    container.innerHTML = `<div class="alert alert-${type}">${message}</div>`;

    if (type === "success") {
        setTimeout(() => {
            container.innerHTML = "";
        }, 5000);
    }
}

function initTheme() {
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");
    const root = document.documentElement;
    const saved = localStorage.getItem("theme") || "light";

    root.setAttribute("data-theme", saved);
    updateThemeIcon(saved);

    themeToggle?.addEventListener("click", () => {
        const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
        updateThemeIcon(next);
    });

    function updateThemeIcon(theme) {
        if (!themeIcon) return;
        themeIcon.classList.toggle("fa-moon", theme === "light");
        themeIcon.classList.toggle("fa-sun", theme === "dark");
    }
}

function initMobileNav() {
    const toggle = document.getElementById("navToggle");
    const nav = document.getElementById("siteNav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
        });
    });
}

function initHeaderScroll() {
    const header = document.getElementById("site-header");
    const backToTop = document.getElementById("backToTop");

    const onScroll = () => {
        const y = window.scrollY;
        header?.classList.toggle("is-scrolled", y > 40);
        backToTop?.classList.toggle("is-visible", y > 400);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    backToTop?.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
            const id = anchor.getAttribute("href");
            if (!id || id === "#") return;
            const target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
}

function initReveal() {
    const nodes = [...document.querySelectorAll("[data-reveal]")].filter(
        (el) => !el.classList.contains("is-in") && !el.dataset.revealBound
    );
    if (!nodes.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        nodes.forEach((el) => el.classList.add("is-in"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-in");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    nodes.forEach((el) => {
        el.dataset.revealBound = "1";
        observer.observe(el);
    });
}

function initNavSpy() {
    const links = document.querySelectorAll(".site-nav a[href^='#']");
    const sections = [...links]
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

    if (!sections.length) return;

    const spy = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const id = `#${entry.target.id}`;
                links.forEach((link) => {
                    link.classList.toggle("is-active", link.getAttribute("href") === id);
                });
            });
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => spy.observe(section));
}

function loadProjects() {
    const container = document.getElementById("projects-container");
    if (!container) return;

    container.innerHTML = portfolioData.projects
        .map((project, index) => {
            const techClasses = project.technologies.map((t) => t.toLowerCase()).join(" ");
            const indexLabel = String(index + 1).padStart(2, "0");

            let linksHtml = "";
            if (project.private) {
                linksHtml = `
                    <span class="project-row__link is-private">
                        Privado <i class="fas fa-lock"></i>
                    </span>`;
            } else {
                if (project.demo) {
                    linksHtml += `
                        <a href="${project.demo}" class="project-row__link" target="_blank" rel="noopener noreferrer">
                            Demo <i class="fas fa-arrow-up-right-from-square"></i>
                        </a>`;
                }
                linksHtml += `
                    <a href="${project.github}" class="project-row__link" target="_blank" rel="noopener noreferrer">
                        Código <i class="fab fa-github"></i>
                    </a>`;
            }

            return `
                <article class="project-row" data-tech="${techClasses}">
                    <span class="project-row__index">${indexLabel}</span>
                    <div class="project-row__body">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="project-row__tech">
                            ${project.technologies.map((tech) => `<span>${tech}</span>`).join("")}
                        </div>
                    </div>
                    <div class="project-row__actions">
                        ${linksHtml}
                    </div>
                </article>
            `;
        })
        .join("");

    initProjectFilters();
}

function initProjectFilters() {
    const buttons = document.querySelectorAll(".filter-btn");
    const rows = document.querySelectorAll(".project-row");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.dataset.filter;
            buttons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            rows.forEach((row) => {
                const tech = row.dataset.tech || "";
                const show = filter === "all" || tech.includes(filter);
                row.classList.toggle("is-hidden", !show);
            });
        });
    });
}

function loadSkills() {
    const container = document.getElementById("skills-container");
    if (!container) return;

    container.innerHTML = Object.entries(portfolioData.skills)
        .map(
            ([category, skills]) => `
            <div class="skills__category reveal" data-reveal>
                <h3><i class="fas fa-${getCategoryIcon(category)}"></i> ${category}</h3>
                <ul class="skills__list">
                    ${skills.map((skill) => `<li>${skill.name}</li>`).join("")}
                </ul>
            </div>
        `
        )
        .join("");
}

function loadExperience() {
    const container = document.getElementById("experience-container");
    if (!container) return;

    container.innerHTML = portfolioData.experience
        .map(
            (exp) => `
            <li class="timeline-item reveal" data-reveal>
                <span class="timeline-date">${exp.date}</span>
                <h3 class="timeline-title">${exp.title}</h3>
                <p class="timeline-company">${exp.company} · ${exp.location}</p>
                <p>${exp.description}</p>
            </li>
        `
        )
        .join("");
}

function updateCopyrightYear() {
    const el = document.getElementById("copyright");
    if (el) {
        el.innerHTML = `&copy; ${new Date().getFullYear()} Ivandro Cardoso. Todos os direitos reservados.`;
    }
}

function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value.trim();
        const privacyCheck = document.getElementById("privacy-check").checked;
        const website = document.getElementById("website").value.trim();

        if (name.length < 3) {
            showMessage("Por favor, insira seu nome completo.", "danger");
            return;
        }
        if (!validateEmail(email)) {
            showMessage("Por favor, insira um email válido.", "danger");
            return;
        }
        if (!subject) {
            showMessage("Por favor, selecione um assunto.", "danger");
            return;
        }
        if (message.length < 10) {
            showMessage("A mensagem deve ter pelo menos 10 caracteres.", "danger");
            return;
        }
        if (!privacyCheck) {
            showMessage("Por favor, concorde com a política de privacidade.", "danger");
            return;
        }
        if (website !== "") {
            showMessage("O envio não foi aceito. Por favor, tente novamente.", "danger");
            return;
        }

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;

        const body = new FormData();
        body.append("name", name);
        body.append("email", email);
        body.append("subject", getSubjectText(subject));
        body.append("message", message);
        body.append("website", website);

        try {
            const response = await fetch("send-email.php", {
                method: "POST",
                body
            });
            const data = await response.json().catch(() => null);

            if (response.ok && data?.success) {
                showMessage(data.message || "Mensagem enviada com sucesso!", "success");
                form.reset();
            } else {
                showMessage(
                    data?.message || "Ocorreu um erro ao enviar a mensagem. Tente novamente.",
                    "danger"
                );
            }
        } catch (err) {
            showMessage(
                "Não foi possível enviar agora. Tente pelo email ivandrotc11@gmail.com.",
                "danger"
            );
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initMobileNav();
    initHeaderScroll();
    initSmoothScroll();
    initNavSpy();
    loadProjects();
    loadSkills();
    loadExperience();
    initContactForm();
    updateCopyrightYear();
    initReveal();

    // Re-observe dynamically injected reveal nodes
    requestAnimationFrame(() => initReveal());
});

window.addEventListener("load", () => {
    document.getElementById("preloader")?.classList.add("is-hidden");
    document.querySelectorAll(".hero [data-reveal]").forEach((el) => el.classList.add("is-in"));
});
