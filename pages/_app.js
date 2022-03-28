import Notification from '../components/ui/notification';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import '../styles/globals.css';
import { NotificationContextProvider } from '../store/notification-context';

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title>Next Events</title>
          <meta
            name="title"
            content="NextJS Events property"
            property="og:title"
          />
          <meta name="description" content="Find Events Near You..." />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="image"
            property="og:image"
            content="https://img001.prntscr.com/file/img001/zrR2MSYcT9K-REVUF4vkHg.png"
          />
          <meta
            name="url"
            property="og:url"
            content="https://events-project-nextjs-829wf6vkn-mcooper7649.vercel.app/"
          />
          <meta name="author" property="og:author" content="Michael Cooper" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
