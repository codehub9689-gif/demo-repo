import { SiteFooter } from "./SiteChrome";

const tiers = [
  {
    name: "Foundation",
    price: "$149/mo",
    description: "Ideal for busy professionals jumping back into consistent training.",
    perks: [
      "8 group classes per month",
      "Quarterly goal review with a coach",
      "Access to the PulseFit mobile app",
      "Studio recovery lounge on class days",
    ],
  },
  {
    name: "Unlimited",
    price: "$219/mo",
    description: "Our most popular tier for members who crave variety and momentum.",
    perks: [
      "Unlimited group classes",
      "Monthly body comp scan and mobility screening",
      "Complimentary guest pass every quarter",
      "Priority registration for workshops",
    ],
  },
  {
    name: "Elite",
    price: "$329/mo",
    description: "For athletes who want full-spectrum coaching and custom programming.",
    perks: [
      "Unlimited group classes",
      "2 private coaching sessions monthly",
      "Personalized training roadmap and nutrition check-ins",
      "Concierge scheduling and event invites",
    ],
  },
];

const faqs = [
  {
    question: "Can I pause my membership?",
    answer:
      "Absolutely. You can freeze for up to 60 days per year for travel, recovery, or life events. Just give us a 7-day heads up.",
  },
  {
    question: "Do you offer corporate or partner rates?",
    answer:
      "Yes—we offer partner perks for teams enrolling three or more members. Email partnerships@pulsefit.co to get started.",
  },
  {
    question: "What if I’m new to strength training?",
    answer:
      "Our onboarding includes a movement screen and custom progressions. Coaches stay with you through every class.",
  },
];

export default function MembershipPage({ onNavigate }) {
  return (
    <main className="page membership">
      <div className="content">
        <MembershipHero onNavigate={onNavigate} />
        <MembershipTiers />
        <MembershipPerks />
        <MembershipFaq />
      </div>
      <SiteFooter />
    </main>
  );
}

function MembershipHero({ onNavigate }) {
  return (
    <section className="panel hero-panel">
      <div className="panel-header">
        <h2>Choose the Membership That Matches Your Momentum</h2>
        <p>
          Every tier includes small-group coaching, recovery tools, and accountability touchpoints.
          Upgrade or pause anytime.
        </p>
      </div>
      <div className="section-actions">
        <button type="button" onClick={() => onNavigate("classes")}>
          Explore the Schedule
        </button>
        <button type="button" className="secondary" onClick={() => onNavigate("testimonials")}>
          See Member Stories
        </button>
      </div>
    </section>
  );
}

function MembershipTiers() {
  return (
    <section className="panel membership-panel">
      <div className="panel-header">
        <h2>Membership Tiers</h2>
        <p>Pick the plan that fits your training rhythm. Scale up or down with a single text.</p>
      </div>
      <div className="membership-grid">
        {tiers.map((tier) => (
          <article key={tier.name} className="membership-card">
            <header>
              <h3>{tier.name}</h3>
              <span className="membership-price">{tier.price}</span>
            </header>
            <p>{tier.description}</p>
            <ul>
              {tier.perks.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
            <button type="button" className="membership-cta">
              Start Membership
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function MembershipPerks() {
  const perks = [
    {
      title: "Recovery Lounge",
      description: "Normatec compression, cold plunge, and mobility tools available daily.",
    },
    {
      title: "Training Analytics",
      description:
        "Heart-rate data, volume tracking, and PR dashboards that sync with your wearables.",
    },
    {
      title: "Community Access",
      description: "Private Slack channels, accountability pods, and monthly socials.",
    },
  ];

  return (
    <section className="panel highlight-panel">
      <div className="panel-header">
        <h2>All Members Receive</h2>
        <p>Support that keeps you consistent and progressing between every session.</p>
      </div>
      <div className="highlight-grid">
        {perks.map((perk) => (
          <article key={perk.title}>
            <h3>{perk.title}</h3>
            <p>{perk.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function MembershipFaq() {
  return (
    <section className="panel faq-panel">
      <div className="panel-header">
        <h2>Membership FAQs</h2>
        <p>Still curious? We’re one message away at hello@pulsefit.co.</p>
      </div>
      <div className="faq-list">
        {faqs.map((faq) => (
          <article key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

