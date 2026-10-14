import { Link } from 'react-router-dom'

export default function ProjectCard({ project, priority = false }) {
  return (
    <Link to={`/projects/${project.slug}`} className="group flex flex-col gap-8">
      <div className="relative overflow-hidden rounded-2xl bg-pill md:rounded-[20px]">
        <img
          src={project.cover}
          alt={project.title}
          width="1366"
          height="633"
          draggable="false"
          loading={priority ? 'eager' : 'lazy'}
          className="w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-ink transition-opacity duration-300 group-hover:opacity-70 md:text-[26px]">
          {project.title}
        </h3>
        <p className="text-base text-black/50">{project.category}</p>
      </div>
    </Link>
  )
}
