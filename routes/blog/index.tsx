import { Handlers, PageProps } from "$fresh/server.ts";
import ExternalLink from "../../components/ExternalLink.tsx";
import Link from "../../components/Link.tsx";
import GetPosts from "../../queries/GetPosts.ts";
import { BlogPatialPost } from "../../types/all.d.ts";
import { Head } from "$fresh/runtime.ts";

type Data = {
  posts: BlogPatialPost[] | null
  tag: string | null
  tags: string[]
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
        body: JSON.stringify({ query: GetPosts(), variables: null, operationName: "GetPosts" })
      });

      const { data, errors } = await res.json();

      if (errors || res.status === 404 || data.posts.length < 1)  throw new Error('No posts found');

      let posts: BlogPatialPost[] = data.posts.slice(0);

      const tags: string[] = [];
      posts?.forEach(t => { t.tags.forEach(v => { if (!tags.includes(v)) tags.push(v); }); });

      if (tag && tag.length < 200) posts = tag === 'all' ? data.posts : data.posts.filter((p: BlogPatialPost) => p.tags.includes(tag));

      const resp = await ctx.render({ posts, tag, tags });
      return resp;
    } catch (_error) {
      return ctx.renderNotFound();
    }
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { posts, tag, tags } = data;

  return <>
    <Head>
      <title>Blog | Haikel Fazzani</title>
      <meta name="description" content="Haikel Fazzani blog posts" />
      <meta name="keywords" content={tags?.join(',')} />     
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${Deno.env.get("BASE_URL_WEBSITE")}/blog`} />
      <meta property="og:title" content="Blog | Haikel Fazzani" />
      <meta property="og:description" content="I'm happy to write about various topics whether it's a technical deep dive or a soft skills piece" />
      <meta property="og:image" content="https://i.ibb.co/SwqxSc0/Screenshot-2023-07-13-10-55-26.png" />
    </Head>

    <main class="overflow">
      <h1>Blog <small>({posts?.length})</small></h1>

      <p class="mb-0">I'm happy to write about various topics whether it's a technical deep dive or a soft skills piece.</p>
      <p>If you like algorithms, check out this repository on <ExternalLink title="Gitlab" clx="green" href="https://gitlab.com/haikelfazzani/code-challenges" />.</p>

      {tag
        ? <h6><i class="fa fa-search mr-1"></i>{posts?.length} result<small>(s)</small> found for "{tag}"</h6>
        : <div class="w-100 d-flex flex-wrap">
          {tags.length > 0 && tags.map((tag, i) => <a href={"/blog?tag=" + tag} class="tag cp mr-2 mb-1" key={i}>{tag}</a>)}
        </div>}

      <ul class="mt-3">
        {posts!.map((post, i: number) => <li class="mb-2 p-2 pb-0 card" key={i}>
          <Link href={"/blog/" + post.slug} title={post.title}><h2 class="mt-0 text-3">{post.title}</h2></Link>
          <p class="light">{post.excerpt}</p>
          <div class="w-100 d-flex flex-wrap">{post.tags.map((tag, idx) => <span class="tag mr-2 mb-2" key={idx}>{tag}</span>)}</div>
        </li>)}
      </ul>
    </main>
  </>;
}
