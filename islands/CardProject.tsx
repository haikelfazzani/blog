import ExternalLink from "../components/ExternalLink.tsx";
import { Project } from "../types/all.d.ts";
// import ImagesView from "./ImagesView.tsx";

export default function CardProject({ project, section }: { project: Project, section: string }) {
  return <>

    {/* <ImagesView images={project.images} /> */}

    <div class="w-100 d-flex justify-between mb-1">
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
  </>
}
