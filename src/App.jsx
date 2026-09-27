import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft, ArrowRight, Article, BookOpen, Books, Briefcase, Buildings, Campfire, Code, Compass,
  DownloadSimple, EnvelopeSimple, FileText, GithubLogo, GraduationCap, InstagramLogo,
  Guitar, LinkedinLogo, List, MapTrifold, MoonStars, MusicNotes, PaperPlaneTilt, Sparkle, Sun,
  TiktokLogo, UsersThree, X
} from "@phosphor-icons/react";

const BASE = import.meta.env.BASE_URL;
const RESUME_PDF = `${BASE}Malikah-Bain-Resume.pdf`;

const PROFILE = {
  email: "malikahbain@gmail.com",
  github: "https://github.com/malikahbain",
  linkedin: "https://www.linkedin.com/in/malikah-bain-6b092617b",
  tiktok: "https://www.tiktok.com/@aestheticadventuresss/video/7117473812706364677",
  instagram: "https://www.instagram.com/aestheticadventuresss/",
  reddit: "https://www.reddit.com/user/malikahbain/",
  devvit: "https://developers.reddit.com/",
  blog: "https://www.linkedin.com/in/malikah-bain-6b092617b/recent-activity/articles/",
};

const copy = {
  en: {
    nav: ["Home", "Map", "Work", "Devvit Apps", "About", "Stories", "Resumé", "Contact"],
    welcome: "Welcome, traveler.", title: <>I build software<br/>that brings ideas <em>to life.</em></>,
    intro: "I’m Malikah Bain, a fourth-year Computer Science student at Carleton University building full-stack products, AI-assisted tools, browser extensions, and community applications.",
    begin: "Begin journey", resume: "View resumé", choose: "Choose your destination",
    mapSub: "Drag the world, then choose a destination.", featured: "Featured projects",
    featuredSub: "Deep projects where I solve complex problems.", apps: "Devvit apps",
    appsSub: "I love Devvit because it turns Reddit communities into places people can play, learn, organize, and connect—not just scroll.", about: "My story, beyond the code.",
    aboutBody: "I was born on the small Caribbean island of Grenada and now study Computer Science in Ottawa. I bring curiosity, warmth, and a love of discovery to the software I build.",
    stories: "Hall of Stories", storiesSub: "Follow my adventures, experiments, and work online.",
    resumeTitle: "Completed quests", contact: "Let’s build something great together.", next: "Next", back: "Back", details: "View details", download: "Download PDF",
  },
  fr: {
    nav: ["Accueil", "Carte", "Projets", "Apps Devvit", "À propos", "Récits", "CV", "Contact"],
    welcome: "Bienvenue, voyageur.", title: <>Je crée des logiciels<br/>qui donnent vie <em>aux idées.</em></>,
    intro: "Je suis Malikah Bain, étudiante de quatrième année en informatique à l’Université Carleton. Je conçois des produits full-stack, des outils assistés par IA, des extensions et des applications communautaires.",
    begin: "Commencer le voyage", resume: "Voir mon CV", choose: "Choisissez votre destination",
    mapSub: "Déplacez la carte, puis choisissez une destination.", featured: "Projets vedettes",
    featuredSub: "Des projets ambitieux qui résolvent des problèmes complexes.", apps: "Applications Devvit",
    appsSub: "J’adore Devvit parce qu’il transforme les communautés Reddit en espaces pour jouer, apprendre, s’organiser et créer des liens.", about: "Mon histoire, au-delà du code.",
    aboutBody: "Je suis née sur la petite île caribéenne de Grenade et j’étudie maintenant l’informatique à Ottawa. J’apporte curiosité, chaleur et goût de la découverte aux logiciels que je crée.",
    stories: "Galerie des récits", storiesSub: "Suivez mes aventures, mes expériences et mon travail en ligne.",
    resumeTitle: "Quêtes accomplies", contact: "Créons quelque chose d’exceptionnel.", next: "Suivant", back: "Retour", details: "Voir les détails", download: "Télécharger le PDF",
  }
};

const projects = [
  { id:"sourcefinder", place:"The Library of Truth", title:"SourceFinder", copy:"AI-assisted research platform that finds the original sources behind online claims and produces structured reports.", icon:BookOpen, tags:["TypeScript","React","Supabase","OpenAI"], bullets:["Browser extension and web app", "Multi-provider source retrieval", "AI claim extraction and classification", "Saved reports, citations and history"] },
  { id:"projectscribe", place:"The Scribe’s Workshop", title:"ProjectScribe", copy:"A document workspace that helps consultants and PMs create, manage, and export polished project documents.", icon:FileText, tags:["TypeScript","React","Node.js","PostgreSQL"], bullets:["Guided document generation", "Reusable project data", "Governance and approvals", "PAD and change-management templates"] },
];
const apps = [
  {id:"community-index",title:"Community Index",copy:"Searchable directories and resources for communities.",icon:BookOpen},
  {id:"rebalance",title:"Rebalance",copy:"A daily physics puzzle where every move counts.",icon:Sparkle},
  {id:"oc-transpo",title:"OC Transpo Tracker",copy:"Real-time Ottawa transit info inside Reddit.",icon:Buildings},
  {id:"slidereveal",title:"SlideReveal",copy:"Interactive before-and-after image comparisons.",icon:Compass},
];
const projectFr={SourceFinder:"Plateforme de recherche assistée par IA qui retrouve les sources originales derrière les affirmations en ligne et produit des rapports structurés.",ProjectScribe:"Espace documentaire qui aide les consultants et gestionnaires à créer, gérer et exporter des documents de projet soignés."};
const appFr={"Community Index":"Répertoires et ressources consultables pour les communautés.",Rebalance:"Un casse-tête quotidien de physique où chaque mouvement compte.","OC Transpo Tracker":"Informations en temps réel sur le transport à Ottawa dans Reddit.",SlideReveal:"Comparaisons interactives d’images avant et après."};
const experiences = [
  [
    "Specialist, Part-Time",
    "Apple, Bayshore Shopping Centre",
    "Oct 2025 — Present",
  ],
  ["AI Math Testing Specialist", "Scale AI", "Aug 2024 — Present"],
  ["50/50 Seller", "OSEG Foundation", "Apr 2022 — Jun 2022"],
];
const resumeContent = {
  en: {
    experience: "Experience",
    education: "Education",
    skills: "Skills",
    roles: experiences,
    schools: [
      [
        "Bachelor of Science",
        "Computer Science · Carleton University",
        "Aug 2021 — Present",
      ],
      [
        "Associate of Applied Science",
        "Information Technology · TA Marryshow Community College",
        "Aug 2016 — Jul 2018 · GPA 3.76, Cum Laude",
      ],
    ],
    skillList: [
      "Microsoft Office Suite",
      "Customer Service",
      "Time Management",
      "Point of Sale accuracy",
      "Technical Support",
      "AI Evaluation",
    ],
  },
  fr: {
    experience: "Expérience",
    education: "Formation",
    skills: "Compétences",
    roles: [
      [
        "Spécialiste, temps partiel",
        "Apple, Bayshore Shopping Centre",
        "Oct 2025 — Présent",
      ],
      [
        "Spécialiste en tests mathématiques IA",
        "Scale AI",
        "Août 2024 — Présent",
      ],
      ["Vendeuse 50/50", "Fondation OSEG", "Avr 2022 — Juin 2022"],
    ],
    schools: [
      [
        "Baccalauréat ès sciences",
        "Informatique · Université Carleton",
        "Août 2021 — Présent",
      ],
      [
        "Diplôme associé en sciences appliquées",
        "Technologies de l’information · TA Marryshow Community College",
        "Août 2016 — Juil 2018 · Moyenne 3,76, avec distinction",
      ],
    ],
    skillList: [
      "Suite Microsoft Office",
      "Service à la clientèle",
      "Gestion du temps",
      "Précision aux points de vente",
      "Soutien technique",
      "Évaluation de l’IA",
    ],
  },
};

// Leadership and academic achievements are separate from paid employment.
Object.assign(resumeContent.en, {
  leadership: "Leadership & Awards",
  achievements: [
    [
      "FIRST Global Challenge — Team Grenada",
      "Team Member — Mechanical Build Lead",
      "2018",
      "Represented Grenada at the 2018 FIRST Global Challenge in Mexico City, Mexico. Primarily responsible for hands-on robot construction and assembly: building and fitting mechanical components, troubleshooting, and refining the robot with the team.",
      "Mechanical build describes my contribution, rather than an official competition title.",
    ],
    [
      "Grenada National Knowledge Bowl",
      "2nd Place — Team Competition",
      "2016",
      "Member of the team that placed second in Grenada’s national Knowledge Bowl competition.",
    ],
  ],
});
Object.assign(resumeContent.fr, {
  leadership: "Leadership et distinctions",
  achievements: [
    [
      "FIRST Global Challenge — Équipe Grenade",
      "Membre de l’équipe — Responsable de la construction mécanique",
      "2018",
      "Représentation de la Grenade au FIRST Global Challenge 2018 à Mexico, au Mexique. Contribution principale : construction et assemblage du robot, ajustement des composants mécaniques, dépannage et amélioration avec l’équipe.",
      "La construction mécanique décrit ma contribution, et non un titre officiel de la compétition.",
    ],
    [
      "Grenada National Knowledge Bowl",
      "2e place — Compétition par équipes",
      "2016",
      "Membre de l’équipe arrivée deuxième au concours national Knowledge Bowl de la Grenade.",
    ],
  ],
});

function LoadingScreen({onDone,lang}){const t=copy[lang];useEffect(()=>{const id=setTimeout(onDone,2200);return()=>clearTimeout(id)},[onDone]);return <div className="loader"><div className="loader-shade"/><div className="steam s1"/><div className="steam s2"/><div className="led l1"/><div className="led l2"/><div className="spark"/><div className="loader-card"><small>{lang==="en"?"THE WORKBENCH":"L’ÉTABLI"}</small><h1>{lang==="en"?"Tinkering":"Bricolage"}<span className="blink">...</span></h1><p>{lang==="en"?"Currently building something interesting.":"Construction de quelque chose d’intéressant."}</p><div className="progress"><i/></div><button onClick={onDone}>{t.begin}</button></div></div>}
function Crest(){return <span className="crest"><img src={`${BASE}assets/malikah-crest.png`} alt="" /></span>}
function PageTitle({kicker,title,sub}){return <div className="page-title"><span>{kicker}</span><h2>{title}</h2>{sub&&<p>{sub}</p>}</div>}
function AboutQuiz({onComplete,lang}){const sets={en:[{q:"Where was I born and raised?",a:["Grenada","Canada","Barbados"],right:0},{q:"Which creative hobby is mine?",a:["Pottery","Guitar + singing","Dance"],right:1},{q:"What do I love exploring?",a:["Historical sites","Nightclubs","Theme parks"],right:0}],fr:[{q:"Où suis-je née et ai-je grandi?",a:["Grenade","Canada","Barbade"],right:0},{q:"Quel est mon passe-temps créatif?",a:["Poterie","Guitare et chant","Danse"],right:1},{q:"Qu’est-ce que j’aime explorer?",a:["Sites historiques","Boîtes de nuit","Parcs d’attractions"],right:0}]};const questions=sets[lang];const [step,setStep]=useState(0),[score,setScore]=useState(0),[picked,setPicked]=useState(null);const q=questions[step];const choose=i=>{if(picked!==null)return;setPicked(i);if(i===q.right)setScore(s=>s+1)};const next=()=>{if(step===questions.length-1){onComplete(score+(picked===q.right?1:0))}else{setStep(s=>s+1);setPicked(null)}};return <div className="about-quiz"><small>{lang==="en"?"TRAVELER’S QUIZ":"QUIZ DU VOYAGEUR"} · {step+1}/{questions.length}</small><h3>{q.q}</h3><div>{q.a.map((a,i)=><button className={picked===null?"":i===q.right?"correct":i===picked?"wrong":""} onClick={()=>choose(i)} key={a}>{a}</button>)}</div>{picked!==null&&<button className="quiz-next" onClick={next}>{step===questions.length-1?(lang==="en"?"Reveal my fun facts →":"Révéler mes anecdotes →"):(lang==="en"?"Next question →":"Question suivante →")}</button>}</div>}

export function App(){
  const [loading,setLoading]=useState(true),[dark,setDark]=useState(()=>{const v=localStorage.getItem("malikah-theme");return v?v==="dark":window.matchMedia?.("(prefers-color-scheme: dark)").matches??false}),[lang,setLang]=useState(()=>localStorage.getItem("malikah-language")||"en"),[page,setPage]=useState(0),[menu,setMenu]=useState(false);
  const [detail,setDetail]=useState(null),[transitioning,setTransitioning]=useState(false),[previousPage,setPreviousPage]=useState(null),[mapPan,setMapPan]=useState({x:0,y:0}),[quizDone,setQuizDone]=useState(false),[musicStarted,setMusicStarted]=useState(false),[musicOn,setMusicOn]=useState(false), wheelLock=useRef(false),resumeBoard=useRef(null),musicPlayer=useRef(null),t=copy[lang],resume=resumeContent[lang];
  const screens=["home","map","work","apps","about","stories","resume","contact"];
  useEffect(()=>{document.documentElement.dataset.theme=dark?"dark":"light";localStorage.setItem("malikah-theme",dark?"dark":"light")},[dark]);
  useEffect(()=>{document.documentElement.lang=lang;localStorage.setItem("malikah-language",lang)},[lang]);
  useEffect(()=>{const onKey=e=>{if(e.key==="ArrowRight")move(1);if(e.key==="ArrowLeft")move(-1)};window.addEventListener("keydown",onKey);return()=>window.removeEventListener("keydown",onKey)});
  const go=i=>{if(i===page||transitioning)return;setDetail(null);setMenu(false);setPreviousPage(page);setTransitioning(true);setPage(i);setTimeout(()=>{setTransitioning(false);setPreviousPage(null)},1350)};
  const move=d=>go(Math.max(0,Math.min(screens.length-1,page+d)));
  const wheel=e=>{if(Math.abs(e.deltaY)<20||wheelLock.current)return;if(page===6)return;wheelLock.current=true;move(e.deltaY>0?1:-1);setTimeout(()=>wheelLock.current=false,1300)};
  const mapMove=e=>{const r=e.currentTarget.getBoundingClientRect();const nx=(e.clientX-r.left)/r.width-.5,ny=(e.clientY-r.top)/r.height-.5;setMapPan({x:-nx*100,y:-ny*58})};
  const toggleMusic=()=>{if(!musicStarted){setMusicStarted(true);setMusicOn(true);return}const next=!musicOn;musicPlayer.current?.contentWindow?.postMessage(JSON.stringify({event:"command",func:next?"playVideo":"pauseVideo",args:[]}),"https://www.youtube.com");setMusicOn(next)};
  const screenClass=(name,index)=>`screen ${name} ${page===index?"is-active":""} ${transitioning&&previousPage===index?"is-exiting":""}`;
  const L=(en,fr)=>lang==="en"?en:fr;
  if(loading)return <LoadingScreen lang={lang} onDone={()=>setLoading(false)}/>;
  return <div className="app" onWheel={wheel} data-previous={previousPage ?? ""}>
    <header className="topbar"><button className="brand" onClick={()=>go(0)}><Crest/><span>Malikah Bain</span></button><nav className={menu?"nav open":"nav"}>{t.nav.map((n,i)=><button className={page===i?"active":""} key={n} onClick={()=>go(i)}>{n}</button>)}</nav><div className="utilities"><button className={`music-toggle ${musicOn?"is-playing":""}`} onClick={toggleMusic} aria-pressed={musicOn} aria-label={musicOn?L("Pause music","Mettre la musique en pause"):L("Play music","Écouter la musique")} title={musicOn?L("Pause music","Mettre la musique en pause"):L("Play my playlist","Écouter ma playlist")}><MusicNotes weight="fill"/></button><button className="lang" onClick={()=>setLang(lang==="en"?"fr":"en")}>{lang==="en"?"FR":"EN"}</button><button onClick={()=>setDark(!dark)} aria-label="Theme">{dark?<Sun weight="fill"/>:<MoonStars weight="fill"/>}</button><button className="menu-btn" onClick={()=>setMenu(!menu)}>{menu?<X/>:<List/>}</button></div></header>
    {musicStarted&&<iframe ref={musicPlayer} className="music-player" title={L("Malikah’s background playlist","Liste de lecture de Malikah")} src="https://www.youtube.com/embed/videoseries?list=PLWmfvyCqWHuTjIr2N6LuNM2twEC2rdiOn&autoplay=1&loop=1&enablejsapi=1&playsinline=1" allow="autoplay; encrypted-media"/>}
    <main className="viewport"><div className="track">
      <section className={`screen hero-screen ${page===0?"is-active":""}`}><div className="hero-wash"/><div className="hero-copy"><span className="kicker"><Sparkle weight="fill"/> {t.welcome}</span><h1>{t.title}</h1><p>{t.intro}</p><div className="actions"><button className="primary" onClick={()=>go(1)}>{t.begin}<ArrowRight/></button><button className="secondary" onClick={()=>go(6)}>{t.resume}<FileText/></button></div><div className="social-mini"><a href={PROFILE.github}><GithubLogo/>GitHub</a><a href={PROFILE.linkedin}><LinkedinLogo/>LinkedIn</a><a href={`mailto:${PROFILE.email}`}><EnvelopeSimple/>{L("Email","Courriel")}</a></div></div><div className="wayposts">{[[2,L("The Library","La bibliothèque"),L("Projects","Projets")],[3,L("Inventor’s Village","Village des inventeurs"),L("Devvit Apps","Apps Devvit")],[4,L("The Campfire","Le feu de camp"),L("About","À propos")],[5,L("Hall of Stories","Galerie des récits"),L("Social","Réseaux")],[7,L("The Guild Hall","La guilde"),"Contact"]].map(x=><button onClick={()=>go(x[0])} key={x[1]}><span>{x[1]}</span><small>{x[2]}</small><ArrowRight/></button>)}</div></section>
      <section className={`screen map-screen ${page===1?"is-active":""}`} onPointerMove={mapMove} onPointerLeave={()=>setMapPan({x:0,y:0})}><div className="map-canvas" style={{transform:`translate3d(${mapPan.x}px,${mapPan.y}px,0) scale(1.05)`}}><div className="hotspots">{[[2,"library",L("The Scholars’ Quarter","Le quartier des érudits")],[3,"village",L("Inventor’s Village","Le village des inventeurs")],[4,"camp",L("The Campfire","Le feu de camp")],[5,"stories",L("Hall of Stories","La galerie des récits")],[6,"resume",L("The Archives","Les archives")],[7,"guild",L("The Guild Hall","La guilde")]].map(x=><button className={x[1]} onClick={()=>go(x[0])} key={x[1]}>{x[2]}<small>{t.nav[x[0]]}</small></button>)}</div></div><PageTitle kicker={L("THE JOURNEY MAP","LA CARTE DU VOYAGE")} title={t.choose} sub={t.mapSub}/><div className="drag-hint"><MapTrifold/> {L("Move your cursor to explore","Déplacez le curseur pour explorer")}</div></section>
      <section className={`screen work-screen ${page===2?"is-active":""}`}><PageTitle kicker={L("THE SCHOLARS’ QUARTER","LE QUARTIER DES ÉRUDITS")} title={t.featured} sub={t.featuredSub}/><a className="github-more" href={PROFILE.devvit}>{L("See more on Devvit","Voir plus sur Devvit")} <ArrowRight/></a><div className="project-grid">{projects.map(p=><button className="project-card" onClick={()=>setDetail({...p,displayCopy:L(p.copy,projectFr[p.title])})} key={p.id}><div className="project-visual"><p.icon weight="duotone"/></div><div><small>{L(p.place,p.title==="SourceFinder"?"La bibliothèque de la vérité":"L’atelier du scribe")}</small><h3>{p.title}</h3><p>{L(p.copy,projectFr[p.title])}</p><div className="tags">{p.tags.map(x=><span key={x}>{x}</span>)}</div><b>{t.details}<ArrowRight/></b></div></button>)}</div></section>
      <section className={`screen apps-screen ${page===3?"is-active":""}`}><PageTitle kicker={L("THE INVENTOR’S VILLAGE","LE VILLAGE DES INVENTEURS")} title={t.apps} sub={t.appsSub}/><a className="github-more" href={PROFILE.devvit}>{L("See more on Devvit","Voir plus sur Devvit")} <ArrowRight/></a><div className="apps-grid">{apps.map(a=><button className="app-card" onClick={()=>setDetail({...a,place:"Devvit App",displayCopy:L(a.copy,appFr[a.title]),tags:["Devvit","TypeScript","React"],bullets:lang==="en"?[a.copy,"Designed for real Reddit communities","Turns passive browsing into participation","Responsive and accessible interaction"]:[appFr[a.title],"Conçue pour de vraies communautés Reddit","Transforme la navigation passive en participation","Interaction réactive et accessible"]})} key={a.id}><a.icon weight="duotone"/><h3>{a.title}</h3><p>{L(a.copy,appFr[a.title])}</p><b>{t.details}<ArrowRight/></b></button>)}</div></section>
      <section className={`screen about-screen ${page===4?"is-active":""}`}><div className="about-card"><span className="kicker"><Campfire/> {L("THE CAMPFIRE","LE FEU DE CAMP")}</span><h2>{t.about}</h2><p>{t.aboutBody}</p><div className="about-facts"><span><GraduationCap/>{L("Carleton University · Computer Science","Université Carleton · Informatique")}</span><span><Briefcase/>{L("Content creator · brand deals · live events","Créatrice de contenu · partenariats · événements")}</span><span><Compass/>{L("Grenada → Ottawa, Ontario","Grenade → Ottawa, Ontario")}</span></div></div><div className={`fact-game ${quizDone?"revealed":"quiz-mode"}`}>{quizDone?<><p>{L("UNLOCKED: FUN FACTS","DÉBLOQUÉ : ANECDOTES")}</p>{(lang==="en"?[["26","years old",Sparkle],["Twin","identical twin",UsersThree],["Grenada","born + raised",Compass],["Music","guitar + singing",Guitar],["Creator","content + events",Article],["Curious","history · politics · geography",Books],["Reader","always learning",BookOpen],["Explore","historical sites",MapTrifold]]:[["26","ans",Sparkle],["Jumelle","jumelle identique",UsersThree],["Grenade","née et élevée",Compass],["Musique","guitare et chant",Guitar],["Créatrice","contenu et événements",Article],["Curieuse","histoire · politique · géographie",Books],["Lectrice","toujours apprendre",BookOpen],["Explorer","sites historiques",MapTrifold]]).map(([a,b,Icon])=><button key={b}><Icon weight="duotone"/><strong>{a}</strong><span>{b}</span></button>)}</>:<AboutQuiz lang={lang} onComplete={()=>setQuizDone(true)}/>}</div><div className="fireflies">{Array.from({length:12},(_,i)=><i key={i} style={{"--i":i}}/>)}</div></section>
      <section className={`screen stories-screen ${page===5?"is-active":""}`} id="blog"><PageTitle kicker={L("PERSONAL · PROFESSIONAL · WRITING","PERSONNEL · PROFESSIONNEL · ÉCRITS")} title={t.stories} sub={L("My content has reached millions of views and led to brand collaborations and live event opportunities.","Mon contenu a obtenu des millions de vues et mené à des collaborations de marque et à des événements.")}/><div className="social-collections"><div className="story-group"><h3>{L("Personal adventures","Aventures personnelles")}</h3><div className="story-grid personal"><a href={PROFILE.tiktok} target="_blank" rel="noreferrer"><TiktokLogo weight="fill"/><span>TikTok</span><strong>@aestheticadventuresss · {L("featured video","vidéo vedette")}</strong></a><a href={PROFILE.instagram} target="_blank" rel="noreferrer"><InstagramLogo weight="fill"/><span>Instagram</span><strong>@aestheticadventuresss</strong></a></div></div><div className="story-group"><h3>{L("Professional work","Travail professionnel")}</h3><div className="story-grid professional"><a href={PROFILE.github}><GithubLogo weight="fill"/><span>GitHub</span><strong>{L("Projects & source code","Projets et code source")}</strong></a><a href={PROFILE.linkedin}><LinkedinLogo weight="fill"/><span>LinkedIn</span><strong>{L("Career & community","Carrière et communauté")}</strong></a></div></div><div className="story-group writing"><h3>{L("Field notes","Carnet de route")}</h3><div className="story-grid"><a href={PROFILE.blog}><Article weight="fill"/><span>{L("Blog posts","Articles")}</span><strong>{L("Engineering, Devvit & exploration","Ingénierie, Devvit et exploration")} →</strong></a></div></div></div></section>
      <section
            className={`screen resume-screen ${page === 6 ? "is-active" : ""}`}
          >
            <PageTitle
              kicker="THE ARCHIVES"
              title={t.resumeTitle}
              sub={`${resume.experience} · ${resume.education} · ${resume.skills} · ${resume.leadership}`}
            />
            <div className="resume-board" ref={resumeBoard}>
              <section className="resume-group">
                <header>
                  <Briefcase weight="duotone" />
                  <div>
                    <small>01</small>
                    <h3>{resume.experience}</h3>
                  </div>
                </header>
                <div className="resume-stack">
                  {resume.roles.map((x, i) => (
                    <article className="resume-card role" key={x[0]}>
                      <small>{String(i + 1).padStart(2, "0")}</small>
                      <div>
                        <h3>{x[0]}</h3>
                        <p>{x[1]}</p>
                      </div>
                      <time>{x[2]}</time>
                    </article>
                  ))}
                </div>
              </section>
              <section className="resume-group education-group">
                <header>
                  <GraduationCap weight="duotone" />
                  <div>
                    <small>02</small>
                    <h3>{resume.education}</h3>
                  </div>
                </header>
                <div className="resume-stack">
                  {resume.schools.map((x, i) => (
                    <article className="resume-card school" key={x[0]}>
                      <small>{String(i + 1).padStart(2, "0")}</small>
                      <div>
                        <h3>{x[0]}</h3>
                        <p>{x[1]}</p>
                      </div>
                      <time>{x[2]}</time>
                    </article>
                  ))}
                </div>
              </section>
              <section className="resume-group skills-group">
                <header>
                  <Sparkle weight="duotone" />
                  <div>
                    <small>03</small>
                    <h3>{resume.skills}</h3>
                  </div>
                </header>
                <div className="skill-cloud">
                  {resume.skillList.map((x) => (
                    <span key={x}>{x}</span>
                  ))}
                </div>
                <a className="primary" href={RESUME_PDF} download>
                  {t.download}
                  <DownloadSimple />
                </a>
                <button className="next-destination" onClick={() => go(7)}>
                  {lang === "en"
                    ? "Continue to Contact"
                    : "Continuer vers Contact"}
                  <ArrowRight />
                </button>
              </section>
              <section className="resume-group leadership-group">
                <header>
                  <UsersThree weight="duotone" />
                  <div>
                    <small>04</small>
                    <h3>{resume.leadership}</h3>
                  </div>
                </header>
                <div className="resume-stack">
                  {resume.achievements.map((x, i) => (
                    <article className="resume-card achievement" key={x[0]}>
                      <small>{String(i + 1).padStart(2, "0")}</small>
                      <div>
                        <h3>{x[0]}</h3>
                        <p>{x[1]}</p>
                      </div>
                      <time>{x[2]}</time>
                      <p className="achievement-description">{x[3]}</p>
                      {x[4] && <p className="achievement-note">{x[4]}</p>}
                    </article>
                  ))}
                </div>
              </section>
            </div>
            <div className="resume-scroll-hint">
              <ArrowRight />{" "}
              {lang === "en"
                ? "Swipe or scroll horizontally through the categories, then scroll down for the full résumé"
                : "Parcourez les catégories horizontalement, puis descendez pour consulter le CV complet"}
            </div>
            <section
              className="resume-document"
              aria-labelledby="resume-document-title"
            >
              <span className="kicker">
                {L("THE ARCHIVES · DOCUMENT", "LES ARCHIVES · DOCUMENT")}
              </span>
              <h2 id="resume-document-title">
                {L("Full Résumé", "CV complet")}
              </h2>
              <p>
                {L(
                  "View the complete résumé below or download a PDF copy.",
                  "Consultez le CV complet ci-dessous ou téléchargez une copie PDF.",
                )}
              </p>
              <div className="actions">
                <a
                  className="secondary"
                  href={RESUME_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {L("View résumé PDF", "Ouvrir le CV en PDF")}
                  <FileText />
                </a>
                <a className="primary" href={RESUME_PDF} download>
                  {t.download}
                  <DownloadSimple />
                </a>
              </div>
              <p className="pdf-mobile-note">
                {L(
                  "Open the PDF for a comfortable full-screen view on your device.",
                  "Ouvrez le PDF pour une lecture confortable en plein écran sur votre appareil.",
                )}
              </p>
              {page === 6 && (
                <object
                  className="resume-pdf"
                  data={RESUME_PDF}
                  type="application/pdf"
                  title={L(
                    "Full résumé PDF — Malikah Bain",
                    "CV complet en PDF — Malikah Bain",
                  )}
                  aria-label={L(
                    "Full résumé PDF — Malikah Bain",
                    "CV complet en PDF — Malikah Bain",
                  )}
                >
                  <p>
                    {L(
                      "Your browser cannot display this PDF inline.",
                      "Votre navigateur ne peut pas afficher ce PDF ici.",
                    )}{" "}
                    <a
                      href={RESUME_PDF}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {L("Open PDF", "Ouvrir le PDF")}
                    </a>
                  </p>
                </object>
              )}
            </section>
          </section>
                <section className={`screen contact-screen ${page===7?"is-active":""}`}><div className="contact-card"><span className="kicker">{L("THE GUILD HALL","LA GUILDE")}</span><h2>{t.contact}</h2><p>{L("I’m looking for a team where curiosity, craft, and useful technology matter.","Je cherche une équipe où la curiosité, le savoir-faire et la technologie utile comptent.")}</p><a className="primary" href={`mailto:${PROFILE.email}`}>{L("Email me","Écrivez-moi")}<PaperPlaneTilt/></a><div><a href={PROFILE.github}><GithubLogo/>GitHub</a><a href={PROFILE.linkedin}><LinkedinLogo/>LinkedIn</a><a href={RESUME_PDF}><FileText/>{L("Résumé","CV")}</a></div></div></section>
    </div></main>
    <div className="journey-controls"><button onClick={()=>move(-1)} disabled={page===0}><ArrowLeft/></button><span>{String(page+1).padStart(2,"0")} / {String(screens.length).padStart(2,"0")}</span><div className="dots">{screens.map((s,i)=><button aria-label={s} className={i===page?"active":""} onClick={()=>go(i)} key={s}/>)}</div><button onClick={()=>move(1)} disabled={page===screens.length-1}><ArrowRight/></button></div>
    {detail&&<div className="detail-layer"><button className="detail-close" onClick={()=>setDetail(null)}><ArrowLeft/>{t.back}</button><div className="detail-copy"><span>{detail.place==="Devvit App"?L("Devvit App","Application Devvit"):detail.place}</span><h2>{detail.title}</h2><p>{detail.displayCopy||detail.copy}</p><ul>{detail.bullets?.map(x=><li key={x}>{x}</li>)}</ul><div className="tags">{detail.tags?.map(x=><span key={x}>{x}</span>)}</div><div className="actions"><a className="primary" href={detail.place==="Devvit App"?PROFILE.reddit:PROFILE.devvit}>{detail.place==="Devvit App"?L("Open on Reddit","Ouvrir sur Reddit"):L("See more on Devvit","Voir plus sur Devvit")}<ArrowRight/></a></div></div><div className="detail-demo"><div className="demo-top"><i/><i/><i/><span>{detail.title}</span></div><div className="demo-sidebar">{(lang==="en"?["Overview","Reports","Sources","Settings"]:["Aperçu","Rapports","Sources","Paramètres"]).map(x=><span key={x}>{x}</span>)}</div><div className="demo-body"><h3>{detail.title} {L("Workspace","Espace de travail")}</h3>{[1,2,3,4].map(x=><div className="demo-row" key={x}><b/><span/><em/></div>)}</div></div></div>}
  </div>
}
