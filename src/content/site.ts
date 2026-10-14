// Todo o texto do site mora aqui. Para trocar um link ou uma frase, mexa só neste arquivo.

export type Lang = "pt" | "en";

// Links públicos. Deixe `null` o que ainda não existe: o botão some sozinho.
export const links = {
  email: "miguel@awsolutions.work",
  penumbra: null as string | null,
  pedraShaders: null as string | null,
  pedraAventura: null as string | null,
  lagoinha: "https://lagoinha.expo.app",
  github: null as string | null,
};

type Lane = { id: "code" | "worlds" | "music" | "hands"; label: string; note: string };
type Stat = { value: string; label: string };
type Shot = { src: string; caption: string };
type ClientCase = {
  name: string;
  kind: string;
  summary: string;
  stack: string;
  status: string;
  href?: string | null;
};
type Hobby = { title: string; text: string };

export type Dict = {
  meta: { title: string; description: string };
  nav: { worlds: string; code: string; offscreen: string; contact: string; switchTo: string; switchHref: string };
  hero: {
    kicker: string;
    lead: string;
    sub: string;
    lanes: Lane[];
    cta: string;
  };
  worlds: {
    index: string;
    title: string;
    intro: string;
    penumbra: {
      tag: string;
      name: string;
      pitch: string;
      body: string;
      bullets: string[];
      stats: Stat[];
      rating: string;
      shots: Shot[];
      cta: string;
    };
    shaders: {
      tag: string;
      name: string;
      pitch: string;
      body: string;
      stats: Stat[];
      shots: Shot[];
      hint: string;
      cta: string;
    };
    aventura: {
      tag: string;
      name: string;
      pitch: string;
      body: string;
      stats: Stat[];
      shots: Shot[];
      cta: string;
    };
    boost: { tag: string; name: string; body: string };
    soon: string;
    rule: string;
  };
  code: {
    index: string;
    title: string;
    intro: string;
    columns: { project: string; what: string; stack: string; status: string };
    cases: ClientCase[];
    howTitle: string;
    how: string[];
  };
  offscreen: {
    index: string;
    title: string;
    intro: string;
    hobbies: Hobby[];
  };
  contact: {
    index: string;
    title: string;
    body: string;
    emailLabel: string;
    company: string;
  };
  footer: { made: string; faith: string };
};

const pt: Dict = {
  meta: {
    title: "Miguel Paula · código, mods e piano",
    description:
      "Portfólio do Miguel Paula, 14 anos: apps e sites para clientes pela AW-Solutions e mods de Minecraft publicados (Penumbra, Pedra Shaders, Pedra Aventura).",
  },
  nav: { worlds: "Mods", code: "Clientes", offscreen: "Fora da tela", contact: "Contato", switchTo: "EN", switchHref: "/en" },
  hero: {
    kicker: "Portfólio · 2026",
    lead: "Miguel Paula",
    sub: "Tenho 14 anos e faço várias coisas ao mesmo tempo. Programo apps e sites para clientes, crio mods de Minecraft que estão publicados e, no tempo livre, toco piano.",
    lanes: [
      { id: "code", label: "Código", note: "apps e sites para clientes" },
      { id: "worlds", label: "Mundos", note: "mods de Minecraft publicados" },
      { id: "music", label: "Música", note: "piano" },
      { id: "hands", label: "Mãos", note: "impressão 3D, cubo mágico, kung-fu" },
    ],
    cta: "Ver os projetos",
  },
  worlds: {
    index: "01",
    title: "Mundos",
    intro:
      "Mods de Minecraft (Java 1.21.1, Fabric). Comecei como passatempo e virou o lugar onde eu mais aprendo: shaders em GLSL, Java, áudio, animação, roteiro e o trabalho chato de deixar tudo leve.",
    penumbra: {
      tag: "Mod de terror · Capítulo 1 publicado",
      name: "Penumbra",
      pitch: "O medo vem do escuro, do som e do que você quase vê.",
      body:
        "Penumbra transforma o Minecraft numa fita VHS achada numa TV de tubo. Não tem música: no lugar dela entram sons que mudam conforme o lugar onde você está. A sanidade cai no escuro, uma figura aparece por meio segundo no canto do olho, e uma história com começo, meio e fim vai se revelando aos poucos. Ideia, história, personagens e vozes são meus.",
      bullets: [
        "Shader de TV CRT + VHS em duas passadas (~0,3 ms por quadro), com três intensidades",
        "Sons por contexto: 64 regras que montam cenas com fade e cross-fade",
        "Criaturas com esqueleto articulado, cutscenes com câmera dirigida e legendas",
        "Dificuldade por mundo (Leve, Normal, Pesadelo) e opções de acessibilidade",
      ],
      stats: [
        { value: "3", label: "capítulos escritos" },
        { value: "850+", label: "testes automatizados" },
        { value: "64", label: "regras de som" },
      ],
      rating: "Indicado para maiores de 14 anos",
      shots: [
        { src: "/img/penumbra/03-floresta-a-noite-vhs.webp", caption: "Floresta à noite, com o filtro de fita" },
        { src: "/img/penumbra/01-relance-na-floresta.webp", caption: "Relance entre as árvores" },
        { src: "/img/penumbra/02-rastejante-de-perto.webp", caption: "O que rasteja" },
      ],
      cta: "Baixar o Penumbra",
    },
    shaders: {
      tag: "Shaderpack · v1.1.1",
      name: "Pedra Shaders",
      pitch: "Realismo vivo, nunca escuro.",
      body:
        "Um shaderpack escrito do zero: sombras suaves, água que reflete o céu, nuvens volumétricas, neblina, arco-íris depois da chuva e noites estreladas que continuam enxergáveis. Seis perfis de qualidade, do Mínimo ao Pedra Max, pensados para rodar bem até num Mac.",
      stats: [
        { value: "6", label: "perfis de qualidade" },
        { value: "100%", label: "código próprio" },
        { value: "Mac", label: "roda liso" },
      ],
      shots: [
        { src: "/img/shaders/02-por-do-sol.webp", caption: "Pôr do sol" },
        { src: "/img/shaders/06-neblina-da-madrugada.webp", caption: "Neblina da madrugada" },
        { src: "/img/shaders/07-arco-iris-depois-da-chuva.webp", caption: "Arco-íris depois da chuva" },
        { src: "/img/shaders/03-mar-azul.webp", caption: "Mar azul" },
        { src: "/img/shaders/04-mar-no-fim-da-tarde.webp", caption: "Mar no fim da tarde" },
        { src: "/img/shaders/05-noite-estrelada.webp", caption: "Noite estrelada" },
        { src: "/img/shaders/08-chuva-na-vila-com-pocas.webp", caption: "Chuva na vila, com poças" },
        { src: "/img/shaders/10-nether-lago-de-lava.webp", caption: "Nether, lago de lava" },
      ],
      hint: "arraste para o lado",
      cta: "Baixar o Pedra Shaders",
    },
    aventura: {
      tag: "Modpack · 0.1.0 beta",
      name: "Pedra Aventura",
      pitch: "Aventura grande, sem terror, rodando leve.",
      body:
        "Mais de 200 mods escolhidos e configurados para conversar entre si: dungeons e chefes, RPG e magia, fazenda e decoração, dimensões novas. Vem com o Pedra Shaders ligado e com o Pedra Boost, meu painel de desempenho, que abre no F7. Menus e tela de carregamento próprios, e nenhum atalho de teclado em conflito.",
      stats: [
        { value: "203", label: "itens no pack" },
        { value: "20", label: "atalhos remapeados" },
        { value: "0", label: "conflitos de tecla" },
      ],
      shots: [
        { src: "/img/aventura/acab2-11-paisagem.webp", caption: "Jogando com o Pedra Shaders no perfil Médio" },
        { src: "/img/aventura/acab2-05-pedraboost.webp", caption: "Painel do Pedra Boost (F7)" },
        { src: "/img/aventura/acab2-01-carregamento-inicio.webp", caption: "Tela de carregamento própria" },
      ],
      cta: "Baixar o Pedra Aventura",
    },
    boost: {
      tag: "Em desenvolvimento",
      name: "Pedra Boost",
      body: "Mod de otimização com uma regra só: ganhar FPS sem tirar nada da tela. Tudo tem um botão no painel e nada muda escondido do jogador.",
    },
    soon: "link em breve",
    rule: "Regra que sigo em todos: código e arte originais, nada copiado de outros mods nem texturas da Mojang.",
  },
  code: {
    index: "02",
    title: "Código",
    intro:
      "Pela AW-Solutions eu faço apps e sites para empresas e igrejas. Na maior parte, Flutter no mobile e JavaScript na web, sempre ligados a um backend de verdade.",
    columns: { project: "Projeto", what: "O que é", stack: "Stack", status: "Status" },
    cases: [
      {
        name: "Lagoinha",
        kind: "Plataforma web da igreja",
        summary:
          "Painel administrativo, área pública e app instalável (PWA) num só lugar. Quatro níveis de acesso com 16 permissões, vários idiomas e notificações inteligentes que funcionam sem servidor próprio.",
        stack: "JavaScript · Firebase · Tailwind",
        status: "No ar",
        href: links.lagoinha,
      },
      {
        name: "Beduk Educação",
        kind: "App de cursos online",
        summary:
          "Plataforma de ensino para alunos: cursos em vídeo, aulas ao vivo pelo Zoom, fórum e download para assistir offline. Um código só para iOS, Android, Web, macOS, Windows e Linux.",
        stack: "Flutter · Dart · API REST",
        status: "Entregue",
      },
      {
        name: "Estofados Buriti",
        kind: "App de e-commerce",
        summary:
          "Loja de móveis no celular, integrada ao WooCommerce: vários vendedores, mais de oito formas de pagamento e ponto de venda.",
        stack: "Flutter · WooCommerce · Firebase",
        status: "Entregue",
      },
      {
        name: "Diamond Chair",
        kind: "App de e-commerce",
        summary:
          "Mesma base do Buriti, adaptada para outra marca: catálogo, carrinho, pagamentos e mapa de lojas.",
        stack: "Flutter · WooCommerce · Firebase",
        status: "Entregue",
      },
    ],
    howTitle: "Como eu trabalho",
    how: [
      "Uso o Claude (IA) como parceiro de código, e falo isso abertamente. Eu decido o que construir e por quê, leio o que sai, testo e respondo pelo resultado.",
      "Gosto de projeto organizado: planejamento por fases, testes automatizados e nada de senha no código.",
    ],
  },
  offscreen: {
    index: "03",
    title: "Fora da tela",
    intro: "Nem tudo é tela. Essas coisas me ensinam paciência, que é o que mais uso quando estou programando.",
    hobbies: [
      { title: "Piano", text: "Meu passatempo favorito, ao lado dos mods. Toco por gosto, não por obrigação." },
      { title: "Impressão 3D", text: "Modelo e imprimo peças em casa. Errar a primeira camada ensina mais que qualquer tutorial." },
      { title: "Cubo mágico", text: "Algoritmos que cabem na mão." },
      { title: "Kung-Fu", text: "Faixa-marrom. Disciplina que vem junto pro resto." },
    ],
  },
  contact: {
    index: "04",
    title: "Vamos conversar",
    body: "Tem um app, um site ou uma ideia maluca de mod? Me manda um e-mail que eu respondo.",
    emailLabel: "E-mail",
    company: "Projetos de cliente saem pela AW-Solutions.",
  },
  footer: { made: "Feito por Miguel Paula, com Next.js.", faith: "Criado para criar." },
};

const en: Dict = {
  meta: {
    title: "Miguel Paula · code, mods and piano",
    description:
      "Portfolio of Miguel Paula, 14: apps and websites for clients through AW-Solutions, and published Minecraft mods (Penumbra, Pedra Shaders, Pedra Aventura).",
  },
  nav: { worlds: "Mods", code: "Clients", offscreen: "Off screen", contact: "Contact", switchTo: "PT", switchHref: "/" },
  hero: {
    kicker: "Portfolio · 2026",
    lead: "Miguel Paula",
    sub: "I'm 14 and I do a lot of things at once. I build apps and websites for clients, I make Minecraft mods that are out in the world, and in my free time I play the piano.",
    lanes: [
      { id: "code", label: "Code", note: "apps and websites for clients" },
      { id: "worlds", label: "Worlds", note: "published Minecraft mods" },
      { id: "music", label: "Music", note: "piano" },
      { id: "hands", label: "Hands", note: "3D printing, Rubik's cube, kung fu" },
    ],
    cta: "See the work",
  },
  worlds: {
    index: "01",
    title: "Worlds",
    intro:
      "Minecraft mods (Java 1.21.1, Fabric). It started as a hobby and became the place where I learn the most: GLSL shaders, Java, audio, animation, storytelling, and the unglamorous work of keeping everything fast.",
    penumbra: {
      tag: "Horror mod · Chapter 1 released",
      name: "Penumbra",
      pitch: "The fear comes from the dark, the sound, and what you almost see.",
      body:
        "Penumbra turns Minecraft into a VHS tape found in an old tube TV. There is no music: instead, sounds react to where you are. Your sanity drops in the dark, a figure shows up for half a second at the edge of your vision, and a story with a beginning, middle and end unfolds as you play. The idea, story, characters and voices are mine.",
      bullets: [
        "Two-pass CRT + VHS screen shader (~0.3 ms per frame) with three intensities",
        "Context-aware sound: 64 rules that build scenes with fades and cross-fades",
        "Fully articulated creatures, directed cutscenes and subtitles",
        "Per-world difficulty (Light, Normal, Nightmare) and accessibility options",
      ],
      stats: [
        { value: "3", label: "chapters written" },
        { value: "850+", label: "automated tests" },
        { value: "64", label: "sound rules" },
      ],
      rating: "Recommended for ages 14+",
      shots: [
        { src: "/img/penumbra/03-floresta-a-noite-vhs.webp", caption: "Forest at night, through the tape filter" },
        { src: "/img/penumbra/01-relance-na-floresta.webp", caption: "A glimpse between the trees" },
        { src: "/img/penumbra/02-rastejante-de-perto.webp", caption: "The crawler" },
      ],
      cta: "Get Penumbra",
    },
    shaders: {
      tag: "Shader pack · v1.1.1",
      name: "Pedra Shaders",
      pitch: "Alive and realistic, never dark.",
      body:
        "A shader pack written from scratch: soft shadows, water that mirrors the sky, volumetric clouds, fog, rainbows after the rain, and starry nights you can still see in. Six quality profiles, from Minimum to Pedra Max, built to run well even on a Mac.",
      stats: [
        { value: "6", label: "quality profiles" },
        { value: "100%", label: "original code" },
        { value: "Mac", label: "runs smooth" },
      ],
      shots: [
        { src: "/img/shaders/02-por-do-sol.webp", caption: "Sunset" },
        { src: "/img/shaders/06-neblina-da-madrugada.webp", caption: "Early morning fog" },
        { src: "/img/shaders/07-arco-iris-depois-da-chuva.webp", caption: "Rainbow after the rain" },
        { src: "/img/shaders/03-mar-azul.webp", caption: "Blue sea" },
        { src: "/img/shaders/04-mar-no-fim-da-tarde.webp", caption: "Sea in the late afternoon" },
        { src: "/img/shaders/05-noite-estrelada.webp", caption: "Starry night" },
        { src: "/img/shaders/08-chuva-na-vila-com-pocas.webp", caption: "Rain in the village, with puddles" },
        { src: "/img/shaders/10-nether-lago-de-lava.webp", caption: "Nether, lava lake" },
      ],
      hint: "drag sideways",
      cta: "Get Pedra Shaders",
    },
    aventura: {
      tag: "Modpack · 0.1.0 beta",
      name: "Pedra Aventura",
      pitch: "A big adventure, no horror, running light.",
      body:
        "Over 200 mods picked and configured to work together: dungeons and bosses, RPG and magic, farming and decoration, new dimensions. It ships with Pedra Shaders turned on and with Pedra Boost, my performance panel, one F7 away. Custom menus and loading screen, and zero conflicting key bindings.",
      stats: [
        { value: "203", label: "items in the pack" },
        { value: "20", label: "keys remapped" },
        { value: "0", label: "key conflicts" },
      ],
      shots: [
        { src: "/img/aventura/acab2-11-paisagem.webp", caption: "In game, Pedra Shaders on the Medium profile" },
        { src: "/img/aventura/acab2-05-pedraboost.webp", caption: "Pedra Boost panel (F7)" },
        { src: "/img/aventura/acab2-01-carregamento-inicio.webp", caption: "Custom loading screen" },
      ],
      cta: "Get Pedra Aventura",
    },
    boost: {
      tag: "In development",
      name: "Pedra Boost",
      body: "A performance mod with one rule: more FPS without taking anything off the screen. Every tweak has a switch in the panel, and nothing changes behind the player's back.",
    },
    soon: "link coming soon",
    rule: "The rule behind all of them: original code and art, nothing copied from other mods and no Mojang textures.",
  },
  code: {
    index: "02",
    title: "Code",
    intro:
      "Through AW-Solutions I build apps and websites for companies and churches. Mostly Flutter on mobile and JavaScript on the web, always wired to a real backend.",
    columns: { project: "Project", what: "What it is", stack: "Stack", status: "Status" },
    cases: [
      {
        name: "Lagoinha",
        kind: "Church web platform",
        summary:
          "Admin panel, public site and installable app (PWA) in one place. Four access levels with 16 permissions, multiple languages, and smart notifications that run without a server of its own.",
        stack: "JavaScript · Firebase · Tailwind",
        status: "Live",
        href: links.lagoinha,
      },
      {
        name: "Beduk Educação",
        kind: "Online learning app",
        summary:
          "A learning platform for students: video courses, live classes over Zoom, a forum and offline downloads. One codebase for iOS, Android, Web, macOS, Windows and Linux.",
        stack: "Flutter · Dart · REST API",
        status: "Delivered",
      },
      {
        name: "Estofados Buriti",
        kind: "E-commerce app",
        summary:
          "A furniture store in your pocket, connected to WooCommerce: multiple vendors, more than eight payment methods and point of sale.",
        stack: "Flutter · WooCommerce · Firebase",
        status: "Delivered",
      },
      {
        name: "Diamond Chair",
        kind: "E-commerce app",
        summary: "Same foundation as Buriti, adapted for another brand: catalog, cart, payments and a store map.",
        stack: "Flutter · WooCommerce · Firebase",
        status: "Delivered",
      },
    ],
    howTitle: "How I work",
    how: [
      "I use Claude (AI) as a coding partner, and I say so openly. I decide what to build and why, I read what comes out, I test it, and I answer for the result.",
      "I like organized projects: phased planning, automated tests, and no passwords in the code.",
    ],
  },
  offscreen: {
    index: "03",
    title: "Off screen",
    intro: "Not everything is a screen. These things teach me patience, which is what I use most when I'm coding.",
    hobbies: [
      { title: "Piano", text: "My favorite pastime, right next to modding. I play because I like it." },
      { title: "3D printing", text: "I model and print parts at home. A failed first layer teaches more than any tutorial." },
      { title: "Rubik's cube", text: "Algorithms that fit in your hand." },
      { title: "Kung fu", text: "Brown belt. The discipline carries over to everything else." },
    ],
  },
  contact: {
    index: "04",
    title: "Let's talk",
    body: "Got an app, a website or a wild mod idea? Send me an email and I'll get back to you.",
    emailLabel: "Email",
    company: "Client projects go through AW-Solutions.",
  },
  footer: { made: "Made by Miguel Paula, with Next.js.", faith: "Created to create." },
};

export const dict: Record<Lang, Dict> = { pt, en };
