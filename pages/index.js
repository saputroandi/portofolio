import Head from "next/head";
import Biograph from "../component/Biograph";
import Certificate from "../component/Certificate";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Language from "../component/Language";
import Navigation from "../component/Navigation";
import Projects from "../component/Projects";
import ScrollButtonToTop from "../component/ScrollButtonToTop";
import Skills from "../component/Skills";
import "../config/i18n";

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
      <Head>
        <meta property="og:title" content="Andi Saputro | Web Dev" />
        <meta name="twitter:title" content="Andi Saputro | Web Dev" />

        <meta
          name="description"
          content="Hi I'm a web developer. I spend all day experimenting with HTML, CSS, and JavaScript; and explore PHP and NodeJs. I can build fun and informative websites."
        />
        <meta
          property="og:description"
          content="Hi I'm a web developer. I spend all day experimenting with HTML, CSS, and JavaScript; and explore PHP and NodeJs. I can build fun and informative websites."
        />
        <meta
          name="twitter:description"
          content="Hi I'm a web developer. I spend all day experimenting with HTML, CSS, and JavaScript; and explore PHP and NodeJs. I can build fun and informative websites."
        />

        <meta
          property="og:image"
          content="https://andisaputro.website/img/reactjs.jpeg"
        />
        <meta
          name="twitter:image"
          content="https://andisaputro.website/img/reactjs.jpeg"
        />

        <link rel="icon" href="/img/icon.jpeg" />

        <title>Andi Saputro | Web Dev</title>
      </Head>
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
