import './style.css'
import Link from "next/link";
import Footer from "../components/Footer"
import AchievementsList from "../components/AchievementsList";

const index = () => {
  return (
    <>
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
    <section className='achievements-section'>
        <h1>Awards And Achievements</h1>
        <AchievementsList date="2022" title="Established IETE Students’ Forum at IEM, Kolkata and acting as a Faculty Coordinator of this student chapter" link="/" />
        <AchievementsList date="2022" title="Promoted to Assistant HoD of Computer Science & Engineering (IoT) from 1st September 2022" link="/" />
        <AchievementsList date="2021-23" title="Invited Guest Faculty in School of Education Technology, Jadavpur University, Kolkata" link="/" />
        <AchievementsList date="2016-17" title="Invited Guest Faculty in National Institute of Electronics & Information Technology, Kolkata" link="/" />
        <AchievementsList date="2015" title="Deep Skill Adder for demonstrating the practice: Share Expertise in IBM India Pvt. Ltd." link="/" />
        <AchievementsList date="2015" title="The Best of IBM Honour for contribution towards the Policy Center Project in IBM India Pvt. Ltd." link="/" />
        <AchievementsList date="2015" title="Manager’s Choice Award for demonstrating the practice: Show Personal Interest in IBM India Pvt. Ltd." link="/" />
        <AchievementsList date="2015" title="Manager’s Choice Award for demonstrating the practice: Put the Client First in IBM India Pvt. Ltd." link="/" />
        <AchievementsList date="2014" title="Ranked 2nd in University" link="/" />
        <AchievementsList date="2012" title="Qualified GATE in Computer Science" link="/" />
        <AchievementsList date="2008-2011" title="MCM Scholarship from Govt. of West Bengal in consecutive 4 years of B. Tech" link="/" />
        <AchievementsList date="2008-2011" title="Full/Half Free Studentship in consecutive 4 years of B. Tech for being in TOP 6 position" link="/" />
    </section>
    <Footer />
    </>
  )
}

export default index