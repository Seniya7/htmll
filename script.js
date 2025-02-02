document.addEventListener("DOMContentLoaded", () => {
    // Объект с переводами
    const translations = {
        ru: {
            mainTitle: "Профессиональная торговая платформа",
            heroSubtitle: "Инновационные решения для современного трейдинга",
            activeTraders: "Активных трейдеров",
            countries: "Стран",
            tradingVolume: "Торговый объем",
            choosePlanTitle: "Выберите свой план",
            choosePlanSubtitle: "Выберите лучший вариант для ваших торговых целей",
            instant: "Мгновенный",
            step1: "1 Шаг",
            step2: "2 Шага",
            starter: "Начальный",
            advanced: "Продвинутый",
            premium: "Премиум",
            studentPlan: "План Студент",
            practitionerPlan: "План Практик",
            masterPlan: "План Мастер",
            fromPrice: "от $5K",
            fromPrice10k: "от $10K",
            fromPrice25k: "от $25K",
            basicFeatures: "Базовые функции",
            advancedFeatures: "Продвинутые функции",
            premiumFeatures: "Премиум функции",
            limitedTrading: "Ограниченный объем торговли",
            increasedTrading: "Увеличенный объем торговли",
            unlimitedTrading: "Неограниченный объем торговли",
            standardSupport: "Стандартная поддержка",
            prioritySupport: "Приоритетная поддержка",
            vipSupport: "VIP поддержка 24/7",
            basicAnalytics: "Базовая аналитика",
            advancedAnalytics: "Продвинутая аналитика",
            proAnalytics: "Профессиональная аналитика",
            choosePlan: "Выбрать план",
            tradingStats: "Торговая статистика",
            daily: "День",
            weekly: "Неделя",
            monthly: "Месяц",
            whyChooseUs: "Почему выбирают нас",
            security: "Безопасность",
            securityDesc: "Современные технологии защиты данных и средств",
            speed: "Скорость",
            speedDesc: "Мгновенное исполнение ордеров",
            support: "Поддержка",
            supportDesc: "Круглосуточная профессиональная поддержка",
            analytics: "Аналитика",
            analyticsDesc: "Продвинутые инструменты анализа",
            aboutCompany: "О компании",
            companyDesc: "TradePro - ведущая платформа для профессиональной торговли с передовыми технологиями и инновационными решениями.",
            contacts: "Контакты",
            social: "Социальные сети",
            copyright: "© 2024 TradePro. Все права защищены.",
            home: "Главная",
            terms: "Условия использования",
            about: "О нас",
            partner: "Партнерская программа",
            faq: "FAQ"
        },
        en: {
            mainTitle: "Professional Trading Platform",
            heroSubtitle: "Innovative solutions for modern trading",
            activeTraders: "Active Traders",
            countries: "Countries",
            tradingVolume: "Trading Volume",
            choosePlanTitle: "Choose Your Plan",
            choosePlanSubtitle: "Select the best option for your trading goals",
            instant: "Instant",
            step1: "Step 1",
            step2: "Step 2",
            starter: "Starter",
            advanced: "Advanced",
            premium: "Premium",
            studentPlan: "Student Plan",
            practitionerPlan: "Practitioner Plan",
            masterPlan: "Master Plan",
            fromPrice: "from $5K",
            fromPrice10k: "from $10K",
            fromPrice25k: "from $25K",
            basicFeatures: "Basic Features",
            advancedFeatures: "Advanced Features",
            premiumFeatures: "Premium Features",
            limitedTrading: "Limited trading volume",
            increasedTrading: "Increased trading volume",
            unlimitedTrading: "Unlimited trading volume",
            standardSupport: "Standard support",
            prioritySupport: "Priority support",
            vipSupport: "24/7 VIP support",
            basicAnalytics: "Basic analytics",
            advancedAnalytics: "Advanced analytics",
            proAnalytics: "Professional analytics",
            choosePlan: "Choose Plan",
            tradingStats: "Trading Statistics",
            daily: "Daily",
            weekly: "Weekly",
            monthly: "Monthly",
            whyChooseUs: "Why Choose Us",
            security: "Security",
            securityDesc: "Modern technologies for data and funds protection",
            speed: "Speed",
            speedDesc: "Instant order execution",
            support: "Support",
            supportDesc: "24/7 professional support",
            analytics: "Analytics",
            analyticsDesc: "Advanced analysis tools",
            aboutCompany: "About Company",
            companyDesc: "TradePro - leading platform for professional trading with advanced technologies and innovative solutions.",
            contacts: "Contacts",
            social: "Social Media",
            copyright: "© 2024 TradePro. All rights reserved.",
            home: "Home",
            terms: "Terms of Use",
            about: "About Us",
            partner: "Partner Program",
            faq: "FAQ"
        },
        ua: {
            mainTitle: "Професійна торгова платформа",
            heroSubtitle: "Інноваційні рішення для сучасного трейдингу",
            activeTraders: "Активних трейдерів",
            countries: "Країн",
            tradingVolume: "Торговий об'єм",
            choosePlanTitle: "Оберіть свій план",
            choosePlanSubtitle: "Оберіть найкращий варіант для ваших торгових цілей",
            instant: "Миттєвий",
            step1: "1 Крок",
            step2: "2 Кроки",
            starter: "Початковий",
            advanced: "Розширений",
            premium: "Преміум",
            studentPlan: "План Студент",
            practitionerPlan: "План Практик",
            masterPlan: "План Майстер",
            fromPrice: "від $5K",
            fromPrice10k: "від $10K",
            fromPrice25k: "від $25K",
            basicFeatures: "Базові функції",
            advancedFeatures: "Розширені функції",
            premiumFeatures: "Преміум функції",
            limitedTrading: "Обмежений об'єм торгівлі",
            increasedTrading: "Збільшений об'єм торгівлі",
            unlimitedTrading: "Необмежений об'єм торгівлі",
            standardSupport: "Стандартна підтримка",
            prioritySupport: "Пріоритетна підтримка",
            vipSupport: "VIP підтримка 24/7",
            basicAnalytics: "Базова аналітика",
            advancedAnalytics: "Розширена аналітика",
            proAnalytics: "Професійна аналітика",
            choosePlan: "Обрати план",
            tradingStats: "Торгова статистика",
            daily: "День",
            weekly: "Тиждень",
            monthly: "Місяць",
            whyChooseUs: "Чому обирають нас",
            security: "Безпека",
            securityDesc: "Сучасні технології захисту даних та коштів",
            speed: "Швидкість",
            speedDesc: "Миттєве виконання ордерів",
            support: "Підтримка",
            supportDesc: "Цілодобова професійна підтримка",
            analytics: "Аналітика",
            analyticsDesc: "Передові інструменти аналізу",
            aboutCompany: "Про компанію",
            companyDesc: "TradePro - провідна платформа для професійної торгівлі з передовими технологіями та інноваційними рішеннями.",
            contacts: "Контакти",
            social: "Соціальні мережі",
            copyright: "© 2024 TradePro. Всі права захищені.",
            home: "Головна",
            terms: "Умови використання",
            about: "Про нас",
            partner: "Партнерська програма",
            faq: "FAQ"
        }
    };

    let currentLang = 'ru';

    // Функция обновления текстов
    function updateTexts() {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[currentLang] && translations[currentLang][key]) {
                // Сохраняем классы и стили при обновлении текста
                if (element.classList.contains('hero-title')) {
                    element.innerHTML = `<span class="hero-title">${translations[currentLang][key]}</span>`;
                } else {
                    element.textContent = translations[currentLang][key];
                }
            }
        });
    }

    // Обработчики для кнопок языка
    const langBtns = document.querySelectorAll(".lang-btn");
    langBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            langBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentLang = btn.dataset.lang;
            updateTexts();
        });
    });

    // Простая функция для прелоадера
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }

    // Обработка переключения планов и сумм
    const toggleBtns = document.querySelectorAll(".toggle-btn");
    const cards = document.querySelectorAll(".card");
    const amountBtns = document.querySelectorAll("[data-amount]"); // Кнопки с суммами

    // Функция обновления суммы в карточке мастера
    function updateMasterAmount(amount) {
        const masterCard = document.querySelector(".card.master");
        if (masterCard) {
            const priceElement = masterCard.querySelector("[data-translate='masterPlan']");
            if (priceElement) {
                priceElement.textContent = `План Мастер $${amount}K`;
            }
        }
    }

    // Обработчик для кнопок сумм
    amountBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            // Убираем активный класс у всех кнопок сумм
            amountBtns.forEach((b) => b.classList.remove("active"));
            // Добавляем активный класс нажатой кнопке
            btn.classList.add("active");
            
            // Получаем выбранную сумму
            const amount = btn.dataset.amount;
            // Обновляем сумму в карточке мастера
            updateMasterAmount(amount);
        });
    });

    // Обработчик для переключения планов
    toggleBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            // Убираем активный класс у всех кнопок
            toggleBtns.forEach((b) => b.classList.remove("active"));
            // Добавляем активный класс нажатой кнопке
            btn.classList.add("active");
            
            // Обновляем отображение карточек
            const selectedStep = btn.dataset.step;
            
            cards.forEach((card) => {
                if (selectedStep === 'instant') {
                    // Для мгновенного плана показываем только мастер
                    if (card.classList.contains('master')) {
                        card.style.display = 'block';
                        card.style.margin = '0 auto';
                        
                        // Получаем активную сумму
                        const activeAmount = document.querySelector("[data-amount].active");
                        if (activeAmount) {
                            updateMasterAmount(activeAmount.dataset.amount);
                        }
                    } else {
                        card.style.display = 'none';
                    }
                } else {
                    // Для других планов показываем все карточки
                    card.style.display = 'block';
                    card.style.margin = '0';
                    
                    // Возвращаем оригинальный текст мастер плана
                    if (card.classList.contains('master')) {
                        const priceElement = card.querySelector("[data-translate='masterPlan']");
                        if (priceElement) {
                            priceElement.textContent = translations[currentLang].masterPlan;
                        }
                    }
                }
            });
        });
    });

    // Функционал графика
    function initChart() {
        const ctx = document.getElementById('tradingChart');
        if (!ctx) return;

        let tradingChart;

        // Генерация случайных данных
        function generateData(points) {
            const data = [];
            let value = 1000;
            for (let i = 0; i < points; i++) {
                value += Math.random() * 100 - 50;
                data.push(value);
            }
            return data;
        }

        // Создание графика
        function createChart(period) {
            const labels = {
                day: Array.from({length: 24}, (_, i) => `${i}:00`),
                week: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
                month: Array.from({length: 30}, (_, i) => `${i + 1}`)
            };

            const points = {
                day: 24,
                week: 7,
                month: 30
            };

            const data = generateData(points[period]);

            if (tradingChart) {
                tradingChart.destroy();
            }

            tradingChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels[period],
                    datasets: [{
                        label: 'Trading Volume',
                        data: data,
                        borderColor: '#64ffda',
                        backgroundColor: 'rgba(100, 255, 218, 0.1)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                                color: '#fff'
                            }
                        },
                        x: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                                color: '#fff'
                            }
                        }
                    },
                    interaction: {
                        intersect: false,
                        mode: 'index'
                    },
                    animation: {
                        duration: 1000
                    }
                }
            });
        }

        // Обработчики для кнопок периода
        const chartBtns = document.querySelectorAll('.chart-btn');
        chartBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                chartBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                createChart(btn.dataset.period);
            });
        });

        // Инициализация графика
        createChart('day');
    }

    // Инициализация всех компонентов
    updateTexts();
    
    const activeBtn = document.querySelector('.toggle-btn.active');
    if (activeBtn) {
        activeBtn.click();
    }

    // Инициализация графика после основной инициализации
    initChart();

    // Инициализация активной суммы
    const activeAmount = document.querySelector("[data-amount].active");
    if (activeAmount) {
        updateMasterAmount(activeAmount.dataset.amount);
    }

    // Обработка бургер-меню
    const burgerMenu = document.querySelector('.burger-menu');
    const navWindow = document.querySelector('.transparent-window');

    if (burgerMenu && navWindow) {
        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('active');
            navWindow.classList.toggle('active');
        });

        // Закрывать меню при клике на ссылку
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                burgerMenu.classList.remove('active');
                navWindow.classList.remove('active');
            });
        });
    }

    // Обработчики для кнопок Login и Buy Plan
    const loginBtn = document.querySelector('.login-btn');
    const buyPlanBtn = document.querySelector('.buy-plan-btn');

    // Обработчик для кнопки Login
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'login.html';
    });

    // Обработчик для кнопки Buy Plan
    buyPlanBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'login.html';
    });
});