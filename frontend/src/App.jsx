import { useState } from "react"
import { Navbar } from "./screens/Navbar";
import { HeroSection } from "./screens/HeroSection";
import { StatusSection } from "./screens/StatusSection";
import { OfferSection } from "./screens/OfferSection";
import { AppUsers } from "./screens/AppUsers";

function App() {

  return (
   <div className="py-3 px-5">
    <Navbar/>
    <HeroSection/>
    <StatusSection/>
    <OfferSection/>
    <AppUsers/>
   </div>
  )
}

export default App
