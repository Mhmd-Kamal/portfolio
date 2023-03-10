import type { NextPage } from "next";
import Head from "next/head";

import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen scroll-smooth">
      <Head>
        <title>Mohamed Kamal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="flex flex-col items-stretch flex-1 w-full mt-16">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
