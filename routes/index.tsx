import ExternalLink from "../components/ExternalLink.tsx";
import Meta from "../components/Meta.tsx";
import ytvideos from "../utils/ytvideos.ts";

export default function Home() {
  return (
    <>
      <Meta>
        <title>Haikel Fazzani | Linux, React/Native, Typescript, NodeJs and Go developer</title>
      </Meta>

      <main class="overflow">
        <section class="mb-3">
          <h1 class="mb-0 text-3">Hi 👋</h1>
          <div class="text-wave mb-1 mt-1">
            <h2 class="m-0 text-1">I'm Haikel Fazzani</h2>
            <h3 class="m-0 text-1">I'm Haikel Fazzani</h3>
          </div>
          <p>Welcome to my website</p>
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
