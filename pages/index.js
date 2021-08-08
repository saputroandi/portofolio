import Biograph from '../component/Biograph';
import Hero from '../component/Hero';
import Language from '../component/Language';
import Navigation from '../component/Navigation';
import Timeline from '../component/Timeline';

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
      <Timeline />
      <Language repos={repos} />
    </div>
  );
}
