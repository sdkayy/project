import { Head } from '../components/head';
import Layout from '../components/layout';

function IndexPage() {
  return (
    <>
      <Head title={'Main'} description={''} />
      <Layout>
        <div className={'w-full h-full rounded-xl bg-black p-8 bg-opacity-10'}>
          <p>Testing</p>
        </div>
      </Layout>
    </>
  );
}

export default IndexPage;
