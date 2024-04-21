import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Research from "./components/Research"
import Teaching from "./components/Teaching"
import Professional from "./components/Professional"
import Academics from "./components/Academics"
import Achievements from "./components/Achievements"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* <Hero /> */}
      {/* <Research /> */}
      {/* <Teaching /> */}
      {/* <Professional /> */}
      {/* <Academics /> */}
      <Achievements />
      <Footer />
    </main>
  );
}
