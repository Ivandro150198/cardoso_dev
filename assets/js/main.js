const portfolioData = {
    projects: [
        {
            id: 1,
            title: "Bidera",
            description: "Sistema de Ponto de Venda (PDV/POS) para digitalizar o comércio de retalho — mercearias e lojas de conveniência — unindo a tradição do balcão à gestão de dados.",
            area: "pdv",
            technologies: ["PDV", "JavaScript", "PHP", "CSS"],
            github: "https://github.com/Ivandro150198/Bidera",
            private: false
        },
        {
            id: 2,
            title: "Nu Chao",
            description: "Loja online de roupas e acessórios com catálogo e experiência de compra focada no retalho digital.",
            area: "loja",
            technologies: ["PHP", "CSS", "JavaScript"],
            github: "https://github.com/Ivandro150198/Nu_Chao",
            private: false
        },
        {
            id: 3,
            title: "Hospital",
            description: "Interface web para gestão e apresentação de serviços hospitalares, com foco em clareza e acesso rápido à informação.",
            area: "saude",
            technologies: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/Ivandro150198/Hospital",
            demo: "https://hospital-plum-seven.vercel.app",
            private: false
        },
        {
            id: 4,
            title: "Gestão de Armazéns",
            description: "Sistema web para controlo de stock e gestão de armazéns de uma instituição.",
            area: "stock",
            technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
            github: "https://github.com/Ivandro150198/Gestao-de-Armazens",
            private: false
        },
        {
            id: 5,
            title: "Ticket",
            description: "Site de venda de bilhetes online para eventos e shows.",
            area: "bilhetes",
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
            github: "https://github.com/Ivandro150198/Ticket",
            private: false
        }
    ],

    posModules: [
        { icon: "fa-cash-register", title: "PDV", text: "Vendas rápidas, código de barras, recibo e múltiplos meios de pagamento." },
        { icon: "fa-wallet", title: "Caixa", text: "Abertura/fecho de sessão, movimentos e resumo do dia." },
        { icon: "fa-boxes-stacked", title: "Produtos e stock", text: "Categorias, unidades, imagens e alertas de stock mínimo." },
        { icon: "fa-users", title: "Clientes e crédito", text: "Cadastro, limite de crédito e pagamentos de dívida." },
        { icon: "fa-truck", title: "Compras", text: "Entradas de mercadoria e gestão de fornecedores." },
        { icon: "fa-rotate-left", title: "Devoluções", text: "Registo de devoluções ligadas a vendas." },
        { icon: "fa-clipboard-check", title: "Inventário", text: "Contagens físicas e ajuste de stock." },
        { icon: "fa-chart-line", title: "Relatórios", text: "Resumo de vendas do dia e por período." },
        { icon: "fa-mobile-screen", title: "PWA", text: "Instalável no telemóvel ou tablet." }
    ],

    systems: [
        {
            title: "Bidera PDV",
            type: "Ponto de Venda",
            description: "PDV completo para mercearias e lojas — caixa, stock, crédito e relatórios em F CFA.",
            github: "https://github.com/Ivandro150198/Bidera",
            status: "Disponível"
        },
        {
            title: "Nu Chao",
            type: "Loja online",
            description: "Catálogo e venda de roupas e acessórios com experiência de compra digital.",
            github: "https://github.com/Ivandro150198/Nu_Chao",
            status: "Disponível"
        },
        {
            title: "Ticket",
            type: "Venda de bilhetes",
            description: "Plataforma de venda online de bilhetes para eventos e shows.",
            github: "https://github.com/Ivandro150198/Ticket",
            status: "Disponível"
        },
        {
            title: "Gestão de Armazéns",
            type: "Stock e logística",
            description: "Controlo de stock e gestão de armazéns para instituições e retalho.",
            github: "https://github.com/Ivandro150198/Gestao-de-Armazens",
            status: "Disponível"
        }
    ],

    skills: {
        Backend: [
            { name: "PHP" },
            { name: "JavaScript" },
            { name: "MySQL" }
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
            { name: "GitHub" }
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

    container.replaceChildren();
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    container.append(alert);

    if (type === "success") {
        setTimeout(() => {
            container.replaceChildren();
        }, 5000);
    }
}

function buildMailto(name, email, subject, message) {
    const subjectLine = `[Contato do Site] ${getSubjectText(subject)}`;
    const body = `Nome: ${name}\nEmail: ${email}\n\n${message}`;
    return `mailto:ivandrotc11@gmail.com?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;
}

function showContactFallback(name, email, subject, message) {
    const container = document.getElementById("form-message");
    if (!container) return;

    container.replaceChildren();
    const alert = document.createElement("div");
    alert.className = "alert alert-danger";

    const text = document.createElement("p");
    text.textContent = "O servidor não enviou o email. A mensagem continua no formulário. Abra o seu programa de email para a entregar.";

    const link = document.createElement("a");
    link.className = "form-fallback";
    link.href = buildMailto(name, email, subject, message);
    link.textContent = "Abrir email com esta mensagem";

    alert.append(text, link);
    container.append(alert);
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
            const techClasses = [...project.technologies.map((t) => t.toLowerCase()), project.area || ""]
                .join(" ")
                .trim();
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

function loadPosModules() {
    const container = document.getElementById("pos-modules");
    if (!container) return;

    container.innerHTML = portfolioData.posModules
        .map(
            (mod) => `
            <li class="pos-module">
                <i class="fas ${mod.icon}" aria-hidden="true"></i>
                <div>
                    <strong>${mod.title}</strong>
                    <p>${mod.text}</p>
                </div>
            </li>
        `
        )
        .join("");
}

function loadSystems() {
    const container = document.getElementById("systems-container");
    if (!container) return;

    container.innerHTML = portfolioData.systems
        .map(
            (system) => `
            <article class="system-item reveal" data-reveal>
                <div class="system-item__meta">
                    <span class="system-item__type">${system.type}</span>
                    <span class="system-item__status">${system.status}</span>
                </div>
                <h3>${system.title}</h3>
                <p>${system.description}</p>
                <div class="system-item__actions">
                    <a href="#contact" class="system-item__link" data-demo="${system.title}">
                        Pedir demonstração <i class="fas fa-arrow-right"></i>
                    </a>
                    <a href="${system.github}" class="system-item__link" target="_blank" rel="noopener noreferrer">
                        Código <i class="fab fa-github"></i>
                    </a>
                </div>
            </article>
        `
        )
        .join("");
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

const techIcons = [
    { name: "PHP", icon: "fab fa-php", color: "#777BB4", x: "18%", y: "28%", size: "5.1rem", z: 80, delay: "0s" },
    { name: "JavaScript", icon: "fab fa-js", color: "#F0DB4F", x: "42%", y: "18%", size: "4.8rem", z: 140, delay: "0.4s" },
    { name: "HTML5", icon: "fab fa-html5", color: "#E34F26", x: "68%", y: "24%", size: "4.6rem", z: 60, delay: "0.8s" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572B6", x: "82%", y: "48%", size: "4.4rem", z: 110, delay: "0.2s" },
    { name: "MySQL", icon: "fas fa-database", color: "#00758F", x: "22%", y: "68%", size: "4.3rem", z: 40, delay: "1s" },
    { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#7952B3", x: "50%", y: "58%", size: "4.7rem", z: 160, delay: "0.6s" },
    { name: "Git", icon: "fab fa-git-alt", color: "#F05032", x: "72%", y: "72%", size: "4.2rem", z: 90, delay: "1.2s" },
    { name: "GitHub", icon: "fab fa-github", color: "#f4f7fb", x: "38%", y: "78%", size: "4rem", z: 20, delay: "0.3s" }
];

function loadTechStage() {
    const scene = document.getElementById("tech-scene");
    const stage = document.getElementById("tech-stage");
    if (!scene || !stage) return;

    scene.innerHTML = techIcons
        .map(
            (tech, index) => `
            <div class="tech-icon" data-depth="${tech.z}" style="--x:${tech.x};--y:${tech.y};--size:${tech.size};--tz:${tech.z}px;--icon-color:${tech.color};--float-delay:${tech.delay};--float-duration:${4.5 + (index % 3) * 0.7}s;" title="${tech.name}">
                <div class="tech-icon__face">
                    <i class="${tech.icon}" aria-hidden="true"></i>
                    <span class="tech-icon__label">${tech.name}</span>
                </div>
            </div>
        `
        )
        .join("");

    stage.classList.add("is-ready");
    initTechScroll();
}

function initTechScroll() {
    const stage = document.getElementById("tech-stage");
    const scene = document.getElementById("tech-scene");
    const icons = scene ? [...scene.querySelectorAll(".tech-icon")] : [];
    if (!stage || !scene || !icons.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const update = () => {
        const rect = stage.getBoundingClientRect();
        const viewH = window.innerHeight || 1;
        const progress = 1 - (rect.top + rect.height / 2) / (viewH + rect.height / 2);
        const tilt = (Math.max(0, Math.min(1, progress)) - 0.5) * 2;
        scene.style.transform = `rotateX(${8 - tilt * 14}deg) rotateY(${tilt * 22}deg) translateZ(${tilt * 24}px)`;
        icons.forEach((icon, index) => {
            const depth = Number(icon.dataset.depth) || 40;
            const parity = index % 2 === 0 ? 1 : -1;
            icon.style.setProperty("--rx", `${-10 + tilt * 16 * parity}deg`);
            icon.style.setProperty("--ry", `${14 + tilt * 28 * -parity}deg`);
            icon.style.setProperty("--tz", `${depth + tilt * depth * 0.55}px`);
        });
        ticking = false;
    };
    const onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
}

function initHeroVideo() {
    const video = document.getElementById("heroVideo");
    const media = document.getElementById("heroMedia");
    if (!video || !media) return;
    const markPlaying = () => media.classList.add("is-playing");
    const tryPlay = () => {
        const p = video.play();
        if (p && typeof p.then === "function") p.then(markPlaying).catch(() => media.classList.remove("is-playing"));
    };
    video.addEventListener("playing", markPlaying);
    if (video.readyState >= 2) tryPlay();
    else video.addEventListener("loadeddata", tryPlay, { once: true });
}

function initAmbientCanvas() {
    const canvas = document.getElementById("ambient-canvas");
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let particles = [];
    let raf = 0;

    const resize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        const count = Math.min(56, Math.floor((width * height) / 28000));
        particles = Array.from({ length: count }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * 1.8 + 0.4,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            a: Math.random() * 0.35 + 0.1
        }));
    };

    const draw = () => {
        ctx.clearRect(0, 0, width, height);
        const accent = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#e04e2b";
        particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = accent;
            ctx.globalAlpha = p.a;
            ctx.fill();
            for (let j = i + 1; j < particles.length; j += 1) {
                const q = particles[j];
                const dist = Math.hypot(p.x - q.x, p.y - q.y);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(q.x, q.y);
                    ctx.strokeStyle = accent;
                    ctx.globalAlpha = (1 - dist / 120) * 0.12;
                    ctx.stroke();
                }
            }
        });
        ctx.globalAlpha = 1;
        raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) cancelAnimationFrame(raf);
        else raf = requestAnimationFrame(draw);
    });
}

function initCounters() {
    const nodes = document.querySelectorAll("[data-count]");
    if (!nodes.length) return;
    const animate = (el) => {
        const target = Number(el.dataset.count) || 0;
        const suffix = el.dataset.suffix || "";
        const start = performance.now();
        const tick = (now) => {
            const t = Math.min(1, (now - start) / 1200);
            el.textContent = `${Math.round(target * (1 - Math.pow(1 - t, 3)))}${suffix}`;
            if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            animate(entry.target);
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.6 });
    nodes.forEach((node) => observer.observe(node));
}

function initScrollMotion() {
    const observe = () => {
        const items = document.querySelectorAll(".project-row, .timeline-item");
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            items.forEach((el) => el.classList.add("is-visible"));
            return;
        }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.2, rootMargin: "0px 0px -40px 0px" });
        items.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.06}s`;
            observer.observe(el);
        });
    };
    observe();
    setTimeout(observe, 80);
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

function initDemoRequests() {
    document.addEventListener("click", (event) => {
        const link = event.target.closest("[data-demo]");
        if (!link) return;

        const subject = document.getElementById("subject");
        const message = document.getElementById("message");
        if (subject) subject.value = "projeto";
        if (message && message.value.trim().length < 10) {
            message.value = `Quero uma demonstração de ${link.dataset.demo}.`;
        }
    });
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
            } else if (response.status === 400 || response.status === 422) {
                showMessage(data?.message || "Dados do formulário inválidos.", "danger");
            } else {
                showContactFallback(name, email, subject, message);
            }
        } catch (err) {
            showContactFallback(name, email, subject, message);
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
    initAmbientCanvas();
    initHeroVideo();
    loadProjects();
    loadPosModules();
    loadSystems();
    loadSkills();
    loadTechStage();
    loadExperience();
    initContactForm();
    initDemoRequests();
    initCounters();
    initScrollMotion();
    updateCopyrightYear();
    initReveal();
    requestAnimationFrame(() => initReveal());
    document.getElementById("preloader")?.classList.add("is-hidden");
    document.querySelectorAll(".hero [data-reveal]").forEach((el) => el.classList.add("is-in"));
});

window.addEventListener("load", () => {
    document.getElementById("preloader")?.classList.add("is-hidden");
    document.querySelectorAll(".hero [data-reveal]").forEach((el) => el.classList.add("is-in"));
    initHeroVideo();
});
