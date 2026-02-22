# 📋 PRD — Product Requirements Document
## Landing Page Nexus Food Intelligence

> **Versão:** 1.0  
> **Data:** 2026-02-22  
> **Autor:** Dante Martins  
> **Status:** Draft  
> **Stakeholders:** Dante Martins (Founder/CEO), Equipe Comercial  

---

## 1. Resumo Executivo

### 1.1 Produto
**Nexus Food Intelligence** — Plataforma SaaS de cardápio digital + inteligência de crescimento para restaurantes. O produto combina menu engineering, gestão de tráfego pago, CRM, automação de marketing com IA e dashboard estratégico.

### 1.2 Escopo do PRD
Este PRD cobre a **Landing Page de conversão** — uma página web estática (HTML/CSS/JS) projetada para converter visitantes em leads qualificados via WhatsApp.

### 1.3 Problema de Negócio
O Nexus Food Intelligence precisa de um canal digital dedicado à **aquisição de novos clientes**. O site atual (nexusfood.com.br) serve como portal de login para clientes existentes, mas não possui uma jornada de venda otimizada para prospects que ainda não conhecem o produto.

### 1.4 Hipótese
> Se criarmos uma landing page com storytelling persuasivo, design premium e CTAs estratégicos, conseguiremos converter >3% dos visitantes em leads qualificados via WhatsApp, reduzindo o custo de aquisição (CAC) comparado à prospecção manual.

---

## 2. Objetivos e Métricas de Sucesso

### 2.1 Objetivos do Produto

| Objetivo | Tipo | Prazo |
|----------|------|-------|
| Gerar pelo menos 50 leads/mês via LP | **Primário** | 30 dias pós-launch |
| Taxa de conversão visitante→lead > 3% | **Primário** | 30 dias |
| Tempo médio na página > 2 minutos | **Secundário** | 30 dias |
| Lighthouse score > 90 (performance) | **Técnico** | Pré-launch |
| Bounce rate < 40% | **Secundário** | 30 dias |

### 2.2 KPIs (Key Performance Indicators)

| KPI | Definição | Meta | Ferramenta |
|-----|-----------|------|------------|
| **Conversion Rate** | Cliques no CTA WhatsApp / Visitantes únicos | > 3% | GA4 + UTM |
| **Scroll Depth** | % de visitantes que chegam à seção de preços | > 50% | GA4 Scroll |
| **CTA Click Rate** | Total de cliques em CTAs / Sessões | > 5% | Event Tracking |
| **Time on Page** | Tempo médio de permanência | > 120s | GA4 |
| **Bounce Rate** | Visitantes que saem sem interação | < 40% | GA4 |
| **Page Speed** | Core Web Vitals (LCP, FCP, CLS) | Verde | PageSpeed Insights |
| **Lead Quality** | Leads que avançam no funil comercial | > 40% | CRM Manual |

---

## 3. Público-Alvo

### 3.1 Persona Primária: Dono de Restaurante

| Atributo | Detalhe |
|----------|---------|
| **Nome fictício** | Carlos, 42 anos |
| **Cargo** | Proprietário / Sócio-gerente |
| **Tipo de negócio** | Restaurante de média porte (30-100 pedidos/dia) |
| **Localização** | Cidades com 100k+ habitantes |
| **Ticket médio** | R$ 35-80 por pedido |
| **Canais atuais** | iFood, Instagram, WhatsApp informal |
| **Nível técnico** | Básico (usa celular, não entende de marketing digital) |

#### Dores (Pain Points)
1. **Comissões altas** — Paga 12-27% de comissão ao iFood em cada pedido
2. **Dados sequestrados** — Não tem acesso ao e-mail, telefone ou histórico de compras dos clientes que pedem via iFood
3. **Ticket médio estagnado** — Não sabe como fazer upsell ou cross-sell de forma inteligente
4. **Marketing por achismo** — Posta no Instagram sem estratégia, não sabe o ROI
5. **Sem fidelização** — Clientes não voltam com frequência, não há mecanismo de retenção
6. **Cardápio desorganizado** — Fotos ruins, descrições inconsistentes, sem destaque para itens de maior margem

#### Desejos (Gains)
1. Ter um canal próprio de vendas (sem iFood)
2. Conhecer seus clientes e seus padrões de compra
3. Aumentar o ticket médio de forma inteligente
4. Automatizar o marketing (WhatsApp, e-mail)
5. Tomar decisões baseadas em dados reais
6. Ter um cardápio bonito e profissional

#### Objeções Comuns
- "Já tenho iFood, por que preciso disso?"
- "É caro demais para meu restaurante"
- "Não tenho tempo pra aprender mais um sistema"
- "Meus clientes não vão usar outro app"
- "Já tentei site antes e não funcionou"

### 3.2 Persona Secundária: Gestor de Franquias

| Atributo | Detalhe |
|----------|---------|
| **Nome fictício** | Marina, 35 anos |
| **Cargo** | Gestora de operações / Franqueadora |
| **Dores** | Falta de padronização, sem visão consolidada multi-unidades |
| **Desejos** | Escala, previsibilidade, controle centralizado |
| **Ticket de venda** | Plano Intelligence (R$ 2.000/mês) |

---

## 4. Requisitos Funcionais

### 4.1 Estrutura da Página (Seções)

| # | Seção | Tipo | Prioridade | Função |
|---|-------|------|------------|--------|
| 0 | Navbar | Sticky | P0 | Navegação + CTA sempre visível |
| 1 | Hero | Above the fold | P0 | Primeira impressão, headline, CTAs |
| 2 | Problema/Dor | Emocional | P0 | Gerar identificação com as dores |
| 3 | Solução | Racional | P0 | Apresentar o Nexus como resposta |
| 4 | Funcionalidades | Informativo | P0 | Detalhar os 4 pilares do produto |
| 5 | Resultados | Prova | P1 | Números e métricas de impacto |
| 6 | Planos e Preços | Comercial | P0 | Apresentar as 3 opções |
| 7 | Depoimentos | Prova social | P1 | Validação de clientes reais |
| 8 | FAQ | Objeções | P1 | Resolver dúvidas e objeções |
| 9 | CTA Final | Conversão | P0 | Último push de conversão |
| 10 | Footer | Institucional | P1 | Links, contato, legal |

### 4.2 Funcionalidades Interativas

| Funcionalidade | Descrição | Prioridade |
|----------------|-----------|------------|
| **Smooth Scroll** | Navegação suave ao clicar nos links da navbar | P0 |
| **Scroll Reveal** | Animação de fade-in ao scroll para cada seção | P0 |
| **Feature Tabs** | Tabs clicáveis para alternar entre pilares | P0 |
| **FAQ Accordion** | Expandir/colapsar perguntas | P0 |
| **Counter Animation** | Números que contam de 0 até o valor final | P1 |
| **Navbar Transition** | Transparente → sólido ao scroll | P0 |
| **WhatsApp Float** | Botão flutuante com pulse animation | P0 |
| **Back to Top** | Botão que aparece após scroll | P2 |
| **Lazy Loading** | Imagens carregam sob demanda | P1 |

### 4.3 Integrações

| Integração | Tipo | Prioridade |
|------------|------|------------|
| **WhatsApp Business** | Link com mensagem pré-definida por plano | P0 |
| **Google Analytics 4** | Tracking de eventos (CTA clicks, scroll depth) | P0 |
| **Google Tag Manager** | Container para scripts de tracking | P1 |
| **Meta Pixel** | Remarketing no Facebook/Instagram | P1 |
| **Hotjar/Clarity** | Heatmaps e gravação de sessões | P2 |

---

## 5. Requisitos Não-Funcionais

### 5.1 Performance
| Métrica | Requisito |
|---------|-----------|
| **LCP** (Largest Contentful Paint) | < 2.5s |
| **FCP** (First Contentful Paint) | < 1.8s |
| **CLS** (Cumulative Layout Shift) | < 0.1 |
| **INP** (Interaction to Next Paint) | < 200ms |
| **Lighthouse Score** | > 90 (todas as categorias) |
| **Tamanho total** | < 2MB (incluindo imagens) |

### 5.2 Compatibilidade
| Plataforma | Versões |
|------------|---------|
| **Mobile** | iOS 14+, Android 10+ |
| **Browsers** | Chrome 90+, Safari 14+, Firefox 88+, Edge 90+ |
| **Resolução** | 320px a 2560px |
| **Breakpoints** | Mobile (320-768), Tablet (769-1024), Desktop (1025+) |

### 5.3 SEO
| Requisito | Implementação |
|-----------|---------------|
| **Meta Tags** | Title, description, og:image, twitter:card |
| **Heading hierarchy** | Único H1, H2 por seção, H3 para sub-itens |
| **Schema Markup** | Organization, Product, FAQ (structured data) |
| **Sitemap** | sitemap.xml estático |
| **Robots** | robots.txt permitindo indexação |
| **URLs** | Clean URL sem query params |
| **Alt text** | Todas as imagens com alt descritivo |
| **Lang** | `<html lang="pt-BR">` |

### 5.4 Acessibilidade
| Requisito | Nível |
|-----------|-------|
| **WCAG** | AA (mínimo) |
| **Contraste** | Ratio > 4.5:1 para texto normal |
| **Keyboard** | Navegação completa via teclado |
| **Focus States** | Visíveis em todos os interativos |
| **Screen Reader** | ARIA labels nos componentes interativos |
| **Reduced Motion** | `prefers-reduced-motion` respeitado |

---

## 6. Produto: Planos e Preços

### 6.1 Tabela de Planos

| Recurso | Essencial | Growth | Intelligence |
|---------|-----------|--------|-------------|
| **Implementação** | R$ 500 | R$ 800 | R$ 1.500 |
| **Mensalidade** | R$ 200 – R$ 400 | R$ 900 | R$ 2.000 |
| Cardápio Digital Personalizado | ✅ | ✅ | ✅ |
| Sistema de Pedidos (Delivery & Retirada) | ✅ | ✅ | ✅ |
| Integração WhatsApp | ✅ | ✅ | ✅ |
| Gestão de Produtos & Categorias | ✅ | ✅ | ✅ |
| Atualizações & Manutenção | ✅ | ✅ | ✅ |
| Suporte Técnico | ✅ | ✅ | ✅ |
| Gestão de Tráfego Pago | — | ✅ | ✅ |
| Setup de Campanhas de Anúncios | — | ✅ | ✅ |
| Criativos Mensais (4/mês) | — | ✅ | ✅ |
| Estratégia de Crescimento | — | Básica | Avançada |
| Consultoria de Dados & Marketing | — | — | ✅ |
| CRM Integrado | — | — | ✅ |
| Automação com IA | — | — | ✅ |
| IA no Cardápio (recomendação, upsell, comportamento) | — | — | ✅ |

### 6.2 Posicionamento de Preço
- **Essencial** → Entrada. "Saia do iFood, tenha seu próprio canal."
- **Growth** → Destaque / Recomendado. "Crescimento ativo com tráfego pago."
- **Intelligence** → Premium. "Escala com IA e dados estratégicos."

---

## 7. Stack Técnica

| Camada | Tecnologia | Justificativa |
|--------|-----------|---------------|
| **Estrutura** | HTML5 Semântico | SEO nativo, acessibilidade, zero dependência |
| **Estilo** | Vanilla CSS + Custom Properties | Performance, controle total, sem build step |
| **Interatividade** | JavaScript Vanilla (ES6+) | Leve, sem framework overhead |
| **Fontes** | Google Fonts (Inter 400/500/600/700/800) | Consistência com a marca |
| **Ícones** | Lucide Icons (SVG inline ou CDN) | Modernos, leves, line-art |
| **Imagens** | WebP com fallback PNG | Compressão superior |
| **Versionamento** | Git + GitHub | Controle de versão, colaboração |
| **Deploy** | Vercel ou Netlify | CDN global, HTTPS, CI/CD automático |
| **Analytics** | GA4 + GTM | Tracking de conversão |

---

## 8. Fora de Escopo (v1.0)

| Item | Razão |
|------|-------|
| Blog / Conteúdo | Será fase posterior (SEO orgânico) |
| Multi-idioma (EN) | Foco inicial é PT-BR (mercado local) |
| Chat ao vivo | WhatsApp cumpre essa função |
| Área de login na LP | Já existe no site principal |
| E-commerce / Pagamento online | LP é apenas conversão, não transação |
| App mobile nativo | Fora do escopo da LP |
| Versão AMP | Otimização vanilla já suficiente |
| A/B Testing automatizado | Será implementado post-launch |

---

## 9. Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| Baixo tráfego para a LP | Média | Alto | Alocar budget de tráfego pago (Meta Ads) desde o dia 1 |
| Conversão abaixo da meta | Média | Alto | Iterar copy e CTAs com base em dados de Hotjar/GA4 |
| Imagens pesadas afetando performance | Baixa | Médio | Usar WebP, lazy loading, e comprimir tudo abaixo de 100KB |
| Concorrentes com LP similar | Baixa | Baixo | Diferenciação via design premium + pilar de IA |
| WhatsApp como gargalo de atendimento | Média | Médio | Definir SLA de resposta e mensagens automatizadas |

---

## 10. Timeline Estimada

| Fase | Duração | Entregável |
|------|---------|------------|
| **Fase 1: Planejamento** | 1 dia | PROJECT-MAP, PRD, Design System, Brief ✅ |
| **Fase 2: Design System + HTML** | 1-2 dias | Tokens CSS, estrutura semântica, Hero |
| **Fase 3: Todas as Seções** | 2-3 dias | Todas as 10 seções implementadas |
| **Fase 4: Interatividade** | 1 dia | JS (tabs, accordion, scroll, counters) |
| **Fase 5: Assets + Polish** | 1 dia | Imagens, responsividade, animações |
| **Fase 6: SEO + Deploy** | 0.5 dia | Meta tags, schema, Vercel deploy |
| **Total estimado** | **5-7 dias** | Landing page completa e publicada |

---

## 11. Critérios de Aceitação (Definition of Done)

- [ ] Todas as 10 seções implementadas e funcionais
- [ ] Responsivo em mobile (320px), tablet (768px) e desktop (1440px)
- [ ] Lighthouse Score > 90 em todas as categorias
- [ ] Tabs de funcionalidades funcionando corretamente
- [ ] FAQ accordion expandindo/colapsando
- [ ] Counters animando ao entrar no viewport
- [ ] Navbar com transição transparente → sólido
- [ ] Botão WhatsApp flutuante com pulse
- [ ] WhatsApp links com mensagens pré-definidas por plano
- [ ] Meta tags e schema markup implementados
- [ ] Testado nos 4 browsers principais
- [ ] Deploy realizado em Vercel/Netlify com HTTPS
- [ ] GA4 configurado com event tracking nos CTAs

---

> **Próximo:** Após aprovação deste PRD, iniciar implementação seguindo o roadmap definido no PROJECT-MAP.md.
