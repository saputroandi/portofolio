import Biograph from '../component/Biograph';
import Hero from '../component/Hero';
import Language from '../component/Language';
import Navigation from '../component/Navigation';
import Skills from '../component/skills';

export async function getStaticProps(context) {
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
    </div>
  );
}
