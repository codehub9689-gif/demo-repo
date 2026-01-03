import { SiteFooter } from "./SiteChrome";

const schedule = [
  {
    day: "Monday",
    classes: [
      { time: "6:30 AM", name: "HIIT Ignite", coach: "Jess Carter" },
      { time: "12:00 PM", name: "Mobility Reset", coach: "Liam Brooks" },
      { time: "6:00 PM", name: "Strength Lab", coach: "Nina Patel" },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      { time: "7:00 AM", name: "Cycle Sprints", coach: "Marco Reyes" },
      { time: "5:30 PM", name: "Athletic Conditioning", coach: "Jess Carter" },
      { time: "7:00 PM", name: "Box & Burn", coach: "Cal Hudson" },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      { time: "6:00 AM", name: "MetCon Core", coach: "Nina Patel" },
      { time: "12:15 PM", name: "Reformer Fusion", coach: "Elena Park" },
      { time: "6:30 PM", name: "Run Club Intervals", coach: "Liam Brooks" },
    ],
  },
  {
    day: "Thursday",
    classes: [
      { time: "6:45 AM", name: "Power Flow", coach: "Elena Park" },
      { time: "5:45 PM", name: "Strength Lab", coach: "Nina Patel" },
      { time: "7:15 PM", name: "Cycle Sprints", coach: "Marco Reyes" },
    ],
  },
  {
    day: "Friday",
    classes: [
      { time: "6:15 AM", name: "HIIT Ignite", coach: "Jess Carter" },
      { time: "12:00 PM", name: "Mobility Reset", coach: "Liam Brooks" },
      { time: "5:30 PM", name: "Friday Finisher", coach: "Cal Hudson" },
    ],
  },
  {
    day: "Saturday",
    classes: [
      { time: "8:30 AM", name: "Strength Lab", coach: "Nina Patel" },
      { time: "10:00 AM", name: "Sweat + Stretch", coach: "Elena Park" },
      { time: "11:30 AM", name: "Community Conditioning", coach: "Guest Coach" },
    ],
  },
];

export default function ClassesPage({ onNavigate }) {
  return (
    <main className="page classes">
      <div className="content">
        <ScheduleHero onNavigate={onNavigate} />
        <ScheduleTable />
        <DropInInfo />
      </div>
      <SiteFooter />
    </main>
  );
}

function ScheduleHero({ onNavigate }) {
  return (
    <section className="panel hero-panel">
      <div className="panel-header">
        <h2>Your Week, Powered by PulseFit</h2>
        <p>
          Programming that balances strength, conditioning, and recovery so you build a resilient body
          without burning out.
        </p>
      </div>
      <div className="section-actions">
        <button type="button" onClick={() => onNavigate("membership")}>
          View Memberships
        </button>
        <button type="button" className="secondary" onClick={() => onNavigate("coaches")}>
          Meet the Coaches
        </button>
      </div>
    </section>
  );
}

function ScheduleTable() {
  return (
    <section className="panel schedule-panel">
      <div className="panel-header">
        <h2>Signature Class Schedule</h2>
        <p>
          Reserve through the PulseFit app up to two weeks in advance. Waitlists move quickly—we follow
          up with a text the moment you clear.
        </p>
      </div>
      <div className="schedule-grid">
        {schedule.map((day) => (
          <article key={day.day} className="schedule-column">
            <h3>{day.day}</h3>
            <ul>
              {day.classes.map((item) => (
                <li key={`${day.day}-${item.time}`}>
                  <span className="schedule-time">{item.time}</span>
                  <div>
                    <span className="schedule-name">{item.name}</span>
                    <span className="schedule-coach">{item.coach}</span>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function DropInInfo() {
  return (
    <section className="panel dropin-panel">
      <div className="panel-header">
        <h2>Drop-In or Book a Private Session</h2>
        <p>
          New to PulseFit? Your first class is free. Visiting athletes can reserve a private training
          block with any coach outside of group hours.
        </p>
      </div>
      <div className="dropin-grid">
        <article>
          <h3>First-Timer Essentials</h3>
          <ul>
            <li>Arrive 15 minutes early for movement prep.</li>
            <li>Grab a heart-rate monitor at the front desk.</li>
            <li>We tailor progressions to every level.</li>
          </ul>
        </article>
        <article>
          <h3>Private Coaching Blocks</h3>
          <ul>
            <li>60-minute sessions customized to your goals.</li>
            <li>Strength assessments and mobility labs.</li>
            <li>Schedule via concierge@pulsefit.co.</li>
          </ul>
        </article>
        <article>
          <h3>Community Events</h3>
          <ul>
            <li>Monthly skills workshops and recovery labs.</li>
            <li>Run club meetups every Wednesday evening.</li>
            <li>Member socials every first Friday.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

