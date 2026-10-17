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

      </div>
    </section>
  )
}

export default Projects