import { useState } from "react";
import HomePage from "./HomePage";
import MenuPage from "./MenuPage";
import EventsPage from "./EventsPage";
import ContactPage from "./ContactPage";
import { SiteHeader } from "./SiteChrome";
import "./restaurant.css";

const views = {
  home: HomePage,
  menu: MenuPage,
  events: EventsPage,
  contact: ContactPage,
};

export default function Main() {
  const [activeView, setActiveView] = useState("home");

  return (
    <div className="app">
      <div className="shell">
        <SiteHeader onNavigate={setActiveView} activeView={activeView} />
        hello
      </div>
    </div>
  );
}

