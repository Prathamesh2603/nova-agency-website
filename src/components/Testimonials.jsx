import { ArrowLeft, ArrowRight, Quote } from "lucide-react"
import { testimonials } from "../data/testimonials"
import { useState } from "react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonial = testimonials[activeIndex];

  const previousTestimonial = () => {
    setActiveIndex(current => current === 0 ? testimonials.length - 1 : current - 1);
  };

  const nextTestimonial = () => {
    setActiveIndex(current => current === testimonials.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-[1600px]">

        <div className="mb-10 flex items-center justify-between">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            client Stories
          </p>

          <Quote 
            size={28} 
            strokeWidth={1.2} className="text-neutral-400" 
          />
        </div>

        <div className="border-y border-neutral-300 py-10 sm:py-16 lg:py-20">
          <blockquote
            key={testimonial.id}
            className="max-w-6xl font-heading text-xl font-medium leading-[1.15] tracking-tight sm:text-3xl lg:text-5xl"
          >
            “{testimonial.quote}”
          </blockquote>

          <div className="mt-10 flex flex-col gap-8 sm:mt-14 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <p className="text-sm font-medium sm:text-lg lg:text-xl">
                {testimonial.name}
              </p>

              <p className="mt-1 text-sm text-neutral-500 sm:text-lg lg:text-xl">
                {testimonial.role} · {testimonial.company}
              </p>
            </div>

            <div className="flex items-center justify-between gap-8 sm:justify-end">
              <p className="text-xs tabular-nums text-neutral-500">
                {String(activeIndex + 1).padStart(2, "0")} /{" "} 
                {String(testimonials.length).padStart(2, "0")}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={previousTestimonial}
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 transition-colors hover:bg-neutral-900 hover:text-white"
                >
                  <ArrowLeft size={18} />
                </button>

                 <button
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 transition-colors hover:bg-neutral-900 hover:text-white"
                 >
                  <ArrowRight size={18} />
                 </button>
              </div>
            </div>

          </div>
        </div>

        <p className="mt-4 text-sm text-neutral-400">
          Sample testimonials for this fictional agency concept.
        </p>

      </div>
    </section>
  )
}

export default Testimonials