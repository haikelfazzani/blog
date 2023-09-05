import ExternalLink from "../components/ExternalLink.tsx";
import { Project } from "../types/all.d.ts";
// import ImagesView from "./ImagesView.tsx";

export default function CardProject({ project, section }: { project: Project, section: string }) {
  return <>

    {/* <ImagesView images={project.images} /> */}

    <div class="w-100 d-flex justify-between mb-1">
      <a href={`/portfolio/${section}/${project.slug.trim()}`}>
        <h2 class="m-0 text-3" title={project.title}>{project.title}</h2>
      </a>

      <div class="ml-1 d-flex flex-wrap out-links">
        <ExternalLink href={project.website} title="Website"><i class="fas fa-globe"></i></ExternalLink>
        <ExternalLink href={project.edge} title="Microsoft Edge"><i class="fab fa-edge"></i></ExternalLink>
        <ExternalLink href={project.firefox} title="Firefox"><i class="fab fa-firefox"></i></ExternalLink>
        <ExternalLink href={project.repository} title="Repository"><i class="fab fa-github"></i></ExternalLink>
      </div>
    </div>

    <p>{project.description}</p>

    <div class="d-flex flex-wrap">
      {project.tags.split(',').map((tag: string, i: number) => <span class="tag mr-1 mb-1" key={i} title={tag}>{tag}</span>)}
    </div>
  </>
}
