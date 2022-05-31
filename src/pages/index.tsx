import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { Sidebar } from "../components/Sidebar";

import { createClient } from "../services/prismicio";

const Home: NextPage = ({ page }: any) => {
  // console.log(page?.data?.aboutMe[0]?.text);
  // console.log(page?.data?.myPhoto?.url);

  return (
    <>
      <Head>
        <title>Home | Luís Gabriel</title>
      </Head>

      <main className="py-8 px-8">
        <Sidebar />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ previewData }: any) => {
  const client = createClient({ previewData });
  const page = await client.getSingle("portfolio");

  return {
    props: { page },
  };
};

export default Home;
