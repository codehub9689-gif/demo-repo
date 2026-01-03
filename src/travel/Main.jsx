import { useState } from "react";
import HomePage from "./HomePage";
import DestinationsPage from "./DestinationsPage";
import JourneysPage from "./JourneysPage";
import ContactPage from "./ContactPage";
import { SiteHeader } from "./SiteChrome";
import "./travel.css";

const views = [
  <HomePage />,
  <DestinationsPage />,
  <JourneysPage />,
  <ContactPage />,

]
const navs = [
  "Home",
  "Dest",
  "Journey",
  "Contact",
]


export default function Main() {
  const [activeView, setActiveView] = useState(2)
  return (
    <div className="app">
      <header style={{display:"flex", justifyContent:"space-evenly", width:"100vw"}}>
        {navs.map((ele,i)=><div onClick={()=>setActiveView(i)} key={i}>{ele}</div>)}
      </header>
        {
          views[activeView]
        }
    </div>
  );
}
