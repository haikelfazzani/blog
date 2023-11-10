import ExternalLink from "../components/ExternalLink.tsx";
import ytvideos from "../utils/ytvideos.ts";
import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Haikel Fazzani | Linux, React/Native, Typescript, NodeJs and Go developer</title>
        <meta name="title" content="Haikel Fazzani | Linux, React/Native, Typescript, NodeJs and Go developer" />
        <meta name="description" content="Haikel Fazzani: Master's in Network Security | Linux, React/Native, TypeScript, Node.js, Go Developer" />
        <meta name="keywords" content="software engineer, network engineer, network, tcp, http, icmp, udp, tcp protocol, osi model, osi layers, linux security, network security, software engineering,java,android,mobile ,chrome extensions,haikel fazzani, fazzani" />
        <meta itemProp="image" content="https://i.ibb.co/SwqxSc0/Screenshot-2023-07-13-10-55-26.png"></meta>
        <meta itemProp="author" content="Haikel Fazzani" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://haikel-fazzani.deno.dev" />
        <meta property="og:title" content="Haikel Fazzani | Linux, React/Native, Typescript, NodeJs and Go developer" />
        <meta property="og:description" content="Haikel Fazzani: Master's in Network Security | Linux, React/Native, TypeScript, Node.js, Go Developer" />
        <meta property="og:image" content="https://i.ibb.co/SwqxSc0/Screenshot-2023-07-13-10-55-26.png" />

        <meta property="twitter:card" content="https://i.ibb.co/SwqxSc0/Screenshot-2023-07-13-10-55-26.png" />
        <meta property="twitter:url" content="https://haikel-fazzani.deno.dev" />
        <meta property="twitter:title" content="Haikel Fazzani | Linux, React/Native, Typescript, NodeJs and Go developer" />
        <meta property="twitter:description" content="Haikel Fazzani: Master's in Network Security | Linux, React/Native, TypeScript, Node.js, Go Developer" />
        <meta property="twitter:image" content="https://i.ibb.co/SwqxSc0/Screenshot-2023-07-13-10-55-26.png" />
      </Head>

      <main class="overflow">
        <section class="mb-3">
          <h1 class="mb-0 text-3">Hi 👋</h1>
          <div class="text-wave mb-1 mt-1">
            <h2 class="m-0 text-1">I'm Haikel Fazzani</h2>
            <h3 class="m-0 text-1">I'm Haikel Fazzani</h3>
          </div>
          <p>Welcome to my blog</p>
        </section>

        <section class="mb-3">
          <blockquote class="light">
            Any fool can write code that a computer can understand. Good programmers write code that humans can understand.
            <cite><br />-
              <ExternalLink href="https://fr.wikipedia.org/wiki/Martin_Fowler"> Martin Fowler</ExternalLink>
            </cite>
          </blockquote>
        </section>

        <section class="mb-3">
          <h2 class="text-3">Latest blog posts</h2>
          <ul>
            <li><i class="fa fa-circle mr-2 light"></i><a href="/blog/uninstall-package-linux">How to uninstall or remove package from Ubuntu</a></li>
            <li><i class="fa fa-circle mr-2 light"></i><a href="/blog/icmp">ICMP</a></li>
            <li><i class="fa fa-circle mr-2 light"></i><a href="/blog/tcp-header">TCP Header</a></li>
            <li><i class="fa fa-circle mr-2 light"></i><a href="/blog/promiscuous-mode">Promiscuous mode</a></li>
          </ul>
        </section>

        <section class="mb-3">
          <h2 class="text-3 mb-0">Latest youtube videos</h2>
          <small class="light"><i class="fab fa-youtube"></i> for more videos, visit my channel <ExternalLink href="https://www.youtube.com/@HaikelFazzanii">@HaikelFazzanii</ExternalLink></small>
          <ul class="w-100 grid-4 mt-2">
            {ytvideos.map((v, i) => <li key={i}>
              <ExternalLink clx="text-6" href={v.url}><img class="w-100 br7" src={v.thumbnail} alt={v.title} /><span>{v.title}</span></ExternalLink>
            </li>)}
          </ul>
        </section>
      </main>
    </>
  );
}
