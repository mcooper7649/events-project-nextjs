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
            name="publish_date"
            property="og:publish_date"
            content="2022-03-21T00:00:00-0600"
          />
          <meta
            name="title"
            content="Networking and Events Finder | NextJS"
            property="og:title"
          />
          <meta
            name="description"
            property="og:description"
            content="Find local, remote and digital events today. All built using the NextJS framework. Meet like minded people without having to wait for horrific page loading speeds and terrible seo for your event. NextJS offers React functionality with the added bonuses of Server-Side Rendering"
          />
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
            content="https://events-project-nextjs.vercel.app/"
          />
          <meta name="author" property="og:author" content="Michael Cooper" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
