# Portfólio Profissional - Engenheiro de Software

Um portfólio moderno e responsivo desenvolvido para engenheiros de software e profissionais de tecnologia.

## 🚀 Funcionalidades

### ✨ Hero Section Otimizada
- Identificação clara em menos de 5 segundos
- Proposta de valor destacada
- Botões de ação estratégicos
- Links para redes sociais

### 💼 Vitrine de Projetos
- Estudos de caso completos (Problema → Solução → Resultado)
- Stack tecnológica com badges
- Links diretos para GitHub e demos
- Cards interativos com hover effects

### 🛠️ Habilidades Técnicas
- Organização por categorias (Backend, Frontend, Banco de Dados, DevOps)
- Barras de progresso animadas
- Ícones representativos

### 📈 Experiência Profissional
- Timeline visual interativo
- Descrição detalhada de cada posição
- Design responsivo

### 🔗 Integração GitHub
- Widget com repositórios recentes
- Estatísticas (stars, forks, linguagens)
- Links diretos para os projetos

### 📝 Blog Técnico
- Cards de posts com imagem
- Metadados (data, tempo de leitura)
- Excerpt atrativo
- Sistema de navegação

### 📧 Formulário de Contato
- Validação client-side
- Proteção anti-spam (CAPTCHA simples)
- Feedback visual de envio
- Design moderno

### 📄 Download de CV
- Botão visível para download em PDF
- Acesso direto ao currículo atualizado

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Design moderno com animações
- **JavaScript (ES6+)** - Funcionalidades dinâmicas
- **Bootstrap 5** - Framework responsivo
- **Font Awesome** - Ícones profissionais
- **AOS (Animate On Scroll)** - Animações suaves

### Design & UX
- **Responsive Design** - Adaptação a todos os dispositivos
- **Micro-interactions** - Feedback visual aprimorado
- **SEO Optimization** - Meta tags otimizadas
- **Performance** - Carregamento otimizado

## 📁 Estrutura do Projeto

```
portfolio/
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   └── style.css       # Estilos personalizados
│   ├── js/
│   │   └── main.js         # Funcionalidades JavaScript
│   ├── images/
│   │   ├── profile.jpg     # Foto de perfil
│   │   ├── projects/       # Imagens dos projetos
│   │   ├── blog/           # Imagens do blog
│   │   └── favicon.ico     # Favicon
│   └── cv/
│       └── curriculo.pdf   # Currículo em PDF
└── README.md               # Documentação
```

## 🚀 Como Usar

### 1. Clone o repositório
```bash
git clone https://github.com/Ivandro150198/cardoso_dev.git
cd cardoso_dev
```

### 2. Personalize o conteúdo
Edite o arquivo `assets/js/main.js` e atualize o objeto `portfolioData` com suas informações:

- **Dados pessoais**: Nome, título, descrição
- **Projetos**: Título, descrição, tecnologias, links
- **Habilidades**: Categorias e níveis de proficiência
- **Experiência**: Posições, empresas, descrições
- **Blog**: Posts técnicos

### 3. Adicione suas imagens
- Substitua `assets/images/profile.jpg` pela sua foto
- Adicione imagens dos projetos em `assets/images/projects/`
- Adicione imagens do blog em `assets/images/blog/`
- Upload seu CV em `assets/cv/curriculo.pdf`

### 4. Configure links externos
Atualize os seguintes links no `index.html`:
- Perfil do GitHub
- Perfil do LinkedIn
- Email de contato
- Links dos projetos

### 5. Teste localmente
Abra o `index.html` em seu navegador ou use um servidor local:

```bash
# Usando Python
python -m http.server 8000

# Usando Node.js
npx serve .

# Usando PHP
php -S localhost:8000
```

### 6. Deploy
Faça o deploy para sua plataforma preferida:
- **GitHub Pages**: Gratuito e integrado ao GitHub
- **Netlify**: Build automático e domínio personalizado
- **Vercel**: Performance otimizada
- **Firebase Hosting**: CDN global

## 🎨 Personalização

### Cores
Edite as variáveis CSS em `assets/css/style.css`:
```css
:root {
    --primary-color: #0d6efd;
    --secondary-color: #6c757d;
    /* ... */
}
```

### Fontes
O projeto utiliza Google Fonts (Inter). Para alterar:
1. Mude o URL no `<head>` do `index.html`
2. Atualize a variável `--font-family` no CSS

### Animações
Personalize as animações AOS no `assets/js/main.js`:
```javascript
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});
```

## 📱 Responsividade

O site é totalmente responsivo e se adapta a:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (< 768px)

## 🔧 Funcionalidades Técnicas

### Performance
- Lazy loading de imagens
- CSS e JavaScript minificados
- Cache otimizado
- Carregamento assíncrono

### SEO
- Meta tags completas
- Open Graph para redes sociais
- Estrutura semântica HTML5
- URLs amigáveis

### Acessibilidade
- Navegação por teclado
- Contraste adequado
- Tags ARIA onde necessário
- Leitor de tela compatível

## 📈 Integrações

### GitHub API
Para integrar com a API real do GitHub, substitua o código simulado em `loadGitHubWidget()`:

```javascript
async function loadGitHubWidget() {
    const response = await fetch('https://api.github.com/users/Ivandro150198/repos');
    const repos = await response.json();
    // Processar e exibir repositórios
}
```

### Formulário de Contato
Para funcionalidade real de email, integre com:
- **EmailJS**: Client-side sem backend
- **Formspree**: Backend como serviço
- **Custom backend**: PHP/Node.js com SMTP

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para detalhes.

## 📞 Contato

- **Email**: seuemail@exemplo.com
- **GitHub**: https://github.com/Ivandro150198
- **LinkedIn**: https://linkedin.com/in/seuperfil

---

⭐ Se este projeto ajudou você, deixe uma estrela no GitHub!
