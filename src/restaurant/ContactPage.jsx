import { SiteFooter } from "./SiteChrome";

export default function ContactPage() {
  return (
    <main className="page contact">
      <ReservationIntro />
      <ReservationForm />
      <GuestNotes />
      <SiteFooter />
    </main>
  );
}

function ReservationIntro() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <h1>Reserve Your Evening</h1>
        <p>
          Dinner service Tuesday through Sunday beginning at 5PM. Kindly reach out for parties larger than six or
          to secure the private salon.
        </p>
        <div className="cta-row">
          <button
            type="button"
            className="primary"
            onClick={() => window.open("tel:+15035550149")}
          >
            Call Reservations
          </button>
          <button
            type="button"
            className="secondary"
            onClick={() => window.open("mailto:hello@maisonaurelia.com")}
          >
            Email Concierge
          </button>
        </div>
      </div>
      <div className="hero-visual">
        <img
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=80"
          alt="Restaurant interior with warm lighting"
        />
        <div className="hero-badge">
          <h3>Concierge Hours</h3>
          <p>Reservations team available 11AM–7PM daily.</p>
        </div>
      </div>
    </section>
  );
}

function ReservationForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Merci! Our concierge will confirm within the next few hours.");
  };

  return (
    <section className="panel reservations">
      <div className="panel-header">
        <h2>Request a Reservation</h2>
        <p>Complete the form to begin planning. A member of our team will reach out to confirm details.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" placeholder="Your full name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="you@example.com" required />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" placeholder="+1 (___) ___-____" required />
        </label>
        <label>
          Guests
          <select name="guests">
            <option value="2">2 guests</option>
            <option value="3">3 guests</option>
            <option value="4">4 guests</option>
            <option value="5">5 guests</option>
            <option value="6">6 guests</option>
            <option value="private">Private salon (7+)</option>
          </select>
        </label>
        <label>
          Preferred Date
          <input type="date" name="date" required />
        </label>
        <label>
          Preferred Time
          <input type="time" name="time" required />
        </label>
        <label>
          Notes
          <textarea name="notes" placeholder="Dietary needs, celebration details, or seating requests." />
        </label>
        <button type="submit">Submit Request</button>
      </form>
    </section>
  );
}

function GuestNotes() {
  const notes = [
    {
      title: "Dress Code",
      description: "Elegant casual – jackets encouraged, denim welcomed, athletic wear kindly declined.",
    },
    {
      title: "Parking",
      description: "Valet service available after 5PM; street parking complimentary Sundays.",
    },
    {
      title: "Cancellations",
      description: "Please notify us 24 hours in advance to avoid a $25 per guest late cancellation fee.",
    },
  ];

  return (
    <section className="panel">
      <div className="panel-header">
        <h2>Guest Etiquette &amp; Notes</h2>
        <p>These guidelines help us craft a seamless evening for you and your guests.</p>
      </div>
      <div className="highlight-strip">
        {notes.map((note) => (
          <article key={note.title} className="highlight-item">
            <span>Maison Notes</span>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

