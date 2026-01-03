import { SiteFooter } from "./SiteChrome";

export default function JourneysPage({ onNavigate }) {
  return (
    <main className="page journeys">
      <div className="content">
        <JourneyHero onNavigate={onNavigate} />
        <JourneyShowcase />
        <JourneyTimeline />
      </div>
      <SiteFooter />
    </main>
  );
}

function JourneyHero({ onNavigate }) {
  return (
    <section className="panel journeys-hero">
      <div className="panel-header">
        <h2>Your Signature Journey, Curated in Three Conversations</h2>
        <p>
          Share your travel rhythm, we map the rest—pairing unforgettable lodging, transport, and local
          hosts into one polished itinerary.
        </p>
      </div>
      <div className="hero-board journey-board">
        <div className="board-card">
          <span className="card-title">This Month&apos;s Spotlight</span>
          <ul>
            <li>Bali Slow-Living Residency — 14 nights</li>
            <li>Icelandic Aurora Loop — 8 nights</li>
            <li>Jordan Desert Echoes — 9 nights</li>
          </ul>
        </div>
        <div className="board-note">
          “Every transfer, tasting, and twilight hike synced perfectly with what we love: design,
          cuisine, and surprise.” — Malik & Aria
        </div>
      </div>
      <div className="section-actions">
        <button type="button" onClick={() => onNavigate("contact")}>
          Start My Journey
        </button>
        <button type="button" className="secondary" onClick={() => onNavigate("destinations")}>
          Compare Destinations
        </button>
      </div>
    </section>
  );
}

function JourneyShowcase() {
  const journeys = [
    {
      name: "Riviera Reverie",
      duration: "7 nights · France & Monaco",
      description:
        "Sunrise croissants in Nice, electric yacht afternoons in Èze, and candlelit dinners tucked in Monte Carlo gardens.",
      highlights: ["Vintage convertible drive", "Perfumer atelier session", "Private sommelier tour"],
    },
    {
      name: "Wonders of Wabi",
      duration: "10 nights · Japan",
      description:
        "From zen gardens in Kanazawa to modernist ryokan stays in Hakone—crafted for seekers of meaningful design.",
      highlights: ["Tea ceremony immersion", "Architect-led city walk", "Mountain onsen retreat"],
    },
    {
      name: "Sahara Soundscape",
      duration: "9 nights · Morocco",
      description:
        "Marrakech riads, Atlas trekking, and desert camp nights with live gnawa performances under infinite skies.",
      highlights: ["Chef-led souk tour", "Sunrise camel caravan", "Spa rituals in Ourika Valley"],
    },
  ];

  return (
    <section className="panel journeys-showcase">
      <div className="panel-header">
        <h2>Journeys Ready for Your Signature</h2>
        <p>Start with a blueprint below, then layer in moments that feel uniquely you.</p>
      </div>
      <div className="journey-grid">
        {journeys.map((journey) => (
          <article key={journey.name} className="journey-card">
            <div>
              <h3>{journey.name}</h3>
              <span className="journey-duration">{journey.duration}</span>
              <p>{journey.description}</p>
            </div>
            <ul>
              {journey.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function JourneyTimeline() {
  const steps = [
    {
      number: "01",
      title: "Dream Session",
      text: "We listen to your travel style, must-haves, and pace preferences over a relaxed consultation.",
    },
    {
      number: "02",
      title: "Concept Delivery",
      text: "Receive a polished interactive itinerary with lodging options, experiences, and custom moments.",
    },
    {
      number: "03",
      title: "Finely Tuned",
      text: "Adjust together until every detail resonates. Confirm with one click, then start your countdown.",
    },
    {
      number: "04",
      title: "On-the-Go Care",
      text: "Your dedicated journey concierge is available 24/7 from wheels up to welcome home.",
    },
  ];

  return (
    <section className="panel steps timeline-panel">
      <div className="panel-header">
        <h2>Your Journey Blueprint</h2>
        <p>Four phases that keep planning effortless while every moment stays personal.</p>
      </div>
      <ol className="step-list timeline-list">
        {steps.map((step) => (
          <li key={step.number}>
            <span className="step-count">{step.number}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

