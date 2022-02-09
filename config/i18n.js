import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    id: {
      translation: {
        hero: {
          currentWork: `Sekarang ini saya bekerja sebagai Senior Production Operator`,
        },
        biograph: {
          title: "Biografi",
          description: {
            paragraph_1: `Hai saya seorang web developer. Saya menghabiskan sepanjang hari untuk bereksperimen dengan HTML, CSS, dan JavaScript; serta mendalami PHP dan NodeJs. Saya dapat membangun situs web yang menyenangkan dan informatif.`,
            paragraph_2: `Saya tertarik, dan menyukai pekerjaan yang menantang saya untuk mempelajari sesuatu yang baru dan berkembang ke arah yang lebih baik. Saya melakukan yang terbaik untuk tetap mengikuti perubahan sehingga saya dapat menghadapi tantangan dengan kemampuan yang sesuai dengan pekerjaan yang ada.`,
            paragraph_3: `Sedikit klarifikasi di atas: Saya sebenarnya lulusan SMK otomotif yang menyamar sebagai web developer. Sejak awal bahwa akan sedikit lebih sulit untuk mencari nafkah sebagai pekerja teknik mesin, sehingga saya telah memfokuskan energi saya di bidang web developer, Keputusan itu menjadi keputusan luar biasa yang telah saya ambil.`,
          },
        },
        capability: {
          title: "Kemampuan",
          subTitle: {
            skillsInterest: "Keterampilan dan Ketertarikan",
            programmingLanguages: "Bahasa Pemrograman",
            libraryFrameworks: "Library and Frameworks",
            dbms: "DBMS",
            other: "Lainnya",
          },
        },
        certificate: {
          title: "Sertifikat",
        },
        programmingLanguage: {
          title: "Bahasa Pemrograman",
          desc: "Bahasa yang saya gunakan, berdasarkan repository akun Github saya",
        },
      },
    },
    en: {
      translation: {
        hero: {
          currentWork: `Currently i'm working as Senior Production Operator`,
        },
        biograph: {
          title: "Biograph",
          description: {
            paragraph_1: `Hi I'm a web developer. I spend all day experimenting with HTML, CSS, and JavaScript; and explore PHP and NodeJs. I can build fun and informative websites.`,
            paragraph_2: `I am interested, and like work that challenges me to learn something new and develop in a better direction. I do my best to stay abreast of changes so that I can take on challenges with skills that match the job at hand.`,
            paragraph_3: `A little clarification above: I'm actually a graduates as automotive student cleverly disguised as a web developer. From the very beginning that it would be a little more difficult to make a living as a mechanical engineer, so I have focused my energies on web development.`,
          },
        },
        capability: {
          title: "Capability",
          subTitle: {
            skillsInterest: "Skills and Interest",
            programmingLanguages: "Programming Languages",
            libraryFrameworks: "Library and Frameworks",
            dbms: "DBMS",
            other: "Other",
          },
        },
        certificate: {
          title: "Certificate",
        },
        programmingLanguage: {
          title: "Programming Language",
          desc: "The language i use, based on my Github repo",
        },
      },
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
