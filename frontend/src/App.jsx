import { useState } from "react"
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { StatusSection } from "./components/StatusSection";

function App() {

  return (
   <div className="py-3 px-5">
    <Navbar/>
    <HeroSection/>
    <StatusSection/>
   </div>
  )
}

export default App
