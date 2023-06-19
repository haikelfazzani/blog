import { Handlers, PageProps } from "$fresh/server.ts";
import Link from "../../components/Link.tsx";
import Meta from "../../components/Meta.tsx";

type Data = {
  name: string
  section: string
  count: number
  icon: string
}

export const handler: Handlers<Data[]> = {
  async GET(_req, ctx) {
    try {
      const res = await fetch(`${Deno.env.get("BASE_URL_PORTFOLIO_DATA")}/_portfolio.json`);
      const data: Data[] = await res.json();
      if (res.status === 404 || !data || data.length < 1) throw new Error('No data found');
      return ctx.render(data);
    } catch (error) {
      return ctx.renderNotFound();
    }
  },
};

export default function Page({ data }: PageProps<Data[]>) {
  return (
    <>
      <Meta>
        <title>Portfolio | Haikel Fazzani</title>
        <meta name="description" content="A few highlights of my open-source portfolio" />
        <link rel="canonical" href="https://haikel-fazzani.deno.dev/portfolio" />
      </Meta>

      {data && data.length > 0 && <main class="overflow">
        <h1>Portfolio <small>({data.reduce((a, c) => a + c.count, 0)})</small></h1>
        <p>A few highlights of my open-source portfolio. View them all on <a class="green" href="https://github.com/haikelfazzani">Github</a> or <a class="green" href="https://gitlab.com/haikelfazzani">Gitlab</a>.</p>

        <ul class='w-100 grid-3 center'>
          {data.map((d, i) => <li class="w-100 card p-2" key={i}>
            <h2 class="text-1 mt-0 mb-2"><i class={d.icon}></i></h2>
            <small class="mb-2 light">({d.count})</small>
            <h3 class="m-0 white text-4 fw-0"><Link href={"/portfolio/" + d.section} title={d.name}>{d.name}</Link></h3>
          </li>)}
        </ul>
      </main>}
    </>
  );
}
