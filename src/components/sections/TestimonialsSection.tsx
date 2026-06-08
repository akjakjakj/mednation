"use client";

import { useInView } from "react-intersection-observer";
import SectionHeader from "@/components/ui/SectionHeader";
import { TESTIMONIALS } from "@/lib/constants";

interface TestimonialItem {
  name: string;
  role: string;
  content: string;
  rating: number;
}

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#8CCB7E">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: TestimonialItem }) {
  return (
    <article
      className="group relative flex-shrink-0 w-[320px] sm:w-[380px] lg:w-[420px] mx-3 sm:mx-4"
      aria-label={`Testimonial from ${testimonial.name}`}
    >
      <div className="glass h-full rounded-2xl p-6 sm:p-8 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/10 group-hover:-translate-y-1">
        <svg
          className="mb-4 text-primary/15"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11H10v10H0z" />
        </svg>

        <StarRating count={testimonial.rating} />

        <p className="body-text text-sm sm:text-base italic mt-4 mb-6 line-clamp-4 text-dark-teal/75">
          &ldquo;{testimonial.content}&rdquo;
        </p>

        <div className="flex items-center gap-3 pt-4 border-t border-primary/10">
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full gradient-bg text-white font-heading font-semibold text-sm">
            {testimonial.name.charAt(0)}
          </div>
          <div className="min-w-0">
            <h4 className="card-title text-base truncate">{testimonial.name}</h4>
            <p className="body-text text-xs mt-0.5 truncate text-dark-teal/50">
              {testimonial.role}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-3xl" />

      <div className="section-padding relative pb-16 lg:pb-20" ref={ref}>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            inView={inView}
            label="Testimonials"
            title={
              <>
                What Our <span className="gradient-text">Partners Say</span>
              </>
            }
            className="mb-12 lg:mb-16"
          />

          {/* Marquee with soft alpha edge mask */}
          <div className="relative testimonial-marquee-mask">
            <div className="overflow-hidden py-4">
              <div className="marquee-track flex w-max">
                {marqueeItems.map((testimonial, index) => (
                  <TestimonialCard
                    key={`${testimonial.name}-${index}`}
                    testimonial={testimonial}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
