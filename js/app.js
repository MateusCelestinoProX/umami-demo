/**
 * ==============================================================================
 * UMAMI ANALYTICS — PORTFOLIO DEMO ENGINE (app.js)
 * Design System: Apple / VisionOS Liquid Glassmorphism & Cyber Translucent Dark
 * Autor: Mateus Celestino <202405039459@alunos.estacio.br>
 * ==============================================================================
 */

// Preset de Shaders WebGL (GPU Accelerated)
export const SHADER_PRESETS = [
  { id: 'strands', name: 'Strands Luminosos', badge: 'Energia' },
  { id: 'plasmawave', name: 'Plasma Wave', badge: 'Fluido' },
  { id: 'siderays', name: 'Side Rays', badge: 'Cinemático' },
  { id: 'softaurora', name: 'Soft Aurora', badge: 'Nébula' },
  { id: 'ferrofluid', name: 'Ferrofluid', badge: 'Interativo' },
  { id: 'ghostfibers', name: 'Ghost Fibers', badge: 'Filamentos' },
  { id: 'webthreads', name: 'Web Threads', badge: 'Rede' },
  { id: 'dither', name: 'Dither Waves', badge: 'Retro' },
  { id: 'darkveil', name: 'Dark Veil', badge: 'Dark Cyber' },
  { id: 'balatro', name: 'Balatro Hypno', badge: 'Hipnótico' },
  { id: 'moltenmetal', name: 'Molten Metal', badge: 'Fusão' },
  { id: 'topography', name: 'Topography', badge: 'Cartografia' },
  { id: 'lighttunnel', name: 'Light Tunnel', badge: 'Hipervelocidade' },
  { id: 'beams', name: 'Volumetric Beams', badge: 'Luz 3D' },
  { id: 'particles', name: 'Quantum Dust', badge: 'Partículas' },
  { id: 'antigravity', name: 'Antigravity Flow', badge: 'Gravidade Zero' },
  { id: 'floatinglines', name: 'Floating Lines', badge: 'Minimal' },
  { id: 'silk', name: 'Cyber Silk', badge: 'Tecido' },
];

// Mock Multi-Websites Dataset (Completamente Sanitizado · Zero Exposição Pessoal)
const MOCK_WEBSITES = [
  {
    id: 'nexus-ai',
    name: 'Nexus AI Cloud Platform',
    domain: 'saas.nexus-ai.dev',
    baseViews: 248930,
    baseVisitors: 68410,
    baseVisits: 94220,
    bounceRate: 31.4,
    avgDurationSec: 228,
    activeUsers: 142,
    pages: [
      { path: '/dashboard', label: 'Painel Central', count: 64280, pct: 25.8 },
      { path: '/features/ai-agents', label: 'Agentes Autônomos AI', count: 48910, pct: 19.6 },
      { path: '/pricing', label: 'Planos & Assinaturas', count: 35120, pct: 14.1 },
      { path: '/docs/api/quickstart', label: 'Documentação da API', count: 28400, pct: 11.4 },
      { path: '/features/telemetry', label: 'Telemetria em Tempo Real', count: 21850, pct: 8.8 },
      { path: '/blog/zero-trust-architecture', label: 'Blog: Zero-Trust Sec', count: 18230, pct: 7.3 },
      { path: '/changelog/v3-release', label: 'Changelog Oficial v3', count: 14920, pct: 6.0 },
      { path: '/enterprise/security-audit', label: 'Auditoria de Segurança', count: 12100, pct: 4.9 },
    ],
    referrers: [
      { domain: 'google.com', label: 'Busca Orgânica Google', count: 74200, pct: 29.8, icon: '🔍' },
      { domain: 'github.com', label: 'Repositórios & Releases', count: 52140, pct: 20.9, icon: '🐙' },
      { domain: 'x.com', label: 'X / Twitter Comunidade', count: 36800, pct: 14.8, icon: '🐦' },
      { domain: 'news.ycombinator.com', label: 'Hacker News Frontpage', count: 28900, pct: 11.6, icon: '🔶' },
      { domain: 'producthunt.com', label: 'Lançamento Product Hunt', count: 19400, pct: 7.8, icon: '🚀' },
      { domain: 'linkedin.com', label: 'LinkedIn Pro Networks', count: 14500, pct: 5.8, icon: '💼' },
      { domain: 'direct', label: 'Tráfego Direto & Bookmarks', count: 13800, pct: 5.5, icon: '🔗' },
    ],
    browsers: [
      { name: 'Chrome', count: 159315, pct: 64.0, icon: '🌐' },
      { name: 'Safari', count: 52275, pct: 21.0, icon: '🧭' },
      { name: 'Firefox', count: 22403, pct: 9.0, icon: '🦊' },
      { name: 'Edge', count: 9957, pct: 4.0, icon: '🌊' },
      { name: 'Brave', count: 4980, pct: 2.0, icon: '🦁' },
    ],
    os: [
      { name: 'macOS', count: 114507, pct: 46.0, icon: '🍎' },
      { name: 'Linux', count: 69700, pct: 28.0, icon: '🐧' },
      { name: 'Windows', count: 44807, pct: 18.0, icon: '🪟' },
      { name: 'iOS', count: 12446, pct: 5.0, icon: '📱' },
      { name: 'Android', count: 7470, pct: 3.0, icon: '🤖' },
    ],
    devices: [
      { name: 'Desktop', count: 194165, pct: 78.0, icon: '💻' },
      { name: 'Mobile', count: 47296, pct: 19.0, icon: '📱' },
      { name: 'Tablet', count: 7469, pct: 3.0, icon: '📟' },
    ],
    countries: [
      { name: 'Estados Unidos', code: 'US', count: 87125, pct: 35.0, flag: '🇺🇸' },
      { name: 'Brasil', code: 'BR', count: 54764, pct: 22.0, flag: '🇧🇷' },
      { name: 'Alemanha', code: 'DE', count: 29871, pct: 12.0, flag: '🇩🇪' },
      { name: 'Reino Unido', code: 'GB', count: 24893, pct: 10.0, flag: '🇬🇧' },
      { name: 'Japão', code: 'JP', count: 17425, pct: 7.0, flag: '🇯🇵' },
      { name: 'Canadá', code: 'CA', count: 14935, pct: 6.0, flag: '🇨🇦' },
      { name: 'França', code: 'FR', count: 12446, pct: 5.0, flag: '🇫🇷' },
      { name: 'Holanda', code: 'NL', count: 7467, pct: 3.0, flag: '🇳🇱' },
    ],
    events: [
      { name: 'signup_completed', count: 3240, unique: 3110, rate: '4.7%' },
      { name: 'api_token_created', count: 2180, unique: 1950, rate: '3.2%' },
      { name: 'checkout_subscription', count: 890, unique: 875, rate: '1.3%' },
      { name: 'documentation_search', count: 8430, unique: 4120, rate: '12.3%' },
      { name: 'github_star_click', count: 4520, unique: 4400, rate: '6.6%' },
    ]
  },
  {
    id: 'mcp-os-demo',
    name: 'MCP OS Liquid Glass Workspace',
    domain: 'os.mcp-labs.io',
    baseViews: 142100,
    baseVisitors: 41200,
    baseVisits: 58900,
    bounceRate: 26.8,
    avgDurationSec: 312,
    activeUsers: 89,
    pages: [
      { path: '/', label: 'Desktop Transparente', count: 52100, pct: 36.6 },
      { path: '/apps/cloud-hub', label: 'Cloud Infrastructure Hub', count: 32400, pct: 22.8 },
      { path: '/apps/terminal', label: 'Terminal Integrado WebGL', count: 24100, pct: 17.0 },
      { path: '/settings/shaders', label: '34 Shaders GPU Galeria', count: 18900, pct: 13.3 },
      { path: '/audio/binaural-player', label: 'Binaural Labs Studio', count: 14600, pct: 10.3 },
    ],
    referrers: [
      { domain: 'github.com', label: 'Open Source Community', count: 68400, pct: 48.1, icon: '🐙' },
      { domain: 'x.com', label: 'Tech Creators / X', count: 34100, pct: 24.0, icon: '🐦' },
      { domain: 'google.com', label: 'Google Search', count: 21800, pct: 15.3, icon: '🔍' },
      { domain: 'direct', label: 'Acesso Direto', count: 17800, pct: 12.5, icon: '🔗' },
    ],
    browsers: [
      { name: 'Chrome', count: 85260, pct: 60.0, icon: '🌐' },
      { name: 'Safari', count: 38367, pct: 27.0, icon: '🧭' },
      { name: 'Firefox', count: 12789, pct: 9.0, icon: '🦊' },
      { name: 'Edge', count: 5684, pct: 4.0, icon: '🌊' },
    ],
    os: [
      { name: 'macOS', count: 82418, pct: 58.0, icon: '🍎' },
      { name: 'Linux', count: 35525, pct: 25.0, icon: '🐧' },
      { name: 'Windows', count: 19894, pct: 14.0, icon: '🪟' },
      { name: 'iOS', count: 4263, pct: 3.0, icon: '📱' },
    ],
    devices: [
      { name: 'Desktop', count: 122206, pct: 86.0, icon: '💻' },
      { name: 'Mobile', count: 17052, pct: 12.0, icon: '📱' },
      { name: 'Tablet', count: 2842, pct: 2.0, icon: '📟' },
    ],
    countries: [
      { name: 'Brasil', code: 'BR', count: 45472, pct: 32.0, flag: '🇧🇷' },
      { name: 'Estados Unidos', code: 'US', count: 42630, pct: 30.0, flag: '🇺🇸' },
      { name: 'Alemanha', code: 'DE', count: 17052, pct: 12.0, flag: '🇩🇪' },
      { name: 'Portugal', code: 'PT', count: 14210, pct: 10.0, flag: '🇵🇹' },
      { name: 'França', code: 'FR', count: 11368, pct: 8.0, flag: '🇫🇷' },
      { name: 'Japão', code: 'JP', count: 11368, pct: 8.0, flag: '🇯🇵' },
    ],
    events: [
      { name: 'shader_switched', count: 12400, unique: 6100, rate: '29.6%' },
      { name: 'window_maximized', count: 8900, unique: 5300, rate: '21.2%' },
      { name: 'demo_explored', count: 6800, unique: 4100, rate: '16.5%' },
    ]
  },
  {
    id: 'quantum-commerce',
    name: 'Quantum Commerce Engine',
    domain: 'store.quantum-engine.com',
    baseViews: 382400,
    baseVisitors: 112300,
    baseVisits: 148900,
    bounceRate: 24.1,
    avgDurationSec: 285,
    activeUsers: 218,
    pages: [
      { path: '/shop/featured', label: 'Catálogo de Produtos Premium', count: 122400, pct: 32.0 },
      { path: '/cart', label: 'Carrinho de Compras Interativo', count: 76500, pct: 20.0 },
      { path: '/checkout/instant', label: 'Checkout 1-Click Pay', count: 57360, pct: 15.0 },
      { path: '/deals/black-edition', label: 'Coleção Black Edition', count: 45880, pct: 12.0 },
      { path: '/order/confirmed', label: 'Confirmação de Pedido', count: 38240, pct: 10.0 },
      { path: '/lookbook/summer-2026', label: 'Lookbook Digital 3D', count: 26760, pct: 7.0 },
      { path: '/support/tracking', label: 'Rastreamento Global', count: 15260, pct: 4.0 },
    ],
    referrers: [
      { domain: 'instagram.com', label: 'Instagram Ads & Reels', count: 133840, pct: 35.0, icon: '📸' },
      { domain: 'google.com', label: 'Google Shopping & Search', count: 107072, pct: 28.0, icon: '🔍' },
      { domain: 'tiktok.com', label: 'TikTok Shop Viral', count: 68832, pct: 18.0, icon: '🎵' },
      { domain: 'x.com', label: 'X Campanhas Patrocinadas', count: 42064, pct: 11.0, icon: '🐦' },
      { domain: 'direct', label: 'Tráfego Direto', count: 30592, pct: 8.0, icon: '🔗' },
    ],
    browsers: [
      { name: 'Safari Mobile', count: 172080, pct: 45.0, icon: '🧭' },
      { name: 'Chrome', count: 152960, pct: 40.0, icon: '🌐' },
      { name: 'Firefox', count: 38240, pct: 10.0, icon: '🦊' },
      { name: 'Edge', count: 19120, pct: 5.0, icon: '🌊' },
    ],
    os: [
      { name: 'iOS', count: 191200, pct: 50.0, icon: '📱' },
      { name: 'Android', count: 95600, pct: 25.0, icon: '🤖' },
      { name: 'macOS', count: 57360, pct: 15.0, icon: '🍎' },
      { name: 'Windows', count: 38240, pct: 10.0, icon: '🪟' },
    ],
    devices: [
      { name: 'Mobile', count: 286800, pct: 75.0, icon: '📱' },
      { name: 'Desktop', count: 76480, pct: 20.0, icon: '💻' },
      { name: 'Tablet', count: 19120, pct: 5.0, icon: '📟' },
    ],
    countries: [
      { name: 'Estados Unidos', code: 'US', count: 152960, pct: 40.0, flag: '🇺🇸' },
      { name: 'Brasil', code: 'BR', count: 76480, pct: 20.0, flag: '🇧🇷' },
      { name: 'Reino Unido', code: 'GB', count: 57360, pct: 15.0, flag: '🇬🇧' },
      { name: 'Alemanha', code: 'DE', count: 38240, pct: 10.0, flag: '🇩🇪' },
      { name: 'Austrália', code: 'AU', count: 30592, pct: 8.0, flag: '🇦🇺' },
      { name: 'França', code: 'FR', count: 26768, pct: 7.0, flag: '🇫🇷' },
    ],
    events: [
      { name: 'add_to_cart', count: 18450, unique: 14200, rate: '12.6%' },
      { name: 'begin_checkout', count: 9820, unique: 8700, rate: '7.7%' },
      { name: 'purchase_complete', count: 4890, unique: 4620, rate: '4.1%' },
      { name: 'coupon_applied', count: 3120, unique: 2900, rate: '2.5%' },
    ]
  }
];

// Estado Global da Aplicação
class UmamiDemoApp {
  constructor() {
    this.currentSiteIndex = 0;
    this.currentTimeRange = '7d';
    this.currentMetricView = 'views'; // 'views' | 'visitors'
    this.activeShader = localStorage.getItem('mcp_os_shader') || 'strands';
    this.activeOnlineUsers = MOCK_WEBSITES[0].activeUsers;
    this.chartData = [];
    this.feedInterval = null;
    this.activeUsersInterval = null;

    this.init();
  }

  get site() {
    return MOCK_WEBSITES[this.currentSiteIndex];
  }

  init() {
    this.setupBootSequence();
    this.setupShaderEngine();
    this.setupNavigation();
    this.setupWebsiteSwitcher();
    this.setupTimeRange();
    this.setupBreakdownTabs();
    this.setupLiveSimulation();
    this.setupChart();
    this.setupModal();
  }

  // =========================================================
  // 1. CINEMATIC BOOT & REVEAL EXPERIENCE
  // =========================================================
  setupBootSequence() {
    const splash = document.getElementById('demo-splash-screen');
    const appShell = document.getElementById('app-shell');
    const progressBar = document.getElementById('demo-progress-bar');
    const progressPct = document.getElementById('demo-progress-pct');
    const progressStatus = document.getElementById('demo-progress-status');
    const btnEnter = document.getElementById('btn-enter-demo');

    const bootSteps = [
      { pct: 25, status: 'ALOCANDO BUFFERS DE TELEMETRIA...', lineId: 'boot-line-1' },
      { pct: 55, status: 'CARREGANDO 34 SHADERS WEBGL GPU...', lineId: 'boot-line-2' },
      { pct: 85, status: 'SINTETIZANDO DATASETS DE ALTA FIDELIDADE...', lineId: 'boot-line-3' },
      { pct: 100, status: 'PIPELINE PRONTO PARA EXPLORAÇÃO.', lineId: 'boot-line-4' }
    ];

    let currentStep = 0;
    const stepInterval = setInterval(() => {
      if (currentStep < bootSteps.length) {
        const step = bootSteps[currentStep];
        if (progressBar) progressBar.style.width = `${step.pct}%`;
        if (progressPct) progressPct.textContent = `${step.pct}%`;
        if (progressStatus) progressStatus.textContent = step.status;

        const currentLineEl = document.getElementById(step.lineId);
        if (currentLineEl) {
          currentLineEl.classList.remove('active');
          currentLineEl.classList.add('done');
        }

        const nextStep = bootSteps[currentStep + 1];
        if (nextStep) {
          const nextLineEl = document.getElementById(nextStep.lineId);
          if (nextLineEl) nextLineEl.classList.add('active');
        }

        currentStep++;
      } else {
        clearInterval(stepInterval);
        if (btnEnter) {
          btnEnter.style.boxShadow = '0 0 30px rgba(167, 139, 250, 0.6)';
        }

        // Auto-transição suave após 500ms
        setTimeout(() => {
          this.revealDashboard();
        }, 600);
      }
    }, 280);

    if (btnEnter) {
      btnEnter.addEventListener('click', () => {
        clearInterval(stepInterval);
        this.revealDashboard();
      });
    }
  }

  revealDashboard() {
    const splash = document.getElementById('demo-splash-screen');
    const appShell = document.getElementById('app-shell');
    if (splash) splash.classList.add('hidden');
    if (appShell) appShell.classList.add('revealed');

    // Inicia shaders WebGL
    this.startShader(this.activeShader);
    this.renderAll();
  }

  // =========================================================
  // 2. SHADER ENGINE (34 WEBGL SHADERS)
  // =========================================================
  setupShaderEngine() {
    const triggerBtn = document.getElementById('shader-switcher-btn');
    const dropdown = document.getElementById('shader-dropdown');
    const currentName = document.getElementById('current-shader-name');

    if (!triggerBtn || !dropdown) return;

    // Popula lista de presets
    dropdown.innerHTML = '';
    SHADER_PRESETS.forEach(preset => {
      const opt = document.createElement('div');
      opt.className = `shader-opt ${preset.id === this.activeShader ? 'selected' : ''}`;
      opt.innerHTML = `
        <span style="display:flex; align-items:center; gap:8px;">
          <span style="width:6px; height:6px; border-radius:50%; background:#a78bfa;"></span>
          ${preset.name}
        </span>
        <span class="shader-badge">${preset.badge}</span>
      `;
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        this.switchShader(preset.id);
        dropdown.classList.remove('active');
      });
      dropdown.appendChild(opt);
    });

    const activePreset = SHADER_PRESETS.find(p => p.id === this.activeShader) || SHADER_PRESETS[0];
    if (currentName) currentName.textContent = activePreset.name;

    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('active');
    });

    document.addEventListener('click', () => {
      dropdown.classList.remove('active');
    });
  }

  switchShader(shaderId) {
    this.activeShader = shaderId;
    localStorage.setItem('mcp_os_shader', shaderId);

    const currentName = document.getElementById('current-shader-name');
    const activePreset = SHADER_PRESETS.find(p => p.id === shaderId) || SHADER_PRESETS[0];
    if (currentName) currentName.textContent = activePreset.name;

    const opts = document.querySelectorAll('.shader-opt');
    opts.forEach(opt => {
      if (opt.textContent.includes(activePreset.name)) {
        opt.classList.add('selected');
      } else {
        opt.classList.remove('selected');
      }
    });

    this.startShader(shaderId);
  }

  startShader(shaderId) {
    if (typeof window !== 'undefined' && typeof window.renderWebGLBackground === 'function') {
      window.renderWebGLBackground(shaderId);
    }
  }

  // =========================================================
  // 3. NAVIGATION & WEBSITE SWITCHER
  // =========================================================
  setupNavigation() {
    const tabs = document.querySelectorAll('.view-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const view = tab.getAttribute('data-view');
        this.switchView(view);
      });
    });
  }

  switchView(view) {
    const overviewSection = document.getElementById('overview-section');
    const realtimeSection = document.getElementById('realtime-section');
    const websitesSection = document.getElementById('websites-section');

    if (view === 'overview') {
      if (overviewSection) overviewSection.style.display = 'flex';
      if (realtimeSection) realtimeSection.style.display = 'none';
      if (websitesSection) websitesSection.style.display = 'none';
    } else if (view === 'realtime') {
      if (overviewSection) overviewSection.style.display = 'none';
      if (realtimeSection) realtimeSection.style.display = 'flex';
      if (websitesSection) websitesSection.style.display = 'none';
    } else if (view === 'websites') {
      if (overviewSection) overviewSection.style.display = 'none';
      if (realtimeSection) realtimeSection.style.display = 'none';
      if (websitesSection) websitesSection.style.display = 'flex';
      this.renderWebsitesDirectory();
    }
  }

  setupWebsiteSwitcher() {
    const trigger = document.getElementById('website-selector-trigger');
    const dropdown = document.getElementById('website-dropdown');
    const currentName = document.getElementById('current-website-name');

    if (!trigger || !dropdown) return;

    dropdown.innerHTML = '';
    MOCK_WEBSITES.forEach((site, idx) => {
      const opt = document.createElement('div');
      opt.className = `website-opt ${idx === this.currentSiteIndex ? 'selected' : ''}`;
      opt.innerHTML = `
        <span class="website-opt-title">${site.name}</span>
        <span class="website-opt-domain">${site.domain}</span>
      `;
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        this.currentSiteIndex = idx;
        dropdown.classList.remove('active');
        this.renderAll();
      });
      dropdown.appendChild(opt);
    });

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('active');
    });

    document.addEventListener('click', () => {
      dropdown.classList.remove('active');
    });
  }

  // =========================================================
  // 4. TIME RANGE SELECTOR
  // =========================================================
  setupTimeRange() {
    const buttons = document.querySelectorAll('.range-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentTimeRange = btn.getAttribute('data-range') || '7d';
        this.renderAll();
      });
    });

    const refreshBtn = document.getElementById('refresh-metrics-btn');
    if (refreshBtn) {
      refreshBtn.addEventListener('click', () => {
        refreshBtn.classList.add('spinning');
        setTimeout(() => {
          refreshBtn.classList.remove('spinning');
          this.renderAll();
        }, 500);
      });
    }
  }

  // =========================================================
  // 5. BREAKDOWN TABS & FILTERING
  // =========================================================
  setupBreakdownTabs() {
    // Painel Esquerdo (Páginas vs Entrada vs Saída)
    const pageTabs = document.querySelectorAll('.pages-tab-btn');
    pageTabs.forEach(btn => {
      btn.addEventListener('click', () => {
        pageTabs.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.renderPagesList(btn.getAttribute('data-subtab') || 'pages');
      });
    });

    // Painel Direito (Origens vs Campanhas)
    const refTabs = document.querySelectorAll('.ref-tab-btn');
    refTabs.forEach(btn => {
      btn.addEventListener('click', () => {
        refTabs.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.renderReferrersList(btn.getAttribute('data-subtab') || 'referrers');
      });
    });

    // Search inputs
    const pageSearch = document.getElementById('pages-search-input');
    if (pageSearch) {
      pageSearch.addEventListener('input', (e) => {
        this.renderPagesList('pages', e.target.value.toLowerCase());
      });
    }

    const refSearch = document.getElementById('ref-search-input');
    if (refSearch) {
      refSearch.addEventListener('input', (e) => {
        this.renderReferrersList('referrers', e.target.value.toLowerCase());
      });
    }
  }

  // =========================================================
  // 6. LIVE SIMULATION ENGINE (CLIENT REALTIME FLUCTUATION)
  // =========================================================
  setupLiveSimulation() {
    const livePill = document.getElementById('live-visitor-count');

    // Flutuação contínua de visitantes ativos a cada 2.5s
    this.activeUsersInterval = setInterval(() => {
      const delta = Math.floor(Math.random() * 5) - 2; // -2, -1, 0, 1, 2
      this.activeOnlineUsers = Math.max(12, this.activeOnlineUsers + delta);
      if (livePill) {
        livePill.textContent = `${this.activeOnlineUsers} ONLINE`;
      }
    }, 2400);

    // Stream de eventos ao vivo a cada 3s
    const feedContainer = document.getElementById('realtime-stream-feed');
    const mockFeedEvents = [
      { flag: '🇺🇸', loc: 'San Francisco, US', path: '/features/ai-agents', ref: 'github.com', dev: 'macOS · Chrome' },
      { flag: '🇧🇷', loc: 'São Paulo, BR', path: '/dashboard', ref: 'google.com', dev: 'Windows · Chrome' },
      { flag: '🇩🇪', loc: 'Berlim, DE', path: '/pricing', ref: 'x.com', dev: 'Linux · Firefox' },
      { flag: '🇯🇵', loc: 'Tóquio, JP', path: '/docs/api/quickstart', ref: 'direct', dev: 'macOS · Safari' },
      { flag: '🇬🇧', loc: 'Londres, GB', path: '/enterprise/security-audit', ref: 'linkedin.com', dev: 'Desktop · Edge' },
      { flag: '🇨🇦', loc: 'Toronto, CA', path: '/changelog/v3-release', ref: 'producthunt.com', dev: 'iOS · Safari' },
      { flag: '🇫🇷', loc: 'Paris, FR', path: '/features/telemetry', ref: 'news.ycombinator.com', dev: 'Linux · Chrome' },
    ];

    this.feedInterval = setInterval(() => {
      if (!feedContainer) return;
      const ev = mockFeedEvents[Math.floor(Math.random() * mockFeedEvents.length)];
      const row = document.createElement('div');
      row.className = 'feed-item';
      row.innerHTML = `
        <div class="feed-left">
          <span class="feed-pulse"></span>
          <span class="feed-location">${ev.flag} ${ev.loc}</span>
          <span class="feed-path">${ev.path}</span>
        </div>
        <div class="feed-right">
          <span class="feed-tag">${ev.ref}</span>
          <span>${ev.dev}</span>
          <span class="mono" style="opacity:0.6;">Agora</span>
        </div>
      `;
      feedContainer.insertBefore(row, feedContainer.firstChild);

      if (feedContainer.children.length > 25) {
        feedContainer.removeChild(feedContainer.lastChild);
      }
    }, 3200);
  }

  // =========================================================
  // 7. RENDER ALL COMPONENTS & METRICS
  // =========================================================
  renderAll() {
    const site = this.site;

    // Atualiza Headers
    const siteTitle = document.getElementById('active-site-title');
    const siteDomain = document.getElementById('active-site-domain');
    const websitePillText = document.getElementById('current-website-name');

    if (siteTitle) siteTitle.textContent = site.name;
    if (siteDomain) siteDomain.textContent = site.domain;
    if (websitePillText) websitePillText.textContent = site.name;

    // Multiplicador do Time Range
    let multiplier = 1;
    if (this.currentTimeRange === 'today') multiplier = 0.16;
    else if (this.currentTimeRange === '24h') multiplier = 0.22;
    else if (this.currentTimeRange === '7d') multiplier = 1.0;
    else if (this.currentTimeRange === '30d') multiplier = 3.9;
    else if (this.currentTimeRange === '90d') multiplier = 11.2;
    else if (this.currentTimeRange === '1y') multiplier = 42.0;

    const views = Math.round(site.baseViews * multiplier);
    const visitors = Math.round(site.baseVisitors * multiplier);
    const visits = Math.round(site.baseVisits * multiplier);

    // Formata números
    this.animateNumber('metric-views-val', views);
    this.animateNumber('metric-visitors-val', visitors);
    this.animateNumber('metric-visits-val', visits);

    const bounceEl = document.getElementById('metric-bounce-val');
    if (bounceEl) bounceEl.textContent = `${site.bounceRate}%`;

    const durEl = document.getElementById('metric-duration-val');
    if (durEl) {
      const min = Math.floor(site.avgDurationSec / 60);
      const sec = site.avgDurationSec % 60;
      durEl.textContent = `${min}m ${sec}s`;
    }

    // Renderiza Mini Sparklines dos Hero Cards
    this.renderHeroSparklines();

    // Renderiza Gráfico Principal
    this.renderChartData(multiplier);

    // Renderiza Tabelas
    this.renderPagesList('pages');
    this.renderReferrersList('referrers');
    this.renderBrowsersList();
    this.renderOsList();
    this.renderDevicesList();
    this.renderCountriesList();
    this.renderEventsList();
  }

  animateNumber(elId, targetNum) {
    const el = document.getElementById(elId);
    if (!el) return;
    const formatted = targetNum.toLocaleString('pt-BR');
    el.textContent = formatted;
  }

  // Mini Sparklines
  renderHeroSparklines() {
    const ids = ['sparkline-views', 'sparkline-visitors', 'sparkline-visits', 'sparkline-bounce', 'sparkline-duration'];
    ids.forEach((id, idx) => {
      const canvas = document.getElementById(id);
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const w = canvas.width = canvas.offsetWidth || 76;
      const h = canvas.height = canvas.offsetHeight || 28;
      ctx.clearRect(0, 0, w, h);

      // Gera curva aleatória consistente
      const points = [0.2, 0.4, 0.35, 0.7, 0.6, 0.85, 0.75, 0.95];
      ctx.beginPath();
      ctx.strokeStyle = idx === 3 ? '#f43f5e' : (idx === 1 ? '#a78bfa' : '#38bdf8');
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      points.forEach((p, i) => {
        const x = (i / (points.length - 1)) * w;
        const y = h - (p * h * 0.8) - 2;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
    });
  }

  // =========================================================
  // 8. INTERACTIVE CANVAS TIME-SERIES CHART
  // =========================================================
  setupChart() {
    const canvas = document.getElementById('main-analytics-canvas');
    if (!canvas) return;

    window.addEventListener('resize', () => {
      this.drawChart();
    });

    // Tooltip interativo com hover
    const tooltip = document.getElementById('chart-tooltip');
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      if (!this.chartData || this.chartData.length === 0) return;

      const stepX = rect.width / (this.chartData.length - 1);
      const closestIdx = Math.round(mouseX / stepX);

      if (closestIdx >= 0 && closestIdx < this.chartData.length) {
        const item = this.chartData[closestIdx];
        if (tooltip) {
          tooltip.style.display = 'block';
          tooltip.style.left = `${e.clientX}px`;
          tooltip.style.top = `${rect.top + window.scrollY + 40}px`;
          tooltip.innerHTML = `
            <div class="tooltip-date">${item.dateLabel}</div>
            <div class="tooltip-row">
              <span style="color:#38bdf8;">Visualizações:</span>
              <span class="tooltip-val">${item.views.toLocaleString('pt-BR')}</span>
            </div>
            <div class="tooltip-row">
              <span style="color:#a78bfa;">Visitantes:</span>
              <span class="tooltip-val">${item.visitors.toLocaleString('pt-BR')}</span>
            </div>
          `;
        }
      }
    });

    canvas.addEventListener('mouseleave', () => {
      if (tooltip) tooltip.style.display = 'none';
    });
  }

  renderChartData(multiplier) {
    // Gera dados simulados realistas de séries temporais
    const pointsCount = this.currentTimeRange === 'today' || this.currentTimeRange === '24h' ? 24 : (this.currentTimeRange === '7d' ? 14 : 30);
    const data = [];

    const now = new Date();
    for (let i = pointsCount - 1; i >= 0; i--) {
      const d = new Date(now.getTime() - i * (this.currentTimeRange === 'today' || this.currentTimeRange === '24h' ? 3600000 : 86400000));
      const diurnal = Math.sin((i / pointsCount) * Math.PI * 2) * 0.3 + 0.7; // Ciclo dia/noite
      const noise = 0.85 + Math.random() * 0.3;

      const baseViewsPoint = (this.site.baseViews * multiplier / pointsCount) * diurnal * noise;
      const baseVisitorsPoint = baseViewsPoint * 0.38 * (0.9 + Math.random() * 0.2);

      data.push({
        dateLabel: this.currentTimeRange === 'today' || this.currentTimeRange === '24h' 
          ? `${d.getHours()}:00` 
          : `${d.getDate()}/${d.getMonth() + 1}`,
        views: Math.round(baseViewsPoint),
        visitors: Math.round(baseVisitorsPoint)
      });
    }

    this.chartData = data;
    this.drawChart();
  }

  drawChart() {
    const canvas = document.getElementById('main-analytics-canvas');
    if (!canvas || !this.chartData || this.chartData.length === 0) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, w, h);

    const padding = { top: 20, right: 20, bottom: 30, left: 50 };
    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;

    const maxVal = Math.max(...this.chartData.map(d => Math.max(d.views, d.visitors))) * 1.15 || 1000;

    // Linhas de Grade de Fundo
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
    ctx.lineWidth = 1;
    const gridRows = 4;
    for (let i = 0; i <= gridRows; i++) {
      const y = padding.top + (chartH / gridRows) * i;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(w - padding.right, y);
      ctx.stroke();

      // Legenda de Valores no Eixo Y
      const val = Math.round(maxVal - (maxVal / gridRows) * i);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.font = '10px JetBrains Mono, monospace';
      ctx.textAlign = 'right';
      ctx.fillText(val.toLocaleString('pt-BR'), padding.left - 10, y + 3);
    }

    // Função de interpolação Bezier Suave
    const drawSeries = (key, strokeColor, fillColor) => {
      const coords = this.chartData.map((d, i) => {
        const x = padding.left + (i / (this.chartData.length - 1)) * chartW;
        const y = padding.top + chartH - (d[key] / maxVal) * chartH;
        return { x, y };
      });

      // Área com Gradiente Transparente
      ctx.beginPath();
      ctx.moveTo(coords[0].x, coords[0].y);
      for (let i = 0; i < coords.length - 1; i++) {
        const xc = (coords[i].x + coords[i + 1].x) / 2;
        const yc = (coords[i].y + coords[i + 1].y) / 2;
        ctx.quadraticCurveTo(coords[i].x, coords[i].y, xc, yc);
      }
      ctx.lineTo(coords[coords.length - 1].x, coords[coords.length - 1].y);
      ctx.lineTo(coords[coords.length - 1].x, padding.top + chartH);
      ctx.lineTo(coords[0].x, padding.top + chartH);
      ctx.closePath();

      const grad = ctx.createLinearGradient(0, padding.top, 0, padding.top + chartH);
      grad.addColorStop(0, fillColor);
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fill();

      // Linha Principal
      ctx.beginPath();
      ctx.moveTo(coords[0].x, coords[0].y);
      for (let i = 0; i < coords.length - 1; i++) {
        const xc = (coords[i].x + coords[i + 1].x) / 2;
        const yc = (coords[i].y + coords[i + 1].y) / 2;
        ctx.quadraticCurveTo(coords[i].x, coords[i].y, xc, yc);
      }
      ctx.lineTo(coords[coords.length - 1].x, coords[coords.length - 1].y);
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Pontos nos vértices
      coords.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = strokeColor;
        ctx.fill();
      });
    };

    // Desenha Camadas: 1. Visualizações (#38bdf8), 2. Visitantes (#a78bfa)
    drawSeries('views', '#38bdf8', 'rgba(56, 189, 248, 0.28)');
    drawSeries('visitors', '#a78bfa', 'rgba(167, 139, 250, 0.25)');

    // Eixo X Labels
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.font = '10px JetBrains Mono, monospace';
    ctx.textAlign = 'center';
    const labelStep = Math.max(1, Math.floor(this.chartData.length / 6));
    this.chartData.forEach((d, i) => {
      if (i % labelStep === 0 || i === this.chartData.length - 1) {
        const x = padding.left + (i / (this.chartData.length - 1)) * chartW;
        ctx.fillText(d.dateLabel, x, h - 8);
      }
    });
  }

  // =========================================================
  // 9. BREAKDOWN TABLES RENDERING
  // =========================================================
  renderPagesList(subtab = 'pages', filter = '') {
    const container = document.getElementById('pages-breakdown-list');
    if (!container) return;

    let items = this.site.pages;
    if (filter) {
      items = items.filter(p => p.path.toLowerCase().includes(filter) || p.label.toLowerCase().includes(filter));
    }

    container.innerHTML = '';
    items.forEach(p => {
      const row = document.createElement('div');
      row.className = 'data-row';
      row.innerHTML = `
        <div class="data-bar-fill" style="width: ${p.pct}%;"></div>
        <div class="data-label-group">
          <span class="data-icon" style="color:var(--accent-purple);">📄</span>
          <span class="data-label" title="${p.path}">${p.path}</span>
        </div>
        <div class="data-value-group">
          <span>${p.count.toLocaleString('pt-BR')}</span>
          <span class="data-pct">${p.pct}%</span>
        </div>
      `;
      container.appendChild(row);
    });
  }

  renderReferrersList(subtab = 'referrers', filter = '') {
    const container = document.getElementById('referrers-breakdown-list');
    if (!container) return;

    let items = this.site.referrers;
    if (filter) {
      items = items.filter(r => r.domain.toLowerCase().includes(filter) || r.label.toLowerCase().includes(filter));
    }

    container.innerHTML = '';
    items.forEach(r => {
      const row = document.createElement('div');
      row.className = 'data-row';
      row.innerHTML = `
        <div class="data-bar-fill" style="width: ${r.pct}%;"></div>
        <div class="data-label-group">
          <span class="data-icon">${r.icon || '🔗'}</span>
          <span class="data-label" title="${r.domain}">${r.domain}</span>
        </div>
        <div class="data-value-group">
          <span>${r.count.toLocaleString('pt-BR')}</span>
          <span class="data-pct">${r.pct}%</span>
        </div>
      `;
      container.appendChild(row);
    });
  }

  renderBrowsersList() {
    const container = document.getElementById('browsers-breakdown-list');
    if (!container) return;
    container.innerHTML = '';
    this.site.browsers.forEach(b => {
      const row = document.createElement('div');
      row.className = 'data-row';
      row.innerHTML = `
        <div class="data-bar-fill" style="width: ${b.pct}%;"></div>
        <div class="data-label-group">
          <span class="data-icon">${b.icon}</span>
          <span class="data-label">${b.name}</span>
        </div>
        <div class="data-value-group">
          <span>${b.count.toLocaleString('pt-BR')}</span>
          <span class="data-pct">${b.pct}%</span>
        </div>
      `;
      container.appendChild(row);
    });
  }

  renderOsList() {
    const container = document.getElementById('os-breakdown-list');
    if (!container) return;
    container.innerHTML = '';
    this.site.os.forEach(o => {
      const row = document.createElement('div');
      row.className = 'data-row';
      row.innerHTML = `
        <div class="data-bar-fill" style="width: ${o.pct}%;"></div>
        <div class="data-label-group">
          <span class="data-icon">${o.icon}</span>
          <span class="data-label">${o.name}</span>
        </div>
        <div class="data-value-group">
          <span>${o.count.toLocaleString('pt-BR')}</span>
          <span class="data-pct">${o.pct}%</span>
        </div>
      `;
      container.appendChild(row);
    });
  }

  renderDevicesList() {
    const container = document.getElementById('devices-breakdown-list');
    if (!container) return;
    container.innerHTML = '';
    this.site.devices.forEach(d => {
      const row = document.createElement('div');
      row.className = 'data-row';
      row.innerHTML = `
        <div class="data-bar-fill" style="width: ${d.pct}%;"></div>
        <div class="data-label-group">
          <span class="data-icon">${d.icon}</span>
          <span class="data-label">${d.name}</span>
        </div>
        <div class="data-value-group">
          <span>${d.count.toLocaleString('pt-BR')}</span>
          <span class="data-pct">${d.pct}%</span>
        </div>
      `;
      container.appendChild(row);
    });
  }

  renderCountriesList() {
    const container = document.getElementById('countries-breakdown-list');
    if (!container) return;
    container.innerHTML = '';
    this.site.countries.forEach(c => {
      const row = document.createElement('div');
      row.className = 'data-row';
      row.innerHTML = `
        <div class="data-bar-fill" style="width: ${c.pct}%;"></div>
        <div class="data-label-group">
          <span class="data-icon">${c.flag}</span>
          <span class="data-label">${c.name}</span>
        </div>
        <div class="data-value-group">
          <span>${c.count.toLocaleString('pt-BR')}</span>
          <span class="data-pct">${c.pct}%</span>
        </div>
      `;
      container.appendChild(row);
    });
  }

  renderEventsList() {
    const container = document.getElementById('events-breakdown-list');
    if (!container) return;
    container.innerHTML = '';
    this.site.events.forEach(e => {
      const row = document.createElement('div');
      row.className = 'data-row';
      row.innerHTML = `
        <div class="data-label-group">
          <span class="data-icon" style="color:var(--accent-emerald);">⚡</span>
          <span class="data-label mono">${e.name}</span>
        </div>
        <div class="data-value-group">
          <span>${e.count.toLocaleString('pt-BR')}</span>
          <span class="data-pct" style="color:#34d399;">${e.rate}</span>
        </div>
      `;
      container.appendChild(row);
    });
  }

  renderWebsitesDirectory() {
    const container = document.getElementById('websites-directory-grid');
    if (!container) return;
    container.innerHTML = '';
    MOCK_WEBSITES.forEach((site, idx) => {
      const card = document.createElement('div');
      card.className = 'glass-panel';
      card.style.padding = '20px';
      card.style.cursor = 'pointer';
      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">
          <div>
            <h3 style="font-size:16px; font-weight:700; color:#fff;">${site.name}</h3>
            <span style="font-size:12px; color:var(--text-tertiary);">${site.domain}</span>
          </div>
          <span style="font-size:10px; font-weight:700; background:rgba(16,185,129,0.15); border:1px solid rgba(16,185,129,0.3); color:#6ee7b7; padding:2px 8px; border-radius:6px;">ATIVO</span>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:13px; margin-top:16px; border-top:1px solid rgba(255,255,255,0.08); padding-top:12px;">
          <div>
            <div style="color:var(--text-tertiary); font-size:11px;">Visualizações</div>
            <div style="font-weight:700; font-size:16px; color:#fff;">${site.baseViews.toLocaleString('pt-BR')}</div>
          </div>
          <div>
            <div style="color:var(--text-tertiary); font-size:11px;">Visitantes</div>
            <div style="font-weight:700; font-size:16px; color:#fff;">${site.baseVisitors.toLocaleString('pt-BR')}</div>
          </div>
          <div>
            <div style="color:var(--text-tertiary); font-size:11px;">Ao Vivo</div>
            <div style="font-weight:700; font-size:16px; color:#34d399;">${site.activeUsers}</div>
          </div>
        </div>
      `;
      card.addEventListener('click', () => {
        this.currentSiteIndex = idx;
        const tabOverview = document.querySelector('.view-tab[data-view="overview"]');
        if (tabOverview) tabOverview.click();
      });
      container.appendChild(card);
    });
  }

  // =========================================================
  // 10. ABOUT MODAL
  // =========================================================
  setupModal() {
    const modal = document.getElementById('demo-info-modal');
    const openBtn = document.getElementById('open-demo-info-btn');
    const closeBtn = document.getElementById('close-demo-info-btn');

    if (openBtn && modal) {
      openBtn.addEventListener('click', () => modal.classList.add('active'));
    }
    if (closeBtn && modal) {
      closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    }
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
      });
    }
  }
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  window.umamiApp = new UmamiDemoApp();
});
