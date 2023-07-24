import { Handlers, PageProps } from "$fresh/server.ts";
import Link from "../../components/Link.tsx";
import { Head } from "$fresh/runtime.ts";
import { ProjectPatial } from "../../types/all.d.ts";

type Data = {
  projects: ProjectPatial[],
  tags: string[]
}

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    try {
      const res = await fetch(`${Deno.env.get("BASE_URL_PORTFOLIO_DATA")}/_portfolio.json`);
      const projects: ProjectPatial[] = await res.json();
      if (res.status === 404 || !projects || projects.length < 1) throw new Error('No projects found');
      const tags = [...projects.map(d => d.name), 'portfolio', 'dev projects', 'haikel fazzani', 'open source'];
      return ctx.render({ projects, tags });
    } catch (error) {
      return ctx.renderNotFound();
    }
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { projects, tags } = data;
  return (
    <>
      <Head>
        <title>Portfolio | Haikel Fazzani</title>
        <meta itemProp="image" content="https://i.ibb.co/SwqxSc0/Screenshot-2023-07-13-10-55-26.png" />
        <meta name="keywords" content={tags.join(',')} />
        <meta name="description" content="A few highlights of Haikel Fazzani open-source projects" />
        <meta itemProp="author" content="Haikel Fazzani" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${Deno.env.get("BASE_URL_WEBSITE")}/portfolio`} />
        <meta property="og:title" content="Portfolio | Haikel Fazzani" />
        <meta property="og:description" content="A few highlights of Haikel Fazzani open-source projects" />
        <meta property="og:image" content="https://i.ibb.co/SwqxSc0/Screenshot-2023-07-13-10-55-26.png" />
        <link rel="canonical" href={Deno.env.get("BASE_URL_WEBSITE") + "/portfolio"} />
      </Head>

      {projects && projects.length > 0 && <main class="overflow">
        <h1>Portfolio <small>({projects.reduce((a, c) => a + c.count, 0)})</small></h1>
        <p>A few highlights of my open-source portfolio. View them all on <a class="green" href="https://github.com/haikelfazzani">Github</a> or <a class="green" href="https://gitlab.com/haikelfazzani">Gitlab</a>.</p>

        <ul class='w-100 grid-3 center'>
          {projects.map((d, i) => <li class="w-100 card p-2" key={i} title={d.name}>
            <h2 class="text-1 mt-0 mb-2"><i class={d.icon}></i></h2>
            <small class="mb-2 light">({d.count})</small>
            <h3 class="m-0 white text-4 fw-0"><Link href={"/portfolio/" + d.section} title={d.name}>{d.name}</Link></h3>
          </li>)}
        </ul>
      </main>}
    </>
  );
}
