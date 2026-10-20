import { ArrowDown, ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section 
    id="home"
    className="flex min-h-screen flex-col justify-center px-5 pb-12 pt-28 sm:px-8 sm:pt-32 lg:px-10">
      <div className="mx-auto w-full max-w-[1600px]">

        {/* Eyebrow */}
        <div className="mb-7 flex items-center gap-3 sm:mb-9">
          <span className="h-2 w-2 shrink-0 rounded-full bg-lime-500" />

          <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-500 sm:text-xs sm:tracking-[0.2em]">
            Independent Digital Agency · Est. 2026
          </p>
        </div>

        {/* Heading */}
        <h1 className="max-w-full font-heading text-[clamp(3rem,7.5vw,8.5rem)] font-medium leading-[0.94] tracking-[-0.065em]">
          We build
          <br />
          digital experiences
          <br />
          <span className="text-neutral-400">
            that move you.
          </span>
        </h1>

        {/* Supporting content */}
        <div className="mt-10 flex flex-col gap-6 border-t border-neutral-300 pt-6 sm:mt-14 md:flex-row md:items-end md:justify-between lg:mt-16">

          <p className="max-w-md text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
            We partner with ambitious brands to create
            thoughtful digital experiences through strategy,
            design, and technology.
          </p>

          <a
            href="#contact"
            className="group inline-flex w-fit shrink-0 items-center gap-4 rounded-full bg-neutral-900 px-5 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-lime-500 hover:text-neutral-900 sm:px-6"
          >
            Let's talk about your project

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-10 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500 sm:mt-14 sm:text-xs">
          <ArrowDown size={15} />
          Scroll to explore
        </div>

      </div>
    </section>
  );
};

export default Hero;
