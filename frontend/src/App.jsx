import { useState } from "react"
import { Navbar } from "./screens/Navbar";
import { HeroSection } from "./screens/HeroSection";
import { StatusSection } from "./screens/StatusSection";
import { OfferSection } from "./screens/OfferSection";
import { AppUsers } from "./screens/AppUsers";
import { CoachingDescription } from "./screens/CoachingDescription";

function App() {

  return (
   <div className="py-3 px-5">
    <Navbar/>
    <HeroSection/>
    <StatusSection/>
    <OfferSection/>
    <AppUsers/>
    <CoachingDescription/>
   </div>
  )
}

export default App
