export function SiteHeader({ onNavigate, activeView }) {
  return (
    <header className="site-header">
      <div className="brand">
        <span className="brand-name">Aeris Routes</span>
        <span className="brand-tagline">Curated escapes for the modern wanderer</span>
      </div>
      <nav>
        
      </nav>
    </header>
  );
}

function NavButton({ label, value, activeView, onNavigate }) {
  const isActive = activeView === value;
  return (
    <button
      type="button"
      className={isActive ? "active" : undefined}
      onClick={() => onNavigate(value)}
    >
      {label}
    </button>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} Aeris Routes Journeys</span>
      <span>Crafting immersive escapes across 32 countries</span>
      <span>hello@aerisroutes.com • +1 (555) 284-7284</span>
    </footer>
  );
}

