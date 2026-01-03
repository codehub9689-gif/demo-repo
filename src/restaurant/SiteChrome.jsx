export function SiteHeader({ onNavigate, activeView }) {
  return (
    <header className="site-header">
      <div className="brand">
        <span className="brand-name">Maison Aurelia</span>
        <span className="brand-tagline">Fine Dining &amp; Wine Salon</span>
      </div>
    </header>
  );
}

function HeaderButton({ value, label, activeView, onNavigate }) {
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
      <span>© {new Date().getFullYear()} Maison Aurelia</span>
      <span>305 West Cedar Street, Portland • Tue–Sun 5PM–11PM</span>
      <span>Reservations: +1 (503) 555-0149 • hello@maisonaurelia.com</span>
    </footer>
  );
}

