import { injectSpeedInsights } from '@vercel/speed-insights';
injectSpeedInsights();

// Translations Dictionary for ES and EN
const TRANSLATIONS = {
  es: {
    topBar1: '<i class="fa-solid fa-paintbrush"></i> Medellín es una galería de arte viva',
    topBar2: '<i class="fa-brands fa-whatsapp"></i> Reservas directas por WhatsApp con guías locales',
    navTours: "Experiencias",
    navAbout: "La Historia",
    navGallery: "Galería Real",
    navReviews: "Reseñas",
    navContact: "Contacto",
    btnBookNow: '<i class="fa-brands fa-whatsapp"></i> Reservar Ahora',
    heroBadge: "Recomendado por nuestros viajeros",
    heroTitle: 'Vive Medellín desde sus <span class="highlight">calles y relatos</span>',
    heroDesc: "Acompañanos a descubrir la resiliencia de la Comuna 13, el aroma del café de origen en La Sierra y los rincones con más alma de la ciudad.",
    btnExplore: '<i class="fa-solid fa-compass"></i> Ver Experiencias',
    btnTalkGuide: '<i class="fa-brands fa-whatsapp"></i> Hablar con un Guía',
    statHappy: "Viajeros Felices",
    statLocal: "Guías Locales",
    statRating: "Calificación Real",
    overlayTitle: "Historias de la Medellín Auténtica",
    overlaySub: "📍 Recorridos Diarios con Guías Nativos",
    btnSeeMore: "Ver Más",
    toursTag: "Nuestras Experiencias",
    toursTitle: "Tours Diseñados para Conectar",
    toursDesc: "No vendemos recorridos masivos. Diseñamos experiencias íntimas donde el arte, la historia y la comunidad son los protagonistas.",
    t1Tag: "Resiliencia & Arte",
    t1Title: "Comuna 13: Grafiti & Transformación",
    t1Desc: "Recorre las famosas escaleras eléctricas, descubre el significado detrás de los murales urbanos y conoce las historias reales contadas por artistas y líderes locales.",
    t1F1: "Guía local nativo de la comunidad",
    t1F2: "Show de Hip Hop & Breakdance en vivo",
    t1F3: "Degustación de helado artesanal de crema",
    t1Duration: "3 Horas",
    t2Tag: "Sensorial & Tradición",
    t2Title: "Tour del Café de Origen en La Sierra",
    t2Desc: "Sube a las montañas de Medellín y vive la experiencia cafetera completa: recolección de grano, despulpado, tostión y cata gourmet con vista 360° al Aburrá.",
    t2F1: "Experiencia completa en finca cafetera",
    t2F2: "Cata profesional de café especial",
    t2F3: "Vista panorámica de toda la ciudad",
    t2Duration: "4.5 Horas",
    t3Tag: "Cultura & Contrastes",
    t3Title: "City Tour: Medellín al Descubierto",
    t3Desc: "Descubre los contrastes de la ciudad: Plaza Botero, sistema Metro Cable, centro histórico, la zona roja y cómo los paisas viven y transforman su entorno día a día.",
    t3F1: "Pasajes en Metro & Metro Cable incluidos",
    t3F2: "Visita a Plaza Botero & Parques temáticos",
    t3F3: "Narrativa auténtica sin mitos comerciales",
    t3Duration: "4 Horas",
    btnExploreCard: "Explorar Tour",
    aboutTag: "Nuestra Historia",
    aboutTitle: "Turismo Humano & Con Propósito",
    aboutP1: "Nacimos con la convicción de que viajar es conectar. No llevamos a nuestros visitantes como meros espectadores; los integramos a la dinámica local, apoyando directamente a guías comunitarios, artistas del aerosol, microempresarios y caficultores antioqueños.",
    aboutP2: "Cada reserva que realizas genera un impacto económico directo en las familias de la Comuna 13 y el barrio La Sierra.",
    btnSchedule: '<i class="fa-solid fa-calendar-check"></i> Agendar Experiencia',
    galleryTag: "Galería Real",
    galleryTitle: "Momentos de Nuestros Viajeros",
    galleryDesc: "Fotografías reales tomadas durante nuestros tours diarios.",
    reviewsTag: "Testimonios Reales",
    reviewsTitle: "Lo que dicen los viajeros",
    reviewsDesc: "Opiniones auténticas de quienes ya caminaron Medellín con nosotros.",
    r1Text: '"El tour de la Comuna 13 con Medellín Galería Tour fue lo mejor de mi viaje a Colombia. El guía creció en el barrio y su relato te eriza la piel. ¡Recomendadísimo!"',
    r2Text: '"El Tour del Café en La Sierra tiene una vista increíble de Medellín que muy pocos turistas conocen. Probar el café directo de la finca fue una experiencia 10/10."',
    r3Text: '"Puntuales, amables y muy profesionales. Te hacen sentir seguros en todo momento y se nota el amor y orgullo con el que muestran su ciudad."',
    bookingTag: "Reserva Fácil",
    bookingTitle: "Calcula y Agenda tu Tour",
    bookingDesc: "Selecciona tus datos y te redirigiremos a WhatsApp para confirmar tu cupo al instante.",
    lblTour: "Experiencia Deseada",
    lblPeople: "Número de Personas",
    lblDate: "Fecha del Tour",
    lblName: "Tu Nombre Completo",
    btnSubmitBooking: '<i class="fa-brands fa-whatsapp"></i> Confirmar Reserva por WhatsApp',
    modalIncludesTitle: "El Tour Incluye:",
    btnModalBook: '<i class="fa-brands fa-whatsapp"></i> Reservar este Tour por WhatsApp',
    footerP: "Vive Medellín desde sus calles y relatos. Recorridos humanos, culturales e inolvidables.",
    footerTitle1: "Experiencias",
    footerTitle2: "Contacto"
  },
  en: {
    topBar1: '<i class="fa-solid fa-paintbrush"></i> Medellín is a living art gallery',
    topBar2: '<i class="fa-brands fa-whatsapp"></i> Direct WhatsApp bookings with local guides',
    navTours: "Experiences",
    navAbout: "Our Story",
    navGallery: "Real Gallery",
    navReviews: "Reviews",
    navContact: "Contact",
    btnBookNow: '<i class="fa-brands fa-whatsapp"></i> Book Now',
    heroBadge: "Recommended by our travelers",
    heroTitle: 'Experience Medellín through its <span class="highlight">streets & stories</span>',
    heroDesc: "Join us to discover the resilience of Comuna 13, the aroma of specialty coffee in La Sierra, and the most authentic corners of the city.",
    btnExplore: '<i class="fa-solid fa-compass"></i> Explore Tours',
    btnTalkGuide: '<i class="fa-brands fa-whatsapp"></i> Chat with a Guide',
    statHappy: "Happy Travelers",
    statLocal: "Local Guides",
    statRating: "Verified Rating",
    overlayTitle: "Stories of Authentic Medellín",
    overlaySub: "📍 Daily Guided Tours by Native Locals",
    btnSeeMore: "See More",
    toursTag: "Our Experiences",
    toursTitle: "Tours Designed to Connect",
    toursDesc: "We don't do mass tourism. We craft intimate experiences where art, history, and community take center stage.",
    t1Tag: "Resilience & Art",
    t1Title: "Comuna 13: Graffiti & Transformation",
    t1Desc: "Ride the famous outdoor escalators, discover the meaning behind urban murals, and hear real stories told by local artists and community leaders.",
    t1F1: "Native local guide born in the community",
    t1F2: "Live Hip Hop & Breakdance show",
    t1F3: "Artisanal ice cream tasting included",
    t1Duration: "3 Hours",
    t2Tag: "Sensory & Tradition",
    t2Title: "Specialty Coffee Tour in La Sierra",
    t2Desc: "Head up into Medellín's mountains for a full coffee experience: harvesting, de-pulping, roasting, and gourmet tasting with a 360° valley view.",
    t2F1: "Full artisanal coffee farm experience",
    t2F2: "Professional specialty coffee tasting",
    t2F3: "360° panoramic city viewpoint",
    t2Duration: "4.5 Hours",
    t3Tag: "Culture & Contrasts",
    t3Title: "City Tour: Medellín Uncovered",
    t3Desc: "Discover the city's contrasts: Botero Plaza, Cable Car system, historic downtown, and how locals live and transform their environment every day.",
    t3F1: "Metro & Cable Car tickets included",
    t3F2: "Visit to Botero Plaza & cultural parks",
    t3F3: "Authentic narrative without commercial myths",
    t3Duration: "4 Hours",
    btnExploreCard: "Explore Tour",
    aboutTag: "Our Story",
    aboutTitle: "Purpose-Driven Human Tourism",
    aboutP1: "We were born with the belief that travel is connection. We don't bring guests as mere spectators; we integrate them into local life, supporting community guides, street artists, and coffee farmers.",
    aboutP2: "Every booking you make directly supports families in Comuna 13 and La Sierra neighborhood.",
    btnSchedule: '<i class="fa-solid fa-calendar-check"></i> Book Your Experience',
    galleryTag: "Real Gallery",
    galleryTitle: "Traveler Moments",
    galleryDesc: "Real photos captured during our daily tours.",
    reviewsTag: "Real Testimonials",
    reviewsTitle: "What Travelers Say",
    reviewsDesc: "Authentic reviews from travelers who walked Medellín with us.",
    r1Text: '"The Comuna 13 tour with Medellín Galería Tour was the highlight of my trip to Colombia. Our guide grew up in the neighborhood and his story gives you goosebumps. Highly recommended!"',
    r2Text: '"The Coffee Tour in La Sierra has an incredible view of Medellín that very few tourists get to see. Tasting coffee right from the farm was a 10/10 experience."',
    r3Text: '"Punctual, friendly, and super professional. They make you feel safe at all times and you can feel the love and pride with which they share their city."',
    bookingTag: "Easy Booking",
    bookingTitle: "Calculate & Book Your Tour",
    bookingDesc: "Select your details and we will redirect you to WhatsApp for instant confirmation.",
    lblTour: "Desired Experience",
    lblPeople: "Number of People",
    lblDate: "Tour Date",
    lblName: "Full Name",
    btnSubmitBooking: '<i class="fa-brands fa-whatsapp"></i> Confirm Booking on WhatsApp',
    modalIncludesTitle: "Tour Includes:",
    btnModalBook: '<i class="fa-brands fa-whatsapp"></i> Book This Tour on WhatsApp',
    footerP: "Experience Medellín through its streets and stories. Human, cultural, and unforgettable tours.",
    footerTitle1: "Experiences",
    footerTitle2: "Contact"
  }
};

// Tour Data Dictionary
const TOURS_DATA = {
  comuna13: {
    title: {
      es: "Comuna 13: Grafiti & Transformación Urbana",
      en: "Comuna 13: Graffiti & Urban Transformation"
    },
    tag: { es: "Resiliencia & Arte", en: "Resilience & Art" },
    price: "$70.000 COP",
    image: "/images/comuna13_real.jpg",
    description: {
      es: "Un recorrido transformador por la Comuna 13. Conoce de primera mano cómo el arte urbano, la cultura hip-hop y las escaleras eléctricas reemplazaron la violencia por esperanza y color. Guiado exclusivamente por líderes y artistas nacidos en la comunidad.",
      en: "A transformative journey through Comuna 13. Experience firsthand how urban art, hip-hop culture, and outdoor escalators replaced violence with hope and color. Guided exclusively by leaders and artists born in the community."
    },
    includes: {
      es: [
        "Guía local bilingüe/nativo de la Comuna 13",
        "Show de Hip Hop & Breakdance al aire libre",
        "Degustación de helado tradicional de crema",
        "Acceso a miradores y galerías comunitarias",
        "Fotografías en los murales más icónicos"
      ],
      en: [
        "Native local guide born in Comuna 13",
        "Live outdoor Hip Hop & Breakdance show",
        "Artisanal traditional ice cream tasting",
        "Access to community viewpoints & galleries",
        "Photo stops at iconic street art murals"
      ]
    }
  },
  coffee: {
    title: {
      es: "Tour del Café de Origen en La Sierra",
      en: "Specialty Coffee Tour in La Sierra"
    },
    tag: { es: "Sensorial & Tradición", en: "Sensory & Tradition" },
    price: "$130.000 COP",
    image: "/images/coffee_real.jpg",
    description: {
      es: "Sube a las altas montañas de La Sierra en Medellín y sumérgete en la cultura cafetera paisa. Recorre los senderos de la finca, recolecta granos maduros, aprende sobre el proceso de secado y disfruta de una cata guiada con vista panorámica a toda la ciudad.",
      en: "Head up into the mountains of La Sierra in Medellín and immerse yourself in Paisa coffee culture. Walk farm trails, pick ripe cherries, learn roasting techniques, and enjoy a guided coffee tasting overlooking the entire valley."
    },
    includes: {
      es: [
        "Transporte de ida y vuelta desde punto de encuentro",
        "Recorrido completo en finca cafetera artesanal",
        "Cata guiada de café especial de origen",
        "Refrigerio o aperitivo tradicional antioqueño",
        "Sombrero y canasto de recolector tradicional para fotos"
      ],
      en: [
        "Round-trip transport from meeting point",
        "Full tour of artisanal coffee farm",
        "Guided specialty coffee cupping & tasting",
        "Traditional local snack included",
        "Traditional picker hat & basket for photos"
      ]
    }
  },
  city: {
    title: {
      es: "City Tour: Medellín al Descubierto",
      en: "City Tour: Medellín Uncovered"
    },
    tag: { es: "Cultura & Contrastes", en: "Culture & Contrasts" },
    price: "$90.000 COP",
    image: "/images/city_real.jpg",
    description: {
      es: "Descubre la Medellín real con una mirada respetuosa y profunda. Viajaremos en el icónico sistema Metro y Metro Cable, exploraremos la Plaza Botero con sus esculturas de bronce, el centro histórico y conoceremos cómo la ciudad se reinventó.",
      en: "Discover real Medellín with an authentic and respectful lens. Travel on the iconic Metro and Cable Car system, explore Botero Plaza with its bronze sculptures, historical downtown, and see how the city reinvented itself."
    },
    includes: {
      es: [
        "Tiquetes incluidos de Metro y Metro Cable",
        "Recorrido guiado por Plaza Botero y Parque Berrío",
        "Historias reales sobre la transformación urbana de Medellín",
        "Recomendaciones gastronómicas locales"
      ],
      en: [
        "Metro and Cable Car tickets included",
        "Guided tour of Botero Plaza & Berrío Park",
        "Real stories behind Medellín's urban evolution",
        "Local food & coffee recommendations"
      ]
    }
  }
};

let currentLang = "es";

document.addEventListener("DOMContentLoaded", () => {
  // Language Switching Handler
  const langBtns = document.querySelectorAll(".lang-btn");
  langBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const selectedLang = e.currentTarget.getAttribute("data-lang");
      if (selectedLang === currentLang) return;

      currentLang = selectedLang;

      // Toggle Active Button
      langBtns.forEach((b) => b.classList.remove("active"));
      e.currentTarget.classList.add("active");

      // Apply Translations to DOM
      updatePageLanguage(currentLang);
    });
  });

  function updatePageLanguage(lang) {
    const dict = TRANSLATIONS[lang];
    if (!dict) return;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });
  }

  // Drawer Logic
  const drawer = document.getElementById('drawer');
  const openBtn = document.getElementById('drawer-open');
  const scroller = drawer ? drawer.querySelector('.Drawer-scroller') : null;
  const sheet = drawer ? drawer.querySelector('.Drawer-sheet') : null;
  const closeBtn = drawer ? drawer.querySelector('.drawer-close') : null;

  if (drawer && openBtn && scroller && sheet) {
    function openDrawer() {
      drawer.showPopover();
      if (!CSS.supports('scroll-initial-target', 'nearest')) {
        scroller.scrollTo({left: scroller.offsetWidth, behavior: 'instant'});
        requestAnimationFrame(() => requestAnimationFrame(() => {
          scroller.scrollTo({left: 0, behavior: 'auto'});
        }));
      } else {
        scroller.scrollTo({left: 0, behavior: 'auto'});
      }
    }

    function closeDrawer() {
      scroller.scrollTo({left: scroller.offsetWidth, behavior: 'auto'});
    }

    function onDrawerOpened() {
      openBtn.setAttribute('aria-expanded', 'true');
      sheet.focus();
    }

    function onDrawerClosed() {
      drawer.hidePopover();
      openBtn.setAttribute('aria-expanded', 'false');
    }

    const visibleThreshold = 1 / window.innerWidth;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries.at(-1);
      if (entry.intersectionRatio < visibleThreshold) onDrawerClosed();
      if (entry.intersectionRatio === 1) onDrawerOpened();
    }, {root: drawer, threshold: [visibleThreshold, 1]});
    
    observer.observe(sheet);

    openBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    
    drawer.addEventListener('click', (event) => {
      if (!sheet.contains(event.target)) closeDrawer();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeDrawer();
    });
    
    // Close drawer when a link is clicked
    const drawerLinks = drawer.querySelectorAll('.drawer-links a');
    drawerLinks.forEach(link => {
      link.addEventListener('click', closeDrawer);
    });
  }

  // Booking Form Logic
  const bookingForm = document.getElementById("booking-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const tour = document.getElementById("tour-select").value;
      const people = document.getElementById("people-count").value;
      const date = document.getElementById("tour-date").value;
      const name = document.getElementById("user-name").value;
      
      const isEnglish = currentLang === "en";
      const message = isEnglish 
        ? `Hello, I would like to make a reservation.\n\n*Name:* ${name}\n*Tour:* ${tour}\n*People:* ${people}\n*Date:* ${date}`
        : `Hola, me gustaría hacer una reserva.\n\n*Nombre:* ${name}\n*Tour:* ${tour}\n*Personas:* ${people}\n*Fecha:* ${date}`;
      
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/573216464770?text=${encodedMessage}`;
      
      window.open(whatsappUrl, "_blank");
    });
  }
});
