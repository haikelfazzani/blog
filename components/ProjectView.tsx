import Disqus from '../islands/Disqus.tsx';
import ImagesView from '../islands/ImagesView.tsx';
import type { Project } from '../types/all.d.ts';
import ExternalLink from './ExternalLink.tsx';

export default function ProjectView({ project, section }: { project: Project, section: string }) {

  if (!section || !project) return <></>;

  return <main class="grid-2-1 p-0">
    <div class="overflow">

      <section class="p-2">
        <div class="d-flex justify-between align-center flex-wrap mb-1">
          <h1 class="m-0">{project?.title}</h1>
          <div class="green">
            <ExternalLink clx="text-3" href={project.website}><i class="fas fa-globe"></i></ExternalLink>
            <ExternalLink clx="text-3 mr-2 ml-2" href={project.edge}><i class="fab fa-edge"></i></ExternalLink>
            <ExternalLink clx="text-3" href={project.firefox}><i class="fab fa-firefox"></i></ExternalLink>
            <ExternalLink clx="text-3 ml-2" href={project.repository}><i class="fab fa-github"></i></ExternalLink>
          </div>
        </div>

        <p class="white">{project?.description}</p>

        <ul class="w-100 d-flex flex-wrap border-bottom pb-2">
          {project.tags?.split(',').map((t: string, i: number) => <li class="tag mb-1 mr-1" key={i}>{t}</li>)}
        </ul>
      </section>

      {project.dev_tools && project.dev_tools.length > 0 && <section class="p-2">
        <h2 class="text-4 mt-0"><i class="fa fa-cogs mr-1"></i>Built with</h2>
        <ul class="light ml-2">
          {project.dev_tools.map((t: string, i: number) => <li key={i}><i class="fa fa-circle mr-1"></i>{t}</li>)}
        </ul>
      </section>}

      {project && project.images && <section class="p-2">
        <h2 class="mt-0 text-4"><i class="fa fa-image mr-1"></i>Captures</h2>
        <ImagesView images={project?.images} alt={project?.title} />
      </section>}
    </div>

    <div class="border-left p-2 overflow">
      <p>I hope this {section.endsWith('s') ? section.slice(0, -1) : section} was helpful to you.</p>
      <p><i class="fa fa-comments mr-1"></i>Leave a reaction if you liked!</p>
      {project && <Disqus title={project.title} identifier={project.title} />}
    </div>

  </main>
}
