# 🎨 DESIGN SYSTEM — Nexus Food Intelligence

> **Versão:** 1.0 | **Data:** 2026-02-22 | **Base:** PROJECT-MAP.md v2.0

---

## 1. Princípios de Design

| Princípio | Descrição |
|-----------|-----------|
| **Premium First** | Cada pixel deve transmitir sofisticação. Nada genérico. |
| **Mobile First** | CSS de mobile para desktop. Breakpoints responsivos. |
| **Performance First** | Zero frameworks CSS. Vanilla CSS + custom properties. |
| **Contrast & Clarity** | WCAG AA mínimo. Hierarquia visual clara. |
| **Motion with Purpose** | Animações que guiam o olhar, nunca distraem. |

**Referências:** Consumer.com.br (layout), Linear.app (glassmorphism), Vercel.com (dark mode), Stripe.com (pricing)

---

## 2. Identidade da Marca / Logo

- **Ícone:** Círculo com padrão circuito (placa-mãe) + garfo e faca centrais (brancos)
- **Gradiente:** Navy dark (#1a2744) → Teal (#10b981)
- **Tipografia:** "NEXUS" em caps bold navy, "E" com nó de circuito; "Food Intelligence" em teal
- **Conceito:** Fusão de dados/IA com gastronomia
- **Mínimo legível:** 120px largura

---

## 3. Paleta de Cores (CSS Custom Properties)

```css
:root {
  /* === BACKGROUNDS ESCUROS === */
  --bg-deep:       #060d18;
  --bg-primary:    #0b1628;
  --bg-secondary:  #0f1d32;
  --bg-elevated:   #142640;

  /* === BACKGROUNDS CLAROS === */
  --bg-light:      #f8fafb;
  --bg-light-alt:  #eef2f6;
  --bg-white:      #ffffff;

  /* === ACCENT (logo) === */
  --accent:        #10b981;
  --accent-hover:  #059669;
  --accent-light:  #34d399;
  --accent-glow:   rgba(16,185,129,0.12);
  --accent-bg:     rgba(16,185,129,0.06);

  /* === SECUNDÁRIOS === */
  --cyan:          #06b6d4;
  --cyan-glow:     rgba(6,182,212,0.10);
  --amber:         #f59e0b;

  /* === NAVY (logo) === */
  --navy:          #1a2744;
  --navy-light:    #2a3a5c;

  /* === TEXTO DARK === */
  --text-on-dark:    #f0f4f8;
  --text-body-dark:  #94a3b8;
  --text-muted-dark: #64748b;

  /* === TEXTO LIGHT === */
  --text-on-light:    #1a2744;
  --text-body-light:  #475569;
  --text-muted-light: #94a3b8;

  /* === BORDAS === */
  --border-dark:  rgba(16,185,129,0.08);
  --border-light: rgba(26,39,68,0.08);
  --border-hover: rgba(16,185,129,0.20);

  /* === GRADIENTES === */
  --gradient-hero:   linear-gradient(135deg, #060d18 0%, #0b1628 40%, #0f2a3d 100%);
  --gradient-accent: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
  --gradient-card:   linear-gradient(135deg, rgba(16,185,129,0.05) 0%, rgba(6,182,212,0.03) 100%);
}
```

### Alternância Dark/Light por Seção

```
HERO        → --bg-deep      (dark)
PROBLEMA    → --bg-light      (light)
SOLUÇÃO     → --bg-primary    (dark)
FEATURES    → --bg-light      (light)
RESULTADOS  → --bg-primary    (dark)
PREÇOS      → --bg-light      (light)
DEPOIMENTOS → --bg-primary    (dark)
FAQ         → --bg-light      (light)
CTA FINAL   → --bg-deep       (dark)
FOOTER      → --bg-deep       (dark)
```

---

## 4. Tipografia

**Font:** Inter (Google Fonts) — `wght@400;500;600;700;800`

```css
:root {
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --text-xs:   0.75rem;   --text-sm:   0.875rem;
  --text-base: 1rem;      --text-lg:   1.125rem;
  --text-xl:   1.25rem;   --text-2xl:  1.5rem;
  --text-3xl:  1.75rem;   --text-4xl:  2.5rem;
  --text-5xl:  3.5rem;
}
```

| Elemento | Desktop | Mobile | Weight | Line-Height |
|----------|---------|--------|--------|-------------|
| H1 (Hero) | 3.5rem | 2.25rem | 800 | 1.1 |
| H2 (Seções) | 2.5rem | 1.75rem | 700 | 1.2 |
| H3 | 1.75rem | 1.5rem | 600 | 1.3 |
| H4 (Cards) | 1.25rem | 1.25rem | 600 | 1.4 |
| Body | 1rem | 1rem | 400 | 1.7 |
| Overline | 0.8125rem | 0.75rem | 600 | 1.4, UPPERCASE, spacing 0.1em |
| Button | 1rem | 1rem | 600 | 1 |

---

## 5. Spacing & Layout

```css
:root {
  --space-1: 0.25rem;  --space-2: 0.5rem;   --space-3: 0.75rem;
  --space-4: 1rem;     --space-6: 1.5rem;   --space-8: 2rem;
  --space-10: 2.5rem;  --space-12: 3rem;    --space-16: 4rem;
  --space-20: 5rem;    --space-24: 6rem;    --space-32: 8rem;

  --container-xl: 1200px;
  --container-padding: 1.5rem;

  --radius-sm: 6px;  --radius-md: 8px;  --radius-lg: 12px;
  --radius-xl: 16px; --radius-2xl: 20px; --radius-full: 9999px;

  --shadow-sm:  0 1px 2px rgba(0,0,0,0.05);
  --shadow-lg:  0 10px 15px rgba(0,0,0,0.10);
  --shadow-xl:  0 20px 25px rgba(0,0,0,0.15);
  --shadow-glow: 0 0 40px var(--accent-glow);
}
```

**Breakpoints (Mobile First):**
- Default: 0–767px (Mobile)
- `@media (min-width: 768px)` — Tablet
- `@media (min-width: 1024px)` — Desktop
- `@media (min-width: 1440px)` — Wide

---

## 6. Componentes Chave

### 6.1 Botões
| Tipo | Background | Border | Hover Effect |
|------|-----------|--------|--------------|
| `.btn-primary` | `--accent` solid | none | translateY(-2px) + glow shadow |
| `.btn-secondary` | transparent | 2px `--accent` | accent-bg fill |
| `.btn-gradient` | `--gradient-accent` | none | translateY(-2px) + glow |

**Sizes:** `.btn-sm` (8px 16px), `.btn-md` (16px 32px), `.btn-lg` (20px 40px)
**Border-radius:** 12px | **Font:** 600 weight

### 6.2 Cards
| Tipo | Background | Border | Hover |
|------|-----------|--------|-------|
| `.card-glass` | `rgba(11,22,40,0.6)` + blur(16px) | `--border-dark` | translateY(-4px) + shadow |
| `.card-light` | `--bg-white` | `--border-light` | translateY(-4px) + light shadow |

### 6.3 Navbar
- **Default:** `position: fixed`, `background: transparent`
- **Scrolled:** `background: rgba(6,13,24,0.85)` + `blur(12px)` + bottom border
- **Mobile:** Hamburger → side drawer

### 6.4 Pricing Cards
- **Essencial:** `.card-light` normal
- **Growth (Popular):** `.card-light` + border `--accent` + `scale(1.05)` + badge "Recomendado"
- **Intelligence:** `.card-glass` dark + premium feel

### 6.5 FAQ Accordion
- Pergunta: bold, flex between (text + chevron)
- Resposta: `max-height: 0` → `max-height: 500px` transition
- Chevron: `rotate(180deg)` on active

### 6.6 WhatsApp Float
- `position: fixed`, bottom-right, `60x60px`, `#25D366`
- `@keyframes pulse` — ring effect every 2s
- z-index: 999

---

## 7. Animações

| Nome | CSS | Uso |
|------|-----|-----|
| **Scroll Reveal** | `opacity: 0→1; translateY(30px→0); 0.6s ease` | Elementos entrando viewport |
| **Gradient Text** | `background-clip: text; -webkit-text-fill-color: transparent` | Palavras-chave destacadas |
| **Glow** | `radial-gradient(circle, accent-glow 0%, transparent 70%)` + pseudo-element | Atrás de mockups/CTAs |
| **Counter** | JS: 0 → target value animado | Seção Resultados |
| **Pulse** | `scale(1)→scale(1.05); box-shadow ring` | WhatsApp float |
| **Hover Card** | `translateY(-4px); shadow increase` | Cards hover |
| **Stagger** | `transition-delay: 0.1s * n` | Grid items sequenciais |

**Reduced Motion:** Respeitamos `prefers-reduced-motion: reduce` — desativa todas as animações.

---

## 8. Ícones (Lucide)

CDN: `https://unpkg.com/lucide@latest/dist/umd/lucide.min.js`

| Uso | Ícone Lucide | Tamanho |
|-----|-------------|---------|
| Cardápio | `utensils` | 48px |
| Growth | `trending-up` | 48px |
| Intelligence | `brain` | 48px |
| Automação | `settings` | 48px |
| Comissões (dor) | `dollar-sign` | 32px |
| Dados (dor) | `lock` | 32px |
| Check (pricing) | `check` | 20px |
| FAQ chevron | `chevron-down` | 20px |
| Nav mobile | `menu` / `x` | 24px |

**Estilo:** `stroke-width: 2` (normal), `1.5` (xl). Cor padrão: `--accent`.

---

## 9. Checklist de Implementação

- [ ] `css/reset.css` — box-sizing, margins, font-smoothing
- [ ] `css/tokens.css` — Todas as custom properties acima
- [ ] `css/layout.css` — Container, grid, split, section, breakpoints
- [ ] `css/components.css` — btn, card, navbar, pricing, faq, float
- [ ] `css/animations.css` — Keyframes, reveal, glow, pulse
- [ ] Validar contraste WCAG AA
- [ ] Testar 320/375/768/1024/1440px
- [ ] `prefers-reduced-motion` funcional
- [ ] `font-display: swap` no font load
