import Biograph from '../component/Biograph';
import Certificate from '../component/Certificate';
import Footer from '../component/Footer';
import Hero from '../component/Hero';
import Language from '../component/Language';
import Navigation from '../component/Navigation';
import Projects from '../component/Projects';
import ScrollButtonToTop from '../component/ScrollButtonToTop';
import Skills from '../component/Skills';
import '../config/i18n';

export async function getServerSideProps(context) {
  const res = await fetch(`https://api.github.com/users/saputroandi/repos`);
  const data = await res.json();
  return {
    props: { repos: data },
  };
}

export default function Home({ repos }) {
  return (
    <div className="index-container">
      <Navigation />
      <Hero />
      <Biograph />
      <Skills />
      <Projects />
      <Certificate />
      <Language repos={repos} />
      <Footer />
      <ScrollButtonToTop />
    </div>
  );
}
