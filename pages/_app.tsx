import React from 'react';
import Head from 'next/head';
import { CSSReset } from '@chakra-ui/react';
import { theme } from '../styles';
import { SEO } from '../components/seo';
import { Chakra } from '../components/wrapper/Chakra';
import { Layout } from '../layouts';

const App = ({ Component, pageProps }: any) => {
  return (
    <Chakra theme={theme} cookies={pageProps.cookies}>
      <Layout>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='shortcut icon' type='image/x-icon' href='/favicon.png' />
        </Head>
        <CSSReset />
        <SEO />
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  );
};

export default App;
