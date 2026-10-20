import { ArrowUpRight } from "lucide-react"

const CTA = () => {
  return (
    <section
      id="contact"
      className="bg-neutral-900 text-white px-5 py-24 sm:px-8 sm:py-32 lg:px-10"
    >
      <div className="mx-auto max-w-[1600px]">
        <p className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
          Have a good idea?
        </p>

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <h2 className="max-w-4xl font-heading text-5xl font-medium leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
            Let's make
            <br />
            something
            <br />
            <span className="text-lime-400" >meaningful.</span>
          </h2>

          <div className="max-w-md lg:justify-self-end">
            <p className="text-base leading-7 text-neutral-300 sm:text-lg">
              Have a project, a big idea, or just want to explore what's
              possible? We'd love to hear from you.
            </p>

            <a 
              href="mailto:hello@nova.agency"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-lime-400 px-6 py-4 font-medium text-neutral-950 transition-colors hover:bg-lime-300"
            >
              Tell us about your project
              <ArrowUpRight size={20} />
            </a>

            <p className="mt-4 text-sm text-neutral-400">
              hello@nova.agency
            </p>
          </div>
        </div>

        <div className="mt-20 border-t border-neutral-700 pt-6">
          <p className="text-sm text-neutral-400">
            Good things start with a conversation.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTA