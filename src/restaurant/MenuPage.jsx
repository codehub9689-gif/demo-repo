import { SiteFooter } from "./SiteChrome";

export default function MenuPage({ onNavigate }) {
  return (
    <main className="page menu">
      <MenuHero onNavigate={onNavigate} />
      <TastingMenu />
      <WinePairings />
      <ChefNotes />
      <SiteFooter />
    </main>
  );
}

function MenuHero({ onNavigate }) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <h1>The Eight-Course Degustation</h1>
        <p>
          A narrative of the season, beginning with ocean brine and ending with fireside sweetness. Every course
          may be paired with our sommelier&apos;s selection or curated à la carte.
        </p>
        <div className="cta-row">
          <button type="button" className="primary" onClick={() => onNavigate("contact")}>
            Book Chef&apos;s Table
          </button>
          <button type="button" className="secondary" onClick={() => window.open('#wine', '_self')}>
            Wine Pairings
          </button>
        </div>
      </div>
      <div className="hero-visual">
        <img
          src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80"
          alt="Fine dining dish with garnish"
        />
        <div className="hero-badge">
          <h3>Seasonal Focus</h3>
          <p>June spotlight: morel mushrooms, spot prawns, white asparagus.</p>
        </div>
      </div>
    </section>
  );
}

function TastingMenu() {
  const courses = [
    {
      name: "Amuse Trio",
      description: "Smoked oyster, chilled pea velouté, saffron potato cloud",
    },
    {
      name: "Garden Prelude",
      description: "White asparagus ribbons with champagne espuma and cured yolk",
    },
    {
      name: "Ocean Course",
      description: "Spot prawn tartare with yuzu pearls and crispy nori tuile",
    },
    {
      name: "Intermezzo",
      description: "Bergamot granita and basil mist",
    },
    {
      name: "Land Course",
      description: "Rosemary lamb saddle, charred leek, black garlic demi-glace",
    },
    {
      name: "Cheese Cart",
      description: "Affineur-selected cheeses with fig mostarda and brioche",
    },
    {
      name: "Dessert",
      description: "Vanilla bean soufflé with caramelized apricot compote",
    },
    {
      name: "Mignardises",
      description: "Chocolate bouchées, orange blossom macarons, pistachio financier",
    },
  ];

  return (
    <section className="panel">
      <div className="panel-header">
        <h2>Course by Course</h2>
        <p>
          The tasting menu is offered at $165 per guest. Vegetarian degustation available with 24 hours notice.
        </p>
      </div>
      <div className="menu-grid">
        {courses.map((course) => (
          <article key={course.name} className="menu-card">
            <h3>{course.name}</h3>
            <p>{course.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function WinePairings() {
  const pairings = [
    {
      title: "Classic Pairing",
      description: "A journey through Burgundy, Loire Valley, and Northern Rhône icons.",
      highlights: ["2019 Domaine Huet Vouvray Sec", "2018 Domaine Roulot Bourgogne Blanc", "2016 Guigal Côte-Rôtie"],
    },
    {
      title: "Reserve Pairing",
      description: "Cellar selections featuring rare vintages and limited allocations.",
      highlights: ["2013 Krug Vintage Champagne", "2015 Domaine Leflaive Puligny-Montrachet", "2008 Château d'Yquem"],
    },
    {
      title: "Zero-Proof Pairing",
      description: "House-fermented infusions, teas, and tonics to complement every course.",
      highlights: ["Smoked lapsang spritz", "Cherry blossom tepache", "Juniper pear tonic"],
    },
  ];

  return (
    <section id="wine" className="panel">
      <div className="panel-header">
        <h2>Wine &amp; Cellar Pairings</h2>
        <p>
          Guided by our head sommelier, each pairing traces provenance, elevation, and story to mirror the menu&apos;s arc.
        </p>
      </div>
      <div className="menu-grid">
        {pairings.map((pairing) => (
          <article key={pairing.title} className="menu-card">
            <h3>{pairing.title}</h3>
            <p>{pairing.description}</p>
            <ul>
              {pairing.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function ChefNotes() {
  const notes = [
    {
      title: "Local Farms",
      text: "We partner with Rainshadow Organics, Blue Heron Farms, and Wilder Mushroom Co. for weekly harvests.",
    },
    {
      title: "Dietary Requests",
      text: "Gluten-free, vegetarian, and pescatarian degustations are available with prior notice.",
    },
    {
      title: "Chef Interaction",
      text: "Reserve counter seats for a direct view into the kitchen and dialogue with Chef Elise.",
    },
  ];

  return (
    <section className="panel">
      <div className="panel-header">
        <h2>Chef&apos;s Notes</h2>
        <p>Consider these details when planning your visit to ensure the experience is perfectly tailored.</p>
      </div>
      <div className="highlight-strip">
        {notes.map((note) => (
          <article key={note.title} className="highlight-item">
            <span>Details</span>
            <h3>{note.title}</h3>
            <p>{note.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

