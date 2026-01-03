import { SiteFooter } from "./SiteChrome";

export default function HomePage({ onNavigate }) {
  return (
    <main className="page home">
      <HeroSection onNavigate={onNavigate} />
      <SignatureDishes />
      <DiningHighlights />
      <GalleryShowcase />
      <SiteFooter />
    </main>
  );
}

function HeroSection({ onNavigate }) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <h1>Savor Evenings of Culinary Theatre</h1>
        <p>
          Maison Aurelia crafts tasting menus inspired by seasonal Pacific Northwest produce and time-honored
          French technique. Join us for a night lit by candlelight and finished with tableside dessert artistry.
        </p>
        <div className="cta-row">
          <button type="button" className="primary" onClick={() => onNavigate("contact")}>
            Reserve a Table
          </button>
          <button type="button" className="secondary" onClick={() => onNavigate("menu")}>
            View Menu
          </button>
        </div>
      </div>
      <div className="hero-visual">
        <img
          src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=900&q=80"
          alt="Chef plating an elegant dish"
        />
        <div className="hero-badge">
          <h3>Chef&apos;s Table Experience</h3>
          <p>Eight courses, wine pairings, and stories from Chef Elise Laurent.</p>
        </div>
      </div>
    </section>
  );
}

function SignatureDishes() {
  const sections = [
    {
      title: "Prelude",
      items: ["Smoked oyster sabayon", "Fennel pollen gougère", "Hazelnut foie gras torchon"],
    },
    {
      title: "Terroir",
      items: ["Cedar-planked king salmon", "Black truffle velouté", "Caramelized leek tart"],
    },
    {
      title: "Finale",
      items: ["Grand marnier soufflé", "Chocolate cassis sphere", "Armagnac crème caramel"],
    },
  ];

  return (
    <section className="panel">
      <div className="panel-header">
        <h2>Signature Moments on the Tasting Menu</h2>
        <p>
          Our menu shifts with the seasons, celebrating local farmers, foragers, and vintners. Each course is
          composed with texture, temperature, and theatre in mind.
        </p>
      </div>
      <div className="menu-grid">
        {sections.map((section) => (
          <article key={section.title} className="menu-card">
            <h3>{section.title}</h3>
            <ul>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function DiningHighlights() {
  const highlights = [
    {
      category: "Cellar",
      title: "Sommelier-Guided Pairings",
      text: "A 450-label wine list curated around Old World vintages and Oregon discoveries.",
    },
    {
      category: "Cuisine",
      title: "Chef Elise Laurent",
      text: "Michelin-trained chef blending French heritage with Pacific Northwest terroir.",
    },
    {
      category: "Ambience",
      title: "Salon Lounges",
      text: "Velvet booths, vinyl jazz, and candlelit cocktails to bookend your dinner.",
    },
  ];

  return (
    <section className="highlight-strip">
      {highlights.map((highlight) => (
        <article key={highlight.title} className="highlight-item">
          <span>{highlight.category}</span>
          <h3>{highlight.title}</h3>
          <p>{highlight.text}</p>
        </article>
      ))}
    </section>
  );
}

function GalleryShowcase() {
  const images = [
    {
      label: "Dining Room",
      url: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=900&q=80",
    },
    {
      label: "Plated Art",
      url: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
    },
    {
      label: "Wine Library",
      url: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=900&q=80",
    },
    {
      label: "Dessert Course",
      url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <section className="panel">
      <div className="panel-header">
        <h2>An Evening at Maison Aurelia</h2>
        <p>Preview the textures, lighting, and plating that shape our intimate dining experience.</p>
      </div>
      <div className="gallery-grid">
        {images.map((image) => (
          <article key={image.label} className="gallery-card">
            <img src={image.url} alt={image.label} />
            <span>{image.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

