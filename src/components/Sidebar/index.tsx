import {
  EnvelopeSimple,
  GitBranch,
  LinkedinLogo,
  MapPin,
  Suitcase,
} from "phosphor-react";

export const Sidebar = () => {
  return (
    <aside className="w-[100%] h-[100%]">
      <div className="w-[348px] h-[292px] bg-[#302F3D] mb-8 flex flex-col items-center justify-center rounded-2xl">
        <div className="w-[100px] h-[100px] rounded-full bg-slate-400 mb-4 border-2 border-[#00FF00]"></div>
        <h1 className="text-[#837E9F] text-[20px] font-bold mb-1">
          Luís Gabriel Marchió Batista
        </h1>
        <p className="text-[#837E9F] text-[15px] font-light">
          Desenvolvedor full-stack
        </p>
      </div>

      <div className="w-[348px] h-[348px] bg-[#302F3D] text-[#837E9F] mb-8 flex flex-col justify-center items-center rounded-2xl">
        <ul>
          <li className="flex items-center mb-4">
            <MapPin size={32} />
            <span className="pl-3">Brasil</span>
          </li>
          <li className="flex items-center mb-4">
            <Suitcase size={32} />
            <span className="pl-3">B9 Sistemas</span>
          </li>
          <li className="flex items-center mb-4">
            <GitBranch size={32} />
            <span className="pl-3">LuisMarchio03</span>
          </li>
          <li className="flex items-center mb-4">
            <LinkedinLogo size={32} />
            <span className="pl-3">Luís Gabriel Marchió Batista</span>
          </li>
          <li className="flex items-center">
            <EnvelopeSimple size={32} />
            <span className="pl-3">luisgabrielmarchio75@gmail.com</span>
          </li>
        </ul>
      </div>

      <div className="w-[348px] h-[208px] bg-[#302F3D] text-[#837E9F]  mb-8 flex flex-col justify-center items-center rounded-2xl">
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
            Javascript
          </div>
          <div className="bg-[#896CEB] text-[#E1E1E6] w-[100px] p-1 rounded-full flex items-center justify-center mr-1 mb-3">
            Javascript
          </div>
          <div className="bg-[#896CEB] text-[#E1E1E6] w-[100px] p-1 rounded-full flex items-center justify-center mr-1 mb-3">
            Javascript
          </div>
          <div className="bg-[#896CEB] text-[#E1E1E6] w-[100px] p-1 rounded-full flex items-center justify-center mr-1 mb-3">
            Javascript
          </div>
          <div className="bg-[#896CEB] text-[#E1E1E6] w-[100px] p-1 rounded-full flex items-center justify-center mr-1 mb-3">
            Javascript
          </div>
        </div>
      </div>
    </aside>
  );
};
