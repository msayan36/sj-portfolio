import './style.css'
import Image from 'next/image'
import Link from "next/link";
import Footer from "../components/Footer"

const professional = () => {
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
    <section className='professional-section'>
        <h1>Professional Experience</h1>
        <div className="cont">
            <div className='text'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo soluta itaque in velit nulla nemo consectetur quam asperiores maxime, magnam ipsum hic dolorum libero deserunt labore ullam dignissimos ex dolores! Id, impedit necessitatibus omnis enim odit excepturi suscipit error facilis dignissimos amet vitae consequuntur, commodi aut incidunt iusto eius et asperiores debitis perferendis nisi, magni delectus dolores quibusdam. Aperiam illum, fuga asperiores architecto consectetur facere unde, hic voluptatum dolor tenetur officiis sequi? Saepe quia fugiat molestias voluptas, natus laudantium dolore commodi quo alias culpa ducimus fuga dignissimos unde nulla a libero, consequuntur atque aspernatur labore ratione eligendi quisquam ea quidem.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit quis odit ad aliquam dolorem! Omnis voluptas excepturi error, sed laborum aspernatur debitis repellendus vel repellat facilis accusantium velit ullam mollitia praesentium quaerat ducimus laudantium totam libero nulla dolorem earum! Odio, quaerat cumque debitis tenetur fugiat eaque vitae quos. Sint, laboriosam!</p> 
            </div>
            <ul class="list-component">
                <li class="__item">
                    <div class="card-component">
                        <div>
                            <h2 class="__year">2021 - Present</h2>
                            <h1 class="__title">Institute of Engineering & Managemant, Kolkata</h1>
                            <p class="__text">Assistant Professor</p>
                        </div>
                        <Image src="/iem_logo.png" width={120} height={80} alt="Image" className='card-img' />
                    </div>
                </li>
                <li class="__item">
                    <div class="card-component">
                        <div>
                            <h2 class="__year">2018 - 2021</h2>
                            <h1 class="__title">Jadavpur University</h1>
                            <p class="__text">Senior Research Fellow</p>
                        </div>
                        <Image src="/ju_logo.png" width={120} height={120} alt="Image" className='card-img' />
                    </div>
                </li>
                <li class="__item">
                    <div class="card-component">
                        <div>
                            <h2 class="__year">2016 - 2018</h2>
                            <h1 class="__title">Jadavpur University</h1>
                            <p class="__text">Junior Research Fellow</p>
                        </div>
                        <Image src="/ju_logo.png" width={120} height={120} alt="Image" className='card-img' />
                    </div>
                </li>
                <li class="__item">
                    <div class="card-component">
                        <div>
                            <h2 class="__year">2014 - 2016</h2>
                            <h1 class="__title">IBM India Pvt. Ltd.</h1>
                            <p class="__text">Application Developer</p>
                        </div>
                        <Image src="/IBM_logo.jpg" width={120} height={80} alt="Image" className='card-img' />
                    </div>
                </li>
            </ul>
        </div>
        <div className="organized">
            <h2>Conference / Seminar / FDP / Workshop</h2>
            <h3>Organized:</h3>
            <ul>
                <li>4 day workshop on “Remastering Python” at IEM (Gurukul Campus), Kolkata from 14 February 2022 to 17 February 2022.</li>
                <li>5 day workshop on “Remastering C Language” at IEM (Gurukul Campus), Kolkata from 17 October 2022 to 21 October 2022.</li>
                <li>“Feel The Drop” Coding Competition in colaboration with Newton School Coding Club on September 11, 2022 (Online).</li>
                <li>IEM-IETE Inaugural Ceremony & Distinguished Lecture by Prof. Dr. J. K. Mandal at IETE Kolkata Centre on 10 August 2022.</li>
                <li>International Conference on Computational Intelligence, Data Science and Cloud Computing – IEM-ICDC, December 22-23, 2021. (Online)</li>
            </ul>
            <h3>Delivered Talk / Paper Presented:</h3>
            <ul>
                <li>Delivered lecture and conducted hands on session in 3 Day Workshop on “Emerging Trends in Image Processing using MATLAB” organized by School of Education Technology, Jadavpur University held in December 19-21, 2022.</li>
                <li>Delivered talk on “Image Processing using MATLAB” in the FDP on “Understanding MATLAB” organized by IEM HRDC held in August 11-12, 2022. (Online)</li>
                <li>Presented paper in International Conference on Computational Intelligence, Data Science and Cloud Computing – IEM-ICDC, December 22-23, 2021. (Online)</li>
                <li>Presented paper in International Conference on Computational Intelligence, Data Science and Cloud Computing – IEM-ICDC, September 25-27, 2020. (Online)</li>
                <li>Presented paper in International Conference on Computational Intelligence, Data Science and Cloud Computing – IEM-ICDC, September 25-27, 2020. (Online)</li>
                <li>Presented paper in International Conference on Computer Science, Engineering, and Application - ICCSEA-2020, GIET University, Gunupur, India, March 13-14, 2020. (Online)</li>
                <li>Presented paper in International Conference on Computing, Power and Communication Technologies - GUCON 2019, Radisson Blu Hotel & Galgotias University, Greater Noida, NCR New Delhi, India, Sept. 27-28, 2019.</li>
                <li>Presented paper in International Conference on Computational Intelligence, Communications, and Business Analytics - CICBA 2018, Kalyani Government Engineering College, Kalyani, India, July 27-28, 2018.</li>
                <li>Invited Lecture for the Induction Program of UG Engineering 1st year at Jadavpur University in 2018.</li>
                <li>Presented paper in International Conference on Computer, Electrical & Communication Engineering - ICCECE 2017, Techno India University, Kolkata, India, Dec. 22-23, 2017.</li>
                <li>Presented paper in International Conference on Computational Intelligence, Communications, and Business Analytics - CICBA 2017, Calcutta Business School, Kolkata, India, March 24-25, 2017.</li>
                <li>Presented paper in International Conference on Applications and Innovations in Mobile Computing - AIMoC 2015, Jadavpur University, Kolkata, India, Feb. 12-14, 2015.</li>
            </ul>
            <h3>Participated:</h3>
            <ul>
                <li>One day Seminar on “Relevance of NEP and how it can be incorporated in engineering & management education” Institute of Engineering & Management, Kolkata, India, September 3, 2022.</li>
                <li>NAAC sponsored Webinar on “Innovative Teaching – Learning Practices pertaining to Sustainable Academic Growth in Higher Education Institutes”, Institute of Engineering & Management, Kolkata, India, September 1-2, 2021.</li>
                <li>FDP on “IoT & Cyber Security”, Institute of Engineering & Management, Kolkata, India. June 21-25, 2021.</li>
                <li>Webinar on Scientific Writing for Journals, Springer Nature in Collaboration with Jadavpur University, July. 30, 2020.</li>
                <li>Workshop on Writing Quality Research Articles for Publications, Jadavpur University, Kolkata, India, Jan. 13-14, 2020.</li>
                <li>One-week Short Term Course on “A pragmatic approach towards Machine Learning”, Jadavpur University, Kolkata, India, Jan. 3-9, 2020.</li>
                <li>2-day workshop on SAS Programming and SAS Predictive Modeling, Institute of Business Management, Kolkata, India, Nov. 16-17, 2018.</li>
                <li>International Seminar on Computational Intelligence, Jadavpur University, Kolkata, India, Dec. 16, 2017.</li>
                <li>Workshop on Fire Safety Protection & Uses of Fire Extinguishers, Jadavpur University,Kolkata, India, March 31, 2017.</li>
                <li>Third Student Conference on The Future University: Access, Quality, Relevance, Jadavpur University, Kolkata, India, July 14 - 15, 2016.</li>
                <li>Second Academic Conference on Breaking Boundaries: Interdisciplinary, E-learning, and Universities without Walls, Jadavpur University, Kolkata, India, Jan. 7 - 8, 2016.</li>
            </ul>
        </div>
    </section>
    <Footer />
    </>
  )
}

export default professional