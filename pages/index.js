import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Main from '../components/Main';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Manuchim | Technical Writer | Full Stack Engineer</title>
        <meta
          name='description'
          content='I’m a Technical Writer and Full Stack Web and Mobile Engineer specializing in content, advertising, UX, and technical writing. '
        />
        <link rel='icon' href='/fav.png' />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
