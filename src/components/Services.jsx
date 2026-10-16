import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { services } from "../data/services";

const Services = () => {
  return (
    <section
      id="services"
      className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10"
    >
      <div className="mx-auto max-w-[1600px]">

        {/* Section heading */}
        <div className="mb-12 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              What we do
            </p>

            <h2 className="font-heading text-4xl font-medium tracking-tight sm:text-6xl lg:text-7xl">
              Ideas into impact.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-neutral-600 sm:text-base">
            From the first spark of an idea to the final line of code,
            we create digital work with purpose.
          </p>
        </div>

        {/* Service list */}
        <div className="border-t border-neutral-300">
          {services.map((service) => (
            <article
              key={service.number}
              className="group border-b border-neutral-300 py-7 transition-colors duration-300 hover:bg-neutral-100 sm:py-9"
            >
              <div className="grid grid-cols-[36px_1fr_32px] items-start gap-3 sm:grid-cols-[60px_1fr_1fr_40px] sm:items-center sm:gap-5">

                <span className="pt-2 text-xs text-neutral-400 sm:pt-0">
                  {service.number}
                </span>

                <h3 className="font-heading text-2xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl lg:text-4xl">
                  {service.title}
                </h3>

                <p className="col-start-2 mt-2 max-w-md text-sm leading-6 text-neutral-500 sm:col-start-auto sm:mt-0">
                  {service.description}
                </p>

                <div className="row-span-2 flex justify-end pt-1 sm:row-span-1 sm:pt-0">
                  <ArrowUpRight
                    size={24}
                    strokeWidth={1.5}
                    className="text-neutral-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-neutral-900"
                  />
                </div>
              </div>

              {/* Service tags */}
              <div className="ml-12 mt-4 flex flex-wrap gap-2 sm:ml-20 sm:mt-5">
                {
                  service.tags.map(tag => (
                    <span 
                      key={tag}
                      className="rounded-full border border-neutral-300 px-3 py-1 text-[10px] uppercase tracking-wider text-neutral-500 sm:text-xs"
                    >
                      {tag}
                    </span>
                  ))
                }
              </div>
              </article>
            ))
          }
        </div>

        {/* Button note */}
        <div className="mt-8 flex items-center justify-between">
          <p className="text-xs uppercase tracking-widest text-neutral-500">
            Strategy · Design · Development
          </p>

          <a 
            href="#contact"
            className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-60"
          >
            Discuss your project
            <ArrowDownRight size={17} />
          </a>
        </div>

      </div>
    </section>
  )
}

export default Services;