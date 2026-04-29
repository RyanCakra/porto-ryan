import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const CERT_LINKS = {
  html: 'https://drive.google.com/file/d/1b_-mDOU-Tt-NR8V2YL_lNYYRlmPO98ri/preview',
  python: 'https://drive.google.com/file/d/1r3BVaPjO9jAPzLqtcrwtAzeqySP8pekj/preview',
  dpr: 'https://drive.google.com/file/d/17Cha63VtCPyopWSzmsSGtP-FEfnPNuq1/preview',
  bootcamp: null,
};

// ─── project tech tags (language-agnostic) ───────────────────────────────────
const TECH = {
  careerPortal: ['Laravel', 'MySQL', 'Tailwind', 'PHP'],
  newsPortal: ['Laravel', 'MySQL', 'Tailwind', 'PHP'],
  onlineCourse: ['React', 'JavaScript', 'Tailwind', 'Node.js', 'Express', 'MySQL'],
  portfolio: ['React', 'JavaScript', 'Tailwind', 'GSAP'],
  chill: ['HTML5', 'CSS3', 'JavaScript'],
  todolist: ['HTML5', 'CSS3', 'JavaScript'],
  odrin: ['Kotlin', 'SQLite'],
  cinema: ['Java'],
};

// ─── shared project image paths ───────────────────────────────────────────────
const SRC = {
  careerPortal: '/img/project/career.png',
  newsPortal: '/img/project/news-portal.png',
  onlineCourse: '/img/project/videobelajar.png',
  portfolio: '/img/project/porto.png',
  chill: '/img/project/chill.png',
  todolist: '/img/project/todolist.png',
  odrin: '/img/project/odrin.png',
  cinema: '/img/project/java-ticket.png',
};

export const translations = {
  // ══════════════════════════════════════════════════════════════════════ EN ══
  en: {
    nav: { home: 'Home', about: 'About', projects: 'Projects' },

    home: {
      role: 'Fullstack Developer',
      description: 'Bachelor of Information Computer Technology · Asia e University. Experienced in full-stack web and mobile development. Recently completed a Fullstack Web Bootcamp and German B1 language course.',
      resume: 'Résumé',
      contact: 'Contact Me',
      seeMore: 'Explore',
    },

    about: {
      title: 'About Me',
      subtitle: 'Fullstack Developer',
      available: 'Open to opportunities',
      tagline: 'Fullstack Developer · Web & Mobile · Targeting Ausbildung in Germany 🇩🇪',
      certHint: '↑ Click a certificate to preview',
      downloadCV: 'Download CV',
      contact: 'Contact Me',
      stats: { projects: 'Projects', internships: 'Internships', certs: 'Certifications' },
      sections: {
        experience: 'Experience',
        education: 'Education',
        skills: 'Tech Stack',
        certifications: 'Certifications & Training',
      },
      experience: [
        {
          role: 'Freelance Fullstack Developer',
          company: 'Self-Employed',
          period: 'Late 2023 – 2024',
          desc: 'Developed a personal web blog for a client using Laravel 10. Handled full project lifecycle from requirements to deployment over a 3-month engagement.',
          tags: ['Laravel', 'MySQL', 'Tailwind'],
        },
        {
          role: 'Fullstack Web & Android Developer Intern',
          company: 'House of Representatives (DPR RI)',
          period: '2023',
          desc: 'Built and maintained internal web applications and an Android app for parliament operations as a fullstack intern.',
          tags: ['Web Dev', 'Android', 'Kotlin'],
        },
      ],
      education: [
        { degree: 'Bachelor of Information Computer Technology', school: 'Asia e University', period: '2021 – 2023', note: 'Double-degree program' },
        { degree: 'Fullstack Web Developer Bootcamp', school: 'Intensive Training Program', period: '2024', note: 'Completed' },
      ],
      skills: {
        frontend: ['React.js', 'Vue.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
        backend: ['Laravel', 'Node.js', 'Express.js', 'PHP'],
        mobile: ['Kotlin', 'Java (Android)'],
        database: ['MySQL', 'SQLite'],
      },
      certifications: [
        { name: 'Introduction to HTML & CSS', issuer: 'Progate', year: '2021', previewLink: CERT_LINKS.html },
        { name: 'Introduction to Python', issuer: 'Progate', year: '2021', previewLink: CERT_LINKS.python },
        { name: 'DPR RI Internship Certificate', issuer: 'House of Representatives', year: '2023', previewLink: CERT_LINKS.dpr },
        { name: 'Fullstack Web Dev Program', issuer: 'Bootcamp', year: '2024', previewLink: CERT_LINKS.bootcamp },
      ],
    },

    projects: {
      title: 'My Projects',
      label: 'Portfolio',
      items: [
        {
          id: 'careerPortal',
          title: 'Career Portal',
          description: 'Job portal platform where job seekers can browse and apply for positions, with a full admin panel for managing listings.',
          detail: 'Built with Vue on the frontend and Laravel on the backend, this platform handles user registration, authentication, job applications, and full admin control over all operations.',
          ctaText: 'Visit',
          ctaLink: 'https://careers.frisidea.com/',
          src: SRC.careerPortal,
          tech: TECH.careerPortal,
        },
        {
          id: 'newsPortal',
          title: 'Personal News Portal',
          description: 'Full-featured blogging platform with comments, likes, trending categories, and YouTube embeds.',
          detail: 'Built on Laravel 10 with a rich set of features: user auth, comment threads, post reactions, category filtering, search, and embedded video support. Designed as a freelance client project.',
          ctaText: 'Coming soon',
          ctaLink: '/',
          src: SRC.newsPortal,
          tech: TECH.newsPortal,
        },
        {
          id: 'onlineCourse',
          title: 'Online Course Website',
          description: 'E-learning platform with a custom REST API, admin panel, and full CRUD for course content.',
          detail: 'React frontend paired with a Node.js + Express API connected to MySQL. Features course browsing, an admin dashboard, and complete content management via REST endpoints.',
          ctaText: 'Visit',
          ctaLink: 'https://fe1b-videobelajar.vercel.app/',
          src: SRC.onlineCourse,
          tech: TECH.onlineCourse,
        },
        {
          id: 'portfolio',
          title: 'Portfolio Website',
          description: 'Personal portfolio with smooth page transitions and dynamic animations.',
          detail: 'Built with React.js and Tailwind CSS. Features three pages with entrance animations powered by GSAP and Anime.js, plus animated route transitions.',
          ctaText: 'Visit',
          ctaLink: 'https://ryan-porto.vercel.app/',
          src: SRC.portfolio,
          tech: TECH.portfolio,
        },
        {
          id: 'chill',
          title: 'Chill — Landing Page',
          description: 'Responsive landing page for a movie streaming concept, built as a bootcamp project.',
          detail: 'Pure CSS responsive layout with a JavaScript-powered burger menu. Focused on clean structure and mobile-first design as part of an early bootcamp assignment.',
          ctaText: 'GitHub',
          ctaLink: 'https://github.com/RyanCakra/Chill-movie',
          src: SRC.chill,
          tech: TECH.chill,
        },
        {
          id: 'todolist',
          title: 'Todolist App',
          description: 'Mobile-inspired task manager with categorized personal and schedule lists.',
          detail: 'Smartphone-frame UI that organizes tasks into distinct categories. Lightweight vanilla implementation with no dependencies — focused on UX clarity.',
          ctaText: 'Visit',
          ctaLink: 'https://todolist-zeta-eight-36.vercel.app/',
          src: SRC.todolist,
          tech: TECH.todolist,
        },
        {
          id: 'odrin',
          title: 'Drink Ordering App',
          description: 'Android app for ordering international drinks, built natively with Kotlin.',
          detail: 'First Android project — uses Kotlin with SQLite for local data persistence. Users browse a drink menu and place orders through a native Android UI.',
          ctaText: 'GitHub',
          ctaLink: 'https://github.com/RyanCakra/OdrinApp',
          src: SRC.odrin,
          tech: TECH.odrin,
        },
        {
          id: 'cinema',
          title: 'Movie Ticketing App',
          description: 'Console-based Java app for selecting movies and purchasing tickets.',
          detail: 'First executable Java project — simulates a cinema ticketing flow where users pick a film, choose seat type, and receive a summary. A classic beginner project done right.',
          ctaText: 'GitHub',
          ctaLink: 'https://github.com/RyanCakra/CinemaTicket',
          src: SRC.cinema,
          tech: TECH.cinema,
        },
      ],
    },
  },

  // ══════════════════════════════════════════════════════════════════════ ID ══
  id: {
    nav: { home: 'Beranda', about: 'Tentang', projects: 'Proyek' },

    home: {
      role: 'Fullstack Developer',
      description: 'Sarjana Teknologi Informasi Komputer · Asia e University. Berpengalaman dalam pengembangan web dan mobile fullstack. Telah menyelesaikan Bootcamp Fullstack Web Developer dan kursus Bahasa Jerman B1.',
      resume: 'Résumé',
      contact: 'Hubungi Saya',
      seeMore: 'Jelajahi',
    },

    about: {
      title: 'Tentang Saya',
      subtitle: 'Fullstack Developer',
      available: 'Terbuka untuk peluang kerja',
      tagline: 'Fullstack Developer · Web & Mobile · Mengincar Ausbildung di Jerman 🇩🇪',
      certHint: '↑ Klik sertifikat untuk melihat pratinjau',
      downloadCV: 'Unduh CV',
      contact: 'Hubungi Saya',
      stats: { projects: 'Proyek', internships: 'Magang', certs: 'Sertifikasi' },
      sections: {
        experience: 'Pengalaman',
        education: 'Pendidikan',
        skills: 'Tech Stack',
        certifications: 'Sertifikasi & Pelatihan',
      },
      experience: [
        {
          role: 'Freelance Fullstack Developer',
          company: 'Mandiri',
          period: 'Akhir 2023 – 2024',
          desc: 'Mengembangkan blog web personal untuk klien menggunakan Laravel 10. Mengelola seluruh siklus proyek dari pengumpulan kebutuhan hingga deployment selama 3 bulan.',
          tags: ['Laravel', 'MySQL', 'Tailwind'],
        },
        {
          role: 'Magang Fullstack Web & Android Developer',
          company: 'DPR RI',
          period: '2023',
          desc: 'Membangun dan memelihara aplikasi web internal serta aplikasi Android untuk operasional parlemen sebagai magang fullstack.',
          tags: ['Web Dev', 'Android', 'Kotlin'],
        },
      ],
      education: [
        { degree: 'Sarjana Teknologi Informasi Komputer', school: 'Asia e University', period: '2021 – 2023', note: 'Program double-degree' },
        { degree: 'Bootcamp Fullstack Web Developer', school: 'Program Pelatihan Intensif', period: '2024', note: 'Selesai' },
      ],
      skills: {
        frontend: ['React.js', 'Vue.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
        backend: ['Laravel', 'Node.js', 'Express.js', 'PHP'],
        mobile: ['Kotlin', 'Java (Android)'],
        database: ['MySQL', 'SQLite'],
      },
      certifications: [
        { name: 'Pengantar HTML & CSS', issuer: 'Progate', year: '2021', previewLink: CERT_LINKS.html },
        { name: 'Pengantar Python', issuer: 'Progate', year: '2021', previewLink: CERT_LINKS.python },
        { name: 'Sertifikat Magang DPR RI', issuer: 'DPR RI', year: '2023', previewLink: CERT_LINKS.dpr },
        { name: 'Program Fullstack Web Dev', issuer: 'Bootcamp', year: '2024', previewLink: CERT_LINKS.bootcamp },
      ],
    },

    projects: {
      title: 'Proyek Saya',
      label: 'Portofolio',
      items: [
        {
          id: 'careerPortal',
          title: 'Career Portal',
          description: 'Platform portal kerja tempat pencari kerja bisa melihat dan melamar posisi, dilengkapi panel admin lengkap.',
          detail: 'Dibangun dengan Vue di frontend dan Laravel di backend. Menangani registrasi pengguna, autentikasi, pengajuan lamaran, dan kendali penuh admin atas semua operasi.',
          ctaText: 'Kunjungi',
          ctaLink: 'https://careers.frisidea.com/',
          src: SRC.careerPortal,
          tech: TECH.careerPortal,
        },
        {
          id: 'newsPortal',
          title: 'Portal Berita Personal',
          description: 'Platform blogging lengkap dengan komentar, like, kategori trending, dan embed YouTube.',
          detail: 'Dibangun di atas Laravel 10 dengan fitur lengkap: autentikasi pengguna, thread komentar, reaksi postingan, filter kategori, pencarian, dan dukungan video embed. Proyek klien freelance.',
          ctaText: 'Segera hadir',
          ctaLink: '/',
          src: SRC.newsPortal,
          tech: TECH.newsPortal,
        },
        {
          id: 'onlineCourse',
          title: 'Website Kursus Online',
          description: 'Platform e-learning dengan REST API kustom, panel admin, dan CRUD lengkap untuk konten kursus.',
          detail: 'Frontend React dipasangkan dengan API Node.js + Express yang terhubung ke MySQL. Fitur penelusuran kursus, dasbor admin, dan manajemen konten lengkap via endpoint REST.',
          ctaText: 'Kunjungi',
          ctaLink: 'https://fe1b-videobelajar.vercel.app/',
          src: SRC.onlineCourse,
          tech: TECH.onlineCourse,
        },
        {
          id: 'portfolio',
          title: 'Website Portofolio',
          description: 'Portofolio pribadi dengan transisi halaman smooth dan animasi dinamis.',
          detail: 'Dibangun dengan React.js dan Tailwind CSS. Tiga halaman dengan animasi entrance menggunakan GSAP dan Anime.js, plus transisi rute yang dianimasikan.',
          ctaText: 'Kunjungi',
          ctaLink: 'https://ryan-porto.vercel.app/',
          src: SRC.portfolio,
          tech: TECH.portfolio,
        },
        {
          id: 'chill',
          title: 'Chill — Landing Page',
          description: 'Landing page responsif untuk konsep streaming film, dibuat sebagai proyek bootcamp.',
          detail: 'Layout responsif CSS murni dengan menu burger berbasis JavaScript. Fokus pada struktur bersih dan desain mobile-first sebagai tugas awal bootcamp.',
          ctaText: 'GitHub',
          ctaLink: 'https://github.com/RyanCakra/Chill-movie',
          src: SRC.chill,
          tech: TECH.chill,
        },
        {
          id: 'todolist',
          title: 'Aplikasi Todolist',
          description: 'Task manager bergaya mobile dengan daftar personal dan jadwal yang terkategorisasi.',
          detail: 'UI berbingkai smartphone yang mengorganisir tugas ke dalam kategori berbeda. Implementasi vanilla ringan tanpa dependensi — fokus pada kejelasan UX.',
          ctaText: 'Kunjungi',
          ctaLink: 'https://todolist-zeta-eight-36.vercel.app/',
          src: SRC.todolist,
          tech: TECH.todolist,
        },
        {
          id: 'odrin',
          title: 'Aplikasi Pesan Minuman',
          description: 'Aplikasi Android untuk memesan minuman internasional, dibangun native dengan Kotlin.',
          detail: 'Proyek Android pertama — menggunakan Kotlin dengan SQLite untuk penyimpanan data lokal. Pengguna dapat menelusuri menu minuman dan melakukan pemesanan melalui UI Android native.',
          ctaText: 'GitHub',
          ctaLink: 'https://github.com/RyanCakra/OdrinApp',
          src: SRC.odrin,
          tech: TECH.odrin,
        },
        {
          id: 'cinema',
          title: 'Aplikasi Tiket Bioskop',
          description: 'Aplikasi Java berbasis konsol untuk memilih film dan membeli tiket.',
          detail: 'Proyek Java pertama yang dapat dieksekusi — mensimulasikan alur pembelian tiket bioskop di mana pengguna memilih film, jenis kursi, dan menerima ringkasan.',
          ctaText: 'GitHub',
          ctaLink: 'https://github.com/RyanCakra/CinemaTicket',
          src: SRC.cinema,
          tech: TECH.cinema,
        },
      ],
    },
  },

  // ══════════════════════════════════════════════════════════════════════ DE ══
  de: {
    nav: { home: 'Startseite', about: 'Über mich', projects: 'Projekte' },

    home: {
      role: 'Fullstack-Entwickler',
      description: 'Bachelor in Informationstechnologie · Asia e University. Erfahrung in der Full-Stack-Web- und Mobilentwicklung. Kürzlich Fullstack-Web-Bootcamp und Deutschkurs B1 abgeschlossen.',
      resume: 'Lebenslauf',
      contact: 'Kontakt',
      seeMore: 'Entdecken',
    },

    about: {
      title: 'Über Mich',
      subtitle: 'Fullstack-Entwickler',
      available: 'Offen für Stellenangebote',
      tagline: 'Fullstack-Entwickler · Web & Mobile · Ausbildung in Deutschland angestrebt 🇩🇪',
      certHint: '↑ Zertifikat anklicken zum Vorschauen',
      downloadCV: 'Lebenslauf herunterladen',
      contact: 'Kontakt aufnehmen',
      stats: { projects: 'Projekte', internships: 'Praktika', certs: 'Zertifikate' },
      sections: {
        experience: 'Berufserfahrung',
        education: 'Ausbildung',
        skills: 'Tech Stack',
        certifications: 'Zertifikate & Schulungen',
      },
      experience: [
        {
          role: 'Freiberuflicher Fullstack-Entwickler',
          company: 'Selbstständig',
          period: 'Ende 2023 – 2024',
          desc: 'Entwicklung eines Web-Blogs für einen Kunden mit Laravel 10. Vollständige Projektverantwortung von der Anforderungsanalyse bis zum Deployment über 3 Monate.',
          tags: ['Laravel', 'MySQL', 'Tailwind'],
        },
        {
          role: 'Praktikant – Fullstack Web & Android Entwickler',
          company: 'Repräsentantenhaus (DPR RI)',
          period: '2023',
          desc: 'Entwicklung und Wartung interner Webanwendungen sowie einer Android-App für den parlamentarischen Betrieb.',
          tags: ['Web Dev', 'Android', 'Kotlin'],
        },
      ],
      education: [
        { degree: 'Bachelor in Informationstechnologie', school: 'Asia e University', period: '2021 – 2023', note: 'Doppelabschluss-Programm' },
        { degree: 'Fullstack Web Developer Bootcamp', school: 'Intensives Schulungsprogramm', period: '2024', note: 'Abgeschlossen' },
      ],
      skills: {
        frontend: ['React.js', 'Vue.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
        backend: ['Laravel', 'Node.js', 'Express.js', 'PHP'],
        mobile: ['Kotlin', 'Java (Android)'],
        database: ['MySQL', 'SQLite'],
      },
      certifications: [
        { name: 'Einführung in HTML & CSS', issuer: 'Progate', year: '2021', previewLink: CERT_LINKS.html },
        { name: 'Einführung in Python', issuer: 'Progate', year: '2021', previewLink: CERT_LINKS.python },
        { name: 'Praktikumszertifikat DPR RI', issuer: 'Repräsentantenhaus', year: '2023', previewLink: CERT_LINKS.dpr },
        { name: 'Fullstack Web Dev Programm', issuer: 'Bootcamp', year: '2024', previewLink: CERT_LINKS.bootcamp },
      ],
    },

    projects: {
      title: 'Meine Projekte',
      label: 'Portfolio',
      items: [
        {
          id: 'careerPortal',
          title: 'Career Portal',
          description: 'Jobportal, auf dem Jobsuchende Stellen durchsuchen und sich bewerben können, mit vollständigem Admin-Panel.',
          detail: 'Vue im Frontend, Laravel im Backend. Verwaltet Nutzerregistrierung, Authentifizierung, Bewerbungen und vollständige Admin-Kontrolle.',
          ctaText: 'Besuchen',
          ctaLink: 'https://careers.frisidea.com/',
          src: SRC.careerPortal,
          tech: TECH.careerPortal,
        },
        {
          id: 'newsPortal',
          title: 'Persönliches Nachrichtenportal',
          description: 'Umfassende Blogging-Plattform mit Kommentaren, Likes, Trending-Kategorien und YouTube-Einbettungen.',
          detail: 'Auf Laravel 10 aufgebaut mit Nutzer-Auth, Kommentar-Threads, Post-Reaktionen, Kategoriefilterung, Suche und Video-Einbettung. Freelance-Kundenprojekt.',
          ctaText: 'Demnächst',
          ctaLink: '/',
          src: SRC.newsPortal,
          tech: TECH.newsPortal,
        },
        {
          id: 'onlineCourse',
          title: 'Online-Kurs-Website',
          description: 'E-Learning-Plattform mit benutzerdefinierter REST-API, Admin-Panel und vollständigem CRUD.',
          detail: 'React-Frontend mit Node.js + Express API und MySQL. Kursbrowsing, Admin-Dashboard und vollständige Inhaltsverwaltung über REST-Endpunkte.',
          ctaText: 'Besuchen',
          ctaLink: 'https://fe1b-videobelajar.vercel.app/',
          src: SRC.onlineCourse,
          tech: TECH.onlineCourse,
        },
        {
          id: 'portfolio',
          title: 'Portfolio-Website',
          description: 'Persönliches Portfolio mit sanften Seitenübergängen und dynamischen Animationen.',
          detail: 'Erstellt mit React.js und Tailwind CSS. Drei Seiten mit Eingangsanimationen durch GSAP und Anime.js sowie animierten Routenübergängen.',
          ctaText: 'Besuchen',
          ctaLink: 'https://ryan-porto.vercel.app/',
          src: SRC.portfolio,
          tech: TECH.portfolio,
        },
        {
          id: 'chill',
          title: 'Chill — Landingpage',
          description: 'Responsive Landingpage für ein Filmstreaming-Konzept, als Bootcamp-Projekt erstellt.',
          detail: 'Reines CSS-responsives Layout mit JavaScript-gesteuertem Burger-Menü. Fokus auf saubere Struktur und Mobile-First-Design.',
          ctaText: 'GitHub',
          ctaLink: 'https://github.com/RyanCakra/Chill-movie',
          src: SRC.chill,
          tech: TECH.chill,
        },
        {
          id: 'todolist',
          title: 'Todolist-App',
          description: 'Mobil-inspirierter Aufgabenmanager mit kategorisierten persönlichen Listen und Zeitplänen.',
          detail: 'Smartphone-Rahmen-UI für kategorisierte Aufgaben. Leichte Vanilla-Implementierung ohne Abhängigkeiten — Fokus auf UX-Klarheit.',
          ctaText: 'Besuchen',
          ctaLink: 'https://todolist-zeta-eight-36.vercel.app/',
          src: SRC.todolist,
          tech: TECH.todolist,
        },
        {
          id: 'odrin',
          title: 'Getränke-Bestell-App',
          description: 'Android-App zum Bestellen internationaler Getränke, nativ mit Kotlin entwickelt.',
          detail: 'Erstes Android-Projekt — Kotlin mit SQLite für lokale Datenspeicherung. Nutzer durchsuchen eine Getränkekarte und geben Bestellungen über eine native Android-UI auf.',
          ctaText: 'GitHub',
          ctaLink: 'https://github.com/RyanCakra/OdrinApp',
          src: SRC.odrin,
          tech: TECH.odrin,
        },
        {
          id: 'cinema',
          title: 'Kinoticket-App',
          description: 'Konsolenbasierte Java-App zur Filmauswahl und zum Ticketkauf.',
          detail: 'Erstes ausführbares Java-Projekt — simuliert einen Kinoticket-Kauf, bei dem Nutzer Film und Sitztyp wählen und eine Zusammenfassung erhalten.',
          ctaText: 'GitHub',
          ctaLink: 'https://github.com/RyanCakra/CinemaTicket',
          src: SRC.cinema,
          tech: TECH.cinema,
        },
      ],
    },
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const t = translations[language];
  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
