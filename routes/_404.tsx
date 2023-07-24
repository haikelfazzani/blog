import { Head } from "$fresh/runtime.ts";

export default function NotFoundPage() {
  return <>
    <Head>
      <title>404 | Haikel Fazzani</title>
      <meta name="title" content="404 | Haikel Fazzani" />
      <meta name="description" content="Haikel Fazzani: Master's in Network Security | Linux, React/Native, TypeScript, Node.js, Go Developer" />
      <meta name="keywords" content="network security,software engineering,java,android,mobile ,chrome extensions,haikel fazzani, fazzani, master, engineer, portfolio, developer, software, javaScript, python, nodejs, golang, security, pentesting, soc, open source,how to become a web developer,how to develop a web site,what is business development" />
      <meta itemProp="image" content="https://i.ibb.co/SwqxSc0/Screenshot-2023-07-13-10-55-26.png"></meta>
      <meta itemProp="author" content="Haikel Fazzani" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://haikel-fazzani.deno.dev" />
      <meta property="og:title" content="404 | Haikel Fazzani" />
      <meta property="og:description" content="Haikel Fazzani: Master's in Network Security | Linux, React/Native, TypeScript, Node.js, Go Developer" />
      <meta property="og:image" content="https://i.ibb.co/SwqxSc0/Screenshot-2023-07-13-10-55-26.png" />
      <meta property="twitter:card" content="https://i.ibb.co/SwqxSc0/Screenshot-2023-07-13-10-55-26.png" />
      <meta property="twitter:url" content="https://haikel-fazzani.deno.dev" />
      <meta property="twitter:title" content="404 | Haikel Fazzani" />
      <meta property="twitter:description" content="Haikel Fazzani: Master's in Network Security | Linux, React/Native, TypeScript, Node.js, Go Developer" />
      <meta property="twitter:image" content="https://i.ibb.co/SwqxSc0/Screenshot-2023-07-13-10-55-26.png" />
    </Head>

    <main>
      <h1 class="mb-0" style={{ fontSize: '152px' }}>404</h1>
      <h3 class="mt-3">Page not found</h3>
      <p>It seems that you're lost in a perpetual black hole. Let us help guide you out and get you back home.</p>
      <a class="btn bg-dark mt-3" href="/"><i class="fa fa-home mr-2"></i>GO HOME</a>
    </main>
  </>
}