import ExternalLink from "../components/ExternalLink.tsx";
import Meta from "../components/Meta.tsx";

const ytvideos = [
  { title: 'House Robber | LeetCode | Dynamic Programming 🇹🇳', url: 'https://www.youtube.com/watch?v=LDCM3vKklbY', thumbnail: 'https://img.youtube.com/vi/LDCM3vKklbY/sddefault.jpg' },
  { title: 'Invert binary tree | June LeetCoding Challenge 🇹🇳', url: 'https://www.youtube.com/watch?v=ekijnOGLffU', thumbnail: 'https://img.youtube.com/vi/ekijnOGLffU/sddefault.jpg' },
  { title: 'Binary Tree Inorder Traversal | LeetCode | بلتونسي', url: 'https://www.youtube.com/watch?v=jaJ_FO-QSXU', thumbnail: 'https://img.youtube.com/vi/jaJ_FO-QSXU/sddefault.jpg' },
  { title: '[Langage C] Programme qui affiche triangle d\'étoiles 🇹🇳', url: 'https://www.youtube.com/watch?v=UYPH5LcSvmA', thumbnail: 'https://img.youtube.com/vi/UYPH5LcSvmA/sddefault.jpg' },
  { title: 'Drag And Drop Operation Between Two Listbox [C#]', url: 'https://www.youtube.com/watch?v=arkT9zg1jHc', thumbnail: 'https://img.youtube.com/vi/arkT9zg1jHc/sddefault.jpg' },
  { title: 'Start an Activity from a Notification 🇹🇳', url: 'https://www.youtube.com/watch?v=tYTDy4QnDy4', thumbnail: 'https://img.youtube.com/vi/tYTDy4QnDy4/sddefault.jpg' },
  { title: 'Role Of Adapter', url: 'https://www.youtube.com/watch?v=Hb2hc9-9kfI', thumbnail: 'https://img.youtube.com/vi/Hb2hc9-9kfI/sddefault.jpg' },
  { title: 'How To Use WebView And Load Url', url: 'https://www.youtube.com/watch?v=GPfZWZ7V-0I', thumbnail: 'https://img.youtube.com/vi/GPfZWZ7V-0I/sddefault.jpg' },
];

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
        </section>

        <section class="mb-3">
          <h2 class="m-0 mb-1 text-3">FullStack developer</h2>
          <ul>
            <li><i class="fa fa-circle light mr-1"></i>Linux</li>
            <li><i class="fa fa-circle light mr-1"></i>React JS/Native</li>
            <li><i class="fa fa-circle light mr-1"></i>Typescript/ NodeJs/ Deno</li>
            <li><i class="fa fa-circle light mr-1"></i>Golang</li>
          </ul>
        </section>

        <section class="mb-3">
          <h2 class="m-0 mb-1 text-3">Education</h2>
          <ul>
            <li><i class="fas fa-user-graduate mr-1"></i>Professionnel Master in Network security</li>
            <li class="light">Higher Institute Of Computer Science of Ariana - ISI Ariana</li>
            <li><i class="fas fa-user-graduate mr-1"></i>License In Information Systems Development</li>
            <li class="light">Higher Institute of Technological Studies of Rades - ISET Rades</li>
          </ul>
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

        <section class="mb-3">
          <h2 class="text-3">My crypto wallets</h2>
          <ul>
            <li><i class="fab fa-ethereum"></i> Ethereum address: <span>0x776EF7DD10C34fC32F85170777EEA00d06b05225</span></li>
            <li><i class="fab fa-bitcoin"></i> Bitcoin address: <span>3EpA5izERrns4LVJqVchGepXCEeJzYaxBg</span></li>
          </ul>
        </section>
      </main>
    </>
  );
}
