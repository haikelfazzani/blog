import { Handlers, PageProps } from "$fresh/server.ts";
import Meta from "../../components/Meta.tsx";
import GetSnippets from "../../queries/GetSnippets.ts";
import { BlogPatialPost } from "../../types/all.d.ts";
import Link from "../../components/Link.tsx";

type Data = {
  snippets: BlogPatialPost[] | null
  tag: string | null
}

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    try {
      const tag = new URL(_req.url).searchParams.get('tag') as string;
      const HYGRAPH_URL = Deno.env.get("HYGRAPH_URL") as string;

      const res = await fetch(HYGRAPH_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + Deno.env.get("HYGRAPH_KEY")
        },
        body: JSON.stringify({ query: GetSnippets(), variables: null, operationName: "GetSnippets" })
      });

      const { data, errors } = await res.json();

      if (errors || res.status === 404 || data.snippets.length < 1) return ctx.renderNotFound();

      let snippets: BlogPatialPost[] = data.snippets.slice(0);

      if (tag) snippets = data.snippets.filter((p: BlogPatialPost) => p.tags.includes(tag));

      const resp = await ctx.render({ snippets, tag });
      return resp;
    } catch (_error) {
      return ctx.renderNotFound();
    }
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { snippets, tag } = data;

  return <>
    <Meta>
      <title>Snippets | Haikel Fazzani</title>
    </Meta>

    <main class="overflow">
      <h1>Snippets</h1>

      <p class="mb-0">Some useful snippets for your next new project.</p>

      {tag && <h6><i class="fa fa-search mr-1"></i>{snippets?.length} result<small>(s)</small> found: {tag}</h6>}

      <ul class="mt-3">
        {snippets!.map((post, i: number) => <li class="mb-2 p-2 card" key={i}>
          <Link href={"/snippets/" + post.slug}><h2 class="mt-0 text-3" title={post.title}>{post.title}</h2></Link>
          <p class="light">{post.excerpt}</p>
          <div>{post.tags.map((tag, idx) => <span class="tag mr-2" key={idx}>{tag}</span>)}</div>
        </li>)}
      </ul>
    </main>
  </>;
}
