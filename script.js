const world = document.getElementById("world");
const car = document.getElementById("car");
const carImage = document.getElementById("carImage");
const miniCar = document.getElementById("miniCar");
const speedValue = document.getElementById("speedValue");
const proximityPrompt = document.getElementById("proximityPrompt");
const proximityText = document.getElementById("proximityText");
const openStationBtn = document.getElementById("openStationBtn");
const missionText = document.getElementById("missionText");
const visitedCount = document.getElementById("visitedCount");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");
const helpBackdrop = document.getElementById("helpBackdrop");
const helpBtn = document.getElementById("helpBtn");
const helpClose = document.getElementById("helpClose");
const soundToggle = document.getElementById("soundToggle");
const soundIcon = document.getElementById("soundIcon");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeColorMeta = document.getElementById("themeColorMeta");
const toast = document.getElementById("toast");
const heroTitle = document.getElementById("heroTitle");
const heroSubtitle = document.getElementById("heroSubtitle");
const helpTitle = document.getElementById("helpTitle");
const driveHelp = document.getElementById("driveHelp");
const openHelp = document.getElementById("openHelp");
const metaDescription = document.getElementById("metaDescription");
const brandLink = document.getElementById("brandLink");
const gameCard = document.getElementById("gameCard");
const heroSection = document.getElementById("heroSection");
const quickNav = document.getElementById("quickNav");
const mobileControls = document.getElementById("mobileControls");

const keys = {
  up: false,
  down: false,
  left: false,
  right: false
};

const player = {
  x: 50,
  y: 48,
  speed: 26,
  angle: 0,
  moving: false
};

const stationPositions = {
  about: { x: 27, y: 28 },
  skills: { x: 70, y: 28 },
  projects: { x: 27, y: 68 },
  contact: { x: 70, y: 68 }
};

const uiText = {
  sl: {
    metaDescription: "Interaktivni portfolio programerja Nina Francija.",
    home: "Nino Franci — Domov",
    available: "Na voljo za projekte",
    eyebrow: "INTERAKTIVNI PORTFOLIO / 2026",
    heroTitle: 'Hej, jaz sem <span>Nino.</span><br>Programiram ideje v stvari, ki delujejo.',
    heroSubtitle: 'Namesto klasičnega scrollanja se zapelji skozi moj portfolio. Pelji do označene postaje in pritisni <strong>E</strong> ali gumb <strong>ODPRI</strong>.',
    heroAria: "Uvod",
    currentMission: "TRENUTNA MISIJA",
    explored: "RAZISKANO",
    open: "ODPRI",
    dontDrive: "Ne želiš voziti?",
    quickNavAria: "Hitra navigacija",
    gameAria: "Interaktivni portfolio zemljevid",
    worldAria: "Zemljevid. Uporabi puščice ali WASD za vožnjo.",
    driveHelp: '<kbd>WASD</kbd> ali <kbd>← ↑ ↓ →</kbd> za vožnjo',
    openHelp: '<kbd>E</kbd> odpre bližnjo postajo',
    howToPlay: "KAKO IGRATI",
    helpTitle: "Preprost portfolio. Malo manj preprosta pot do njega.",
    helpDrive: "Vozi po zemljevidu.",
    helpOpen: "Odpri sekcijo, ko si dovolj blizu.",
    helpEsc: "Zapri odprto sekcijo.",
    helpNote: "Na telefonu uporabi smerne gumbe pod zemljevidom. Če se ti ne da igrati, so spodaj tudi klasične bližnjice.",
    helpButton: "Odpri pomoč",
    close: "Zapri",
    sound: "Zvok",
    soundToggle: "Vklopi ali izklopi zvok",
    soundOn: "Zvok vključen",
    soundOff: "Zvok izključen",
    langAria: "Izbira jezika",
    mobileAria: "Kontrole za vožnjo",
    up: "Gor",
    left: "Levo",
    down: "Dol",
    right: "Desno",
    themeToLight: "Preklopi na svetlo temo",
    themeToDark: "Preklopi na temno temo",
    lightTheme: "Svetla tema",
    darkTheme: "Temna tema",
    lightEnabled: "Svetla tema vključena",
    darkEnabled: "Temna tema vključena",
    missionComplete: "Vse postaje raziskane — misija končana!",
    driveTo: "Zapeljite do postaje",
    stationReached: "je dosežena",
    getCloser: "Najprej se zapelji bližje postaji.",
    questComplete: "🏁 Misija končana — pregledal si cel portfolio!",
    unlocked: "Postaja odklenjena",
    carAlt: "Porsche 911 GT3 RS pogled od zgoraj"
  },
  en: {
    metaDescription: "Interactive portfolio of programmer Nino Franci.",
    home: "Nino Franci — Home",
    available: "Available for projects",
    eyebrow: "INTERACTIVE PORTFOLIO / 2026",
    heroTitle: 'Hi, I’m <span>Nino.</span><br>I turn ideas into software that works.',
    heroSubtitle: 'Instead of classic scrolling, drive through my portfolio. Reach a marked station and press <strong>E</strong> or the <strong>OPEN</strong> button.',
    heroAria: "Introduction",
    currentMission: "CURRENT MISSION",
    explored: "EXPLORED",
    open: "OPEN",
    dontDrive: "Don’t want to drive?",
    quickNavAria: "Quick navigation",
    gameAria: "Interactive portfolio map",
    worldAria: "Map. Use the arrow keys or WASD to drive.",
    driveHelp: '<kbd>WASD</kbd> or <kbd>← ↑ ↓ →</kbd> to drive',
    openHelp: '<kbd>E</kbd> opens a nearby station',
    howToPlay: "HOW TO PLAY",
    helpTitle: "A simple portfolio. A slightly less simple way to explore it.",
    helpDrive: "Drive around the map.",
    helpOpen: "Open a section when you are close enough.",
    helpEsc: "Close the open section.",
    helpNote: "On mobile, use the direction buttons below the map. If you do not feel like playing, classic shortcuts are available below.",
    helpButton: "Open help",
    close: "Close",
    sound: "Sound",
    soundToggle: "Toggle sound",
    soundOn: "Sound enabled",
    soundOff: "Sound disabled",
    langAria: "Language selection",
    mobileAria: "Driving controls",
    up: "Up",
    left: "Left",
    down: "Down",
    right: "Right",
    themeToLight: "Switch to light theme",
    themeToDark: "Switch to dark theme",
    lightTheme: "Light theme",
    darkTheme: "Dark theme",
    lightEnabled: "Light theme enabled",
    darkEnabled: "Dark theme enabled",
    missionComplete: "All stations explored — mission complete!",
    driveTo: "Drive to station",
    stationReached: "reached",
    getCloser: "Drive closer to the station first.",
    questComplete: "🏁 Mission complete — you explored the whole portfolio!",
    unlocked: "Station unlocked",
    carAlt: "Porsche 911 GT3 RS top view"
  }
};

const stationText = {
  sl: {
    about: {
      title: "O MENI",
      content: `
        <p class="modal-kicker">POSTAJA 01 / O MENI</p>
        <h2>Nino Franci.<br>Programer in dipl. inž. računalništva in informacijskih tehnologij.</h2>
        <p class="modal-lead">
          Trenutno delam kot programer pri PROHIT d.o.o. v Mariboru, kjer se ukvarjam z razvojem namiznih aplikacij, C#, ASP.NET, WPF, podatkovnimi bazami in analizo podatkov. Pred tem sem pri EMSISO d.o.o. razvijal rešitve v C#/.NET in Pythonu ter skrbel za WordPress spletno stran.
        </p>
        <div class="modal-rule"></div>
        <div class="stats-grid">
          <div class="stat-card"><strong>2025</strong><span>diploma na FERI UM</span></div>
          <div class="stat-card"><strong>C#</strong><span>.NET, ASP.NET in WPF</span></div>
          <div class="stat-card"><strong>SQL</strong><span>relacijske podatkovne baze</span></div>
        </div>
        <div class="modal-rule"></div>
        <p class="modal-kicker">IZKUŠNJE</p>
        <div class="resume-timeline">
          <div class="resume-item">
            <span class="resume-meta">FEB 2026 - TRENUTNO / PROHIT D.O.O.</span>
            <strong>Programer</strong>
            <p>Razvoj namiznih aplikacij, ASP.NET, C#, DBMS, Windows Presentation Foundation (WPF) in analiza podatkov.</p>
          </div>
          <div class="resume-item">
            <span class="resume-meta">2024 / EMSISO D.O.O.</span>
            <strong>Programer</strong>
            <p>Python skripta za avtomatizirano posodabljanje datotek C in H na podlagi podatkov iz datotek EDS (Electronic Data Sheet).</p>
          </div>
          <div class="resume-item">
            <span class="resume-meta">2022 / EMSISO D.O.O.</span>
            <strong>Programer</strong>
            <p>C#/.NET aplikacija za avtomatski nadzor in beleženje prihodov, odhodov ter delovnih ur, z uporabo API-ja in Excel prikaza podatkov.</p>
          </div>
          <div class="resume-item">
            <span class="resume-meta">MAJ 2024 - JAN 2025 / EMSISO D.O.O.</span>
            <strong>Skrbnik spletne vsebine</strong>
            <p>Vzdrževanje WordPress spletne strani emdrive-mobility.com.</p>
          </div>
        </div>
        <div class="modal-rule"></div>
        <p class="modal-kicker">IZOBRAZBA</p>
        <div class="resume-timeline">
          <div class="resume-item">
            <span class="resume-meta">2021 - 2025 / FERI, UNIVERZA V MARIBORU</span>
            <strong>Diplomirani inženir računalništva in informacijskih tehnologij (VS)</strong>
            <p>Fakulteta za elektrotehniko, računalništvo in informatiko Univerze v Mariboru.</p>
          </div>
          <div class="resume-item">
            <span class="resume-meta">2017 - 2021 / SERŠ MARIBOR</span>
            <strong>Tehnik računalništva</strong>
            <p>Srednja elektro-računalniška šola Maribor.</p>
          </div>
        </div>
      `
    },
    skills: {
      title: "ZNANJA",
      content: `
        <p class="modal-kicker">POSTAJA 02 / ZNANJA</p>
        <h2>Tehnologije, ki jih dejansko uporabljam in poznam.</h2>
        <p class="modal-lead">
          Moj nabor znanj pokriva razvoj namiznih in spletnih rešitev, baze podatkov, mikrokontrolerje ter tudi 2D/3D in game development.
        </p>
        <div class="modal-rule"></div>
        <div class="skills-grid">
          <div class="skill-card">
            <strong>Programski jeziki</strong>
            <p>C#, C++, C, Java, JavaScript in Python.</p>
            <div class="skill-pills"><span>C#</span><span>C++</span><span>C</span><span>Java</span><span>JavaScript</span><span>Python</span></div>
          </div>
          <div class="skill-card">
            <strong>Web & .NET</strong>
            <p>HTML, CSS, JavaScript, Node, ASP.NET, WPF ter razvoj namiznih aplikacij.</p>
            <div class="skill-pills"><span>HTML</span><span>CSS</span><span>Node</span><span>ASP.NET</span><span>WPF</span></div>
          </div>
          <div class="skill-card">
            <strong>Podatki & baze</strong>
            <p>SQL in poznavanje relacijskih baz Oracle, MySQL in Access ter analiza podatkov.</p>
            <div class="skill-pills"><span>SQL</span><span>Oracle</span><span>MySQL</span><span>Access</span><span>DBMS</span></div>
          </div>
          <div class="skill-card">
            <strong>Ostalo</strong>
            <p>STM32, Arduino, Linux (Ubuntu), Git, Windows, Blender, Unity C# 2D/3D, game development, WordPress in Wix.</p>
            <div class="skill-pills"><span>STM32</span><span>Arduino</span><span>Git</span><span>Blender</span><span>Unity</span><span>WordPress</span></div>
          </div>
        </div>
        <div class="modal-rule"></div>
        <div class="resume-item">
          <span class="resume-meta">JEZIKI</span>
          <strong>Slovenščina - materni jezik · Angleščina - B2/B1</strong>
          <p>Angleščina: B2 pri slušnem in bralnem razumevanju ter govornem sporazumevanju; B1 pri pisanju.</p>
        </div>
      `
    },
    projects: {
      title: "PROJEKTI",
      content: `
        <p class="modal-kicker">POSTAJA 03 / PROJEKTI</p>
        <h2>Uporaba masivnih podatkov za varnost v prometu.</h2>
        <p class="modal-lead">
          Projekt je nastajal med letoma 2022 in 2024. V mikro skupini smo izdelali sistem za zajem senzorskih podatkov, njihovo shranjevanje v SQL podatkovno bazo in vizualizacijo kakovosti cest na zemljevidu.
        </p>
        <div class="modal-rule"></div>
        <div class="projects-grid">
          <article class="project-card project-feature">
            <span class="project-index">01 / MOBILE + API + SQL</span>
            <strong>Zajem in prikaz podatkov</strong>
            <p>Mobilna aplikacija je zajemala senzorske podatke in jih preko API-ja pošiljala v SQL bazo. Na spletni strani so bili odseki poti prikazani z zeleno, rumeno ali rdečo glede na stabilnost senzorskih meritev.</p>
            <div class="project-tags"><span>Mobile</span><span>API</span><span>SQL</span><span>Maps</span></div>
          </article>
          <article class="project-card project-feature">
            <span class="project-index">02 / EMBEDDED</span>
            <strong>STM32 + ESP</strong>
            <p>Kasnejša nadgradnja je senzorske podatke zajemala s ploščico STM32, ESP pa je podatke pošiljal v podatkovno bazo, kar je omogočilo natančnejše zajemanje pospeškov in orientacije.</p>
            <div class="project-tags"><span>STM32</span><span>ESP</span><span>Sensors</span></div>
          </article>
          <article class="project-card project-feature">
            <span class="project-index">03 / SECURITY + 3D</span>
            <strong>Prijava z obrazom in Blender</strong>
            <p>Aplikaciji smo dodali prijavo z obrazom. Za zaključek projekta smo pripravili tudi predstavitveno animacijo v Blenderju.</p>
            <div class="project-tags"><span>Face login</span><span>Blender</span><span>3D</span></div>
            <a class="project-link" href="https://beoflere.com/projekt-feri/" target="_blank" rel="noopener noreferrer">Odpri projekt ↗</a>
          </article>
        </div>
      `
    },
    contact: {
      title: "KONTAKT",
      content: `
        <p class="modal-kicker">POSTAJA 04 / KONTAKT</p>
        <h2>Imaš idejo?<br>Dajva jo spraviti online.</h2>
        <p class="modal-lead">
          Za sodelovanje, razvoj aplikacij ali pogovor o projektu me lahko kontaktiraš prek e-pošte ali LinkedIna.
        </p>
        <div class="modal-rule"></div>
        <div class="contact-grid">
          <a class="contact-card" href="mailto:franci.nino@gmail.com">
            <strong>Email</strong>
            <span>franci.nino@gmail.com</span>
          </a>
          <a class="contact-card" href="https://www.linkedin.com/in/nino-franci-96b545305" target="_blank" rel="noopener noreferrer">
            <strong>LinkedIn</strong>
            <span>nino-franci-96b545305</span>
          </a>
          <div class="contact-card">
            <strong>Lokacija</strong>
            <span>Maribor, Slovenija</span>
          </div>
          <a class="contact-card" href="https://beoflere.com/projekt-feri/" target="_blank" rel="noopener noreferrer">
            <strong>FERI projekt</strong>
            <span>beoflere.com/projekt-feri</span>
          </a>
        </div>
      `
    }
  },

  en: {
    about: {
      title: "ABOUT",
      content: `
        <p class="modal-kicker">STATION 01 / ABOUT</p>
        <h2>Nino Franci.<br>Programmer and graduate engineer of Computer Science and Information Technologies.</h2>
        <p class="modal-lead">
          I currently work as a programmer at PROHIT d.o.o. in Maribor, focusing on desktop application development, C#, ASP.NET, WPF, databases and data analysis. Previously, at EMSISO d.o.o., I developed solutions in C#/.NET and Python and maintained a WordPress website.
        </p>
        <div class="modal-rule"></div>
        <div class="stats-grid">
          <div class="stat-card"><strong>2025</strong><span>graduated from FERI, University of Maribor</span></div>
          <div class="stat-card"><strong>C#</strong><span>.NET, ASP.NET and WPF</span></div>
          <div class="stat-card"><strong>SQL</strong><span>relational databases</span></div>
        </div>
        <div class="modal-rule"></div>
        <p class="modal-kicker">EXPERIENCE</p>
        <div class="resume-timeline">
          <div class="resume-item">
            <span class="resume-meta">FEB 2026 - PRESENT / PROHIT D.O.O.</span>
            <strong>Programmer</strong>
            <p>Desktop application development, ASP.NET, C#, DBMS, Windows Presentation Foundation (WPF) and data analysis.</p>
          </div>
          <div class="resume-item">
            <span class="resume-meta">2024 / EMSISO D.O.O.</span>
            <strong>Programmer</strong>
            <p>Developed a Python script that automated updates of C and H files based on data from EDS (Electronic Data Sheet) files.</p>
          </div>
          <div class="resume-item">
            <span class="resume-meta">2022 / EMSISO D.O.O.</span>
            <strong>Programmer</strong>
            <p>Built a C#/.NET application for automatic attendance and work-hour tracking, using an API and Excel-based data presentation.</p>
          </div>
          <div class="resume-item">
            <span class="resume-meta">MAY 2024 - JAN 2025 / EMSISO D.O.O.</span>
            <strong>Web Content Administrator</strong>
            <p>Maintained the emdrive-mobility.com WordPress website.</p>
          </div>
        </div>
        <div class="modal-rule"></div>
        <p class="modal-kicker">EDUCATION</p>
        <div class="resume-timeline">
          <div class="resume-item">
            <span class="resume-meta">2021 - 2025 / FERI, UNIVERSITY OF MARIBOR</span>
            <strong>Graduate Engineer of Computer Science and Information Technologies (Professional Higher Education)</strong>
            <p>Faculty of Electrical Engineering and Computer Science, University of Maribor.</p>
          </div>
          <div class="resume-item">
            <span class="resume-meta">2017 - 2021 / SERŠ MARIBOR</span>
            <strong>Computer Technician</strong>
            <p>Secondary School of Electrical Engineering and Computer Science Maribor.</p>
          </div>
        </div>
      `
    },
    skills: {
      title: "SKILLS",
      content: `
        <p class="modal-kicker">STATION 02 / SKILLS</p>
        <h2>Technologies I actually use and know.</h2>
        <p class="modal-lead">
          My skill set covers desktop and web development, databases, microcontrollers, as well as 2D/3D and game development.
        </p>
        <div class="modal-rule"></div>
        <div class="skills-grid">
          <div class="skill-card">
            <strong>Programming languages</strong>
            <p>C#, C++, C, Java, JavaScript and Python.</p>
            <div class="skill-pills"><span>C#</span><span>C++</span><span>C</span><span>Java</span><span>JavaScript</span><span>Python</span></div>
          </div>
          <div class="skill-card">
            <strong>Web & .NET</strong>
            <p>HTML, CSS, JavaScript, Node, ASP.NET, WPF and desktop application development.</p>
            <div class="skill-pills"><span>HTML</span><span>CSS</span><span>Node</span><span>ASP.NET</span><span>WPF</span></div>
          </div>
          <div class="skill-card">
            <strong>Data & databases</strong>
            <p>SQL, relational databases including Oracle, MySQL and Access, and data analysis.</p>
            <div class="skill-pills"><span>SQL</span><span>Oracle</span><span>MySQL</span><span>Access</span><span>DBMS</span></div>
          </div>
          <div class="skill-card">
            <strong>Other</strong>
            <p>STM32, Arduino, Linux (Ubuntu), Git, Windows, Blender, Unity C# 2D/3D, game development, WordPress and Wix.</p>
            <div class="skill-pills"><span>STM32</span><span>Arduino</span><span>Git</span><span>Blender</span><span>Unity</span><span>WordPress</span></div>
          </div>
        </div>
        <div class="modal-rule"></div>
        <div class="resume-item">
          <span class="resume-meta">LANGUAGES</span>
          <strong>Slovenian - native · English - B2/B1</strong>
          <p>English: B2 in listening, reading and spoken interaction; B1 in writing.</p>
        </div>
      `
    },
    projects: {
      title: "PROJECTS",
      content: `
        <p class="modal-kicker">STATION 03 / PROJECTS</p>
        <h2>Using massive data for road safety.</h2>
        <p class="modal-lead">
          The project ran from 2022 to 2024. In a small team, we developed a system for collecting sensor data, storing it in an SQL database and visualising road quality on a map.
        </p>
        <div class="modal-rule"></div>
        <div class="projects-grid">
          <article class="project-card project-feature">
            <span class="project-index">01 / MOBILE + API + SQL</span>
            <strong>Data collection and visualisation</strong>
            <p>The mobile application collected sensor data and sent it to an SQL database through an API. Route segments on the website were displayed in green, yellow or red depending on the stability of the sensor measurements.</p>
            <div class="project-tags"><span>Mobile</span><span>API</span><span>SQL</span><span>Maps</span></div>
          </article>
          <article class="project-card project-feature">
            <span class="project-index">02 / EMBEDDED</span>
            <strong>STM32 + ESP</strong>
            <p>A later upgrade collected sensor data using an STM32 board, while an ESP board sent the data to the database, enabling more precise acceleration and orientation measurements.</p>
            <div class="project-tags"><span>STM32</span><span>ESP</span><span>Sensors</span></div>
          </article>
          <article class="project-card project-feature">
            <span class="project-index">03 / SECURITY + 3D</span>
            <strong>Face login and Blender</strong>
            <p>We added face login to the application. To conclude the project, we also created a presentation animation in Blender.</p>
            <div class="project-tags"><span>Face login</span><span>Blender</span><span>3D</span></div>
            <a class="project-link" href="https://beoflere.com/projekt-feri/" target="_blank" rel="noopener noreferrer">Open project ↗</a>
          </article>
        </div>
      `
    },
    contact: {
      title: "CONTACT",
      content: `
        <p class="modal-kicker">STATION 04 / CONTACT</p>
        <h2>Have an idea?<br>Let’s put it online.</h2>
        <p class="modal-lead">
          For collaboration, application development or a conversation about a project, contact me by email or LinkedIn.
        </p>
        <div class="modal-rule"></div>
        <div class="contact-grid">
          <a class="contact-card" href="mailto:franci.nino@gmail.com">
            <strong>Email</strong>
            <span>franci.nino@gmail.com</span>
          </a>
          <a class="contact-card" href="https://www.linkedin.com/in/nino-franci-96b545305" target="_blank" rel="noopener noreferrer">
            <strong>LinkedIn</strong>
            <span>nino-franci-96b545305</span>
          </a>
          <div class="contact-card">
            <strong>Location</strong>
            <span>Maribor, Slovenia</span>
          </div>
          <a class="contact-card" href="https://beoflere.com/projekt-feri/" target="_blank" rel="noopener noreferrer">
            <strong>FERI project</strong>
            <span>beoflere.com/projekt-feri</span>
          </a>
        </div>
      `
    }
  }
};

const stationOrder = ["about", "skills", "projects", "contact"];
const visited = new Set();

let nearbyStation = null;
let lastTime = performance.now();
let soundEnabled = false;
let audioCtx = null;
let toastTimer = null;
let openStationId = null;
let currentLanguage = localStorage.getItem("ninoPortfolioLanguage") || "sl";
let currentTheme = localStorage.getItem("ninoPortfolioTheme") || "dark";

if (!["sl", "en"].includes(currentLanguage)) currentLanguage = "sl";
if (!["dark", "light"].includes(currentTheme)) currentTheme = "dark";

function t(key) {
  return uiText[currentLanguage][key];
}

function station(id) {
  return stationText[currentLanguage][id];
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function keyToDirection(key) {
  const k = key.toLowerCase();
  if (k === "w" || key === "ArrowUp") return "up";
  if (k === "s" || key === "ArrowDown") return "down";
  if (k === "a" || key === "ArrowLeft") return "left";
  if (k === "d" || key === "ArrowRight") return "right";
  return null;
}

function setDirection(direction, active) {
  if (direction) keys[direction] = active;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1700);
}

function playTone(type = "move") {
  if (!soundEnabled) return;
  audioCtx ??= new (window.AudioContext || window.webkitAudioContext)();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  const now = audioCtx.currentTime;

  osc.frequency.value = type === "open" ? 620 : type === "complete" ? 820 : 170;
  osc.type = type === "move" ? "sine" : "triangle";

  gain.gain.setValueAtTime(type === "move" ? 0.015 : 0.045, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + (type === "move" ? 0.06 : 0.18));

  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start(now);
  osc.stop(now + (type === "move" ? 0.06 : 0.18));
}

function getDistance(ax, ay, bx, by) {
  const dx = ax - bx;
  const dy = ay - by;
  return Math.sqrt(dx * dx + dy * dy);
}

function applyTheme(theme, announce = false) {
  currentTheme = theme;
  document.body.dataset.theme = theme;
  localStorage.setItem("ninoPortfolioTheme", theme);

  const isDark = theme === "dark";
  themeIcon.textContent = isDark ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", isDark ? t("themeToLight") : t("themeToDark"));
  themeToggle.title = isDark ? t("lightTheme") : t("darkTheme");
  themeColorMeta.setAttribute("content", isDark ? "#080b12" : "#f3f6f8");

  if (announce) {
    showToast(isDark ? t("darkEnabled") : t("lightEnabled"));
  }
}

function updateStationLabels() {
  document.querySelectorAll("[data-station]").forEach(button => {
    const id = button.dataset.station;
    button.querySelector(".station-label").textContent = station(id).title;
    button.setAttribute(
      "aria-label",
      currentLanguage === "sl" ? `Postaja ${station(id).title}` : `Station ${station(id).title}`
    );
  });

  document.querySelectorAll("[data-open]").forEach(button => {
    button.textContent = station(button.dataset.open).title;
  });
}

function updateMission() {
  visitedCount.textContent = visited.size;
  const next = stationOrder.find(id => !visited.has(id));

  if (!next) {
    missionText.textContent = t("missionComplete");
    return;
  }

  missionText.textContent = `${t("driveTo")} “${station(next).title}”`;
}

function renderOpenStation() {
  if (!openStationId) return;
  modalContent.innerHTML = `
    ${station(openStationId).content}
    <div class="quest-complete">✓ ${t("unlocked")}</div>
  `;
}

function applyLanguage(language) {
  currentLanguage = language;
  localStorage.setItem("ninoPortfolioLanguage", language);
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (uiText[language][key] !== undefined) {
      element.textContent = uiText[language][key];
    }
  });

  heroTitle.innerHTML = t("heroTitle");
  heroSubtitle.innerHTML = t("heroSubtitle");
  driveHelp.innerHTML = t("driveHelp");
  openHelp.innerHTML = t("openHelp");
  helpTitle.textContent = t("helpTitle");
  metaDescription.setAttribute("content", t("metaDescription"));

  brandLink.setAttribute("aria-label", t("home"));
  heroSection.setAttribute("aria-label", t("heroAria"));
  gameCard.setAttribute("aria-label", t("gameAria"));
  world.setAttribute("aria-label", t("worldAria"));
  quickNav.setAttribute("aria-label", t("quickNavAria"));
  mobileControls.setAttribute("aria-label", t("mobileAria"));
  document.getElementById("languageGroup").setAttribute("aria-label", t("langAria"));
  helpBtn.setAttribute("aria-label", t("helpButton"));
  helpBtn.title = t("helpButton");
  modalClose.setAttribute("aria-label", t("close"));
  helpClose.setAttribute("aria-label", t("close"));
  soundToggle.setAttribute("aria-label", t("soundToggle"));
  soundToggle.title = t("sound");
  carImage.alt = t("carAlt");

  const driveButtons = {
    up: t("up"),
    left: t("left"),
    down: t("down"),
    right: t("right")
  };
  document.querySelectorAll(".drive-btn").forEach(button => {
    button.setAttribute("aria-label", driveButtons[button.dataset.key]);
  });

  document.querySelectorAll(".lang-option").forEach(button => {
    const active = button.dataset.lang === language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  updateStationLabels();
  updateMission();
  checkStations();
  renderOpenStation();
  applyTheme(currentTheme, false);
}

function checkStations() {
  let closest = null;
  let closestDistance = Infinity;

  for (const [id, position] of Object.entries(stationPositions)) {
    const distance = getDistance(player.x, player.y, position.x, position.y);
    if (distance < closestDistance) {
      closestDistance = distance;
      closest = id;
    }
  }

  nearbyStation = closestDistance < 7.4 ? closest : null;
  proximityPrompt.classList.toggle("visible", Boolean(nearbyStation));

  if (nearbyStation) {
    proximityText.textContent = currentLanguage === "sl"
      ? `${station(nearbyStation).title} ${t("stationReached")}`
      : `${station(nearbyStation).title} ${t("stationReached")}`;
  }
}

function updatePlayer(dt) {
  let dx = 0;
  let dy = 0;

  if (keys.left) dx -= 1;
  if (keys.right) dx += 1;
  if (keys.up) dy -= 1;
  if (keys.down) dy += 1;

  const length = Math.hypot(dx, dy);
  player.moving = length > 0;

  if (length > 0) {
    dx /= length;
    dy /= length;

    player.x += dx * player.speed * dt;
    player.y += dy * player.speed * dt;

    player.x = clamp(player.x, 3, 97);
    player.y = clamp(player.y, 5, 95);

    player.angle = Math.atan2(dy, dx) * 180 / Math.PI + 90;
  }

  car.style.left = `${player.x}%`;
  car.style.top = `${player.y}%`;
  car.style.setProperty("--rot", `${player.angle}deg`);

  miniCar.style.left = `${player.x}%`;
  miniCar.style.top = `${player.y}%`;

  speedValue.textContent = player.moving ? "260" : "0";
  checkStations();
}

function gameLoop(time) {
  const dt = Math.min((time - lastTime) / 1000, 0.04);
  lastTime = time;
  updatePlayer(dt);
  requestAnimationFrame(gameLoop);
}

function markVisited(id) {
  if (visited.has(id)) return;

  visited.add(id);
  document.querySelector(`[data-station="${id}"]`)?.classList.add("visited");
  updateMission();

  if (visited.size === stationOrder.length) {
    setTimeout(() => {
      showToast(t("questComplete"));
      playTone("complete");
    }, 350);
  }
}

function openStation(id) {
  if (!stationText[currentLanguage][id]) return;

  openStationId = id;
  markVisited(id);
  renderOpenStation();

  modalBackdrop.hidden = false;
  document.body.classList.add("modal-open");
  modalClose.focus();
  playTone("open");
}

function closeModal() {
  modalBackdrop.hidden = true;
  openStationId = null;
  document.body.classList.remove("modal-open");
  world.focus();
}

function closeHelp() {
  helpBackdrop.hidden = true;
  document.body.classList.remove("modal-open");
  world.focus();
}

document.addEventListener("keydown", event => {
  const direction = keyToDirection(event.key);

  if (direction && modalBackdrop.hidden && helpBackdrop.hidden) {
    event.preventDefault();
    setDirection(direction, true);
  }

  if (
    event.key.toLowerCase() === "e" &&
    nearbyStation &&
    modalBackdrop.hidden &&
    helpBackdrop.hidden
  ) {
    event.preventDefault();
    openStation(nearbyStation);
  }

  if (event.key === "Escape") {
    if (!modalBackdrop.hidden) closeModal();
    if (!helpBackdrop.hidden) closeHelp();
  }
});

document.addEventListener("keyup", event => {
  const direction = keyToDirection(event.key);
  if (direction) {
    event.preventDefault();
    setDirection(direction, false);
  }
});

document.querySelectorAll(".drive-btn").forEach(button => {
  const direction = button.dataset.key;

  const press = event => {
    event.preventDefault();
    setDirection(direction, true);
    button.classList.add("active");
    world.focus();
  };

  const release = event => {
    event.preventDefault();
    setDirection(direction, false);
    button.classList.remove("active");
  };

  button.addEventListener("pointerdown", press);
  button.addEventListener("pointerup", release);
  button.addEventListener("pointercancel", release);
  button.addEventListener("pointerleave", release);
});

document.querySelectorAll(".station").forEach(button => {
  button.addEventListener("click", () => {
    const id = button.dataset.station;
    const position = stationPositions[id];
    const distance = getDistance(player.x, player.y, position.x, position.y);

    if (distance < 7.4) {
      openStation(id);
    } else {
      showToast(t("getCloser"));
    }
  });
});

document.querySelectorAll("[data-open]").forEach(button => {
  button.addEventListener("click", () => openStation(button.dataset.open));
});

document.querySelectorAll(".lang-option").forEach(button => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

themeToggle.addEventListener("click", () => {
  applyTheme(currentTheme === "dark" ? "light" : "dark", true);
});

openStationBtn.addEventListener("click", () => {
  if (nearbyStation) openStation(nearbyStation);
});

modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", event => {
  if (event.target === modalBackdrop) closeModal();
});

helpBtn.addEventListener("click", () => {
  helpBackdrop.hidden = false;
  document.body.classList.add("modal-open");
  helpClose.focus();
});

helpClose.addEventListener("click", closeHelp);
helpBackdrop.addEventListener("click", event => {
  if (event.target === helpBackdrop) closeHelp();
});

soundToggle.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  soundIcon.textContent = soundEnabled ? "♫" : "♪";
  soundToggle.setAttribute("aria-pressed", String(soundEnabled));
  showToast(soundEnabled ? t("soundOn") : t("soundOff"));
  if (soundEnabled) playTone("open");
});

let wasMoving = false;
setInterval(() => {
  if (player.moving && !wasMoving) playTone("move");
  wasMoving = player.moving;
}, 100);

applyLanguage(currentLanguage);
applyTheme(currentTheme, false);
world.focus();
requestAnimationFrame(gameLoop);
