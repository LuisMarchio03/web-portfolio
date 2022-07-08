import Image from "next/image";
import Link from "next/link";
import {
  EnvelopeSimple,
  GitBranch,
  LinkedinLogo,
  MapPin,
  WhatsappLogo,
  Suitcase,
} from "phosphor-react";

export const Sidebar = () => {
  return (
    <aside className="w-[100%] lg:w-[348px] h-[100%]">
      <div className="w-[100%] lg:w-[348px] h-[292px] bg-[#302F3D] mb-8 flex flex-col items-center justify-center rounded-2xl">
        <div className="w-[100px] h-[100px] rounded-full bg-slate-400 mb-4 border-2 border-[#00FF00]">
          <Image
            src="/img/foto.jpeg"
            alt="Luís Gabriel Marchió Batista"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <h1 className="text-[#837E9F] text-[20px] font-bold mb-1">
          Luís Gabriel Marchió Batista
        </h1>
        <p className="text-[#837E9F] text-[15px] font-light">
          Desenvolvedor full-stack | React.js | Node.js
        </p>
      </div>

      <div className="w-[100%] lg:w-[348px] h-[348px] bg-[#302F3D] text-[#837E9F] mb-8 flex flex-col justify-center items-center rounded-2xl">
        <ul>
          <li className="flex items-center mb-4">
            <MapPin size={32} />
            <span className="pl-3">Mineiros - GO | Brasil</span>
          </li>
          <li className="flex items-center mb-4">
            <Suitcase size={32} />
            <span className="pl-3">B9 Sistemas</span>
          </li>
          <li className="flex items-center mb-4">
            <GitBranch size={32} />
            <Link href="https://github.com/LuisMarchio03">
              <a target="_blank" className="pl-3">
                LuisMarchio03
              </a>
            </Link>
          </li>
          <li className="flex items-center mb-4">
            <LinkedinLogo size={32} />
            <Link href="https://www.linkedin.com/in/lu%C3%ADs-gabriel-marchi%C3%B3-batista-a0aa64206/">
              <a target="_blank" className="pl-3">
                Luís Gabriel Marchió Batista
              </a>
            </Link>
          </li>
          <li className="flex items-center mb-4">
            <EnvelopeSimple size={32} />
            <span className="pl-3">luisgabrielmarchio75@gmail.com</span>
          </li>
          <li className="flex items-center">
            <WhatsappLogo size={32} />
            <span className="pl-3">(64) 9 9991-8525</span>
          </li>
        </ul>
      </div>

      <div className="w-[100%] lg:w-[348px] pt-8 pb-8 bg-[#302F3D] text-[#837E9F]  mb-8 flex flex-col justify-center items-center rounded-2xl">
        <div className="w-full mb-6">
          <h2 className="text-[#837E9F] text-[20px] font-bold ml-5">
            Tecnologias
          </h2>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="bg-[#896CEB] text-[#E1E1E6] w-[100px] p-1 rounded-full flex items-center justify-center mr-1 mb-3">
            Javascript
          </div>
          <div className="bg-[#896CEB] text-[#E1E1E6] w-[100px] p-1 rounded-full flex items-center justify-center mr-1 mb-3">
            Typescript
          </div>
          <div className="bg-[#896CEB] text-[#E1E1E6] w-[100px] p-1 rounded-full flex items-center justify-center mr-1 mb-3">
            React.js
          </div>
          <div className="bg-[#896CEB] text-[#E1E1E6] w-[100px] p-1 rounded-full flex items-center justify-center mr-1 mb-3">
            Next.js
          </div>
          <div className="bg-[#896CEB] text-[#E1E1E6] w-[100px] p-1 rounded-full flex items-center justify-center mr-1 mb-3">
            Node.js
          </div>
          <div className="bg-[#896CEB] text-[#E1E1E6] w-[100px] p-1 rounded-full flex items-center justify-center mr-1 mb-3">
            Nest.js
          </div>
        </div>
      </div>

      <div className="w-[100%] lg:w-[348px] pt-8 pb-8 bg-[#302F3D] text-[#837E9F]  mb-8 flex flex-col justify-center items-center rounded-2xl">
        <div className="w-full mb-6">
          <h2 className="text-[#837E9F] text-[20px] font-bold ml-5">
            Estudos e interesses
          </h2>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="bg-[#6A80FF] text-[#E1E1E6] w-[150px] p-1 rounded-full flex items-center justify-center mr-1 mb-3">
            Go Lang
          </div>
          <div className="bg-[#6A80FF] text-[#E1E1E6] w-[150px] p-1 rounded-full flex items-center justify-center mr-1 mb-3">
            Java
          </div>
          <div className="bg-[#6A80FF] text-[#E1E1E6] w-[150px] p-1 rounded-full flex items-center justify-center mr-1 mb-3">
            Microservices
          </div>
        </div>
      </div>

      <div className="w-[100%] lg:w-[348px] pt-8 pb-8 bg-[#302F3D] text-[#837E9F]  mb-8 flex flex-col justify-center items-center rounded-2xl">
        <div className="w-full mb-6">
          <h2 className="text-[#837E9F] text-[20px] font-bold ml-5 mb-5">
            Experiências
          </h2>

          <div className="ml-12">
            <ul className="list-disc">
              <li>
                <strong>B9 Sistemas</strong>
                <p className="ml-2">2021 - Atualmente</p>
                <p className="ml-2">
                  Desenvolvedor Full-Stack | React.js | Node.js
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-[100%] lg:w-[348px] pt-8 pb-8 bg-[#302F3D] text-[#837E9F]  mb-8 flex flex-col justify-center items-center rounded-2xl">
        <div className="w-full mb-6">
          <h2 className="text-[#837E9F] text-[20px] font-bold ml-5 mb-5">
            Educação
          </h2>

          <div className="ml-12">
            <ul className="list-disc">
              <li>
                <strong>Unifimes | Mineiros - GO</strong>
                <p className="ml-2">2022 - 2025</p>
                <p className="ml-2">Bacharelado em Sistemas de Informação</p>
              </li>
              <li>
                <strong>Rocketseat</strong>
                <p className="ml-2">2021 - 2022</p>
                <p className="ml-2">Trilha Node.js</p>
              </li>
              <li>
                <strong>Rocketseat</strong>
                <p className="ml-2">2022 - 2022</p>
                <p className="ml-2">Trilha React.js</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};
