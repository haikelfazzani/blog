import { Handlers, PageProps } from "$fresh/server.ts";
import Markdown from "../../islands/Markdown.tsx";
import GetPost from "../../queries/GetPost.ts";
import { BlogPost } from "../../types/all.d.ts";
import Disqus from "../../islands/Disqus.tsx";
import { Head, asset } from "$fresh/runtime.ts";

export const handler: Handlers<BlogPost[] | null> = {
  async GET(_req, ctx) {
    const slug: string = ctx.params.slug;
    const HYGRAPH_URL = Deno.env.get("HYGRAPH_URL") as string;

    const res = await fetch(HYGRAPH_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Deno.env.get("HYGRAPH_KEY")
      },
      body: JSON.stringify({ query: GetPost(slug), variables: null, operationName: "GetPost" })
    });

    const { data, errors } = await res.json();

    if (errors || res.status === 404 || data.posts.length < 1) {
      return ctx.renderNotFound();
    }

    return ctx.render(data.posts[0]);
  },
};

export default function Post({ data }: PageProps<BlogPost>) {
  return <>
    <Head>
      <title>{data.title} | Blog</title>
      <meta name="description" content={data.excerpt} />
      <meta name="keywords" content={data.tags?.join(',')} />
      <meta itemProp="author" content="Haikel Fazzani" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${Deno.env.get("BASE_URL_WEBSITE")}/blog/${data.slug}`} />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.excerpt} />
      <meta property="og:image" content="https://i.ibb.co/SwqxSc0/Screenshot-2023-07-13-10-55-26.png" />

      <link rel="canonical" href={`${Deno.env.get("BASE_URL_WEBSITE")}/blog/${data.slug}`} />
      <link rel="stylesheet" as="style" href={asset('/prism.css')} />
    </Head>

    <main class="grid-2-1 p-0">
      <Markdown data={data.content.markdown} />

      <div class="border-left p-2 overflow">
        <div class="d-flex flex-wrap border-bottom pb-1 mb-1">
          {data.tags.map((tag, i) => <a href={"/blog?tag=" + tag} class="tag cp mr-2 mb-1" key={i}>{tag}</a>)}
        </div>

        <p>I hope this post was helpful to you.</p>
        <p><i class="fa fa-comments mr-1"></i>Leave a reaction if you liked this post!</p>

        <Disqus title={data.title} identifier={data.slug} />
      </div>
    </main>
  </>;
}
