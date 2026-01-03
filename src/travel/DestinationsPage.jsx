import { SiteFooter } from "./SiteChrome";

export default function DestinationsPage({ onNavigate }) {
  return (
    <main className="page destinations">
      <div className="content">
        <DestinationHero onNavigate={onNavigate} />
        <DestinationCollections />
        <StayHighlights />
      </div>
      <SiteFooter />
    </main>
  );
}

function DestinationHero({ onNavigate }) {
  return (
    <section className="panel hero-panel">
      <div className="panel-header">
        <h2>Explore Where Azure Horizons Meet Golden Sunsets</h2>
        <p>
          Choose from curated regions layered with boutique stays, private guides, and rare experiences
          that chart a course beyond the crowd.
        </p>
      </div>
      <div className="region-highlight">
        <article>
          <h3>Ionian Coastline</h3>
          <p>
            Sail through amphitheater bays, olive groves, and cliffside villages with sunset dining on
            secluded beaches.
          </p>
          <span className="region-tag">Greece · May – September</span>
        </article>
        <article>
          <h3>Atacama Constellations</h3>
          <p>
            Stargaze at high-altitude lodges with astronomers, soak in desert spas, and taste local
            vintages beneath crystal skies.
          </p>
          <span className="region-tag">Chile · Year-round</span>
        </article>
        <article>
          <h3>Northern Fjord Circle</h3>
          <p>
            Cruise electric catamarans, kayak mirrored waters, and dine fireside in glass igloos with
            aurora views.
          </p>
          <span className="region-tag">Norway · November – March</span>
        </article>
      </div>
      <div className="section-actions">
        <button type="button" onClick={() => onNavigate("journeys")}>
          Craft This Journey
        </button>
        <button type="button" className="secondary" onClick={() => onNavigate("contact")}>
          Talk to a Curator
        </button>
      </div>
    </section>
  );
}

function DestinationCollections() {
  const collections = [
    {
      title: "Hidden City Lofts",
      description: "Penthouse sanctuaries atop Lisbon, Kyoto, and Cape Town crafted for slow travel.",
      details: ["Private chefs on call", "Skyline spa rituals", "Local artist meet-ups"],
    },
    {
      title: "Wild Coast Retreats",
      description: "Eco-chic escapes along Sri Lanka, Zanzibar, and Costa Rica's untouched shores.",
      details: ["Marine biologist tours", "Tide-to-table dining", "Twilight beach fires"],
    },
    {
      title: "Summit Sanctuaries",
      description: "Design-led chalets in the Andes, Dolomites, and Banff for elevated relaxation.",
      details: ["Guided glacier walks", "Mountain aroma therapy", "Panoramic soaking tubs"],
    },
  ];

  return (
    <section className="panel collections-panel">
      <div className="panel-header">
        <h2>Collections Tailored to Your Travel Signature</h2>
        <p>
          Select a collection or merge elements from each. Every itinerary is bespoke to your vibe, pace,
          and curiosities.
        </p>
      </div>
      <div className="collection-grid">
        {collections.map((collection) => (
          <article key={collection.title} className="collection-card">
            <h3>{collection.title}</h3>
            <p>{collection.description}</p>
            <ul>
              {collection.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function StayHighlights() {
  const highlights = [
    {
      label: "Boutique Estates",
      text: "Rest in architect-designed suites sourced from our network of independent hosts.",
    },
    {
      label: "Local Companion Guides",
      text: "Meet storytellers, chefs, and captains who elevate every moment on the ground.",
    },
    {
      label: "Effortless Logistics",
      text: "From visas to private transfers, every detail is handled by our concierge team.",
    },
  ];

  return (
    <section className="panel highlight-panel">
      <div className="panel-header">
        <h2>What Sets an Aeris Route Apart</h2>
        <p>Consider these your non-negotiables—crafted into every custom itinerary we design.</p>
      </div>
      <div className="highlight-grid">
        {highlights.map((item) => (
          <article key={item.label}>
            <h3>{item.label}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

