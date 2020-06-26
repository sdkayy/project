import { Calendar } from '../components/calendar';
import { Head } from '../components/head';
import Layout from '../components/layout';

function IndexPage() {
  return (
    <>
      <Head title={'Main'} description={''} />
      <Layout>
        <div className={'rounded-xl bg-black p-8 bg-opacity-10 overflow-auto w-full h-full'}>
          <Calendar />
        </div>
      </Layout>
    </>
  );
}

export default IndexPage;
