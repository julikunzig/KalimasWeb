// ============================================
// KALIMAS GROUP — i18n (EN default / ES toggle)
// ============================================

const I18N_STORAGE_KEY = 'kalimas-lang';

const translations = {
    en: {
        // Meta / document
        'meta.home.title': 'Kalimas Group — Technology Group',
        'meta.home.description': 'We build the software that moves tomorrow’s companies. Platforms for events, scheduling, and business management.',
        'meta.kalirio.title': 'Kalirio — Event Management | Kalimas Group',
        'meta.kalirio.description': 'Kalirio is Kalimas Group’s end-to-end platform to run events of any scale: tickets, staff, attendees, and analytics.',
        'meta.kalenda.title': 'Kalenda — Smart Scheduling | Kalimas Group',
        'meta.kalenda.description': 'Kalenda automates appointments and bookings with real-time availability, multichannel reminders, and no-show metrics.',
        'meta.suite.title': 'Kalima Suite — CRM + Modules | Kalimas Group',
        'meta.suite.description': 'Kalima Suite unifies Kalenda, CRM, analytics, and integrations into one Kalimas Group business platform.',

        // Shared chrome
        'a11y.skip': 'Skip to content',
        'a11y.nav': 'Main',
        'a11y.home': 'Kalimas Group — Home',
        'a11y.menuOpen': 'Open menu',
        'a11y.menuClose': 'Close menu',
        'a11y.lang': 'Language',
        'a11y.breadcrumb': 'Breadcrumb',

        'nav.products': 'Products',
        'nav.solutions': 'Solutions',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'nav.cta': 'Let’s talk',
        'nav.ctaDemo': 'Request demo',

        // Home hero
        'home.hero.title': 'We build the software<br><span>that moves companies.</span>',
        'home.hero.subtitle': 'Platforms to coordinate teams, schedule without friction, and manage customer relationships — with the same standard of excellence.',
        'home.hero.ctaProducts': 'Explore products',
        'home.hero.ctaDemo': 'Request demo',

        // Products section
        'home.products.tag': 'Our products',
        'home.products.title': 'Three platforms.<br>One ecosystem.',
        'home.products.desc': 'Independent products, designed to integrate within the Kalimas ecosystem.',
        'home.products.kalirio': 'Event management and operations at any scale.',
        'home.products.kalenda': 'Smart scheduling for appointments and bookings.',
        'home.products.suite': 'CRM, analytics, and integrations in one platform.',

        // Kalirio preview
        'home.kalirio.badge': 'Events & Operations',
        'home.kalirio.tagline': 'End-to-end platform for event management and operations.',
        'home.kalirio.desc': 'From staff coordination to real-time tracking, Kalirio unifies tickets, attendees, experiences, and analytics in one platform.',
        'home.kalirio.f1': 'Tickets and access control',
        'home.kalirio.f2': 'Real-time attendee management',
        'home.kalirio.f3': 'Multi-venue staff coordination',
        'home.kalirio.f4': 'Operations analytics and reports',
        'home.kalirio.cta': 'View Kalirio',
        'home.kalirio.stat1': 'Attendees',
        'home.kalirio.stat2': 'Check-in',
        'home.kalirio.stat3': 'Staff',

        // Kalenda preview
        'home.kalenda.badge': 'Appointment scheduling',
        'home.kalenda.tagline': 'Schedule, automate, and manage appointments without friction.',
        'home.kalenda.desc': 'Real-time availability, multichannel reminders, and reports — as a standalone product or a Kalima Suite module.',
        'home.kalenda.f1': 'Real-time availability',
        'home.kalenda.f2': 'Automatic multichannel reminders',
        'home.kalenda.f3': 'Confirmations and customer profiles',
        'home.kalenda.f4': 'Appointment and no-show metrics',
        'home.kalenda.cta': 'View Kalenda',
        'home.kalenda.month': 'June 2026',
        'home.kalenda.e1': 'Consult — María L.',
        'home.kalenda.e2': 'Demo — Company XYZ',
        'home.kalenda.e3': 'Follow-up — Carlos R.',
        'home.cal.mon': 'M',
        'home.cal.tue': 'T',
        'home.cal.wed': 'W',
        'home.cal.thu': 'T',
        'home.cal.fri': 'F',

        // Suite preview
        'home.suite.badge': 'Business suite',
        'home.suite.tagline': 'Your whole business. One platform.',
        'home.suite.desc': 'Kalenda, CRM, analytics, and integrations unified for companies that want operational efficiency without fragmented tools.',
        'home.suite.m1': 'Scheduling and bookings',
        'home.suite.m2': 'Pipeline and relationships',
        'home.suite.m3': 'Business metrics',
        'home.suite.m4': 'Connect your stack',
        'home.suite.cta': 'Explore the suite',

        // Solutions
        'home.solutions.tag': 'Solutions by industry',
        'home.solutions.title': 'Technology that adapts<br>to your business.',
        'home.solutions.desc': 'We configure our platforms for the specific challenges of each sector.',
        'home.solutions.health': 'Healthcare',
        'home.solutions.healthDesc': 'Medical appointment scheduling, patient management, and clinical staff coordination.',
        'home.solutions.events': 'Events',
        'home.solutions.eventsDesc': 'Staff coordination, real-time logistics, and operations reports for large-scale events.',
        'home.solutions.hospitality': 'Hospitality',
        'home.solutions.hospitalityDesc': 'Smart bookings, guest management, and automated customer service.',
        'home.solutions.pro': 'Professional services',
        'home.solutions.proDesc': 'CRM for firms, consulting scheduling, and project follow-up.',
        'home.solutions.edu': 'Education',
        'home.solutions.eduDesc': 'Class scheduling, tutor coordination, and academic timetable management.',
        'home.solutions.retail': 'Retail & commerce',
        'home.solutions.retailDesc': 'Store team management, rotating shifts, and relationships with frequent customers.',

        // About
        'home.about.tag': 'How we work',
        'home.about.title': 'We don’t just write code.<br>We build trust.',
        'home.about.v1': 'Global vision',
        'home.about.v1d': 'We think big and build for international scale.',
        'home.about.v2': 'Innovation',
        'home.about.v2d': 'We drive ideas that transform industries.',
        'home.about.v3': 'Real impact',
        'home.about.v3d': 'Solutions with sustainable, measurable value.',
        'home.about.v4': 'Trust',
        'home.about.v4d': 'Transparency, security, and excellence in every delivery.',
        'home.about.v5': 'Growth',
        'home.about.v5d': 'Every product evolves; every customer grows with us.',

        // Contact
        'home.contact.title': 'Have a challenge worth<br>building?',
        'home.contact.desc': 'Tell us what you need: a Kalirio or Kalenda demo, a custom integration, or an idea from scratch. We reply fast.',
        'home.contact.email': 'Email',
        'home.contact.web': 'Web',
        'form.name': 'Name',
        'form.namePh': 'Your name',
        'form.email': 'Email',
        'form.emailPh': 'you@company.com',
        'form.interest': 'I’m interested in',
        'form.interestPh': 'Select an option',
        'form.opt.kalirio': 'Kalirio — Events',
        'form.opt.kalenda': 'Kalenda — Scheduling',
        'form.opt.suite': 'Kalima Suite — CRM + Modules',
        'form.opt.custom': 'Custom development',
        'form.opt.other': 'Other',
        'form.message': 'Message',
        'form.messagePh': 'Tell us about your project…',
        'form.submit': 'Send message',
        'form.sending': 'Sending…',
        'form.subject': 'New contact — Kalimas Group',
        'form.err.name': 'Name is required.',
        'form.err.email': 'Email is required.',
        'form.err.emailInvalid': 'Enter a valid email.',
        'form.err.interest': 'Select an option.',
        'form.err.message': 'Message is required.',
        'form.err.messageShort': 'Write at least 10 characters.',
        'form.err.fields': 'Please review the highlighted fields.',
        'form.ok.dev': 'Form validated. Configure your Formspree ID in the form action attribute for real submissions.',
        'form.ok.sent': 'Message sent! We’ll get back to you soon.',
        'form.err.send': 'Could not send. Try again or write to hola@kalimasgroup.net.',
        'form.err.network': 'Connection error. Try again or write to hola@kalimasgroup.net.',

        // Footer
        'footer.products': 'Products',
        'footer.company': 'Company',
        'footer.contact': 'Contact',
        'footer.about': 'About',
        'footer.solutions': 'Solutions',
        'footer.rights': '© 2026 Kalimas Group. All rights reserved.',
        'footer.home': 'Home',

        // Product pages shared
        'page.breadcrumb.home': 'Home',
        'page.breadcrumb.products': 'Products',
        'page.requestDemo': 'Request demo',
        'page.viewKalenda': 'View Kalenda',
        'page.viewKalirio': 'View Kalirio',
        'page.viewSuite': 'View Kalima Suite',
        'page.exploreWithUs': 'Explore with us',
        'page.ctaTalk': 'Let’s talk',

        // Kalirio page
        'kalirio.badge': 'Events & Operations',
        'kalirio.tagline': 'End-to-end platform for managing and operating events of any scale.',
        'kalirio.h2': 'The whole event. One view.',
        'kalirio.desc': 'Kalirio connects tickets, access control, staff, and analytics so your operation doesn’t depend on spreadsheets or scattered chats. Built for producers, venues, and teams that run at scale.',
        'kalirio.f1': 'Tickets and access control',
        'kalirio.f2': 'Real-time attendee management',
        'kalirio.f3': 'Experiences and activations',
        'kalirio.f4': 'Multi-venue staff coordination',
        'kalirio.f5': 'Operations analytics and reports',
        'kalirio.forWhom.tag': 'Who it’s for',
        'kalirio.forWhom.title': 'Built for demanding operations',
        'kalirio.forWhom.p1': 'Producers',
        'kalirio.forWhom.p1d': 'Visibility of staff, gates, and capacity at every festival or tour venue.',
        'kalirio.forWhom.p2': 'Venues',
        'kalirio.forWhom.p2d': 'Smooth check-in and reports ready to close every show.',
        'kalirio.forWhom.p3': 'Brands & activations',
        'kalirio.forWhom.p3d': 'Measurable experiences without losing operational control on the day.',
        'kalirio.cta.title': 'Ready to operate without friction?',
        'kalirio.cta.desc': 'Book a Kalirio demo and we’ll see how it fits your next event.',

        // Kalenda page
        'kalenda.badge': 'Appointment scheduling',
        'kalenda.tagline': 'Smart platform to schedule, automate, and manage appointments and bookings.',
        'kalenda.h2': 'A calendar that works for you.',
        'kalenda.desc': 'Kalenda reduces no-shows and manual work with real-time availability, multichannel reminders, and customer profiles. Use it alone or as a module inside Kalima Suite.',
        'kalenda.f1': 'Real-time availability',
        'kalenda.f2': 'Automatic multichannel reminders',
        'kalenda.f3': 'Confirmations and customer profiles',
        'kalenda.f4': 'Appointment reports and metrics',
        'kalenda.f5': 'Integration with Kalima Suite',
        'kalenda.ind.tag': 'Industries',
        'kalenda.ind.title': 'Where time is the product',
        'kalenda.ind.p1': 'Clinics & healthcare',
        'kalenda.ind.p1d': 'Medical appointments with reminders and fewer no-shows.',
        'kalenda.ind.p2': 'Consulting',
        'kalenda.ind.p2d': 'Meeting and demo bookings with automatic confirmation.',
        'kalenda.ind.p3': 'Services & beauty',
        'kalenda.ind.p3d': 'Shift calendars, customer profiles, and easy rescheduling.',
        'kalenda.cta.title': 'Automate your calendar',
        'kalenda.cta.desc': 'Request a Kalenda demo and we’ll walk you through the full flow in minutes.',

        // Suite page
        'suite.badge': 'Business suite',
        'suite.tagline': 'Your whole business. One platform.',
        'suite.h2': 'Modules that understand each other.',
        'suite.desc': 'Kalima Suite integrates scheduling, CRM, analytics, and integrations so your team stops jumping between tools. One shared foundation, modules that grow with your operation.',
        'suite.m1': 'Smart scheduling and bookings',
        'suite.m2': 'Sales pipeline and relationships',
        'suite.m3': 'Business metrics and reports',
        'suite.m4': 'Connect your favorite tools',
        'suite.why.tag': 'Why Suite',
        'suite.why.title': 'One operation, one system',
        'suite.why.p1': 'Shared data',
        'suite.why.p1d': 'Customers, appointments, and pipeline in one model — no duplicate information.',
        'suite.why.p2': 'Gradual adoption',
        'suite.why.p2d': 'Start with Kalenda or CRM and turn on modules when your team is ready.',
        'suite.why.p3': 'Decisions with context',
        'suite.why.p3d': 'Analytics that cross schedule, sales, and customer activity.',
        'suite.cta.title': 'Let’s design your suite',
        'suite.cta.desc': 'Tell us how your team operates and we’ll map the right module journey.'
    },

    es: {
        'meta.home.title': 'Kalimas Group — Grupo Tecnológico',
        'meta.home.description': 'Construimos el software que mueve a las empresas del mañana. Plataformas tecnológicas para eventos, agendamiento y gestión empresarial.',
        'meta.kalirio.title': 'Kalirio — Gestión de eventos | Kalimas Group',
        'meta.kalirio.description': 'Kalirio es la plataforma integral de Kalimas Group para gestionar y operar eventos de cualquier escala: tickets, staff, asistentes y analytics.',
        'meta.kalenda.title': 'Kalenda — Agendamiento inteligente | Kalimas Group',
        'meta.kalenda.description': 'Kalenda automatiza citas y reservas con disponibilidad en tiempo real, recordatorios multicanal y métricas de no-shows.',
        'meta.suite.title': 'Kalima Suite — CRM + Módulos | Kalimas Group',
        'meta.suite.description': 'Kalima Suite unifica Kalenda, CRM, analytics e integraciones en una plataforma empresarial de Kalimas Group.',

        'a11y.skip': 'Saltar al contenido',
        'a11y.nav': 'Principal',
        'a11y.home': 'Kalimas Group — Inicio',
        'a11y.menuOpen': 'Abrir menú',
        'a11y.menuClose': 'Cerrar menú',
        'a11y.lang': 'Idioma',
        'a11y.breadcrumb': 'Migas de pan',

        'nav.products': 'Productos',
        'nav.solutions': 'Soluciones',
        'nav.about': 'Nosotros',
        'nav.contact': 'Contacto',
        'nav.cta': 'Hablemos',
        'nav.ctaDemo': 'Solicitar demo',

        'home.hero.title': 'Construimos el software<br><span>que mueve empresas.</span>',
        'home.hero.subtitle': 'Plataformas para coordinar equipos, agendar sin fricción y gestionar relaciones con clientes — con una misma exigencia de excelencia.',
        'home.hero.ctaProducts': 'Explorar productos',
        'home.hero.ctaDemo': 'Solicitar demo',

        'home.products.tag': 'Nuestros productos',
        'home.products.title': 'Tres plataformas.<br>Un ecosistema.',
        'home.products.desc': 'Productos independientes, pensados para integrarse dentro del ecosistema Kalimas.',
        'home.products.kalirio': 'Gestión y operación de eventos de cualquier escala.',
        'home.products.kalenda': 'Agendamiento inteligente de citas y reservas.',
        'home.products.suite': 'CRM, analytics e integraciones en una sola plataforma.',

        'home.kalirio.badge': 'Eventos & Operaciones',
        'home.kalirio.tagline': 'Plataforma integral para la gestión y operación de eventos.',
        'home.kalirio.desc': 'Desde la coordinación de staff hasta el seguimiento en tiempo real, Kalirio unifica tickets, asistentes, experiencias y analytics en una sola plataforma.',
        'home.kalirio.f1': 'Tickets y control de accesos',
        'home.kalirio.f2': 'Gestión de asistentes en tiempo real',
        'home.kalirio.f3': 'Coordinación de staff multi-sede',
        'home.kalirio.f4': 'Analytics y reportes de operación',
        'home.kalirio.cta': 'Ver Kalirio',
        'home.kalirio.stat1': 'Asistentes',
        'home.kalirio.stat2': 'Check-in',
        'home.kalirio.stat3': 'Staff',

        'home.kalenda.badge': 'Agendamiento de citas',
        'home.kalenda.tagline': 'Agenda, automatiza y gestiona citas sin fricción.',
        'home.kalenda.desc': 'Disponibilidad en tiempo real, recordatorios multicanal y reportes — como producto independiente o módulo de Kalima Suite.',
        'home.kalenda.f1': 'Disponibilidad en tiempo real',
        'home.kalenda.f2': 'Recordatorios automáticos multicanal',
        'home.kalenda.f3': 'Confirmaciones y perfiles de cliente',
        'home.kalenda.f4': 'Métricas de citas y no-shows',
        'home.kalenda.cta': 'Ver Kalenda',
        'home.kalenda.month': 'Junio 2026',
        'home.kalenda.e1': 'Consulta — María L.',
        'home.kalenda.e2': 'Demo — Empresa XYZ',
        'home.kalenda.e3': 'Seguimiento — Carlos R.',
        'home.cal.mon': 'L',
        'home.cal.tue': 'M',
        'home.cal.wed': 'M',
        'home.cal.thu': 'J',
        'home.cal.fri': 'V',

        'home.suite.badge': 'Suite empresarial',
        'home.suite.tagline': 'Todo tu negocio. Una sola plataforma.',
        'home.suite.desc': 'Kalenda, CRM, analytics e integraciones unificados para empresas que buscan eficiencia operativa sin fragmentar sus herramientas.',
        'home.suite.m1': 'Agendamiento y reservas',
        'home.suite.m2': 'Pipeline y relaciones',
        'home.suite.m3': 'Métricas de negocio',
        'home.suite.m4': 'Conecta tu stack',
        'home.suite.cta': 'Explorar la suite',

        'home.solutions.tag': 'Soluciones por industria',
        'home.solutions.title': 'Tecnología que se adapta<br>a tu negocio.',
        'home.solutions.desc': 'Configuramos nuestras plataformas para los retos específicos de cada sector.',
        'home.solutions.health': 'Salud',
        'home.solutions.healthDesc': 'Agendamiento de citas médicas, gestión de pacientes y coordinación de personal clínico.',
        'home.solutions.events': 'Eventos',
        'home.solutions.eventsDesc': 'Coordinación de staff, logística en tiempo real y reportes de operación para eventos masivos.',
        'home.solutions.hospitality': 'Hospitalidad',
        'home.solutions.hospitalityDesc': 'Reservas inteligentes, gestión de huéspedes y automatización de servicios al cliente.',
        'home.solutions.pro': 'Servicios profesionales',
        'home.solutions.proDesc': 'CRM para firmas, agendamiento de consultorías y seguimiento de proyectos.',
        'home.solutions.edu': 'Educación',
        'home.solutions.eduDesc': 'Programación de clases, coordinación de tutores y gestión de horarios académicos.',
        'home.solutions.retail': 'Retail & comercio',
        'home.solutions.retailDesc': 'Gestión de equipos de tienda, turnos rotativos y relación con clientes frecuentes.',

        'home.about.tag': 'Cómo trabajamos',
        'home.about.title': 'No solo escribimos código.<br>Construimos confianza.',
        'home.about.v1': 'Visión global',
        'home.about.v1d': 'Pensamos en grande y construimos para escala internacional.',
        'home.about.v2': 'Innovación',
        'home.about.v2d': 'Impulsamos ideas que transforman industrias.',
        'home.about.v3': 'Impacto real',
        'home.about.v3d': 'Soluciones con valor sostenible y medible.',
        'home.about.v4': 'Confianza',
        'home.about.v4d': 'Transparencia, seguridad y excelencia en cada entrega.',
        'home.about.v5': 'Crecimiento',
        'home.about.v5d': 'Cada producto evoluciona; cada cliente crece con nosotros.',

        'home.contact.title': '¿Tienes un reto que<br>vale la pena construir?',
        'home.contact.desc': 'Cuéntanos qué necesitas: una demo de Kalirio o Kalenda, una integración a medida o una idea desde cero. Respondemos rápido.',
        'home.contact.email': 'Correo',
        'home.contact.web': 'Web',
        'form.name': 'Nombre',
        'form.namePh': 'Tu nombre',
        'form.email': 'Correo',
        'form.emailPh': 'tu@empresa.com',
        'form.interest': 'Me interesa',
        'form.interestPh': 'Selecciona una opción',
        'form.opt.kalirio': 'Kalirio — Eventos',
        'form.opt.kalenda': 'Kalenda — Agendamiento',
        'form.opt.suite': 'Kalima Suite — CRM + Módulos',
        'form.opt.custom': 'Desarrollo a medida',
        'form.opt.other': 'Otro',
        'form.message': 'Mensaje',
        'form.messagePh': 'Cuéntanos sobre tu proyecto…',
        'form.submit': 'Enviar mensaje',
        'form.sending': 'Enviando…',
        'form.subject': 'Nuevo contacto — Kalimas Group',
        'form.err.name': 'El nombre es obligatorio.',
        'form.err.email': 'El correo es obligatorio.',
        'form.err.emailInvalid': 'Introduce un correo válido.',
        'form.err.interest': 'Selecciona una opción.',
        'form.err.message': 'El mensaje es obligatorio.',
        'form.err.messageShort': 'Escribe al menos 10 caracteres.',
        'form.err.fields': 'Revisa los campos marcados.',
        'form.ok.dev': 'Formulario validado. Configura tu Formspree ID en el atributo action del formulario para envíos reales.',
        'form.ok.sent': '¡Mensaje enviado! Te responderemos pronto.',
        'form.err.send': 'No se pudo enviar. Inténtalo de nuevo o escribe a hola@kalimasgroup.net.',
        'form.err.network': 'Error de conexión. Inténtalo de nuevo o escribe a hola@kalimasgroup.net.',

        'footer.products': 'Productos',
        'footer.company': 'Compañía',
        'footer.contact': 'Contacto',
        'footer.about': 'Nosotros',
        'footer.solutions': 'Soluciones',
        'footer.rights': '© 2026 Kalimas Group. Todos los derechos reservados.',
        'footer.home': 'Inicio',

        'page.breadcrumb.home': 'Inicio',
        'page.breadcrumb.products': 'Productos',
        'page.requestDemo': 'Solicitar demo',
        'page.viewKalenda': 'Ver Kalenda',
        'page.viewKalirio': 'Ver Kalirio',
        'page.viewSuite': 'Ver Kalima Suite',
        'page.exploreWithUs': 'Explorar con nosotros',
        'page.ctaTalk': 'Hablemos',

        'kalirio.badge': 'Eventos & Operaciones',
        'kalirio.tagline': 'Plataforma integral para la gestión y operación de eventos de cualquier escala.',
        'kalirio.h2': 'Todo el evento. Una sola vista.',
        'kalirio.desc': 'Kalirio conecta tickets, control de accesos, staff y analytics para que tu operación no dependa de hojas de cálculo ni de chats dispersos. Diseñado para productores, venues y equipos que operan a escala.',
        'kalirio.f1': 'Tickets y control de accesos',
        'kalirio.f2': 'Gestión de asistentes en tiempo real',
        'kalirio.f3': 'Experiencias y activaciones',
        'kalirio.f4': 'Coordinación de staff multi-sede',
        'kalirio.f5': 'Analytics y reportes de operación',
        'kalirio.forWhom.tag': 'Para quién',
        'kalirio.forWhom.title': 'Hecho para operación exigente',
        'kalirio.forWhom.p1': 'Productoras',
        'kalirio.forWhom.p1d': 'Visibilidad de staff, puertas y aforo en cada sede del festival o tour.',
        'kalirio.forWhom.p2': 'Venues',
        'kalirio.forWhom.p2d': 'Check-in fluido y reportes listos para cerrar cada función.',
        'kalirio.forWhom.p3': 'Marcas & activaciones',
        'kalirio.forWhom.p3d': 'Experiencias medibles sin perder el control operativo del día D.',
        'kalirio.cta.title': '¿Listo para operar sin fricción?',
        'kalirio.cta.desc': 'Agenda una demo de Kalirio y vemos cómo encaja con tu próximo evento.',

        'kalenda.badge': 'Agendamiento de citas',
        'kalenda.tagline': 'Plataforma inteligente para agendar, automatizar y gestionar citas y reservas.',
        'kalenda.h2': 'Agenda que trabaja por ti.',
        'kalenda.desc': 'Kalenda reduce no-shows y trabajo manual con disponibilidad en tiempo real, recordatorios multicanal y perfiles de cliente. Úsalo solo o como módulo dentro de Kalima Suite.',
        'kalenda.f1': 'Disponibilidad en tiempo real',
        'kalenda.f2': 'Recordatorios automáticos multicanal',
        'kalenda.f3': 'Confirmaciones y perfiles de cliente',
        'kalenda.f4': 'Reportes y métricas de citas',
        'kalenda.f5': 'Integración con Kalima Suite',
        'kalenda.ind.tag': 'Industrias',
        'kalenda.ind.title': 'Donde el tiempo es el producto',
        'kalenda.ind.p1': 'Clínicas y salud',
        'kalenda.ind.p1d': 'Citas médicas con recordatorios y menor tasa de ausencias.',
        'kalenda.ind.p2': 'Consultorías',
        'kalenda.ind.p2d': 'Reservas de reuniones y demos con confirmación automática.',
        'kalenda.ind.p3': 'Servicios y belleza',
        'kalenda.ind.p3d': 'Agenda de turnos, perfiles de cliente y reprogramación sencilla.',
        'kalenda.cta.title': 'Automatiza tu agenda',
        'kalenda.cta.desc': 'Pide una demo de Kalenda y te mostramos el flujo completo en minutos.',

        'suite.badge': 'Suite empresarial',
        'suite.tagline': 'Todo tu negocio. Una sola plataforma.',
        'suite.h2': 'Módulos que se entienden entre sí.',
        'suite.desc': 'Kalima Suite integra agendamiento, CRM, analytics e integraciones para que tu equipo deje de saltar entre herramientas. Una base común, módulos que crecen con tu operación.',
        'suite.m1': 'Agendamiento y reservas inteligentes',
        'suite.m2': 'Pipeline de ventas y relaciones',
        'suite.m3': 'Métricas y reportes de negocio',
        'suite.m4': 'Conecta tus herramientas favoritas',
        'suite.why.tag': 'Por qué Suite',
        'suite.why.title': 'Una operación, un solo sistema',
        'suite.why.p1': 'Datos compartidos',
        'suite.why.p1d': 'Clientes, citas y pipeline en un mismo modelo — sin duplicar información.',
        'suite.why.p2': 'Adopción gradual',
        'suite.why.p2d': 'Empieza con Kalenda o CRM y activa módulos cuando tu equipo esté listo.',
        'suite.why.p3': 'Decisiones con contexto',
        'suite.why.p3d': 'Analytics que cruzan agenda, ventas y actividad del cliente.',
        'suite.cta.title': 'Diseñemos tu suite',
        'suite.cta.desc': 'Cuéntanos cómo opera tu equipo y armamos el recorrido de módulos adecuado.'
    }
};

function getStoredLang() {
    try {
        const stored = localStorage.getItem(I18N_STORAGE_KEY);
        if (stored === 'es' || stored === 'en') return stored;
    } catch (_) { /* ignore */ }
    return 'en';
}

function t(key, lang = currentLang) {
    const dict = translations[lang] || translations.en;
    return dict[key] ?? translations.en[key] ?? key;
}

let currentLang = getStoredLang();

function applyLanguage(lang) {
    if (lang !== 'en' && lang !== 'es') lang = 'en';
    currentLang = lang;

    try {
        localStorage.setItem(I18N_STORAGE_KEY, lang);
    } catch (_) { /* ignore */ }

    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (!key) return;
        el.textContent = t(key, lang);
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
        const key = el.getAttribute('data-i18n-html');
        if (!key) return;
        el.innerHTML = t(key, lang);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (!key) return;
        el.setAttribute('placeholder', t(key, lang));
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
        const key = el.getAttribute('data-i18n-aria');
        if (!key) return;
        el.setAttribute('aria-label', t(key, lang));
    });

    document.querySelectorAll('[data-i18n-value]').forEach((el) => {
        const key = el.getAttribute('data-i18n-value');
        if (!key) return;
        el.value = t(key, lang);
    });

    // Page meta
    const page = document.body?.dataset?.page || 'home';
    const titleKey = `meta.${page}.title`;
    const descKey = `meta.${page}.description`;
    if (translations.en[titleKey]) {
        document.title = t(titleKey, lang);
    }
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta && translations.en[descKey]) {
        descMeta.setAttribute('content', t(descKey, lang));
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && translations.en[titleKey]) {
        ogTitle.setAttribute('content', t(titleKey, lang));
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && translations.en[descKey]) {
        ogDesc.setAttribute('content', t(descKey, lang));
    }
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
        ogLocale.setAttribute('content', lang === 'es' ? 'es_ES' : 'en_US');
    }
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle && translations.en[titleKey]) {
        twTitle.setAttribute('content', t(titleKey, lang));
    }
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc && translations.en[descKey]) {
        twDesc.setAttribute('content', t(descKey, lang));
    }

    // Lang switcher UI state
    document.querySelectorAll('.lang-btn').forEach((btn) => {
        const isActive = btn.getAttribute('data-lang') === lang;
        btn.classList.toggle('is-active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
    });

    document.documentElement.classList.add('i18n-ready');
    document.dispatchEvent(new CustomEvent('kalimas:langchange', { detail: { lang } }));
}

function initI18n() {
    applyLanguage(getStoredLang());

    document.querySelectorAll('.lang-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang === 'en' || lang === 'es') applyLanguage(lang);
        });
    });
}

window.KalimasI18n = {
    t: (key) => t(key, currentLang),
    getLang: () => currentLang,
    setLang: applyLanguage,
    init: initI18n
};
