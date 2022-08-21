import Head from 'next/head';
import Home from '../templates/home';

export default function Index() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta property="og:title" content="WebChat" />
        <meta property="og:description" content="O WebChat permite que você se conecte rapidamente à pessoas que possuem interesse no mesmo assunto que você!" />
      </Head>
      <Home />
    </div>
  )
}
