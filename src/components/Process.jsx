import { ArrowDownRight } from "lucide-react"
import { processSteps } from "../data/processSteps"

const Process = () => {
  return (
    <section
      id="process"
      className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10"
    >
      <div className="mx-auto max-w-[1600px]">

        {/* Heading */}
        <div className="mb-12 flex flex-col gap-5 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              From idea to impact
            </p>

            <h2 className="font-heading text-4xl font-medium tracking-tight sm:text-6xl lg:text-7xl">
              How we make it happen.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-neutral-600 sm:text-base">
            A clear, collaborative process that turns ambitious
            ideas into thoughtful digital experiences.
          </p>
        </div>

        {/* Steps */}
        <div className="border-t border-neutral-300">
          {processSteps.map((step) => (
            <article
              key={step.number}
              className="group grid grid-cols-[44px_1fr] gap-x-4 gap-y-4 border-b border-neutral-300 py-7 sm:grid-cols-[64px_1fr_1fr_40px] sm:items-center sm:gap-6 sm:py-9"
            >
              <span className="pt-2 text-xs text-neutral-400 sm:pt-0">
                {step.number}
              </span>

              <h3 className="font-heading text-2xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl lg:text-4xl">
                {step.title}
              </h3>

              <div className="col-start-2 sm:col-start-auto">
                <p className="max-w-md text-sm leading-6 text-neutral-600">
                  {step.description}
                </p>

                <p className="mt-3 text-xs uppercase tracking-wider text-neutral-400">
                  {step.deliverable}
                </p>
              </div>

              <div className="col-start-2 flex items-center gap-2 text-sm text-neutral-400 sm:col-start-auto sm:justify-end">
                <span className="sm:hidden">Step {step.number}</span>

                <ArrowDownRight
                  size={21}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-neutral-900"
                />
              </div>
            </article>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs uppercase tracking-widest text-neutral-500">
            Clear thinking. Considered design. Quality execution.
          </p>

          <a 
            href="#contact"
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium"
          >
            Start a conversation

            <ArrowDownRight 
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
            />
          </a>
        </div>

      </div>
    </section>
  )
}

export default Process