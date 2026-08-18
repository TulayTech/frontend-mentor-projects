import type { Project } from '../data/projects'

export function ProjectCard({ project }: { project: Project }) {
  const image = `/assets/images/thumbnail-project-${project.image}`
  return (
    <article className="project-card">
      <div className="project-card__media">
        <picture>
          <source media="(max-width: 40rem)" srcSet={`${image}-small.webp`} />
          <img src={`${image}-large.webp`} alt={`Preview of ${project.title}`} />
        </picture>
        <div className="project-card__actions">
          <a className="text-link" href="https://www.frontendmentor.io/" aria-label={`View ${project.title} project`}>View project</a>
          <a className="text-link" href="https://github.com/" aria-label={`View ${project.title} source code`}>View code</a>
        </div>
      </div>
      <h3>{project.title}</h3>
      <ul aria-label={`${project.title} technologies`}>
        {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
      </ul>
    </article>
  )
}
