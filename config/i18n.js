import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    id: {
      translation: {
        hero: {
          currentWork: `Sekarang ini saya bekerja sebagai Senior Production Operator`,
        },
        biograph: {
          title: 'Biografi',
          description: {
            paragraph_1: `Hai saya seorang web developer. Saya menghabiskan sepanjang hari, hampir setiap hari, bereksperimen dengan HTML, CSS, dan JavaScript; mencoba-coba dengan PHP dan NodeJs. Saya membangun situs web yang menyenangkan dan informatif. Saya melakukannya dengan baik.`,
            paragraph_2: `Saya ingin tahu, dan saya menikmati pekerjaan yang menantang saya untuk mempelajari sesuatu yang baru dan berkembang ke arah yang berbeda. Saya melakukan yang terbaik untuk tetap mengikuti perubahan sehingga saya dapat menghadapi tantangan dengan kemampuan yang sesuai dengan pekerjaan yang ada.`,
            paragraph_3: `Sedikit klarifikasi di atas: Saya sebenarnya lulusan SMK otomotif yang menyamar sebagai web developer. Sejak awal bahwa akan sedikit lebih sulit untuk mencari nafkah sebagai pekerja teknik mesin, saya telah memfokuskan energi saya di web, yang dengan senang hati telah membuktikan dirinya sebagai keputusan yang luar biasa.`,
          },
        },
        capability: {
          title: 'Kemampuan',
          subTitle: {
            skillsInterest: 'Keterampilan dan Ketertarikan',
            programmingLanguages: 'Bahasa Pemrograman',
            libraryFrameworks: 'Library and Frameworks',
            dbms: 'DBMS',
            other: 'Lainnya',
          },
        },
        certificate: {
          title: 'Sertifikat',
        },
        programmingLanguage: {
          title: 'Bahasa Pemrograman',
          desc: 'Bahasa yang saya gunakan, berdasarkan repository akun Github saya',
        },
      },
    },
    en: {
      translation: {
        hero: {
          currentWork: `Currently i'm working as Senior Production Operator`,
        },
        biograph: {
          title: 'Biograph',
          description: {
            paragraph_1: `Hai i'm web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript; dabbling with PHP and NodeJs. I build websites that delight and inform. I do it well.`,
            paragraph_2: `I'm curious, and I enjoy work that challenges me to learn something new and stretch in a different direction. I do my best to stay on top of changes in the state of the art so that I can meet challenges with tools well suited to the job at hand.`,
            paragraph_3: `A slight clarification of the above: I'm actually a graduates as automotive student cleverly disguised as a web developer. Since it was relatively clear early on that it would be slightly more than difficult to make a living as mechanical engineering, I've focused my energies on the web, which happily has proven itself to be a wonderful decision.`,
          },
        },
        capability: {
          title: 'Capability',
          subTitle: {
            skillsInterest: 'Skills and Interest',
            programmingLanguages: 'Programming Languages',
            libraryFrameworks: 'Library and Frameworks',
            dbms: 'DBMS',
            other: 'Other',
          },
        },
        certificate: {
          title: 'Certificate',
        },
        programmingLanguage: {
          title: 'Programming Language',
          desc: 'The language i use, based on my Github repo',
        },
      },
    },
  },
  lng: 'id',
  fallbackLng: 'id',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
