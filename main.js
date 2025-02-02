// Объект с переводами выносим на глобальный уровень
const translations = {
    en: {
        home: "Home",
        features: "Features",
        about: "About",
        faq: "FAQ",
        getStarted: "Get Started",
        nextGen: "Next Generation",
        tradingPlatform: "Trading Platform",
        advancedTools: "Advanced tools for professional traders",
        startTrading: "Start Trading",
        learnMore: "Learn More",
        realTimeAnalytics: "Real-time Analytics",
        analyticsDesc: "Advanced market analysis tools",
        secureTrading: "Secure Trading",
        securityDesc: "Enterprise-grade security",
        fastExecution: "Fast Execution",
        executionDesc: "Lightning-fast order execution",
        aiPowered: "AI Powered",
        aiDesc: "Smart trading algorithms",
        choosePlan: "Choose Your Plan",
        starter: "Starter",
        professional: "Professional",
        enterprise: "Enterprise",
        popular: "Popular",
        basicAnalytics: "Basic Analytics",
        tradingPairs: "5 Trading Pairs",
        standardSupport: "Standard Support",
        selectPlan: "Select Plan",
        contactUs: "Contact Us"
    },
    ru: {
        home: "Главная",
        features: "Функции",
        about: "О нас",
        faq: "FAQ",
        getStarted: "Начать",
        nextGen: "Новое поколение",
        tradingPlatform: "Торговой платформы",
        advancedTools: "Продвинутые инструменты для профессиональных трейдеров",
        startTrading: "Начать торговлю",
        learnMore: "Узнать больше",
        realTimeAnalytics: "Аналитика в реальном времени",
        analyticsDesc: "Продвинутые инструменты анализа рынка",
        secureTrading: "Безопасная торговля",
        securityDesc: "Безопасность корпоративного уровня",
        fastExecution: "Быстрое исполнение",
        executionDesc: "Молниеносное исполнение ордеров",
        aiPowered: "На базе ИИ",
        aiDesc: "Умные торговые алгоритмы",
        choosePlan: "Выберите план",
        starter: "Начальный",
        professional: "Профессиональный",
        enterprise: "Корпоративный",
        popular: "Популярный",
        basicAnalytics: "Базовая аналитика",
        tradingPairs: "5 торговых пар",
        standardSupport: "Стандартная поддержка",
        selectPlan: "Выбрать план",
        contactUs: "Связаться с нами"
    },
    ua: {
        home: "Головна",
        features: "Функції",
        about: "Про нас",
        faq: "FAQ",
        getStarted: "Почати",
        nextGen: "Нове покоління",
        tradingPlatform: "Торгової платформи",
        advancedTools: "Просунуті інструменти для професійних трейдерів",
        startTrading: "Почати торгівлю",
        learnMore: "Дізнатися більше",
        realTimeAnalytics: "Аналітика в реальному часі",
        analyticsDesc: "Просунуті інструменти аналізу ринку",
        secureTrading: "Безпечна торгівля",
        securityDesc: "Безпека корпоративного рівня",
        fastExecution: "Швидке виконання",
        executionDesc: "Блискавичне виконання ордерів",
        aiPowered: "На базі ШІ",
        aiDesc: "Розумні торгові алгоритми",
        choosePlan: "Оберіть план",
        starter: "Початковий",
        professional: "Професійний",
        enterprise: "Корпоративний",
        popular: "Популярний",
        basicAnalytics: "Базова аналітика",
        tradingPairs: "5 торгових пар",
        standardSupport: "Стандартна підтримка",
        selectPlan: "Обрати план",
        contactUs: "Зв'язатися з нами"
    }
};

// Добавим функцию для изменения языка
function changeLanguage(lang) {
    console.log('changeLanguage called with:', lang); // Для отладки
    localStorage.setItem('selectedLanguage', lang);
    
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        console.log('Translating element:', element, 'key:', key); // Для отладки
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Ждем полной загрузки DOM перед выполнением скрипта
document.addEventListener('DOMContentLoaded', () => {
    // Инициализация языкового селектора
    const languageDropdown = document.querySelector('.language-dropdown');
    const selectedLang = document.querySelector('.selected-lang');
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');

    // Обработчики для выбора языка
    dropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = link.getAttribute('data-lang');
            selectedLang.textContent = lang.toUpperCase();
            changeLanguage(lang);
            console.log('Changing language to:', lang); // Для отладки
        });
    });

    // Загрузка сохраненного языка
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    selectedLang.textContent = savedLanguage.toUpperCase();
    changeLanguage(savedLanguage);
    
    // Остальной код WebGL
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

    // Инициализация шейдера и получение униформ
    let uniforms;
    const gl = initShader();

    // Настройка событий
    setupEvents();

    // Изменение размера канваса
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Запуск рендеринга
    render();
});

// Функция инициализации шейдера
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

// Функция рендеринга
function render() {
    const currentTime = performance.now();

    pointer.x += (pointer.tX - pointer.x) * .5;
    pointer.y += (pointer.tY - pointer.y) * .5;

    gl.uniform1f(uniforms.u_time, currentTime);
    gl.uniform2f(uniforms.u_pointer_position, pointer.x / window.innerWidth, 1 - pointer.y / window.innerHeight);
    gl.uniform1f(uniforms.u_scroll_progress, window.pageYOffset / (2 * window.innerHeight));

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    requestAnimationFrame(render);
}

// Функция изменения размера канваса
function resizeCanvas() {
    canvasEl.width = window.innerWidth * devicePixelRatio;
    canvasEl.height = window.innerHeight * devicePixelRatio;
    gl.uniform1f(uniforms.u_ratio, canvasEl.width / canvasEl.height);
    gl.viewport(0, 0, canvasEl.width, canvasEl.height);
}

// Функция настройки событий
function setupEvents() {
    const langSelector = document.querySelector('.language-selector');
    const langBtn = document.querySelector('.lang-btn');
    const langOptions = document.querySelectorAll('.lang-option');
    
    console.log('Language elements:', { langSelector, langBtn, langOptions });  // Для отладки

    // Обработчик клика по кнопке языка
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langSelector.classList.toggle('active');
        console.log('Language selector clicked');  // Для отладки
    });

    // Закрытие при клике вне селектора
    document.addEventListener('click', (e) => {
        if (!langSelector.contains(e.target)) {
            langSelector.classList.remove('active');
        }
    });

    // Обработка выбора языка
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.dataset.lang;
            document.querySelector('.current-lang').textContent = lang.toUpperCase();
            langSelector.classList.remove('active');
            changeLanguage(lang);
            console.log('Language changed to:', lang);  // Для отладки
        });
    });
}

function updateMousePosition(eX, eY) {
    pointer.tX = eX;
    pointer.tY = eY;
}
