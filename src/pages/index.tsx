import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Circle, Folder } from "phosphor-react";

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

      <main className="py-8 px-8 flex">
        <Sidebar />

        <section className="w-[calc(100%_-_380px)] ml-12 ">
          <>
            <div className="w-[100%] h-[86px] mb-12 bg-[#302F3D] text-[837E9F] text-[20px] font-bold flex items-center pl-6 rounded-2xl">
              Meus Projetos
            </div>

            <div className="w-[100%] h-auto flex gap-8">
              <div className="relative w-[50%] p-8 bg-[#302F3D] text-[837E9F] rounded-xl border-b border-[#00FF00]">
                <h2 className="text-[20px] font-bold flex items-center gap-2">
                  <Folder size={32} weight="light" />
                  Teste Repo
                </h2>
                <p className="pb-8 pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  quos eveniet at ratione quod assumenda architecto, illo modi
                  iste minima aut, deserunt adipisci possimus error laborum
                  asperiores sint consectetur nisi.
                </p>
                <span className="absolute bottom-5 right-5 flex items-center ">
                  <Circle size={15} weight="fill" color="red" />
                  <p className="ml-2">Javascript</p>
                </span>
              </div>

              <div className="relative w-[50%] p-8 bg-[#302F3D] text-[837E9F] rounded-xl border-b border-[#00FF00]">
                <h2 className=" text-[20px] font-bold">Teste Repo</h2>
                <p className="pb-8 pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  quos eveniet at ratione quod assumenda architecto, illo modi
                  iste minima aut, deserunt adipisci possimus error laborum
                  asperiores sint consectetur nisi.
                </p>
                <span className="absolute bottom-5 right-5 flex items-center ">
                  <Circle size={15} weight="fill" color="red" />
                  <p className="ml-2">Javascript</p>
                </span>
              </div>
            </div>
          </>

          <>
            <div className="w-[100%] h-[86px] mt-12  mb-12 bg-[#302F3D] text-[837E9F] text-[20px] font-bold flex items-center pl-6 rounded-2xl">
              Posts Recentes
            </div>

            <div className="w-[100%] h-auto">
              <div className="w-[100%] h-auto flex gap-8">
                <div className="relative w-[100%] p-8 bg-[#302F3D] text-[837E9F] rounded-xl border-b border-[#00FF00] flex items-center gap-6">
                  <div className="w-[150px] h-[150px] rounded-full bg-slate-400 mb-4"></div>
                  <div className="w-[85%]">
                    <h2 className="text-[20px] font-bold flex items-center gap-2">
                      Teste Title Post
                    </h2>
                    <p className="pb-6 pt-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nam quos eveniet at ratione quod assumenda architecto,
                      illo modi iste minima aut, deserunt adipisci possimus
                      error laborum asperiores sint consectetur nisi.
                    </p>
                    <div className="flex gap-4">
                      <span className="flex items-center"># React</span>
                      <span className="flex items-center"># ReactNative</span>
                      <span className="right-5 flex items-center">
                        # ReactJS
                      </span>
                    </div>
                    <span className="pt-6 absolute right-8 bottom-8">
                      20/05/2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        </section>
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
