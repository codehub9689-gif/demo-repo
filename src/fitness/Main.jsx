import { useState } from "react";
import HomePage from "./HomePage";
import ClassesPage from "./ClassesPage";
import CoachesPage from "./CoachesPage";
import TestimonialsPage from "./TestimonialsPage";
import MembershipPage from "./MembershipPage";
import { SiteHeader } from "./SiteChrome";
import "./fitness.css";

const views = {
  home: HomePage,
  classes: ClassesPage,
  coaches: CoachesPage,
  testimonials: TestimonialsPage,
  membership: MembershipPage,
};

export default function Main() {
  const [activeView, setActiveView] = useState("home");
  const ActiveViewComponent = views[activeView];

  return (
    <div className="fitness-app">
        hello
    </div>
  );
}

