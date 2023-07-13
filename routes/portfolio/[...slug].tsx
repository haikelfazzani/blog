import { Handlers, PageProps } from "$fresh/server.ts";
import Meta from "../../components/Meta.tsx";
import ProjectView from "../../components/ProjectView.tsx";
import ListProjects from "../../islands/ListProjects.tsx";
import ListTags from "../../islands/ListTags.tsx";
import type { Project } from '../../types/all.d.ts';
import removeDuplicate from "../../utils/removeDuplicate.ts";

type Data = {
  projects?: Project[]
  project?: Project
  section?: string
  slug?: string
  tags?: string[]
}

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    try {
      const params = ctx.params.slug.split('/');

      if (!params || params.length < 1) throw new Error('invalid URL params');

      const section = params[0];

      if (!/[a-z]/gi.test(section) || !section || section.length > 100) throw new Error('invalid section');

      const res = await fetch(`${Deno.env.get("BASE_URL_PORTFOLIO_DATA")}/_${section}.json`);
      let projects: Project[] = await res.json();

      if (res.status === 404 || !projects || projects.length < 1) throw new Error('No projects found');

      const slug = params[1];

      if (slug && params.length > 1 && slug.length < 100) {
        const project: Project | undefined = projects.find(p => p.slug === slug || p.title === slug);
        return ctx.render({ project, section, slug });
      }
      else {
        const tag = new URL(_req.url).searchParams.get('tag') as string;
        if (tag && tag.length < 120) projects = tag === 'all' ? projects : projects.filter(p => p.tags.includes(tag));
        const tags = removeDuplicate(projects.flatMap(p => p.tags.split(',')));
        return ctx.render({ projects, section, slug, tags });
      }
    } catch (error) {
      return ctx.renderNotFound();
    }
  },
};

export default function Page({ data }: PageProps<Data>) {
  return <>
    <Meta>
      <title>{data.section} | Haikel Fazzani</title>
      <meta name="keywords" content={data.project?.tags || data.tags?.join(',')} />
      <meta name="description" content={data.project?.description} />
      <link rel="canonical" href={`${Deno.env.get("BASE_URL_WEBSITE")}/${data.section}/${data.slug}`} />
      {data.section && data.slug && data.project && <meta itemProp="image" content={data.project?.images[0]}></meta>}
    </Meta>

    {data.section && data.slug && data.project
      ? <ProjectView project={data.project} section={data.section} />

      : <main class="overflow">
        <h1>{data.section} <small>({data.projects?.length || 0})</small></h1>
        <p>A few highlights of my open-source {data.section}. View them all on <a class="green" href="https://github.com/haikelfazzani">Github</a> or <a class="green" href="https://gitlab.com/haikelfazzani">Gitlab</a>.</p>
        <ListTags section={data.section} tags={data.tags} />
        <ListProjects section={data.section} projects={data.projects} />
      </main>
    }
  </>
}
