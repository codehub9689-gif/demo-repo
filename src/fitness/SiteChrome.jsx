export function SiteHeader({ onNavigate, activeView }) {
  return (
    <header className="site-header">
      <div className="brand">
        <span className="brand-name">PulseFit Collective</span>
        <span className="brand-tagline">Strength. Stamina. Sustainability.</span>
      </div>
    </header>
  );
}

function NavButton({ label, value, activeView, onNavigate }) {
  const isActive = activeView === value;
  return (
    <button type="button" className={isActive ? "active" : undefined} onClick={() => onNavigate(value)}>
      {label}
    </button>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} PulseFit Collective</span>
      <span>2140 Blake Street, Denver, CO</span>
      <span>hello@pulsefit.co • (303) 555-0192</span>
    </footer>
  );
}

