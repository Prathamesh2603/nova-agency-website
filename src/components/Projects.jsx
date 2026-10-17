import { ArrowUpRight } from "lucide-react"
import { projects } from "../data/projects"

const Projects = () => {
  return (
    <section
      id="work"
      className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10"
    >
      <div className="mx-auto max-w[1600px]">

        {/* Heading */}
        <div className="mb-12 flex flex-col gap-5 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              Selected work · 2024-2026
            </p>

            <h2 className="font-heading text-4xl font-medium tracking-tight sm:text-6xl lg:7xl">
              Made to matter.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-neutral-600 sm:text-base">
            A selection of projects where strategy, creativity,
            and technology come together.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 md:gap-y-16">
          {
            projects.map(project => (
              <article
                key={project.id}
                className="group"
              >

                {/* Image */}
                <div className={`relative aspect-4/3 overflow-hidden ${project.theme}`}>
                  <img 
                    src={project.image} 
                    alt={`${project.name} project perview`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" 
                  />

                  <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-neutral-900 transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                {/* Details */}
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-2xl font-medium tracking-tight sm:3xl">
                      {project.name}
                    </h3>

                    <p className="mt-1 text-sm text-neutral-500">
                      {project.category}
                    </p>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-600">
                      {project.description}
                    </p>
                  </div>

                  <span className="pt-2 text-xs text-neutral-400">
                    {project.year}
                  </span>
                </div>

              </article>
            ))
          }
        </div>

        {/* Bottom link */}
        <div className="mt-16 border-t border-neutral-300 pt-6">
          <a 
            href="#contact"
            className="group inline-flex items-center gap-3 text-sm font-medium"
          >
            Have a project in mind?

            <ArrowUpRight 
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>

      </div>
    </section>
  )
}

export default Projects