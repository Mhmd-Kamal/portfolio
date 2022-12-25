import type { NextPage } from "next";
import Head from "next/head";

import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen scroll-smooth">
      <Head>
        <title>Mohamed Kamal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <main className="flex flex-col items-center flex-1 w-full m-16">
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  );
};

export default Home;
