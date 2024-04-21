import Image from "next/image";
import './style.css'

const index = () => {
  return (
    <section className='teaching-section'>
        <div className="teaching-hero">
            <div className="teaching-img">
                <div className="teaching-img-cont"></div>
                <Image className="img-teach" src="/teach.svg" width={350} height={350} alt="Image" />
            </div>
            <div className="teaching-txt">
                <h1>Teaching</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quia voluptatem beatae eius, inventore ipsum alias amet quod delectus veritatis placeat aspernatur consequatur magni consequuntur optio nemo unde laudantium molestiae! Facere repudiandae, voluptas hic veritatis ipsum voluptatibus dignissimos accusamus, sint voluptatum obcaecati explicabo et placeat perferendis delectus, nihil quisquam qui.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quia voluptatem beatae eius, inventore ipsum alias amet quod delectus veritatis placeat aspernatur consequatur magni consequuntur optio nemo unde laudantium molestiae! Facere repudiandae, voluptas hic veritatis ipsum voluptatibus dignissimos accusamus, sint voluptatum obcaecati explicabo et placeat perferendis delectus, nihil quisquam qui.</p>
            </div>
        </div>
        <div className="teaching-topics">
            <h2>Teaching Topics</h2>
            <div className="teaching-subjects">
                <ul>
                    <li>Digital Image Processing</li>
                    <li>Data Science</li>
                    <li>Big Data Analytics</li>
                    <li>Machine Learning</li>
                    <li>Database Management System</li>
                    <li>Human Computer Interaction</li>
                </ul>
                <ul>
                    <li>C Language</li>
                    <li>Java</li>
                    <li>Android Progranmming</li>
                    <li>Data Structure & Algorithms</li>
                    <li>Design and Analysis of Algorithm</li>
                    <li>Operating System</li>
                </ul>
                <ul>
                    <li>Compiler Design</li>
                    <li>Multimedia Technology</li>
                    <li>Computer Networks</li>
                    <li>MATLAB</li>
                    <li>Python</li>
                    <li>Web Technology</li>
                </ul>
            </div>
            <h2>Knowledge Repository</h2>
            <div className="repo">
                <div className="repo-indi">
                    <p style={{color: "#007078", fontWeight: "800", marginBottom: "10px", paddingTop:"2rem", paddingRight: "1rem", paddingLeft: "1rem", fontSize: "1.2rem"}}>Begineer's Guide to MySQL</p>
                    <div style={{cursor: "pointer", backgroundColor: "#007078", color: "#fff", width: "100%", marginTop: "2rem", display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <p style={{margin: "5px auto"}}>Link</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default index