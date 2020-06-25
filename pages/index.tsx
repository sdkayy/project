import NextHead from 'next/head';
import Layout from '../components/layout';

function IndexPage() {
  return (
    <>
      <NextHead>
        <title>Austin Quinn | Software Engineer</title>
        <meta
          name="description"
          content={`Hi! I am a ${
            new Date().getFullYear() - 1997 - (new Date().getMonth() >= 7 ? 0 : 1)
          } year old self-taught software engineer. I mainly focus on web development but am always looking to expand my horizons.`}
        />
      </NextHead>
      <Layout>
        <p>Testing</p>
      </Layout>
    </>
  );
}

export default IndexPage;
