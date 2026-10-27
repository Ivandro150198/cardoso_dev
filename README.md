# Ivandro Cardoso — portfólio

Página do engenheiro de software: projetos, sistemas de ponto de venda, habilidades, experiência e contato.

## Correr localmente

No XAMPP, abra `http://localhost/dev/`.

O formulário tenta `send-email.php`. Esse envio só funciona com PHP e com o `mail()` do servidor. Se falhar, o site abre a mesma mensagem no programa de email de quem escreve. A política está em `privacidade.html`.

## Onde editar

- Estrutura da página: `index.html`
- Textos dos projetos, sistemas e habilidades: `assets/js/main.js`
- Aparência: `assets/css/style.css`

## Deploy

GitHub Pages e Vercel servem os ficheiros estáticos. O `vercel.json` só define cache dos assets. Nesses alojamentos o PHP não corre, por isso o contato usa o email do visitante.
