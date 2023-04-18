import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { Circle, Folder } from "phosphor-react";
import { Sidebar } from "../components/Sidebar";

const Home: NextPage = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      <Head>
        <title>Luís Gabriel Marchió Batista</title>
        <meta name="title" content="Luís Gabriel Marchió Batista" />
        <meta name="description" content="Desenvolvedor web - full-stack | React.js | Node.js" />


        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://web-portfolio-iota-nine.vercel.app/" />
        <meta property="og:title" content="Luís Gabriel Marchió Batista" />
        <meta property="og:description" content="Desenvolvedor web - full-stack | React.js | Node.js" />
        <meta property="og:image" content="/img/foto.jpeg" />


        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://web-portfolio-iota-nine.vercel.app/" />
        <meta property="twitter:title" content="Luís Gabriel Marchió Batista" />
        <meta property="twitter:description" content="Desenvolvedor web - full-stack | React.js | Node.js" />
        <meta property="twitter:image" content="/img/foto.jpeg" />
      </Head>

      <main className="py-8 px-8 lg:flex">
        <Sidebar />

        <section className="w-[100%] lg:w-[calc(100%_-_380px)] ml-0 lg:ml-12 flex flex-col gap-8">
          <>
            <div className="w-[100%] h-[86px] mb-12 bg-[#302F3D] text-[837E9F] text-[20px] font-bold flex items-center pl-6 rounded-2xl">
              Meus Projetos
            </div>

            <div className="w-[100%] h-auto flex flex-col lg:flex-row gap-8">
              <Link
                href="https://github.com/LuisMarchio03/api-ecommerce"
                target="_blank"
              >
                <a target="_blank" className="relative w-[100%] lg:w-[50%] p-8 bg-[#302F3D] text-[837E9F] rounded-xl border-b cursor-pointer">
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
                href="https://github.com/LuisMarchio03/FidelityApp"
                target="_blank"
              >
                <a target="_blank" className="relative w-[100%] lg:w-[50%] p-8 bg-[#302F3D] text-[837E9F] rounded-xl border-b cursor-pointer">
                  <h2 className="text-[20px] font-bold flex items-center gap-2">
                    <Folder size={32} weight="light" />
                    FidelityApp
                  </h2>

                  <p className="pb-8 pt-4">
                    FidelityApp | GoLang + Gin + GORM + Sqlite + Docker + JWT + Bcrypt
                  </p>
                  <span className="absolute bottom-5 right-5 flex items-center ">
                    <Circle size={15} weight="fill" color="#5e9ad7" />
                    <p className="ml-2">Golang</p>
                  </span>
                </a>
              </Link>
            </div>

            <div className="w-[100%] h-auto flex flex-col lg:flex-row gap-8">
              <Link
                href="https://github.com/LuisMarchio03/golang-boilerplate-api"
                target="_blank"
              >
                <a target="_blank" className="relative w-[100%] lg:w-[50%] p-8 bg-[#302F3D] text-[837E9F] rounded-xl border-b cursor-pointer">
                  <h2 className="text-[20px] font-bold flex items-center gap-2">
                    <Folder size={32} weight="light" />
                    golang-boilerplate-api
                  </h2>

                  <p className="pb-8 pt-4">
                  A job opportunities API built using Golang. The API uses Go-Gin as a router, SQLite as a database, and GoORM for database communication. It also includes Swagger for documentation and testing, and a well-organized package structure.
                  </p>
                  <span className="absolute bottom-5 right-5 flex items-center ">
                    <Circle size={15} weight="fill" color="#5e9ad7" />
                    <p className="ml-2">Golang</p>
                  </span>
                </a>
              </Link>
              
              <Link
                href="https://github.com/LuisMarchio03/MoneyTransferApi"
                target="_blank"
              >
                <a target="_blank" className="relative w-[100%] lg:w-[50%] p-8 bg-[#302F3D] text-[837E9F] rounded-xl border-b cursor-pointer">
                  <h2 className="text-[20px] font-bold flex items-center gap-2">
                    <Folder size={32} weight="light" />
                    MoneyTransferApi
                  </h2>

                  <p className="pb-8 pt-4">
                    This is a project for a money transfer API built using Golang and Nodejs + Servelles framework + AWS Lambda. The API allows for transferring money between accounts and also includes the ability to cancel transfers. It also uses RabbitMQ for message queuing.
                  </p>
                  <span className="absolute bottom-5 right-5 flex items-center ">
                    <Circle size={15} weight="fill" color="#2676c6" />
                    <p className="ml-2">Golang | Typescript</p>
                  </span>
                </a>
              </Link>
            </div>

            <div className="w-[100%] h-auto flex flex-col lg:flex-row gap-8">
              <Link
                href="https://github.com/LuisMarchio03/ignite-rentx"
                target="_blank"
              >
                <a target="_blank" className="relative w-[100%] lg:w-[50%] p-8 bg-[#302F3D] text-[837E9F] rounded-xl border-b cursor-pointer">
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
                <a target="_blank" className="relative w-[100%] lg:w-[50%] p-8 bg-[#302F3D] text-[837E9F] rounded-xl border-b cursor-pointer">
                  <h2 className="text-[20px] font-bold flex items-center gap-2">
                    <Folder size={32} weight="light" />
                    professional-react-project-using-jest-testing-library-react-and-storybook
                  </h2>

                  <p className="pb-8 pt-4">
                    Projeto desenvolvido durante o curso professional-react-project-using-jest-testing-library-react-and-storybook | React + Typescript + Jest + Testing Library + Storybook + React Testing Library
                  </p>
                  <span className="absolute bottom-5 right-5 flex items-center ">
                    <Circle size={15} weight="fill" color="#784abe" />
                    <p className="ml-2">HTML | CSS | TypeScript</p>
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
