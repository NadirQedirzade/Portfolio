import fs from "node:fs";
import path from "node:path";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Resume from "@/components/Resume";
import Footer from "@/components/Footer";

/**
 * Profile photo: drop a file named `profile.jpg` (or .jpeg / .png / .webp /
 * .avif) into /public/images and the hero picks it up. Until then the hero
 * shows a designed fallback frame. Looked up on the server so a missing file
 * never produces a 404 in the browser.
 */
function findPortrait(): string | undefined {
  for (const ext of ["jpg", "jpeg", "png", "webp", "avif"]) {
    const file = path.join(process.cwd(), "public", "images", `profile.${ext}`);
    if (fs.existsSync(file)) return `/images/profile.${ext}`;
  }
  return undefined;
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero portrait={findPortrait()} />
        <About />
        <Projects />
        <Achievements />
        <Resume />
      </main>
      <Footer />
    </>
  );
}
