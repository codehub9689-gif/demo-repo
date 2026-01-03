import { SiteFooter } from "./SiteChrome";

const coaches = [
  {
    name: "Jess Carter",
    title: "Head Coach · Performance Specialist",
    bio: "Former collegiate sprinter focusing on explosive power and metabolic conditioning. Jess programs our HIIT Ignite and Athletic Conditioning tracks.",
    certifications: ["CSCS", "PN Level 2", "USATF Level 1"],
  },
  {
    name: "Nina Patel",
    title: "Strength Lab Lead",
    bio: "Nina blends powerlifting principles with mobility diagnostics to help members lift heavier, move cleaner, and avoid burnout.",
    certifications: ["NASM-CPT", "FRC Mobility Specialist", "Pain-Free Performance"],
  },
  {
    name: "Elena Park",
    title: "Mobility & Recovery Coach",
    bio: "Elena rebuilds range of motion through intelligent flow, Pilates foundations, and breathwork patterns tailored for busy professionals.",
    certifications: ["RYT-500", "STOTT Pilates", "Breathwork Guide"],
  },
  {
    name: "Cal Hudson",
    title: "Combat Conditioning Coach",
    bio: "Cal spent a decade training fighters in Denver and brings that grit to our Box & Burn and Friday Finisher sessions.",
    certifications: ["USA Boxing Coach", "TRX Force", "Certified Kettlebell Coach"],
  },
  {
    name: "Liam Brooks",
    title: "Run & Mobility Specialist",
    bio: "Liam engineers progressive run plans and recovery protocols that keep endurance athletes fast, fresh, and injury-free.",
    certifications: ["RRCA Coach", "Functional Range Conditioning", "Precision Running"],
  },
  {
    name: "Marco Reyes",
    title: "Cycle & Endurance Lead",
    bio: "Marco pushes our cycle community with data-driven programming, cadence drills, and curated playlists that leave you buzzing.",
    certifications: ["ACE-CPT", "Stages Cycling Master Trainer", "Precision Nutrition L1"],
  },
];

const values = [
  {
    title: "Athlete-Centered Coaching",
    description: "We learn your training history, injuries, and goals before the warm-up even starts.",
  },
  {
    title: "Progressive Programming",
    description: "Monthly cycles balance intensity and recovery so you can train hard, sustainably.",
  },
  {
    title: "Data With Heart",
    description: "Wearables inform your zone work; coaches interpret the numbers and adapt on the fly.",
  },
];

export default function CoachesPage({ onNavigate }) {
  return (
    <main className="page coaches">
      <div className="content">
        <CoachesHero onNavigate={onNavigate} />
        <CoachGrid />
        <CoachingValues />
      </div>
      <SiteFooter />
    </main>
  );
}

function CoachesHero({ onNavigate }) {
  return (
    <section className="panel hero-panel">
      <div className="panel-header">
        <h2>Meet the PulseFit Coaching Collective</h2>
        <p>
          Industry-leading coaches who collaborate on every training block, so your experience feels
          customized from class one.
        </p>
      </div>
      <div className="section-actions">
        <button type="button" onClick={() => onNavigate("classes")}>
          Explore Weekly Classes
        </button>
        <button type="button" className="secondary" onClick={() => onNavigate("testimonials")}>
          Hear from Members
        </button>
      </div>
    </section>
  );
}

function CoachGrid() {
  return (
    <section className="panel coaches-panel">
      <div className="panel-header">
        <h2>Trainer Bios</h2>
        <p>
          Each coach brings a distinct specialty; together they deliver a training experience that covers
          every pillar of athletic longevity.
        </p>
      </div>
      <div className="coach-grid">
        {coaches.map((coach) => (
          <article key={coach.name} className="coach-card">
            <header>
              <h3>{coach.name}</h3>
              <span className="coach-title">{coach.title}</span>
            </header>
            <p>{coach.bio}</p>
            <ul className="coach-certifications">
              {coach.certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function CoachingValues() {
  return (
    <section className="panel values-panel">
      <div className="panel-header">
        <h2>How We Coach</h2>
        <p>
          Expect hands-on support, real-time feedback, and programming that keeps you performing at your
          peak.
        </p>
      </div>
      <div className="values-grid">
        {values.map((value) => (
          <article key={value.title}>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

