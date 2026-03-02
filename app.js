const App = {
    currentIndex: 0,
    categories: {
        historia: { name: "História", class: "cat-historia", color: "#4A6741" },
        profecia: { name: "Profecia", class: "cat-profecia", color: "#6A5ACD" },
        sabedoria: { name: "Sabedoria", class: "cat-sabedoria", color: "#4682B4" }
    },

   studies: {
        alianca: {
            title: "A Grande Aliança",
            category: "historia",
            image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=800",
            icon: "🌳",
            author: "Equipe OnJesus",
            date: "Hoje",
            steps: [
                { 
                    type: "intro",
                    icon: "✨", 
                    head: "O Mandato Cultural", 
                    content: [
                        "No princípio, a narrativa bíblica não começa com regras, mas com um projeto de expansão. Deus cria um jardim e coloca o ser humano ali como um parceiro.",
                        "Este mandato envolvia cultivar a terra e extrair o potencial da criação, transformando o jardim em uma cidade que refletisse a glória do Criador."
                    ]
                },
                {
                    type: "quote",
                    text: "A fé não é apenas acreditar em algo, é confiar em Alguém enquanto caminhamos no desconhecido.",
                    author: "Reflexão OnJesus"
                },
                {
                    type: "insight",
                    head: "VOCÊ SABIA?",
                    text: "A palavra hebraica para 'cultivar' (Abad) é a mesma usada para 'adorar'. No projeto original, trabalho e adoração eram a mesma coisa."
                }
            ]
        },
        // NOVO ESTUDO ADICIONADO ABAIXO
        reino: {
            title: "O Reino de Cabeça para Baixo",
            category: "sabedoria",
            image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=800",
            icon: "👑",
            author: "Equipe OnJesus",
            date: "Hoje",
            steps: [
                { 
                    type: "intro",
                    icon: "🕊️", 
                    head: "A Chegada do Rei", 
                    content: [
                        "Diferente dos impérios que o mundo conhecia, Jesus não chega com exércitos, mas com um convite. Ele anuncia um Reino onde os últimos são os primeiros.",
                        "Sua autoridade não vinha da força bruta, mas de uma compaixão que desafiava as estruturas religiosas e políticas da época."
                    ]
                },
                {
                    type: "quote",
                    text: "O Reino de Deus não é um lugar para onde você vai, mas um domínio que você permite que governe o seu coração.",
                    author: "Mestre OnJesus"
                },
                {
                    type: "insight",
                    head: "CONCEITO CHAVE",
                    text: "A palavra 'Evangelho' (Euangelion) era usada em Roma para anunciar a vitória de um Imperador. Jesus a usa para anunciar uma vitória sobre a própria morte."
                },
                { 
                    type: "intro",
                    icon: "🧱", 
                    head: "Pedras Vivas", 
                    content: [
                        "O Reino agora não é feito de templos de pedra, mas de pessoas. Cada seguidor é chamado para ser uma 'mini-representação' dessa nova humanidade."
                    ]
                }
            ]
        },
        Pentateuco: {
            title: "Fé",
            category: "historia",
            image: "",
            icon: "🐦",
            author: "Equipe OnJesus",
            date: "Hoje",
            steps: [
                {
                    type: "intro",
                    icon: "🐦",
                    head: "Fé",
                    content: [
                        "Conteúdo"
                    ]
                }
            ]
        },
    },

    init() {
        this.renderCards();
        this.setupHammer();
        this.checkCookies();
        window.addEventListener('scroll', () => this.handleScroll());
    },

    renderCards() {
        const deck = document.getElementById('deck-container');
        if(!deck) return;
        deck.innerHTML = '';
        
        Object.keys(this.studies).forEach((key, index) => {
            const study = this.studies[key];
            const cat = this.categories[study.category];
            const card = document.createElement('div');
            
            let statusClass = index === 0 ? "card-active" : (index === 1 ? "card-next" : "card-far");

            card.className = `swipe-card ${statusClass} ${cat.class}`;
            card.onclick = () => App.openStudy(key);

            const mediaContent = study.image 
                ? `<img src="${study.image}" alt="${study.title}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;">` 
                : study.icon;

            card.innerHTML = `
                <div class="illustration-box dynamic-bg">${mediaContent}</div>
                <div class="mt-2">
                    <div class="flex items-center gap-2 mb-1">
                        <span class="cat-tag">${cat.name}</span>
                        <span class="text-[9px] font-600 text-gray-400 uppercase tracking-widest border-l border-gray-200 pl-2">
                            ${study.author} • ${study.date}
                        </span>
                    </div>
                    <h3 class="text-2xl font-800 leading-tight">${study.title}</h3>
                </div>
            `;
            deck.appendChild(card);
        });

        const dotContainer = document.getElementById('dot-indicator');
        if(dotContainer) {
            dotContainer.innerHTML = Object.keys(this.studies).map(() => `<div class="w-1.5 h-1.5 rounded-full bg-gray-200 transition-all duration-300"></div>`).join('');
            this.updateDots(); // Garante que o primeiro ponto comece ativo
        }
    },

    openStudy(id) {
        document.getElementById('home-footer').classList.add('hidden');
        const study = this.studies[id];
        const cat = this.categories[study.category];
        const container = document.getElementById('timeline-content');
        
        // Aplica cores dinâmicas
        document.documentElement.style.setProperty('--current-cat-color', cat.color);
        const indicator = document.getElementById('scroll-indicator');
        if(indicator) indicator.className = 'dynamic-color';
        
        document.getElementById('study-title').innerText = study.title;
        container.innerHTML = '';

        const headerInfo = document.createElement('div');
        headerInfo.className = "text-[10px] font-800 text-gray-400 uppercase tracking-[0.2em] mt-4 opacity-60";
        headerInfo.innerText = `Escrito por ${study.author} em ${study.date}`;

        const headerElement = document.querySelector('#study-view header');
        // Remove info antiga se existir para não duplicar
        const oldInfo = headerElement.querySelector('.author-info');
        if(oldInfo) oldInfo.remove();

        headerInfo.classList.add('author-info');
        headerElement.appendChild(headerInfo)

        study.steps.forEach(step => {
            const wrapper = document.createElement('div');
            wrapper.className = 'timeline-item';

            // LÓGICA DE RENDERIZAÇÃO POR TIPO
            if (step.type === "intro") {
                wrapper.innerHTML = `
                    <div class="illustration-box dynamic-bg mb-10 h-72 text-8xl">${step.icon}</div>
                    <div class="reading-content text-left">
                        <h2 class="text-4xl font-800 mb-6 tracking-tight" style="color: var(--current-cat-color)">${step.head}</h2>
                        ${step.content.map(p => `<p class="main-text mb-4 text-gray-600 leading-relaxed">${p}</p>`).join('')}
                    </div>
                `;
            } 
            else if (step.type === "quote") {
                wrapper.innerHTML = `
                    <div class="reading-content">
                        <blockquote class="pull-quote italic border-l-4 pl-6 py-2 my-10 text-2xl font-semibold" style="border-color: var(--current-cat-color); color: var(--current-cat-color)">
                            "${step.text}"
                            <cite class="block text-sm mt-2 text-gray-400 not-italic">— ${step.author || ''}</cite>
                        </blockquote>
                    </div>
                `;
            }
            else if (step.type === "insight") {
                wrapper.innerHTML = `
                    <div class="reading-content">
                        <div class="insight-card p-8 rounded-3xl my-10" style="background-color: #f3f4f6; border-left: 8px solid var(--current-cat-color)">
                            <h4 class="text-xs font-800 uppercase tracking-widest mb-2" style="color: var(--current-cat-color)">${step.head}</h4>
                            <p class="text-md leading-relaxed text-gray-700">${step.text}</p>
                        </div>
                    </div>
                `;
            }

            container.appendChild(wrapper);
        });

        const signature = document.createElement('div');
        signature.className = 'py-20 text-center opacity-0 visible transition-opacity duration-1000';
        signature.innerHTML = `
            <div class="h-px w-12 bg-gray-100 mx-auto mb-8"></div>
            <p class="text-[10px] font-800 text-gray-300 uppercase tracking-[0.3em] mb-2">Soli Deo Gloria</p>
            <p class="text-xs text-gray-400 italic">"Pois d'Ele, por Ele e para Ele são todas as coisas."</p>
        `;
        container.appendChild(signature);

        document.getElementById('home-view').classList.add('hidden');
        document.getElementById('study-view').classList.remove('hidden');
        window.scrollTo(0,0);
        this.initObserver();
    },

    showHome() {
        document.getElementById('study-view').classList.add('hidden');
        document.getElementById('home-view').classList.remove('hidden');
        document.getElementById('home-footer').classList.remove('hidden'); // Garante que o footer volte
        window.scrollTo(0,0);
    },

    setupHammer() {
        const deck = document.getElementById('deck-container');
        if(!deck) return;
        const mc = new Hammer(deck);

        mc.on("swipeleft", () => {
            const cards = document.querySelectorAll('.swipe-card');
            if (this.currentIndex < cards.length - 1) {
                cards[this.currentIndex].classList.add('card-out');
                cards[this.currentIndex].classList.remove('card-active');
                this.currentIndex++;
                this.updateCardStates(cards);
            }
        });

        mc.on("swiperight", () => {
            const cards = document.querySelectorAll('.swipe-card');
            if (this.currentIndex > 0) {
                this.currentIndex--;
                cards[this.currentIndex].classList.remove('card-out');
                this.updateCardStates(cards);
            }
        });
    },

    updateCardStates(cards) {
        cards.forEach((card, i) => {
            card.classList.remove('card-active', 'card-next', 'card-far');
            if (i === this.currentIndex) card.classList.add('card-active');
            else if (i === this.currentIndex + 1) card.classList.add('card-next');
            else if (i > this.currentIndex) card.classList.add('card-far');
        });
        this.updateDots();
    },

    checkCookies() {
        // Se o valor NÃO existir no banco de dados do navegador...
        if (!localStorage.getItem('cookies_accepted')) {
            setTimeout(() => {
                const banner = document.getElementById('cookie-banner');
                if (banner) {
                    console.log("Exibindo banner de cookies..."); // Veja se isso aparece no console (F12)
                    banner.classList.add('show');
                }
            }, 2000); // 2 segundos após carregar
        }
    },

    acceptCookies() {
        localStorage.setItem('cookies_accepted', 'true');
        const banner = document.getElementById('cookie-banner');
        if (banner) banner.classList.remove('show');
    },

    showHome() {
        document.getElementById('study-view').classList.add('hidden');
        document.getElementById('home-view').classList.remove('hidden');
        window.scrollTo(0,0);
    },

    initObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el));
    },

    updateDots() {
        const dots = document.querySelectorAll('#dot-indicator div');
        dots.forEach((dot, i) => {
            if(dot) {
                dot.style.background = (i === this.currentIndex) ? '#4A6741' : '#E5E7EB';
                dot.style.width = (i === this.currentIndex) ? '12px' : '6px';
            }
        });
    },

    handleScroll() {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        const indicator = document.getElementById('scroll-indicator');
        if(indicator) indicator.style.width = scrolled + "%";
    }
};

App.init();