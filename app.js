const App = {
    currentIndex: 0,
    categories: {
        historia: { name: "História", class: "cat-historia", color: "#4A6741" },
        profecia: { name: "Profecia", class: "cat-profecia", color: "#6A5ACD" },
        sabedoria: { name: "Sabedoria", class: "cat-sabedoria", color: "#4682B4" }
    },

    studies: {
        pecado: {
            title: "Não consigo vencer o pecado?",
            category: "sabedoria",
            author: "Leonardo Garcia",
            date: "03 Mar 2026",
            image: "/res/img_1.png",
            icon: "✝️",
            steps: [
                {
                    type: "intro",
                    image:"/res/img_1.png",
                    icon: "",
                    head: "A falsa sensação",
                    content: [
                        "Vivemos dias em que falar sobre pecado parece inadequado. O termo soa pesado, desconfortável, quase ofensivo. Preferimos palavras mais suaves, conceitos mais aceitáveis. No entanto, ignorar o pecado não o faz desaparecer — apenas o torna mais silencioso e mais perigoso.",
                        "O pecado não começa como uma grande queda. Ele nasce pequeno, quase imperceptível. Uma escolha aparentemente inofensiva. Um pensamento alimentado em segredo. Uma atitude justificada pela emoção do momento. Aos poucos, aquilo que parecia controlável passa a nos controlar.",
                        "Ele promete prazer, mas entrega vazio. Promete liberdade, mas produz prisão. Promete autonomia, mas nos afasta da verdadeira vida.",
                        "A dor mais profunda do pecado não está apenas nas consequências externas. Está na distância que ele cria entre nós e Deus. É uma separação sutil, mas real. A oração já não flui com a mesma leveza. A consciência pesa. A alegria espiritual diminui. E, ainda que continuemos vivendo normalmente por fora, algo dentro de nós sabe que não estamos inteiros.",
                        "Mas aqui está o ponto central do Evangelho: Deus nunca nos abandonou à própria condição."
                    ]
                },
                {
                    type: "intro",
                    image: "/res/img_2.png",
                    icon: "🕊️",
                    head: "Um esperança",
                    content: [
                        "Antes mesmo que pedíssemos ajuda, Ele já havia providenciado redenção. Jesus Cristo não veio apenas para melhorar comportamentos — Ele veio para restaurar relacionamentos. Seu sacrifício não foi simbólico; foi substitutivo. Ele assumiu aquilo que nos condenava para que pudéssemos receber aquilo que não merecíamos: graça.",
                        "Na cruz, não houve apenas dor física. Houve amor intencional. Houve reconciliação sendo construída. Houve um caminho sendo aberto de volta ao Pai.",
                        "O pecado nos afasta, mas o arrependimento nos aproxima.",
                        "Arrependimento não é culpa permanente; é mudança de direção. É reconhecer que o caminho escolhido não nos levou à vida e decidir retornar Àquele que sempre nos esperou. Deus não recebe o arrependido com acusação, mas com braços abertos."
                    ]
                },
                {
                    type: "intro",
                    image: "/res/img_3.png",
                    icon: "",
                    head: "A resposta",
                    content: [
                        "Talvez hoje você perceba áreas da sua vida onde o pecado tem sussurrado mentiras. Talvez exista um peso que você carrega em silêncio. Saiba que a graça é maior do que qualquer falha.",
                        "Em Cristo, não há condenação para quem decide voltar. Há restauração. Há perdão. Há recomeço.",
                        "A pergunta não é se Deus está disposto a perdoar. A cruz já respondeu isso.",
                        "A pergunta é: você está disposto a responder?",
                        "Hoje pode ser o dia de retornar. Hoje pode ser o dia de experimentar novamente a alegria de estar perto de Deus.",
                        "Ele continua chamando."
                    ]
                },
                {
                    type: "quote",
                    icon: "📖",
                    author: "Romanos 3:23-26 NVI",
                    text: [
                "pois todos pecaram e estão destituídos da glória de Deus, sendo justificados gratuitamente por sua graça, por meio da redenção que há em Cristo Jesus. Deus o ofereceu como sacrifício para expiação pelo seu sangue, para ser recebido pela fé, de forma a demonstrar sua justiça. Isto porque, na sua tolerância, deixou impunes os pecados anteriormente cometidos. Todavia, no presente, Deus demonstrou a sua justiça, a fim de ser justo e justificador daquele que tem fé em Jesus."
                    ]
                },
    
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
        if (!deck) return;
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
        if (dotContainer) {
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
        if (indicator) indicator.className = 'dynamic-color';

        document.getElementById('study-title').innerText = study.title;
        container.innerHTML = '';

        const headerInfo = document.createElement('div');
        headerInfo.className = "text-[10px] font-800 text-gray-400 uppercase tracking-[0.2em] mt-4 opacity-60";
        headerInfo.innerText = `Escrito por ${study.author} em ${study.date}`;

        const headerElement = document.querySelector('#study-view header');
        // Remove info antiga se existir para não duplicar
        const oldInfo = headerElement.querySelector('.author-info');
        if (oldInfo) oldInfo.remove();

        headerInfo.classList.add('author-info');
        headerElement.appendChild(headerInfo)

       
        
        study.steps.forEach(step => {
            const wrapper = document.createElement('div');
            wrapper.className = 'timeline-item';

             const stepMedia = step.image 
            ? `<img src="${step.image}" class="w-full h-full object-cover">` 
            : step.icon;

            // LÓGICA DE RENDERIZAÇÃO POR TIPO
            if (step.type === "intro") {
                wrapper.innerHTML = `
                    <div class="illustration-box dynamic-bg mb-10 h-72 text-8xl flex items-center justify-center overflow-hidden rounded-3xl">
                        ${stepMedia}
                    </div>
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
        window.scrollTo(0, 0);
        this.initObserver();
    },

    showHome() {
        document.getElementById('study-view').classList.add('hidden');
        document.getElementById('home-view').classList.remove('hidden');
        document.getElementById('home-footer').classList.remove('hidden'); // Garante que o footer volte
        window.scrollTo(0, 0);
    },

    setupHammer() {
        const deck = document.getElementById('deck-container');
        if (!deck) return;
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
        window.scrollTo(0, 0);
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
            if (dot) {
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
        if (indicator) indicator.style.width = scrolled + "%";
    }
};

App.init();