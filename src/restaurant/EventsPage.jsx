import { SiteFooter } from "./SiteChrome";

export default function EventsPage({ onNavigate }) {
  return (
    <main className="page events">
      <EventsHero onNavigate={onNavigate} />
      <EventShowcase />
      <PrivateDining />
      <SiteFooter />
    </main>
  );
}

function EventsHero({ onNavigate }) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <h1>Gatherings in the Maison Salon</h1>
        <p>
          Celebrate anniversaries, product launches, and intimate weddings in our velvet lounges and hidden garden.
          Curated menus, live jazz, and bespoke cocktails are crafted around your story.
        </p>
        <div className="cta-row">
          <button type="button" className="primary" onClick={() => onNavigate("contact")}>
            Plan Your Event
          </button>
          <button
            type="button"
            className="secondary"
            onClick={() => {
              const gallery = document.getElementById("event-gallery");
              if (gallery) {
                gallery.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            View Spaces
          </button>
        </div>
      </div>
      <div className="hero-visual">
        <img
          src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80"
          alt="Elegant dinner event setup"
        />
        <div className="hero-badge">
          <h3>Salon Capacity</h3>
          <p>Seated dinners for 24, cocktail receptions for up to 60 guests.</p>
        </div>
      </div>
    </section>
  );
}

function EventShowcase() {
  const events = [
    {
      name: "Cellar Tastings",
      date: "First Thursdays",
      description: "Exclusive pours from our reserve cellar accompanied by chef-created canapés.",
      image: "https://images.unsplash.com/photo-1438557068880-c5f474830377?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Live Jazz Suppers",
      date: "Second Saturdays",
      description: "Three-course prix fixe with Portland's top jazz ensembles playing sets all evening.",
      image: "https://images.unsplash.com/photo-1542736667-069246bdbc58?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Chef&apos;s Atelier",
      date: "Monthly Workshop",
      description: "Interactive cooking evening focused on French technique led by Chef Elise.",
      image: "https://images.unsplash.com/photo-1580915411954-282cb1c53a92?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <section className="panel">
      <div className="panel-header">
        <h2>Upcoming Experiences</h2>
        <p>Reserve limited seats or plan a private version of these signature events.</p>
      </div>
      <div className="events-grid">
        {events.map((event) => (
          <article key={event.name} className="event-card">
            <img src={event.image} alt={event.name} />
            <div className="event-body">
              <span>{event.date}</span>
              <h3 dangerouslySetInnerHTML={{ __html: event.name }} />
              <p>{event.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function PrivateDining() {
  const rooms = [
    {
      label: "Velvet Salon",
      url: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=900&q=80",
    },
    {
      label: "Garden Courtyard",
      url: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=900&q=80",
    },
    {
      label: "Chef&apos;s Counter",
      url: "https://images.unsplash.com/photo-1523983254932-2d0b3c02f826?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <section id="event-gallery" className="panel">
      <div className="panel-header">
        <h2>Private Dining Spaces</h2>
        <p>Each space is designed for a distinct atmosphere, from lively celebrations to discreet meetings.</p>
      </div>
      <div className="gallery-grid">
        {rooms.map((room) => (
          <article key={room.label} className="gallery-card">
            <img src={room.url} alt={room.label} />
            <span>{room.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

