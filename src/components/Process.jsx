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

      </div>
    </section>
  )
}

export default Process