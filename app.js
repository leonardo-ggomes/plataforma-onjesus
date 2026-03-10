const App = {
    currentIndex: 0,
    lastScrollTop: 0,

    categories: {
        historia: { name: "História", color: "#B8F55A", class: "cat-historia" },
        profecia: { name: "Profecia", color: "#6B9FFF", class: "cat-profecia" },
        sabedoria: { name: "Sabedoria", color: "#FFD166", class: "cat-sabedoria" },
        evangelho: { name: "Evangelho", color: "#FF6B6B", class: "cat-evangelho" },
    },

    studies: {
        quando_deus_parece_em_silencio: {
            title: "Quando Deus parece em silêncio",
            category: "sabedoria",
            author: "Asheley Cristiny",
            date: "10 Mar 2026",
            image: "res/img_5.png",
            icon: "📖",
            steps: [
                {
                    type: "intro",
                    image: "",
                    head: "O silêncio que inquieta",
                    content: [
                            "Em algum momento da vida, todos nós passamos por algo parecido: oramos, buscamos a Deus, pedimos direção… e parece que nada acontece.",
                            "As palavras sobem em oração, mas a resposta não vem no tempo que esperamos. As situações continuam difíceis, as dúvidas permanecem, e o coração começa a se perguntar, ainda que em silêncio: \"Será que Deus está me ouvindo?\"",
                            "Esse tipo de momento mexe com a gente. Porque aprendemos que Deus responde orações, que Ele cuida de nós e que está presente em todos os momentos. Então, quando parece que o céu está em silêncio, o coração fica inquieto.",
                            "Mas existe uma verdade importante que precisamos lembrar: o silêncio de Deus não significa que Ele está ausente."
                    ]
                },
                {
                    type: "intro",
                    image: "",
                    head: "Deus também trabalha nos processos silenciosos",
                    content: [
                            "Muitas vezes estamos acostumados a perceber Deus apenas quando algo extraordinário acontece — uma resposta rápida, uma mudança repentina, uma solução clara. Só que Deus também trabalha nos processos silenciosos, nos intervalos entre uma oração e outra, nos momentos em que aparentemente nada está acontecendo.",
                            "É como uma semente plantada na terra. Por um tempo não vemos nada, parece que não mudou coisa alguma. Mas por baixo da terra a vida já começou. A raiz está crescendo, se fortalecendo, se preparando para aparecer.",
                            "Assim também acontece com a nossa fé. Muitas vezes, enquanto achamos que nada está acontecendo, Deus está trabalhando dentro de nós.",
                            "Às vezes, o silêncio é justamente o lugar onde a fé amadurece."
                    ]
                },
                {
                    type: "intro",
                    image: "",
                    head: "Pessoas muito próximas de Deus viveram momentos de silêncio",
                    content: [
                            "O Deus que continua presente",
                            "Bíblia mostra que até pessoas muito próximas de Deus viveram momentos em que sentiram esse silêncio.",
                            "O salmista, por exemplo, em um momento de angústia, fez uma pergunta muito sincera a Deus:"
                    ]
                },
                {
                    type: "quote",
                    author: "Salmos 13:1",
                    text: "\"Até quando, Senhor? Para sempre te esquecerás de mim? Até quando esconderás de mim o teu rosto?\""
                },
                {
                    type: "intro",
                    image: "",
                    head: "Quando escolhemos confiar mesmo sem entender",
                    content: [
                            "Essas palavras mostram algo muito humano. Até quem ama a Deus pode sentir, em algum momento, que Ele está distante ou que não está respondendo.",
                            "Mas a mesma Bíblia que registra essas perguntas também mostra uma verdade constante: Deus nunca abandona aqueles que são seus.",
                            "- Mesmo quando não percebemos, Ele continua cuidando.",
                            "- Mesmo quando não entendemos, Ele continua guiando.",
                            "- Mesmo quando parece silêncio, Ele continua trabalhando.",
                            "Às vezes o silêncio de Deus não é indiferença — é preparação.",
                            "Outras vezes é direção que ainda não conseguimos enxergar.",
                            "E em muitos momentos é um convite para confiar mais profundamente.",
                            "A fé verdadeira não nasce apenas quando tudo faz sentido. Muitas vezes ela cresce quando escolhemos confiar mesmo sem entender completamente o que Deus está fazendo.."
                    ]
                },
                {
                    type: "intro",
                    image: "",
                    head: "No silêncio que aprendemos a reconhecer a presença",
                    content: [
                            "Aprendendo a confiar no silêncio",
                            "Talvez hoje você esteja vivendo exatamente isso. Você ora, busca respostas, pede direção… mas tudo parece quieto.",
                            "Se esse é o seu momento, lembre-se de algo muito importante: Deus não se torna menos presente apenas porque está em silêncio.",
                            "O silêncio de Deus não é um vazio. Muitas vezes é um espaço onde Ele molda o nosso coração, fortalece a nossa confiança e nos ensina a depender mais dEle do que das circunstâncias.",
                            "- Algumas respostas chegam rapidamente.",
                            "- Outras chegam com o tempo.",
                            "- E algumas vêm de formas diferentes daquilo que imaginávamos.",
                            "Mas Deus continua fiel em todos esses momentos.",
                            "- Talvez hoje não seja o dia de entender tudo.",
                            "- Talvez seja apenas o dia de continuar confiando.",
                            "Porque mesmo quando o céu parece silencioso, Deus continua ouvindo.",
                            "E muitas vezes é justamente no silêncio que aprendemos a reconhecer a presença de Deus de forma ainda mais profunda."
                    ]
                },
                {
                    type: "quote",
                    author: "Salmos 46:10",
                    text: "Aquietai-vos e saibam que eu sou Deus"
                },
            ],
        },
         isso_pode_estar_destruindo_tudo_que_deus: {
            title: "Isso pode estar destruindo tudo que Deus construiu em você",
            category: "sabedoria",
            author: "Josué Souza",
            date: "06 Mar 2026",
            image: "res/img_4.png",
            icon: "📖",
            steps: [
                {
                    type: "intro",
                    image: "",
                    head: "Você já venceu algo na sua vida e voltou para ver como estava aquilo que você venceu?",
                    content: [
                        "Ele tinha TUDO — E jogou FORA!",
                        "Imagina ser escolhido por Deus antes mesmo de nascer.",
                        "Sem você pedir. Sem você merecer. Só pela graça! Esse era Sansão! Um jovem marcado desde o ventre da mãe, cheio de propósito, cheio de força, com uma missão clara: libertar o povo de Deus.",
                        "Mas Sansão tinha um problema que muita gente hoje também tem:",
                        "\"Ele queria as bênçãos de Deus sem honrar o pacto com Deus\""
                    ]
                },
                {
                    type: "quote",
                    author: "Juízes 14:5-9",
                    text: "⁵ Desceu, pois, Sansão com seu pai e com sua mãe a Timnate; e, chegando às vinhas de Timnate eis que um filho de leão, rugindo, lhe saiu ao encontro. ⁶ Então o Espírito do Senhor se apossou dele tão poderosamente que despedaçou o leão, como quem despedaça um cabrito, sem ter nada na sua mão; porém nem a seu pai nem a sua mãe deu a saber o que tinha feito.⁷ E desceu, e falou àquela mulher, e ela agradou aos olhos de Sansão.⁸ E depois de alguns dias voltou ele para tomá - la; e, apartando - se do caminho para ver o corpo do leão, eis que no corpo morto do leão havia um enxame de abelhas com mel.⁹ E tomou - o nas suas mãos, e foi andando e comendo dele; e foi a seu pai e a sua mãe, e deu - lhes do mel, e comeram; porém não lhes deu a saber que tomara o mel do corpo do leão."
                },
                {
                    type: "intro",
                    image: "",
                    head: "Foi escolhido",
                    content: [
                        "Israel tinha feito de novo o que não deveria fazer.",
                        "Abandonou o Senhor. Serviu outros deuses. E o resultado? 40 anos dominados pelos filisteus. Mas Deus — fiel como sempre — levantou um juiz para libertar o povo.",
                        "Desta vez foi Sansão, separado como Nazireu (Números 6), um homem consagrado ao Senhor por voto sagrado.A força sobrenatural que ele carregava não era dele.",
                        "Era do pacto. Era do Espírito."
                    ]
                },
                {
                    type: "intro",
                    image: "",
                    head: "Era daquele tipo de jovem que a gente conhece",
                    content: [
                        "Sansão era daquele tipo de jovem que a gente conhece — talvez seja você, talvez seja eu:",
                        "- Queria tudo que parecia bom;",
                        "- Tomava suas próprias decisões sem pensar nas consequências;",
                        "- Não dava ouvidos aos pais;",
                        "-  Não valorizava o compromisso que Deus tinha com ele.",
                        "E no caminho pra Timna — território inimigo, onde ele foi atrás de uma mulher dos filisteus que Deus não aprovava — um filhote de leão veio rugindo na direção dele . O Espírito do Senhor desceu sobre ele e ele rasgou o leão como se fosse um cabrito.Vitória total. Sem esforço. Puro poder de Deus."
                    ]
                },
                {
                    type: "intro",
                    image: "",
                    head: "Só vou olhar. Não tem problema nenhum",
                    content: [
                        "Dias depois, no mesmo caminho, Sansão se desviou da rota. Só pra dar uma olhadinha. Só pra ver como estava o corpo daquele leão que ele já tinha vencido.",
                        "\"Só vou olhar. Não tem problema nenhum.\"",
                        "Parece inocente, né? Mas chegando lá... tinha mel.",
                        "E ele comeu. E levou pra casa. E não contou de onde tirou.E assim — em silêncio, com um simples desvio — ele quebrou o pacto com Deus."
                    ]
                },
                {
                    type: "intro",
                    image: "",
                    head: "Nosso maior inimigo não está lá fora. Está dentro de nós!",
                    content: [
                        "Quantas pessoas estão sendo derrotadas não pelo diabo, não pelos inimigos, mas por elas mesmas?",
                        "\"Nosso maior inimigo não está lá fora. Está dentro de nós\" .",
                        "Se você já venceu algo na sua vida — uma relação tóxica, um vício, um pecado, uma fase destruída — não se desvie do caminho pra ver como tá isso.",
                        "Porque pode ser que quando você chegar lá, você encontre mel.",
                        "E o mel vai parecer gostoso.",
                        "E você vai comer.",
                        "E vai quebrar seu pacto com Deus."
                    ]
                },
                {
                    type: "intro",
                    image: "",
                    head: "Não foi você que escolheu Deus",
                    content: [
                        "Você sabe o que é mais impactante em tudo isso?",
                        "Não foi você que escolheu Deus."
                    ]
                },
                {
                    type: "quote",
                    author: "João 15:16",
                    text: "Não fostes vós que me escolhestes a mim; mas eu vos escolhi a vós, e vos designei para que vades e deis fruto..."
                },
                {
                    type: "intro",
                    image: "",
                    head: "Vai muito além dos prazeres momentâneos",
                    content: [
                        "Ele te escolheu. Antes de você nascer. Antes de você merecer. Antes de qualquer coisa.E se Ele te escolheu, Ele tem um propósito pra sua vida que vai muito além dos prazeres momentâneos que o mundo te oferece."
                    ]
                }
            ],
        },
        pecado: {
            title: "Lutando contra o pecado?",
            category: "sabedoria",
            author: "Leonardo Garcia",
            date: "03 Mar 2026",
            image: "/res/img_1.png",
            icon: "✝️",
            steps: [
                {
                    type: "intro",
                    image: "/res/img_1.png",
                    head: "A falsa sensação",
                    content: [
                        "Vivemos dias em que falar sobre pecado parece inadequado. O termo soa pesado, desconfortável, quase ofensivo. Preferimos palavras mais suaves, conceitos mais aceitáveis. No entanto, ignorar o pecado não o faz desaparecer — apenas o torna mais silencioso e mais perigoso.",
                        "O pecado não começa como uma grande queda. Ele nasce pequeno, quase imperceptível. Uma escolha aparentemente inofensiva. Um pensamento alimentado em segredo. Uma atitude justificada pela emoção do momento. Aos poucos, aquilo que parecia controlável passa a nos controlar.",
                        "Ele promete prazer, mas entrega vazio. Promete liberdade, mas produz prisão. Promete autonomia, mas nos afasta da verdadeira vida.",
                        "A dor mais profunda do pecado não está apenas nas consequências externas. Está na distância que ele cria entre nós e Deus. É uma separação sutil, mas real. A oração já não flui com a mesma leveza. A consciência pesa. A alegria espiritual diminui.",
                        "Mas aqui está o ponto central do Evangelho: Deus nunca nos abandonou à própria condição."
                    ]
                },
                {
                    type: "intro",
                    image: "/res/img_2.png",
                    head: "Uma esperança",
                    content: [
                        "Antes mesmo que pedíssemos ajuda, Ele já havia providenciado redenção. Jesus Cristo não veio apenas para melhorar comportamentos — Ele veio para restaurar relacionamentos.",
                        "Na cruz, não houve apenas dor física. Houve amor intencional. Houve reconciliação sendo construída. Houve um caminho sendo aberto de volta ao Pai.",
                        "O pecado nos afasta, mas o arrependimento nos aproxima.",
                        "Arrependimento não é culpa permanente; é mudança de direção. É reconhecer que o caminho escolhido não nos levou à vida e decidir retornar Àquele que sempre nos esperou."
                    ]
                },
                {
                    type: "intro",
                    image: "/res/img_3.png",
                    head: "A resposta",
                    content: [
                        "Talvez hoje você perceba áreas da sua vida onde o pecado tem sussurrado mentiras. Talvez exista um peso que você carrega em silêncio. Saiba que a graça é maior do que qualquer falha.",
                        "Em Cristo, não há condenação para quem decide voltar. Há restauração. Há perdão. Há recomeço.",
                        "A pergunta não é se Deus está disposto a perdoar. A cruz já respondeu isso.",
                        "A pergunta é: você está disposto a responder?",
                        "Hoje pode ser o dia de retornar. Hoje pode ser o dia de experimentar novamente a alegria de estar perto de Deus. Ele continua chamando."
                    ]
                },
                {
                    type: "quote",
                    author: "Romanos 3:23-26 NVI",
                    text: "pois todos pecaram e estão destituídos da glória de Deus, sendo justificados gratuitamente por sua graça, por meio da redenção que há em Cristo Jesus."
                },
            ]
        }
    },

    init() {
        this.renderCards();
        this.setupHammer();
        this.checkCookies();
        window.addEventListener('scroll', () => {
            this.handleScroll();
            this.handleNavScroll();
        }, { passive: true });
    },

    renderCards() {
        const deck = document.getElementById('deck-container');
        if (!deck) return;
        deck.innerHTML = '';

        const keys = Object.keys(this.studies);
        keys.forEach((key, index) => {
            const study = this.studies[key];
            const cat = this.categories[study.category];
            const card = document.createElement('div');

            const rel = index - this.currentIndex;
            let statusClass = rel === 0 ? 'card-active' : (rel === 1 ? 'card-next' : rel === 2 ? 'card-far' : 'card-hidden');
            card.className = `swipe-card ${statusClass} ${cat.class}`;
            card.onclick = () => App.openStudy(key);

            const mediaContent = study.image
                ? `<img src="${study.image}" alt="${study.title}" loading="lazy" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;">`
                : `<span style="font-size:3.5rem;">${study.icon}</span>`;

            card.innerHTML = `
                <div class="card-media">${mediaContent}</div>
                <div>
                    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
                        <span class="card-cat-tag">${cat.name}</span>
                    </div>
                    <h3 class="card-title">${study.title}</h3>
                    <p class="card-author-line" style="margin-top:8px;">${study.author} &nbsp;·&nbsp; ${study.date}</p>
                </div>
            `;
            deck.appendChild(card);
        });

        // Dots
        const dotContainer = document.getElementById('dot-indicator');
        if (dotContainer) {
            dotContainer.innerHTML = keys.map(() => `<div class="dot"></div>`).join('');
            this.updateDots();
        }
    },

    openStudy(id) {
        const study = this.studies[id];
        if (!study) return;
        const cat = this.categories[study.category];

        // Hide footer
        const footer = document.getElementById('home-footer');
        if (footer) footer.classList.add('hidden');

        // Set dynamic color
        document.documentElement.style.setProperty('--current-cat-color', cat.color);

        // Update hero
        document.getElementById('study-title').textContent = study.title;
        const eyebrow = document.getElementById('study-eyebrow');
        if (eyebrow) eyebrow.textContent = cat.name;
        const metaAuthor = document.getElementById('meta-author');
        const metaDate = document.getElementById('meta-date');
        if (metaAuthor) metaAuthor.textContent = study.author;
        if (metaDate) metaDate.textContent = study.date;

        // Update hero accent color
        const heroEyebrow = document.getElementById('study-eyebrow');
        if (heroEyebrow) heroEyebrow.style.color = cat.color;

        // Build timeline
        const container = document.getElementById('timeline-content');
        container.innerHTML = '';

        study.steps.forEach((step, idx) => {
            const wrapper = document.createElement('div');
            wrapper.className = 'timeline-item';

            if (step.type === 'intro') {
                const loaderId = `sk-${Math.random().toString(36).substr(2, 7)}`;
                const imgBlock = step.image
                    ? `<div class="content-image-block">
                            <div id="${loaderId}" class="skeleton" style="position:absolute;inset:0;border-radius:20px;"></div>
                            <img src="${step.image}" loading="lazy"
                                 onload="this.classList.add('loaded'); const el=document.getElementById('${loaderId}'); if(el) el.style.display='none';"
                                 alt="${step.head}">
                       </div>`
                    : '';

                wrapper.innerHTML = `
                    ${imgBlock}
                    <div class="section-header">
                        <p class="section-number">
                            <span>Parte ${String(idx + 1).padStart(2, '0')}</span>
                        </p>
                        <h2 class="section-title" style="color: ${cat.color}">${step.head}</h2>
                    </div>
                    <div class="reading-content">
                        ${step.content.map(p => `<p>${p}</p>`).join('')}
                    </div>
                    ${idx < study.steps.length - 1 ? '<div class="chapter-divider"><span>✦</span></div>' : ''}
                `;
            }
            else if (step.type === 'quote') {
                wrapper.innerHTML = `
                    <div class="pull-quote">
                        <div class="pull-quote-accent" style="background: ${cat.color};"></div>
                        <p class="pull-quote-text">"${step.text}"</p>
                        <p class="pull-quote-ref">${step.author || ''}</p>
                    </div>
                `;
            }

            container.appendChild(wrapper);
        });

        document.getElementById('home-view').classList.add('hidden');
        document.getElementById('study-view').classList.remove('hidden');
        window.scrollTo(0, 0);
        this.initObserver();
    },

    showHome() {
        document.getElementById('study-view').classList.add('hidden');
        document.getElementById('home-view').classList.remove('hidden');
        const footer = document.getElementById('home-footer');
        if (footer) footer.classList.remove('hidden');
        window.scrollTo(0, 0);
    },

    handleNavScroll() {
        const nav = document.querySelector('.nav-glass');
        if (!nav) return;
        const st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > 50) {
            nav.style.transform = st > this.lastScrollTop ? 'translateY(-100%)' : 'translateY(0)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        this.lastScrollTop = st <= 0 ? 0 : st;
    },

    setupHammer() {
        const deck = document.getElementById('deck-container');
        if (!deck || typeof Hammer === 'undefined') return;
        const mc = new Hammer(deck);
        mc.on('swipeleft', () => {
            const cards = document.querySelectorAll('.swipe-card');
            if (this.currentIndex < cards.length - 1) {
                cards[this.currentIndex].classList.add('card-out');
                cards[this.currentIndex].classList.remove('card-active');
                this.currentIndex++;
                this.updateCardStates(cards);
            }
        });
        mc.on('swiperight', () => {
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
            card.classList.remove('card-active', 'card-next', 'card-far', 'card-hidden');
            const rel = i - this.currentIndex;
            if (rel === 0) card.classList.add('card-active');
            else if (rel === 1) card.classList.add('card-next');
            else if (rel === 2) card.classList.add('card-far');
            else if (rel > 2) card.classList.add('card-hidden');
        });
        this.updateDots();
    },

    updateDots() {
        const dots = document.querySelectorAll('#dot-indicator .dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === this.currentIndex);
        });
    },

    checkCookies() {
        if (!localStorage.getItem('cookies_accepted')) {
            setTimeout(() => {
                const banner = document.getElementById('cookie-banner');
                if (banner) banner.classList.add('show');
            }, 2500);
        }
    },

    acceptCookies() {
        localStorage.setItem('cookies_accepted', 'true');
        const banner = document.getElementById('cookie-banner');
        if (banner) banner.classList.remove('show');
    },

    initObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.08 });
        document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el));
    },

    handleScroll() {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
        const indicator = document.getElementById('scroll-indicator');
        if (indicator) indicator.style.width = scrolled + '%';
    }
};

App.init();