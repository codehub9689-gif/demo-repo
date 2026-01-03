import { useEffect, useState } from "react";
import { SiteFooter } from "./SiteChrome";

const testimonials = [
  {
    name: "Jordan, Product Designer",
    quote:
      "PulseFit nails the balance between accountability and autonomy. The coaches program with intention, so even on packed weeks I know exactly how to show up.",
    program: "Hybrid Strength + Run",
  },
  {
    name: "Priya, ER Nurse",
    quote:
      "The recovery labs and mobility coaching keep me on shift with energy to spare. Classes are small enough that the coaches always adjust for my schedule.",
    program: "Mobility Reset + Private Coaching",
  },
  {
    name: "Malik, Photographer",
    quote:
      "After years of nagging knee pain, I finally feel powerful again. The team rebuilt my squat pattern, dialed in my nutrition, and celebrated every win with me.",
    program: "Strength Lab Foundations",
  },
  {
    name: "Harper, Trail Runner",
    quote:
      "Structured run plans, heart-rate insights, and coaches who actually check in. I PR’d my 10K by two minutes in eight weeks.",
    program: "Run Club Intervals",
  },
];

export default function TestimonialsPage({ onNavigate }) {
  return (
    <main className="page testimonials">
      <div className="content">
        <TestimonialsHero onNavigate={onNavigate} />
        <TestimonialsCarousel />
        <CommunityHighlights />
      </div>
      <SiteFooter />
    </main>
  );
}

function TestimonialsHero({ onNavigate }) {
  return (
    <section className="panel hero-panel">
      <div className="panel-header">
        <h2>Proof from the PulseFit Community</h2>
        <p>
          Our members span founders, nurses, parents, and former pros. They stay because the results are
          real and the energy is contagious.
        </p>
      </div>
      <div className="section-actions">
        <button type="button" onClick={() => onNavigate("membership")}>
          Choose a Membership
        </button>
        <button type="button" className="secondary" onClick={() => onNavigate("classes")}>
          Browse the Schedule
        </button>
      </div>
    </section>
  );
}

function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => window.clearInterval(id);
  }, []);

  const showPrev = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="panel testimonials-panel">
      <div className="panel-header">
        <h2>Testimonials Carousel</h2>
        <p>Swipe through recent wins from members training inside the studio and online.</p>
      </div>
      <div className="testimonial-carousel">
        <button type="button" onClick={showPrev} aria-label="Previous testimonial">
          ‹
        </button>
        <article className="testimonial-card">
          <p className="testimonial-quote">“{activeTestimonial.quote}”</p>
          <span className="testimonial-name">{activeTestimonial.name}</span>
          <span className="testimonial-program">{activeTestimonial.program}</span>
        </article>
        <button type="button" onClick={showNext} aria-label="Next testimonial">
          ›
        </button>
      </div>
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <button
            type="button"
            key={index}
            className={index === activeIndex ? "active" : undefined}
            onClick={() => setActiveIndex(index)}
            aria-label={`View testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function CommunityHighlights() {
  const highlights = [
    {
      title: "90-Day Strength Cycles",
      description: "Track PRs every quarter with structured deloads and individual check-ins.",
    },
    {
      title: "Member Retreats",
      description: "Seasonal adventures that blend training, recovery, and unbeatable views.",
    },
    {
      title: "Accountability Pods",
      description: "Small group threads that keep you consistent between classes.",
    },
  ];

  return (
    <section className="panel highlights-panel">
      <div className="panel-header">
        <h2>Beyond the Testimonial</h2>
        <p>The PulseFit experience extends far past the studio—here’s how we keep momentum high.</p>
      </div>
      <div className="highlight-grid">
        {highlights.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

