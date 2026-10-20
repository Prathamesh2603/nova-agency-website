import { ArrowUp, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 px-5 pb-8 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1600px]">
        
        <div className="grid gap-10 border-t border-neutral-700 py-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a 
              href="#home"
              className="font-heading text-3xl font-bold tracking-tight"
            >
              NOVA<span className="text-lime-400">.</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-400">
              Independent digital agency building thoughtful brands,
              digital experiences, and products for what's next.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
              Explore
            </h3>

            <ul className="space-y-3 text-sm text-neutral-300">
              <li>
                <a href="#work" className="transition-colors hover:text-lime-400">
                  Work
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-lime-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors hover:text-lime-400">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-lime-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
              Get in touch
            </h3>

            <a 
              href="mailto:hello@nova.agency"
              className="inline-flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-lime-400"
            >
              hello@nova.agency
              <ArrowUpRight size={15} />
            </a>

            <a 
              href="#contact"
              className="mt-4 flex w-fit items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-lime-400"
            >
              Start a project
              <ArrowUpRight size={15} />
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-neutral-700 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} NOVA Studio. All rights reserved.</p>

          <a 
            href="#home"
            className="inline-flex w-fit items-center gap-2 transition-colors hover:text-white"
          >
            Back to top
            <ArrowUp size={14} />
          </a>

          <p>Designed with intention.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer