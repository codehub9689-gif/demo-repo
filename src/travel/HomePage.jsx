import { SiteFooter } from "./SiteChrome";

export default function HomePage({ onNavigate }) {
  return (
    <main className="page home">
      <div className="content">
        <HeroSection onNavigate={onNavigate} />
        <CuratedIdeasSection />
        <PlanningStepsSection />
        <JournalHighlightsSection />
      </div>
      <SiteFooter />
    </main>
  );
}

function HeroSection({ onNavigate }) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <h1>Design a Signature Escape Tailored to You</h1>
        <p>
          Discover boutique stays, hidden coastlines, and immersive city retreats crafted by
          explorers who know the destination beyond the postcards.
        </p>
        <div className="hero-actions">
          <button type="button" onClick={() => onNavigate("journeys")}>
            Plan My Escape
          </button>
          <button type="button" className="secondary" onClick={() => onNavigate("destinations")}>
            View Destinations
          </button>
        </div>
      </div>
      <div className="hero-board">
        <div className="board-card">
          <span className="card-title">Next Departures</span>
          <ul>
            <li>Kyoto Autumn Lights — 7 nights</li>
            <li>Patagonia Sky Lodges — 10 nights</li>
            <li>Amalfi Coast Sail Week — 6 nights</li>
          </ul>
        </div>
        <div className="board-note">
          “The itinerary was flawless, from the luxe riad in Marrakech to sunrise in the Atlas
          Mountains.” — Selena M.
        </div>
      </div>
    </section>
  );
}

function CuratedIdeasSection() {
  const ideas = [
    {
      title: "Sunset Yacht Week",
      copy: "Chart a private course through the Cyclades with a sommelier captain and island chefs.",
      link: "Learn about the Cyclades",
    },
    {
      title: "Atlas & Oasis",
      copy: "Blend Marrakech riads with mountain kasbahs and desert caravans under star-drenched skies.",
      link: "See the Morocco route",
    },
    {
      title: "Nordic Design Trail",
      copy: "Stay in minimalist cabins, dine in Michelin green-star restaurants, and chase the aurora.",
      link: "Explore our Nordic picks",
    },
  ];

  return (
    <section className="panel idea-panel">
      <div className="panel-header">
        <h2>Ideas to Spark Your Next Escape</h2>
        <p>
          Start with a muse, then co-design a journey that mirrors your pace, palate, and passions.
        </p>
      </div>
      <div className="idea-grid">
        {ideas.map((idea) => (
          <article key={idea.title}>
            <h3>{idea.title}</h3>
            <p>{idea.copy}</p>
            <a href="#">{idea.link}</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function PlanningStepsSection() {
  const steps = [
    {
      number: "01",
      title: "Share Your Vision",
      description: "Tell us your travel vibe, dream destinations, and how you love to spend your days.",
    },
    {
      number: "02",
      title: "Receive Your Blueprint",
      description: "We design a bespoke itinerary with curated stays, experiences, and insider hosts.",
    },
    {
      number: "03",
      title: "Personalize & Confirm",
      description: "Fine-tune together until it feels perfect, then let our concierge handle every detail.",
    },
  ];

  return (
    <section className="panel steps">
      <div className="panel-header">
        <h2>Planning With Aeris Routes Is Effortless</h2>
        <p>Expect clarity, creativity, and a team obsessed with elevating every moment of your trip.</p>
      </div>
      <ol className="step-list">
        {steps.map((step) => (
          <li key={step.number}>
            <span className="step-count">{step.number}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function JournalHighlightsSection() {
  const journals = [
    {
      location: "Seoul, South Korea",
      title: "Studio Sessions & Midnight Markets",
      text: "A design duo uncovers creative workshops, speakeasy tastings, and street food pilgrimages.",
    },
    {
      location: "Amalfi Coast, Italy",
      title: "Cliffside Vespas & Coastal Kitchens",
      text: "Sunrise boat rides, nonna-run cooking lessons, and slow afternoons overlooking Positano.",
    },
    {
      location: "Queenstown, New Zealand",
      title: "Highland Thrills & Lakeside Stillness",
      text: "Heli-hikes, fjord picnics, and private hot pool nights in the southern skies.",
    },
  ];

  return (
    <section className="panel journals">
      <div className="panel-header">
        <h2>Traveler Journals</h2>
        <p>Peek at recent adventures we tailored. Your story is the next chapter.</p>
      </div>
      <div className="journal-cards">
        {journals.map((journal) => (
          <article key={journal.title}>
            <span className="journal-location">{journal.location}</span>
            <h3>{journal.title}</h3>
            <p>{journal.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
