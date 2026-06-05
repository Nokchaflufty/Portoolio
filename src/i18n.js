export const translations = {
  en: {
    nav: {
      work: "Work",
      about: "About",
      services: "Services",
    },
    hero: {
      eyebrow: "CRAFTING DIGITAL PERFECTION",
      title: "Designing & Developing Modern Digital Experiences",
      desc: "A bridge between high-end UI design and technical engineering excellence. Specialized in creating fast, accessible, and breathtaking interfaces for the next generation of the web.",
      primary: "View Projects",
      secondary: "Get In Touch",
    },
    about: {
      eyebrow: "FULLSTACK WEB DEVELOPER",
      title: "Building Clean, Fast & Modern Web Experiences",
      p1: "I'm a fullstack web developer with 2.5+ years of experience crafting websites and web applications from the ground up. I specialize in Laravel, React, and vanilla JavaScript — writing code that's clean, scalable, and built to last.",
      p2: "From company profiles to admin dashboards and web apps — I handle both frontend and backend so you get a complete solution without the hassle of coordinating multiple developers.",
    },
    projects: {
      eyebrow: "SELECTED WORKS",
      title: "Curated Digital Architecture",
      desc: "A showcase of projects that define modern utility and aesthetic excellence.",
      cta: "View Case Study",
      webCilok: "Cilok Web",
      rateFilm: "Movie Rating Web",
      thriftStore: "Thrift Store Web",
    },
    services: {
      eyebrow: "EXPERTISES",
      title: "Precision-Focused Services",
    },
    process: {
      eyebrow: "THE PROCESS",
      title: "Methodical Execution",
    },
    footer: {
      copy: "© 2024 Digital Craftsmanship. All rights reserved.",
    },
  },
  id: {
    nav: {
      work: "Proyek",
      about: "Tentang",
      services: "Layanan",
    },
    hero: {
      eyebrow: "MENCIPTAKAN KARYA DIGITAL YANG TAK TERLUPAKAN",
      title: "Merancang & Membangun Pengalaman Digital Modern",
      desc: "Jembatan antara desain UI kelas atas dan keunggulan engineering teknis. Spesialis dalam menciptakan antarmuka yang cepat, mudah diakses, dan memukau untuk web generasi berikutnya.",
      primary: "Lihat Proyek",
      secondary: "Hubungi Saya",
    },
    about: {
      eyebrow: "FULLSTACK WEB DEVELOPER",
      title: "Membangun Website yang Bersih, Cepat & Modern",
      p1: "Saya seorang fullstack web developer dengan pengalaman 2,5+ tahun membangun website dan aplikasi web dari nol. Spesialis Laravel, React, dan JavaScript — dengan kode yang bersih, scalable, dan tahan lama.",
      p2: "Dari company profile, dashboard admin, hingga web app — saya handle frontend dan backend sekaligus, jadi kamu dapat solusi lengkap tanpa perlu koordinasi banyak developer.",
    },
    projects: {
      eyebrow: "PROYEK TERPILIH",
      title: "Arsitektur Digital yang Terkurasi",
      desc: "Pameran proyek yang mendefinisikan utilitas modern dan keunggulan estetika.",
      cta: "Lihat Studi Kasus",
      webCilok: "Web Cilok",
      rateFilm: "Web Rate Film",
      thriftStore: "Web Toko Thrift",
    },
    services: {
      eyebrow: "KEAHLIAN",
      title: "Layanan yang Presisi",
    },
    process: {
      eyebrow: "PROSES KERJA",
      title: "Pelaksanaan yang Terukur",
    },
    footer: {
      copy: "© 2024 Karya Digital. Semua hak dilindungi.",
    },
  },
};

export function getPreferredLanguage() {
  if (typeof navigator === "undefined") return "en";
  return navigator.language.toLowerCase().startsWith("id") ? "id" : "en";
}

export function getTranslationValue(messages, keyPath) {
  return keyPath.split(".").reduce((acc, key) => acc?.[key], messages) || keyPath;
}
