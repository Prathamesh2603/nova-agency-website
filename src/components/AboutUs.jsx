import { ArrowUpRight } from "lucide-react"

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

      </div>
    </section>
  )
}

export default AboutUs