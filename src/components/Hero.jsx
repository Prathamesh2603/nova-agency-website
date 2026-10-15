import { ArrowDown, ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-16 pt-32 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">

        {/* Eyebrow */}
        <div className="mb-8 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-lime-500" />
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 md:text-sm">
            Independent Digital Agency · Est. 2026
          </p>
        </div>

        {/* Main heading */}
        <h1 className="font-heading text-[clamp(3.5rem,10vw,9rem)] font-medium leading-[0.88] tracking-[-0.07em]">
          We build
          <br />
          digital experiences
          <br />
          <span className="text-neutral-400">that move you.</span>
        </h1>

        {/* Bottom content */}
        <div className="mt-12 flex flex-col gap-8 border-t border-neutral-300 pt-6 md:mt-16 md:flex-row md:items-end md:justify-between">

          <p className="max-w-md text-base leading-7 text-neutral-600 md:text-lg">
            We partner with ambitious brands to create thoughtful digital
            experiences through strategy, design, and technology.
          </p>

          <a
            href="#contact"
            className="group flex w-fit items-center gap-4 rounded-full bg-neutral-900 px-6 py-4 text-sm font-medium text-white transition-colors duration-300 hover:bg-lime-500 hover:text-neutral-900"
          >
            Let's talk about your project
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-14 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-neutral-500 md:mt-20">
          <ArrowDown size={15} />
          Scroll to explore
        </div>
      </div>
    </section>
  );
};

export default Hero;