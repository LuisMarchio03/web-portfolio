import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";
import { Circle, Folder } from "phosphor-react";
import { Sidebar } from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Luís Gabriel</title>
      </Head>

      <main className="py-8 px-8 flex">
        <Sidebar />

        <section className="w-[calc(100%_-_380px)] ml-12 flex flex-col gap-8">
          <>
            <div className="w-[100%] h-[86px] mb-12 bg-[#302F3D] text-[837E9F] text-[20px] font-bold flex items-center pl-6 rounded-2xl">
              Meus Projetos
            </div>

            <div className="w-[100%] h-auto flex gap-8">
              <Link
                href="https://github.com/LuisMarchio03/api-ecommerce"
                target="_blank"
              >
                <a
                  target="_blank"
                  className="relative w-[50%] p-8 bg-[#302F3D] text-[837E9F] rounded-xl border-b cursor-pointer"
                >
                  <h2 className="text-[20px] font-bold flex items-center gap-2">
                    <Folder size={32} weight="light" />
                    Api-Ecommerce
                  </h2>
                  <p className="pb-8 pt-4">
                    API E-commerce | Node.js + Express.js + Typescript + TDD +
                    SOLID + Testes Automatizados + TypeORM + PrismaIO + Nest.js
                  </p>
                  <span className="absolute bottom-5 right-5 flex items-center ">
                    <Circle size={15} weight="fill" color="#7cb803" />
                    <p className="ml-2">Node.js | Typescript</p>
                  </span>
                </a>
              </Link>

              <Link
                href="https://github.com/LuisMarchio03/Feedget"
                target="_blank"
              >
                <a
                  target="_blank"
                  className="relative w-[50%] p-8 bg-[#302F3D] text-[837E9F] rounded-xl border-b cursor-pointer"
                >
                  <h2 className="text-[20px] font-bold flex items-center gap-2">
                    <Folder size={32} weight="light" />
                    Feedget
                  </h2>

                  <p className="pb-8 pt-4">
                    Feedget | React.js, Tailwind, Acessibility, Microservices,
                    Solid, Test-automation, React Native
                  </p>
                  <span className="absolute bottom-5 right-5 flex items-center ">
                    <Circle size={15} weight="fill" color="#2676c6" />
                    <p className="ml-2">Typescript</p>
                  </span>
                </a>
              </Link>
            </div>

            <div className="w-[100%] h-auto flex gap-8">
              <Link
                href="https://github.com/LuisMarchio03/ignite-rentx"
                target="_blank"
              >
                <a
                  target="_blank"
                  className="relative w-[50%] p-8 bg-[#302F3D] text-[837E9F] rounded-xl border-b cursor-pointer"
                >
                  <h2 className="text-[20px] font-bold flex items-center gap-2">
                    <Folder size={32} weight="light" />
                    Ignite Rentx
                  </h2>
                  <p className="pb-8 pt-4">
                    API Desenvolvida durante o curso Ignite Trilha Node.js |
                    Node.js + Express.js + Typescript + TDD + SOLID + Testes
                    Automatizados + TypeORM
                  </p>
                  <span className="absolute bottom-5 right-5 flex items-center ">
                    <Circle size={15} weight="fill" color="#7cb803" />
                    <p className="ml-2">Node.js | Typescript</p>
                  </span>
                </a>
              </Link>

              <Link
                href="https://github.com/LuisMarchio03/rocketseat-ignite-lab"
                target="_blank"
              >
                <a
                  target="_blank"
                  className="relative w-[50%] p-8 bg-[#302F3D] text-[837E9F] rounded-xl border-b cursor-pointer"
                >
                  <h2 className="text-[20px] font-bold flex items-center gap-2">
                    <Folder size={32} weight="light" />
                    Ignite Lab
                  </h2>

                  <p className="pb-8 pt-4">
                    Projeto completo Desenvolvido durante a maratona Ignite Lab
                    01 | Nest.js + Microservice + GraphQL + Apollo + Next.js +
                    Typescript + PrismaIO
                  </p>
                  <span className="absolute bottom-5 right-5 flex items-center ">
                    <Circle size={15} weight="fill" color="#2676c6" />
                    <p className="ml-2">Typescript</p>
                  </span>
                </a>
              </Link>
            </div>
          </>

          <>
            <div className="w-[100%] h-[86px] mt-12  mb-12 bg-[#302F3D] text-[837E9F] text-[20px] font-bold flex items-center pl-6 rounded-2xl">
              Posts Recentes
            </div>

            {/* <div className="w-[100%] h-auto">
              <div className="w-[100%] h-auto flex gap-8">
                <div className="relative w-[100%] p-8 bg-[#302F3D] text-[837E9F] rounded-xl border-b flex items-center gap-6">
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
            </div> */}
          </>
        </section>
      </main>
    </>
  );
};

export default Home;
