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

      </div>
    </section>
  )
}

export default Services;