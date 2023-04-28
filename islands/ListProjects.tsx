import ExternalLink from '../components/ExternalLink.tsx'
import { Project } from '../types/all.d.ts'

export default function ListProjects({ section, projects }: { section: string | undefined, projects: Project[] | undefined }) {

  if (!section || !projects || projects.length<1) return <p class="alert bg-dark p-2 mt-3 br7">Nothing found!<i class="fa fa-smile ml-1"></i></p>

  return <ul class="w-100 grid-2 mt-3">
    {projects?.map((project: Project, i: number) => <li class="mb-2 p-2 card" key={i}>
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
    </li>)}
  </ul>
}
