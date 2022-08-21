import Head from 'next/head';
import { useRouter } from 'next/router';
import Chat from '../../templates/room';

export default function Index() {
  const router = useRouter();
  const { room, name } = router.query;

  return (
    <>
      <Head>
        <title>{room}</title>
      </Head>
      <Chat name={name} room={room} />
    </>
  )
}