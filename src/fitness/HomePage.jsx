import { SiteFooter } from "./SiteChrome";

export default function HomePage({ onNavigate }) {
  return (
    <main className="page home">
      <div className="content">
        <HeroSection onNavigate={onNavigate} />
        <FocusPillarsSection />
        <SchedulePreviewSection onNavigate={onNavigate} />
        <SuccessStoriesSection />
      </div>
      <SiteFooter />
    </main>
  );
}

function HeroSection({ onNavigate }) {
  return (
    <section className="hero panel">
      <div className="hero-copy">
        <h1>Train Smarter with Coaches Who Know Your Name</h1>
        <p>
          PulseFit Collective blends elite coaching, data-driven programming, and a community that shows
          up for each other—on the floor, on the track, and online.
        </p>
        <div className="hero-actions">
          <button type="button" onClick={() => onNavigate("classes")}>
            View Class Schedule
          </button>
          <button type="button" className="secondary" onClick={() => onNavigate("membership")}>
            Membership Options
          </button>
        </div>
      </div>
      <div className="hero-board">
        <div className="board-card">
          <span className="card-title">This Week&apos;s Highlights</span>
          <ul>
            <li>Strength Lab — Progressive Deadlift Waves</li>
            <li>Recovery Lab — Mobility for Desk Athletes</li>
            <li>Run Club — Tempo Intervals at Sloan&apos;s Lake</li>
          </ul>
        </div>
        <div className="board-note">
          “I PR’d my squat and felt supported every rep. The coaching is unmatched.” — Alex M.
        </div>
      </div>
    </section>
  );
}

function FocusPillarsSection() {
  const pillars = [
    {
      title: "Strength",
      description: "Foundational barbell work, unilateral power, and strong posture for daily life.",
      detail: "Expect custom progressions, form checks, and tracked personal records.",
    },
    {
      title: "Conditioning",
      description: "Intervals, sleds, rowers, and explosive circuits to build capacity without burnout.",
      detail: "We program effort zones using heart-rate data from your wearables.",
    },
    {
      title: "Recovery",
      description: "Mobility labs, breathwork, and recovery lounge access to keep you performing.",
      detail: "Every coaching block includes deload weeks and individualized cooldown protocols.",
    },
  ];

  return (
    <section className="panel pillars-panel">
      <div className="panel-header">
        <h2>The PulseFit Method</h2>
        <p>An intentional mix of strength, conditioning, and recovery that meets you where you are.</p>
      </div>
      <div className="pillars-grid">
        {pillars.map((pillar) => (
          <article key={pillar.title}>
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
            <span>{pillar.detail}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function SchedulePreviewSection({ onNavigate }) {
  const preview = [
    { day: "Mon", className: "HIIT Ignite", coach: "Jess", time: "6:30 AM" },
    { day: "Tue", className: "Cycle Sprints", coach: "Marco", time: "7:00 AM" },
    { day: "Wed", className: "MetCon Core", coach: "Nina", time: "6:00 AM" },
    { day: "Thu", className: "Power Flow", coach: "Elena", time: "6:45 AM" },
    { day: "Fri", className: "Mobility Reset", coach: "Liam", time: "12:00 PM" },
  ];

  return (
    <section className="panel schedule-preview">
      <div className="panel-header">
        <h2>Weekly Rhythm</h2>
        <p>
          Reserve classes in the app up to two weeks out. New members get a complimentary 1:1 onboarding
          session.
        </p>
      </div>
      <div className="schedule-preview-grid">
        {preview.map((item) => (
          <article key={item.className}>
            <span className="preview-day">{item.day}</span>
            <h3>{item.className}</h3>
            <span className="preview-time">{item.time}</span>
            <span className="preview-coach">Coach {item.coach}</span>
          </article>
        ))}
      </div>
      <div className="section-actions">
        <button type="button" onClick={() => onNavigate("classes")}>
          Full Class Schedule
        </button>
      </div>
    </section>
  );
}

function SuccessStoriesSection() {
  const stories = [
    {
      name: "Taylor · Entrepreneur",
      result: "Down 5% body fat and up 40 lb on deadlift in 16 weeks.",
    },
    {
      name: "Maya · Nurse Practitioner",
      result: "Recovered from shoulder injury and now hits handstand push-ups confidently.",
    },
    {
      name: "Evan · Ultra Runner",
      result: "Cut 12 minutes off 50K time with hybrid strength + endurance block.",
    },
  ];

  return (
    <section className="panel stories-panel">
      <div className="panel-header">
        <h2>Momentum that Sticks</h2>
        <p>Our members stay consistent because they’re supported at every step. Here’s proof.</p>
      </div>
      <div className="stories-grid">
        {stories.map((story) => (
          <article key={story.name}>
            <h3>{story.name}</h3>
            <p>{story.result}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

