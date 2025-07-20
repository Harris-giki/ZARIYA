import { createRoot } from "react-dom/client";
import "./index.css";
import Hero from "./components/Hero.jsx";
import { JoinUs } from "./components/JoinUs.jsx";
import { BackgroundBeams } from "../ui/background-beams.jsx";
import { Footer } from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <div className="min-h-screen relative">
    {/* Background Beams - Global across all pages */}
    <BackgroundBeams />

    {/* Main Content - positioned relatively to appear above background */}
    <div className="relative z-10">
      <Hero />
      <JoinUs />
      <Footer />
    </div>
  </div>
);
