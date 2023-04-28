import Link from "../../components/Link.tsx";
import Meta from "../../components/Meta.tsx";

export default function Page() {
  return (
    <>
      <Meta>
        <title>Portfolio | Haikel Fazzani</title>
        <meta name="description" content="A few highlights of my open-source portfolio" />
        <link rel="canonical" href="https://haikel-fazzani.deno.dev/portfolio" />
      </Meta>

      <main class="overflow">
        <h1>Portfolio</h1>
        <p>A few highlights of my open-source portfolio. View them all on <a class="green" href="https://github.com/haikelfazzani">Github</a> or <a class="green" href="https://gitlab.com/haikelfazzani">Gitlab</a>.</p>

        <ul class='w-100 grid-3 center'>
          <li class="w-100 card p-2">
            <h2 class="text-1 mt-0"><i class="fas fa-toolbox"></i></h2>
            <h3 class="m-0 white text-4 fw-0"><Link href="/portfolio/cli" title="Command Line Tools">Command Line Tools</Link></h3>
          </li>
          <li class="w-100 card p-2">
            <h2 class="text-1 mt-0"><i class="fas fa-shapes"></i></h2>
            <h3 class="m-0 white text-4 fw-0"><Link href="/portfolio/applications" title="Web/Mobile/Desktop apps">Web/Mobile/Desktop apps</Link></h3>
          </li>
          <li class="w-100 card p-2">
            <h2 class="text-1 mt-0"><i class="fab fa-edge"></i></h2>
            <h3 class="m-0 white text-4 fw-0"><Link href="/portfolio/extensions" title="Browser/Vscode Extensions">Browser/Vscode Extensions</Link></h3>
          </li>
          <li class="w-100 card p-2">
            <h2 class="text-1 mt-0"><i class="fas fa-box-open"></i></h2>
            <h3 class="m-0 white text-4 fw-0"><Link href="/portfolio/packages" title="Packages">Packages</Link></h3>
          </li>
          <li class="w-100 card p-2">
            <h2 class="text-1 mt-0"><i class="fas fa-puzzle-piece"></i></h2>
            <h3 class="m-0 white text-4 fw-0"><Link href="/portfolio/game" title="Game">Game</Link></h3>
          </li>
        </ul>
      </main>
    </>
  );
}
