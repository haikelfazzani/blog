import { Project } from '../types/all.d.ts';
import { Head } from "$fresh/runtime.ts";
import CardProject from '../islands/CardProject.tsx';

export default function ListProjects({ section, projects }: { section: string | undefined, projects: Project[] | undefined }) {
  if (!section || !projects || projects.length < 1) return <p class="alert bg-dark p-2 mt-3 br7">Nothing found!<i class="fa fa-smile ml-1"></i></p>

  return <>
    <Head>
      <title>{section} | Portfolio</title>
      <meta name="keywords" content={projects[0].tags} />
      <meta name="description" content={`A few highlights of ${section} open-source projects`} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${Deno.env.get("BASE_URL_WEBSITE")}/${section}`} />
      <meta property="og:title" content={section} />
      <meta property="og:description" content={`A few highlights of ${section} open-source projects`} />

      <link rel="canonical" href={`${Deno.env.get("BASE_URL_WEBSITE")}/${section}`} />
      <meta itemProp="image" content={projects[0].images[0]}></meta>
    </Head>

    <ul class="w-100 grid-2 mt-3">
      {projects?.map((project: Project, i: number) => <li class="mb-2 p-2 card position-relative" key={i} title={project.title}>
        <CardProject project={project} section={section} />
      </li>)}
    </ul>
  </>
}
