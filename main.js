// Объект с переводами
const translations = {
    en: {
        home: "Home",
        features: "Features",
        about: "About",
        pricing: "Pricing",
        getStarted: "Get Started",
        nextGen: "Next Generation",
        tradingPlatform: "Trading Platform",
        advancedTools: "Advanced tools for professional traders",
        startTrading: "Start Trading",
        watchDemo: "Watch Demo",
        tradingVolume: "Trading Volume",
        activeTraders: "Active Traders",
        countries: "Countries",
        whyChooseUs: "Why Choose TradePro",
        realTimeAnalytics: "Real-time Analytics",
        analyticsDesc: "Advanced market analysis tools with AI-powered insights",
        security: "Bank-Grade Security",
        securityDesc: "Your assets are protected with military-grade encryption",
        speed: "Lightning Fast",
        speedDesc: "Execute trades in milliseconds with our advanced infrastructure",
        automation: "Smart Automation",
        automationDesc: "Automate your trading strategies with ease",
        tradingTools: "Professional Trading Tools",
        advancedCharts: "Advanced Charts",
        chartsDesc: "Professional-grade technical analysis tools",
        topTraders: "Top Traders",
        totalProfit: "Total Profit",
        successRate: "Success Rate",
        follow: "Follow",
        following: "Following"
    },
    ru: {
        home: "Главная",
        features: "Функции",
        about: "О нас",
        pricing: "Цены",
        getStarted: "Начать",
        nextGen: "Новое поколение",
        tradingPlatform: "Торговой платформы",
        advancedTools: "Продвинутые инструменты для профессиональных трейдеров",
        startTrading: "Начать торговлю",
        watchDemo: "Смотреть демо",
        tradingVolume: "Объем торгов",
        activeTraders: "Активных трейдеров",
        countries: "Стран",
        whyChooseUs: "Почему TradePro",
        realTimeAnalytics: "Аналитика в реальном времени",
        analyticsDesc: "Продвинутые инструменты анализа рынка с ИИ",
        security: "Банковская безопасность",
        securityDesc: "Ваши активы защищены шифрованием военного уровня",
        speed: "Молниеносная скорость",
        speedDesc: "Исполнение сделок за миллисекунды",
        automation: "Умная автоматизация",
        automationDesc: "Автоматизируйте свои торговые стратегии",
        tradingTools: "Профессиональные инструменты",
        advancedCharts: "Продвинутые графики",
        chartsDesc: "Профессиональные инструменты технического анализа",
        topTraders: "Топ Трейдеров",
        totalProfit: "Общая Прибыль",
        successRate: "Успешность",
        follow: "Подписаться",
        following: "Подписка"
    },
    ua: {
        home: "Головна",
        features: "Функції",
        about: "Про нас",
        pricing: "Ціни",
        getStarted: "Почати",
        nextGen: "Нове покоління",
        tradingPlatform: "Торгової платформи",
        advancedTools: "Просунуті інструменти для професійних трейдерів",
        startTrading: "Почати торгівлю",
        watchDemo: "Дивитись демо",
        tradingVolume: "Об'єм торгів",
        activeTraders: "Активних трейдерів",
        countries: "Країн",
        whyChooseUs: "Чому TradePro",
        realTimeAnalytics: "Аналітика в реальному часі",
        analyticsDesc: "Просунуті інструменти аналізу ринку зі ШІ",
        security: "Банківська безпека",
        securityDesc: "Ваші активи захищені шифруванням військового рівня",
        speed: "Блискавична швидкість",
        speedDesc: "Виконання угод за мілісекунди",
        automation: "Розумна автоматизація",
        automationDesc: "Автоматизуйте свої торгові стратегії",
        tradingTools: "Професійні інструменти",
        advancedCharts: "Просунуті графіки",
        chartsDesc: "Професійні інструменти технічного аналізу",
        topTraders: "Топ Трейдерів",
        totalProfit: "Загальний Прибуток",
        successRate: "Успішність",
        follow: "Підписатися",
        following: "Підписка"
    }
};

// Код для WebGL фона
const containerEl = document.querySelector(".container");
const canvasEl = document.querySelector("canvas#neuro");
const devicePixelRatio = Math.min(window.devicePixelRatio, 2);

const params = {
    rotation: 1,
    scaleMult: 1.2,
};

const pointer = {
    x: 0,
    y: 0,
    tX: 0,
    tY: 0,
};

let uniforms;
const gl = initShader();

setupEvents();
resizeCanvas();

window.addEventListener("resize", resizeCanvas);
render();

// Функции для WebGL
function initShader() {
    const vsSource = document.getElementById("vertShader").innerHTML;
    const fsSource = document.getElementById("fragShader").innerHTML;

    const gl = canvasEl.getContext("webgl") || canvasEl.getContext("experimental-webgl");

    if (!gl) {
        alert("WebGL is not supported by your browser.");
    }

    function createShader(gl, sourceCode, type) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, sourceCode);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }

        return shader;
    }

    const vertexShader = createShader(gl, vsSource, gl.VERTEX_SHADER);
    const fragmentShader = createShader(gl, fsSource, gl.FRAGMENT_SHADER);

    function createShaderProgram(gl, vertexShader, fragmentShader) {
        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error("Unable to initialize the shader program: " + gl.getProgramInfoLog(program));
            return null;
        }

        return program;
    }

    const shaderProgram = createShaderProgram(gl, vertexShader, fragmentShader);
    uniforms = getUniforms(shaderProgram);

    function getUniforms(program) {
        let uniforms = [];
        let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
        for (let i = 0; i < uniformCount; i++) {
            let uniformName = gl.getActiveUniform(program, i).name;
            uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
        }
        return uniforms;
    }

    const vertices = new Float32Array([-1., -1., 1., -1., -1., 1., 1., 1.]);

    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    gl.useProgram(shaderProgram);

    const positionLocation = gl.getAttribLocation(shaderProgram, "a_position");
    gl.enableVertexAttribArray(positionLocation);

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    return gl;
}

function render() {
    const currentTime = performance.now();

    pointer.x += (pointer.tX - pointer.x) * .5;
    pointer.y += (pointer.tY - pointer.y) * .5;

    gl.uniform1f(uniforms.u_time, currentTime);
    gl.uniform2f(uniforms.u_pointer_position, pointer.x / window.innerWidth, 1 - pointer.y / window.innerHeight);
    gl.uniform1f(uniforms.u_scroll_progress, window["pageYOffset"] / (2 * window.innerHeight));

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    requestAnimationFrame(render);
}

function resizeCanvas() {
    canvasEl.width = window.innerWidth * devicePixelRatio;
    canvasEl.height = window.innerHeight * devicePixelRatio;
    gl.uniform1f(uniforms.u_ratio, canvasEl.width / canvasEl.height);
    gl.viewport(0, 0, canvasEl.width, canvasEl.height);
}

// Обновленная функция setupEvents для обработки как событий фона, так и языкового селектора
function setupEvents() {
    // События для WebGL
    window.addEventListener("pointermove", e => {
        updateMousePosition(e.clientX, e.clientY);
    });
    window.addEventListener("touchmove", e => {
        updateMousePosition(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
    });
    window.addEventListener("click", e => {
        updateMousePosition(e.clientX, e.clientY);
    });

    function updateMousePosition(eX, eY) {
        pointer.tX = eX;
        pointer.tY = eY;
    }

    // События для языкового селектора
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');
    const selectedLang = document.querySelector('.selected-lang');

    dropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = link.getAttribute('data-lang');
            selectedLang.textContent = lang.toUpperCase();
            changeLanguage(lang);
        });
    });

    // Загрузка сохраненного языка
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    selectedLang.textContent = savedLanguage.toUpperCase();
    changeLanguage(savedLanguage);

    // Плавная прокрутка для навигации
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Анимация появления элементов при скролле
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .stat-item').forEach(el => {
        observer.observe(el);
    });

    // Обработчики для кнопок подписки
    document.querySelectorAll('.follow-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const isFollowing = this.classList.contains('following');
            if (isFollowing) {
                this.classList.remove('following');
                this.textContent = translations[currentLang].follow;
                this.style.background = 'rgba(0, 255, 102, 0.1)';
            } else {
                this.classList.add('following');
                this.textContent = translations[currentLang].following;
                this.style.background = '#00ff66';
                this.style.color = '#151912';
            }
        });
    });
}

// Функция смены языка
function changeLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    setupEvents();
    resizeCanvas();
    render();
    
    // Добавляем Chart.js
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.onload = () => {
        const timeScript = document.createElement('script');
        timeScript.src = 'https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns';
        timeScript.onload = () => {
            initChart();
        };
        document.head.appendChild(timeScript);
    };
    document.head.appendChild(script);

    // Инициализация TradingView
    initTradingViewWidget();
    loadTradingViewScript();
    initModals();
});

function initChart() {
    const ctx = document.getElementById('tradingChart').getContext('2d');
    
    // Генерируем случайные данные для графика
    const data = [];
    let price = 43500;
    for (let i = 0; i < 100; i++) {
        price += (Math.random() - 0.5) * 100;
        data.push({
            x: new Date(Date.now() - (100 - i) * 360000),
            y: price
        });
    }

    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'BTC/USDT',
                data: data,
                borderColor: '#00ff66',
                backgroundColor: 'rgba(0, 255, 102, 0.1)',
                borderWidth: 2,
                pointRadius: 0,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index'
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    titleColor: '#00ff66',
                    bodyColor: '#fff',
                    padding: 12,
                    displayColors: false
                }
            },
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'hour'
                    },
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.6)'
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.6)'
                    }
                }
            }
        }
    });

    // Обработчики для кнопок временных интервалов
    document.querySelectorAll('.time-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.time-btn.active').classList.remove('active');
            btn.classList.add('active');
            // Здесь можно добавить логику обновления данных графика
        });
    });
}

// Мобильное меню
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
            nav.classList.remove('active');
            menuBtn.classList.remove('active');
        }
    });
}

// Плавная прокрутка
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Закрываем мобильное меню после клика
                document.querySelector('nav').classList.remove('active');
            }
        });
    });
}

// Анимация появления элементов при скролле
function initScrollAnimations() {
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    document.querySelectorAll('.feature-card, .trader-card, .cta-section').forEach(el => {
        observer.observe(el);
    });
}

// Фильтрация и сортировка трейдеров
function initTraderFilters() {
    const periodSelect = document.querySelector('.filter-period');
    const categorySelect = document.querySelector('.filter-category');
    const tradersList = document.querySelector('.traders-list');

    function filterTraders() {
        const period = periodSelect.value;
        const category = categorySelect.value;
        
        // Здесь можно добавить реальную логику фильтрации
        // Для демонстрации просто добавим класс
        tradersList.setAttribute('data-period', period);
        tradersList.setAttribute('data-category', category);
    }

    periodSelect?.addEventListener('change', filterTraders);
    categorySelect?.addEventListener('change', filterTraders);
}

// Кнопки Follow/Following
function initFollowButtons() {
    document.querySelectorAll('.follow-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const isFollowing = this.classList.contains('following');
            
            if (isFollowing) {
                this.classList.remove('following');
                this.textContent = translations[currentLang].follow;
                this.style.background = 'rgba(100, 255, 218, 0.1)';
            } else {
                this.classList.add('following');
                this.textContent = translations[currentLang].following;
                this.style.background = '#64ffda';
                
                // Анимация успешного действия
                const ripple = document.createElement('span');
                ripple.classList.add('ripple');
                this.appendChild(ripple);
                setTimeout(() => ripple.remove(), 1000);
            }
        });
    });
}

// Индикатор скролла
function initScrollIndicator() {
    const indicator = document.querySelector('.scroll-indicator');
    
    if (indicator) {
        // Обработка прозрачности при скролле
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                indicator.style.opacity = '0';
            } else {
                indicator.style.opacity = '1';
            }
        });

        // Добавляем обработчик клика
        indicator.addEventListener('click', () => {
            const featuresSection = document.querySelector('#features');
            if (featuresSection) {
                featuresSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

// Обработка форм
function initForms() {
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            // Здесь можно добавить логику открытия модального окна регистрации
            console.log('Open registration modal');
        });
    }
}

// Оптимизация производительности
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Инициализация всех компонентов
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initTraderFilters();
    initFollowButtons();
    initScrollIndicator();
    initForms();

    // Оптимизированная обработка ресайза
    const debouncedResize = debounce(() => {
        // Пересчет размеров и позиций элементов при необходимости
    }, 250);

    window.addEventListener('resize', debouncedResize);
});

// Инициализация TradingView
function initTradingViewWidget() {
    const container = document.getElementById('tradingview_chart');
    if (!container) return;

    let widget = null;
    
    function createWidget() {
        if (widget) {
            widget.remove();
        }

        widget = new TradingView.widget({
            "width": "100%",
            "height": "100%",
            "symbol": "BINANCE:BTCUSDT",
            "interval": "60",
            "timezone": "Etc/UTC",
            "theme": "dark",
            "style": "1",
            "locale": "en",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "hide_side_toolbar": false,
            "allow_symbol_change": false,
            "container_id": "tradingview_chart",
            "save_image": false,
            "studies": [
                "RSI@tv-basicstudies",
                "MASimple@tv-basicstudies"
            ],
            "show_popup_button": true,
            "popup_width": "1000",
            "popup_height": "650",
            "range": "12M",
            "hide_top_toolbar": false,
            "hide_legend": false,
            "time_frames": [
                { text: "1y", resolution: "D", description: "1 Year" },
                { text: "6m", resolution: "240", description: "6 Months" },
                { text: "3m", resolution: "120", description: "3 Months" },
                { text: "1m", resolution: "60", description: "1 Month" },
                { text: "1w", resolution: "30", description: "1 Week" },
                { text: "1d", resolution: "5", description: "1 Day" }
            ],
            "extended_hours": true,
            "details": true,
            "hotlist": true,
            "calendar": true,
            "width_from_parent": true
        });
    }

    // Создаем виджет сразу без дополнительных селектов
    createWidget();
}

// Добавляем скрипт TradingView
function loadTradingViewScript() {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = initTradingViewWidget;
    document.body.appendChild(script);
}

// Обновляем инициализацию модальных окон
function initModals() {
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const loginBtn = document.querySelector('.login-btn');
    const buyPlanBtn = document.querySelector('.buy-plan-btn');
    const closeBtns = document.querySelectorAll('.close-modal');
    const registerLink = document.querySelector('.register-link');
    const loginLink = document.querySelector('.login-link');
    
    function openModal(modal) {
        closeAllModals();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeAllModals() {
        loginModal.classList.remove('active');
        registerModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Открытие модальных окон
    loginBtn.addEventListener('click', () => openModal(loginModal));
    buyPlanBtn.addEventListener('click', () => openModal(registerModal));
    
    // Переключение между формами
    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(registerModal);
    });
    
    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(loginModal);
    });
    
    // Закрытие модальных окон
    closeBtns.forEach(btn => {
        btn.addEventListener('click', closeAllModals);
    });
    
    [loginModal, registerModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeAllModals();
        });
    });
    
    // Обработка формы входа
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const rememberMe = document.getElementById('rememberMe').checked;
        
        // Здесь можно добавить логику отправки данных на сервер
        console.log('Login data:', { email, password, rememberMe });
        
        // Закрываем модальное окно после успешного входа
        closeAllModals();
    });
    
    // Закрытие по Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAllModals();
    });
}
