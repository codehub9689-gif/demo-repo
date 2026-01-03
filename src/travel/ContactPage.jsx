import { SiteFooter } from "./SiteChrome";

export default function ContactPage({ onNavigate }) {
  return (
    <main className="page contact">
      <div className="content">
        <ContactIntro onNavigate={onNavigate} />
        <ContactGrid />
        <ContactFaq />
      </div>
      <SiteFooter />
    </main>
  );
}

function ContactIntro({ onNavigate }) {
  return (
    <section className="panel contact-hero">
      <div className="panel-header">
        <h2>Let&apos;s Curate the Escape You&apos;ve Been Dreaming About</h2>
        <p>
          Share your wish list, timelines, and travel style—our concierge team will craft a proposal
          within 48 hours.
        </p>
      </div>
      <div className="contact-actions">
        <button type="button" onClick={() => onNavigate("journeys")}>
          View Sample Journeys
        </button>
        <button type="button" className="secondary" onClick={() => onNavigate("destinations")}>
          Browse Destinations
        </button>
      </div>
    </section>
  );
}

function ContactGrid() {
  return (
    <section className="panel contact-grid-panel">
      <div className="panel-header">
        <h2>Reach the Aeris Routes Concierge Team</h2>
        <p>We respond personally—no bots, just seasoned travel designers ready to assist.</p>
      </div>
      <div className="contact-grid">
        <article className="contact-card">
          <h3>Plan a Consultation</h3>
          <p>Pick a 30-minute session to walk through your travel aspirations live with a curator.</p>
          <a href="mailto:consult@aerisroutes.com">consult@aerisroutes.com</a>
          <span>Calendar requests answered within 12 hours.</span>
        </article>
        <article className="contact-card">
          <h3>Guest Services Hotline</h3>
          <p>Already traveling with us? Reach your 24/7 concierge for on-the-go support.</p>
          <a href="tel:+15552847284">+1 (555) 284-7284</a>
          <span>Available worldwide, every day of the year.</span>
        </article>
        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you! A curator will reach out shortly.");
  };

  return (
    <form className="contact-card contact-form" onSubmit={handleSubmit}>
      <h3>Start Your Request</h3>
      <label>
        Name
        <input type="text" name="name" placeholder="Your full name" required />
      </label>
      <label>
        Email
        <input type="email" name="email" placeholder="you@example.com" required />
      </label>
      <label>
        Dream Destination
        <input type="text" name="destination" placeholder="Where to next?" />
      </label>
      <label>
        Travel Window
        <input type="text" name="dates" placeholder="Preferred dates or season" />
      </label>
      <label>
        Tell us more
        <textarea name="details" rows="4" placeholder="Share your must-haves and inspirations." />
      </label>
      <button type="submit">Send Request</button>
    </form>
  );
}

function ContactFaq() {
  const faqs = [
    {
      question: "How far in advance should we reach out?",
      answer: "We recommend 3–6 months ahead, though we often delight with last-minute miracles.",
    },
    {
      question: "Do you arrange group journeys?",
      answer: "Yes—intimate weddings, corporate retreats, and celebratory escapes up to 40 guests.",
    },
    {
      question: "What budgets do you design for?",
      answer:
        "Custom escapes begin at $450 per travel day, covering planning, experiences, and concierge support.",
    },
  ];

  return (
    <section className="panel contact-faq">
      <div className="panel-header">
        <h2>Questions We Hear Often</h2>
        <p>Slide into our inbox with anything else—we love talking travel.</p>
      </div>
      <div className="faq-list">
        {faqs.map((faq) => (
          <article key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

