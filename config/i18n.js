import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    id: {
      translation: {
        biograph: {
          title: 'Biografi',
          description: `Hai saya pengembang web. Saya menghabiskan sepanjang hari, hampir setiap hari, bereksperimen dengan HTML, CSS, dan JavaScript; mencoba-coba dengan PHP dan NodeJs. Saya membangun situs web yang menyenangkan dan menginformasikan. Saya melakukannya dengan baik. Saya ingin tahu, dan saya menikmati pekerjaan yang menantang saya untuk mempelajari sesuatu yang baru dan berkembang ke arah yang berbeda. Saya melakukan yang terbaik untuk tetap mengikuti perubahan dalam keadaan seni sehingga saya dapat menghadapi tantangan dengan alat yang sesuai dengan pekerjaan yang ada. Sedikit klarifikasi di atas: Saya sebenarnya lulusan sarjana otomotif yang pandai menyamar sebagai web developer. Sejak awal relatif jelas bahwa akan sedikit lebih sulit untuk mencari nafkah sebagai teknik mesin, saya telah memfokuskan energi saya di web, yang dengan senang hati telah membuktikan dirinya sebagai keputusan yang luar biasa.`,
        },
      },
    },
    en: {
      translation: {
        biograph: {
          title: 'Biograph',
          description: `Hai i'm web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript; dabbling with PHP and NodeJs. I build websites that delight and inform. I do it well. I'm curious, and I enjoy work that challenges me to learn something new and stretch in a different direction. I do my best to stay on top of changes in the state of the art so that I can meet challenges with tools well suited to the job at hand. A slight clarification of the above: I'm actually a graduates as automotive student cleverly disguised as a web developer. Since it was relatively clear early on that it would be slightly more than difficult to make a living as mechanical engineering, I've focused my energies on the web, which happily has proven itself to be a wonderful decision.`,
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
