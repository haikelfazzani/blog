import ExternalLink from '../components/ExternalLink.tsx'
import { Project } from '../types/all.d.ts';
import { Head } from "$fresh/runtime.ts";

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
        <div class="w-100 mb-2 d-flex justify-between">
          <a href={`/portfolio/${section}/${project.slug.trim()}`}>
            <h2 class="m-0 text-3">{project.title}</h2>
          </a>

          <div class="ml-1 d-flex flex-wrap out-links">
            <ExternalLink href={project.website}><i class="fas fa-globe"></i></ExternalLink>
            <ExternalLink href={project.edge}><i class="fab fa-edge"></i></ExternalLink>
            <ExternalLink href={project.firefox}><i class="fab fa-firefox"></i></ExternalLink>
            <ExternalLink href={project.repository}><i class="fab fa-github"></i></ExternalLink>
          </div>
        </div>

        <p>{project.description}</p>

        <div class="d-flex flex-wrap">
          {project.tags.split(',').map((tag: string, i: number) => <span class="tag mr-1 mb-1" key={i}>{tag}</span>)}
        </div>
      </li>)}
    </ul>
  </>
}
