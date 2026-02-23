# Nexus Food Intelligence — Landing Page

Projeto estático (HTML/CSS/JS) da landing page da Nexus Food Intelligence.

## Visualização local

- Servidor local: `python3 -m http.server 8000`
- Acesse: `http://localhost:8000/`

## Estrutura

- `index.html`: página principal
- `css/`: estilos (`tokens.css`, `layout.css`, `components.css`)
- `js/`: interações (`navbar.js`, `tabs.js`, `accordion.js`, `animations.js`, `main.js`)
- `assets/images/`: imagens otimizadas (WebP + fallback PNG)
- `docs/`: conteúdos auxiliares

## Notas de performance e acessibilidade

- Imagens com `loading="lazy"` e `decoding="async"`
- Logo com `fetchpriority="high"` para LCP
- FAQ com `aria-expanded` correto

## Deploy

- GitHub Pages: habilitar Pages no repositório e apontar para a branch `main` (root)

## Contato

- WhatsApp: (47) 99221-2108
- Email: nexusfoodintelligence@gmail.com
- Endereço: R. João Pessoa, 1183 - Velha, Blumenau - SC, 89036-000
