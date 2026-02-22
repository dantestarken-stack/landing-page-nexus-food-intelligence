# 🗺️ PROJECT MAP — Landing Page Nexus Food Intelligence

> **Versão:** 2.0  
> **Data:** 2026-02-22  
> **Status:** Planejamento  
> **Autor:** Dante Martins + AI Agents  
> **Referência Visual:** [Consumer.com.br/cardapio-digital](https://consumer.com.br/cardapio-digital)

---

## 📌 1. VISÃO GERAL DO PROJETO

### 1.1 O que é
Uma **Landing Page de alta conversão** para o produto **Nexus Food Intelligence** — plataforma de cardápio digital + inteligência de crescimento para restaurantes.

### 1.2 Objetivo da Landing Page
Converter visitantes (donos de restaurante) em **leads qualificados** que agendam uma demonstração/consultoria via WhatsApp.

### 1.3 Diferença: Landing Page vs Sistema Atual
| Aspecto | Site Atual (nexusfood.com.br) | Nova Landing Page |
|---------|-------------------------------|-------------------|
| **Propósito** | Login + acesso ao sistema | Vender e converter leads |
| **Público** | Clientes atuais | Novos prospects |
| **Foco** | Funcionalidade | Persuasão e desejo |
| **Conteúdo** | Técnico | Emocional + racional |
| **CTA** | Entrar | Falar com consultor (WhatsApp) |

### 1.4 Referência: Consumer.com.br — Análise Estrutural
O site da Consumer foi escolhido como referência principal. Abaixo a análise dos padrões que vamos **adotar e adaptar**:

#### ✅ Padrões a Adotar (da Consumer)
| Padrão | O que faz bem | Como adaptar no Nexus |
|--------|---------------|----------------------|
| **Split-screen layout** | Mockup de um lado + texto do outro (alternando) | Usar com nossos mockups do dashboard + cardápio mobile |
| **Prova social imediata** | "30.000 restaurantes" no topo | Badge com nº de clientes/cidades logo no Hero |
| **Grid 2-col de features** | Ícone + título + descrição | Grid de 2-3 cols para cada pilar do Nexus |
| **Seção dark break** | Seção com fundo escuro quebrando o ritmo visual | Usar nosso navy/teal como "dark break" entre seções claras |
| **Foto contextual** | Foto de celular na mão mostrando o app | Foto/mockup do cardápio Nexus na mão do cliente |
| **WhatsApp floating** | Botão flutuante WhatsApp (canto inferior direito) | Manter — é o CTA de conversão principal |
| **FAQ simples** | Perguntas diretas, sem floreios | Adaptar com perguntas específicas do Nexus |
| **Preços claros** | 2 planos com features em lista | Adaptar para 3 planos (Essencial / Growth / Intelligence) |
| **Back-to-top** | Botão de voltar ao topo | Manter para UX |

#### 🔄 O que vamos fazer MELHOR que a Consumer
| Aspecto | Consumer | Nexus (nosso diferencial) |
|---------|----------|---------------------------|
| **Estética** | Limpa mas genérica (branco + vermelho) | Premium dark SaaS (navy + teal + glassmorphism) |
| **Animações** | Quase nenhuma | Scroll reveal, counters animados, hover effects |
| **Storytelling** | Funcionalidades soltas | Jornada do problema → solução → resultado |
| **Preços** | 2 planos simples | 3 planos com posicionamento estratégico |
| **Inteligência** | Não menciona IA | IA como diferencial central (pilar Intelligence) |
| **Design** | Flat/básico | Glassmorphism, gradientes, glow effects |

---

## 🎯 2. ESTRATÉGIA DE CONVERSÃO

### 2.1 Público-Alvo

#### Persona Primária: Dono de Restaurante
- **Perfil:** Proprietário de restaurante de médio porte em cidade de 100k+ habitantes
- **Idade:** 30-55 anos
- **Dores principais:**
  - Dependência alta do iFood (comissões de 12-27%)
  - Não conhece os próprios clientes (dados ficam no iFood)
  - Ticket médio estagnado
  - Marketing sem estratégia (posta no Instagram "quando dá")
  - Não sabe quais pratos dão mais margem
- **Desejos:**
  - Ter canal próprio de vendas
  - Aumentar faturamento sem depender de marketplace
  - Fidelizar clientes de forma inteligente
  - Tomar decisões baseadas em dados, não em achismo

#### Persona Secundária: Gestor/Gerente de Franquias
- **Perfil:** Responsável por operações de rede de restaurantes
- **Dores:** Falta de padronização, sem visão consolidada de dados
- **Desejos:** Escala, previsibilidade, controle centralizado

### 2.2 Proposta de Valor Única (UVP)
> **"Transforme seu restaurante em uma máquina de vendas inteligente — com cardápio digital, marketing automatizado e dados que aumentam seu faturamento."**

### 2.3 Funil de Conversão da Landing Page
```
[Visitante] → [Scroll/Engajamento] → [Interesse pelos planos] → [CTA: Falar com Consultor] → [WhatsApp/Formulário] → [Lead Qualificado]
```

---

## 🏗️ 3. ARQUITETURA DA PÁGINA (SITEMAP / SEÇÕES)

A landing page será uma **Single Page** com as seguintes seções, organizadas em ordem estratégica de persuasão:

```
┌─────────────────────────────────────────────────┐
│  🔝 NAVBAR (fixa)                               │
│  Logo | Funcionalidades | Planos | Depoimentos  │
│  [CTA: Falar com Consultor]                     │
├─────────────────────────────────────────────────┤
│                                                 │
│  🎬 SEÇÃO 1: HERO                               │
│  Headline principal + Subheadline               │
│  Mockup do produto (mobile + desktop)           │
│  [CTA Primário] [CTA Secundário]               │
│  Badges de confiança (nº clientes, cidades)     │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  😤 SEÇÃO 2: PROBLEMA / DOR                     │
│  "Você ainda depende do iFood?"                 │
│  3-4 cards com dores reais do restaurante       │
│  Transição emocional → solução                  │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  💡 SEÇÃO 3: SOLUÇÃO — O QUE É O NEXUS          │
│  Apresentação do conceito "Hub de Inteligência"  │
│  Diagrama visual do ecossistema                 │
│  3 pilares: Cardápio | Growth | Intelligence    │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  🧩 SEÇÃO 4: FUNCIONALIDADES (Tabs/Accordion)   │
│                                                 │
│  Tab 1: 🧾 Cardápio Digital                     │
│    • Interface mobile-first                     │
│    • Menu Engineering                           │
│    • Favoritos & mais vendidos                  │
│    • Setup e padronização                       │
│                                                 │
│  Tab 2: 📈 Aquisição & Growth                   │
│    • Gestão de anúncios (Meta Ads)              │
│    • Criativos profissionais                    │
│    • Relatórios de performance                  │
│                                                 │
│  Tab 3: 🧠 Inteligência & CRM                   │
│    • Análise comportamental                     │
│    • Automação de marketing                     │
│    • Smart Upsell                               │
│    • Dashboard estratégico                      │
│                                                 │
│  Tab 4: ⚙️ Automação Operacional                │
│    • Onboarding guiado                          │
│    • Otimização contínua                        │
│    • Monitoramento de ROI                       │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  📊 SEÇÃO 5: RESULTADOS / NÚMEROS               │
│  Métricas de impacto (animadas)                 │
│  "+35% ticket médio" / "+60% retenção"          │
│  Antes vs Depois (visual comparativo)           │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  💰 SEÇÃO 6: PLANOS E PREÇOS                    │
│                                                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │ ESSENCIAL│ │  GROWTH  │ │INTELLIG. │       │
│  │          │ │ ⭐ POPULAR│ │ 🚀 PRO   │       │
│  │ R$200-400│ │  R$900   │ │ R$2.000  │       │
│  │  /mês    │ │  /mês    │ │  /mês    │       │
│  │          │ │          │ │          │       │
│  │ Cardápio │ │ + Tráfego│ │ + IA     │       │
│  │ Pedidos  │ │ + Criativ│ │ + CRM    │       │
│  │ WhatsApp │ │ + Growth │ │ + Consult│       │
│  │          │ │          │ │          │       │
│  │ [Quero]  │ │ [Quero]  │ │ [Quero]  │       │
│  └──────────┘ └──────────┘ └──────────┘       │
│                                                 │
│  Implementação: R$500 | R$800 | R$1.500        │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  💬 SEÇÃO 7: DEPOIMENTOS / PROVA SOCIAL         │
│  Cards com foto + nome + restaurante            │
│  Citação + resultado obtido                     │
│  Logos de clientes (se disponíveis)             │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  ❓ SEÇÃO 8: FAQ (Accordion)                    │
│  "Funciona para delivery e presencial?"         │
│  "Preciso de equipe técnica?"                   │
│  "Quanto tempo para implementar?"               │
│  "Posso migrar do iFood?"                       │
│  "Tem contrato de fidelidade?"                  │
│  "Como funciona a IA?"                          │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  🚀 SEÇÃO 9: CTA FINAL                          │
│  Headline de urgência/escassez                  │
│  "Vagas limitadas para implementação"           │
│  [Agendar Demonstração Gratuita]                │
│  Garantia / baixo risco                         │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  📎 FOOTER                                      │
│  Logo | Links | Redes Sociais | Legal           │
│  Contato: WhatsApp, Email, Endereço             │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## 🎨 4. DESIGN SYSTEM

### 4.0 Identidade da Logo
A logo do Nexus Food Intelligence combina **gastronomia + tecnologia**:
- **Ícone:** Círculo com padrão de circuito (placa-mãe) + garfo e faca centralizados
- **Paleta da logo:** Gradiente de navy dark (#1a2744) → teal/esmeralda (#10b981)
- **Tipografia da logo:** "NEXUS" em caps bold (navy escuro), com "E" estilizado com circuito; "Food Intelligence" em teal, peso lighter
- **Conceito:** Fusão de dados/inteligência artificial com o universo gastronômico

### 4.1 Paleta de Cores (derivada da logo)

#### Modo Principal: Dark Premium (baseado na identidade)
| Token | Valor | Uso |
|-------|-------|-----|
| `--color-bg-deep` | `#060d18` | Background principal (hero, CTA final) |
| `--color-bg-primary` | `#0b1628` | Background seções escuras |
| `--color-bg-secondary` | `#0f1d32` | Cards / containers elevados |
| `--color-bg-light` | `#f8fafb` | Seções de respiro (alternância) |
| `--color-bg-light-alt` | `#eef2f6` | Seções claras alternadas |
| `--color-accent-primary` | `#10b981` | CTA, ícones, checkmarks (teal/esmeralda) |
| `--color-accent-hover` | `#059669` | Hover do accent |
| `--color-accent-glow` | `rgba(16, 185, 129, 0.12)` | Glow effects atrás de cards/botões |
| `--color-accent-secondary` | `#06b6d4` | Cyan claro para destaques complementares |
| `--color-accent-warm` | `#f59e0b` | Badges, estrelas, alertas (âmbar) |
| `--color-navy` | `#1a2744` | Textos em fundo claro, consistent com logo |
| `--color-navy-light` | `#2a3a5c` | Bordas, divisores em modo escuro |
| `--color-text-on-dark` | `#f0f4f8` | Títulos em fundo escuro |
| `--color-text-body-dark` | `#94a3b8` | Texto de apoio em fundo escuro |
| `--color-text-on-light` | `#1a2744` | Títulos em fundo claro (navy) |
| `--color-text-body-light` | `#475569` | Texto de apoio em fundo claro |
| `--color-border-dark` | `rgba(16, 185, 129, 0.08)` | Bordas em seções escuras |
| `--color-border-light` | `rgba(26, 39, 68, 0.08)` | Bordas em seções claras |
| `--gradient-hero` | `linear-gradient(135deg, #060d18 0%, #0b1628 40%, #0f2a3d 100%)` | Background do hero |
| `--gradient-accent` | `linear-gradient(135deg, #10b981 0%, #06b6d4 100%)` | Botões e destaques gradient |
| `--gradient-card` | `linear-gradient(135deg, rgba(16,185,129,0.05) 0%, rgba(6,182,212,0.03) 100%)` | Cards com sutil gradient |

#### Estratégia de Alternância (inspirada na Consumer)
A Consumer alterna entre seções brancas e seções com fundo vermelho escuro. Nós faremos:
```
HERO        → Dark (navy deep + glow teal)
PROBLEMA    → Light (branco + navy text)
SOLUÇÃO     → Dark (navy + mockups com glow)
FEATURES    → Light (branco + cards com borda teal)
RESULTADOS  → Dark (navy + números animados em teal)
PREÇOS      → Light (branco + cards com destaque)
DEPOIMENTOS → Dark (navy + cards glass)
FAQ         → Light (branco + accordion clean)
CTA FINAL   → Dark (navy + gradient accent forte)
FOOTER      → Dark (navy deepest)
```

### 4.2 Tipografia
| Elemento | Font | Weight | Size | Line-height |
|----------|------|--------|------|-------------|
| H1 (Hero) | Inter | 800 (ExtraBold) | 56px / 3.5rem | 1.1 |
| H2 (Seções) | Inter | 700 (Bold) | 40px / 2.5rem | 1.2 |
| H3 (Sub-seções) | Inter | 600 (SemiBold) | 28px / 1.75rem | 1.3 |
| H4 (Cards) | Inter | 600 (SemiBold) | 20px / 1.25rem | 1.4 |
| Body Large | Inter | 400 | 18px / 1.125rem | 1.7 |
| Body | Inter | 400 | 16px / 1rem | 1.7 |
| Small | Inter | 400 | 14px / 0.875rem | 1.5 |
| Caption | Inter | 500 | 12px / 0.75rem | 1.4 |
| CTA Button | Inter | 600 | 16px / 1rem | 1 |
| Overline | Inter | 600 | 13px / 0.8125rem | 1.4 (UPPERCASE, letter-spacing: 0.1em) |

### 4.3 Efeitos e Animações
| Efeito | CSS | Quando usar |
|--------|-----|-------------|
| **Glassmorphism** | `backdrop-filter: blur(16px); background: rgba(11,22,40,0.6); border: 1px solid rgba(16,185,129,0.08)` | Cards em fundo escuro |
| **Glow Accent** | `box-shadow: 0 0 60px rgba(16,185,129,0.15)` | Atrás de mockups e CTAs |
| **Hover Card** | `transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.3)` | Hover em cards |
| **Hover Button** | `transform: translateY(-2px); box-shadow: 0 8px 24px rgba(16,185,129,0.3)` | Hover em botões |
| **Scroll Reveal** | `opacity: 0 → 1; translateY(30px → 0); transition: 0.6s ease` | Elementos entrando no viewport |
| **Counter** | JS animado de 0 → valor final | Números na seção de resultados |
| **Gradient Text** | `background: var(--gradient-accent); -webkit-background-clip: text` | Palavras-chave nos títulos |
| **Pulse** | `@keyframes pulse { scale(1) → scale(1.05) }` | Botão WhatsApp flutuante |

### 4.4 Componentes Visuais
| Componente | Layout | Localização |
|------------|--------|-------------|
| `Navbar` | Sticky, blur 12px, transparente → sólido no scroll, logo + links + CTA | Topo fixo |
| `HeroSection` | Centralizado, headline + sub + 2 CTAs + badge prova social, glow de fundo | Seção 1 |
| `PainPointCard` | Ícone + título + texto, fundo branco, borda sutil | Seção 2 (grid 2x2) |
| `SplitSection` | 50/50 → imagem + texto (Consumer pattern), alterna L/R | Seções 3, 4 |
| `FeatureTab` | Tab bar horizontal + conteúdo com ícone+grid | Seção 4 |
| `FeatureCard` | Ícone teal + título navy + descrição, borda sutil | Dentro das tabs |
| `StatCounter` | Número grande animado + label + ícone, fundo escuro | Seção 5 (grid 3-4 cols) |
| `PricingCard` | Header colorido + preço + feature list + CTA, "popular" badge | Seção 6 (3 cards) |
| `TestimonialCard` | Glass card, avatar + nome + restaurante + quote | Seção 7 (carousel ou grid) |
| `FAQItem` | Accordion, pergunta bold + chevron + resposta expandível | Seção 8 |
| `CTABanner` | Full-width, gradient forte, headline + botão grande | Seção 9 |
| `WhatsAppFloat` | Botão circular verde, pulso, fixo bottom-right | Toda a página |
| `BackToTop` | Botão circular com chevron, aparece após scroll | Toda a página |
| `Footer` | Multi-coluna (logo, links, contato), fundo navy deepest | Final |

---

## 📝 5. CONTEÚDO ESTRATÉGICO (COPY)

### 5.1 Headlines por Seção

| Seção | Headline | Subheadline |
|-------|----------|-------------|
| **Hero** | "Seu restaurante merece ser mais do que um delivery no iFood." | Cardápio digital personalizado + marketing inteligente + dados que aumentam seu faturamento. |
| **Problema** | "O iFood cobra até 27% de comissão. Seus dados ficam com eles." | Enquanto isso, você não sabe quem são seus clientes, o que mais vendem, nem como aumentar o ticket médio. |
| **Solução** | "O Nexus é o hub de inteligência que seu restaurante precisa." | Cardápio digital + aquisição de clientes + CRM + IA — tudo em um só lugar. |
| **Features** | "Tudo que você precisa para vender mais e melhor." | Do cardápio inteligente ao marketing automatizado. |
| **Resultados** | "Números que falam por si." | Resultados reais de restaurantes que usam o Nexus. |
| **Preços** | "Escolha o plano ideal para o momento do seu restaurante." | Comece simples e escale conforme cresce. |
| **FAQ** | "Ainda tem dúvidas?" | As perguntas mais comuns dos nossos clientes. |
| **CTA Final** | "Pronto para transformar seu restaurante?" | Agende uma demonstração gratuita e veja o Nexus em ação. |

### 5.2 CTAs (Calls to Action)
| Tipo | Texto | Destino |
|------|-------|---------|
| **Primário** | "Agendar Demonstração Gratuita" | WhatsApp ou formulário |
| **Secundário** | "Ver o Nexus em Ação" | Scroll para demo/vídeo |
| **Planos** | "Quero esse plano" | WhatsApp com mensagem pré-definida |
| **Urgência** | "Começar Agora — Vagas Limitadas" | WhatsApp |

---

## 🔧 6. STACK TÉCNICA

### 6.1 Tecnologias
| Camada | Tecnologia | Justificativa |
|--------|-----------|---------------|
| **Estrutura** | HTML5 Semântico | SEO, acessibilidade |
| **Estilo** | Vanilla CSS (custom properties) | Controle total, performance |
| **Interatividade** | JavaScript Vanilla | Scroll animations, tabs, accordion, counters |
| **Fontes** | Google Fonts (Inter) | Consistência com marca atual |
| **Ícones** | Lucide Icons (CDN) | Modernos, leves, line-style |
| **Deploy** | Vercel ou Netlify | Free tier, HTTPS, CDN global |

### 6.2 Estrutura de Arquivos
```
📁 PROJETO LANDING PAGE NEXUS FOOD INTELLIGENCE/
├── 📄 PROJECT-MAP.md          ← Este arquivo (mapa do projeto)
├── 📄 index.html              ← Página principal
├── 📁 css/
│   ├── 📄 reset.css           ← CSS Reset
│   ├── 📄 tokens.css          ← Design tokens (cores, tipografia, spacing)
│   ├── 📄 components.css      ← Estilos dos componentes
│   ├── 📄 layout.css          ← Grid, containers, responsividade
│   └── 📄 animations.css      ← Keyframes e animações
├── 📁 js/
│   ├── 📄 main.js             ← Inicialização e orchestração
│   ├── 📄 animations.js       ← Scroll reveal, counters animados
│   ├── 📄 tabs.js             ← Feature tabs navigation
│   ├── 📄 accordion.js        ← FAQ accordion
│   └── 📄 navbar.js           ← Navbar scroll behavior
├── 📁 assets/
│   ├── 📁 images/             ← Mockups, screenshots do produto
│   ├── 📁 icons/              ← SVGs customizados (se necessário)
│   └── 📄 favicon.svg         ← Favicon
└── 📁 docs/
    ├── 📄 brief.md            ← Product brief (referência)
    └── 📄 copy.md             ← Textos finais aprovados
```

---

## 📊 7. MÉTRICAS E KPIs DA LANDING PAGE

| Métrica | Meta | Como medir |
|---------|------|------------|
| **Taxa de scroll** | >60% chegam ao meio da página | Analytics - scroll depth |
| **Tempo na página** | >2 minutos | Google Analytics |
| **Clique no CTA** | >5% dos visitantes | Event tracking |
| **Taxa de conversão** | >3% (visitante → lead) | WhatsApp clicks / formulário |
| **Bounce rate** | <40% | Google Analytics |
| **Performance** | >90 Lighthouse | Lighthouse audit |

---

## 🚀 8. ROADMAP DE IMPLEMENTAÇÃO

### Fase 1: Fundação (Sessão Atual)
- [x] Definir mapa do projeto (este documento)
- [ ] Aprovar copy e estrutura de seções
- [ ] Gerar mockups/assets visuais

### Fase 2: Desenvolvimento Core
- [ ] Criar estrutura HTML semântica
- [ ] Implementar Design System (CSS tokens + reset)
- [ ] Construir seção Hero
- [ ] Construir seção Problema/Dor
- [ ] Construir seção Solução
- [ ] Construir seção Funcionalidades (tabs)

### Fase 3: Conversão & Polish
- [ ] Construir seção Resultados (counters animados)
- [ ] Construir seção Planos e Preços
- [ ] Construir seção Depoimentos
- [ ] Construir FAQ Accordion
- [ ] Construir CTA Final + Footer
- [ ] Implementar animações de scroll

### Fase 4: Otimização & Launch
- [ ] SEO (meta tags, schema markup)
- [ ] Performance (imagens otimizadas, lazy loading)
- [ ] Responsividade (mobile-first testing)
- [ ] Integração WhatsApp (links com mensagem pré-definida)
- [ ] Teste em múltiplos dispositivos
- [ ] Deploy

---

## ❓ 9. DECISÕES PENDENTES

| # | Decisão | Opções | Status |
|---|---------|--------|--------|
| 1 | **Domínio da LP** | Subdomínio (lp.nexusfood.com.br) ou página no domínio principal? | ⏳ Pendente |
| 2 | **Depoimentos** | Usar depoimentos reais ou criar placeholders? | ⏳ Pendente |
| 3 | **Mockups do produto** | Screenshots reais do sistema ou mockups idealizados? | ⏳ Pendente |
| 4 | **Vídeo demo** | Incluir vídeo na hero ou apenas imagens? | ⏳ Pendente |
| 5 | **Formulário vs WhatsApp** | CTA direto para WhatsApp ou formulário de lead? | ⏳ Pendente |
| 6 | **Métricas/números** | Usar dados reais ou projetados? | ⏳ Pendente |
| 7 | **Idioma** | Apenas PT-BR ou suporte EN? | ⏳ Pendente |

---

## 📎 10. REFERÊNCIAS

- **Site atual:** https://www.nexusfood.com.br/
- **Design style:** Dark SaaS Aesthetic (glassmorphism, glow effects)
- **Referências de LP SaaS:** Linear, Vercel, Stripe, Notion
- **Font:** [Inter (Google Fonts)](https://fonts.google.com/specimen/Inter)

---

> **Próximo passo:** Revisar este mapa, aprovar/ajustar as seções, e iniciar a implementação do HTML + CSS.
