import { Head, asset } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";
import { Layout } from "../components/Layout.tsx";
import Footer from "../components/Footer.tsx";

export default function App(props: AppProps) {
  return (
    <html style="background:#0a3a00;">
      <Head key="0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />
        <meta name="next-head-count" content="10" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="robots" content="index,follow" />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/192.png" type="image/png" />
        <link rel="alternate" type="application/rss+xml" title="haikel-fazzani.deno.dev" href="/sitemap.xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="keywords" content="network,network security,haikel,haikel fazzani,fazzani,software,engineer,web,about,fullstack,developer,golang,software engineer,full stack,js,javascript,linux" />

        <link rel="stylesheet" href={asset('/root.css')} />
        <link rel="stylesheet" as="style" href={asset('/index.css')} />
        <link rel="stylesheet" as="style" href={asset('/util.css')} />        
        <link rel="stylesheet" as="style" href={asset('/animation.css')} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet" />

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
          integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
          crossOrigin="anonymous" async />
      </Head>

      <body data-theme="dark">
        <Layout>
          <Layout.Nav />
          <props.Component />
        </Layout>

        <Footer />

        <script type="text/javascript" src={asset('/ms.js')} defer></script>
      </body>
    </html>
  );
}