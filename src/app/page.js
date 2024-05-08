import Link from "next/link"
import "./style.css"
import Footer from "./components/Footer"
import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaGoogleScholar, FaResearchgate, FaOrcid } from "react-icons/fa6";
import { SiPublons } from "react-icons/si";

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <Link href="/">
          <h1 className="title">Dr. Susovan Jana</h1>
        </Link>
        <ul className="menu">
            <li>
              <Link href="/teaching">
                Teaching
              </Link>
            </li>
            <li>
              <Link href="/research">
                Research
              </Link>
            </li>
            <li>
              <Link href="/experience">
                Experience
              </Link>
            </li>
            <li>
              <Link href="/academics">
                Academics
              </Link>
            </li>
            <li>
              <Link href="/achievements">
                Achievements
              </Link>
            </li>
            <li>
              <a href="#contact">
                Contact
              </a>
            </li>
        </ul>
      </nav>
      <section className="hero-section">
        <div className="hero-section-txt">
            <h1>Dr. Susovan Jana</h1>
            <div>
                <h2>Assistant Professor & Assistant HoD</h2>
                <h2>Department of Computer Science & Engineering (IoT)</h2>
                <h2>Institute of Engineering & Management, Kolkata, India</h2>
            </div>
            <p>“Talk to yourself at least once in a Day, otherwise you may miss a meeting with an EXCELLENT person in this World.” - Swami Vivekananda</p>
            <button className="cv">Academic CV</button>
            <div className="socials">
                <IoMdMail />
                <FaLinkedin />
                <FaGithub />
            </div>
        </div>
        <div className="hero-section-img">
            <Image src="/pp.jpg" width={350} height={350} alt="Image" />
            <div className="research-icons">
                <FaGoogleScholar />
                <FaResearchgate />
                <FaOrcid />
                <SiPublons />
            </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}