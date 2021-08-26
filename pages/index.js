import Biograph from '../component/Biograph';
import Footer from '../component/Footer';
import Hero from '../component/Hero';
import Language from '../component/Language';
import Navigation from '../component/Navigation';
import ScrollButtonToTop from '../component/ScrollButtonToTop';
import Skills from '../component/Skills';

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
      <Language repos={repos} />
      <Footer />
      <ScrollButtonToTop />
    </div>
  );
}
