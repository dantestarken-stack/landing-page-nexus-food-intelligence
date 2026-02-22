# 📋 PROJECT BRIEF — Nexus Food Intelligence Landing Page

> **Projeto:** Landing Page de Conversão  
> **Produto:** Nexus Food Intelligence  
> **Cliente:** Nexus Food / Dante Martins  
> **Data:** 2026-02-22  
> **Status:** Aprovado para Desenvolvimento  

---

## 1. CONTEXTO DO PROJETO

### 1.1 Sobre a Empresa
A **Nexus Food Intelligence** é uma plataforma SaaS focada em restaurantes, oferecendo um hub completo que integra cardápio digital, marketing, aquisição de clientes e inteligência de dados com IA. A empresa atende restaurantes de médio porte no Brasil, com foco em cidades com 100k+ habitantes.

### 1.2 Situação Atual
- O site atual (nexusfood.com.br) é apenas um portal de login para clientes existentes
- Não existe uma jornada de venda digital otimizada para novos prospects
- A aquisição de clientes depende principalmente de prospecção manual (ligações)
- Existe a meta de escalar para 50 novos clientes/mês com redução do CAC

### 1.3 O que este Projeto Entrega
Uma **landing page estática de alta conversão** (HTML/CSS/JS) que apresenta o produto Nexus Food Intelligence e converte visitantes em leads qualificados via WhatsApp.

---

## 2. OBJETIVOS

### 2.1 Objetivo Principal
> Converter visitantes em leads qualificados que entram em contato via WhatsApp para agendar demonstração.

### 2.2 Objetivos Específicos
| # | Objetivo | Meta |
|---|----------|------|
| 1 | Taxa de conversão visitante → lead | > 3% |
| 2 | Geração de leads mensais via LP | 50+ |
| 3 | Tempo médio na página | > 2 minutos |
| 4 | Performance Lighthouse | > 90 pts |
| 5 | Scroll depth (até seção de preços) | > 50% |
| 6 | Bounce rate | < 40% |

---

## 3. PÚBLICO-ALVO

### 3.1 Persona Primária — Dono de Restaurante
| Campo | Detalhe |
|-------|---------|
| **Perfil** | Proprietário/sócio de restaurante médio, 30-55 anos |
| **Localização** | Cidades brasileiras com 100k+ habitantes |
| **Ticket médio** | R$ 35-80/pedido |
| **Canais atuais** | iFood + Instagram + WhatsApp informal |
| **Nível técnico** | Básico (sabe usar celular, não entende marketing digital) |

**Dores:**
1. Comissões do iFood (12-27% por pedido)
2. Não tem dados dos clientes (ficam no iFood)
3. Ticket médio estagnado
4. Marketing desorganizado ("posta quando dá")
5. Sem mecanismo de fidelização
6. Cardápio sem estratégia (fotos ruins, sem destaque para itens lucrativos)

**Desejos:**
1. Canal próprio de vendas sem iFood
2. Conhecer clientes e padrões de compra
3. Aumentar ticket médio de forma inteligente
4. Marketing automatizado
5. Decisões baseadas em dados
6. Cardápio profissional e bonito

### 3.2 Persona Secundária — Gestor de Franquias
- Gestora de operações, 35 anos, busca padronização e escala multi-unidades
- Potencial para plano Intelligence (R$ 2.000/mês)

---

## 4. PROPOSTA DE VALOR (UVP)

> **"Transforme seu restaurante em uma máquina de vendas inteligente — com cardápio digital, marketing automatizado e dados que aumentam seu faturamento."**

### 4.1 Pilares do Produto

| Pilar | Descrição | Benefício |
|-------|-----------|-----------|
| 🧾 **Cardápio Digital** | Menu mobile-first, personalizado, com menu engineering | Profissionalismo + Autonomia do iFood |
| 📈 **Growth & Aquisição** | Gestão de Meta Ads, criativos, relatórios | Mais clientes, ROI mensurável |
| 🧠 **Intelligence & CRM** | IA comportamental, automação WhatsApp/email, upsell | Decisões por dados, mais retenção |
| ⚙️ **Automação** | Onboarding guiado, otimização contínua | Sem complexidade técnica |

---

## 5. PLANOS E PREÇOS

| | Essencial | Growth ⭐ | Intelligence 🚀 |
|---|-----------|----------|-----------------|
| **Implementação** | R$ 500 | R$ 800 | R$ 1.500 |
| **Mensalidade** | R$ 200-400 | R$ 900 | R$ 2.000 |
| Cardápio Digital | ✅ | ✅ | ✅ |
| Pedidos (delivery+retirada) | ✅ | ✅ | ✅ |
| WhatsApp + Suporte | ✅ | ✅ | ✅ |
| Gestão de Tráfego Pago | — | ✅ | ✅ |
| Criativos Mensais (4/mês) | — | ✅ | ✅ |
| Consultoria de Dados | — | — | ✅ |
| CRM + Automação IA | — | — | ✅ |
| IA no Cardápio | — | — | ✅ |

**Posicionamento:** Essencial (entrada), Growth (recomendado), Intelligence (premium)

---

## 6. ESTRUTURA DA LANDING PAGE

### 6.1 Arquitetura (10 seções + navbar + footer)

| # | Seção | Função Persuasiva | Background |
|---|-------|-------------------|------------|
| 0 | **Navbar** | Navegação + CTA sempre visível | Transparent → solid |
| 1 | **Hero** | Primeira impressão, UVP, CTA | 🌑 Dark |
| 2 | **Problema** | Gerar identificação emocional com dores | ☀️ Light |
| 3 | **Solução** | Apresentar Nexus como resposta | 🌑 Dark |
| 4 | **Features** | Detalhar os 4 pilares com tabs | ☀️ Light |
| 5 | **Resultados** | Números de impacto (sociais) | 🌑 Dark |
| 6 | **Preços** | 3 planos comparativos | ☀️ Light |
| 7 | **Depoimentos** | Prova social | 🌑 Dark |
| 8 | **FAQ** | Resolver objeções | ☀️ Light |
| 9 | **CTA Final** | Último push de conversão | 🌑 Dark |
| 10 | **Footer** | Links e contato | 🌑 Dark |

### 6.2 Funil de Conversão
```
Visitante → Scroll → Identifica dores → Vê solução → Explora features
→ Se convence com números → Avalia planos → Clica CTA → WhatsApp → Lead
```

---

## 7. DESIGN E ESTÉTICA

### 7.1 Estilo Visual
- **Aesthetic:** Dark SaaS Premium com glassmorphism
- **Cores:** Navy (#0b1628) + Teal (#10b981) + Cyan (#06b6d4)
- **Tipografia:** Inter (Google Fonts), 400-800 weights
- **Ícones:** Lucide Icons (line art)
- **Padrões:** Split-screen layout, alternância dark/light, glow effects

### 7.2 Referência Principal
**Consumer.com.br** — adotamos layout split-screen, prova social no topo, WhatsApp float, FAQ accordion. Melhoramos: estética (dark SaaS), animações (scroll reveal), storytelling (jornada dor→solução), IA como diferencial.

### 7.3 Design System
Documento completo em `docs/DESIGN-SYSTEM.md` com todos os tokens CSS, componentes, animações e regras de responsividade.

---

## 8. STACK TÉCNICA

| Camada | Tecnologia |
|--------|-----------|
| Estrutura | HTML5 Semântico |
| Estilo | Vanilla CSS + Custom Properties |
| Lógica | JavaScript Vanilla (ES6+) |
| Fontes | Google Fonts (Inter) |
| Ícones | Lucide Icons (CDN) |
| Imagens | WebP + fallback PNG |
| Versionamento | Git + GitHub |
| Deploy | Vercel ou Netlify |
| Analytics | GA4 + GTM |

**Zero frameworks/build tools** — máxima performance e simplicidade.

---

## 9. ENTREGÁVEIS

| # | Entregável | Formato | Status |
|---|-----------|---------|--------|
| 1 | Project Map | `PROJECT-MAP.md` | ✅ Concluído |
| 2 | PRD | `docs/PRD.md` | ✅ Concluído |
| 3 | Design System | `docs/DESIGN-SYSTEM.md` | ✅ Concluído |
| 4 | Project Brief | `docs/BRIEF.md` | ✅ Concluído |
| 5 | HTML da página | `index.html` | ⏳ Próximo |
| 6 | CSS (5 arquivos) | `css/*.css` | ⏳ Próximo |
| 7 | JS (5 arquivos) | `js/*.js` | ⏳ Próximo |
| 8 | Assets visuais | `assets/images/` | ⏳ Próximo |
| 9 | Deploy em produção | Vercel/Netlify | ⏳ Fase final |

---

## 10. TIMELINE

| Fase | Duração | O que inclui |
|------|---------|-------------|
| **1. Planejamento** | 1 dia ✅ | Project Map, PRD, Design System, Brief |
| **2. Foundation** | 1-2 dias | CSS tokens, reset, HTML semântico, Hero |
| **3. Seções Core** | 2-3 dias | Problema, Solução, Features, Resultados |
| **4. Conversão** | 1-2 dias | Preços, Depoimentos, FAQ, CTA Final |
| **5. Polish** | 1 dia | Animações, responsividade, assets |
| **6. Launch** | 0.5 dia | SEO, deploy, analytics |
| **TOTAL** | ~6-8 dias | LP completa em produção |

---

## 11. DECISÕES PENDENTES

| # | Decisão | Recomendação |
|---|---------|-------------|
| 1 | Domínio da LP | Subdomínio `lp.nexusfood.com.br` |
| 2 | Depoimentos | Placeholders iniciais → substituir por reais |
| 3 | Mockups | Idealizados (geramos via IA) |
| 4 | CTA destino | WhatsApp direto com msg pré-definida |
| 5 | Métricas | Projetadas inicialmente → substituir por reais |
| 6 | Idioma | PT-BR apenas (v1) |

---

## 12. CRITÉRIOS DE SUCESSO

A landing page será considerada **entregue e bem-sucedida** quando:

- [ ] Todas as 10 seções implementadas e funcionais
- [ ] Responsivo em mobile (320px), tablet (768px), desktop (1440px)
- [ ] Lighthouse > 90 em performance, SEO, acessibilidade
- [ ] Todos os CTAs redirecionam para WhatsApp com mensagem correta
- [ ] Animações de scroll e counters funcionando
- [ ] Tabs e FAQ accordion interativos
- [ ] Deploy realizado com HTTPS e CDN
- [ ] GA4 trackando eventos de CTA
- [ ] Primeiro lead gerado via LP

---

> **Este briefing é o documento central de alinhamento.** Qualquer dúvida sobre escopo, prioridade ou direção deve ser resolvida consultando este documento e o PRD.
