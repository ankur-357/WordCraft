import Head from "next/head";
import Broadcast from "../components/Broadcast";
import Header from "../components/Header";
import ParentBox from "../components/ParentBox";

export default function Home() {
  return (
    <>
      <Head>
        <title>WordCraft</title>

        <link rel="icon" href="/logo.png" />
        {/* Google Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0LDF0PBWQY', { page_path: window.location.pathname });
            `,
          }}
        />
      </Head>

      <body
        id="mainbody"
        className="bg-white text-fuchsia-400 m-2 md:p-2 mon font-semibold md:overflow-y-hidden"
      >
        <Broadcast />
        <Header />
        <ParentBox />
      </body>
    </>
  );
}
