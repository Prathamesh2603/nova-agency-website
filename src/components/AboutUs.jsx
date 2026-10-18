import { ArrowUpRight } from "lucide-react"
import { aboutUs } from "../data/aboutUs"

const AboutUs = () => {
  return (
    <section
      id="about"
      className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10"
    >
      <div className="mx-auto max-w-[1600px]">

        {/* Intro */}
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">

          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              A little about us
            </p>

            <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Small details.
              <br />
              <span className="text-neutral-400">
                Big impact.
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start justify-end">
            <p className="max-w-lg text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
              NOVA is an independent digital agency focused on
              creating purposeful brands and digital experiences.
              We bring strategy, design, and development together
              to help ambitious businesses move forward.
            </p>

            <a 
              href="#contact"
              className="group mt-7 inline-flex items-center gap-3 border-b border-neutral-900 pb-2 text-sm font-medium"
            >
              Let's build something meaningful

              <ArrowUpRight 
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

        </div>

        {/* Visual divider */}
        <div className="my-16 overflow-hidden border-y border-neutral-300 py-7 sm:my-24 sm:py-10">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <span className="font-heading text-2xl font-medium tracking-tight sm:text-4xl">
              Strategy.
            </span>

            <span className="text-neutral-400">✳</span>

            <span className="font-heading text-2xl font-medium tracking-tight sm:text-4xl">
              Technology.
            </span>
          </div>
        </div>

        {/* Values */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              What guides us
            </p>

            <h3 className="font-heading font-medium text-3xl tracking-tight sm:text-4xl">
              The way we work
            </h3>
          </div>

          <p className="max-w-sm text-sm leading-6 text-neutral-500">
            Good work comes from clear thinking, open collaboration,
            and an obsession with the details.
          </p>
        </div>

        <div className="grid grid-cols-1 border-t border-neutral-300 sm:grid-cols-2">
          {
            aboutUs.map(value => (
              <article
                key={value.number}
                className="border-b border-neutral-300 py-7 sm:px-6 sm:py-9 first:sm:pl-0 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
              >
                <span className="text-xs text-neutral-400">
                  {value.number}
                </span>

                <h4 className="mt-5 font-heading text-xl font-medium tracking-tight sm:text-2xl">
                  {value.title}
                </h4>

                <p className="mt-3 max-w-md text-sm leading-6 text-neutral-500">
                  {value.description}
                </p>
              </article>
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default AboutUs