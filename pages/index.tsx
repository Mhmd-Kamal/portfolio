import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import NavBar from '../components/NavBar';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <Head>
        <title>Mohamed Kamal</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavBar />
      <main className='flex flex-col items-center flex-1 w-full'>
        <Hero />
      </main>
    </div>
  );
};

export default Home;
