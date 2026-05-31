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
      eyebrow: "THE CRAFTSMAN",
      title: "Bridging Imagination and Implementation",
      p1: "With over half a decade of experience in the digital space, I treat every project as a piece of digital craftsmanship. My philosophy is simple: complexity should be hidden behind an intuitive, elegant facade.",
      p2: "I don't just write code; I architect experiences. From high-performance Laravel backends to fluid, pixel-perfect frontend interactions, I ensure every touchpoint feels deliberate.",
    },
    projects: {
      eyebrow: "SELECTED WORKS",
      title: "Curated Digital Architecture",
      desc: "A showcase of projects that define modern utility and aesthetic excellence.",
      cta: "View Case Study",
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
      eyebrow: "SANG PERAKIT",
      title: "Menghubungkan Imajinasi dan Implementasi",
      p1: "Dengan pengalaman lebih dari setengah dekade di dunia digital, saya menganggap setiap proyek sebagai karya craftsmanship digital. Filosofinya sederhana: kompleksitas harus disembunyikan di balik tampilan yang intuitif dan elegan.",
      p2: "Saya tidak hanya menulis kode; saya merancang pengalaman. Dari backend Laravel yang cepat hingga interaksi frontend yang halus dan presisi piksel, saya memastikan setiap sentuhan terasa disengaja.",
    },
    projects: {
      eyebrow: "PROYEK TERPILIH",
      title: "Arsitektur Digital yang Terkurasi",
      desc: "Pameran proyek yang mendefinisikan utilitas modern dan keunggulan estetika.",
      cta: "Lihat Studi Kasus",
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
