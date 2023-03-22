import Head from "next/head";
import type { NextPage } from "next";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

const Curriculo: NextPage = () => {
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

      <embed
        style={{ width: "100%", height: "100vh" }}
        src="/img/curriculo-2023.pdf" width="100%" height="100%" type="application/pdf" />
    </>
  );
};

export default Curriculo;