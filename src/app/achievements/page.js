import './style.css'
import Link from "next/link";
import Footer from "../components/Footer"

const index = () => {
  return (
    <>
    <nav className="navbar">
        <Link href="/">
          <h1 className="title">Susovan Jana</h1>
        </Link>
        <ul className="menu">
            <li>
              <Link href="/research">
                Research
              </Link>
            </li>
            <li>
              <Link href="/teaching">
                Teaching
              </Link>
            </li>
            <li>
              <Link href="/professional">
                Professional
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
    <section className='achievements-section'>
        <h1>Awards And Achievements</h1>
        <section id="awards" class="awards_achievements">
          <ul>
            <li>
              <p class="a_year">Year</p>
              <p class="a_body">Awards & Achievements</p>
            </li>
            <li>
              <p class="aca_year">2018</p>
              <p>
                Invited Lecture for the Induction Programme of UG Engineering
                1st year, Jadavpur University
              </p>
            </li>
            <li>
              <p class="aca_year">2016-17</p>
              <p>
                Invited Guest Faculty in National Institute of Electronics &
                Information Technology, Kolkata
              </p>
            </li>
            <li>
              <p class="aca_year">2015</p>
              <p>
                Deep Skill Adder for demonstrating the practice: Share Expertise
                in IBM India Pvt. Ltd.
              </p>
            </li>
            <li>
              <p class="aca_year">2015</p>
              <p>
                The Best of IBM Honour for contribution towards the Policy
                Center Project in IBM India Pvt. Ltd.
              </p>
            </li>
            <li>
              <p class="aca_year">2015</p>
              <p>
                Manager’s Choice Award for demonstrating the practice: Show
                Personal Interest in IBM India Pvt. Ltd.
              </p>
            </li>
            <li>
              <p class="aca_year">2015</p>
              <p>
                Manager’s Choice Award for demonstrating the practice: Put the
                Client First in IBM India Pvt. Ltd.
              </p>
            </li>
            <li>
              <p class="aca_year">2014</p>
              <p>Ranked 2nd in University</p>
            </li>
            <li>
              <p class="aca_year">2012</p>
              <p>Qualified GATE in Computer Science</p>
            </li>
            <li>
              <p class="aca_year">2008-11</p>
              <p>
                MCM Scholarship from Govt. of West Bengal in consecutive 4 years
                of B. Tech
              </p>
            </li>
            <li>
              <p class="aca_year">2008-11</p>
              <p>
                Full/Half Free Studentship in consecutive 4 years of B. Tech for
                being in TOP 6 position
              </p>
            </li>
          </ul>
        </section>
    </section>
    <Footer />
    </>
  )
}

export default index