// Next Components
import Head from 'next/head';
import Link from 'next/link';

// Components
import Header from '../components/Header';

// Styled Components
import styled from 'styled-components';

// Types
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CONSOLE.BLOG()</title>
      </Head>

      <Header />

      <main>
        <Link href='/login'>
          <a>Login</a>
        </Link>

        <Link href='/editor'>
          <a>Editor</a>
        </Link>

        <Link href='/main'>
          <a>Main</a>
        </Link>
      </main>

      <footer>
        
      </footer>
    </>
  )
}

export default Home
